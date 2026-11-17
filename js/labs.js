/* ==========================================================================
   Book 3B Interactive HTML5 Canvas Physics Laboratories (Labs 1 – 7)
   Supports Retina HiDPI, Desktop Mouse & iPad Touch, Web Audio Preview
   ========================================================================== */

(function () {
  let activeAnimId = null;
  let audioCtx = null;
  let currentLabCleanup = null;

  function stopCurrentLab() {
    if (activeAnimId) {
      cancelAnimationFrame(activeAnimId);
      activeAnimId = null;
    }
    if (typeof currentLabCleanup === 'function') {
      currentLabCleanup();
      currentLabCleanup = null;
    }
  }

  function setupHiDPICanvas(canvas, logicalW, logicalH) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  // Convert visible wavelength (400–700 nm) to vivid RGB string
  function wavelengthToRGB(nm, alpha) {
    let r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) {
      r = -(nm - 440) / (440 - 380); g = 0; b = 1;
    } else if (nm >= 440 && nm < 490) {
      r = 0; g = (nm - 440) / (490 - 440); b = 1;
    } else if (nm >= 490 && nm < 510) {
      r = 0; g = 1; b = -(nm - 510) / (510 - 490);
    } else if (nm >= 510 && nm < 580) {
      r = (nm - 510) / (580 - 510); g = 1; b = 0;
    } else if (nm >= 580 && nm < 645) {
      r = 1; g = -(nm - 645) / (645 - 580); b = 0;
    } else if (nm >= 645 && nm <= 750) {
      r = 1; g = 0; b = 0;
    }
    const R = Math.round(r * 255);
    const G = Math.round(g * 255);
    const B = Math.round(b * 255);
    return alpha !== undefined ? `rgba(${R},${G},${B},${alpha})` : `rgb(${R},${G},${B})`;
  }

  function drawArrow(ctx, x1, y1, x2, y2, color, width) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len < 2) return;
    const angle = Math.atan2(dy, dx);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width || 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    const head = 7;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  const LAB_DEFS = [
    /* ----------------------------------------------------------------------
       LAB 1: Transverse vs Longitudinal & v = fλ
       ---------------------------------------------------------------------- */
    {
      id: 'lab1',
      badge: 'Ch.4 · 4.1 & 4.2',
      title: '实验 1：横波 vs 纵波粒子追踪与 v = fλ',
      mission: '🎯 探究任务：① 盯住那颗<strong>红色标记质点 P</strong>，验证无论波形向右跑多快，质点只在原地平衡位置附近往返振动；② 保持介质波速 v 不变，把频率 f 调大一倍，观察波长 λ 是否立即减半！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab1"></canvas></div>
          <div class="lab-readout-strip" id="r-lab1"></div>
          <div class="lab-controls-grid">
            <div class="control-group">
              <label><span>波动模式 Wave Type</span></label>
              <div style="display:flex;gap:6px;">
                <button class="secondary-btn active-mode-btn" id="l1-trans" style="flex:1;border-color:var(--brand-primary);font-weight:700;">横波 Transverse</button>
                <button class="secondary-btn" id="l1-long" style="flex:1;">纵波 Longitudinal</button>
              </div>
            </div>
            <div class="control-group">
              <label><span>振源频率 f</span><span id="l1-f-val">1.5 Hz</span></label>
              <input type="range" id="l1-f" min="0.5" max="3.0" step="0.25" value="1.5" />
            </div>
            <div class="control-group">
              <label><span>介质波速 v（由介质决定）</span><span id="l1-v-val">4.5 m s⁻¹</span></label>
              <input type="range" id="l1-v" min="2.0" max="7.5" step="0.5" value="4.5" />
            </div>
            <div class="control-group">
              <label><span>振幅 A 与播放控制</span><span id="l1-a-val">0.70</span></label>
              <div style="display:flex;gap:8px;align-items:center;">
                <input type="range" id="l1-a" min="0.3" max="1.0" step="0.1" value="0.7" style="flex:1;" />
                <button class="secondary-btn" id="l1-pause">⏸ 暂停</button>
              </div>
            </div>
          </div>
        `;

        const canvas = container.querySelector('#c-lab1');
        const W = 860, H = 310;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab1');

        let mode = 'transverse';
        let f = 1.5, v = 4.5, amp = 0.7, paused = false;
        let simTime = 0, lastTs = performance.now();

        const btnT = container.querySelector('#l1-trans');
        const btnL = container.querySelector('#l1-long');
        btnT.onclick = () => { mode = 'transverse'; btnT.style.borderColor = 'var(--brand-primary)'; btnL.style.borderColor = ''; };
        btnL.onclick = () => { mode = 'longitudinal'; btnL.style.borderColor = 'var(--brand-primary)'; btnT.style.borderColor = ''; };

        container.querySelector('#l1-f').oninput = (e) => {
          f = parseFloat(e.target.value);
          container.querySelector('#l1-f-val').textContent = f.toFixed(2) + ' Hz';
        };
        container.querySelector('#l1-v').oninput = (e) => {
          v = parseFloat(e.target.value);
          container.querySelector('#l1-v-val').textContent = v.toFixed(1) + ' m s⁻¹';
        };
        container.querySelector('#l1-a').oninput = (e) => {
          amp = parseFloat(e.target.value);
          container.querySelector('#l1-a-val').textContent = amp.toFixed(2);
        };
        const pauseBtn = container.querySelector('#l1-pause');
        pauseBtn.onclick = () => {
          paused = !paused;
          pauseBtn.textContent = paused ? '▶ 继续' : '⏸ 暂停';
        };

        function frame(now) {
          const dt = Math.min((now - lastTs) / 1000, 0.05);
          lastTs = now;
          if (!paused) simTime += dt;

          const lambda = v / f; // metres
          const T = 1 / f;
          const pxPerMeter = 76; // 1 m = 76 px
          const lamPx = lambda * pxPerMeter;

          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#0d1b22';
          ctx.fillRect(0, 0, W, H);

          // Direction of wave travel arrow at top
          drawArrow(ctx, 60, 34, 240, 34, '#38bdf8', 2.5);
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText('波与能量传播方向 Direction of travel (v = ' + v.toFixed(1) + ' m s⁻¹)', 252, 39);

          const midY = 172;
          ctx.strokeStyle = 'rgba(148,163,184,0.35)';
          ctx.setLineDash([6, 5]);
          ctx.beginPath();
          ctx.moveTo(40, midY);
          ctx.lineTo(W - 30, midY);
          ctx.stroke();
          ctx.setLineDash([]);

          const N = 46;
          const startX = 55;
          const spacing = (W - 105) / (N - 1);
          const redIdx = 18;
          const maxPxAmp = mode === 'transverse' ? 68 * amp : 26 * amp;

          if (mode === 'transverse') {
            // Smooth rope curve behind particles
            ctx.strokeStyle = 'rgba(45,212,191,0.5)';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let x = startX; x <= W - 50; x += 4) {
              const phase = 2 * Math.PI * (f * simTime - (x - startX) / lamPx);
              const y = midY - maxPxAmp * Math.sin(phase);
              if (x === startX) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }

          for (let i = 0; i < N; i++) {
            const eqX = startX + i * spacing;
            const phase = 2 * Math.PI * (f * simTime - (eqX - startX) / lamPx);
            const sinP = Math.sin(phase);
            const cosP = Math.cos(phase);

            let px = eqX, py = midY;
            if (mode === 'transverse') {
              py = midY - maxPxAmp * sinP;
            } else {
              px = eqX + maxPxAmp * sinP;
              // Draw slinky vertical coil loop
              ctx.strokeStyle = i === redIdx ? '#f87171' : '#60a5fa';
              ctx.lineWidth = i === redIdx ? 2.8 : 1.7;
              ctx.beginPath();
              ctx.ellipse(px, midY, 5, 36, 0, 0, Math.PI * 2);
              ctx.stroke();
            }

            if (i === redIdx) {
              // Equilibrium reference line for red particle
              ctx.strokeStyle = 'rgba(248,113,113,0.55)';
              ctx.setLineDash([4, 3]);
              ctx.beginPath();
              if (mode === 'transverse') {
                ctx.moveTo(eqX, midY - 82);
                ctx.lineTo(eqX, midY + 82);
              } else {
                ctx.moveTo(eqX, midY - 65);
                ctx.lineTo(eqX, midY + 65);
              }
              ctx.stroke();
              ctx.setLineDash([]);

              // Velocity vector of red particle
              if (mode === 'transverse') {
                drawArrow(ctx, px + 14, py, px + 14, py - cosP * 38 * amp, '#fbbf24', 2.5);
              } else {
                drawArrow(ctx, px, py - 50, px + cosP * 36 * amp, py - 50, '#fbbf24', 2.5);
              }

              ctx.fillStyle = '#ef4444';
              ctx.beginPath();
              ctx.arc(px, py, 8, 0, Math.PI * 2);
              ctx.fill();
              ctx.fillStyle = '#fecaca';
              ctx.font = 'bold 12.5px sans-serif';
              ctx.fillText('红丝带质点 P（只在平衡位置附近振动！）', eqX - 95, H - 18);
            } else if (mode === 'transverse') {
              ctx.fillStyle = '#2dd4bf';
              ctx.beginPath();
              ctx.arc(px, py, 4.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Wavelength λ bracket at a moving crest/compression
          const kShift = ((f * simTime) % 1 + 1) % 1;
          const crest1X = startX + (kShift + 0.25) * lamPx;
          const crest2X = crest1X + lamPx;
          if (crest2X < W - 40) {
            const by = 72;
            ctx.strokeStyle = '#a78bfa';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(crest1X, by + 8);
            ctx.lineTo(crest1X, by);
            ctx.lineTo(crest2X, by);
            ctx.lineTo(crest2X, by + 8);
            ctx.stroke();
            ctx.fillStyle = '#ddd6fe';
            ctx.font = 'bold 12.5px sans-serif';
            ctx.fillText(`1 个波长 λ = ${lambda.toFixed(2)} m`, (crest1X + crest2X) / 2 - 52, by - 7);
          }

          readout.innerHTML = `
            <span class="readout-pill">模式：<strong>${mode === 'transverse' ? '横波 (振动 ⊥ 传播)' : '纵波 (振动 ∥ 传播，疏密交替)'}</strong></span>
            <span class="readout-pill">周期 T = 1/f = <strong>${T.toFixed(2)} s</strong></span>
            <span class="readout-pill">波长 λ = v/f = <strong>${lambda.toFixed(2)} m</strong></span>
            <span class="readout-pill">每周期质点路程 4A = <strong>${(4 * amp).toFixed(2)} m</strong></span>
          `;

          activeAnimId = requestAnimationFrame(frame);
        }

        activeAnimId = requestAnimationFrame(frame);
      }
    },

    /* ----------------------------------------------------------------------
       LAB 2: s–d Snapshot vs s–t History Dual Graph
       ---------------------------------------------------------------------- */
    {
      id: 'lab2',
      badge: 'Ch.4 · 4.3 & 4.4',
      title: '实验 2：s–d 全场快照图与 s–t 单点录像联动仪',
      mission: '🎯 探究任务：勾选「显示下一瞬间微平移虚线」，切换波向左/向右传播，观察左边 <strong>s–d 图上质点的瞬时速度箭头</strong> 如何跟右边 <strong>s–t 图切线斜率</strong> 严丝合缝对应！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab2"></canvas></div>
          <div class="lab-readout-strip" id="r-lab2"></div>
          <div class="lab-controls-grid">
            <div class="control-group">
              <label><span>波传播方向 Wave Direction</span></label>
              <div style="display:flex;gap:6px;">
                <button class="secondary-btn" id="l2-right" style="flex:1;border-color:var(--brand-primary);font-weight:700;">向右 (+x) 传播 →</button>
                <button class="secondary-btn" id="l2-left" style="flex:1;">← 向左 (-x) 传播</button>
              </div>
            </div>
            <div class="control-group">
              <label><span>选择跟踪质点 Tracked Particle</span></label>
              <div style="display:flex;gap:6px;">
                <button class="secondary-btn" data-p="0" style="flex:1;border-color:var(--brand-primary);">P (d=2 m)</button>
                <button class="secondary-btn" data-p="1" style="flex:1;">Q (d=3 m)</button>
                <button class="secondary-btn" data-p="2" style="flex:1;">R (d=4 m)</button>
              </div>
            </div>
            <div class="control-group">
              <label><span>破题辅助线</span></label>
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-top:4px;">
                <input type="checkbox" id="l2-next" checked />
                <span>显示下一瞬间 (t + Δt) 微平移虚线</span>
              </label>
            </div>
            <div class="control-group">
              <label><span>时间步进控制（λ=4 m, T=2 s）</span></label>
              <div style="display:flex;gap:8px;">
                <button class="secondary-btn" id="l2-play" style="flex:1;">⏸ 暂停</button>
                <button class="secondary-btn" id="l2-step" style="flex:1;">⏭ 步进 +T/8</button>
              </div>
            </div>
          </div>
        `;

        const canvas = container.querySelector('#c-lab2');
        const W = 880, H = 320;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab2');

        let dir = 1; // +1 right, -1 left
        let pIdx = 0;
        const pPositions = [2.0, 3.0, 4.0]; // m
        const pNames = ['P', 'Q', 'R'];
        const lambda = 4.0, T = 2.0;
        let showNext = true, paused = false;
        let t = 0, lastTs = performance.now();

        const bRight = container.querySelector('#l2-right');
        const bLeft = container.querySelector('#l2-left');
        bRight.onclick = () => { dir = 1; bRight.style.borderColor = 'var(--brand-primary)'; bLeft.style.borderColor = ''; };
        bLeft.onclick = () => { dir = -1; bLeft.style.borderColor = 'var(--brand-primary)'; bRight.style.borderColor = ''; };

        container.querySelectorAll('[data-p]').forEach((btn) => {
          btn.onclick = () => {
            pIdx = parseInt(btn.dataset.p, 10);
            container.querySelectorAll('[data-p]').forEach((b) => (b.style.borderColor = ''));
            btn.style.borderColor = 'var(--brand-primary)';
          };
        });
        container.querySelector('#l2-next').onchange = (e) => { showNext = e.target.checked; };
        const playBtn = container.querySelector('#l2-play');
        playBtn.onclick = () => {
          paused = !paused;
          playBtn.textContent = paused ? '▶ 播放' : '⏸ 暂停';
        };
        container.querySelector('#l2-step').onclick = () => {
          paused = true;
          playBtn.textContent = '▶ 播放';
          t += T / 8;
        };

        function disp(d, time) {
          return Math.sin(2 * Math.PI * (d / lambda - dir * (time / T)));
        }

        function frame(now) {
          const dt = Math.min((now - lastTs) / 1000, 0.05);
          lastTs = now;
          if (!paused) t += dt * 0.65;

          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#0d1b22';
          ctx.fillRect(0, 0, W, H);

          // Divider
          ctx.strokeStyle = '#243b47';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(435, 16);
          ctx.lineTo(435, H - 16);
          ctx.stroke();

          const midY = 170, ampPx = 78;

          // LEFT PANEL: s–d Snapshot at current t
          ctx.fillStyle = '#5eead4';
          ctx.font = 'bold 13.5px sans-serif';
          ctx.fillText(`(a) 位移—距离图 s–d Snapshot（定格时刻 t = ${(t % 4).toFixed(2)} s，读波长 λ = 4 m）`, 22, 30);

          const x0L = 45, wL = 365; // maps d = 0..6 m
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(x0L, midY); ctx.lineTo(x0L + wL, midY);
          ctx.moveTo(x0L, 65); ctx.lineTo(x0L, 275);
          ctx.stroke();
          ctx.fillStyle = '#94a3b8';
          ctx.font = '12px sans-serif';
          ctx.fillText('distance d / m', x0L + wL - 78, midY + 18);

          // Optional next-instant shifted curve
          if (showNext) {
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2;
            ctx.setLineDash([6, 4]);
            ctx.beginPath();
            for (let i = 0; i <= 180; i++) {
              const d = (i / 180) * 6.0;
              const x = x0L + (d / 6.0) * wL;
              const y = midY - ampPx * disp(d, t + 0.14);
              if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Current solid s–d curve
          ctx.strokeStyle = '#14b8a6';
          ctx.lineWidth = 3;
          ctx.beginPath();
          for (let i = 0; i <= 180; i++) {
            const d = (i / 180) * 6.0;
            const x = x0L + (d / 6.0) * wL;
            const y = midY - ampPx * disp(d, t);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Plot P, Q, R and highlight active particle
          const dSel = pPositions[pIdx];
          const sNow = disp(dSel, t);
          const sNext = disp(dSel, t + 0.04);
          const vSign = sNext - sNow;

          pPositions.forEach((dVal, idx) => {
            const px = x0L + (dVal / 6.0) * wL;
            const py = midY - ampPx * disp(dVal, t);
            ctx.fillStyle = idx === pIdx ? '#ef4444' : '#94a3b8';
            ctx.beginPath();
            ctx.arc(px, py, idx === pIdx ? 7 : 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = idx === pIdx ? '#fca5a5' : '#cbd5e1';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(pNames[idx], px - 5, py - 12);
            if (idx === pIdx && Math.abs(vSign) > 0.006) {
              drawArrow(ctx, px, py, px, py - (vSign > 0 ? 34 : -34), '#ef4444', 2.5);
            }
          });

          // RIGHT PANEL: s–t Graph of selected particle over tWindow = [tFloor..tFloor+4s]
          ctx.fillStyle = '#93c5fd';
          ctx.font = 'bold 13.5px sans-serif';
          ctx.fillText(`(b) 质点 ${pNames[pIdx]} 的位移—时间图 s–t Graph（读周期 T = 2 s）`, 458, 30);

          const x0R = 472, wR = 375;
          const tCycle = t % 4.0;
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(x0R, midY); ctx.lineTo(x0R + wR, midY);
          ctx.moveTo(x0R, 65); ctx.lineTo(x0R, 275);
          ctx.stroke();
          ctx.fillStyle = '#94a3b8';
          ctx.font = '12px sans-serif';
          ctx.fillText('time t / s (0 → 4 s)', x0R + wR - 110, midY + 18);

          // Full 4s reference curve (faint) + traced history up to tCycle (bright)
          ctx.strokeStyle = 'rgba(96,165,250,0.25)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i <= 160; i++) {
            const tt = (i / 160) * 4.0;
            const x = x0R + (tt / 4.0) * wR;
            const y = midY - ampPx * disp(dSel, tt);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 3;
          ctx.beginPath();
          for (let i = 0; i <= 160; i++) {
            const tt = (i / 160) * tCycle;
            const x = x0R + (tt / 4.0) * wR;
            const y = midY - ampPx * disp(dSel, tt);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();

          const curX = x0R + (tCycle / 4.0) * wR;
          const curY = midY - ampPx * disp(dSel, tCycle);
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(curX, curY, 7, 0, Math.PI * 2);
          ctx.fill();

          let stateLabel = '瞬时静止 momentarily at rest (速率 = 0)';
          if (Math.abs(sNow) < 0.96) {
            stateLabel = vSign > 0 ? '正在向上运动 moving upwards ↑ (s–t 斜率 > 0)' : '正在向下运动 moving downwards ↓ (s–t 斜率 < 0)';
          }

          readout.innerHTML = `
            <span class="readout-pill">追踪质点：<strong>${pNames[pIdx]} (d = ${dSel.toFixed(1)} m)</strong></span>
            <span class="readout-pill">当前位移 s：<strong>${sNow >= 0 ? '+' : ''}${sNow.toFixed(2)} A</strong></span>
            <span class="readout-pill">瞬时运动状态：<strong>${stateLabel}</strong></span>
            <span class="readout-pill">波速 v = λ/T = <strong>2.0 m s⁻¹ (${dir > 0 ? '向右' : '向左'})</strong></span>
          `;

          activeAnimId = requestAnimationFrame(frame);
        }

        activeAnimId = requestAnimationFrame(frame);
      }
    },

    /* ----------------------------------------------------------------------
       LAB 3: Ripple Tank Refraction & Diffraction
       ---------------------------------------------------------------------- */
    {
      id: 'lab3',
      badge: 'Ch.5 · 5.2 & 5.3',
      title: '实验 3：水波槽折射（深浅水）与单缝衍射实验室',
      mission: '🎯 探究任务：① 在「折射模式」中把入射角拖到 <strong>0° 正射</strong> 观察波前不偏折但依然变密（λ 减小），再拖到 45° 看波前如何在边界连续相接并偏向法线；② 在「衍射模式」中调窄缝宽 a，见证半圆形显著衍射！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab3"></canvas></div>
          <div class="lab-readout-strip" id="r-lab3"></div>
          <div class="lab-controls-grid" id="ctrl-lab3"></div>
        `;

        const canvas = container.querySelector('#c-lab3');
        const W = 860, H = 330;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab3');
        const ctrlWrap = container.querySelector('#ctrl-lab3');

        let mode = 'refraction';
        let theta1Deg = 40, speedRatio = 0.60;
        let gapCm = 2.2, lambdaCm = 2.4;
        let simTime = 0, lastTs = performance.now();

        function renderControls() {
          if (mode === 'refraction') {
            ctrlWrap.innerHTML = `
              <div class="control-group">
                <label><span>实验项目切换</span></label>
                <div style="display:flex;gap:6px;">
                  <button class="secondary-btn" id="l3-m-ref" style="flex:1;border-color:var(--brand-primary);font-weight:700;">深浅水折射</button>
                  <button class="secondary-btn" id="l3-m-dif" style="flex:1;">单缝衍射</button>
                </div>
              </div>
              <div class="control-group">
                <label><span>深水入射角 θ₁（试试 0° 正射！）</span><span id="l3-th-val">${theta1Deg}°</span></label>
                <input type="range" id="l3-th" min="0" max="60" step="5" value="${theta1Deg}" />
              </div>
              <div class="control-group">
                <label><span>浅水与深水波速比 v₂ / v₁</span><span id="l3-sr-val">${speedRatio.toFixed(2)}</span></label>
                <input type="range" id="l3-sr" min="0.45" max="0.85" step="0.05" value="${speedRatio}" />
              </div>
            `;
            ctrlWrap.querySelector('#l3-m-dif').onclick = () => { mode = 'diffraction'; renderControls(); };
            ctrlWrap.querySelector('#l3-th').oninput = (e) => {
              theta1Deg = parseFloat(e.target.value);
              ctrlWrap.querySelector('#l3-th-val').textContent = theta1Deg + '°';
            };
            ctrlWrap.querySelector('#l3-sr').oninput = (e) => {
              speedRatio = parseFloat(e.target.value);
              ctrlWrap.querySelector('#l3-sr-val').textContent = speedRatio.toFixed(2);
            };
          } else {
            ctrlWrap.innerHTML = `
              <div class="control-group">
                <label><span>实验项目切换</span></label>
                <div style="display:flex;gap:6px;">
                  <button class="secondary-btn" id="l3-m-ref" style="flex:1;">深浅水折射</button>
                  <button class="secondary-btn" id="l3-m-dif" style="flex:1;border-color:var(--brand-primary);font-weight:700;">单缝衍射</button>
                </div>
              </div>
              <div class="control-group">
                <label><span>狭缝宽度 a</span><span id="l3-gap-val">${gapCm.toFixed(1)} cm</span></label>
                <input type="range" id="l3-gap" min="0.8" max="7.0" step="0.2" value="${gapCm}" />
              </div>
              <div class="control-group">
                <label><span>入射波长 λ（调低频率增大 λ）</span><span id="l3-lam-val">${lambdaCm.toFixed(1)} cm</span></label>
                <input type="range" id="l3-lam" min="1.2" max="4.0" step="0.2" value="${lambdaCm}" />
              </div>
            `;
            ctrlWrap.querySelector('#l3-m-ref').onclick = () => { mode = 'refraction'; renderControls(); };
            ctrlWrap.querySelector('#l3-gap').oninput = (e) => {
              gapCm = parseFloat(e.target.value);
              ctrlWrap.querySelector('#l3-gap-val').textContent = gapCm.toFixed(1) + ' cm';
            };
            ctrlWrap.querySelector('#l3-lam').oninput = (e) => {
              lambdaCm = parseFloat(e.target.value);
              ctrlWrap.querySelector('#l3-lam-val').textContent = lambdaCm.toFixed(1) + ' cm';
            };
          }
        }

        renderControls();

        function frame(now) {
          const dt = Math.min((now - lastTs) / 1000, 0.05);
          lastTs = now;
          simTime += dt;

          ctx.clearRect(0, 0, W, H);

          if (mode === 'refraction') {
            const bx = W * 0.48;
            ctx.fillStyle = '#0c2536';
            ctx.fillRect(0, 0, bx, H);
            ctx.fillStyle = '#133b54';
            ctx.fillRect(bx, 0, W - bx, H);

            ctx.strokeStyle = '#7dd3fc';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(bx, 0); ctx.lineTo(bx, H);
            ctx.stroke();

            const th1 = (theta1Deg * Math.PI) / 180;
            const sin2 = Math.sin(th1) * speedRatio;
            const th2 = Math.asin(Math.min(1, sin2));
            const lam1 = 44; // px in deep region
            const lam2 = lam1 * speedRatio;
            const fHz = 1.6;

            // Phase-matched wavefronts: k1_x*(x - bx) + k_y*(y - H/2) = 2π(f*t - m)
            // Notice k_y = sin(th1)/lam1 = sin(th2)/lam2 is IDENTICAL on both sides -> guarantees continuity at x = bx!
            const ky = Math.sin(th1) / lam1;
            const kx1 = Math.cos(th1) / lam1;
            const kx2 = Math.cos(th2) / lam2;

            ctx.save();
            ctx.beginPath(); ctx.rect(0, 0, bx, H); ctx.clip();
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.85)';
            ctx.lineWidth = 2.6;
            for (let m = -18; m <= 18; m++) {
              const c = fHz * simTime - m;
              // Line equation: kx1*(x - bx) + ky*(y - H/2) = c
              const yTop = 0, yBot = H;
              const xTop = bx + (c - ky * (yTop - H / 2)) / kx1;
              const xBot = bx + (c - ky * (yBot - H / 2)) / kx1;
              ctx.beginPath();
              ctx.moveTo(xTop, yTop);
              ctx.lineTo(xBot, yBot);
              ctx.stroke();
            }
            ctx.restore();

            ctx.save();
            ctx.beginPath(); ctx.rect(bx, 0, W - bx, H); ctx.clip();
            ctx.strokeStyle = 'rgba(125, 211, 252, 0.92)';
            ctx.lineWidth = 2.4;
            for (let m = -18; m <= 18; m++) {
              const c = fHz * simTime - m;
              const yTop = 0, yBot = H;
              const xTop = bx + (c - ky * (yTop - H / 2)) / kx2;
              const xBot = bx + (c - ky * (yBot - H / 2)) / kx2;
              ctx.beginPath();
              ctx.moveTo(xTop, yTop);
              ctx.lineTo(xBot, yBot);
              ctx.stroke();
            }
            ctx.restore();

            // Normal line & incident/refracted rays through (bx, H/2)
            const cy = H / 2;
            ctx.strokeStyle = '#cbd5e1';
            ctx.setLineDash([6, 4]);
            ctx.beginPath();
            ctx.moveTo(bx - 160, cy); ctx.lineTo(bx + 160, cy);
            ctx.stroke();
            ctx.setLineDash([]);

            drawArrow(ctx, bx - 155 * Math.cos(th1), cy - 155 * Math.sin(th1), bx, cy, '#f87171', 3);
            drawArrow(ctx, bx, cy, bx + 155 * Math.cos(th2), cy + 155 * Math.sin(th2), '#fbbf24', 3);

            ctx.fillStyle = '#e0f2fe';
            ctx.font = 'bold 13.5px sans-serif';
            ctx.fillText('深水区 Deep Region (v₁ 快, λ₁ = 3.0 cm)', 22, 28);
            ctx.fillText(`浅水区 Shallow Region (v₂ 慢, λ₂ = ${(3.0 * speedRatio).toFixed(2)} cm)`, bx + 18, 28);

            readout.innerHTML = `
              <span class="readout-pill">频率 f：<strong>保持不变 (unchanged)</strong></span>
              <span class="readout-pill">入射角 θ₁：<strong>${theta1Deg.toFixed(1)}°</strong></span>
              <span class="readout-pill">折射角 θ₂：<strong>${((th2 * 180) / Math.PI).toFixed(1)}° ${theta1Deg > 0 ? '(偏向法线)' : '(正射不偏折，但 λ 仍变短！)'}</strong></span>
              <span class="readout-pill">波长变化：<strong>3.00 cm → ${(3.0 * speedRatio).toFixed(2)} cm</strong></span>
            `;
          } else {
            // Single-slit Diffraction
            ctx.fillStyle = '#0c2536';
            ctx.fillRect(0, 0, W, H);

            const wallX = 280;
            const cy = H / 2;
            const scale = 18; // 1 cm = 18 px
            const gapPx = gapCm * scale;
            const lamPx = lambdaCm * scale;
            const fHz = 1.6;
            const shift = ((fHz * simTime) % 1) * lamPx;

            // Incident straight wavefronts on left
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.6;
            for (let x = wallX - lamPx * 8 + shift; x <= wallX; x += lamPx) {
              if (x > 20) {
                ctx.beginPath();
                ctx.moveTo(x, 22);
                ctx.lineTo(x, H - 22);
                ctx.stroke();
              }
            }

            // Emergent diffracted wavefronts on right (flat core + circular edges; when gap <= lam, pure semicircles!)
            const flatHalf = Math.max(0, (gapPx - lamPx * 0.85) * 0.45);
            const spreadAngle = Math.min(Math.PI * 0.48, Math.atan2(1.4 * lamPx, Math.max(gapPx * 0.45, 4)) + 0.35);

            for (let r = shift; r < W - wallX; r += lamPx) {
              if (r < 4) continue;
              const alpha = Math.max(0.22, 0.92 - r / 780);
              ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
              ctx.lineWidth = 2.6;
              ctx.beginPath();
              // Upper arc -> flat middle -> lower arc
              ctx.arc(wallX, cy - flatHalf, r, -spreadAngle, 0);
              ctx.lineTo(wallX + r, cy + flatHalf);
              ctx.arc(wallX, cy + flatHalf, r, 0, spreadAngle);
              ctx.stroke();
            }

            // Barrier walls
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(wallX - 5, 0, 10, Math.max(0, cy - gapPx / 2));
            ctx.fillRect(wallX - 5, cy + gapPx / 2, 10, Math.max(0, H - (cy + gapPx / 2)));

            const ratio = gapCm / lambdaCm;
            const verdict = ratio <= 1.25 ? '极其显著（近似半圆形扩展 a ≤ λ）' : ratio <= 2.4 ? '中等程度衍射' : '不明显（仅边缘微弯，阴影区大 a >> λ）';
            readout.innerHTML = `
              <span class="readout-pill">比值 a / λ = <strong>${ratio.toFixed(2)}</strong></span>
              <span class="readout-pill">衍射明显程度：<strong>${verdict}</strong></span>
              <span class="readout-pill">穿过狭缝后：<strong>波速 v、频率 f、波长 λ (${lambdaCm.toFixed(1)} cm) 全部保持不变！</strong></span>
            `;
          }

          activeAnimId = requestAnimationFrame(frame);
        }

        activeAnimId = requestAnimationFrame(frame);
      }
    },

    /* ----------------------------------------------------------------------
       LAB 4: Two-Source Interference with Draggable Probe P
       ---------------------------------------------------------------------- */
    {
      id: 'lab4',
      badge: 'Ch.5.4 & Ch.7.3',
      title: '实验 4：双波源相干干涉与可拖动波程差探测器 P',
      mission: '🎯 探究任务：用鼠标或手指<strong>拖动黄色探测球 P</strong> 在槽中移动，寻找 Δ = 0, 1λ, 2λ 的腹线（相长）与 Δ = 0.5λ, 1.5λ 的节线（相消）；再点一下「切换为反相波源」，看正中央连线瞬间发生什么反转！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab4" style="cursor:grab;"></canvas></div>
          <div class="lab-readout-strip" id="r-lab4"></div>
          <div class="lab-controls-grid">
            <div class="control-group">
              <label><span>波源相位关系 Source Phase</span></label>
              <div style="display:flex;gap:6px;">
                <button class="secondary-btn" id="l4-in" style="flex:1;border-color:var(--brand-primary);font-weight:700;">同相 In Phase</button>
                <button class="secondary-btn" id="l4-anti" style="flex:1;">反相 In Antiphase</button>
              </div>
            </div>
            <div class="control-group">
              <label><span>波长 λ</span><span id="l4-lam-val">2.0 cm</span></label>
              <input type="range" id="l4-lam" min="1.4" max="3.6" step="0.2" value="2.0" />
            </div>
            <div class="control-group">
              <label><span>波源间距 a (S₁S₂)</span><span id="l4-sep-val">5.0 cm</span></label>
              <input type="range" id="l4-sep" min="3.0" max="8.0" step="0.5" value="5.0" />
            </div>
            <div class="control-group">
              <label><span>图样辅助显示</span></label>
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-top:4px;">
                <input type="checkbox" id="l4-lines" checked />
                <span>标出腹线 (绿) 与节线 (红虚线)</span>
              </label>
            </div>
          </div>
        `;

        const canvas = container.querySelector('#c-lab4');
        const W = 860, H = 340;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab4');

        let inPhase = true;
        let lamCm = 2.0, sepCm = 5.0, showLines = true;
        const pxPerCm = 24;
        const srcX = 92;
        let probe = { x: 420, y: 112 };
        let dragging = false;
        let simTime = 0, lastTs = performance.now();

        const bIn = container.querySelector('#l4-in');
        const bAnti = container.querySelector('#l4-anti');
        bIn.onclick = () => { inPhase = true; bIn.style.borderColor = 'var(--brand-primary)'; bAnti.style.borderColor = ''; };
        bAnti.onclick = () => { inPhase = false; bAnti.style.borderColor = 'var(--brand-primary)'; bIn.style.borderColor = ''; };

        container.querySelector('#l4-lam').oninput = (e) => {
          lamCm = parseFloat(e.target.value);
          container.querySelector('#l4-lam-val').textContent = lamCm.toFixed(1) + ' cm';
        };
        container.querySelector('#l4-sep').oninput = (e) => {
          sepCm = parseFloat(e.target.value);
          container.querySelector('#l4-sep-val').textContent = sepCm.toFixed(1) + ' cm';
        };
        container.querySelector('#l4-lines').onchange = (e) => { showLines = e.target.checked; };

        function pointerPos(ev) {
          const rect = canvas.getBoundingClientRect();
          return {
            x: Math.max(srcX + 25, Math.min(W - 245, ((ev.clientX - rect.left) / rect.width) * W)),
            y: Math.max(20, Math.min(H - 20, ((ev.clientY - rect.top) / rect.height) * H))
          };
        }
        const onDown = (ev) => { dragging = true; probe = pointerPos(ev); canvas.setPointerCapture && canvas.setPointerCapture(ev.pointerId); };
        const onMove = (ev) => { if (dragging) probe = pointerPos(ev); };
        const onUp = () => { dragging = false; };
        canvas.addEventListener('pointerdown', onDown);
        canvas.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        currentLabCleanup = () => { window.removeEventListener('pointerup', onUp); };

        function frame(now) {
          const dt = Math.min((now - lastTs) / 1000, 0.05);
          lastTs = now;
          simTime += dt;

          const tankW = W - 230;
          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#091822';
          ctx.fillRect(0, 0, W, H);

          const s1 = { x: srcX, y: H / 2 - (sepCm * pxPerCm) / 2 };
          const s2 = { x: srcX, y: H / 2 + (sepCm * pxPerCm) / 2 };
          const lamPx = lamCm * pxPerCm;
          const fHz = 1.4;

          // Coarse shaded interference grid in tank area
          const cell = 7;
          for (let x = srcX; x < tankW; x += cell) {
            for (let y = 8; y < H - 8; y += cell) {
              const r1 = Math.hypot(x - s1.x, y - s1.y);
              const r2 = Math.hypot(x - s2.x, y - s2.y);
              const w1 = Math.sin(2 * Math.PI * (fHz * simTime - r1 / lamPx));
              const w2 = Math.sin(2 * Math.PI * (fHz * simTime - r2 / lamPx) + (inPhase ? 0 : Math.PI));
              const sum = (w1 + w2) * 0.5; // -1..1
              const bright = Math.round(45 + sum * 38);
              ctx.fillStyle = `rgb(${Math.max(8, bright - 25)}, ${bright + 25}, ${bright + 55})`;
              ctx.fillRect(x, y, cell, cell);
            }
          }

          // Optional nodal & antinodal curves
          if (showLines) {
            const maxHalfSteps = Math.floor((sepCm / lamCm) * 2);
            for (let k = -maxHalfSteps; k <= maxHalfSteps; k++) {
              const deltaTarget = k * 0.5 * lamCm; // in cm
              if (Math.abs(deltaTarget) >= sepCm * 0.995) continue;
              const isHalfOdd = Math.abs(k) % 2 === 1;
              const isConstructive = inPhase ? !isHalfOdd : isHalfOdd;

              ctx.strokeStyle = isConstructive ? 'rgba(52, 211, 153, 0.85)' : 'rgba(248, 113, 113, 0.8)';
              ctx.lineWidth = isConstructive ? 2.2 : 1.7;
              if (!isConstructive) ctx.setLineDash([5, 4]); else ctx.setLineDash([]);

              ctx.beginPath();
              let started = false;
              for (let x = srcX + 6; x < tankW; x += 8) {
                // Binary search y where (r2 - r1)/pxPerCm = deltaTarget
                let lo = 4, hi = H - 4;
                for (let it = 0; it < 14; it++) {
                  const mid = (lo + hi) * 0.5;
                  const diff = (Math.hypot(x - s2.x, mid - s2.y) - Math.hypot(x - s1.x, mid - s1.y)) / pxPerCm;
                  if (diff < deltaTarget) lo = mid; else hi = mid;
                }
                const yFound = (lo + hi) * 0.5;
                const check = Math.abs((Math.hypot(x - s2.x, yFound - s2.y) - Math.hypot(x - s1.x, yFound - s1.y)) / pxPerCm - deltaTarget);
                if (check < 0.08) {
                  if (!started) { ctx.moveTo(x, yFound); started = true; } else ctx.lineTo(x, yFound);
                }
              }
              ctx.stroke();
              ctx.setLineDash([]);
            }
          }

          // Lines S1P and S2P + Probe P
          ctx.strokeStyle = '#fde047';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y); ctx.lineTo(probe.x, probe.y);
          ctx.moveTo(s2.x, s2.y); ctx.lineTo(probe.x, probe.y);
          ctx.stroke();

          [s1, s2].forEach((s, idx) => {
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath(); ctx.arc(s.x, s.y, 7, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif';
            ctx.fillText(idx === 0 ? 'S₁' : 'S₂', s.x - 24, s.y + 4);
          });

          ctx.fillStyle = '#facc15';
          ctx.beginPath(); ctx.arc(probe.x, probe.y, 9, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = '#091822'; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = '#fef08a'; ctx.font = 'bold 13px sans-serif';
          ctx.fillText('P (拖动我!)', probe.x + 12, probe.y - 8);

          // Right side mini scope for Probe P
          const r1Cm = Math.hypot(probe.x - s1.x, probe.y - s1.y) / pxPerCm;
          const r2Cm = Math.hypot(probe.x - s2.x, probe.y - s2.y) / pxPerCm;
          const deltaCm = Math.abs(r2Cm - r1Cm);
          const deltaLam = deltaCm / lamCm;
          const phaseDiff = 2 * Math.PI * ((r2Cm - r1Cm) / lamCm) + (inPhase ? 0 : Math.PI);
          const resAmp = 2 * Math.abs(Math.cos(phaseDiff / 2)); // 0..2A

          const sx = tankW + 14, sw = W - sx - 12;
          ctx.fillStyle = '#112430';
          ctx.fillRect(sx, 14, sw, H - 28);
          ctx.fillStyle = '#e2e8f0';
          ctx.font = 'bold 12.5px sans-serif';
          ctx.fillText('探测点 P 实时合成波形', sx + 14, 38);

          const oy = 165;
          ctx.strokeStyle = '#334155';
          ctx.beginPath(); ctx.moveTo(sx + 10, oy); ctx.lineTo(sx + sw - 10, oy); ctx.stroke();

          // Wave 1, Wave 2, Resultant at P
          const drawTrace = (color, width, fn) => {
            ctx.strokeStyle = color; ctx.lineWidth = width;
            ctx.beginPath();
            for (let i = 0; i <= 90; i++) {
              const tt = (i / 90) * 1.5;
              const x = sx + 12 + (i / 90) * (sw - 24);
              const y = oy - 36 * fn(tt);
              if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
          };
          drawTrace('rgba(56,189,248,0.65)', 1.5, (tt) => Math.sin(2 * Math.PI * (fHz * (simTime + tt) - r1Cm / lamCm)));
          drawTrace('rgba(251,146,60,0.65)', 1.5, (tt) => Math.sin(2 * Math.PI * (fHz * (simTime + tt) - r2Cm / lamCm) + (inPhase ? 0 : Math.PI)));
          drawTrace('#34d399', 3.0, (tt) =>
            Math.sin(2 * Math.PI * (fHz * (simTime + tt) - r1Cm / lamCm)) +
            Math.sin(2 * Math.PI * (fHz * (simTime + tt) - r2Cm / lamCm) + (inPhase ? 0 : Math.PI))
          );

          ctx.fillStyle = '#a7f3d0';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(`合振幅 = ${resAmp.toFixed(2)} A`, sx + 14, H - 36);

          const statusText = resAmp > 1.85 ? '🌟 接近相长干涉 (腹线, ~2A)' : resAmp < 0.30 ? '🔇 接近相消干涉 (节线, ~0)' : '中间过渡叠加区';
          readout.innerHTML = `
            <span class="readout-pill">S₁P = <strong>${r1Cm.toFixed(2)} cm</strong>，S₂P = <strong>${r2Cm.toFixed(2)} cm</strong></span>
            <span class="readout-pill">波程差 Δ = <strong>${deltaCm.toFixed(2)} cm = ${deltaLam.toFixed(2)} λ</strong></span>
            <span class="readout-pill">P 点状态：<strong>${statusText}</strong></span>
          `;

          activeAnimId = requestAnimationFrame(frame);
        }

        activeAnimId = requestAnimationFrame(frame);
      }
    },

    /* ----------------------------------------------------------------------
       LAB 5: Stationary Wave Synthesis on a Stretched String
       ---------------------------------------------------------------------- */
    {
      id: 'lab5',
      badge: 'Ch.5.5 · * Extension',
      title: '实验 5：驻波合成透视仪（正反向全同行波叠加）',
      mission: '🎯 探究任务：同时勾选「右行入射波」与「左行反射波」，观察它们如何在固定端弦上锁死成紫色驻波；切换 n = 1, 2, 3, 4 个环，验证<strong>同环同相、邻环反相、每周期两次全弦拉平</strong>！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab5"></canvas></div>
          <div class="lab-readout-strip" id="r-lab5"></div>
          <div class="lab-controls-grid">
            <div class="control-group">
              <label><span>谐波环数 n (Loops)</span><span id="l5-n-val">n = 2 个环</span></label>
              <input type="range" id="l5-n" min="1" max="5" step="1" value="2" />
            </div>
            <div class="control-group">
              <label><span>分量波透视显示</span></label>
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                <input type="checkbox" id="l5-comp" checked />
                <span>显示右行波 (蓝) 与左行反射波 (橙)</span>
              </label>
            </div>
            <div class="control-group">
              <label><span>速度与暂停（弦长 L = 1.20 m, f₁ = 15 Hz）</span></label>
              <div style="display:flex;gap:8px;">
                <button class="secondary-btn" id="l5-slow" style="flex:1;">🐢 慢放 0.3x</button>
                <button class="secondary-btn" id="l5-pause" style="flex:1;">⏸ 暂停</button>
              </div>
            </div>
          </div>
        `;

        const canvas = container.querySelector('#c-lab5');
        const W = 860, H = 300;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab5');

        let nLoops = 2, showComp = true, slow = false, paused = false;
        let simTime = 0, lastTs = performance.now();

        container.querySelector('#l5-n').oninput = (e) => {
          nLoops = parseInt(e.target.value, 10);
          container.querySelector('#l5-n-val').textContent = `n = ${nLoops} 个环`;
        };
        container.querySelector('#l5-comp').onchange = (e) => { showComp = e.target.checked; };
        const slowBtn = container.querySelector('#l5-slow');
        slowBtn.onclick = () => {
          slow = !slow;
          slowBtn.style.borderColor = slow ? 'var(--brand-primary)' : '';
        };
        const pauseBtn = container.querySelector('#l5-pause');
        pauseBtn.onclick = () => {
          paused = !paused;
          pauseBtn.textContent = paused ? '▶ 继续' : '⏸ 暂停';
        };

        function frame(now) {
          const dt = Math.min((now - lastTs) / 1000, 0.05);
          lastTs = now;
          if (!paused) simTime += dt * (slow ? 0.3 : 0.9);

          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#0d1b22';
          ctx.fillRect(0, 0, W, H);

          const x1 = 75, x2 = W - 75, strLenPx = x2 - x1;
          const midY = H / 2, singleAmp = 42;
          const omega = 2 * Math.PI * (0.7 + nLoops * 0.22);

          // Fixed clamps
          ctx.fillStyle = '#64748b';
          ctx.fillRect(x1 - 10, midY - 85, 10, 170);
          ctx.fillRect(x2, midY - 85, 10, 170);

          ctx.strokeStyle = 'rgba(148,163,184,0.35)';
          ctx.setLineDash([5, 4]);
          ctx.beginPath(); ctx.moveTo(x1, midY); ctx.lineTo(x2, midY); ctx.stroke();

          // Stationary envelope
          ctx.strokeStyle = 'rgba(192,132,252,0.28)';
          for (const sgn of [1, -1]) {
            ctx.beginPath();
            for (let i = 0; i <= 200; i++) {
              const u = i / 200;
              const x = x1 + u * strLenPx;
              const y = midY - sgn * 2 * singleAmp * Math.sin(nLoops * Math.PI * u);
              if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          ctx.setLineDash([]);

          // Incident & Reflected travelling waves: y1 = A sin(kx - wt), y2 = A sin(kx + wt) -> sum = 2A sin(kx) cos(wt)
          if (showComp) {
            const drawComp = (color, signW) => {
              ctx.strokeStyle = color;
              ctx.lineWidth = 1.8;
              ctx.beginPath();
              for (let i = 0; i <= 200; i++) {
                const u = i / 200;
                const x = x1 + u * strLenPx;
                const y = midY - singleAmp * Math.sin(nLoops * Math.PI * u + signW * omega * simTime);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
              }
              ctx.stroke();
            };
            drawComp('rgba(56,189,248,0.65)', -1); // right-travelling
            drawComp('rgba(251,146,60,0.65)', +1); // left-travelling
          }

          // Resultant Stationary Wave
          const cosWt = Math.cos(omega * simTime);
          const sinWt = -Math.sin(omega * simTime);
          ctx.strokeStyle = '#c084fc';
          ctx.lineWidth = 4;
          ctx.beginPath();
          for (let i = 0; i <= 220; i++) {
            const u = i / 220;
            const x = x1 + u * strLenPx;
            const y = midY - 2 * singleAmp * Math.sin(nLoops * Math.PI * u) * cosWt;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Velocity arrows inside loops (showing in-phase within loop, antiphase across loops)
          for (let i = 1; i < 24; i++) {
            const u = i / 24;
            const env = Math.sin(nLoops * Math.PI * u);
            if (Math.abs(env) < 0.2) continue;
            const x = x1 + u * strLenPx;
            const y = midY - 2 * singleAmp * env * cosWt;
            const vy = 32 * env * sinWt;
            drawArrow(ctx, x, y, x, y - vy, env > 0 ? '#34d399' : '#fb923c', 1.8);
          }

          // Nodes N and Antinodes A
          for (let m = 0; m <= nLoops; m++) {
            const nx = x1 + (m / nLoops) * strLenPx;
            ctx.fillStyle = '#ef4444';
            ctx.beginPath(); ctx.arc(nx, midY, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fca5a5';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText('N', nx - 5, midY + 22);
          }
          for (let m = 0; m < nLoops; m++) {
            const ax = x1 + ((m + 0.5) / nLoops) * strLenPx;
            ctx.fillStyle = '#e9d5ff';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText('A', ax - 4, 34);
          }

          const L = 1.20;
          const lam = (2 * L) / nLoops;
          const f = 15 * nLoops;
          readout.innerHTML = `
            <span class="readout-pill">总环数：<strong>${nLoops} loops</strong>（共 <strong>${nLoops + 1} 个波节 N</strong>、<strong>${nLoops} 个波腹 A</strong>）</span>
            <span class="readout-pill">单环长 λ/2 = <strong>${(lam / 2).toFixed(2)} m</strong> ⇒ 完整波长 λ = <strong>${lam.toFixed(2)} m</strong></span>
            <span class="readout-pill">谐波频率 f_${nLoops} = <strong>${f} Hz</strong> (弦波速 v = 36 m s⁻¹)</span>
          `;

          activeAnimId = requestAnimationFrame(frame);
        }

        activeAnimId = requestAnimationFrame(frame);
      }
    },

    /* ----------------------------------------------------------------------
       LAB 6: Young's Double Slit vs Diffraction Grating Optical Bench
       ---------------------------------------------------------------------- */
    {
      id: 'lab6',
      badge: 'Ch.6 · C1 & C2 (* Ext)',
      title: '实验 6：杨氏双缝干涉 vs 平面衍射光栅光学台（含白光光谱）',
      mission: '🎯 探究任务：① 在「双缝模式」拖动波长从 400 nm 紫光到 700 nm 红光，验证 Δy = λD/a；② 切到「衍射光栅模式」对比亮纹变得多么<strong>锐利且间距不等宽</strong>；③ 开启「白光模式」观察中央白纹与内紫外红光谱！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab6"></canvas></div>
          <div class="lab-readout-strip" id="r-lab6"></div>
          <div class="lab-controls-grid" id="ctrl-lab6"></div>
        `;

        const canvas = container.querySelector('#c-lab6');
        const W = 860, H = 300;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab6');
        const ctrlWrap = container.querySelector('#ctrl-lab6');

        let mode = 'double'; // 'double' or 'grating'
        let whiteLight = false;
        let lamNm = 630, distD = 1.5, slitAmm = 0.25, linesPerMm = 400;

        function draw() {
          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#070d14';
          ctx.fillRect(0, 0, W, H);

          const screenTop = 26, screenH = 88;
          const cx = W / 2;

          ctx.strokeStyle = '#334155';
          ctx.strokeRect(30, screenTop, W - 60, screenH);

          if (mode === 'double') {
            // Scale: screen displays -30 mm to +30 mm around centre
            const halfSpanMm = 28;
            const pxPerMm = (W - 80) / (2 * halfSpanMm);

            if (!whiteLight) {
              const dyMm = ((lamNm * 1e-9 * distD) / (slitAmm * 1e-3)) * 1000;
              for (let px = 40; px <= W - 40; px++) {
                const yMm = (px - cx) / pxPerMm;
                const env = Math.exp(-Math.pow(yMm / 24, 2)); // mild single-slit envelope
                const cos2 = Math.pow(Math.cos((Math.PI * yMm) / dyMm), 2) * env;
                ctx.fillStyle = wavelengthToRGB(lamNm, cos2 * 0.95);
                ctx.fillRect(px, screenTop + 2, 1.5, screenH - 4);
              }
              // Intensity curve below
              ctx.strokeStyle = wavelengthToRGB(lamNm);
              ctx.lineWidth = 2.4;
              ctx.beginPath();
              for (let px = 40; px <= W - 40; px += 2) {
                const yMm = (px - cx) / pxPerMm;
                const env = Math.exp(-Math.pow(yMm / 24, 2));
                const cos2 = Math.pow(Math.cos((Math.PI * yMm) / dyMm), 2) * env;
                const plotY = 252 - 110 * cos2;
                if (px === 40) ctx.moveTo(px, plotY); else ctx.lineTo(px, plotY);
              }
              ctx.stroke();

              readout.innerHTML = `
                <span class="readout-pill">装置：<strong>杨氏双缝 (C1: Δy = λD/a)</strong></span>
                <span class="readout-pill">激光波长 λ = <strong>${lamNm} nm</strong></span>
                <span class="readout-pill">条纹间距 Δy = <strong>${dyMm.toFixed(2)} mm（等间距分布）</strong></span>
                <span class="readout-pill">跨越 10 个条纹间隔总宽 10Δy = <strong>${(10 * dyMm).toFixed(1)} mm</strong></span>
              `;
            } else {
              // White light double-slit superposition
              const sampleNms = [420, 470, 520, 575, 620, 675];
              for (let px = 40; px <= W - 40; px++) {
                const yMm = (px - cx) / pxPerMm;
                const env = Math.exp(-Math.pow(yMm / 23, 2));
                sampleNms.forEach((nm) => {
                  const dyMm = ((nm * 1e-9 * distD) / (slitAmm * 1e-3)) * 1000;
                  const inten = Math.pow(Math.cos((Math.PI * yMm) / dyMm), 2) * env * 0.28;
                  ctx.fillStyle = wavelengthToRGB(nm, inten);
                  ctx.fillRect(px, screenTop + 2, 1.5, screenH - 4);
                });
              }
              ctx.fillStyle = '#cbd5e1';
              ctx.font = 'bold 13px sans-serif';
              ctx.fillText('白光双缝特征：正中央 Δ=0 合成纯白亮纹；两侧出现“内紫外红”彩色条纹，外侧迅速重叠模糊！', 110, 205);
              readout.innerHTML = `
                <span class="readout-pill">光源：<strong>白光 (400–700 nm 复合光)</strong></span>
                <span class="readout-pill">中央 O 点：<strong>白色亮纹 (所有波长 Δ = 0)</strong></span>
                <span class="readout-pill">第 1 级彩带：<strong>紫光靠内 (Δy 小)、红光靠外 (Δy 大)</strong></span>
              `;
            }
          } else {
            // DIFFRACTION GRATING MODE (screen spans -1.8 m to +1.8 m)
            const dMeters = 1e-3 / linesPerMm;
            const halfSpanM = 1.8;
            const pxPerM = (W - 80) / (2 * halfSpanM);

            if (!whiteLight) {
              const lamM = lamNm * 1e-9;
              const nMax = Math.floor(dMeters / lamM - 1e-9);
              let y1Str = '超出 90°';

              // Baseline
              ctx.strokeStyle = '#334155';
              ctx.beginPath(); ctx.moveTo(40, 252); ctx.lineTo(W - 40, 252); ctx.stroke();

              for (let n = -nMax; n <= nMax; n++) {
                const sinTh = (n * lamM) / dMeters;
                if (Math.abs(sinTh) >= 0.998) continue;
                const th = Math.asin(sinTh);
                const yM = distD * Math.tan(th);
                if (n === 1) y1Str = `${yM.toFixed(3)} m (θ₁ = ${((th * 180) / Math.PI).toFixed(1)}°)`;
                const xPos = cx + yM * pxPerM;
                if (xPos < 36 || xPos > W - 36) continue;

                ctx.fillStyle = wavelengthToRGB(lamNm, 0.98);
                ctx.fillRect(xPos - 2, screenTop + 4, 4, screenH - 8);

                // Sharp spike on intensity plot
                ctx.strokeStyle = wavelengthToRGB(lamNm);
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(xPos - 5, 252);
                ctx.lineTo(xPos, 142);
                ctx.lineTo(xPos + 5, 252);
                ctx.stroke();

                ctx.fillStyle = '#e2e8f0';
                ctx.font = 'bold 11.5px sans-serif';
                ctx.fillText(`n=${ Math.abs(n)}`, xPos - 11, 134);
              }

              readout.innerHTML = `
                <span class="readout-pill">光栅间距 d = 1/N = <strong>${(dMeters * 1e6).toFixed(2)} × 10⁻⁶ m</strong></span>
                <span class="readout-pill">第 1 级位置 y₁ = D tan θ₁ = <strong>${y1Str}</strong></span>
                <span class="readout-pill">最高级数 n_max = <strong>${nMax}</strong> ⇒ 共产生 <strong>${2 * nMax + 1} 条锐利亮纹</strong></span>
              `;
            } else {
              // White light grating continuous spectra
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(cx - 2.5, screenTop + 4, 5, screenH - 8);
              ctx.font = 'bold 12px sans-serif';
              ctx.fillText('n=0 白色零级', cx - 36, 136);

              for (let order = 1; order <= 3; order++) {
                for (let nm = 400; nm <= 700; nm += 4) {
                  const sinTh = (order * nm * 1e-9) / dMeters;
                  if (sinTh >= 0.96) continue;
                  const yM = distD * Math.tan(Math.asin(sinTh));
                  for (const sgn of [-1, 1]) {
                    const xPos = cx + sgn * yM * pxPerM;
                    if (xPos > 36 && xPos < W - 36) {
                      ctx.fillStyle = wavelengthToRGB(nm, 0.78);
                      ctx.fillRect(xPos - 1.2, screenTop + 8 + (order - 1) * 4, 2.4, screenH - 16);
                    }
                  }
                }
              }
              ctx.fillStyle = '#cbd5e1';
              ctx.font = 'bold 13px sans-serif';
              ctx.fillText('白光光栅光谱：中央 n=0 纯白，两侧展开鲜明连续光谱（紫近红远；第 2、3 级外侧可能发生光谱重叠）！', 85, 215);
              readout.innerHTML = `
                <span class="readout-pill">装置：<strong>白光 + 平面衍射光栅 (${linesPerMm} lines/mm)</strong></span>
                <span class="readout-pill">每一级排序：<strong>紫光 (400 nm) 衍射角最小靠内，红光 (700 nm) 衍射角最大靠外</strong></span>
              `;
            }
          }
        }

        function renderControls() {
          ctrlWrap.innerHTML = `
            <div class="control-group">
              <label><span>光学元件与光源</span></label>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button class="secondary-btn" id="l6-dbl" style="flex:1;${mode === 'double' ? 'border-color:var(--brand-primary);font-weight:700;' : ''}">双缝 (C1)</button>
                <button class="secondary-btn" id="l6-grt" style="flex:1;${mode === 'grating' ? 'border-color:var(--brand-primary);font-weight:700;' : ''}">光栅 (C2)</button>
                <button class="secondary-btn" id="l6-wht" style="${whiteLight ? 'border-color:#f59e0b;font-weight:700;' : ''}">${whiteLight ? '🌈 白光开启' : '🔦 切白光'}</button>
              </div>
            </div>
            <div class="control-group">
              <label><span>单色光波长 λ</span><span id="l6-lam-val">${lamNm} nm</span></label>
              <input type="range" id="l6-lam" min="400" max="700" step="10" value="${lamNm}" ${whiteLight ? 'disabled' : ''} />
            </div>
            <div class="control-group">
              <label><span>屏幕距离 D</span><span id="l6-d-val">${distD.toFixed(1)} m</span></label>
              <input type="range" id="l6-d" min="0.8" max="2.4" step="0.1" value="${distD}" />
            </div>
            ${
              mode === 'double'
                ? `<div class="control-group">
                    <label><span>双缝间距 a</span><span id="l6-a-val">${slitAmm.toFixed(2)} mm</span></label>
                    <input type="range" id="l6-a" min="0.12" max="0.50" step="0.02" value="${slitAmm}" />
                  </div>`
                : `<div class="control-group">
                    <label><span>光栅刻线密度 N</span><span id="l6-n-val">${linesPerMm} lines/mm</span></label>
                    <input type="range" id="l6-n" min="200" max="600" step="50" value="${linesPerMm}" />
                  </div>`
            }
          `;

          ctrlWrap.querySelector('#l6-dbl').onclick = () => { mode = 'double'; renderControls(); draw(); };
          ctrlWrap.querySelector('#l6-grt').onclick = () => { mode = 'grating'; renderControls(); draw(); };
          ctrlWrap.querySelector('#l6-wht').onclick = () => { whiteLight = !whiteLight; renderControls(); draw(); };
          const lamSlider = ctrlWrap.querySelector('#l6-lam');
          if (lamSlider) {
            lamSlider.oninput = (e) => {
              lamNm = parseInt(e.target.value, 10);
              ctrlWrap.querySelector('#l6-lam-val').textContent = lamNm + ' nm';
              draw();
            };
          }
          ctrlWrap.querySelector('#l6-d').oninput = (e) => {
            distD = parseFloat(e.target.value);
            ctrlWrap.querySelector('#l6-d-val').textContent = distD.toFixed(1) + ' m';
            draw();
          };
          const aSlider = ctrlWrap.querySelector('#l6-a');
          if (aSlider) {
            aSlider.oninput = (e) => {
              slitAmm = parseFloat(e.target.value);
              ctrlWrap.querySelector('#l6-a-val').textContent = slitAmm.toFixed(2) + ' mm';
              draw();
            };
          }
          const nSlider = ctrlWrap.querySelector('#l6-n');
          if (nSlider) {
            nSlider.oninput = (e) => {
              linesPerMm = parseInt(e.target.value, 10);
              ctrlWrap.querySelector('#l6-n-val').textContent = linesPerMm + ' lines/mm';
              draw();
            };
          }
        }

        renderControls();
        draw();
      }
    },

    /* ----------------------------------------------------------------------
       LAB 7: Sound Characteristics (Pitch, Loudness, Quality) & CRO Scope
       ---------------------------------------------------------------------- */
    {
      id: 'lab7',
      badge: 'Ch.7 · 7.4 CRO & 乐音',
      title: '实验 7：乐音三要素与示波器（CRO）互动合成台（支持试听！）',
      mission: '🎯 探究任务：① 固定 CRO 时基不变，调节频率 f（音调）、振幅 A（响度）和乐器（音色），还可点「🔊 试听 1.5 秒」亲耳听差别；② 保持声音不变，切换 CRO 时基旋钮，验证<strong>拧旋钮只缩放屏幕图形、不改变声音音调</strong>！',
      mount(container) {
        container.innerHTML = `
          <div class="lab-canvas-wrap"><canvas id="c-lab7"></canvas></div>
          <div class="lab-readout-strip" id="r-lab7"></div>
          <div class="lab-controls-grid">
            <div class="control-group">
              <label><span>发声源音色 Quality / Timbre</span></label>
              <select id="l7-inst" class="secondary-btn" style="width:100%;padding:8px;">
                <option value="fork">🔔 纯音叉 Tuning Fork（纯净基频）</option>
                <option value="violin">🎻 小提琴 Violin（丰富谐波泛音）</option>
                <option value="piano">🎹 钢琴 Piano（2f, 3f 泛音叠加）</option>
                <option value="noise">📢 噪音 Noise（无规则非周期振动）</option>
              </select>
            </div>
            <div class="control-group">
              <label><span>声音频率 f（决定音调 Pitch）</span><span id="l7-f-val">250 Hz</span></label>
              <input type="range" id="l7-f" min="125" max="1000" step="25" value="250" />
            </div>
            <div class="control-group">
              <label><span>信号电压振幅 V₀（决定响度 Loudness）</span><span id="l7-a-val">1.0 V</span></label>
              <input type="range" id="l7-a" min="0.4" max="1.8" step="0.2" value="1.0" />
            </div>
            <div class="control-group">
              <label><span>CRO 时基旋钮 Time-base & 试听</span></label>
              <div style="display:flex;gap:8px;">
                <select id="l7-tb" class="secondary-btn" style="flex:1;padding:8px;">
                  <option value="0.5">0.5 ms / div</option>
                  <option value="1.0" selected>1.0 ms / div</option>
                  <option value="2.0">2.0 ms / div</option>
                </select>
                <button class="primary-btn" id="l7-beep" style="padding:8px 12px;">🔊 试听</button>
              </div>
            </div>
          </div>
        `;

        const canvas = container.querySelector('#c-lab7');
        const W = 860, H = 300;
        const ctx = setupHiDPICanvas(canvas, W, H);
        const readout = container.querySelector('#r-lab7');

        let inst = 'fork', freq = 250, voltAmp = 1.0, tbMs = 1.0;
        const yGain = 0.5; // 0.5 V / div

        function sampleWave(phase) {
          if (inst === 'fork') return Math.sin(phase);
          if (inst === 'violin') {
            return 0.72 * Math.sin(phase) + 0.34 * Math.sin(2 * phase + 0.4) + 0.22 * Math.sin(3 * phase) + 0.12 * Math.sin(4 * phase);
          }
          if (inst === 'piano') {
            return 0.82 * Math.sin(phase) + 0.28 * Math.cos(2 * phase) + 0.14 * Math.sin(3 * phase);
          }
          // Noise pseudo-random
          return 0.65 * Math.sin(phase * 1.7 + Math.sin(phase * 4.3)) + 0.45 * Math.cos(phase * 7.1);
        }

        function draw() {
          ctx.clearRect(0, 0, W, H);
          ctx.fillStyle = '#071510';
          ctx.fillRect(0, 0, W, H);

          // 10 horizontal divs × 8 vertical divs CRO graticule
          const gx = 80, gy = 18, gw = 700, gh = 264;
          const divX = gw / 10, divY = gh / 8;

          ctx.strokeStyle = 'rgba(34, 197, 94, 0.2)';
          ctx.lineWidth = 1;
          for (let i = 0; i <= 10; i++) {
            ctx.beginPath(); ctx.moveTo(gx + i * divX, gy); ctx.lineTo(gx + i * divX, gy + gh); ctx.stroke();
          }
          for (let j = 0; j <= 8; j++) {
            ctx.beginPath(); ctx.moveTo(gx, gy + j * divY); ctx.lineTo(gx + gw, gy + j * divY); ctx.stroke();
          }

          // Center axes with subdivisions
          ctx.strokeStyle = 'rgba(74, 222, 128, 0.48)';
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(gx, gy + gh / 2); ctx.lineTo(gx + gw, gy + gh / 2);
          ctx.moveTo(gx + gw / 2, gy); ctx.lineTo(gx + gw / 2, gy + gh);
          ctx.stroke();

          // Glowing green CRO phosphor trace
          const totalTimeSec = (10 * tbMs) / 1000;
          ctx.save();
          ctx.beginPath(); ctx.rect(gx, gy, gw, gh); ctx.clip();
          ctx.shadowColor = '#4ade80';
          ctx.shadowBlur = 8;
          ctx.strokeStyle = '#4ade80';
          ctx.lineWidth = 2.8;
          ctx.beginPath();
          for (let px = 0; px <= gw; px += 1.5) {
            const tSec = (px / gw) * totalTimeSec;
            const valV = voltAmp * sampleWave(2 * Math.PI * freq * tSec);
            const y = gy + gh / 2 - (valV / yGain) * divY;
            if (px === 0) ctx.moveTo(gx + px, y); else ctx.lineTo(gx + px, y);
          }
          ctx.stroke();
          ctx.restore();

          const periodMs = 1000 / freq;
          const divsPerCycle = periodMs / tbMs;
          readout.innerHTML = `
            <span class="readout-pill">CRO 设置：<strong>Time-base = ${tbMs.toFixed(1)} ms div⁻¹，Y-gain = 0.5 V div⁻¹</strong></span>
            <span class="readout-pill">周期 T = <strong>${periodMs.toFixed(2)} ms</strong>（屏幕上每周期占 <strong>${inst === 'noise' ? '无固定周期' : divsPerCycle.toFixed(2) + ' 格'}</strong>）</span>
            <span class="readout-pill">基音频率 f = <strong>${inst === 'noise' ? '杂乱频谱' : freq + ' Hz'}</strong>，竖直单边占 <strong>${(voltAmp / yGain).toFixed(1)} 格</strong></span>
          `;
        }

        container.querySelector('#l7-inst').onchange = (e) => { inst = e.target.value; draw(); };
        container.querySelector('#l7-f').oninput = (e) => {
          freq = parseInt(e.target.value, 10);
          container.querySelector('#l7-f-val').textContent = freq + ' Hz';
          draw();
        };
        container.querySelector('#l7-a').oninput = (e) => {
          voltAmp = parseFloat(e.target.value);
          container.querySelector('#l7-a-val').textContent = voltAmp.toFixed(1) + ' V';
          draw();
        };
        container.querySelector('#l7-tb').onchange = (e) => {
          tbMs = parseFloat(e.target.value);
          draw();
        };

        container.querySelector('#l7-beep').onclick = () => {
          try {
            const AudioContextCls = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextCls) return;
            if (!audioCtx) audioCtx = new AudioContextCls();
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const now = audioCtx.currentTime;
            const master = audioCtx.createGain();
            const safeVol = Math.min(0.18, 0.04 + (voltAmp / 1.8) * 0.12);
            master.gain.setValueAtTime(0.001, now);
            master.gain.exponentialRampToValueAtTime(safeVol, now + 0.04);
            master.gain.exponentialRampToValueAtTime(0.0008, now + 1.25);
            master.connect(audioCtx.destination);

            if (inst === 'noise') {
              const bufSize = audioCtx.sampleRate * 1.3;
              const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
              const data = buf.getChannelData(0);
              for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
              const src = audioCtx.createBufferSource();
              src.buffer = buf;
              src.connect(master);
              src.start(now);
              src.stop(now + 1.28);
            } else {
              const harmonics = inst === 'fork' ? [[1, 1.0]] : inst === 'violin' ? [[1, 0.7], [2, 0.35], [3, 0.22], [4, 0.12]] : [[1, 0.8], [2, 0.28], [3, 0.14]];
              harmonics.forEach(([mult, weight]) => {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq * mult, now);
                g.gain.setValueAtTime(weight, now);
                osc.connect(g);
                g.connect(master);
                osc.start(now);
                osc.stop(now + 1.28);
              });
            }
          } catch (_) {
            // Ignore audio restriction errors gracefully
          }
        };

        draw();
      }
    }
  ];

  window.BOOK_3B_LABS = {
    list: LAB_DEFS,
    stop: stopCurrentLab,
    mountById(labId, container) {
      stopCurrentLab();
      const found = LAB_DEFS.find((l) => l.id === labId) || LAB_DEFS[0];
      found.mount(container);
      return found;
    }
  };
})();
