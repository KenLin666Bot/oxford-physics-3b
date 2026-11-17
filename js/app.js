/* ==========================================================================
   Oxford Physics at Work for HKDSE — Book 3B: Wave Motion II
   Main Application Controller (SPA, Progress Persistence, Math Rendering)
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'oxford_hkdse_3b_state_v2';
  const chapters = window.BOOK_3B_CHAPTERS || [];
  const mapData = window.BOOK_3B_MAP || { nodes: [], edges: [], synthesisCards: [] };
  const formulaeList = window.BOOK_3B_FORMULAE || [];
  const glossaryList = window.BOOK_3B_GLOSSARY || [];
  const examsList = window.BOOK_3B_EXAMS || [];

  // Flatten all sections & questions for fast lookup
  const sectionMap = new Map();
  const orderedSections = [];
  const questionMap = new Map();

  chapters.forEach((ch) => {
    (ch.sections || []).forEach((sec) => {
      sec.chapterId = ch.id;
      sec.chapterNumber = ch.number;
      sec.chapterTitleCn = ch.titleCn;
      sec.chapterColor = ch.color;
      sectionMap.set(sec.id, sec);
      orderedSections.push(sec);
      (sec.questions || []).forEach((q) => {
        q.secId = sec.id;
        q.secTitleCn = sec.titleCn;
        q.chapterId = ch.id;
        questionMap.set(q.id, q);
      });
    });
  });

  // Default state
  const defaultState = {
    theme: 'light',
    view: 'learn',
    secId: orderedSections[0] ? orderedSections[0].id : '4.1',
    stageBySec: {},       // { '4.1': 0 } (0, 1, 2)
    guidedDone: {},       // { '4.1-0': true }
    qSolved: {},          // { 'q-4-1-1': { choice: 1, correct: true } }
    mistakes: {},         // { 'q-4-1-2': { count: 1, lastChoice: 0 } }
    starred: {},          // { 'q-4-1-3': true }
    fcMastered: {},       // { 'g1': true }
    activeMapNode: 'n-4-2',
    activeLabId: 'lab1',
    activeExamCh: 'ch4',
    examShowCn: true,
    examMc: {},           // { 'ex-4-mc1': 1 }
    examSqDraft: {},      // { 'ex-4-sq1-0': '...' }
    examSqRevealed: {},   // { 'ex-4-sq1-0': true }
    examSqRubric: {},     // { 'ex-4-sq1-0-0': true }
    refTab: 'formulae',   // 'formulae' | 'flashcards'
    refChFilter: 'all',
    fcOnlyUnmastered: false
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const parsed = JSON.parse(raw);
      return { ...defaultState, ...parsed };
    } catch (_) {
      return { ...defaultState };
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      // Ignore storage quota errors
    }
  }

  /* ================= Dual-Engine Math Rendering (KaTeX + Instant Offline Typesetter) ================= */
  function latexExprToHtml(tex) {
    let s = tex.trim();

    // Handle \begin{cases} ... \end{cases}
    s = s.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, (_, body) => {
      const rows = body.split(/\\\\/).map((r) => r.trim()).filter(Boolean);
      const cells = rows.map((r) => {
        const parts = r.split('&').map((p) => latexExprToHtml(p));
        return `<span>${parts[0] || ''}</span><span class="math-rm">${parts[1] || ''}</span>`;
      }).join('');
      return `<span class="math-cases"><span class="math-cases-brace">{</span><span class="math-cases-rows">${cells}</span></span>`;
    });

    // Protect \text{...} tokens before variable styling
    const textTokens = [];
    s = s.replace(/\\text\{([^{}]*)\}/g, (_, t) => {
      textTokens.push(`<span class="math-rm">${t}</span>`);
      return `@@TXT${textTokens.length - 1}@@`;
    });

    // Clean sizing macros & standard symbols
    s = s
      .replace(/\\left\s*([(|\[])/g, '$1')
      .replace(/\\right\s*([)|\]])/g, '$1')
      .replace(/\\lfloor/g, '⌊')
      .replace(/\\rfloor/g, '⌋')
      .replace(/\\max/g, '<span class="math-rm">max</span>')
      .replace(/\\arcsin/g, '<span class="math-rm">sin</span><sup>−1</sup>')
      .replace(/\\(sin|cos|tan)/g, '<span class="math-rm">$1</span> ')
      .replace(/\\lambda/g, '<i>λ</i>')
      .replace(/\\Delta/g, 'Δ')
      .replace(/\\theta/g, '<i>θ</i>')
      .replace(/\\alpha/g, '<i>α</i>')
      .replace(/\\beta/g, '<i>β</i>')
      .replace(/\\gamma/g, '<i>γ</i>')
      .replace(/\\mu/g, '<i>μ</i>')
      .replace(/\\pi/g, 'π')
      .replace(/\\sim/g, ' ∼ ')
      .replace(/\\uparrow/g, '↑')
      .replace(/\\downarrow/g, '↓')
      .replace(/\\times/g, ' × ')
      .replace(/\\div/g, ' ÷ ')
      .replace(/\\pm/g, '±')
      .replace(/\\le/g, ' ≤ ')
      .replace(/\\ge/g, ' ≥ ')
      .replace(/\\ll/g, ' ≪ ')
      .replace(/\\gg/g, ' ≫ ')
      .replace(/\\approx/g, ' ≈ ')
      .replace(/\\neq/g, ' ≠ ')
      .replace(/\\propto/g, ' ∝ ')
      .replace(/\\perp/g, ' ⊥ ')
      .replace(/\\parallel/g, ' ∥ ')
      .replace(/\\Longleftrightarrow|\\Leftrightarrow/g, ' ⇔ ')
      .replace(/\\Longrightarrow|\\Rightarrow/g, ' ⇒ ')
      .replace(/\\to/g, ' → ')
      .replace(/\\dots/g, '…')
      .replace(/\\qquad/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
      .replace(/\\quad/g, '&nbsp;&nbsp;')
      .replace(/\\,/g, '&thinsp;')
      .replace(/\\%/g, '%')
      .replace(/\^\\circ/g, '°');

    // Subscripts & Superscripts BEFORE fractions/roots so inner braces are resolved first
    for (let pass = 0; pass < 2; pass++) {
      s = s
        .replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>')
        .replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>')
        .replace(/\^\{([^{}]+)\}/g, (_, exp) => `<sup>${exp.replace(/-/g, '−')}</sup>`)
        .replace(/\^([a-zA-Z0-9+-])/g, '<sup>$1</sup>');
    }

    // Square roots \sqrt{...}
    for (let pass = 0; pass < 2; pass++) {
      s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
    }

    // Stacked fractions \frac{a}{b} (multi-pass for nested fractions)
    for (let pass = 0; pass < 3; pass++) {
      s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '<span class="math-frac"><span class="num">$1</span><span class="den">$2</span></span>');
    }

    // Restore \text{...} tokens
    s = s.replace(/@@TXT(\d+)@@/g, (_, idx) => textTokens[parseInt(idx, 10)] || '');
    return s;
  }

  function renderOfflineMathInNode(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.includes('$')) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p || ['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE'].includes(p.tagName) || p.closest('.katex')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((tNode) => {
      const raw = tNode.nodeValue;
      const replaced = raw
        .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => `<span class="math-display" data-tex-display="${encodeURIComponent(tex)}">${latexExprToHtml(tex)}</span>`)
        .replace(/\$([^$\n]+?)\$/g, (_, tex) => `<span class="math-inline" data-tex-inline="${encodeURIComponent(tex)}">${latexExprToHtml(tex)}</span>`);
      if (replaced !== raw) {
        const span = document.createElement('span');
        span.innerHTML = replaced;
        tNode.parentNode.replaceChild(span, tNode);
      }
    });
  }

  function typesetMath(container) {
    const el = container || document.body;
    if (window.renderMathInElement && window.katex) {
      // Restore any offline-rendered placeholders if upgrading live to KaTeX
      el.querySelectorAll('[data-tex-display]').forEach((n) => {
        n.outerHTML = `$$${decodeURIComponent(n.dataset.texDisplay)}$$`;
      });
      el.querySelectorAll('[data-tex-inline]').forEach((n) => {
        n.outerHTML = `$${decodeURIComponent(n.dataset.texInline)}$`;
      });
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
        return;
      } catch (_) {
        // Fallback to built-in typesetter below
      }
    }
    renderOfflineMathInNode(el);
  }

  window.__onKatexReady = () => typesetMath(document.body);

  /* ================= Global Header & Theme ================= */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }

  function updateGlobalBadges() {
    const totalQ = questionMap.size || 1;
    let solvedCount = 0;
    questionMap.forEach((_, qid) => {
      if (state.qSolved[qid] && state.qSolved[qid].correct) solvedCount++;
    });
    const pct = Math.round((solvedCount / totalQ) * 100);
    const fill = document.getElementById('globalProgressFill');
    const txt = document.getElementById('globalProgressText');
    if (fill) fill.style.width = pct + '%';
    if (txt) txt.textContent = pct + '%';

    const mistakeKeys = Object.keys(state.mistakes);
    const badge = document.getElementById('mistakeCountBadge');
    if (badge) {
      if (mistakeKeys.length > 0) {
        badge.textContent = mistakeKeys.length;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  }

  /* ================= Navigation & Sidebar ================= */
  function closeMobileSidebar() {
    document.getElementById('chapterSidebar')?.classList.remove('mobile-open');
    document.getElementById('sidebarBackdrop')?.classList.add('hidden');
  }

  function renderSidebar() {
    const wrap = document.getElementById('sidebarChapterList');
    if (!wrap) return;

    wrap.innerHTML = chapters.map((ch) => {
      const secsHtml = ch.sections.map((sec) => {
        const isActive = state.view === 'learn' && state.secId === sec.id;
        const dots = (sec.questions || []).map((q) => {
          const done = state.qSolved[q.id] && state.qSolved[q.id].correct;
          return `<span class="stage-dot ${done ? 'done' : ''}" title="${q.levelLabel}"></span>`;
        }).join('');
        const hasExt = (sec.dseTag || '').includes('Ext');
        return `
          <li>
            <button class="sidebar-sec-btn ${isActive ? 'active' : ''}" data-goto-sec="${sec.id}">
              <span><strong>${sec.code}</strong> ${sec.titleCn}${hasExt ? ' <small style="color:#7c3aed;font-weight:800;">*</small>' : ''}</span>
              <span class="sec-status-dots">${dots}</span>
            </button>
          </li>
        `;
      }).join('');

      return `
        <div class="sidebar-chapter-group">
          <button class="sidebar-chapter-header" data-goto-sec="${ch.sections[0].id}">
            <span class="ch-badge-num" style="background:${ch.color}">${ch.number.replace('Chapter ', 'Ch.')}</span>
            <span class="sidebar-ch-title-wrap">
              <span class="sidebar-ch-cn">${ch.titleCn}</span>
              <span class="sidebar-ch-en">${ch.titleEn}</span>
            </span>
          </button>
          <ul class="sidebar-section-list">
            ${secsHtml}
            <li>
              <button class="sidebar-sec-btn" data-goto-exam="${ch.id}" style="color:var(--brand-primary);font-weight:700;border-top:1px dashed var(--border-color);margin-top:3px;border-radius:0 0 6px 6px;">
                <span>📝 ${ch.number.replace('Chapter ', 'Ch.')} 综合模考卷 (MC+SQ)</span>
                <span>→</span>
              </button>
            </li>
          </ul>
        </div>
      `;
    }).join('');

    wrap.querySelectorAll('[data-goto-sec]').forEach((btn) => {
      btn.onclick = () => {
        navigateToSection(btn.dataset.gotoSec);
        closeMobileSidebar();
      };
    });

    wrap.querySelectorAll('[data-goto-exam]').forEach((btn) => {
      btn.onclick = () => {
        state.activeExamCh = btn.dataset.gotoExam;
        switchView('exam');
        closeMobileSidebar();
      };
    });
  }

  function switchView(viewName) {
    if (viewName !== 'labs' && window.BOOK_3B_LABS) {
      window.BOOK_3B_LABS.stop();
    }
    state.view = viewName;
    saveState();

    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    document.querySelectorAll('.view-panel').forEach((panel) => {
      panel.classList.toggle('hidden', panel.id !== `view-${viewName}`);
    });

    const sidebar = document.getElementById('chapterSidebar');
    if (sidebar) {
      sidebar.classList.toggle('sidebar-hidden-for-view', viewName !== 'learn');
    }

    renderSidebar();

    if (viewName === 'learn') renderLearnView();
    else if (viewName === 'map') renderMapView();
    else if (viewName === 'labs') renderLabsView();
    else if (viewName === 'exam') renderExamView();
    else if (viewName === 'reference') renderReferenceView();
    else if (viewName === 'mistakes') renderMistakesView();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToSection(secId) {
    if (!sectionMap.has(secId)) return;
    state.secId = secId;
    if (state.view !== 'learn') {
      switchView('learn');
    } else {
      saveState();
      renderSidebar();
      renderLearnView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ================= VIEW 1: Chapter & Section Learning ================= */
  function renderLearnView() {
    const sec = sectionMap.get(state.secId) || orderedSections[0];
    const ch = chapters.find((c) => c.id === sec.chapterId) || chapters[0];
    const bannerWrap = document.getElementById('learnOverviewBanner');
    const contentWrap = document.getElementById('sectionContentContainer');
    if (!bannerWrap || !contentWrap) return;

    // Hero Banner with Quick 4-Chapter Switcher
    const quickChHtml = chapters.map((c) => {
      const chQs = c.sections.flatMap((s) => s.questions || []);
      const chDone = chQs.filter((q) => state.qSolved[q.id]?.correct).length;
      return `
        <button class="hero-ch-card ${c.id === ch.id ? 'active' : ''}" data-hero-ch="${c.sections[0].id}">
          <div class="hero-ch-num">${c.number} · 已闯关 ${chDone}/${chQs.length}</div>
          <div class="hero-ch-name">${c.titleCn} (${c.titleEn})</div>
        </button>
      `;
    }).join('');

    bannerWrap.innerHTML = `
      <div class="hero-banner">
        <div class="hero-top-row">
          <span class="hero-tag">📚 OXFORD PHYSICS AT WORK · BOOK 3B (${ch.number}: ${ch.titleEn})</span>
          <button class="hero-tag" id="heroExamJumpBtn" style="border:1px solid rgba(255,255,255,0.4);cursor:pointer;color:#fff;">
            📝 做本章模考卷 (${ch.number.replace('Chapter ', 'Ch.')} Quiz) →
          </button>
        </div>
        <h1 class="hero-title">${ch.number} · ${ch.titleCn}（${ch.titleEn}）</h1>
        <p class="hero-subtitle">${ch.overview}</p>
        <div class="hero-quick-chapters">${quickChHtml}</div>
      </div>
    `;

    bannerWrap.querySelectorAll('[data-hero-ch]').forEach((btn) => {
      btn.onclick = () => navigateToSection(btn.dataset.heroCh);
    });
    bannerWrap.querySelector('#heroExamJumpBtn').onclick = () => {
      state.activeExamCh = ch.id;
      switchView('exam');
    };

    // Concepts HTML
    const conceptsHtml = (sec.concepts || []).map((cb) => `
      <div class="concept-block">
        <h3 class="concept-title">${cb.title}</h3>
        <div class="concept-body">${cb.html}</div>
      </div>
    `).join('');

    // Formulae HTML
    const formulaeHtml = (sec.formulae || []).map((fm) => `
      <div class="formula-box">
        <div class="formula-header">
          <span class="formula-title">📐 课本公式原貌：${fm.name}</span>
          <span class="formula-sheet-badge">${fm.badge}</span>
        </div>
        <div class="formula-math-main">$$${fm.latex}$$</div>
        <div class="formula-vars">
          ${(fm.vars || []).map((v) => `<div>• ${v}</div>`).join('')}
        </div>
        ${fm.condition ? `<div class="formula-condition">⚠️ 适用条件与叮嘱：${fm.condition}</div>` : ''}
      </div>
    `).join('');

    // Socratic Guided Inquiry Chain HTML
    let guidedHtml = '';
    if (sec.guidedChain && sec.guidedChain.steps) {
      const stepsHtml = sec.guidedChain.steps.map((st, idx) => {
        const key = `${sec.id}-${idx}`;
        const prevKey = `${sec.id}-${idx - 1}`;
        const isUnlocked = idx === 0 || !!state.guidedDone[prevKey];
        const isDone = !!state.guidedDone[key];

        if (!isUnlocked) {
          return `
            <div class="guided-step-card locked">
              <div class="guided-step-q">🔒 第 ${idx + 1} 步追问（完成上一步后自动解锁）</div>
            </div>
          `;
        }

        const optsHtml = (st.options || []).map((optText, oIdx) => {
          const btnClass = isDone && oIdx === st.answerIndex ? 'guided-opt-btn right' : 'guided-opt-btn';
          return `<button class="${btnClass}" data-gstep="${idx}" data-gopt="${oIdx}">${optText}</button>`;
        }).join('');

        return `
          <div class="guided-step-card ${isDone ? 'done' : ''}" id="gcard-${sec.id}-${idx}">
            <div class="guided-step-q">${st.q}</div>
            <div class="guided-micro-opts">${optsHtml}</div>
            <div class="guided-step-ans ${isDone ? '' : 'hidden'}" id="gans-${sec.id}-${idx}">
              💡 ${st.a}
            </div>
          </div>
        `;
      }).join('');

      const doneSteps = sec.guidedChain.steps.filter((_, idx) => state.guidedDone[`${sec.id}-${idx}`]).length;
      guidedHtml = `
        <div class="guided-chain-box">
          <div class="guided-chain-header">
            <div class="guided-chain-title">${sec.guidedChain.title}</div>
            <span class="sec-dse-tag">推导进度 ${doneSteps} / ${sec.guidedChain.steps.length}</span>
          </div>
          <p class="guided-chain-intro">${sec.guidedChain.intro}</p>
          <div class="guided-steps-list">${stepsHtml}</div>
        </div>
      `;
    }

    // Relations HTML
    const relationsHtml = (sec.relations && sec.relations.length) ? `
      <div class="relation-box">
        <div class="box-label" style="color:#1d4ed8;">🕸️ 知识点前后串联关系（点击卡片可直接跳转对应章节）</div>
        <div class="relation-grid">
          ${sec.relations.map((rel) => `
            <div class="relation-item ${rel.targetSec ? 'clickable' : ''}" ${rel.targetSec ? `data-rel-sec="${rel.targetSec}"` : ''}>
              <span class="relation-dir">${rel.dir}</span>
              <div>${rel.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    // Traps HTML
    const trapsHtml = (sec.traps && sec.traps.length) ? `
      <div class="trap-box">
        <div class="box-label" style="color:#dc2626;">⚠️ HKDSE 考场高频扣分陷阱与标准修正</div>
        <div class="trap-list">
          ${sec.traps.map((t) => `
            <div class="trap-pair">
              <div class="trap-wrong">❌ ${t.wrong}</div>
              <div class="trap-right">✅ ${t.right}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    // Linked Lab Callout
    const labCalloutHtml = sec.linkedLab ? `
      <div class="inline-lab-Launcher">
        <div class="inline-lab-info">
          <h4>🔬 配套动态互动实验：${sec.linkedLab.title}</h4>
          <p>${sec.linkedLab.prompt}</p>
        </div>
        <button class="primary-btn" data-open-lab="${sec.linkedLab.labId}">打开互动实验室 →</button>
      </div>
    ` : '';

    // Prev / Next Section Navigation
    const curIdx = orderedSections.findIndex((s) => s.id === sec.id);
    const prevSec = curIdx > 0 ? orderedSections[curIdx - 1] : null;
    const nextSec = curIdx < orderedSections.length - 1 ? orderedSections[curIdx + 1] : null;
    const isExtTag = (sec.dseTag || '').includes('Ext');

    contentWrap.innerHTML = `
      <article class="section-card">
        <div class="section-header-top">
          <div class="sec-pill-group">
            <span class="sec-code-pill" style="background:${sec.chapterColor}">Section ${sec.code}</span>
            <span class="sec-dse-tag ${isExtTag ? 'is-ext' : ''}">${sec.dseTag || 'Core'}</span>
          </div>
          <span style="font-size:13px;color:var(--text-muted);font-weight:600;">中文透彻讲原理 · 英文术语精准应试</span>
        </div>

        <h2 class="section-main-title">${sec.titleCn}</h2>
        <div class="section-en-subtitle">${sec.titleEn}</div>

        ${sec.realLifeHook ? `
          <div class="real-life-box">
            <div class="box-label">${sec.realLifeHook.title}</div>
            ${sec.realLifeHook.html}
          </div>
        ` : ''}

        ${conceptsHtml}
        ${formulaeHtml}
        ${guidedHtml}
        ${relationsHtml}
        ${trapsHtml}
        ${labCalloutHtml}
      </article>

      <div id="progressiveQuizMount"></div>

      <div class="section-bottom-nav">
        ${prevSec
          ? `<button class="secondary-btn" data-nav-sec="${prevSec.id}">← 上一节：${prevSec.code} ${prevSec.titleCn}</button>`
          : `<span></span>`}
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="secondary-btn" id="bottomExamBtn">📝 ${ch.number.replace('Chapter ', 'Ch.')} 模考卷</button>
          ${nextSec
            ? `<button class="primary-btn" data-nav-sec="${nextSec.id}">下一节：${nextSec.code} ${nextSec.titleCn} →</button>`
            : `<button class="primary-btn" id="finishAllExamBtn">🎉 学完全书！挑战 Ch.7 综合模考卷 →</button>`}
        </div>
      </div>
    `;

    // Bind Guided Chain buttons
    contentWrap.querySelectorAll('[data-gstep]').forEach((btn) => {
      btn.onclick = () => {
        const sIdx = parseInt(btn.dataset.gstep, 10);
        const oIdx = parseInt(btn.dataset.gopt, 10);
        const stObj = sec.guidedChain.steps[sIdx];
        if (oIdx === stObj.answerIndex) {
          state.guidedDone[`${sec.id}-${sIdx}`] = true;
          saveState();
          renderLearnView();
        } else {
          btn.classList.add('wrong');
          const ansBox = document.getElementById(`gans-${sec.id}-${sIdx}`);
          if (ansBox) {
            ansBox.classList.remove('hidden');
            ansBox.innerHTML = '🤔 差一点点！再点旁边另一个选项对比看看～';
          }
        }
      };
    });

    // Bind Relation jumps, Lab launchers & Prev/Next buttons
    contentWrap.querySelectorAll('[data-rel-sec]').forEach((card) => {
      card.onclick = () => navigateToSection(card.dataset.relSec);
    });
    contentWrap.querySelectorAll('[data-open-lab]').forEach((btn) => {
      btn.onclick = () => {
        state.activeLabId = btn.dataset.openLab;
        switchView('labs');
      };
    });
    contentWrap.querySelectorAll('[data-nav-sec]').forEach((btn) => {
      btn.onclick = () => navigateToSection(btn.dataset.navSec);
    });
    contentWrap.querySelector('#bottomExamBtn').onclick = () => {
      state.activeExamCh = ch.id;
      switchView('exam');
    };
    const finishBtn = contentWrap.querySelector('#finishAllExamBtn');
    if (finishBtn) {
      finishBtn.onclick = () => {
        state.activeExamCh = 'ch7';
        switchView('exam');
      };
    }

    renderSectionProgressiveQuiz(sec);
    typesetMath(bannerWrap);
    typesetMath(contentWrap);
  }

  function renderSectionProgressiveQuiz(sec) {
    const mount = document.getElementById('progressiveQuizMount');
    if (!mount || !sec.questions || !sec.questions.length) return;

    const curStage = state.stageBySec[sec.id] || 0;
    const q = sec.questions[curStage] || sec.questions[0];
    const saved = state.qSolved[q.id];
    const isStarred = !!state.starred[q.id];

    const stepperHtml = sec.questions.map((item, idx) => {
      const done = state.qSolved[item.id] && state.qSolved[item.id].correct;
      return `
        <button class="stage-tab-btn ${idx === curStage ? 'active' : ''} ${done ? 'solved' : ''}" data-stage-idx="${idx}">
          <span>${done ? '✅' : `L${idx + 1}`}</span>
          <span>${item.levelLabel}</span>
        </button>
      `;
    }).join('');

    const letters = ['A', 'B', 'C', 'D'];
    const optsHtml = q.options.map((opt, idx) => {
      let cls = 'q-option-btn';
      if (saved) {
        if (idx === q.answerIndex) cls += ' correct-choice';
        else if (idx === saved.choice && !saved.correct) cls += ' wrong-choice';
      }
      return `
        <button class="${cls}" data-q-choice="${idx}">
          <span class="q-opt-letter">${letters[idx]}</span>
          <span>${opt}</span>
        </button>
      `;
    }).join('');

    let feedbackHtml = '';
    if (saved) {
      const diagText = !saved.correct && q.wrongDiagnostics && q.wrongDiagnostics[saved.choice]
        ? `<p style="color:#dc2626;font-weight:700;margin-bottom:8px;">🎯 错因诊断：${q.wrongDiagnostics[saved.choice]}</p>`
        : '';
      const kwHtml = (q.markingKeywords && q.markingKeywords.length) ? `
        <div class="marking-keywords-box">
          <div style="font-weight:800;margin-bottom:4px;color:var(--text-primary);">📝 HKDSE 英文得分关键词（Marking Scheme Keywords）：</div>
          <div>${q.markingKeywords.map((kw) => `<span class="kw-chip">${kw}</span>`).join('')}</div>
        </div>
      ` : '';
      const nextStageBtn = saved.correct && curStage < sec.questions.length - 1
        ? `<div style="margin-top:12px;"><button class="primary-btn" id="nextStageBtn">进入下一阶挑战（L${curStage + 2}） →</button></div>`
        : '';

      feedbackHtml = `
        <div class="q-feedback-box ${saved.correct ? 'is-correct' : 'is-wrong'}">
          <div style="font-weight:800;font-size:15.5px;margin-bottom:6px;color:${saved.correct ? 'var(--success-text)' : '#dc2626'};">
            ${saved.correct ? '🎉 回答正确！逻辑非常扎实！' : '💡 别灰心，已自动加入「错题本」！看看下面的错因诊断与原理解析：'}
          </div>
          ${diagText}
          <div><strong>完整解析：</strong>${q.explanation}</div>
          ${kwHtml}
          ${nextStageBtn}
        </div>
      `;
    }

    mount.innerHTML = `
      <section class="progressive-quiz-section">
        <div class="quiz-sec-header">
          <div>
            <h3 style="font-size:19px;font-weight:800;">🎯 循序渐进·三阶闯关训练（Section ${sec.code}）</h3>
            <p style="font-size:13.5px;color:var(--text-muted);">从生活直觉 → 定量推演 → HKDSE 全英文应试实战，一步一个台阶稳扎稳打</p>
          </div>
          <div class="quiz-stage-stepper">${stepperHtml}</div>
        </div>

        <div class="question-card">
          <div class="q-meta-bar">
            <span class="q-level-badge level-${q.level}">${q.levelLabel}</span>
            <div class="q-actions-right">
              <button class="secondary-btn" id="qHintBtn">💡 启发提示</button>
              <button class="secondary-btn" id="qStarBtn" style="${isStarred ? 'border-color:#f59e0b;color:#d97706;' : ''}">
                ${isStarred ? '⭐ 已收藏' : '☆ 收藏本题'}
              </button>
              ${saved ? '<button class="secondary-btn" id="qResetBtn">🔄 重做</button>' : ''}
            </div>
          </div>

          <div class="q-stem">${q.stem}</div>
          ${q.cnTranslation ? `
            <div class="q-cn-translation">
              <strong>🇨🇳 中文题干辅助理解：</strong>${q.cnTranslation}
            </div>
          ` : ''}

          <div class="q-options-list">${optsHtml}</div>

          <div class="q-hint-box hidden" id="qHintBox">
            <strong>💡 思考脚手架：</strong>${q.hint}
          </div>

          ${feedbackHtml}
        </div>
      </section>
    `;

    mount.querySelectorAll('[data-stage-idx]').forEach((btn) => {
      btn.onclick = () => {
        state.stageBySec[sec.id] = parseInt(btn.dataset.stageIdx, 10);
        saveState();
        renderSectionProgressiveQuiz(sec);
        typesetMath(mount);
      };
    });

    mount.querySelector('#qHintBtn').onclick = () => {
      mount.querySelector('#qHintBox').classList.toggle('hidden');
    };

    mount.querySelector('#qStarBtn').onclick = () => {
      if (state.starred[q.id]) delete state.starred[q.id];
      else state.starred[q.id] = true;
      saveState();
      renderSectionProgressiveQuiz(sec);
      typesetMath(mount);
    };

    const resetBtn = mount.querySelector('#qResetBtn');
    if (resetBtn) {
      resetBtn.onclick = () => {
        delete state.qSolved[q.id];
        saveState();
        updateGlobalBadges();
        renderSidebar();
        renderSectionProgressiveQuiz(sec);
        typesetMath(mount);
      };
    }

    mount.querySelectorAll('[data-q-choice]').forEach((btn) => {
      btn.onclick = () => {
        const choice = parseInt(btn.dataset.qChoice, 10);
        const correct = choice === q.answerIndex;
        state.qSolved[q.id] = { choice, correct };
        if (!correct) {
          const prev = state.mistakes[q.id]?.count || 0;
          state.mistakes[q.id] = { count: prev + 1, lastChoice: choice };
        }
        saveState();
        updateGlobalBadges();
        renderSidebar();
        renderSectionProgressiveQuiz(sec);
        typesetMath(mount);
      };
    });

    const nextStageBtn = mount.querySelector('#nextStageBtn');
    if (nextStageBtn) {
      nextStageBtn.onclick = () => {
        state.stageBySec[sec.id] = curStage + 1;
        saveState();
        renderSectionProgressiveQuiz(sec);
        typesetMath(mount);
      };
    }
  }

  /* ================= VIEW 2: Knowledge Relationship Graph ================= */
  function renderMapView() {
    const wrap = document.getElementById('mapContainer');
    if (!wrap) return;

    const selectedNode = mapData.nodes.find((n) => n.id === state.activeMapNode) || mapData.nodes[0];
    const nodeById = new Map(mapData.nodes.map((n) => [n.id, n]));

    const incoming = mapData.edges.filter((e) => e.to === selectedNode.id);
    const outgoing = mapData.edges.filter((e) => e.from === selectedNode.id);
    const connectedIds = new Set([selectedNode.id, ...incoming.map((e) => e.from), ...outgoing.map((e) => e.to)]);

    const edgesSvg = mapData.edges.map((e) => {
      const a = nodeById.get(e.from);
      const b = nodeById.get(e.to);
      if (!a || !b) return '';
      const isHighlighted = e.from === selectedNode.id || e.to === selectedNode.id;
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2 - 12;
      const stroke = isHighlighted ? '#0b6e69' : '#94a3b8';
      const opacity = isHighlighted ? '1' : '0.35';
      return `
        <g opacity="${opacity}">
          <path d="M ${a.x} ${a.y} Q ${mx} ${my}, ${b.x} ${b.y}" fill="none" stroke="${stroke}" stroke-width="${isHighlighted ? 3 : 1.7}" marker-end="url(#arrowHead)"/>
          ${isHighlighted ? `<text x="${mx}" y="${my - 4}" text-anchor="middle" fill="#0f766e" font-size="11.5" font-weight="bold">${e.label}</text>` : ''}
        </g>
      `;
    }).join('');

    const nodesSvg = mapData.nodes.map((n) => {
      const isSel = n.id === selectedNode.id;
      const isConn = connectedIds.has(n.id);
      const op = isConn ? 1 : 0.45;
      return `
        <g class="map-node-g" data-node-id="${n.id}" style="cursor:pointer;" opacity="${op}">
          <rect x="${n.x - 96}" y="${n.y - 30}" width="192" height="60" rx="12"
            fill="${isSel ? n.color : '#ffffff'}"
            stroke="${n.color}" stroke-width="${isSel ? 3.5 : 2}"/>
          <text x="${n.x}" y="${n.y - 8}" text-anchor="middle" fill="${isSel ? '#ffffff' : n.color}" font-size="11.5" font-weight="800">${n.code}</text>
          <text x="${n.x}" y="${n.y + 13}" text-anchor="middle" fill="${isSel ? '#ffffff' : '#1e293b'}" font-size="12.5" font-weight="700">${n.titleCn}</text>
        </g>
      `;
    }).join('');

    const synthesisHtml = (mapData.synthesisCards || []).map((card) => `
      <div class="synthesis-card">
        <h3 style="font-size:17px;font-weight:800;margin-bottom:10px;color:var(--brand-primary);">${card.title}</h3>
        <div style="overflow-x:auto;">${card.html}</div>
      </div>
    `).join('');

    wrap.innerHTML = `
      <div style="margin-bottom:18px;">
        <h2 style="font-size:24px;font-weight:800;">🕸️ Wave Motion II 全书知识点因果关系图谱</h2>
        <p style="color:var(--text-secondary);font-size:14.8px;">点击图上任意知识节点，即可高亮查看它的<strong>前置根基</strong>与<strong>后续推导应用</strong>，打通 3A 几何光学到 3B 四章的任督二脉！</p>
      </div>

      <div class="map-layout">
        <div class="map-svg-card">
          <svg viewBox="0 0 1020 590" width="100%" aria-label="Book 3B 知识关系图谱">
            <defs>
              <marker id="arrowHead" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#0b6e69"></path>
              </marker>
            </defs>
            <!-- Column Headers -->
            <text x="110" y="26" text-anchor="middle" fill="#64748b" font-size="12.5" font-weight="800">基础概念 &amp; 3A 衔接</text>
            <text x="340" y="26" text-anchor="middle" fill="#0d9488" font-size="12.5" font-weight="800">Ch.4 方程与双图核心</text>
            <text x="590" y="26" text-anchor="middle" fill="#2563eb" font-size="12.5" font-weight="800">Ch.5 四大波动现象 &amp; 驻波</text>
            <text x="885" y="26" text-anchor="middle" fill="#7c3aed" font-size="12.5" font-weight="800">Ch.6 光波 &amp; Ch.7 声波实战</text>
            ${edgesSvg}
            ${nodesSvg}
          </svg>
        </div>

        <aside class="map-detail-card">
          <span class="sec-code-pill" style="background:${selectedNode.color};display:inline-block;margin-bottom:8px;">${selectedNode.code}</span>
          <h3 style="font-size:19px;font-weight:800;margin-bottom:2px;">${selectedNode.titleCn}</h3>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">${selectedNode.titleEn}</div>
          <p style="font-size:14.2px;margin-bottom:14px;">${selectedNode.summary}</p>

          ${incoming.length ? `
            <div style="margin-bottom:12px;">
              <div style="font-size:12.5px;font-weight:800;color:var(--text-muted);margin-bottom:5px;">⬅ 前置基础（由谁推导出它）：</div>
              ${incoming.map((e) => {
                const fn = nodeById.get(e.from);
                return `<button class="secondary-btn" data-pick-node="${fn.id}" style="width:100%;justify-content:space-between;margin-bottom:5px;font-size:12.8px;">
                  <span>${fn.code} ${fn.titleCn}</span><span style="color:var(--brand-primary);">${e.label}</span>
                </button>`;
              }).join('')}
            </div>
          ` : ''}

          ${outgoing.length ? `
            <div style="margin-bottom:14px;">
              <div style="font-size:12.5px;font-weight:800;color:var(--text-muted);margin-bottom:5px;">➡ 后续延伸（它解释了什么）：</div>
              ${outgoing.map((e) => {
                const tn = nodeById.get(e.to);
                return `<button class="secondary-btn" data-pick-node="${tn.id}" style="width:100%;justify-content:space-between;margin-bottom:5px;font-size:12.8px;">
                  <span>${tn.code} ${tn.titleCn}</span><span style="color:var(--brand-primary);">${e.label}</span>
                </button>`;
              }).join('')}
            </div>
          ` : ''}

          <button class="primary-btn" id="mapGotoSecBtn" style="width:100%;justify-content:center;">
            📖 跳转到第 ${selectedNode.sec} 节详细学习 →
          </button>
        </aside>
      </div>

      <h3 style="font-size:21px;font-weight:800;margin-top:34px;">🧭 跨章节四大横向对比总表（考前总复习精华）</h3>
      <div class="synthesis-grid" style="grid-template-columns:1fr;">
        ${synthesisHtml}
      </div>
    `;

    wrap.querySelectorAll('[data-node-id]').forEach((g) => {
      g.onclick = () => {
        state.activeMapNode = g.dataset.nodeId;
        saveState();
        renderMapView();
      };
    });
    wrap.querySelectorAll('[data-pick-node]').forEach((b) => {
      b.onclick = () => {
        state.activeMapNode = b.dataset.pickNode;
        saveState();
        renderMapView();
      };
    });
    wrap.querySelector('#mapGotoSecBtn').onclick = () => navigateToSection(selectedNode.sec);

    typesetMath(wrap);
  }

  /* ================= VIEW 3: Interactive Physics Labs ================= */
  function renderLabsView() {
    const wrap = document.getElementById('labsPageContainer');
    if (!wrap || !window.BOOK_3B_LABS) return;

    const labs = window.BOOK_3B_LABS.list;
    const activeLab = labs.find((l) => l.id === state.activeLabId) || labs[0];

    const tabsHtml = labs.map((l, idx) => `
      <button class="lab-tab-btn ${l.id === activeLab.id ? 'active' : ''}" data-lab-id="${l.id}">
        实验 ${idx + 1} · ${l.badge}
      </button>
    `).join('');

    wrap.innerHTML = `
      <div style="margin-bottom:16px;">
        <h2 style="font-size:24px;font-weight:800;">🔬 动态波动物理实验室（7 大交互模拟器）</h2>
        <p style="color:var(--text-secondary);font-size:14.8px;">亲手拖动滑块与探头，把课本上抽象的公式变成肉眼可见的动态波形（支持电脑鼠标与 iPad 触屏拖动）</p>
      </div>
      <div class="lab-selector-bar">${tabsHtml}</div>
      <div class="lab-stage-card">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;">
          <h3 style="font-size:19px;font-weight:800;">${activeLab.title}</h3>
          <span class="sec-dse-tag">${activeLab.badge}</span>
        </div>
        <div id="activeLabStageMount"></div>
        <div class="lab-mission-box">${activeLab.mission}</div>
      </div>
    `;

    wrap.querySelectorAll('[data-lab-id]').forEach((btn) => {
      btn.onclick = () => {
        state.activeLabId = btn.dataset.labId;
        saveState();
        renderLabsView();
      };
    });

    window.BOOK_3B_LABS.mountById(activeLab.id, wrap.querySelector('#activeLabStageMount'));
    typesetMath(wrap);
  }

  /* ================= VIEW 4: Chapter Mock Quizzes (MC + SQ) ================= */
  function renderExamView() {
    const wrap = document.getElementById('examPageContainer');
    if (!wrap) return;

    const exam = examsList.find((e) => e.chapterId === state.activeExamCh) || examsList[0];
    if (!exam) return;

    // Compute live MC & SQ rubric scores
    let mcEarned = 0;
    exam.mcs.forEach((mc) => {
      if (state.examMc[mc.id] === mc.answerIndex) mcEarned++;
    });

    let sqTotalMarks = 0, sqEarnedMarks = 0;
    exam.sqs.forEach((sq) => {
      sq.parts.forEach((pt, pIdx) => {
        sqTotalMarks += pt.marks;
        pt.rubric.forEach((_, rIdx) => {
          if (state.examSqRubric[`${sq.id}-${pIdx}-${rIdx}`]) sqEarnedMarks++;
        });
      });
    });

    const chTabsHtml = examsList.map((e) => `
      <button class="lab-tab-btn ${e.chapterId === exam.chapterId ? 'active' : ''}" data-exam-ch="${e.chapterId}">
        📝 ${e.chapterId.toUpperCase()} 综合模考卷
      </button>
    `).join('');

    const letters = ['A', 'B', 'C', 'D'];
    const mcsHtml = exam.mcs.map((mc, idx) => {
      const picked = state.examMc[mc.id];
      const answered = picked !== undefined;
      return `
        <div class="sq-card">
          <div class="q-meta-bar">
            <span class="q-level-badge level-2">Paper 1A · MC #${idx + 1} [1 mark]</span>
            ${answered ? `<span style="font-weight:800;color:${picked === mc.answerIndex ? 'var(--success-text)' : '#dc2626'};">${picked === mc.answerIndex ? '✓ +1 mark' : '✗ 0 mark'}</span>` : ''}
          </div>
          <div class="q-stem">${mc.stemEn}</div>
          ${state.examShowCn ? `<div class="q-cn-translation"><strong>🇨🇳 中文对照：</strong>${mc.stemCn}</div>` : ''}
          <div class="q-options-list">
            ${mc.options.map((opt, oIdx) => {
              let cls = 'q-option-btn';
              if (answered) {
                if (oIdx === mc.answerIndex) cls += ' correct-choice';
                else if (oIdx === picked) cls += ' wrong-choice';
              }
              return `
                <button class="${cls}" data-exmc-id="${mc.id}" data-exmc-opt="${oIdx}">
                  <span class="q-opt-letter">${letters[oIdx]}</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${answered ? `
            <div class="q-feedback-box ${picked === mc.answerIndex ? 'is-correct' : 'is-wrong'}">
              <strong>解析：</strong>${mc.explanation}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    const sqsHtml = exam.sqs.map((sq) => {
      const partsHtml = sq.parts.map((pt, pIdx) => {
        const partKey = `${sq.id}-${pIdx}`;
        const draftVal = state.examSqDraft[partKey] || '';
        const isRev = !!state.examSqRevealed[partKey];

        const rubricHtml = pt.rubric.map((r, rIdx) => {
          const rKey = `${partKey}-${rIdx}`;
          const checked = !!state.examSqRubric[rKey];
          return `
            <label class="rubric-check-row">
              <input type="checkbox" data-rubric-key="${rKey}" ${checked ? 'checked' : ''} />
              <span class="rubric-badge">${r.code}</span>
              <span>${r.desc}</span>
            </label>
          `;
        }).join('');

        return `
          <div class="sq-part-block">
            <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;">
              <div style="font-weight:700;font-size:15.5px;"><strong>${pt.label}</strong> ${pt.qEn}</div>
              <span class="sec-dse-tag" style="flex-shrink:0;">[${pt.marks} mark${pt.marks > 1 ? 's' : ''}]</span>
            </div>
            ${state.examShowCn ? `<div style="font-size:13.8px;color:var(--text-secondary);margin-top:4px;">🇨🇳 ${pt.qCn}</div>` : ''}

            <textarea class="sq-draft-input" data-sq-draft="${partKey}" placeholder="可在此用英文写下你的公式步骤或作答关键词（自动保存，也可写在纸上再点下方评分标准核对）...">${draftVal}</textarea>

            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              <button class="secondary-btn" data-sq-hint="${partKey}">💡 思路脚手架</button>
              <button class="primary-btn" data-sq-reveal="${partKey}">
                ${isRev ? '🔼 收起评分标准' : '✅ 对照 HKEAA 评分标准批改 (1M/1A)'}
              </button>
            </div>

            <div class="q-hint-box hidden" id="sqhint-${partKey}">
              <strong>💡 答题提示：</strong>${pt.hint}
            </div>

            <div class="rubric-box ${isRev ? '' : 'hidden'}">
              <div style="margin-bottom:10px;">
                <div style="font-weight:800;color:var(--brand-primary);margin-bottom:4px;">📘 Standard English Model Answer：</div>
                <div style="font-size:14.5px;background:var(--bg-surface);padding:10px 13px;border-radius:8px;border:1px solid var(--border-color);">${pt.modelAnswer}</div>
              </div>
              <div style="font-weight:800;font-size:13.8px;margin-bottom:4px;">✍️ 请勾选你答对的得分点（1M = 公式/方法分，1A = 结论/关键词分）：</div>
              ${rubricHtml}
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="sq-card">
          <h4 style="font-size:18px;font-weight:800;color:var(--brand-primary);">📄 Paper 1B · ${sq.title}</h4>
          <div class="sq-context-box">
            <div>${sq.contextEn}</div>
            ${state.examShowCn ? `<div style="margin-top:6px;font-size:14px;color:var(--text-secondary);">🇨🇳 ${sq.contextCn}</div>` : ''}
          </div>
          ${partsHtml}
        </div>
      `;
    }).join('');

    wrap.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;">
        <div>
          <h2 style="font-size:24px;font-weight:800;">📝 HKDSE 章节综合模考卷（Paper 1A MC + Paper 1B SQ）</h2>
          <p style="color:var(--text-secondary);font-size:14.5px;">严格仿真香港中学文凭试英文物理卷命题风格与 1M / 1A 采分点</p>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <button class="secondary-btn" id="toggleExamCnBtn">${state.examShowCn ? '🙈 隐藏中文翻译（全英实战）' : '🇨🇳 显示中文翻译辅助'}</button>
          <button class="secondary-btn" id="resetExamChBtn">🔄 重置本卷</button>
        </div>
      </div>

      <div class="lab-selector-bar">${chTabsHtml}</div>

      <div class="exam-score-banner">
        <div>
          <div style="font-size:12.5px;opacity:0.85;">建议完成时间：${exam.timeSuggested}</div>
          <h3 style="font-size:20px;font-weight:800;">${exam.titleCn}（${exam.titleEn}）</h3>
        </div>
        <div class="exam-score-pills">
          <div class="exam-pill">Section A 选择题：<strong>${mcEarned} / ${exam.mcs.length}</strong></div>
          <div class="exam-pill">Section B 结构题自评：<strong>${sqEarnedMarks} / ${sqTotalMarks}</strong></div>
          <div class="exam-pill" style="background:rgba(16,185,129,0.28);">总得分：<strong>${mcEarned + sqEarnedMarks} / ${exam.mcs.length + sqTotalMarks}</strong></div>
        </div>
      </div>

      <h3 style="font-size:19px;font-weight:800;margin-bottom:12px;">Section A — Multiple-Choice Questions（选择题）</h3>
      ${mcsHtml}

      <h3 style="font-size:19px;font-weight:800;margin:28px 0 12px;">Section B — Structured Questions（结构化长题目）</h3>
      ${sqsHtml}
    `;

    wrap.querySelectorAll('[data-exam-ch]').forEach((btn) => {
      btn.onclick = () => {
        state.activeExamCh = btn.dataset.examCh;
        saveState();
        renderExamView();
      };
    });

    wrap.querySelector('#toggleExamCnBtn').onclick = () => {
      state.examShowCn = !state.examShowCn;
      saveState();
      renderExamView();
    };

    wrap.querySelector('#resetExamChBtn').onclick = () => {
      exam.mcs.forEach((mc) => delete state.examMc[mc.id]);
      exam.sqs.forEach((sq) => {
        sq.parts.forEach((pt, pIdx) => {
          const pk = `${sq.id}-${pIdx}`;
          delete state.examSqRevealed[pk];
          pt.rubric.forEach((_, rIdx) => delete state.examSqRubric[`${pk}-${rIdx}`]);
        });
      });
      saveState();
      renderExamView();
    };

    wrap.querySelectorAll('[data-exmc-id]').forEach((btn) => {
      btn.onclick = () => {
        state.examMc[btn.dataset.exmcId] = parseInt(btn.dataset.exmcOpt, 10);
        saveState();
        renderExamView();
      };
    });

    wrap.querySelectorAll('[data-sq-draft]').forEach((ta) => {
      ta.oninput = () => {
        state.examSqDraft[ta.dataset.sqDraft] = ta.value;
        saveState();
      };
    });

    wrap.querySelectorAll('[data-sq-hint]').forEach((btn) => {
      btn.onclick = () => {
        const box = document.getElementById(`sqhint-${btn.dataset.sqHint}`);
        if (box) box.classList.toggle('hidden');
      };
    });

    wrap.querySelectorAll('[data-sq-reveal]').forEach((btn) => {
      btn.onclick = () => {
        const pk = btn.dataset.sqReveal;
        state.examSqRevealed[pk] = !state.examSqRevealed[pk];
        saveState();
        renderExamView();
      };
    });

    wrap.querySelectorAll('[data-rubric-key]').forEach((chk) => {
      chk.onchange = () => {
        if (chk.checked) state.examSqRubric[chk.dataset.rubricKey] = true;
        else delete state.examSqRubric[chk.dataset.rubricKey];
        saveState();
        renderExamView();
      };
    });

    typesetMath(wrap);
  }

  /* ================= VIEW 5: Formula Sheet & Bilingual Flashcards ================= */
  function renderReferenceView() {
    const wrap = document.getElementById('referenceContainer');
    if (!wrap) return;

    const chFilterBtns = [
      { id: 'all', label: '全书 All' },
      { id: 'ch4', label: 'Ch.4 波的本质' },
      { id: 'ch5', label: 'Ch.5 波动现象与驻波' },
      { id: 'ch6', label: 'Ch.6 光波与电磁波' },
      { id: 'ch7', label: 'Ch.7 声波' }
    ].map((f) => `
      <button class="secondary-btn" data-ref-ch="${f.id}" style="${state.refChFilter === f.id ? 'border-color:var(--brand-primary);color:var(--brand-primary);font-weight:800;' : ''}">
        ${f.label}
      </button>
    `).join('');

    let bodyHtml = '';
    if (state.refTab === 'formulae') {
      const filteredF = formulaeList.filter((f) => state.refChFilter === 'all' || f.chapter === state.refChFilter);
      bodyHtml = filteredF.map((fm) => `
        <div class="formula-box">
          <div class="formula-header">
            <div>
              <span class="formula-title">${fm.code} · ${fm.nameCn}（${fm.nameEn}）</span>
              <span class="sec-dse-tag ${fm.syllabus.includes('Ext') ? 'is-ext' : ''}" style="margin-left:8px;">${fm.syllabus}</span>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <span class="formula-sheet-badge" style="${fm.givenInExam ? 'background:#dcfce7;color:#166534;' : 'background:#fef3c7;color:#92400e;'}">
                ${fm.givenInExam ? '📄 HKEAA 考卷公式表已印' : '🧠 考卷不印 · 必须熟记'}
              </span>
              <button class="secondary-btn" data-fm-sec="${fm.sec}" style="padding:4px 10px;font-size:12.5px;">去第 ${fm.sec} 节 →</button>
            </div>
          </div>
          <div class="formula-math-main">$$${fm.latex}$$</div>
          <div style="font-size:14.2px;color:var(--text-secondary);"><strong>符号含义：</strong>${fm.meaning}</div>
          <div class="formula-condition">💡 应试叮嘱：${fm.tip}</div>
        </div>
      `).join('');
    } else {
      const masteredTotal = Object.keys(state.fcMastered).length;
      const filteredG = glossaryList.filter((g) => {
        if (state.refChFilter !== 'all' && g.chapter !== state.refChFilter) return false;
        if (state.fcOnlyUnmastered && state.fcMastered[g.id]) return false;
        return true;
      });

      bodyHtml = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:10px;">
          <span style="font-size:14px;color:var(--text-secondary);">💡 点击任意卡片即可 3D 翻转查看中文释义与 DSE 得分造句提示（已掌握 <strong>${masteredTotal} / ${glossaryList.length}</strong> 张）</span>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px;font-weight:600;">
            <input type="checkbox" id="fcUnmasteredChk" ${state.fcOnlyUnmastered ? 'checked' : ''} />
            只显示未掌握词汇
          </label>
        </div>
        <div class="flashcard-grid">
          ${filteredG.map((g) => {
            const isM = !!state.fcMastered[g.id];
            return `
              <div class="flashcard-item" data-fc-flip="${g.id}">
                <div class="flashcard-inner">
                  <div class="flashcard-front">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                      <span class="sec-dse-tag">Sec ${g.sec}</span>
                      <span style="font-size:12px;font-weight:700;color:${isM ? '#10b981' : 'var(--text-muted)'};">${isM ? '✓ 已掌握' : '点击翻面 ↻'}</span>
                    </div>
                    <div class="fc-en-word">${g.en}</div>
                    <div style="font-size:12.5px;color:var(--text-muted);">先在脑海里回想它的中文含义与英文定义关键词...</div>
                  </div>
                  <div class="flashcard-back">
                    <div>
                      <div class="fc-cn-word">${g.cn}</div>
                      <p style="font-size:13.2px;color:var(--text-primary);line-height:1.5;margin-bottom:6px;">${g.def}</p>
                      <p style="font-size:12.2px;color:var(--brand-primary);font-weight:600;">🎯 ${g.examTip}</p>
                    </div>
                    <div style="display:flex;justify-content:space-between;gap:6px;">
                      <button class="secondary-btn" data-fc-sec="${g.sec}" style="padding:4px 9px;font-size:12px;">📖 原文 ${g.sec}</button>
                      <button class="secondary-btn" data-fc-master="${g.id}" style="padding:4px 9px;font-size:12px;${isM ? 'border-color:#10b981;color:#059669;' : ''}">
                        ${isM ? '✓ 已掌握' : '标记掌握'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    wrap.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
        <div>
          <h2 style="font-size:24px;font-weight:800;">🗂️ 课本原貌公式总表 &amp; 中英核心术语闪卡</h2>
          <p style="color:var(--text-secondary);font-size:14.5px;">严格按照牛津 3B 符号格式与 HKEAA 官方公式表（Section C）对齐</p>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="lab-tab-btn ${state.refTab === 'formulae' ? 'active' : ''}" id="tabRefFormulae">📐 必考公式速查表 (${formulaeList.length})</button>
          <button class="lab-tab-btn ${state.refTab === 'flashcards' ? 'active' : ''}" id="tabRefFlashcards">🃏 中英术语闪卡 (${glossaryList.length})</button>
        </div>
      </div>

      <div class="filter-bar">${chFilterBtns}</div>
      <div>${bodyHtml}</div>
    `;

    wrap.querySelector('#tabRefFormulae').onclick = () => { state.refTab = 'formulae'; saveState(); renderReferenceView(); };
    wrap.querySelector('#tabRefFlashcards').onclick = () => { state.refTab = 'flashcards'; saveState(); renderReferenceView(); };

    wrap.querySelectorAll('[data-ref-ch]').forEach((b) => {
      b.onclick = () => { state.refChFilter = b.dataset.refCh; saveState(); renderReferenceView(); };
    });
    wrap.querySelectorAll('[data-fm-sec]').forEach((b) => {
      b.onclick = () => navigateToSection(b.dataset.fmSec);
    });

    const unmChk = wrap.querySelector('#fcUnmasteredChk');
    if (unmChk) {
      unmChk.onchange = () => { state.fcOnlyUnmastered = unmChk.checked; saveState(); renderReferenceView(); };
    }

    wrap.querySelectorAll('[data-fc-flip]').forEach((card) => {
      card.onclick = (e) => {
        if (e.target.closest('button')) return;
        card.classList.toggle('flipped');
      };
    });
    wrap.querySelectorAll('[data-fc-sec]').forEach((btn) => {
      btn.onclick = (e) => { e.stopPropagation(); navigateToSection(btn.dataset.fcSec); };
    });
    wrap.querySelectorAll('[data-fc-master]').forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const gid = btn.dataset.fcMaster;
        if (state.fcMastered[gid]) delete state.fcMastered[gid];
        else state.fcMastered[gid] = true;
        saveState();
        renderReferenceView();
      };
    });

    typesetMath(wrap);
  }

  /* ================= VIEW 6: Mistake Notebook & Mastery Dashboard ================= */
  function renderMistakesView() {
    const wrap = document.getElementById('mistakesContainer');
    if (!wrap) return;

    const totalQ = questionMap.size;
    let solvedQ = 0;
    questionMap.forEach((_, qid) => { if (state.qSolved[qid]?.correct) solvedQ++; });

    const totalGuided = orderedSections.reduce((acc, s) => acc + (s.guidedChain?.steps?.length || 0), 0);
    const doneGuided = Object.keys(state.guidedDone).length;
    const doneFc = Object.keys(state.fcMastered).length;

    const mistakeIds = Object.keys(state.mistakes);
    const starredIds = Object.keys(state.starred);
    const combinedIds = Array.from(new Set([...mistakeIds, ...starredIds]));

    const chCardsHtml = chapters.map((ch) => {
      const qs = ch.sections.flatMap((s) => s.questions || []);
      const ok = qs.filter((q) => state.qSolved[q.id]?.correct).length;
      const pct = qs.length ? Math.round((ok / qs.length) * 100) : 0;
      return `
        <div class="stat-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="ch-badge-num" style="background:${ch.color}">${ch.number}</span>
            <span style="font-weight:800;color:${ch.color};">${pct}%</span>
          </div>
          <div style="font-weight:800;font-size:16px;margin:8px 0 4px;">${ch.titleCn}</div>
          <div class="mini-progress-bar" style="width:100%;margin:8px 0;">
            <div class="mini-progress-fill" style="width:${pct}%;background:${ch.color};"></div>
          </div>
          <div style="font-size:12.8px;color:var(--text-muted);">三阶题已掌握 ${ok} / ${qs.length} 题</div>
        </div>
      `;
    }).join('');

    const reviewListHtml = combinedIds.length === 0
      ? `<div class="section-card" style="text-align:center;padding:42px 20px;">
          <div style="font-size:38px;margin-bottom:8px;">🌟</div>
          <h3 style="font-size:18px;font-weight:800;">太棒啦！目前错题本与收藏夹空空如也</h3>
          <p style="color:var(--text-secondary);margin-top:6px;">在做每节「三阶闯关题」时，答错的题目会自动收录到这里，也可以随时点 ☆ 手动收藏重点题！</p>
        </div>`
      : combinedIds.map((qid) => {
          const q = questionMap.get(qid);
          if (!q) return '';
          const mInfo = state.mistakes[qid];
          const isStar = !!state.starred[qid];
          return `
            <div class="sq-card">
              <div class="q-meta-bar">
                <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                  <span class="sec-dse-tag">Section ${q.secId} · ${q.secTitleCn}</span>
                  <span class="q-level-badge level-${q.level}">${q.levelLabel}</span>
                  ${mInfo ? `<span style="font-size:12.5px;color:#dc2626;font-weight:700;">曾答错 ${mInfo.count} 次</span>` : ''}
                  ${isStar ? `<span style="font-size:12.5px;color:#d97706;font-weight:700;">⭐ 已收藏</span>` : ''}
                </div>
                <div style="display:flex;gap:8px;">
                  <button class="secondary-btn" data-rev-goto="${q.secId}" data-rev-lvl="${q.level - 1}">📖 回到原节重练</button>
                  ${mInfo ? `<button class="secondary-btn" data-clear-mistake="${qid}" style="color:var(--success-text);">✓ 已搞懂移出</button>` : ''}
                </div>
              </div>
              <div class="q-stem">${q.stem}</div>
              <div class="q-feedback-box is-correct">
                <div><strong>正确答案：${['A', 'B', 'C', 'D'][q.answerIndex]}. ${q.options[q.answerIndex]}</strong></div>
                <div style="margin-top:6px;">${q.explanation}</div>
              </div>
            </div>
          `;
        }).join('');

    wrap.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px;">
        <div>
          <h2 style="font-size:24px;font-weight:800;">⭐ 学习总进度看板与自动错题本</h2>
          <p style="color:var(--text-secondary);font-size:14.5px;">所有进度自动保存在当前设备浏览器中，也支持导出备份文件在电脑与 iPad 之间同步</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="secondary-btn" id="exportProgressBtn">📤 导出进度备份 (.json)</button>
          <label class="secondary-btn" style="cursor:pointer;">
            📥 导入进度备份
            <input type="file" id="importProgressInput" accept=".json" style="display:none;" />
          </label>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="stat-card">
          <div style="font-size:13px;color:var(--text-muted);font-weight:700;">🎯 三阶闯关总掌握</div>
          <div class="stat-big-num">${solvedQ} / ${totalQ}</div>
          <div style="font-size:13px;color:var(--text-secondary);">覆盖全书 17 节核心与延展</div>
        </div>
        <div class="stat-card">
          <div style="font-size:13px;color:var(--text-muted);font-weight:700;">🧭 连环追问完成步数</div>
          <div class="stat-big-num">${doneGuided} / ${totalGuided}</div>
          <div style="font-size:13px;color:var(--text-secondary);">苏格拉底式概念自主推导</div>
        </div>
        <div class="stat-card">
          <div style="font-size:13px;color:var(--text-muted);font-weight:700;">🃏 英文物理术语掌握</div>
          <div class="stat-big-num">${doneFc} / ${glossaryList.length}</div>
          <div style="font-size:13px;color:var(--text-secondary);">EMI 英文审题与作答词汇</div>
        </div>
        <div class="stat-card">
          <div style="font-size:13px;color:var(--text-muted);font-weight:700;">📌 待复习错题 / 收藏</div>
          <div class="stat-big-num" style="color:${mistakeIds.length ? '#dc2626' : 'var(--brand-primary)'};">${combinedIds.length}</div>
          <div style="font-size:13px;color:var(--text-secondary);">错题 ${mistakeIds.length} 道 · 收藏 ${starredIds.length} 道</div>
        </div>
      </div>

      <h3 style="font-size:19px;font-weight:800;margin-bottom:12px;">📊 各章掌握度明细</h3>
      <div class="dashboard-grid">${chCardsHtml}</div>

      <h3 style="font-size:19px;font-weight:800;margin:24px 0 12px;">📕 错题本与重点收藏（共 ${combinedIds.length} 题）</h3>
      ${reviewListHtml}
    `;

    wrap.querySelectorAll('[data-rev-goto]').forEach((btn) => {
      btn.onclick = () => {
        const sid = btn.dataset.revGoto;
        state.stageBySec[sid] = parseInt(btn.dataset.revLvl, 10) || 0;
        navigateToSection(sid);
      };
    });

    wrap.querySelectorAll('[data-clear-mistake]').forEach((btn) => {
      btn.onclick = () => {
        delete state.mistakes[btn.dataset.clearMistake];
        saveState();
        updateGlobalBadges();
        renderMistakesView();
      };
    });

    wrap.querySelector('#exportProgressBtn').onclick = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Oxford-Physics-3B-Progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    };

    wrap.querySelector('#importProgressInput').onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const imported = JSON.parse(reader.result);
          state = { ...defaultState, ...imported };
          saveState();
          applyTheme();
          updateGlobalBadges();
          renderMistakesView();
        } catch (_) {
          alert('备份文件格式不正确，请选择有效的 JSON 进度文件。');
        }
      };
      reader.readAsText(file);
    };

    typesetMath(wrap);
  }

  /* ================= Global Search Modal (⌘K / Ctrl+K) ================= */
  function setupSearchModal() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    const openBtn = document.getElementById('searchOpenBtn');
    const closeBtn = document.getElementById('searchCloseBtn');
    if (!modal || !input || !results) return;

    function openSearch() {
      modal.classList.remove('hidden');
      input.value = '';
      input.focus();
      runSearch('');
    }
    function closeSearch() {
      modal.classList.add('hidden');
    }

    function runSearch(qRaw) {
      const q = qRaw.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '<div class="search-empty-hint">输入中文或英文关键词（如 diffraction / 驻波 / 光栅 / 2d=vt / CRO）立即定位</div>';
        return;
      }

      const hits = [];
      orderedSections.forEach((sec) => {
        const hay = `${sec.code} ${sec.titleCn} ${sec.titleEn} ${(sec.concepts || []).map((c) => c.title).join(' ')}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            type: '📖 章节精讲',
            title: `${sec.code} ${sec.titleCn} (${sec.titleEn})`,
            sub: sec.dseTag,
            action: () => navigateToSection(sec.id)
          });
        }
      });

      formulaeList.forEach((fm) => {
        const hay = `${fm.code} ${fm.nameCn} ${fm.nameEn} ${fm.latex} ${fm.meaning}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            type: '📐 课本公式',
            title: `${fm.code} · ${fm.nameCn} (${fm.nameEn})`,
            sub: fm.meaning.replace(/\$/g, ''),
            action: () => navigateToSection(fm.sec)
          });
        }
      });

      glossaryList.forEach((g) => {
        const hay = `${g.en} ${g.cn} ${g.def}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            type: '🃏 中英术语',
            title: `${g.en} — ${g.cn}`,
            sub: g.def,
            action: () => navigateToSection(g.sec)
          });
        }
      });

      if (hits.length === 0) {
        results.innerHTML = '<div class="search-empty-hint">没有找到匹配项，试试输入更短的词根（如 wave / slit / echo / 波节）</div>';
        return;
      }

      results.innerHTML = hits.slice(0, 18).map((h, i) => `
        <button class="search-hit-item" data-hit-idx="${i}">
          <div style="font-size:11.5px;font-weight:800;color:var(--brand-primary);">${h.type}</div>
          <div style="font-size:14.8px;font-weight:700;margin:2px 0;">${h.title}</div>
          <div style="font-size:12.8px;color:var(--text-muted);">${h.sub}</div>
        </button>
      `).join('');

      results.querySelectorAll('[data-hit-idx]').forEach((btn) => {
        btn.onclick = () => {
          const item = hits[parseInt(btn.dataset.hitIdx, 10)];
          closeSearch();
          if (item) item.action();
        };
      });
    }

    openBtn?.addEventListener('click', openSearch);
    closeBtn?.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
    input.addEventListener('input', () => runSearch(input.value));
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeSearch();
      }
    });
  }

  /* ================= App Initialization ================= */
  function init() {
    applyTheme();
    updateGlobalBadges();

    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      saveState();
      applyTheme();
    });

    document.getElementById('brandHomeBtn')?.addEventListener('click', () => {
      state.secId = orderedSections[0].id;
      switchView('learn');
    });

    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
      document.getElementById('chapterSidebar')?.classList.add('mobile-open');
      document.getElementById('sidebarBackdrop')?.classList.remove('hidden');
    });
    document.getElementById('closeSidebarBtn')?.addEventListener('click', closeMobileSidebar);
    document.getElementById('sidebarBackdrop')?.addEventListener('click', closeMobileSidebar);

    setupSearchModal();
    switchView(state.view || 'learn');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
