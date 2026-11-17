window.BOOK_3B_CHAPTERS = window.BOOK_3B_CHAPTERS || [];

window.BOOK_3B_CHAPTERS.push({
  id: 'ch6',
  number: 'Chapter 6',
  titleCn: '光波与电磁波',
  titleEn: 'Light Waves and Electromagnetic Waves',
  color: '#7c3aed',
  overview: '在 3A 册我们把光看作笔直前进的“光线（rays）”；但到了第 6 章，我们要用第 4、5 章建立的波动武器揭开光的真正身份——光其实是一列波长极短（仅约 400–700 nm）的电磁横波！通过杨氏双缝干涉与衍射光栅两大经典实验，人类不仅铁证如山地证实了光的波动性，还能把肉眼看不见的光波长精确测量到纳米级，并认识整个庞大的电磁波谱家族。',
  sections: [
    /* ========================================================================
       Section 6.1
       ======================================================================== */
    {
      id: '6.1',
      code: '6.1',
      titleCn: '光的波动本性：反射、折射与单缝衍射',
      titleEn: 'Wave Nature of Light: Reflection, Refraction and Diffraction',
      dseTag: '核心衔接 · Core & * Extension',
      realLifeHook: {
        title: '🏊‍♀️ 先从生活出发：潜入泳池底睁眼看红灯，波长变短了，为什么红灯没变成绿灯？',
        html: `
          <p>一束红色激光从空气射进水里，波速减慢为原来的 $\\frac{3}{4}$，波长也从空气中的约 $650\\text{ nm}$ 一下子缩短成了水里的约 $488\\text{ nm}$——咦？$488\\text{ nm}$ 在空气里明明是蓝绿光的波长呀！那你在水底睁开眼睛看这束激光，它会变成蓝绿色吗？</p>
          <p><strong>绝对不会！它依然是纯正的红色！</strong>因为人眼视网膜感光细胞识别颜色，靠的是每秒钟光波振荡的次数——<strong>频率 $f$（frequency）</strong>！跨介质折射时频率 $f$ 永远不变，所以光的颜色永远由频率 $f$（或真空波长 $\\lambda_0$）决定，绝不由介质中的波长决定！</p>
        `
      },
      concepts: [
        {
          title: '1. 证明光是波的两大铁证 & 用波前解释光的折射',
          html: `
            <ul>
              <li>什么现象证明光是一种波（wave）？正是第 5 章学过的波的专属指纹：<strong>光能发生衍射（diffraction）和干涉（interference）</strong>！</li>
              <li>把第 5.2 节“水波从深水进入浅水”原封不动搬过来，就能完美解释 3A 册的<strong>斯涅耳定律（Snell's Law）</strong>：
                <ul>
                  <li>当光从空气（真空光速 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$，波长 $\\lambda_0$）射入折射率为 $n$ 的玻璃或水（光密介质 optically denser medium）时：</li>
                  <li><strong>频率 $f$ 保持不变</strong>（光的颜色不变！）；</li>
                  <li><strong>波速减慢</strong>：$v = \\frac{c}{n} < c$；</li>
                  <li><strong>波长缩短</strong>：由 $v = f\\lambda$ 得 $\\lambda = \\frac{\\lambda_0}{n} < \\lambda_0$（玻璃内部光波前变密集），传播方向<strong>偏向法线（bends towards the normal）</strong>。</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          title: '2. 为什么平时觉得“光走直线”？光的单缝衍射（Single-Slit Diffraction）',
          html: `
            <p>既然光是波，为什么我们平时手电筒照出门外，光不像声音那样拐弯照亮走廊，而是在地上投下边缘清晰的影子？</p>
            <ul>
              <li>原因全在于<strong>可见光的波长实在太短了</strong>（仅约 $4 \\times 10^{-7}\\text{ m} \\sim 7 \\times 10^{-7}\\text{ m}$，即 $400\\text{ nm} \\sim 700\\text{ nm}$）！日常门窗、书本的尺寸 $a$ 远大于光波长（$a \\gg \\lambda$），衍射极其微弱，因此“光线沿直线传播（rectilinear propagation）”只是 $a \\gg \\lambda$ 时的近似模型。</li>
              <li>一旦让激光穿过一条<strong>极窄的单缝</strong>（例如 $a \\approx 0.1\\text{ mm}$ 或更窄），屏幕上立刻出现明显的<span class="term">单缝衍射图样</span><span class="term-en">single-slit diffraction pattern</span>：</li>
            </ul>
            <div class="diagram-card">
              <svg viewBox="0 0 720 185" width="100%" aria-label="光的单缝衍射图样特征">
                <rect x="25" y="18" width="670" height="62" fill="#0f172a" rx="8"/>
                <!-- Central wide bright band + narrow dim side fringes -->
                <rect x="265" y="24" width="190" height="50" fill="#ef4444" opacity="0.95" rx="4"/>
                <rect x="192" y="28" width="48" height="42" fill="#ef4444" opacity="0.42" rx="3"/>
                <rect x="480" y="28" width="48" height="42" fill="#ef4444" opacity="0.42" rx="3"/>
                <rect x="132" y="32" width="36" height="34" fill="#ef4444" opacity="0.18" rx="3"/>
                <rect x="552" y="32" width="36" height="34" fill="#ef4444" opacity="0.18" rx="3"/>
                <text x="305" y="54" fill="#ffffff" font-size="13" font-weight="bold">中央亮带（宽 2 倍、最亮！）</text>
                <!-- Intensity curve below -->
                <line x1="60" y1="158" x2="660" y2="158" stroke="#94a3b8" stroke-width="1.5"/>
                <path d="M 90 158 Q 150 148, 175 158 Q 216 132, 250 158 Q 360 58, 470 158 Q 504 132, 545 158 Q 570 148, 630 158" fill="none" stroke="#dc2626" stroke-width="2.8"/>
                <text x="276" y="176" fill="#475569" font-size="12.5" font-weight="bold">单缝衍射特征：中央亮纹宽度约为两侧次级亮纹的 2 倍，亮度向两侧急剧衰减</text>
              </svg>
              <div class="diagram-caption">图 6.1：激光单缝衍射图样（注意与 6.2 节“等宽等间距”的双缝干涉条纹区分！）。</div>
            </div>
            <ul>
              <li><strong>单缝衍射调节规律</strong>：把单缝<strong>调得更窄（减小 $a$）</strong>，或改用<strong>波长更长的光（如蓝光换红光，增大 $\\lambda$）</strong>，衍射都会更显著——<strong>中央亮纹反而会展得更宽（wider central bright fringe）</strong>，同时亮度变暗！</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '折射率与光波速、光波长的统一关系（Refractive Index & Wave Speed / Wavelength）',
          badge: '3A × 3B 贯通核心公式',
          latex: 'n = \\frac{\\sin\\theta_{\\text{air}}}{\\sin\\theta_{\\text{medium}}} = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}',
          vars: [
            '$n$：介质的折射率 refractive index（无单位，$n > 1$）',
            '$c, \\lambda_0$：光在真空（或空气）中的速率（$3.0 \\times 10^8\\text{ m s}^{-1}$）与波长（$\\text{m}$）',
            '$v, \\lambda$：光在该介质中的速率（$\\text{m s}^{-1}$）与波长（$\\text{m}$）'
          ],
          condition: '跨介质折射时频率 $f$ 恒定不变（$c = f\\lambda_0$ 且 $v = f\\lambda$），两式相除即得 $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$。'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：为什么单缝“越挤越窄”，墙上的光斑反而“越拉越宽”？',
        intro: '很多同学直觉以为缝变窄光斑就变窄——顺着下面 3 个追问打破这个直觉错觉：',
        steps: [
          {
            q: '追问 1：用一扇宽窗子（$a = 1\\text{ m}$）让阳光照进来时，因为 $a \\gg \\lambda$，几乎不发生衍射。这时候把窗子关窄一半，地上的亮斑会变窄吗？',
            options: [
              '会变窄（几何投影阶段，$a \\gg \\lambda$）',
              '会变宽'
            ],
            answerIndex: 0,
            a: '没错！在远大于波长的宏观尺度下，光线近似走直线，窗口越窄投影当然越窄。'
          },
          {
            q: '追问 2：但是！当狭缝已经窄到 $0.08\\text{ mm}$ 甚至 $0.04\\text{ mm}$ 时，进入了波动衍射主导区！回忆第 5.3 节水波槽：缝宽 $a$ 越小，波穿过狭缝后散开（spreading）的角度会怎样？',
            options: [
              '衍射更明显（more pronounced diffraction），向两侧散开的角度更大！',
              '散开角度更小'
            ],
            answerIndex: 0,
            a: '抓到关键了！波动本性登场后，$a$ 越小（$\\frac{\\lambda}{a}$ 越大），衍射张角越大！'
          },
          {
            q: '追问 3：既然衍射张角变大了，投射到远处白屏上的“中央亮带（central bright fringe）”宽度会怎样变化？如果把红光（$\\lambda \\approx 650\\text{ nm}$）换成紫光（$\\lambda \\approx 400\\text{ nm}$）呢？',
            options: [
              '缝变窄使中央亮带变宽；换波长更短的紫光则使中央亮带变窄',
              '缝变窄使中央亮带变窄；换紫光使中央亮带变宽'
            ],
            answerIndex: 0,
            a: '完全打通！单缝越窄（$a \\downarrow$）或波长越长（$\\lambda \\uparrow$），衍射越强，中央亮带就越宽！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 5.2 & 5.3 节（水波折射与衍射）',
          text: '光进玻璃减速（波长变短偏向法线）对应水波进浅水区；光过微缝展宽对应水波过窄口散开——所有波遵循同一套剧本！',
          targetSec: '5.2'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 6.2 节（双缝实验里单缝的作用）',
          text: '正是靠光穿过窄缝会发生衍射向四周散开，双缝 $S_1, S_2$ 出来的两束光波才能在屏幕上大面积重叠并发生干涉！',
          targetSec: '6.2'
        }
      ],
      traps: [
        {
          wrong: '误区 1：绿光（$\\lambda_0 = 550\\text{ nm}$）射入折射率 $n = 1.33$ 的水中后，波长变成 $414\\text{ nm}$，所以水中看到它变成了紫光！',
          right: '真相：绝对不变色！光的颜色完全由频率 $f$ 决定，折射时频率 $f$ 恒定不变，所以水下看依然是绿光！'
        },
        {
          wrong: '误区 2：混淆“单缝衍射图样”与“双缝干涉图样”。',
          right: '真相：单缝衍射是“中间一条特别宽特别亮，两边窄而暗”；双缝干涉是“许多条等宽、等间距、亮度相近的明暗条纹”！'
        }
      ],
      linkedLab: {
        labId: 'lab6',
        title: '实验 6：光学干涉与波长色彩工作台',
        prompt: '在实验 6 中拖动可见光波长滑块（400 nm 紫光 → 700 nm 红光），直观感受不同波长色光的真实光谱色与条纹展宽效应！'
      },
      questions: [
        {
          id: 'q-6-1-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '一束单色红光在空气中的波长为 $660\\text{ nm}$。当它射入折射率 $n = 1.5$ 的玻璃砖中传播时，它在玻璃中的<strong>波长</strong>和<strong>颜色</strong>分别是什么？',
          options: [
            '波长变为 $440\\text{ nm}$，颜色变成蓝紫色',
            '波长变为 $440\\text{ nm}$，颜色仍然是红色',
            '波长保持 $660\\text{ nm}$ 不变，颜色仍然是红色',
            '波长变为 $990\\text{ nm}$，颜色仍然是红色'
          ],
          answerIndex: 1,
          hint: '分两步判断：① 玻璃里光速变慢为 $\\frac{c}{1.5}$，频率不变，波长 $\\lambda = \\frac{\\lambda_0}{n}$ 变成多少？② 光的颜色看频率 $f$ 还是看介质波长？',
          wrongDiagnostics: [
            '波长 $440\\text{ nm}$ 算得超准！但千万记住：光的颜色由频率 $f$ 决定，进玻璃频率不变，红光永远是红光，不会变色哦！',
            '',
            '颜色不变是对的！但光进入玻璃波速减慢为 $\\frac{c}{1.5}$，由 $v = f\\lambda$ 知波长必须缩短为 $\\frac{660}{1.5} = 440\\text{ nm}$。',
            '乘除反啦！玻璃中光速比空气慢，波长应该缩短（除以 $1.5$），而不是变长（乘以 $1.5$）！'
          ],
          explanation: '1. 光进入玻璃时<strong>频率 $f$ 保持不变</strong>，因此人眼感知的<strong>颜色保持红色不变</strong>。<br>2. 由 $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$ 得玻璃中波长 $\\lambda = \\frac{660\\text{ nm}}{1.5} = 440\\text{ nm}$。',
          markingKeywords: ['frequency remains unchanged → still red', 'λ = λ₀ / n = 440 nm']
        },
        {
          id: 'q-6-1-2',
          level: 2,
          levelLabel: '第二阶 · 实验现象推演',
          stem: '用一束绿色激光垂直照射一条极窄的可调单缝（single slit），在远处白屏上观察到中央亮带和两侧暗淡的次级条纹。若要使白屏上的<strong>中央亮带变得更宽</strong>，下列哪项操作可行？',
          options: [
            '把单缝宽度稍微调宽，同时把绿色激光换成蓝色激光',
            '把单缝宽度稍微调窄，同时把绿色激光换成红色激光',
            '把单缝宽度稍微调窄，同时把白屏向单缝移近',
            '保持单缝不变，改用强度更大的绿色激光'
          ],
          answerIndex: 1,
          hint: '想让中央亮带更宽，就要让<strong>衍射更明显</strong>！回忆衍射增强的两大法宝：缝宽 $a$ 该变小还是变大？波长 $\\lambda$ 该换更长的红光，还是更短的蓝光？',
          wrongDiagnostics: [
            '两个方向都反啦！调宽单缝且换短波长的蓝光，会让衍射大大减弱，中央亮带变窄！',
            '',
            '调窄单缝确实能增大衍射角，但把白屏移近（减小投射距离）反而会让屏上的亮带尺寸缩小哦！',
            '增大激光强度只会让亮纹看起来更亮（振幅更大），波长和缝宽都没变，中央亮带宽度不变！'
          ],
          explanation: '在单缝衍射中，减小狭缝宽度 $a$（调窄单缝）以及增大光波长 $\\lambda$（绿光 $\\approx 530\\text{ nm}$ 换为波长更长的红光 $\\approx 650\\text{ nm}$），都会使衍射效应更加显著（more pronounced diffraction），从而使白屏上的中央亮带展宽。',
          markingKeywords: ['narrower slit increases degree of diffraction', 'red light has longer wavelength than green light', 'wider central bright fringe']
        },
        {
          id: 'q-6-1-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Monochromatic light of frequency $5.0 \\times 10^{14}\\text{ Hz}$ travels from air into a liquid of refractive index $1.25$. Given $c = 3.0 \\times 10^8\\text{ m s}^{-1}$, what are the speed and wavelength of the light inside the liquid?',
          cnTranslation: '频率为 $5.0 \\times 10^{14}\\text{ Hz}$ 的单色光从空气射入折射率为 $1.25$ 的液体中。已知 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$，求光在该液体中的速率和波长。',
          options: [
            'Speed $= 2.4 \\times 10^8\\text{ m s}^{-1}$, wavelength $= 6.0 \\times 10^{-7}\\text{ m}$',
            'Speed $= 2.4 \\times 10^8\\text{ m s}^{-1}$, wavelength $= 4.8 \\times 10^{-7}\\text{ m}$',
            'Speed $= 3.0 \\times 10^8\\text{ m s}^{-1}$, wavelength $= 4.8 \\times 10^{-7}\\text{ m}$',
            'Speed $= 3.75 \\times 10^8\\text{ m s}^{-1}$, wavelength $= 7.5 \\times 10^{-7}\\text{ m}$'
          ],
          answerIndex: 1,
          hint: '先用 $v = \\frac{c}{n}$ 求出液体中的光速 $v$；再用液体里的波动方程 $v = f\\lambda$（频率 $f = 5.0 \\times 10^{14}\\text{ Hz}$ 不变！）求出液体里的波长 $\\lambda$！',
          wrongDiagnostics: [
            '速率算对了！但 $6.0 \\times 10^{-7}\\text{ m}$ 是它在空气中的波长 $\\lambda_0 = \\frac{c}{f}$，进液体后还要除以 $1.25$ 变成 $4.8 \\times 10^{-7}\\text{ m}$ 哦！',
            '',
            '波长算对了，但光在折射率 $1.25$ 的液体中速率一定减慢为 $v = \\frac{c}{1.25} = 2.4 \\times 10^8\\text{ m s}^{-1}$，不再是 $3.0 \\times 10^8\\text{ m s}^{-1}$！',
            '真空光速 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$ 是宇宙速度上限，进入液体只能除以 $n$ 减速，绝不可能乘以 $n$ 超光速哦！'
          ],
          explanation: '1. 液体中的光速：$v = \\frac{c}{n} = \\frac{3.0 \\times 10^8}{1.25} = 2.4 \\times 10^8\\text{ m s}^{-1}$。<br>2. 折射时频率 $f = 5.0 \\times 10^{14}\\text{ Hz}$ 保持不变，故液体中的波长：$\\lambda = \\frac{v}{f} = \\frac{2.4 \\times 10^8}{5.0 \\times 10^{14}} = 4.8 \\times 10^{-7}\\text{ m}$（即 $480\\text{ nm}$）。',
          markingKeywords: ['v = c / n = 2.4 × 10⁸ m s⁻¹', 'λ = v / f = 4.8 × 10⁻⁷ m']
        }
      ]
    },

    /* ========================================================================
       Section 6.2
       ======================================================================== */
    {
      id: '6.2',
      code: '6.2',
      titleCn: '杨氏双缝干涉实验',
      titleEn: 'Young\'s Double-Slit Experiment',
      dseTag: '必考核心 + 延展公式 C1 · Core & * Ext',
      realLifeHook: {
        title: '🔦 先从生活出发：拿两支一模一样的红色手电筒照墙，为什么看不到干涉条纹？',
        html: `
          <p>学完第 5 章水波干涉后，你可能会想：水里放两个振子就有腹线和节线，那我左手拿一支红光手电筒、右手拿另一支红光手电筒，一起照向白墙，墙上怎么没有出现一明一暗的条纹呢？</p>
          <p>秘密在于灯泡里成千上万个原子是“各自独立眨眼”的，两支手电筒发出的光波相位差每秒钟乱变上亿次（<strong>非相干波源 incoherent sources</strong>），亮暗图案每秒闪变上亿次，人眼只能看到一片均匀的亮光！1801 年，英国物理学家<strong>托马斯·杨（Thomas Young）</strong>想出了绝妙一招：<strong>把同一束光波前用两条极近的狭缝 $S_1, S_2$“一分为二”</strong>——既然出自同一道母波前，两束子波自然步调一致，人类历史上第一次亲眼看到了光的干涉条纹！</p>
        `
      },
      concepts: [
        {
          title: '1. 实验装置细节：普通光源 vs 激光器（Laser）',
          html: `
            <ul>
              <li><strong>若使用普通单色灯（如钠光灯 / 灯丝灯泡 + 滤色片）</strong>：双缝前面<strong>必须先放一条单缝 $S_0$</strong>！作用是先产生<strong>同一列柱面衍射波前</strong>到达 $S_1$ 和 $S_2$，从而保证 $S_1$ 与 $S_2$ 成为<strong>相干光源（coherent sources）</strong>。</li>
              <li><strong>若使用激光笔（Laser）</strong>：激光本身已经是高度相干的平行光束（coherent beam），<strong>可以直接照射双缝 $S_1, S_2$ 而无需单缝 $S_0$</strong>，而且光强集中，屏幕上条纹清晰明亮得多！</li>
              <li><strong>双缝本身为什么要很窄？</strong>为了让光穿过 $S_1$ 和 $S_2$ 时发生足够明显的<strong>衍射（diffraction）展宽</strong>，使两束光在屏幕上大面积重叠（overlap）才能发生干涉！</li>
            </ul>
          `
        },
        {
          title: '2. 双缝条纹间距公式 $\\Delta y = \\frac{\\lambda D}{a}$（HKEAA 公式表 C1 · * Extension）',
          html: `
            <div class="diagram-card">
              <svg viewBox="0 0 740 220" width="100%" aria-label="杨氏双缝实验几何示意图">
                <!-- Laser beam -->
                <line x1="25" y1="95" x2="135" y2="95" stroke="#dc2626" stroke-width="2.5"/>
                <line x1="25" y1="125" x2="135" y2="125" stroke="#dc2626" stroke-width="2.5"/>
                <polygon points="85,90 97,95 85,100" fill="#dc2626"/>
                <polygon points="85,120 97,125 85,130" fill="#dc2626"/>
                <text x="26" y="78" fill="#dc2626" font-size="12.5" font-weight="bold">相干激光 Laser (λ)</text>

                <!-- Double slit barrier -->
                <line x1="140" y1="25" x2="140" y2="85" stroke="#334155" stroke-width="6"/>
                <line x1="140" y1="97" x2="140" y2="123" stroke="#334155" stroke-width="6"/>
                <line x1="140" y1="135" x2="140" y2="195" stroke="#334155" stroke-width="6"/>
                <text x="112" y="94" fill="#1e293b" font-size="12" font-weight="bold">S₁</text>
                <text x="112" y="136" fill="#1e293b" font-size="12" font-weight="bold">S₂</text>
                <!-- Slit separation a -->
                <line x1="154" y1="91" x2="154" y2="129" stroke="#7c3aed" stroke-width="2"/>
                <text x="160" y="114" fill="#7c3aed" font-size="13" font-weight="bold">a (双缝间距)</text>

                <!-- Central axis & D -->
                <line x1="140" y1="110" x2="530" y2="110" stroke="#94a3b8" stroke-dasharray="6,4" stroke-width="1.5"/>
                <line x1="140" y1="188" x2="530" y2="188" stroke="#0284c7" stroke-width="2"/>
                <text x="275" y="206" fill="#0284c7" font-size="13" font-weight="bold">屏距 D（通常约 1–3 m，满足 D &gt;&gt; a）</text>

                <!-- Interfering paths to 1st bright fringe -->
                <line x1="140" y1="91" x2="530" y2="74" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4,3"/>
                <line x1="140" y1="129" x2="530" y2="74" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4,3"/>

                <!-- Screen & equally spaced fringes -->
                <line x1="530" y1="20" x2="530" y2="195" stroke="#334155" stroke-width="4"/>
                <g fill="#ef4444">
                  <rect x="536" y="32" width="22" height="12" rx="2"/>
                  <rect x="536" y="68" width="22" height="12" rx="2"/>
                  <rect x="536" y="104" width="22" height="12" rx="2"/>
                  <rect x="536" y="140" width="22" height="12" rx="2"/>
                  <rect x="536" y="176" width="22" height="12" rx="2"/>
                </g>
                <!-- Delta y bracket -->
                <line x1="570" y1="74" x2="570" y2="110" stroke="#0d9488" stroke-width="2.2"/>
                <line x1="564" y1="74" x2="576" y2="74" stroke="#0d9488" stroke-width="2"/>
                <line x1="564" y1="110" x2="576" y2="110" stroke="#0d9488" stroke-width="2"/>
                <text x="582" y="96" fill="#0d9488" font-size="13" font-weight="bold">Δy 条纹间距</text>
                <text x="582" y="116" fill="#475569" font-size="12">O 中央亮纹 (n=0, Δ=0)</text>
                <text x="582" y="77" fill="#475569" font-size="12">第 1 级亮纹 (n=1, Δ=λ)</text>
              </svg>
              <div class="diagram-caption">图 6.2：杨氏双缝干涉实验产生等间距（equally spaced）的明暗相间条纹。</div>
            </div>
            <ul>
              <li>屏幕上观察到<strong>等间距（equally spaced）</strong>、平行于狭缝的明暗相间条纹：
                <ul>
                  <li><strong>亮纹（Bright fringes）</strong>：相长干涉，波程差 $\\Delta = |S_2P - S_1P| = n\\lambda \\quad (n = 0, 1, 2, \\dots)$；</li>
                  <li><strong>暗纹（Dark fringes）</strong>：相消干涉，波程差 $\\Delta = \\left(n + \\frac{1}{2}\\right)\\lambda \\quad (n = 0, 1, 2, \\dots)$。</li>
                </ul>
              </li>
              <li><strong>数量级体感（做计算题自检神器！）</strong>：实验室典型值 $\\lambda \\approx 6 \\times 10^{-7}\\text{ m}$，$a \\approx 0.3\\text{ mm} = 3 \\times 10^{-4}\\text{ m}$，$D \\approx 2.0\\text{ m}$，算出来条纹间距 $\\Delta y = \\frac{6\\times 10^{-7} \\times 2.0}{3\\times 10^{-4}} = 4.0 \\times 10^{-3}\\text{ m} = 4.0\\text{ mm}$！</li>
              <li><strong>减小测量误差的必考技巧</strong>：因为单条 $\\Delta y$ 只有几毫米，直接量相邻两条误差太大；应<strong>用刻度尺量出跨过 $N$ 个条纹间隔（如第 1 条亮纹中心到第 11 条亮纹中心，共 $10\\Delta y$）的总宽度再除以 $10$</strong>！</li>
            </ul>
          `
        },
        {
          title: '3. 如果改用白光（White Light）做双缝实验会看到什么？',
          html: `
            <ul>
              <li><strong>正中央（$O$ 点，$\\Delta = 0$）</strong>：红橙黄绿蓝靛紫所有色光的波程差全都是 $0$，全部发生相长干涉叠在一起 $\\Rightarrow$ 形成一条<strong>纯白色的中央亮纹（white central bright fringe）</strong>！</li>
              <li><strong>中央亮纹两侧</strong>：出现<strong>带有彩色边缘的条纹（coloured fringes）</strong>！因为红光波长最长（$\\approx 700\\text{ nm}$）、紫光波长最短（$\\approx 400\\text{ nm}$），由 $\\Delta y = \\frac{\\lambda D}{a}$ 知 $\\Delta y_{\\text{red}} > \\Delta y_{\\text{violet}}$，所以每一级彩带都是<strong>内紫（inner edge violet）、外红（outer edge red）</strong>！再往外几级不同颜色互相重叠，很快模糊成一片白光。</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '杨氏双缝条纹间距公式（Fringe Separation in Double-Slit Interference）',
          badge: '📄 HKEAA 考卷公式表 C1 · * Extension',
          latex: '\\Delta y = \\frac{\\lambda D}{a}',
          vars: [
            '$\\Delta y$：相邻两条亮纹中心（或相邻两条暗纹中心）间距 fringe separation（$\\text{m}$）',
            '$\\lambda$：单色光的波长 wavelength（$\\text{m}$）',
            '$D$：双缝平面到观察屏的垂直距离 slit-to-screen distance（$\\text{m}$）',
            '$a$：两条狭缝中心之间的距离 slit separation（$\\text{m}$）'
          ],
          condition: '⚠️ 适用条件：$D \\gg a$（且 $a \\gg \\lambda$，即条纹张角极小 $\\theta$ 很小，满足小角度近似 $\\sin\\theta \\approx \\tan\\theta$）。切记：亮纹到相邻暗纹的距离是 $\\frac{1}{2}\\Delta y$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：参数一变，双缝条纹怎么跟着变？',
        intro: '抓住公式 $\\Delta y = \\frac{\\lambda D}{a}$ 和物理图像，连闯 3 关：',
        steps: [
          {
            q: '追问 1：保持双缝间距 $a$ 和屏距 $D$ 不变，把红色激光（$\\lambda \\approx 650\\text{ nm}$）换成蓝色激光（$\\lambda \\approx 450\\text{ nm}$），屏幕上的条纹会发生什么变化？',
            options: [
              '颜色变蓝，且条纹变密（间距 $\\Delta y$ 减小）',
              '颜色变蓝，且条纹变宽（间距 $\\Delta y$ 增大）'
            ],
            answerIndex: 0,
            a: '一击即中！蓝光波长 $\\lambda$ 比红光短，由 $\\Delta y = \\frac{\\lambda D}{a}$ 知 $\\Delta y \\propto \\lambda$，所以条纹间距变窄、排得更紧密！'
          },
          {
            q: '追问 2：如果保持双缝中心间距 $a$ 不变，仅仅把每一条缝本身稍微刮宽一点点（让更多光透过去），条纹间距 $\\Delta y$ 会改变吗？',
            options: [
              '$\\Delta y$ 保持不变（因为 $\\lambda, D, a$ 都没变！），但条纹整体变得更亮',
              '$\\Delta y$ 会变宽'
            ],
            answerIndex: 0,
            a: '超强防坑意识！公式里的 $a$ 是“两缝中心间距（slit separation）”，不是单条缝宽（slit width）！单缝略微调宽不改变 $\\Delta y$，只增加透光亮度（但若调得太宽导致衍射不足，重叠区变小条纹就会消失）。'
          },
          {
            q: '追问 3：更刺激的脑洞来了！如果把整套双缝与屏幕装置浸没进清水（折射率 $n = 1.33$）中，激光条纹间距 $\\Delta y$ 怎么变？',
            options: [
              '变窄为原来的 $\\frac{1}{1.33}$（因为水中光波长缩短为 $\\lambda\' = \\frac{\\lambda_0}{n}$！）',
              '完全不变，因为激光频率没变'
            ],
            answerIndex: 0,
            a: 'HKDSE 压轴级思维！干涉程差比的是<strong>在当前介质中的波长 $\\lambda\'$</strong>！水里波长变短为 $\\frac{\\lambda_0}{n}$，故 $\\Delta y\' = \\frac{\\lambda\' D}{a}$ 也同步缩小！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 5.4 节（水波双源干涉）',
          text: '双缝 $S_1, S_2$ 就是光学版的两个同相水波振子！屏幕上的亮纹就是腹线（antinodal lines）打在屏上的交点，暗纹就是节线（nodal lines）的交点！',
          targetSec: '5.4'
        },
        {
          dir: '⏭️ 后续升级 → 第 6.3 节（从 2 条缝升级到每毫米 500 条缝！）',
          text: '双缝条纹较模糊且间距只几毫米；下一节把狭缝数量暴增到上千条做成“衍射光栅”，亮纹瞬间变得像刀锋一样又细又亮！',
          targetSec: '6.3'
        }
      ],
      traps: [
        {
          wrong: '误区 1：计算时忘记换算单位——直接把 $\\lambda = 600\\text{ nm}$、$a = 0.2\\text{ mm}$、$D = 1.5\\text{ m}$ 原数相乘除！',
          right: '真相：必先全部换算成国际单位米（$\\text{m}$）！$\\text{nm} \\to \\times 10^{-9}\\text{ m}$，$\\text{mm} \\to \\times 10^{-3}\\text{ m}$，$\\text{cm} \\to \\times 10^{-2}\\text{ m}$！'
        },
        {
          wrong: '误区 2：题目给“中央亮纹到第 4 级暗纹的距离”，同学直接除以 $4$ 当作 $\\Delta y$。',
          right: '真相：仔细排座次！中央亮纹是 $0$，第 1 暗纹是 $0.5\\Delta y$，第 2 暗纹是 $1.5\\Delta y$，第 3 暗纹是 $2.5\\Delta y$，第 4 暗纹是 $3.5\\Delta y$（不是 $4\\Delta y$）！'
        }
      ],
      linkedLab: {
        labId: 'lab6',
        title: '实验 6：杨氏双缝实验模拟器（含白光模式）',
        prompt: '在实验 6「双缝模式」中自由调节波长 λ、双缝间距 a、屏距 D，还能一键切换「白光光源」观察中央白纹与内紫外红彩带！'
      },
      questions: [
        {
          id: 'q-6-2-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '在杨氏双缝干涉实验中，用波长 $\\lambda = 600\\text{ nm}$ 的橙红光垂直照射间距 $a = 0.25\\text{ mm}$ 的双缝，在距离双缝 $D = 1.5\\text{ m}$ 的白屏上形成干涉条纹。相邻两条亮纹中心之间的距离 $\\Delta y$ 是多少？',
          options: [
            '$\\Delta y = 3.6\\text{ mm}$',
            '$\\Delta y = 36\\text{ mm}$',
            '$\\Delta y = 1.8\\text{ mm}$',
            '$\\Delta y = 0.36\\text{ mm}$'
          ],
          answerIndex: 0,
          hint: '先把所有数据统一成标准单位米（$\\text{m}$）：$\\lambda = 600 \\times 10^{-9}\\text{ m} = 6.0 \\times 10^{-7}\\text{ m}$，$a = 0.25 \\times 10^{-3}\\text{ m} = 2.5 \\times 10^{-4}\\text{ m}$，$D = 1.5\\text{ m}$，再代入 $\\Delta y = \\frac{\\lambda D}{a}$！',
          wrongDiagnostics: [
            '',
            '数量级多乘了 10 倍哦！检查一下：$6.0 \\times 10^{-7} \\times 1.5 \\div (2.5 \\times 10^{-4}) = 3.6 \\times 10^{-3}\\text{ m} = 3.6\\text{ mm}$。',
            '$1.8\\text{ mm}$ 是“亮纹到相邻暗纹”的半间距（$\\frac{1}{2}\\Delta y$），题目问的是相邻两条亮纹间距 $\\Delta y$ 哦！',
            '小数点移错一位啦：$9.0 \\times 10^{-7} \\div (2.5 \\times 10^{-4}) = 3.6 \\times 10^{-3}\\text{ m} = 3.6\\text{ mm}$。'
          ],
          explanation: '统一国际单位代入公式 C1：<br>$$\\Delta y = \\frac{\\lambda D}{a} = \\frac{(600 \\times 10^{-9}\\text{ m})(1.5\\text{ m})}{0.25 \\times 10^{-3}\\text{ m}} = 3.6 \\times 10^{-3}\\text{ m} = 3.6\\text{ mm}$$',
          markingKeywords: ['Δy = λD / a', 'unit conversion: nm → 10⁻⁹ m, mm → 10⁻³ m', '3.6 mm']
        },
        {
          id: 'q-6-2-2',
          level: 2,
          levelLabel: '第二阶 · 测量与暗纹定位',
          stem: '某同学在双缝实验中量得屏幕上<strong>第 $1$ 级亮纹（first-order bright fringe）到同一侧第 $4$ 级暗纹（fourth-order dark fringe）</strong>之间的距离为 $7.5\\text{ mm}$。请问相邻亮纹间距 $\\Delta y$ 是多少？若把屏幕后移使屏距 $D$ 变为原来的 $2$ 倍，同时换用双缝间距为原来 $\\frac{1}{2}$ 的双缝片，新的 $\\Delta y\'$ 变为多少？',
          options: [
            '$\\Delta y = 2.5\\text{ mm}$；新 $\\Delta y\' = 10.0\\text{ mm}$',
            '$\\Delta y = 3.0\\text{ mm}$；新 $\\Delta y\' = 12.0\\text{ mm}$',
            '$\\Delta y = 3.0\\text{ mm}$；新 $\\Delta y\' = 3.0\\text{ mm}$',
            '$\\Delta y = 2.5\\text{ mm}$；新 $\\Delta y\' = 5.0\\text{ mm}$'
          ],
          answerIndex: 1,
          hint: '用坐标法最稳！把中央亮纹记作 $0$：第 $1$ 级亮纹在 $1.0\\Delta y$；暗纹依次在 $0.5\\Delta y$（第1暗）、$1.5\\Delta y$（第2暗）、$2.5\\Delta y$（第3暗）、$3.5\\Delta y$（第4暗）！算算 $3.5\\Delta y - 1.0\\Delta y$ 是几个 $\\Delta y$？',
          wrongDiagnostics: [
            '把第 4 级暗纹误当成在 $4.0\\Delta y$ 位置啦（那是第 4 级亮纹！）——第 4 级暗纹对应 $\\Delta = 3.5\\lambda$，位于 $3.5\\Delta y$，减掉 $1.0\\Delta y$ 只有 $2.5\\Delta y = 7.5\\text{ mm}$！',
            '',
            '$\\Delta y = 3.0\\text{ mm}$ 算得超棒！再看第二问：分子 $D$ 乘以 $2$，分母 $a$ 变成 $\\frac{1}{2}$（除以 $\\frac{1}{2}$ 又放大 2 倍！），合起来放大 $2 \\times 2 = 4$ 倍，不是抵消哦！',
            '两步都差一点点：间距差是 $3.5\\Delta y - 1.0\\Delta y = 2.5\\Delta y \\Rightarrow \\Delta y = 3.0\\text{ mm}$；且 $D$ 翻倍、$a$ 减半会使 $\\Delta y$ 变为 $4$ 倍。'
          ],
          explanation: '1. 以中央亮纹（$0$）为基准：第 $1$ 级亮纹位于 $y_1 = 1.0\\Delta y$；第 $4$ 级暗纹（对应程差 $3.5\\lambda$）位于 $y_{4\\text{d}} = 3.5\\Delta y$。两者距离为 $3.5\\Delta y - 1.0\\Delta y = 2.5\\Delta y = 7.5\\text{ mm} \\Rightarrow \\Delta y = 3.0\\text{ mm}$。<br>2. 由 $\\Delta y = \\frac{\\lambda D}{a}$，当 $D\' = 2D$ 且 $a\' = \\frac{1}{2}a$ 时，$\\Delta y\' = \\frac{\\lambda (2D)}{\\frac{1}{2}a} = 4\\Delta y = 12.0\\text{ mm}$。',
          markingKeywords: ['4th dark fringe at 3.5 Δy', '3.5 Δy - 1.0 Δy = 2.5 Δy = 7.5 mm → Δy = 3.0 mm', 'D doubled and a halved → Δy quadrupled']
        },
        {
          id: 'q-6-2-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'In a Young\'s double-slit experiment using white light, what is observed on the screen?<br>(1) A white bright fringe is formed at the centre of the pattern.<br>(2) For the first-order coloured fringe on either side, the violet edge is closer to the central fringe than the red edge.<br>(3) If one of the slits is covered with an opaque card, the equally spaced interference fringes disappear.',
          cnTranslation: '在使用白光进行的杨氏双缝实验中，屏幕上会观察到什么现象？(1) 图样正中央形成一条白色亮纹。(2) 在两侧的第 1 级彩色条纹中，紫色边缘比红色边缘更靠近中央亮纹。(3) 如果用不透光卡片遮住其中一条狭缝，等间距干涉条纹就会消失。',
          options: [
            '(1) and (2) only',
            '(1) and (3) only',
            '(2) and (3) only',
            '(1), (2) and (3)'
          ],
          answerIndex: 3,
          hint: '逐条核验：(1) 正中央波程差 $\\Delta = 0$，所有色光都加强，合起来是什么颜色？(2) 紫光和红光谁波长更短、$\\Delta y$ 更小？(3) 挡住一条缝只剩单缝，双源干涉还能发生吗？',
          wrongDiagnostics: [
            '别漏掉第 (3) 句！遮住其中一条缝后只剩下一束光穿过单缝，失去相干双波源叠加，等间距双缝干涉条纹必然消失（只剩宽大的单缝衍射光带）！',
            '第 (2) 句也是对的哦！紫光波长（$\\approx 400\\text{ nm}$）比红光（$\\approx 700\\text{ nm}$）短，由 $\\Delta y = \\frac{\\lambda D}{a}$ 知紫光偏离中央更近！',
            '第 (1) 句是对的！在中央 $\\Delta = 0$ 处，白光中所有波长分量均发生相长干涉，复合后呈现白色中央亮纹！',
            ''
          ],
          explanation: '三条陈述全部正确：<br>• <strong>(1) 正确</strong>：中央位置波程差 $\\Delta = 0$，白光中所有色光均同相相长叠加，合成白色亮纹。<br>• <strong>(2) 正确</strong>：由于 $\\lambda_{\\text{violet}} < \\lambda_{\\text{red}}$，根据 $\\Delta y = \\frac{\\lambda D}{a}$，紫光的第 1 级亮纹比红光更靠近中央（内紫外红）。<br>• <strong>(3) 正确</strong>：挡住一条缝后不再有两束光发生双缝干涉，等间距干涉条纹消失（屏幕上只剩下单缝衍射光带）。故选 <strong>(1), (2) and (3)</strong>。',
          markingKeywords: ['zero path difference for all colours → white central fringe', 'λ_violet < λ_red → violet closer to centre', 'covering one slit removes double-slit interference']
        }
      ]
    },

    /* ========================================================================
       Section 6.3
       ======================================================================== */
    {
      id: '6.3',
      code: '6.3',
      titleCn: '平面透射衍射光栅',
      titleEn: 'Plane Transmission Grating (Diffraction Grating)',
      dseTag: '延展高分王牌公式 C2 · * Extension',
      realLifeHook: {
        title: '💿 先从生活出发：为什么光盘（CD / DVD）背面在阳光下会闪出绚丽的彩虹？',
        html: `
          <p>拿起一张旧 CD 或 DVD 对着灯光轻轻晃动，表面并没有涂任何彩色颜料，却能折射/反射出比雨后彩虹还要鲜艳锐利的七彩光谱！因为光盘表面刻有一圈圈间距仅约 $1.6\\text{ }\\mu\\text{m}$（每毫米超过 $600$ 道！）的极密凹槽，相当于一片天然光栅！</p>
          <p>在物理实验室里，我们在透明玻璃或塑料片上每毫米平行刻上 $300 \\sim 600$ 条透光狭缝，就制成了测量光波长的终极精密仪器——<strong>平面透射衍射光栅（diffraction grating）</strong>！</p>
        `
      },
      concepts: [
        {
          title: '1. 光栅间距 $d$ 与光栅方程 $d\\sin\\theta = n\\lambda$（HKEAA 公式表 C2）',
          html: `
            <ul>
              <li><strong>第 1 步必算：由每毫米刻线数求光栅间距 $d$（grating spacing）</strong>：
                <ul>
                  <li>若光栅片上标有「$N\\text{ lines per mm}$」（例如 $400\\text{ lines per mm}$），千万先把 $1\\text{ mm}$ 化成 $10^{-3}\\text{ m}$！相邻两条狭缝的中心间距为：
                    $$d = \\frac{1\\text{ mm}}{400} = \\frac{10^{-3}\\text{ m}}{400} = 2.5 \\times 10^{-6}\\text{ m}$$
                  </li>
                </ul>
              </li>
              <li><strong>第 2 步核心方程</strong>：当平行单色光<strong>垂直照射（normal incidence）</strong>光栅时，相邻两缝发出的平行光束向 $\\theta$ 角方向衍射，其波程差恰好为 $\\Delta = d\\sin\\theta$。当 $\\Delta = n\\lambda$ 时，成千上万条狭缝的光束全部同相加强，形成极亮极细的第 $n$ 级主极大亮斑（$n$-th order maximum）：
                $$d\\sin\\theta = n\\lambda \\quad (n = 0, 1, 2, 3, \\dots)$$
              </li>
            </ul>
            <div class="diagram-card">
              <svg viewBox="0 0 740 225" width="100%" aria-label="衍射光栅实验几何与大角度屏幕投影图">
                <!-- Incident laser -->
                <line x1="30" y1="115" x2="155" y2="115" stroke="#16a34a" stroke-width="3.2"/>
                <polygon points="100,109 114,115 100,121" fill="#16a34a"/>
                <text x="28" y="98" fill="#15803d" font-size="12.5" font-weight="bold">垂直入射激光 (90°)</text>

                <!-- Grating -->
                <line x1="160" y1="35" x2="160" y2="195" stroke="#7c3aed" stroke-width="5" stroke-dasharray="6,4"/>
                <text x="122" y="212" fill="#6d28d9" font-size="12.5" font-weight="bold">光栅 Grating (d = 1/N)</text>

                <!-- Diffracted orders: n=0, n=1, n=2 -->
                <line x1="160" y1="115" x2="520" y2="115" stroke="#16a34a" stroke-width="2.5"/>
                <line x1="160" y1="115" x2="520" y2="62" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
                <line x1="160" y1="115" x2="520" y2="18" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="5,3"/>
                <line x1="160" y1="115" x2="520" y2="168" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
                <line x1="160" y1="115" x2="520" y2="212" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="5,3"/>

                <!-- Angle arc theta_1 -->
                <path d="M 235 115 A 75 75 0 0 0 234 104" fill="none" stroke="#ea580c" stroke-width="2.2"/>
                <text x="242" y="108" fill="#ea580c" font-size="13" font-weight="bold">θ₁</text>

                <!-- Flat screen -->
                <line x1="520" y1="10" x2="520" y2="220" stroke="#334155" stroke-width="4"/>
                <circle cx="520" cy="115" r="5.5" fill="#22c55e"/><text x="534" y="119" fill="#1e293b" font-size="12" font-weight="bold">n = 0 (中央亮斑)</text>
                <circle cx="520" cy="62" r="5" fill="#22c55e"/><text x="534" y="66" fill="#1e293b" font-size="12" font-weight="bold">n = 1 (tan θ₁ = y₁ / D)</text>
                <circle cx="520" cy="18" r="4.5" fill="#22c55e"/><text x="534" y="23" fill="#dc2626" font-size="12" font-weight="bold">n = 2 (注意：间距不等宽！)</text>
                <circle cx="520" cy="168" r="5" fill="#22c55e"/><text x="534" y="172" fill="#64748b" font-size="12">n = 1</text>
                <circle cx="520" cy="212" r="4.5" fill="#22c55e"/><text x="534" y="216" fill="#64748b" font-size="12">n = 2</text>

                <!-- Distance D and y1 -->
                <line x1="160" y1="142" x2="520" y2="142" stroke="#0284c7" stroke-width="1.5"/>
                <text x="325" y="158" fill="#0284c7" font-size="12.5" font-weight="bold">屏距 D</text>
              </svg>
              <div class="diagram-caption">图 6.3：衍射光栅张角很大，平屏上求亮斑位置必须先算 d sin θ = nλ，再用几何关系 tan θ = y / D！</div>
            </div>
          `
        },
        {
          title: '2. 最高级数 $n_{\\max}$、亮斑总数与“双缝 vs 光栅”必背满分对比',
          html: `
            <ul>
              <li><strong>如何求最高可见级数 $n_{\\max}$（Maximum order）与总亮斑数？</strong>
                <ul>
                  <li>因为衍射角不可能超过 $90^\\circ$，即 $\\sin\\theta < 1$（临界 $\\sin\\theta \\le 1$），代入光栅方程得：
                    $$n < \\frac{d}{\\lambda} \\quad \\Longrightarrow \\quad n_{\\max} = \\text{向下取整}\\left(\\frac{d}{\\lambda}\\right)$$
                  </li>
                  <li><em>细节保命</em>：若算出来 $\\frac{d}{\\lambda} = 3.7$，则最高级数 $n_{\\max} = 3$，总共有 <strong>$2n_{\\max} + 1 = 2(3) + 1 = 7$ 个亮斑</strong>（中央 $0$ 级 $1$ 个 $+$ 左右 $1, 2, 3$ 级各 $3$ 个）！若算出来恰好整除 $\\frac{d}{\\lambda} = 3.0$，此时第 $3$ 级衍射角 $\\theta_3 = 90^\\circ$（沿着光栅表面飞出去），<strong>如果问前方有限平屏上能看到几个亮斑，第 $3$ 级打不到屏上，屏上只能看到 $n = 0, 1, 2$ 共 $5$ 个亮斑！</strong></li>
                </ul>
              </li>
            </ul>
            <table class="compare-table">
              <thead>
                <tr>
                  <th>对比项目（DSE 高频问答！）</th>
                  <th>杨氏双缝（Double Slit）</th>
                  <th>衍射光栅（Diffraction Grating）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>条纹粗细与清晰度</strong></td>
                  <td>条纹较宽、明暗边界较模糊（broad &amp; blurred）</td>
                  <td>亮斑<strong>极细极锐利</strong>（very sharp &amp; narrow maxima），中间大片全黑</td>
                </tr>
                <tr>
                  <td><strong>条纹亮度</strong></td>
                  <td>只有 2 条缝透光，亮度较暗（dimmer）</td>
                  <td>成百上千条缝透光汇聚，亮斑<strong>非常明亮</strong>（much brighter）</td>
                </tr>
                <tr>
                  <td><strong>条纹间距与分布</strong></td>
                  <td>间距很小（毫米级）且<strong>均匀等距</strong>（$\\Delta y = \\frac{\\lambda D}{a}$）</td>
                  <td>张角很大（厘米到分米级）且平屏上<strong>不等距</strong>（越往外越宽，用 $d\\sin\\theta = n\\lambda$ 及 $\\tan\\theta = \\frac{y}{D}$）</td>
                </tr>
                <tr>
                  <td><strong>测量波长 $\\lambda$ 的准确度</strong></td>
                  <td>误差较大</td>
                  <td><strong>准确得多（much more accurate）</strong>：因为亮纹既锐利（易定位中心）又间距大（减小百分误差 smaller percentage error）！</td>
                </tr>
              </tbody>
            </table>
          `
        }
      ],
      formulae: [
        {
          name: '衍射光栅方程（Diffraction Grating Equation）',
          badge: '📄 HKEAA 考卷公式表 C2 · * Extension',
          latex: 'd\\sin\\theta = n\\lambda \\qquad \\left(\\text{with } d = \\frac{1}{N}, \\quad \\tan\\theta_n = \\frac{y_n}{D}\\right)',
          vars: [
            '$d$：光栅狭缝间距 grating spacing（$\\text{m}$，由每米刻线数 $N$ 的倒数求出）',
            '$\\theta$：第 $n$ 级亮斑的衍射角 diffraction angle（相对于中央法线）',
            '$n$：亮斑级数 order of maximum（$n = 0, 1, 2, \\dots$）',
            '$y_n, D$：平屏上第 $n$ 级亮斑到中央亮斑的距离与屏距（$\\text{m}$）'
          ],
          condition: '⚠️ 要求平行光垂直照射光栅（normal incidence）！且因为 $\\theta$ 通常较大，严禁对光栅乱用双缝近似公式 $\\Delta y = \\frac{\\lambda D}{d}$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：一步步算准光栅题，避开 3 大经典杀手坑',
        intro: '假设一束 $\\lambda = 600\\text{ nm}$ 的激光垂直照射标有「$500\\text{ lines per mm}$」的光栅，前方 $D = 1.0\\text{ m}$ 放一块大白屏：',
        steps: [
          {
            q: '追问 1（坑一：单位换算）：「$500\\text{ lines per mm}$」对应的相邻狭缝间距 $d$ 是多少米？',
            options: [
              '$d = \\frac{10^{-3}\\text{ m}}{500} = 2.0 \\times 10^{-6}\\text{ m}$',
              '$d = \\frac{1\\text{ m}}{500} = 2.0 \\times 10^{-3}\\text{ m}$'
            ],
            answerIndex: 0,
            a: '漂亮过关！记住 $1\\text{ mm}$ 是千分之一米（$10^{-3}\\text{ m}$），光栅间距 $d$ 通常都在微米级（$10^{-6}\\text{ m}$）！'
          },
          {
            q: '追问 2（坑二：禁止乱套双缝公式）：求第 1 级亮斑（$n=1$）在白屏上离中央亮斑的距离 $y_1$。已知 $\\sin\\theta_1 = \\frac{1 \\times 6.0\\times 10^{-7}}{2.0\\times 10^{-6}} = 0.30$（即 $\\theta_1 \\approx 17.46^\\circ$），下一步怎么算 $y_1$？',
            options: [
              '用几何正切 $y_1 = D\\tan 17.46^\\circ \\approx 0.314\\text{ m}$（不能直接用 $0.30 \\times 1.0 = 0.30\\text{ m}$！）',
              '直接代 $\\Delta y = \\frac{\\lambda D}{d} = 0.30\\text{ m}$'
            ],
            answerIndex: 0,
            a: '太稳了！$17.46^\\circ$ 已经不是小角度，$\\sin\\theta = 0.300$ 而 $\\tan\\theta = 0.314$，直接套 $\\frac{\\lambda D}{d}$ 在 DSE 计算题里会白白丢分！'
          },
          {
            q: '追问 3（坑三：数总亮斑个数）：令 $\\sin\\theta < 1$，算得 $\\frac{d}{\\lambda} = \\frac{2.0 \\times 10^{-6}}{6.0 \\times 10^{-7}} = 3.33$。最高可见级数 $n_{\\max}$ 是几？一共能看到几个亮斑？',
            options: [
              '$n_{\\max} = 3$，一共看到 $2 \\times 3 + 1 = 7$ 个亮斑',
              '$n_{\\max} = 3$，一共看到 $3$ 个或 $6$ 个亮斑'
            ],
            answerIndex: 0,
            a: '满分通关！向下取整得 $n_{\\max} = 3$，左右两侧各有 $1, 2, 3$ 级共 $6$ 个，再加上正中间那 $1$ 个零级亮斑（$n=0$），总共 $7$ 个！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 6.2 节（杨氏双缝实验）',
          text: '双缝和光栅本质都是多缝相干叠加（程差 $\\Delta = n\\lambda$）；区别在于光栅缝极密（$d$ 极小）使衍射角大增，缝极多使非主极大位置彻底相消变黑！',
          targetSec: '6.2'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 6.4 节（可见光波长测量与光谱分析）',
          text: '天文学家和物理学家正是用衍射光栅把白光拆成精确的连续光谱，测出红光约 700 nm、紫光约 400 nm！',
          targetSec: '6.4'
        }
      ],
      traps: [
        {
          wrong: '误区 1：在衍射光栅题里写下 $\\Delta y = \\frac{\\lambda D}{d}$ 去算第 1 级和第 2 级亮斑间距，还以为 $y_2 = 2y_1$！',
          right: '真相：大忌！光栅角度大，$\\sin\\theta_2 = 2\\sin\\theta_1$ 绝不代表 $\\tan\\theta_2 = 2\\tan\\theta_1$！实际上平屏上 $y_2 > 2y_1$（外侧间距越来越宽），必须老老实实分别求 $\\theta_1, \\theta_2$ 再算 $D\\tan\\theta$！'
        },
        {
          wrong: '误区 2：数亮斑总数时忘了加正中央的零级亮斑（$n = 0$），把 $2n_{\\max} + 1$ 算成了 $2n_{\\max}$！',
          right: '真相：只要垂直入射，正中央 $\\theta = 0^\\circ$ 必有 1 个零级亮斑，正常情况下亮斑总数永远是奇数 $2n_{\\max} + 1$！'
        }
      ],
      linkedLab: {
        labId: 'lab6',
        title: '实验 6：切换到「衍射光栅模式」对比双缝与白光光谱',
        prompt: '在实验 6 中把模式从双缝切到光栅（调节每毫米刻线数 200–600 lines/mm），亲眼观察亮斑变锐利、间距不等宽以及总级数截断！'
      },
      questions: [
        {
          id: 'q-6-3-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '与杨氏双缝（double slit）相比，用平面透射衍射光栅（diffraction grating）测量同一束单色激光的波长时，屏幕上的亮纹有什么显著特点，使得测量更加准确？',
          options: [
            '亮纹更宽、更柔和，且严格等间距分布',
            '亮纹更细锐（sharper）、更明亮（brighter），且彼此间距大得多（more widely spaced）',
            '只会出现中央一条亮纹，不会出现高级数条纹',
            '不需要测量任何距离或角度就能直接读出波长'
          ],
          answerIndex: 1,
          hint: '回想对比表里的三大优势：几百条缝汇聚光能使亮度怎样？极密的刻线 $d$ 使衍射张角怎样？多光束干涉使亮纹粗细怎样？',
          wrongDiagnostics: [
            '这是双缝条纹的特点（宽而模糊、近似等间距），不是衍射光栅的特点哦！',
            '',
            '光栅会在中央两侧产生对称的第 1、2、3…级亮斑，并非只有中央一条！',
            '使用光栅仍需测量衍射角 $\\theta$（或屏距 $D$ 与亮斑位置 $y$）才能由 $d\\sin\\theta = n\\lambda$ 算出波长。'
          ],
          explanation: '衍射光栅之所以比双缝测波长准确得多，是因为光栅产生的亮斑<strong>更细更锐利（sharper，便于准确定位中心）</strong>、<strong>更明亮（brighter）</strong>且<strong>张角与间距大得多（more widely spaced，大大减小距离或角度测量的百分误差）</strong>。',
          markingKeywords: ['sharper and brighter maxima', 'more widely spaced', 'smaller percentage error in measurement']
        },
        {
          id: 'q-6-3-2',
          level: 2,
          levelLabel: '第二阶 · 光栅方程与级数计算',
          stem: '一束波长 $\\lambda = 550\\text{ nm}$ 的绿光垂直照射一块刻有 <strong>$400\\text{ lines per mm}$</strong> 的衍射光栅。求<strong>第 $2$ 级亮纹的衍射角 $\\theta_2$</strong>，以及透过光栅总共能产生<strong>多少条主极大亮纹</strong>？',
          options: [
            '$\\theta_2 \\approx 26.1^\\circ$，共 $9$ 条亮纹',
            '$\\theta_2 \\approx 26.1^\\circ$，共 $8$ 条亮纹',
            '$\\theta_2 \\approx 12.7^\\circ$，共 $9$ 条亮纹',
            '$\\theta_2 \\approx 26.1^\\circ$，共 $4$ 条亮纹'
          ],
          answerIndex: 0,
          hint: '分三步稳算：① $d = \\frac{10^{-3}}{400} = 2.5 \\times 10^{-6}\\text{ m}$；② 代入 $\\sin\\theta_2 = \\frac{2 \\times 5.5 \\times 10^{-7}}{2.5 \\times 10^{-6}} = 0.44$ 求 $\\theta_2$；③ 算 $\\frac{d}{\\lambda} = \\frac{2500\\text{ nm}}{550\\text{ nm}} \\approx 4.55 \\Rightarrow n_{\\max} = 4$，总条数别忘了 $2n_{\\max} + 1$！',
          wrongDiagnostics: [
            '',
            '衍射角和最高级数 $n_{\\max} = 4$ 都算对啦！但数总条数时漏掉了正中间那 1 条零级亮纹（$n=0$）：左右各 4 条 + 中央 1 条 $= 9$ 条！',
            '总条数 $9$ 条数对了！但 $12.7^\\circ$（$\\sin\\theta = 0.22$）是第 $1$ 级亮纹的角度，题目问的是第 $2$ 级亮纹 $\\theta_2$（$\\sin\\theta_2 = 0.44$）哦！',
            '$4$ 只是单侧最高级数 $n_{\\max} = 4$，光栅两侧对称各有 $4$ 条再加上中央零级 $1$ 条，总共是 $2(4) + 1 = 9$ 条！'
          ],
          explanation: '1. 求光栅间距：$d = \\frac{10^{-3}\\text{ m}}{400} = 2.5 \\times 10^{-6}\\text{ m}$（即 $2500\\text{ nm}$）。<br>2. 求第 2 级衍射角：$\\sin\\theta_2 = \\frac{2\\lambda}{d} = \\frac{2 \\times 550\\text{ nm}}{2500\\text{ nm}} = 0.44 \\Rightarrow \\theta_2 = \\arcsin(0.44) \\approx 26.1^\\circ$。<br>3. 求亮纹总数：由 $\\sin\\theta < 1$ 得 $n < \\frac{d}{\\lambda} = \\frac{2500}{550} \\approx 4.55$，故最高级数 $n_{\\max} = 4$。总亮纹数 $= 2n_{\\max} + 1 = 2(4) + 1 = 9$ 条。',
          markingKeywords: ['d = 10⁻³ / 400 = 2.5 × 10⁻⁶ m', 'sin θ₂ = 2λ / d = 0.44 → θ₂ = 26.1°', 'n_max = 4 → total maxima = 2(4) + 1 = 9']
        },
        {
          id: 'q-6-3-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'A laser beam of wavelength $630\\text{ nm}$ strikes a diffraction grating of $500\\text{ lines per mm}$ normally. A flat screen is placed parallel to the grating at a distance of $1.20\\text{ m}$ away. What is the distance between the central bright spot and the <strong>first-order</strong> bright spot on the screen?',
          cnTranslation: '波长为 $630\\text{ nm}$ 的激光束垂直射向每毫米有 $500$ 条刻线的衍射光栅。一块平屏平行于光栅放置在 $1.20\\text{ m}$ 远处。求屏幕上中央亮斑与<strong>第 1 级</strong>亮斑之间的距离。',
          options: [
            '$0.378\\text{ m}$',
            '$0.398\\text{ m}$',
            '$0.796\\text{ m}$',
            '$0.359\\text{ m}$'
          ],
          answerIndex: 1,
          hint: '警报拉响！选项 A（$0.378\\text{ m}$）就是专门抓乱用双缝公式 $\\frac{\\lambda D}{d}$ 的大陷阱！请严格分两步：① 先算 $\\sin\\theta_1 = \\frac{\\lambda}{d}$ 求出角度 $\\theta_1$；② 再算 $y_1 = D\\tan\\theta_1$（或用 $\\tan\\theta_1 = \\frac{\\sin\\theta_1}{\\sqrt{1-\\sin^2\\theta_1}}$）！',
          wrongDiagnostics: [
            '抓个正着！你直接用了 $D\\sin\\theta_1 = \\frac{\\lambda D}{d} = 1.20 \\times 0.315 = 0.378\\text{ m}$！但 $\\theta_1 \\approx 18.36^\\circ$ 角度很大，平屏距离必须用 $y_1 = D\\tan\\theta_1 \\approx 0.398\\text{ m}$！',
            '',
            '$0.796\\text{ m}$ 是左右两个第 1 级亮斑之间的距离（$2y_1$），题目问的是“中央亮斑到第 1 级亮斑”的距离 $y_1$ 哦！',
            '不小心乘了 $\\cos\\theta_1$ 而不是除以 $\\cos\\theta_1$！$\\tan\\theta_1 = \\frac{\\sin\\theta_1}{\\cos\\theta_1} = \\frac{0.315}{\\sqrt{1 - 0.315^2}} \\approx 0.3319$，乘以 $1.20\\text{ m}$ 得 $0.398\\text{ m}$。'
          ],
          explanation: '这道题完美展示了 HKDSE 光栅计算的黄金铁律：<br>1. 求光栅间距：$d = \\frac{10^{-3}\\text{ m}}{500} = 2.0 \\times 10^{-6}\\text{ m}$。<br>2. 由 $d\\sin\\theta_1 = (1)\\lambda$ 求衍射角：$\\sin\\theta_1 = \\frac{630 \\times 10^{-9}}{2.0 \\times 10^{-6}} = 0.315 \\Rightarrow \\theta_1 \\approx 18.36^\\circ$。<br>3. 在直角三角形中求屏上位置：$y_1 = D\\tan\\theta_1 = 1.20 \\times \\tan 18.36^\\circ \\approx 0.398\\text{ m}$。（若误套 $\\frac{\\lambda D}{d}$ 会错算成 $0.378\\text{ m}$！）',
          markingKeywords: ['d = 2.0 × 10⁻⁶ m', 'sin θ₁ = λ / d = 0.315 → θ₁ = 18.36°', 'y₁ = D tan θ₁ = 0.398 m']
        }
      ]
    },

    /* ========================================================================
       Section 6.4
       ======================================================================== */
    {
      id: '6.4',
      code: '6.4',
      titleCn: '电磁波谱：七大家族特性、应用与危害',
      titleEn: 'The Electromagnetic Spectrum',
      dseTag: '必背常识与计算 · Core',
      realLifeHook: {
        title: '📱 先从生活出发：手机信号、微波炉热牛奶、空调遥控器、医院拍 X 光片——它们居然是同一种波？',
        html: `
          <p>如果把人眼比作一台收音机，这台收音机其实极其“偏食”——它只能接收波长在 $400\\text{ nm}$ 到 $700\\text{ nm}$ 之间窄窄一小段信号（这就是<strong>可见光 visible light</strong>）。</p>
          <p>可是在这段窄窗之外，波长拉长到几厘米就是加热食物的<strong>微波</strong>，拉长到几百米就是广播电台的<strong>无线电波</strong>；反过来把波长压缩到几十纳米就是能验钞杀菌的<strong>紫外线</strong>，再压缩到原子尺度就是透视骨骼的 <strong>X 射线</strong>和杀灭癌细胞的<strong>伽马射线</strong>！它们七兄弟在真空里跑得一样快（都是 $3.0 \\times 10^8\\text{ m s}^{-1}$），合称<strong>电磁波谱（electromagnetic spectrum）</strong>！</p>
        `
      },
      concepts: [
        {
          title: '1. 所有电磁波（EM Waves）的六大共同本性（必背！）',
          html: `
            <ul>
              <li><strong>100% 都是横波（transverse waves）</strong>（由互相垂直振动的电场与磁场组成）；</li>
              <li><strong>不需要任何物质介质</strong>，均可在<strong>真空（vacuum）</strong>中传播；</li>
              <li>在真空（及近似在空气）中具有<strong>完全相同的波速</strong>：$c = 3.0 \\times 10^8\\text{ m s}^{-1}$（进入玻璃、水等介质时减速）；</li>
              <li>全部服从波动方程 <strong>$c = f\\lambda$</strong>（波长 $\\lambda$ 越短，频率 $f$ 越高，光子能量与穿透/电离能力也越强）；</li>
              <li>都能发生<strong>反射、折射、衍射与干涉</strong>，且都能传递能量；</li>
              <li>不带电荷（在电场或磁场中不会像电子束那样发生偏转）。</li>
            </ul>
          `
        },
        {
          title: '2. 电磁波谱七大家族全景图与 HKDSE 考点总表',
          html: `
            <div class="diagram-card">
              <svg viewBox="0 0 760 175" width="100%" aria-label="电磁波谱七大波段顺序图">
                <!-- Arrow header: wavelength decreases, frequency increases -->
                <line x1="35" y1="26" x2="725" y2="26" stroke="#475569" stroke-width="2"/>
                <polygon points="725,21 737,26 725,31" fill="#475569"/>
                <text x="40" y="18" fill="#0f766e" font-size="12" font-weight="bold">波长 λ 由长到短（10³ m → 10⁻¹² m）</text>
                <text x="485" y="18" fill="#7c3aed" font-size="12" font-weight="bold">频率 f 由低到高 · 电离危害增强 →</text>

                <!-- 7 Spectrum Blocks -->
                <rect x="30" y="42" width="102" height="58" rx="6" fill="#0284c7"/>
                <text x="44" y="67" fill="#fff" font-size="12.5" font-weight="bold">无线电波</text>
                <text x="40" y="85" fill="#e0f2fe" font-size="11">Radio waves</text>

                <rect x="136" y="42" width="96" height="58" rx="6" fill="#0d9488"/>
                <text x="166" y="67" fill="#fff" font-size="12.5" font-weight="bold">微波</text>
                <text x="148" y="85" fill="#ccfbf1" font-size="11">Microwaves</text>

                <rect x="236" y="42" width="96" height="58" rx="6" fill="#dc2626"/>
                <text x="260" y="67" fill="#fff" font-size="12.5" font-weight="bold">红外辐射</text>
                <text x="252" y="85" fill="#fee2e2" font-size="11">Infrared (IR)</text>

                <defs>
                  <linearGradient id="visGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ef4444"/>
                    <stop offset="25%" stop-color="#f59e0b"/>
                    <stop offset="50%" stop-color="#22c55e"/>
                    <stop offset="75%" stop-color="#3b82f6"/>
                    <stop offset="100%" stop-color="#8b5cf6"/>
                  </linearGradient>
                </defs>
                <rect x="336" y="42" width="96" height="58" rx="6" fill="url(#visGrad)"/>
                <text x="364" y="67" fill="#fff" font-size="12.5" font-weight="bold">可见光</text>
                <text x="352" y="85" fill="#fff" font-size="11" font-weight="bold">Visible light</text>

                <rect x="436" y="42" width="96" height="58" rx="6" fill="#7c3aed"/>
                <text x="460" y="67" fill="#fff" font-size="12.5" font-weight="bold">紫外辐射</text>
                <text x="444" y="85" fill="#ede9fe" font-size="11">Ultraviolet (UV)</text>

                <rect x="536" y="42" width="92" height="58" rx="6" fill="#4f46e5"/>
                <text x="560" y="67" fill="#fff" font-size="12.5" font-weight="bold">X 射线</text>
                <text x="562" y="85" fill="#e0e7ff" font-size="11">X-rays</text>

                <rect x="632" y="42" width="98" height="58" rx="6" fill="#312e81"/>
                <text x="654" y="67" fill="#fff" font-size="12.5" font-weight="bold">伽马射线</text>
                <text x="646" y="85" fill="#c7d2fe" font-size="11">Gamma (γ) rays</text>

                <!-- Zoomed visible light callout -->
                <line x1="336" y1="102" x2="210" y2="128" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
                <line x1="432" y1="102" x2="555" y2="128" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3"/>
                <rect x="210" y="128" width="345" height="28" rx="6" fill="url(#visGrad)"/>
                <text x="220" y="147" fill="#fff" font-size="12" font-weight="bold">红 Red (~700 nm)  →  橙  →  黄  →  绿  →  蓝  →  紫 Violet (~400 nm)</text>
              </svg>
              <div class="diagram-caption">图 6.4：电磁波谱完整顺序——紧盯可见光左邻“红外（红光外侧）”、右邻“紫外（紫光外侧）”，顺序永远不会背反！</div>
            </div>

            <table class="compare-table">
              <thead>
                <tr>
                  <th>波段名称</th>
                  <th>典型波长数量级</th>
                  <th>发射源 / 探测器（Detector）</th>
                  <th>HKDSE 必考生活应用与注意事项</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>无线电波<br>Radio waves</strong></td>
                  <td>$0.1\\text{ m} \\sim 10^4\\text{ m}$</td>
                  <td>振荡电路与天线发射；金属接收天线（aerial）探测</td>
                  <td>电视与电台广播（AM 长波易绕过山丘衍射；FM/TV 短波较走直线）、对讲机、RFID</td>
                </tr>
                <tr>
                  <td><strong>微波<br>Microwaves</strong></td>
                  <td>$10^{-3}\\text{ m} \\sim 0.1\\text{ m}$<br>（毫米至厘米级）</td>
                  <td>磁控管 / 微波发射器；微波接收探头（二极管天线）</td>
                  <td><strong>卫星通讯（能穿透电离层，且波长短衍射小可聚成窄束）</strong>、雷达测距（Radar）、Wi-Fi、手机通讯、微波炉加热含水食物</td>
                </tr>
                <tr>
                  <td><strong>红外辐射<br>Infrared (IR)</strong></td>
                  <td>$7\\times 10^{-7}\\text{ m} \\sim 10^{-3}\\text{ m}$</td>
                  <td><strong>一切有温度的物体</strong>均发射（温度越高越强）；涂黑温度计、热电堆（thermopile）、红外传感器探测</td>
                  <td>电视遥控器、<strong>热成像仪 / 额温枪（thermal imaging / fever screening）</strong>、自动门感应、红外夜视、烤箱烘烤（热效应显著）</td>
                </tr>
                <tr>
                  <td><strong>可见光<br>Visible light</strong></td>
                  <td><strong>$400\\text{ nm}$（紫）$\\sim 700\\text{ nm}$（红）</strong></td>
                  <td>太阳、白炽灯、LED、激光；人眼视网膜、照相底片、光敏电阻 / CCD</td>
                  <td>人类视觉、摄影、植物光合作用、<strong>光纤高速通讯（optical fibres）</strong>、内窥镜</td>
                </tr>
                <tr>
                  <td><strong>紫外辐射<br>Ultraviolet (UV)</strong></td>
                  <td>$10^{-8}\\text{ m} \\sim 4\\times 10^{-7}\\text{ m}$</td>
                  <td>太阳、水银灯（mercury lamp）、极高温物体；<strong>荧光物质（fluorescent materials）</strong>、紫外感光片</td>
                  <td><strong>激发荧光防伪验钞（checking banknotes）</strong>、饮用水与手术室杀菌消毒、促进皮肤合成维生素 D；<em>过量导致晒伤、白内障与皮肤癌</em></td>
                </tr>
                <tr>
                  <td><strong>X 射线<br>X-rays</strong></td>
                  <td>$10^{-11}\\text{ m} \\sim 10^{-8}\\text{ m}$</td>
                  <td>高速电子轰击重金属靶产生；X 光底片 / 数字探测器</td>
                  <td><strong>医学骨骼透视拍片（穿过肌肉但被高密度骨骼吸收）</strong>、机场行李安检、工业焊缝探伤；<em>属电离辐射（ionising radiation），孕妇忌照</em></td>
                </tr>
                <tr>
                  <td><strong>伽马射线<br>Gamma ($\\gamma$) rays</strong></td>
                  <td>$&lt; 10^{-11}\\text{ m}$（最短！）</td>
                  <td>放射性原子核衰变产生；盖革—弥勒计数器（G-M counter）</td>
                  <td><strong>放射治疗杀灭癌细胞（radiotherapy）</strong>、医疗器械密封灭菌、工业测厚；<em>穿透力与电离致突变危害最强，需厚铅板屏蔽</em></td>
                </tr>
              </tbody>
            </table>
          `
        }
      ],
      formulae: [
        {
          name: '真空/空气中电磁波通用方程（EM Wave Speed Equation）',
          badge: '全波段通用核心公式',
          latex: 'c = f\\lambda \\qquad \\left(c = 3.0 \\times 10^8\\text{ m s}^{-1}\\right)',
          vars: [
            '$c$：真空（及空气）中的电磁波速 speed of light in vacuum（$3.0 \\times 10^8\\text{ m s}^{-1}$）',
            '$f$：电磁波频率 frequency（$\\text{Hz}$）',
            '$\\lambda$：电磁波在真空/空气中的波长 wavelength（$\\text{m}$）'
          ],
          condition: '⚠️ 七大电磁波在真空/空气中 $c$ 完全相等！注意雷达（Radar）测距与回声一样是往返路程：$2d = ct$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：永远不背反电磁波谱顺序的“夹心定位法”',
        intro: '考试紧张时怕把红外、紫外、微波、X 射线的波长大小排反？用这 3 步秒锁顺序：',
        steps: [
          {
            q: '追问 1：先锁定正中间的可见光！红光（Red）和紫光（Violet）谁的波长更长？（回想上一节双缝/光栅白光光谱，谁偏折得更远？）',
            options: [
              '红光波长更长（约 $700\\text{ nm}$），紫光波长更短（约 $400\\text{ nm}$）',
              '紫光波长更长，红光波长更短'
            ],
            answerIndex: 0,
            a: '稳稳锁住锚点！红光 $700\\text{ nm} >$ 紫光 $400\\text{ nm}$！'
          },
          {
            q: '追问 2：看名字就懂位置：“红外线（Infra-red）”紧挨在红光长波一侧，“紫外线（Ultra-violet）”紧挨在紫光短波一侧。那么红外线、可见光、紫外线按波长从长到短怎么排？',
            options: [
              '红外线（IR） $\\to$ 可见光 $\\to$ 紫外线（UV）',
              '紫外线（UV） $\\to$ 可见光 $\\to$ 红外线（IR）'
            ],
            answerIndex: 0,
            a: '绝不会搞反！长波那头再往外延伸就是微波、无线电波；短波紫外那头再往高能延伸就是 X 射线、伽马射线！'
          },
          {
            q: '追问 3：为什么跟高空通信卫星联络要用“微波（microwaves）”，而不选波长几百米的无线电波？',
            options: [
              '微波能穿透电离层，且波长短、通过碟形天线时衍射极小，能聚成窄光束直指卫星而不散失能量',
              '因为微波在太空中比无线电波跑得更快'
            ],
            answerIndex: 0,
            a: 'HKDSE 满分标准答案！一举结合了电离层穿透性与第 5.3 节“波长越短衍射越弱、方向性越强”！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.1 节 & 第 5.3 节（横波与衍射应用）',
          text: '为什么长波 AM 电台能绕过山头（λ 大衍射强），而卫星天线发射微波能聚成窄束（λ 小衍射弱）？第 5.3 节的衍射规律统治整个电磁波谱！',
          targetSec: '5.3'
        },
        {
          dir: '⏭️ 后续对比 → 第 7.1 & 7.3 节（千万别把超声波当电磁波！）',
          text: 'DSE 选择题最爱混进一个“卧底”：超声波（ultrasound）和声波是机械纵波，绝不属于电磁波谱，真空走不了，空气速率只有约 340 m s⁻¹！',
          targetSec: '7.3'
        }
      ],
      traps: [
        {
          wrong: '误区 1：以为伽马射线能量最高，所以在真空中跑得比无线电波更快！',
          right: '真相：错！所有电磁波在真空中的速率一模一样，全都是 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$！伽马射线频率最高、波长最短，但速率不比无线电波快一分一毫！'
        },
        {
          wrong: '误区 2：把“超声波（ultrasound）”或“阴极射线 / $\\alpha, \\beta$ 射线”归入电磁波谱。',
          right: '真相：超声波是高频机械声波；阴极射线和 $\\beta$ 射线是高速电子流，$\\alpha$ 射线是氦核流；只有 $\\gamma$（伽马）射线和 X 射线才是电磁波！'
        }
      ],
      questions: [
        {
          id: 'q-6-4-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '将下列四种电磁波按在真空中的<strong>波长由短到长（increasing wavelength）</strong>排列，正确的顺序是？',
          options: [
            'X 射线（X-rays） $\\to$ 紫外辐射（UV） $\\to$ 红外辐射（IR） $\\to$ 微波（microwaves）',
            '微波（microwaves） $\\to$ 红外辐射（IR） $\\to$ 紫外辐射（UV） $\\to$ X 射线（X-rays）',
            '紫外辐射（UV） $\\to$ X 射线（X-rays） $\\to$ 微波（microwaves） $\\to$ 红外辐射（IR）',
            'X 射线（X-rays） $\\to$ 红外辐射（IR） $\\to$ 紫外辐射（UV） $\\to$ 微波（microwaves）'
          ],
          answerIndex: 0,
          hint: '看准题目要的是“由短到长（increasing wavelength）”！X 射线在最短波高能端，往长波走依次经过紫光外侧的 UV、可见光、红光外侧的 IR，最后到厘米级的微波！',
          wrongDiagnostics: [
            '',
            '顺序背得很熟，但审题看反啦！你排的是“由长到短（decreasing wavelength）”，题目问的是由短到长哦！',
            'X 射线的波长比紫外辐射更短，而且红外辐射夹在可见光与微波之间，比微波波长更短哦！',
            '紫外（UV）紧挨紫光（$400\\text{ nm}$ 外侧），红外（IR）紧挨红光（$700\\text{ nm}$ 外侧），所以 UV 的波长比 IR 短得多！'
          ],
          explanation: '电磁波谱按波长由短到长依次为：伽马射线 $\\to$ <strong>X 射线</strong> $\\to$ <strong>紫外辐射（UV）</strong> $\\to$ 可见光 $\\to$ <strong>红外辐射（IR）</strong> $\\to$ <strong>微波</strong> $\\to$ 无线电波。',
          markingKeywords: ['X-rays < ultraviolet < visible < infrared < microwaves < radio waves']
        },
        {
          id: 'q-6-4-2',
          level: 2,
          levelLabel: '第二阶 · 雷达脉冲测距计算',
          stem: '机场航空管制雷达（radar）向一架飞机发射频率为 $10\\text{ GHz}$（$1\\text{ GHz} = 10^9\\text{ Hz}$）的微波脉冲，经过 $0.40\\text{ ms}$（$1\\text{ ms} = 10^{-3}\\text{ s}$）后接收到飞机反射回来的脉冲信号。求该微波的波长 $\\lambda$ 以及飞机与雷达站的距离 $d$。',
          options: [
            '$\\lambda = 0.03\\text{ m}$，$d = 120\\text{ km}$',
            '$\\lambda = 0.03\\text{ m}$，$d = 60\\text{ km}$',
            '$\\lambda = 3.0\\text{ m}$，$d = 60\\text{ km}$',
            '$\\lambda = 0.03\\text{ m}$，$d = 6.0\\text{ km}$'
          ],
          answerIndex: 1,
          hint: '小心往返路程陷阱！微波去一趟再反射回来一共走了 $2d = ct$，算单程距离 $d$ 一定要除以 $2$！同时核对 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$。',
          wrongDiagnostics: [
            '波长 $0.03\\text{ m}$ 算得超准！但 $120\\text{ km}$ 是微波“一去一回”的总路程 $2d$，飞机单程距离要除以 $2$ 得 $60\\text{ km}$！',
            '',
            '距离 $60\\text{ km}$ 算对了！再算一次波长：$\\lambda = \\frac{3.0 \\times 10^8}{10 \\times 10^9} = \\frac{3.0 \\times 10^8}{1.0 \\times 10^{10}} = 0.03\\text{ m}$（$3\\text{ cm}$），不是 $3.0\\text{ m}$ 哦。',
            '指数少算了一位：$3.0 \\times 10^8 \\times 0.40 \\times 10^{-3} \\div 2 = 6.0 \\times 10^4\\text{ m} = 60\\text{ km}$！'
          ],
          explanation: '1. 求微波波长：$\\lambda = \\frac{c}{f} = \\frac{3.0 \\times 10^8}{10 \\times 10^9} = 0.03\\text{ m}$（恰属厘米级微波）。<br>2. 雷达测距属于反射往返过程：$2d = ct \\Rightarrow d = \\frac{ct}{2} = \\frac{(3.0 \\times 10^8)(0.40 \\times 10^{-3})}{2} = 6.0 \\times 10^4\\text{ m} = 60\\text{ km}$。',
          markingKeywords: ['λ = c / f = 0.03 m', 'round-trip 2d = ct → d = 60 km']
        },
        {
          id: 'q-6-4-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Which of the following comparisons between infrared radiation, ultraviolet radiation and ultrasound travelling in air is correct?',
          cnTranslation: '关于在空气中传播的红外辐射、紫外辐射与超声波，下列哪项比较是正确的？',
          options: [
            'All three travel at approximately $3.0 \\times 10^8\\text{ m s}^{-1}$ in air.',
            'Infrared radiation and ultraviolet radiation are transverse waves, while ultrasound is a longitudinal wave.',
            'Ultraviolet radiation has a longer wavelength than infrared radiation.',
            'Ultrasound can travel through a vacuum, whereas infrared radiation cannot.'
          ],
          answerIndex: 1,
          hint: '抓出那个混进电磁波家族里的“卧底”——ultrasound（超声波）！超声波本质是高频声波，它是横波还是纵波？波速是多少？能不能过真空？',
          wrongDiagnostics: [
            '红外和紫外在空气中确实约 $3.0 \\times 10^8\\text{ m s}^{-1}$，但超声波是声波，在空气中速率只有约 $340\\text{ m s}^{-1}$！',
            '',
            '反啦！紫外辐射（$< 400\\text{ nm}$）的波长比红外辐射（$> 700\\text{ nm}$）短得多！',
            '完全颠倒啦！红外辐射是电磁波，能穿过太空真空（太阳热量就是靠红外辐射传到地球的！）；超声波是机械波，真空中绝对传不了！'
          ],
          explanation: '• 红外辐射（IR）与紫外辐射（UV）均属于<strong>电磁波（electromagnetic waves）</strong>，都是<strong>横波（transverse waves）</strong>，可在真空中以 $3.0 \\times 10^8\\text{ m s}^{-1}$ 传播，且 $\\lambda_{\\text{UV}} < \\lambda_{\\text{IR}}$。<br>• 超声波（ultrasound）只是频率高于 $20\\text{ kHz}$ 的声波，属于需要介质的<strong>机械纵波（longitudinal mechanical wave）</strong>，在空气中波速仅约 $340\\text{ m s}^{-1}$。故选 B。',
          markingKeywords: ['IR and UV are transverse EM waves', 'ultrasound is a longitudinal mechanical wave']
        }
      ]
    }
  ]
});
