/* ==========================================================================
   Book 3B Chapter Mock Quizzes (HKDSE Paper 1A MC + Paper 1B Structured Questions)
   ========================================================================== */

window.BOOK_3B_EXAMS = [
  /* ========================================================================
     Chapter 4 Mock Quiz
     ======================================================================== */
  {
    chapterId: 'ch4',
    titleCn: 'Chapter 4 综合模考卷：波的本质',
    titleEn: 'Chapter 4 Mock Quiz: Nature of Waves',
    timeSuggested: '25 分钟',
    mcs: [
      {
        id: 'ex-4-mc1',
        stemEn: 'A transverse wave of frequency $5.0\\text{ Hz}$ travels along a long rope. The horizontal distance between a crest and an adjacent trough is $0.30\\text{ m}$, and the vertical distance between them is $0.16\\text{ m}$. What are the wave speed and the total distance travelled by a particle on the rope in $1.0\\text{ s}$?',
        stemCn: '一列频率为 $5.0\\text{ Hz}$ 的横波沿长绳传播。波峰与相邻波谷的水平距离为 $0.30\\text{ m}$，竖直距离为 $0.16\\text{ m}$。求波速以及绳上某质点在 $1.0\\text{ s}$ 内走过的总路程。',
        options: [
          'Wave speed $= 1.5\\text{ m s}^{-1}$; distance $= 0.80\\text{ m}$',
          'Wave speed $= 3.0\\text{ m s}^{-1}$; distance $= 1.6\\text{ m}$',
          'Wave speed $= 3.0\\text{ m s}^{-1}$; distance $= 3.2\\text{ m}$',
          'Wave speed $= 1.5\\text{ m s}^{-1}$; distance $= 1.6\\text{ m}$'
        ],
        answerIndex: 1,
        explanation: '1. 相邻峰谷水平距离为 $\\frac{1}{2}\\lambda = 0.30\\text{ m} \\Rightarrow \\lambda = 0.60\\text{ m}$，波速 $v = f\\lambda = 5.0 \\times 0.60 = 3.0\\text{ m s}^{-1}$。<br>2. 峰谷竖直高度差为 $2A = 0.16\\text{ m} \\Rightarrow A = 0.08\\text{ m}$。在 $1.0\\text{ s}$ 内质点完成 $5$ 个完整周期，总路程 $= 5 \\times 4A = 20 \\times 0.08 = 1.6\\text{ m}$。'
      },
      {
        id: 'ex-4-mc2',
        stemEn: 'At $t = 0$, the $s\\text{–}d$ graph of a transverse wave shows a crest at $x = 0.20\\text{ m}$, zero displacement at $x = 0.40\\text{ m}$ (particle $P$), and a trough at $x = 0.60\\text{ m}$. The $s\\text{–}t$ graph of particle $P$ shows a period of $0.40\\text{ s}$ and that $P$ moves upwards from $t = 0$. Find the speed and direction of travel of the wave.',
        stemCn: '在 $t = 0$ 时，横波的 $s\\text{–}d$ 图在 $x = 0.20\\text{ m}$ 处为波峰、$x = 0.40\\text{ m}$（质点 $P$）处位移为 $0$、$x = 0.60\\text{ m}$ 处为波谷。质点 $P$ 的 $s\\text{–}t$ 图显示周期为 $0.40\\text{ s}$，且 $t = 0$ 后 $P$ 向上运动。求波速与波的传播方向。',
        options: [
          '$2.0\\text{ m s}^{-1}$ towards the $+x$ (right) direction',
          '$2.0\\text{ m s}^{-1}$ towards the $-x$ (left) direction',
          '$1.0\\text{ m s}^{-1}$ towards the $+x$ (right) direction',
          '$1.0\\text{ m s}^{-1}$ towards the $-x$ (left) direction'
        ],
        answerIndex: 0,
        explanation: '1. 由波峰（$0.20\\text{ m}$）到相邻波谷（$0.60\\text{ m}$）知 $\\frac{1}{2}\\lambda = 0.40\\text{ m} \\Rightarrow \\lambda = 0.80\\text{ m}$。结合 $s\\text{–}t$ 图的 $T = 0.40\\text{ s}$，得 $v = \\frac{\\lambda}{T} = \\frac{0.80}{0.40} = 2.0\\text{ m s}^{-1}$。<br>2. 在 $x = 0.40\\text{ m}$ 处，左边是波峰、右边是波谷；因 $t = 0$ 时 $P$ 向上动，说明左边的波峰正移向 $P$，故波向 $+x$（右）方向传播！'
      },
      {
        id: 'ex-4-mc3',
        stemEn: 'In the $s\\text{–}d$ graph of a longitudinal wave travelling to the right (taking displacement to the right as positive), which point represents the centre of a rarefaction?',
        stemCn: '在一列向右传播的纵波的 $s\\text{–}d$ 图上（取向右位移为正），哪一点代表疏部（rarefaction）的中心？',
        options: [
          'A peak where $s = +A$',
          'A trough where $s = -A$',
          'A point where $s = 0$ and the graph has a negative (downward) slope',
          'A point where $s = 0$ and the graph has a positive (upward) slope'
        ],
        answerIndex: 3,
        explanation: '当 $s = 0$ 且斜率为正（左负右正）时，该点左边的质点位移为负（向左逃离），右边的质点位移为正（向右逃离），两侧质点背道而驰散开，此处正是<strong>疏部中心（centre of rarefaction）</strong>！（而斜率为负的零点则是密部中心。）'
      },
      {
        id: 'ex-4-mc4',
        stemEn: 'A mechanical vibrator generates waves along a stretched elastic cord. If the cord is pulled tighter so that the wave speed increases by $50\\%$, while the vibrator setting is unchanged, what happens to the period $T$ and wavelength $\\lambda$?',
        stemCn: '机械振动器在拉紧的弹性绳上产生波。若把绳拉得更紧使波速增大 $50\\%$，而振动器设置不变，周期 $T$ 与波长 $\\lambda$ 怎样变化？',
        options: [
          '$T$ decreases by $33\\%$; $\\lambda$ remains unchanged',
          '$T$ remains unchanged; $\\lambda$ increases by $50\\%$',
          '$T$ increases by $50\\%$; $\\lambda$ increases by $50\\%$',
          '$T$ remains unchanged; $\\lambda$ decreases by $33\\%$'
        ],
        answerIndex: 1,
        explanation: '振动器设置未变，因此频率 $f$ 和<strong>周期 $T$ 保持不变</strong>；由 $v = f\\lambda$ 知，当 $f$ 不变而波速 $v$ 增大 $50\\%$（变为 $1.5v$）时，<strong>波长 $\\lambda$ 同比例增大 $50\\%$</strong>。'
      }
    ],
    sqs: [
      {
        id: 'ex-4-sq1',
        title: 'Structured Question 1 — Transverse Wave & Particle Motion (6 marks)',
        contextEn: 'A vibrator oscillates vertically at $2.5\\text{ Hz}$ with an amplitude of $5.0\\text{ cm}$ at the left end of a long horizontal rope, producing a continuous wave of wavelength $0.80\\text{ m}$ travelling to the right.',
        contextCn: '振动器在水平长绳左端以 $2.5\\text{ Hz}$ 的频率、$5.0\\text{ cm}$ 的振幅竖直振动，产生一列波长为 $0.80\\text{ m}$、向右传播的连续波。',
        parts: [
          {
            label: '(a)',
            marks: 1,
            qEn: 'Explain why this wave is classified as a transverse wave.',
            qCn: '解释为什么这列波属于横波。',
            hint: '写出“质点振动方向”与“波传播方向”的垂直关系！',
            modelAnswer: 'The particles of the rope vibrate perpendicular (vertically) to the direction of travel (horizontal) of the wave.',
            rubric: [
              { code: '1A', desc: 'States that particles vibrate perpendicular to the direction of travel of the wave（指出质点振动方向垂直于波的传播方向）' }
            ]
          },
          {
            label: '(b)',
            marks: 2,
            qEn: 'Calculate the wave speed along the rope.',
            qCn: '计算绳上的波速。',
            hint: '直接列出波动方程 $v = f\\lambda$ 并带单位作答。',
            modelAnswer: 'By $v = f\\lambda = 2.5 \\times 0.80 = 2.0\\text{ m s}^{-1}$.',
            rubric: [
              { code: '1M', desc: 'Applies $v = f\\lambda$ ($2.5 \\times 0.80$)' },
              { code: '1A', desc: '$2.0\\text{ m s}^{-1}$ (with correct unit)' }
            ]
          },
          {
            label: '(c)',
            marks: 3,
            qEn: 'At $t = 0$, a particle $X$ on the rope is at a crest. State the instantaneous speed of $X$ at $t = 0$, and find the total distance travelled by $X$ from $t = 0$ to $t = 0.60\\text{ s}$.',
            qCn: '在 $t = 0$ 时，绳上某质点 $X$ 恰好位于波峰。写出 $t = 0$ 时 $X$ 的瞬时速率，并求从 $t = 0$ 到 $t = 0.60\\text{ s}$ 内 $X$ 走过的总路程。',
            hint: '波峰折返点瞬时速率是多少？再算周期 $T = \\frac{1}{2.5} = 0.40\\text{ s}$，看看 $0.60\\text{ s}$ 是几个周期（$1.5T$）！',
            modelAnswer: 'At $t = 0$, the instantaneous speed of $X$ is $0$ (momentarily at rest).<br>Period $T = \\frac{1}{f} = \\frac{1}{2.5} = 0.40\\text{ s}$. Since $0.60\\text{ s} = 1.5\\,T$, total distance travelled $= 1.5 \\times 4A = 6 \\times 0.050\\text{ m} = 0.30\\text{ m}$ (or $30\\text{ cm}$).',
            rubric: [
              { code: '1A', desc: 'Instantaneous speed $= 0$ (or momentarily at rest)' },
              { code: '1M', desc: 'Finds $T = 0.40\\text{ s}$ (i.e. $1.5$ cycles) and uses $4A$ per period' },
              { code: '1A', desc: '$0.30\\text{ m}$ (or $30\\text{ cm}$)' }
            ]
          }
        ]
      },
      {
        id: 'ex-4-sq2',
        title: 'Structured Question 2 — Longitudinal Wave on a Slinky Spring (5 marks)',
        contextEn: 'A student pushes and pulls one end of a slinky spring along its length at $4.0\\text{ Hz}$. A red ribbon is tied to a coil in the middle. The shortest distance between a centre of compression and an adjacent centre of rarefaction is $0.15\\text{ m}$.',
        contextCn: '学生以 $4.0\\text{ Hz}$ 的频率沿弹簧长度方向前后推拉一端，中间某一圈绑有红丝带。测得密部中心与相邻疏部中心的最短距离为 $0.15\\text{ m}$。',
        parts: [
          {
            label: '(a)',
            marks: 2,
            qEn: 'Describe the motion of the red ribbon and explain why it does not move all the way to the other end of the spring.',
            qCn: '描述红丝带的运动情况，并解释为什么它不会一路移动到弹簧的另一端。',
            hint: '两句话拿满 2 分：① 红丝带沿弹簧方向在平衡位置附近前后振动；② 波传能不传质！',
            modelAnswer: 'The red ribbon vibrates back and forth along (parallel to) the spring about its equilibrium position.<br>It does not move to the other end because waves transfer energy without transferring matter.',
            rubric: [
              { code: '1A', desc: 'Vibrates back and forth along / parallel to the spring about its equilibrium position' },
              { code: '1A', desc: 'Waves transfer energy without transferring matter' }
            ]
          },
          {
            label: '(b)',
            marks: 3,
            qEn: 'Find the speed of the wave along the spring. If the student now pushes and pulls at $8.0\\text{ Hz}$ without changing the stretch of the spring, what becomes the new wavelength?',
            qCn: '求弹簧上的波速。若学生在不改变弹簧拉伸程度的情况下改以 $8.0\\text{ Hz}$ 推拉，新的波长变为多少？',
            hint: '密部到相邻疏部是 $\\frac{1}{2}\\lambda = 0.15\\text{ m}$！弹簧松紧不变代表波速 $v$ 不变！',
            modelAnswer: 'Wavelength $\\lambda = 2 \\times 0.15 = 0.30\\text{ m}$.<br>Wave speed $v = f\\lambda = 4.0 \\times 0.30 = 1.2\\text{ m s}^{-1}$.<br>Since the medium (stretch) is unchanged, $v$ remains $1.2\\text{ m s}^{-1}$, so new wavelength $\\lambda\' = \\frac{1.2}{8.0} = 0.15\\text{ m}$.',
            rubric: [
              { code: '1M', desc: 'Correctly identifies $\\lambda = 2 \\times 0.15 = 0.30\\text{ m}$' },
              { code: '1A', desc: 'Wave speed $v = 1.2\\text{ m s}^{-1}$' },
              { code: '1A', desc: 'New wavelength $\\lambda\' = 0.15\\text{ m}$ (recognising $v$ unchanged)' }
            ]
          }
        ]
      }
    ]
  },

  /* ========================================================================
     Chapter 5 Mock Quiz
     ======================================================================== */
  {
    chapterId: 'ch5',
    titleCn: 'Chapter 5 综合模考卷：波动现象与驻波',
    titleEn: 'Chapter 5 Mock Quiz: Wave Phenomena & Stationary Waves',
    timeSuggested: '30 分钟',
    mcs: [
      {
        id: 'ex-5-mc1',
        stemEn: 'In a ripple tank, straight waves are viewed through a hand-held stroboscope with $8$ slits. The highest rotation speed at which the pattern freezes without halving the apparent wavelength is $3.0\\text{ rev s}^{-1}$. The distance between the 1st and the 5th bright fringes is $10.0\\text{ cm}$. What is the wave speed?',
        stemCn: '在水波槽中透过有 $8$ 条狭缝的频闪盘观察直线波。不使表观波长减半的最高定格转速为 $3.0\\text{ rev s}^{-1}$，第 $1$ 条与第 $5$ 条亮纹间距为 $10.0\\text{ cm}$。求波速。',
        options: [
          '$48\\text{ cm s}^{-1}$',
          '$60\\text{ cm s}^{-1}$',
          '$7.5\\text{ cm s}^{-1}$',
          '$75\\text{ cm s}^{-1}$'
        ],
        answerIndex: 1,
        explanation: '1. 水波频率 $f = 8 \\times 3.0 = 24\\text{ Hz}$。<br>2. 第 $1$ 条到第 $5$ 条亮纹之间有 $4$ 个间隔：$4\\lambda = 10.0\\text{ cm} \\Rightarrow \\lambda = 2.5\\text{ cm}$。<br>3. 波速 $v = f\\lambda = 24 \\times 2.5 = 60\\text{ cm s}^{-1}$。'
      },
      {
        id: 'ex-5-mc2',
        stemEn: 'Straight water waves of wavelength $2.4\\text{ cm}$ in a deep region strike a straight boundary into a shallow region at an angle of incidence of $45^\\circ$. If the angle of refraction is $30^\\circ$, what is the wavelength in the shallow region?',
        stemCn: '深水区波长为 $2.4\\text{ cm}$ 的直线水波以 $45^\\circ$ 入射角射向浅水区直边界，折射角为 $30^\\circ$，求浅水区波长。',
        options: [
          '$1.70\\text{ cm}$',
          '$1.60\\text{ cm}$',
          '$3.39\\text{ cm}$',
          '$1.20\\text{ cm}$'
        ],
        answerIndex: 0,
        explanation: '由折射关系 $\\frac{\\lambda_1}{\\lambda_2} = \\frac{\\sin\\theta_1}{\\sin\\theta_2}$ 得 $\\lambda_2 = 2.4 \\times \\frac{\\sin 30^\\circ}{\\sin 45^\\circ} = 2.4 \\times \\frac{0.5}{\\frac{\\sqrt{2}}{2}} = 1.2\\sqrt{2} \\approx 1.70\\text{ cm}$。'
      },
      {
        id: 'ex-5-mc3',
        stemEn: 'Two coherent dippers $S_1$ and $S_2$ vibrate <strong>in antiphase</strong> in a ripple tank, generating waves of wavelength $3.0\\text{ cm}$ and amplitude $A$. Point $P$ is $12.0\\text{ cm}$ from $S_1$ and $16.5\\text{ cm}$ from $S_2$. What is the resultant amplitude of vibration at $P$?',
        stemCn: '水波槽中两相干振子 $S_1, S_2$ <strong>反相振动</strong>，产生波长 $3.0\\text{ cm}$、振幅 $A$ 的水波。点 $P$ 距 $S_1$ 为 $12.0\\text{ cm}$、距 $S_2$ 为 $16.5\\text{ cm}$。求 $P$ 点的合振幅。',
        options: [
          '$0$',
          '$A$',
          '$2A$',
          '$1.5A$'
        ],
        answerIndex: 2,
        explanation: '点 $P$ 的波程差 $\\Delta = 16.5 - 12.0 = 4.5\\text{ cm} = 1.5\\lambda$。因为两波源出发时<strong>反相（in antiphase）</strong>，再经过 $1.5\\lambda$ 的半波长奇数倍程差，两波到达 $P$ 点时刚好<strong>转为同相（in phase）</strong>，发生相长干涉，合振幅为 $2A$！'
      },
      {
        id: 'ex-5-mc4',
        stemEn: 'A microwave transmitter faces a flat metal reflector perpendicularly so that a stationary wave is set up between them. When a microwave probe is moved along the line joining them, the distance across <strong>5 consecutive nodes</strong> is $6.0\\text{ cm}$. What is the frequency of the microwaves? ($c = 3.0 \\times 10^8\\text{ m s}^{-1}$)',
        stemCn: '微波发射器正对金属反射板形成驻波。将探头沿连线移动，跨过<strong>连续 5 个波节</strong>的距离为 $6.0\\text{ cm}$。求微波频率。',
        options: [
          '$5.0 \\times 10^9\\text{ Hz}$',
          '$1.0 \\times 10^{10}\\text{ Hz}$',
          '$1.25 \\times 10^{10}\\text{ Hz}$',
          '$2.0 \\times 10^{10}\\text{ Hz}$'
        ],
        answerIndex: 1,
        explanation: '连续 $5$ 个波节之间有 $5 - 1 = 4$ 个波节间距（每个间距为 $\\frac{1}{2}\\lambda$）：$4 \\times \\frac{\\lambda}{2} = 2\\lambda = 6.0\\text{ cm} \\Rightarrow \\lambda = 3.0\\text{ cm} = 0.030\\text{ m}$。故频率 $f = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{0.030} = 1.0 \\times 10^{10}\\text{ Hz}$。'
      }
    ],
    sqs: [
      {
        id: 'ex-5-sq1',
        title: 'Structured Question 1 — Refraction & Diffraction in a Ripple Tank (6 marks)',
        contextEn: 'Plane water waves generated in a ripple tank approach a shallow region at an angle, and in a second experiment pass through a narrow gap in a barrier.',
        contextCn: '水波槽中产生的平面水波斜射向一片浅水区；在第二个实验中，平面水波穿过挡板上的窄缝。',
        parts: [
          {
            label: '(a)',
            marks: 3,
            qEn: 'Explain why the water waves decrease in wavelength and bend towards the normal when entering the shallow region.',
            qCn: '解释为什么水波进入浅水区时波长会变短，且传播方向偏向法线。',
            hint: '按标准三步给分点写：① $f$ 不变、浅水 $v$ 变小；② 由 $v = f\\lambda$ 知 $\\lambda$ 变小；③ 先进入浅水一侧波前先减速导致偏向法线！',
            modelAnswer: 'In the shallow region, the wave speed $v$ decreases while the frequency $f$ remains unchanged.<br>By $v = f\\lambda$, the wavelength $\\lambda$ decreases.<br>Since the part of each wavefront entering the shallow region slows down first while the part still in deep water moves faster, the waves bend towards the normal.',
            rubric: [
              { code: '1A', desc: 'States wave speed decreases in shallow water while frequency remains unchanged' },
              { code: '1A', desc: 'Deduces wavelength decreases by $v = f\\lambda$' },
              { code: '1A', desc: 'Explains part of wavefront in shallow water slows down first → bends towards normal' }
            ]
          },
          {
            label: '(b)',
            marks: 3,
            qEn: 'In the gap experiment, the gap width is $3.0\\text{ cm}$ and the wavelength is $0.8\\text{ cm}$. State whether diffraction is pronounced, and suggest TWO independent changes to make diffraction more pronounced.',
            qCn: '在狭缝实验中，缝宽为 $3.0\\text{ cm}$，波长为 $0.8\\text{ cm}$。指出衍射是否明显，并提出两项独立调节方法使衍射更明显。',
            hint: '先指出 $3.0\\text{ cm} \\gg 0.8\\text{ cm}$ 所以不明显；再给两个办法：① 调窄狭缝；② 调低振源频率（增大 $\\lambda$）！',
            modelAnswer: 'Diffraction is NOT pronounced (slight bending at edges only) because the gap width is much larger than the wavelength.<br>Two ways: (1) Narrow the gap width (to around $0.8\\text{ cm}$ or smaller); (2) Decrease the frequency of the vibrator (to increase the wavelength $\\lambda$).',
            rubric: [
              { code: '1A', desc: 'Not pronounced / slight diffraction (as gap width > wavelength)' },
              { code: '1A', desc: 'Decrease / narrow the width of the gap' },
              { code: '1A', desc: 'Decrease the vibrator frequency (or increase water depth) to increase wavelength' }
            ]
          }
        ]
      },
      {
        id: 'ex-5-sq2',
        title: 'Structured Question 2 — Stationary Wave on a Stretched String (6 marks)',
        contextEn: 'A stretched string of length $0.90\\text{ m}$ is fixed at both ends. When driven at $45\\text{ Hz}$, a stationary wave with $3$ loops is formed on the string.',
        contextCn: '一根长 $0.90\\text{ m}$ 的拉紧弦线两端固定。当以 $45\\text{ Hz}$ 驱动时，弦上形成具有 $3$ 个环的驻波。',
        parts: [
          {
            label: '(a)',
            marks: 2,
            qEn: 'Explain how the stationary wave is formed on the string.',
            qCn: '解释弦线上的驻波是如何形成的。',
            hint: '写出“入射波在固定端反射” + “两列反向传播的全同波叠加”！',
            modelAnswer: 'The incident wave travelling along the string is reflected at the fixed end.<br>The superposition of the two identical waves travelling in opposite directions forms the stationary wave.',
            rubric: [
              { code: '1A', desc: 'Wave is reflected at the fixed end' },
              { code: '1A', desc: 'Superposition of two identical waves travelling in opposite directions' }
            ]
          },
          {
            label: '(b)',
            marks: 2,
            qEn: 'Calculate the wavelength and the speed of waves along the string.',
            qCn: '计算波长以及弦上的波速。',
            hint: '每个环等于 $\\frac{1}{2}\\lambda$，$3$ 个环共 $0.90\\text{ m}$！',
            modelAnswer: '$3 \\times \\frac{\\lambda}{2} = 0.90\\text{ m} \\Rightarrow \\lambda = 0.60\\text{ m}$.<br>Wave speed $v = f\\lambda = 45 \\times 0.60 = 27\\text{ m s}^{-1}$.',
            rubric: [
              { code: '1A', desc: '$\\lambda = 0.60\\text{ m}$' },
              { code: '1A', desc: '$v = 27\\text{ m s}^{-1}$' }
            ]
          },
          {
            label: '(c)',
            marks: 2,
            qEn: 'Particle $P$ is at the antinode of the 1st loop and particle $Q$ is halfway between a node and the antinode in the 2nd loop. State their phase relationship, and find the lowest frequency that can produce a stationary wave on this string.',
            qCn: '质点 $P$ 位于第 1 环波腹，质点 $Q$ 位于第 2 环波节与波腹中点。写出两者的相位关系，并求该弦能产生驻波的最低频率（基频）。',
            hint: '第 1 环与相邻第 2 环隔着 1 个波节，相位同还是反？$3$ 个环是 $45\\text{ Hz}$，那 $1$ 个环是多少 $\\text{Hz}$？',
            modelAnswer: '$P$ and $Q$ vibrate in antiphase.<br>Lowest (fundamental) frequency $f_1 = \\frac{45}{3} = 15\\text{ Hz}$ (or $f_1 = \\frac{27}{2 \\times 0.90} = 15\\text{ Hz}$).',
            rubric: [
              { code: '1A', desc: 'In antiphase (completely out of phase)' },
              { code: '1A', desc: '$15\\text{ Hz}$' }
            ]
          }
        ]
      }
    ]
  },

  /* ========================================================================
     Chapter 6 Mock Quiz
     ======================================================================== */
  {
    chapterId: 'ch6',
    titleCn: 'Chapter 6 综合模考卷：光波与电磁波',
    titleEn: 'Chapter 6 Mock Quiz: Light Waves & EM Spectrum',
    timeSuggested: '30 分钟',
    mcs: [
      {
        id: 'ex-6-mc1',
        stemEn: 'In a Young\'s double-slit experiment, laser light of wavelength $540\\text{ nm}$ illuminates a double slit of slit separation $0.18\\text{ mm}$. On a screen $2.0\\text{ m}$ away, what is the distance from the 2nd-order bright fringe on one side of the central maximum to the 2nd-order bright fringe on the opposite side?',
        stemCn: '杨氏双缝实验中，波长 $540\\text{ nm}$ 的激光照射间距 $0.18\\text{ mm}$ 的双缝，屏距 $2.0\\text{ m}$。求中央亮纹一侧第 $2$ 级亮纹到另一侧第 $2$ 级亮纹之间的距离。',
        options: [
          '$6.0\\text{ mm}$',
          '$12.0\\text{ mm}$',
          '$24.0\\text{ mm}$',
          '$30.0\\text{ mm}$'
        ],
        answerIndex: 2,
        explanation: '1. 相邻亮纹间距 $\\Delta y = \\frac{\\lambda D}{a} = \\frac{(5.4 \\times 10^{-7})(2.0)}{1.8 \\times 10^{-4}} = 6.0 \\times 10^{-3}\\text{ m} = 6.0\\text{ mm}$。<br>2. 左侧第 $2$ 级（$-2\\Delta y$）到右侧第 $2$ 级（$+2\\Delta y$）共跨过 $4\\Delta y = 4 \\times 6.0 = 24.0\\text{ mm}$！'
      },
      {
        id: 'ex-6-mc2',
        stemEn: 'Monochromatic light of wavelength $650\\text{ nm}$ falls normally on a diffraction grating with $300\\text{ lines per mm}$. What is the total number of bright fringes emerging from the grating?',
        stemCn: '波长为 $650\\text{ nm}$ 的单色光垂直射向每毫米 $300$ 条刻线的衍射光栅。透过光栅共产生多少条主极大亮纹？',
        options: [
          '$5$',
          '$10$',
          '$11$',
          '$13$'
        ],
        answerIndex: 2,
        explanation: '光栅间距 $d = \\frac{10^{-3}\\text{ m}}{300} \\approx 3.333 \\times 10^{-6}\\text{ m}$。由 $\\sin\\theta < 1$ 得 $n < \\frac{d}{\\lambda} = \\frac{3.333 \\times 10^{-6}}{6.50 \\times 10^{-7}} \\approx 5.13$，故最高级数 $n_{\\max} = 5$。总亮纹数 $= 2n_{\\max} + 1 = 2(5) + 1 = 11$ 条。'
      },
      {
        id: 'ex-6-mc3',
        stemEn: 'A narrow beam of white light strikes a diffraction grating normally. Which statement about the pattern on the screen is INCORRECT?',
        stemCn: '一束窄白光垂直照射衍射光栅。下列关于屏幕图样的陈述哪一项是<strong>不正确</strong>的？',
        options: [
          'The zero-order fringe at the centre is white.',
          'In the first-order spectrum, red light is diffracted through a larger angle than violet light.',
          'Every wavelength component travels at the same speed in air.',
          'All bright orders of the same colour are equally spaced on a flat screen.'
        ],
        answerIndex: 3,
        explanation: 'D 项错误！光栅衍射角较大，满足 $d\\sin\\theta = n\\lambda$ 及 $y_n = D\\tan\\theta_n$，平屏上各级亮斑<strong>不是等间距的</strong>（越往高级数间距越大）！A、B、C 三项均完全正确。'
      },
      {
        id: 'ex-6-mc4',
        stemEn: 'Which pair correctly matches an electromagnetic wave region with its practical application?',
        stemCn: '下列哪一组正确配对了电磁波波段及其实际应用？',
        options: [
          'Ultraviolet radiation — thermal imaging cameras for fever screening',
          'Infrared radiation — detecting forged banknotes with fluorescent ink',
          'Microwaves — satellite communication',
          'X-rays — optical fibre telecommunication'
        ],
        answerIndex: 2,
        explanation: '• A 与 B 配反了：额温热成像用的是<strong>红外辐射（IR）</strong>，激发荧光防伪油墨验钞用的是<strong>紫外辐射（UV）</strong>！<br>• C 正确：<strong>微波（microwaves）</strong>能穿透电离层且衍射小，广泛用于卫星通讯。<br>• D 错误：光纤通讯使用可见光或红外线，不用高能电离的 X 射线。'
      }
    ],
    sqs: [
      {
        id: 'ex-6-sq1',
        title: 'Structured Question 1 — Young\'s Double-Slit Experiment (6 marks)',
        contextEn: 'A student shines a red laser beam onto a double slit of slit separation $a = 0.30\\text{ mm}$. On a screen placed $D = 1.80\\text{ m}$ away, the total distance from the centre of the 1st bright fringe to the centre of the 9th bright fringe is measured to be $30.4\\text{ mm}$.',
        contextCn: '学生用红激光照射间距 $a = 0.30\\text{ mm}$ 的双缝。在距离 $D = 1.80\\text{ m}$ 的屏幕上，测得第 $1$ 条亮纹中心到第 $9$ 条亮纹中心的总距离为 $30.4\\text{ mm}$。',
        parts: [
          {
            label: '(a)',
            marks: 1,
            qEn: 'Explain why the student measures across 9 bright fringes instead of directly measuring the distance between two adjacent bright fringes.',
            qCn: '解释为什么学生要跨过 9 条亮纹进行测量，而不是直接测量相邻两条亮纹的距离。',
            hint: '实验误差标准金句：增大测量长度以减小百分误差！',
            modelAnswer: 'Because the fringe separation is very small, measuring across multiple fringes increases the measured length and reduces the percentage error.',
            rubric: [
              { code: '1A', desc: 'To reduce the percentage error in measuring the small fringe separation' }
            ]
          },
          {
            label: '(b)',
            marks: 3,
            qEn: 'Calculate the wavelength of the red laser light.',
            qCn: '计算红色激光的波长。',
            hint: '第 1 条到第 9 条亮纹中间隔了 $9 - 1 = 8$ 个 $\\Delta y$！先除 $8$ 得 $\\Delta y = 3.8\\text{ mm}$，再代 $\\Delta y = \\frac{\\lambda D}{a}$！',
            modelAnswer: 'Fringe separation $\\Delta y = \\frac{30.4\\text{ mm}}{9 - 1} = 3.8\\text{ mm} = 3.8 \\times 10^{-3}\\text{ m}$.<br>By $\\Delta y = \\frac{\\lambda D}{a}$, $\\lambda = \\frac{(3.8 \\times 10^{-3})(0.30 \\times 10^{-3})}{1.80} = 6.33 \\times 10^{-7}\\text{ m}$ ($633\\text{ nm}$).',
            rubric: [
              { code: '1M', desc: 'Divides by $8$ intervals to get $\\Delta y = 3.8\\text{ mm}$' },
              { code: '1M', desc: 'Applies $\\Delta y = \\frac{\\lambda D}{a}$ with correct SI unit conversions' },
              { code: '1A', desc: '$6.33 \\times 10^{-7}\\text{ m}$ (or $633\\text{ nm}$)' }
            ]
          },
          {
            label: '(c)',
            marks: 2,
            qEn: 'Describe TWO changes to the interference pattern if the red laser is replaced by a green laser.',
            qCn: '若将红激光换成绿激光，描述干涉图样发生的两项变化。',
            hint: '颜色变了 + 绿光波长更短导致间距 $\\Delta y$ 怎么变？',
            modelAnswer: '(1) The bright fringes change colour from red to green.<br>(2) Since green light has a shorter wavelength than red light, the fringes become more closely spaced (fringe separation $\\Delta y$ decreases).',
            rubric: [
              { code: '1A', desc: 'Bright fringes become green in colour' },
              { code: '1A', desc: 'Fringe separation decreases / fringes become closer together (as $\\lambda_{\\text{green}} < \\lambda_{\\text{red}}$)' }
            ]
          }
        ]
      },
      {
        id: 'ex-6-sq2',
        title: 'Structured Question 2 — Diffraction Grating Analysis (6 marks)',
        contextEn: 'A green laser of wavelength $532\\text{ nm}$ strikes a diffraction grating of $600\\text{ lines per mm}$ normally. A flat screen is placed $1.50\\text{ m}$ behind and parallel to the grating.',
        contextCn: '波长为 $532\\text{ nm}$ 的绿激光垂直射向每毫米 $600$ 条刻线的衍射光栅，平屏平行置于光栅后方 $1.50\\text{ m}$ 处。',
        parts: [
          {
            label: '(a)',
            marks: 3,
            qEn: 'Calculate the distance between the central maximum and the first-order maximum on the screen.',
            qCn: '计算屏幕上中央亮斑与第 1 级亮斑之间的距离。',
            hint: '三步走：① $d = \\frac{10^{-3}}{600}\\text{ m}$；② $d\\sin\\theta_1 = \\lambda$ 求 $\\theta_1$；③ $y_1 = D\\tan\\theta_1$（切勿用 $D\\sin\\theta_1$）！',
            modelAnswer: 'Grating spacing $d = \\frac{10^{-3}}{600} = 1.667 \\times 10^{-6}\\text{ m}$.<br>By $d\\sin\\theta_1 = (1)\\lambda$, $\\sin\\theta_1 = 532 \\times 10^{-9} \\times 600 \\times 10^3 = 0.3192 \\Rightarrow \\theta_1 = 18.61^\\circ$.<br>Distance on screen $y_1 = D\\tan\\theta_1 = 1.50 \\times \\tan 18.61^\\circ = 0.505\\text{ m}$.',
            rubric: [
              { code: '1M', desc: 'Correctly finds $d = 1.67 \\times 10^{-6}\\text{ m}$ and applies $d\\sin\\theta_1 = \\lambda$ ($\\theta_1 \\approx 18.6^\\circ$)' },
              { code: '1M', desc: 'Uses $y_1 = D\\tan\\theta_1$ (NOT $\\frac{\\lambda D}{d}$)' },
              { code: '1A', desc: '$0.505\\text{ m}$ (accept $0.50\\text{–}0.51\\text{ m}$)' }
            ]
          },
          {
            label: '(b)',
            marks: 1,
            qEn: 'Determine the highest order of bright spot formed by the grating.',
            qCn: '求光栅能产生的最高亮斑级数。',
            hint: '计算 $\\frac{d}{\\lambda}$ 并向下取整！',
            modelAnswer: 'For $\\sin\\theta < 1$, $n < \\frac{d}{\\lambda} = \\frac{1}{0.3192} = 3.13$. Hence the highest order is $n_{\\max} = 3$.',
            rubric: [
              { code: '1A', desc: '$n_{\\max} = 3$ (from $n < 3.13$)' }
            ]
          },
          {
            label: '(c)',
            marks: 2,
            qEn: 'Give TWO reasons why measuring wavelength using a diffraction grating is more accurate than using a double slit.',
            qCn: '给出两项理由说明为什么用衍射光栅测波长比用双缝更准确。',
            hint: '写出“更锐利细亮（易定中心）” + “间距大得多（减小百分误差）”！',
            modelAnswer: '(1) The maxima are much sharper and brighter, making it easier to locate their centres precisely.<br>(2) The maxima are much more widely spaced, reducing the percentage error in distance/angle measurement.',
            rubric: [
              { code: '1A', desc: 'Fringes/maxima are much sharper (and brighter) → more precise centre location' },
              { code: '1A', desc: 'Maxima are much more widely spaced → smaller percentage error' }
            ]
          }
        ]
      }
    ]
  },

  /* ========================================================================
     Chapter 7 Mock Quiz
     ======================================================================== */
  {
    chapterId: 'ch7',
    titleCn: 'Chapter 7 综合模考卷：声波与超声波',
    titleEn: 'Chapter 7 Mock Quiz: Sound & Ultrasound',
    timeSuggested: '30 分钟',
    mcs: [
      {
        id: 'ex-7-mc1',
        stemEn: 'A ship sends an ultrasound pulse vertically downwards to the seabed and receives the echo $0.80\\text{ s}$ later. Given that the speed of ultrasound in seawater is $1500\\text{ m s}^{-1}$, what is the depth of the seabed?',
        stemCn: '探测船垂直向海底发射一束超声波脉冲，经 $0.80\\text{ s}$ 接收到回波。已知海水中声速为 $1500\\text{ m s}^{-1}$，求海底深度。',
        options: [
          '$136\\text{ m}$',
          '$600\\text{ m}$',
          '$1200\\text{ m}$',
          '$1875\\text{ m}$'
        ],
        answerIndex: 1,
        explanation: '声呐测深是往返路程：$2d = vt \\Rightarrow d = \\frac{1500 \\times 0.80}{2} = 600\\text{ m}$。'
      },
      {
        id: 'ex-7-mc2',
        stemEn: 'A musical note captured by a microphone is displayed on a CRO with the time-base set at $1.0\\text{ ms div}^{-1}$. One complete waveform occupies $2.5\\text{ divisions}$ horizontally. What is the frequency of the note, and how will the trace change if a louder note of the same pitch is played on the same instrument?',
        stemCn: '麦克风采集某乐音显示在时基为 $1.0\\text{ ms div}^{-1}$ 的 CRO 上，$1$ 个完整波形水平占 $2.5$ 格。求频率；若用同一乐器奏出同音调但更响的音，图形怎样变？',
        options: [
          '$400\\text{ Hz}$; vertical height increases while horizontal width per cycle remains $2.5\\text{ div}$',
          '$400\\text{ Hz}$; horizontal width per cycle decreases while vertical height stays the same',
          '$0.4\\text{ Hz}$; vertical height increases while horizontal width per cycle remains $2.5\\text{ div}$',
          '$250\\text{ Hz}$; both vertical height and horizontal width increase'
        ],
        answerIndex: 0,
        explanation: '1. 周期 $T = 2.5 \\times 1.0\\text{ ms} = 2.5 \\times 10^{-3}\\text{ s}$，故 $f = \\frac{1}{T} = 400\\text{ Hz}$。<br>2. 同一乐器同音调但更响：频率 $f$ 与周期 $T$ 不变（水平仍占 $2.5$ 格），振幅增大使竖直高度增加。'
      },
      {
        id: 'ex-7-mc3',
        stemEn: 'Which of the following statements about sound waves and ultrasound in air at the same temperature is/are correct?<br>(1) Ultrasound travels faster than audible sound because it has a higher frequency.<br>(2) Both audible sound and ultrasound are longitudinal mechanical waves.<br>(3) Audible sound diffracts more readily around a doorway than ultrasound.',
        stemCn: '在同一温度的空气中，下列关于可听声波与超声波的陈述哪些正确？(1) 超声波因频率高而比可听声波跑得快。(2) 两者都是机械纵波。(3) 可听声波比超声波更容易在房门处发生衍射。',
        options: [
          '(2) only',
          '(1) and (2) only',
          '(2) and (3) only',
          '(1), (2) and (3)'
        ],
        answerIndex: 2,
        explanation: '• (1) 错误：同一温度空气中，超声波与可听声波波速完全相等（约 $340\\text{ m s}^{-1}$）！<br>• (2) 正确：两者均为机械纵波。<br>• (3) 正确：可听声波频率低、波长长（与门宽相当），比短波长的超声波衍射显著得多。故选 (2) and (3) only。'
      },
      {
        id: 'ex-7-mc4',
        stemEn: 'During a sunny afternoon, the air near the ground is much hotter than the air higher up. How does the speed of sound vary with height, and in which direction do sound waves travelling obliquely from the ground refract?',
        stemCn: '晴朗午后，近地面空气远比高空空气炎热。声速随高度如何变化？从地面斜射出的声波向哪个方向折射？',
        options: [
          'Speed decreases with height; sound waves refract upwards away from the ground',
          'Speed decreases with height; sound waves refract downwards towards the ground',
          'Speed increases with height; sound waves refract upwards away from the ground',
          'Speed increases with height; sound waves refract downwards towards the ground'
        ],
        answerIndex: 0,
        explanation: '气温越高声速越快：午后高空空气较冷，故声速随高度增加而减小；地面附近的波前下半截比高空上半截走得快，导致声波<strong>向上弯曲偏离地面（refract upwards away from the ground）</strong>。'
      }
    ],
    sqs: [
      {
        id: 'ex-7-sq1',
        title: 'Structured Question 1 — Interference of Sound in a Room (6 marks)',
        contextEn: 'Two identical loudspeakers $L_1$ and $L_2$ are connected in phase to the same signal generator in a classroom. As a student walks from the central maximum $O$ along a straight line to point $P$, $P$ is the <strong>second soft-sound position</strong> from $O$. Given $L_1P = 4.10\\text{ m}$, $L_2P = 4.85\\text{ m}$ and the speed of sound in air is $340\\text{ m s}^{-1}$.',
        contextCn: '教室内两个相同扬声器 $L_1, L_2$ 同相连接至同一信号发生器。学生从中央最强声点 $O$ 沿直线走到<strong>第 2 个弱声点</strong> $P$，测得 $L_1P = 4.10\\text{ m}$，$L_2P = 4.85\\text{ m}$，空气声速为 $340\\text{ m s}^{-1}$。',
        parts: [
          {
            label: '(a)',
            marks: 1,
            qEn: 'Why must the two loudspeakers be connected to the same signal generator?',
            qCn: '为什么两个扬声器必须连接到同一个信号发生器？',
            hint: '写出核心词 coherent sources（同频率、恒定相位差）！',
            modelAnswer: 'To ensure that the two loudspeakers act as coherent sources (emitting sound waves of the same frequency and a constant phase difference).',
            rubric: [
              { code: '1A', desc: 'To act as coherent sources / same frequency and constant phase difference' }
            ]
          },
          {
            label: '(b)',
            marks: 3,
            qEn: 'Find the wavelength and frequency of the sound emitted.',
            qCn: '求所发出声波的波长和频率。',
            hint: '从中央 $O$ 数起：第 1 个弱声点程差是 $0.5\\lambda$，第 2 个弱声点 $P$ 程差是 $1.5\\lambda = 4.85 - 4.10 = 0.75\\text{ m}$！',
            modelAnswer: 'Path difference $\\Delta = 4.85 - 4.10 = 0.75\\text{ m}$.<br>For the 2nd destructive minimum, $1.5\\lambda = 0.75\\text{ m} \\Rightarrow \\lambda = 0.50\\text{ m}$.<br>Frequency $f = \\frac{v}{\\lambda} = \\frac{340}{0.50} = 680\\text{ Hz}$.',
            rubric: [
              { code: '1M', desc: 'Equates path difference $0.75\\text{ m} = 1.5\\lambda$' },
              { code: '1A', desc: '$\\lambda = 0.50\\text{ m}$' },
              { code: '1A', desc: '$f = 680\\text{ Hz}$' }
            ]
          },
          {
            label: '(c)',
            marks: 2,
            qEn: 'Give TWO reasons why the student still hears a faint sound instead of complete silence at $P$.',
            qCn: '给出两项原因说明为什么学生在 $P$ 点仍能听到微弱声音，而不是完全无声。',
            hint: '必背黄金两分：① 墙壁地板反射声波；② 距离不同导致两声波到达 $P$ 时的振幅不等！',
            modelAnswer: '(1) Sound waves reflected from the walls, ceiling and floor of the classroom also reach $P$.<br>(2) Since $L_1P \\neq L_2P$, the two waves travel different distances and arrive at $P$ with unequal amplitudes, so cancellation is incomplete.',
            rubric: [
              { code: '1A', desc: 'Reflections of sound from walls / floor / ceiling reach $P$' },
              { code: '1A', desc: 'Unequal amplitudes of the two waves arriving at $P$ (due to different distances)' }
            ]
          }
        ]
      },
      {
        id: 'ex-7-sq2',
        title: 'Structured Question 2 — Ultrasonic Flaw Detection with CRO (6 marks)',
        contextEn: 'An ultrasound transceiver probe is placed on top of a steel block of thickness $15.0\\text{ cm}$ to check for internal cracks. On the CRO screen, the initial transmitted pulse appears at the $0\\text{-division}$ mark, an echo from an internal crack appears at $4.0\\text{ divisions}$, and the echo from the bottom surface of the block appears at $6.0\\text{ divisions}$. The speed of ultrasound in steel is $5000\\text{ m s}^{-1}$.',
        contextCn: '将超声波收发探头放在厚 $15.0\\text{ cm}$ 的钢块顶面检测内部裂纹。CRO 屏幕上，初始发射脉冲在 $0$ 格处，内部裂纹回波在 $4.0$ 格处，钢块底面回波在 $6.0$ 格处。钢中超声速为 $5000\\text{ m s}^{-1}$。',
        parts: [
          {
            label: '(a)',
            marks: 4,
            qEn: 'Calculate the time-base setting of the CRO (in $\\mu\\text{s div}^{-1}$) and the depth of the internal crack below the top surface.',
            qCn: '计算 CRO 的时基设置（单位 $\\mu\\text{s div}^{-1}$）以及内部裂纹距顶面的深度。',
            hint: '钢块底面深度 $15.0\\text{ cm} = 0.150\\text{ m}$，往返走 $0.300\\text{ m}$ 耗时 $t = \\frac{0.300}{5000} = 60\\text{ }\\mu\\text{s}$，刚好对应 $6.0$ 格！裂纹在 $4.0$ 格处按比例立得深度！',
            modelAnswer: 'Round-trip time to bottom surface $t_{\\text{bottom}} = \\frac{2 \\times 0.150}{5000} = 6.0 \\times 10^{-5}\\text{ s} = 60\\text{ }\\mu\\text{s}$.<br>Time-base setting $= \\frac{60\\text{ }\\mu\\text{s}}{6.0\\text{ div}} = 10\\text{ }\\mu\\text{s div}^{-1}$.<br>Crack echo time $t_{\\text{crack}} = 4.0 \\times 10\\text{ }\\mu\\text{s} = 40\\text{ }\\mu\\text{s}$.<br>Depth of crack $d = \\frac{5000 \\times 40 \\times 10^{-6}}{2} = 0.10\\text{ m}$ ($10.0\\text{ cm}$).',
            rubric: [
              { code: '1M', desc: 'Uses round-trip $2d = vt$ for bottom echo ($t = 6.0 \\times 10^{-5}\\text{ s} = 60\\text{ }\\mu\\text{s}$)' },
              { code: '1A', desc: 'Time-base $= 10\\text{ }\\mu\\text{s div}^{-1}$' },
              { code: '1M', desc: 'Uses $4.0\\text{ div}$ ($40\\text{ }\\mu\\text{s}$ or ratio $\\frac{4.0}{6.0}$) to find crack depth' },
              { code: '1A', desc: 'Depth $= 10.0\\text{ cm}$ (or $0.10\\text{ m}$)' }
            ]
          },
          {
            label: '(b)',
            marks: 2,
            qEn: 'Explain why high-frequency ultrasound instead of audible sound is used to detect small internal cracks.',
            qCn: '解释为什么检测微小内部裂纹要使用高频超声波，而不用普通可听声波。',
            hint: '高频 $\\to$ 短波长 $\\to$ 衍射极小（不会直接绕过微小裂纹，而是被清晰反射回来）！',
            modelAnswer: 'High-frequency ultrasound has a very short wavelength, so it undergoes much less diffraction.<br>Therefore it travels as a narrow beam and reflects off tiny cracks instead of diffracting around them.',
            rubric: [
              { code: '1A', desc: 'Ultrasound has a much shorter wavelength → much less diffraction' },
              { code: '1A', desc: 'Forms a narrow beam / reflects clearly off tiny cracks instead of bending around them' }
            ]
          }
        ]
      }
    ]
  }
];
