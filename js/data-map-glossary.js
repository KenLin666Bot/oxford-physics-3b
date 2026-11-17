/* ==========================================================================
   Book 3B Knowledge Relationship Graph, Master Formula Sheet & Bilingual Glossary
   ========================================================================== */

window.BOOK_3B_MAP = {
  nodes: [
    // Foundation from 3A
    {
      id: 'n-3a',
      code: '3A 基础',
      chapter: '3a',
      sec: '6.1',
      x: 110,
      y: 78,
      titleCn: '几何光学（光线模型）',
      titleEn: 'Ray Optics (Book 3A)',
      color: '#475569',
      summary: '3A 册把光近似看作沿直线传播的光线（rays），学习了反射定律、斯涅耳折射定律 n = sin i / sin r 以及凸/凹透镜会聚发散。到了 3B 册，我们将揭晓这些定律背后的“波动真身”！'
    },

    // Chapter 4 Nodes
    {
      id: 'n-4-1',
      code: '4.1',
      chapter: 'ch4',
      sec: '4.1',
      x: 110,
      y: 230,
      titleCn: '横波与纵波（传能不传质）',
      titleEn: 'Transverse & Longitudinal Waves',
      color: '#0d9488',
      summary: '全书物理观起点：波只传递能量而不传递物质！按质点振动方向与波传播方向垂直（⊥）还是平行（∥），严格划分为横波（峰/谷）与纵波（密/疏）。'
    },
    {
      id: 'n-4-2',
      code: '4.2',
      chapter: 'ch4',
      sec: '4.2',
      x: 340,
      y: 230,
      titleCn: '波动方程 v = fλ 与相位',
      titleEn: 'Wave Equation & Phase',
      color: '#0d9488',
      summary: '统治全书的核心引擎 v = fλ（及 f = 1/T）！黄金法则：频率 f 仅由波源决定，波速 v 仅由介质决定，波长 λ 由两者共同决定。'
    },
    {
      id: 'n-4-3',
      code: '4.3',
      chapter: 'ch4',
      sec: '4.3',
      x: 340,
      y: 385,
      titleCn: '波动双图：s–d 图与 s–t 图',
      titleEn: 's–d & s–t Graphs',
      color: '#0d9488',
      summary: 's–d 图是同一时刻全场快照（读波长 λ，用微平移法判质点运动方向）；s–t 图是单质点时间录像（读周期 T，斜率即质点振动速度）。'
    },
    {
      id: 'n-4-4',
      code: '4.4',
      chapter: 'ch4',
      sec: '4.4',
      x: 110,
      y: 385,
      titleCn: '波速 vs 质点速率 & 能量',
      titleEn: 'Wave Speed vs Particle Speed',
      color: '#0d9488',
      summary: '均匀介质中波速 v 恒定，但质点速率时刻变化（平衡位置最快，峰/谷处瞬时静止 momentarily at rest，每周期走 4A）；振幅越大能量越强。'
    },

    // Chapter 5 Nodes
    {
      id: 'n-5-1',
      code: '5.1–5.2',
      chapter: 'ch5',
      sec: '5.2',
      x: 590,
      y: 115,
      titleCn: '波前、反射与深浅水折射',
      titleEn: 'Wavefronts, Reflection & Refraction',
      color: '#2563eb',
      summary: '波前永远垂直于传播方向，间距等于 λ。水波入浅水区时 f 不变、v 减慢 ⇒ λ 缩短并偏向法线——直接从波动层面推导出斯涅耳定律！'
    },
    {
      id: 'n-5-3',
      code: '5.3',
      chapter: 'ch5',
      sec: '5.3',
      x: 590,
      y: 245,
      titleCn: '波的衍射（缝宽 a vs 波长 λ）',
      titleEn: 'Diffraction of Waves',
      color: '#2563eb',
      summary: '波绕过障碍物或穿过狭缝向阴影区扩展（v, f, λ 均不变）。当缝宽 a 与波长 λ 相近或更小时（a ≤ λ），衍射极其显著！'
    },
    {
      id: 'n-5-4',
      code: '5.4',
      chapter: 'ch5',
      sec: '5.4',
      x: 590,
      y: 375,
      titleCn: '叠加原理与相干干涉（程差 Δ）',
      titleEn: 'Superposition & Interference',
      color: '#2563eb',
      summary: '相干波源（同 f、恒定相位差）叠加产生稳定腹线与节线。同相波源下：Δ = nλ 相长加强（振幅 2A），Δ = (n+1/2)λ 相消抵消（振幅 0）。'
    },
    {
      id: 'n-5-5',
      code: '5.5 *Ext',
      chapter: 'ch5',
      sec: '5.5',
      x: 590,
      y: 515,
      titleCn: '驻波（波节 N 与波腹 A）',
      titleEn: 'Stationary Waves',
      color: '#2563eb',
      summary: '两列反向全同行波叠加锁死而成：能量局域存储不外传，相邻波节间距 λ/2，同环同相、邻环反相，是弦乐器谐波发声的物理根基。'
    },

    // Chapter 6 Nodes
    {
      id: 'n-6-1',
      code: '6.1 & 6.4',
      chapter: 'ch6',
      sec: '6.4',
      x: 885,
      y: 95,
      titleCn: '光波折射 (n=c/v) 与电磁波谱',
      titleEn: 'Light Waves & EM Spectrum',
      color: '#7c3aed',
      summary: '光是波长极短（400–700 nm）的电磁横波，真空波速均为 c = 3.0×10⁸ m s⁻¹。七大电磁波家族按 λ 与 f 严格排序，应用贯穿通信与医学。'
    },
    {
      id: 'n-6-2',
      code: '6.2–6.3 *Ext',
      chapter: 'ch6',
      sec: '6.2',
      x: 885,
      y: 240,
      titleCn: '杨氏双缝 (C1) 与衍射光栅 (C2)',
      titleEn: 'Double Slit & Diffraction Grating',
      color: '#7c3aed',
      summary: '双缝产生等间距条纹 Δy = λD/a；光栅靠成百上千条窄缝产生极亮极细的大角度亮斑 d sin θ = nλ（平屏配合 tan θ = y/D），精密测定光波长！'
    },

    // Chapter 7 Nodes
    {
      id: 'n-7-1',
      code: '7.1–7.2',
      chapter: 'ch7',
      sec: '7.1',
      x: 885,
      y: 385,
      titleCn: '声波本质、回声与昼夜折射',
      titleEn: 'Sound Speed, Echoes & Phenomena',
      color: '#ea580c',
      summary: '声波是需介质的机械纵波（v_固 > v_液 > v_气，常温空气 ~340 m s⁻¹）。涵盖双麦测速、回声 2d=vt、夜晚向冷地面折射、绕门框明显衍射。'
    },
    {
      id: 'n-7-3',
      code: '7.3–7.4',
      chapter: 'ch7',
      sec: '7.4',
      x: 885,
      y: 525,
      titleCn: '声干涉、超声波与乐音 CRO',
      titleEn: 'Sound Interference, Ultrasound & CRO',
      color: '#ea580c',
      summary: '人耳范围 20 Hz–20 kHz；超声波 (>20 kHz) 波长短衍射小且非电离。乐音三要素：音调↔f、响度↔A、音色↔波形（泛音），在 CRO 上一目了然！'
    }
  ],

  edges: [
    { from: 'n-3a', to: 'n-5-1', label: '透镜聚光解释水波亮纹' },
    { from: 'n-3a', to: 'n-6-1', label: 'n = sin i / sin r = c / v' },
    { from: 'n-4-1', to: 'n-4-2', label: '峰距/密距定义 λ' },
    { from: 'n-4-1', to: 'n-6-1', label: '电磁波均为横波' },
    { from: 'n-4-1', to: 'n-7-1', label: '声波为机械纵波' },
    { from: 'n-4-2', to: 'n-4-3', label: 'λ 与 T 联手求 v' },
    { from: 'n-4-3', to: 'n-4-4', label: 's–t 斜率 = 质点速度' },
    { from: 'n-4-2', to: 'n-5-1', label: 'f 不变、v 减 ⇒ λ 缩' },
    { from: 'n-4-2', to: 'n-5-3', label: '调 f 改变 λ 控制衍射' },
    { from: 'n-5-1', to: 'n-6-1', label: '波前减速导出折射率' },
    { from: 'n-5-1', to: 'n-7-1', label: '冷暖空气声速差致折射' },
    { from: 'n-5-3', to: 'n-6-2', label: '窄缝衍射使两光束重叠' },
    { from: 'n-5-3', to: 'n-7-1', label: '声 λ≈门宽 ⇒ 闻声不见人' },
    { from: 'n-5-4', to: 'n-5-5', label: '反向全同波一维叠加' },
    { from: 'n-5-4', to: 'n-6-2', label: '程差 Δ=nλ 导出 C1/C2' },
    { from: 'n-5-4', to: 'n-7-3', label: '双喇叭响弱相间' },
    { from: 'n-4-3', to: 'n-7-3', label: 'CRO 即电压–时间图' },
    { from: 'n-5-5', to: 'n-7-3', label: '弦谐波产生乐器泛音' }
  ],

  synthesisCards: [
    {
      title: '📊 贯通总表 1：五大物理情景中“频率 f、波速 v、波长 λ、振幅 A”变与不变',
      html: `
        <table class="compare-table">
          <thead>
            <tr>
              <th>物理过程 / 操作</th>
              <th>频率 $f$</th>
              <th>波速 $v$</th>
              <th>波长 $\\lambda$</th>
              <th>核心原因（DSE 解释句式）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>同一介质中调高振源频率</strong></td>
              <td><strong>增大 $\\uparrow$</strong></td>
              <td><strong>不变</strong></td>
              <td><strong>减小 $\\downarrow$</strong></td>
              <td>介质未变故 $v$ 恒定，由 $v=f\\lambda$ 知 $\\lambda \\propto \\frac{1}{f}$</td>
            </tr>
            <tr>
              <td><strong>波发生反射或单缝衍射</strong></td>
              <td><strong>不变</strong></td>
              <td><strong>不变</strong></td>
              <td><strong>不变</strong></td>
              <td>仍在同一介质传播（衍射后能量散开使振幅 $A$ 减小）</td>
            </tr>
            <tr>
              <td><strong>水波由深水进入浅水</strong></td>
              <td><strong>不变</strong></td>
              <td><strong>减小 $\\downarrow$</strong></td>
              <td><strong>减小 $\\downarrow$</strong></td>
              <td>波源决定 $f$ 不变；浅水减速，偏向法线</td>
            </tr>
            <tr>
              <td><strong>光波由空气射入玻璃（$n>1$）</strong></td>
              <td><strong>不变（颜色不变！）</strong></td>
              <td><strong>减小为 $\\frac{c}{n}$</strong></td>
              <td><strong>减小为 $\\frac{\\lambda_0}{n}$</strong></td>
              <td>光密介质减速，偏向法线</td>
            </tr>
            <tr>
              <td><strong>声波由空气传入水中</strong></td>
              <td><strong>不变（音调不变！）</strong></td>
              <td><strong>大幅增大 $\\uparrow$</strong></td>
              <td><strong>大幅增大 $\\uparrow$</strong></td>
              <td>$v_{\\text{water}} (\\approx 1500) > v_{\\text{air}} (\\approx 340)$，偏离法线！</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: '🌊 贯通总表 2：水波 vs 光波（电磁波） vs 声波（含超声波）终极横向对比',
      html: `
        <table class="compare-table">
          <thead>
            <tr>
              <th>维度</th>
              <th>水波槽水波（Ch.5）</th>
              <th>光波 / 电磁波（Ch.6）</th>
              <th>声波 / 超声波（Ch.7）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>波动类型与介质需求</strong></td>
              <td>机械波（近似横波），需水作介质</td>
              <td><strong>电磁横波</strong>，<strong>无需介质（可过真空）</strong></td>
              <td><strong>机械纵波（密疏交替）</strong>，<strong>必须有介质</strong></td>
            </tr>
            <tr>
              <td><strong>空气中典型波速</strong></td>
              <td>几 $\\text{cm s}^{-1}$ 至几十 $\\text{cm s}^{-1}$（随水深增加）</td>
              <td><strong>$c = 3.0 \\times 10^8\\text{ m s}^{-1}$</strong>（所有电磁波相同）</td>
              <td><strong>约 $340\\text{ m s}^{-1}$</strong>（常温空气；升温加快）</td>
            </tr>
            <tr>
              <td><strong>典型波长与日常衍射</strong></td>
              <td>约 $1\\text{–}5\\text{ cm}$，过窄缝易见半圆衍射</td>
              <td>可见光 $400\\text{–}700\\text{ nm}$ 极短，日常门窗下几乎走直线</td>
              <td>人声 $0.3\\text{–}3\\text{ m}$ 与门宽相当，绕墙角显著衍射；超声波 $\\lambda$ 短衍射小</td>
            </tr>
            <tr>
              <td><strong>实验室相干干涉做法</strong></td>
              <td>两个振子装在<strong>同一振动横杆</strong>上</td>
              <td><strong>同一束激光</strong>照射双缝（或单缝 + 双缝）</td>
              <td>两个扬声器接在<strong>同一台信号发生器</strong>上</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: '📈 贯通总表 3：全书三张正弦波形图（s–d 图 vs s–t 图 vs CRO 示波器图）防混指南',
      html: `
        <table class="compare-table">
          <thead>
            <tr>
              <th>图像名称</th>
              <th>横坐标轴</th>
              <th>描写对象</th>
              <th>直接读取物理量</th>
              <th>特别警示</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>位移—距离图（$s\\text{–}d$）</strong></td>
              <td>距离 $d$（$\\text{m / cm}$）</td>
              <td>固定某一瞬间，整列波所有质点</td>
              <td>振幅 $A$、<strong>波长 $\\lambda$</strong></td>
              <td>判质点下一刻方向必须结合波传播方向做“微平移”</td>
            </tr>
            <tr>
              <td><strong>位移—时间图（$s\\text{–}t$）</strong></td>
              <td>时间 $t$（$\\text{s / ms}$）</td>
              <td>固定某一个质点，随时间的振动史</td>
              <td>振幅 $A$、<strong>周期 $T$</strong>（算 $f=\\frac{1}{T}$）</td>
              <td>切线斜率大小 $=$ 质点瞬时速率（平衡位置最大，峰谷为 0）</td>
            </tr>
            <tr>
              <td><strong>CRO 声波示波器图</strong></td>
              <td>格数 $\\times$ time-base（时间！）</td>
              <td>麦克风处空气声压随时间转换的电压</td>
              <td>电压振幅（响度）、周期 $T$（音调）、波形（音色）</td>
              <td>本质就是 $s\\text{–}t$ 图！<strong>不能直接读波长 $\\lambda$</strong>；拧旋钮不改变声音本身！</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: '🔬 贯通总表 4：双缝干涉（C1） vs 衍射光栅（C2） vs 弦线驻波计算公式选型',
      html: `
        <table class="compare-table">
          <thead>
            <tr>
              <th>实验情景</th>
              <th>选用公式</th>
              <th>间距特点</th>
              <th>头号易错点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>杨氏双缝干涉</strong></td>
              <td>$\\Delta y = \\frac{\\lambda D}{a}$（HKEAA C1）</td>
              <td>条纹较宽暗，<strong>均匀等距</strong></td>
              <td>要求 $D \\gg a$；第 $k$ 暗纹在 $(k-0.5)\\Delta y$ 处</td>
            </tr>
            <tr>
              <td><strong>平面透射衍射光栅</strong></td>
              <td>$d\\sin\\theta = n\\lambda$（HKEAA C2）<br>配合 $\\tan\\theta_n = \\frac{y_n}{D}$</td>
              <td>亮斑极细极亮，<strong>张角大且不等距</strong></td>
              <td>$d = \\frac{10^{-3}\\text{ m}}{N_{\\text{per mm}}}$；严禁套 $\\frac{\\lambda D}{d}$；总数 $\\le 2\\lfloor\\frac{d}{\\lambda}\\rfloor + 1$</td>
            </tr>
            <tr>
              <td><strong>两端固定弦线驻波</strong></td>
              <td>$d_{N\\text{–}N} = \\frac{1}{2}\\lambda$，$L = n\\frac{\\lambda_n}{2}$</td>
              <td>波节等距分布，每环长 $\\frac{1}{2}\\lambda$</td>
              <td>1 个环只是<strong>半个波长</strong>！$n$ 个环共有 $n+1$ 个波节</td>
            </tr>
          </tbody>
        </table>
      `
    }
  ]
};

window.BOOK_3B_FORMULAE = [
  {
    chapter: 'ch4',
    sec: '4.2',
    code: 'F1',
    nameCn: '频率与周期关系',
    nameEn: 'Frequency–Period Relation',
    givenInExam: false,
    syllabus: 'Core',
    latex: 'f = \\frac{1}{T}',
    meaning: '$f$：频率（$\\text{Hz}$）；$T$：完成一次完整振动的周期（$\\text{s}$）。',
    tip: '看到毫秒 $\\text{ms}$ 先写成 $\\times 10^{-3}\\text{ s}$；看到 $\\text{MHz}$ 写成 $\\times 10^6\\text{ Hz}$。'
  },
  {
    chapter: 'ch4',
    sec: '4.2',
    code: 'F2',
    nameCn: '通用波动方程',
    nameEn: 'The Wave Equation',
    givenInExam: false,
    syllabus: 'Core',
    latex: 'v = f\\lambda',
    meaning: '$v$：波速（$\\text{m s}^{-1}$）；$f$：频率（$\\text{Hz}$）；$\\lambda$：波长（$\\text{m}$）。',
    tip: '考卷公式表不印此式，必须熟记！记住：介质决定 $v$，波源决定 $f$。'
  },
  {
    chapter: 'ch4',
    sec: '4.4',
    code: 'F3',
    nameCn: '单周期内波推进距离与质点路程',
    nameEn: 'Wave Advance vs Particle Distance per Period',
    givenInExam: false,
    syllabus: 'Core',
    latex: 'd_{\\text{wave}} = \\lambda, \\qquad d_{\\text{particle}} = 4A \\quad (\\text{in } 1\\,T)',
    meaning: '$A$：振幅（平衡位置到波峰距离，峰谷总高的一半）。',
    tip: '每半个周期 $\\frac{1}{2}T$ 质点必走 $2A$；但 $\\frac{1}{4}T$ 只有从平衡位置或波峰/波谷出发才恰好走 $1A$。'
  },
  {
    chapter: 'ch5',
    sec: '5.1',
    code: 'F4',
    nameCn: '手持频闪观测盘闪视频率',
    nameEn: 'Stroboscope Viewing Frequency',
    givenInExam: false,
    syllabus: 'Core',
    latex: 'f_{\\text{strobe}} = n_{\\text{slits}} \\times f_{\\text{disc}}',
    meaning: '$n_{\\text{slits}}$：圆盘狭缝条数；$f_{\\text{disc}}$：圆盘每秒转数（$\\text{rev s}^{-1}$）。',
    tip: '不改变表观波长的最高定格闪视频率即等于水波真实频率 $f$。'
  },
  {
    chapter: 'ch5',
    sec: '5.2',
    code: 'F5',
    nameCn: '波动跨介质折射比值关系',
    nameEn: 'Refraction of Waves Across Media',
    givenInExam: false,
    syllabus: '* Extension',
    latex: '\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}',
    meaning: '$\\theta_1, \\theta_2$：入射角与折射角（也等于波前与界面的夹角）。',
    tip: '由跨介质频率不变（$f_1 = f_2$）直接导出。'
  },
  {
    chapter: 'ch5',
    sec: '5.4',
    code: 'F6',
    nameCn: '两同相波源干涉的波程差判据',
    nameEn: 'Path Difference Conditions (In-Phase Sources)',
    givenInExam: false,
    syllabus: '* Extension',
    latex: '\\Delta = |S_1P - S_2P| = \\begin{cases} n\\lambda & (\\text{Constructive}) \\\\ \\left(n + \\frac{1}{2}\\right)\\lambda & (\\text{Destructive}) \\end{cases}',
    meaning: '$n = 0, 1, 2, \\dots$；$\\Delta$：探测点到两波源的距离差。',
    tip: '若题目改成两波源反相（in antiphase），上述相长与相消条件对调！'
  },
  {
    chapter: 'ch5',
    sec: '5.5',
    code: 'F7',
    nameCn: '驻波波节间距与两端固定弦谐波',
    nameEn: 'Stationary Wave Node Spacing & String Modes',
    givenInExam: false,
    syllabus: '* Extension',
    latex: 'd_{N\\text{–}N} = d_{A\\text{–}A} = \\frac{1}{2}\\lambda, \\qquad d_{N\\text{–}A} = \\frac{1}{4}\\lambda, \\qquad L = n\\frac{\\lambda_n}{2}',
    meaning: '$n$：驻波纺锤环（loops）数目；$L$：两端固定弦长。',
    tip: '微波反射驻波中，探头每经过相邻两个最强点（波腹）移动的距离也是 $\\frac{1}{2}\\lambda$！'
  },
  {
    chapter: 'ch6',
    sec: '6.1',
    code: 'F8',
    nameCn: '介质折射率与光波速、光波长关系',
    nameEn: 'Refractive Index, Speed & Wavelength of Light',
    givenInExam: false,
    syllabus: 'Core & * Ext',
    latex: 'n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}',
    meaning: '$c = 3.0 \\times 10^8\\text{ m s}^{-1}$；$\\lambda_0$：真空/空气波长；$v, \\lambda$：介质中光速与波长。',
    tip: '进入玻璃或水后 $f$ 不变（颜色不变），$v$ 和 $\\lambda$ 同比例缩小为 $\\frac{1}{n}$。'
  },
  {
    chapter: 'ch6',
    sec: '6.2',
    code: 'HKEAA C1',
    nameCn: '杨氏双缝干涉条纹间距公式',
    nameEn: 'Double-Slit Fringe Separation',
    givenInExam: true,
    syllabus: '* Extension',
    latex: '\\Delta y = \\frac{\\lambda D}{a}',
    meaning: '$\\Delta y$：相邻亮纹（或暗纹）间距；$D$：双缝到屏距离；$a$：双缝中心间距。',
    tip: '📄 HKEAA 考卷公式表 C1 已提供！仅适用于小角度条件 $D \\gg a$。'
  },
  {
    chapter: 'ch6',
    sec: '6.3',
    code: 'HKEAA C2',
    nameCn: '平面透射衍射光栅方程',
    nameEn: 'Diffraction Grating Equation',
    givenInExam: true,
    syllabus: '* Extension',
    latex: 'd\\sin\\theta = n\\lambda \\qquad \\left(d = \\frac{1}{N}, \\quad \\tan\\theta_n = \\frac{y_n}{D}\\right)',
    meaning: '$d$：光栅狭缝间距；$\\theta$：第 $n$ 级极大衍射角；$n_{\\max} = \\lfloor \\frac{d}{\\lambda} \\rfloor$。',
    tip: '📄 HKEAA 考卷公式表 C2 已提供 $d\\sin\\theta = n\\lambda$！但 $d = \\frac{1}{N}$ 和 $\\tan\\theta = \\frac{y}{D}$ 需自己列出！'
  },
  {
    chapter: 'ch7',
    sec: '7.2',
    code: 'F11',
    nameCn: '回声 / 声呐 / 雷达脉冲往返测距',
    nameEn: 'Echo / Sonar / Radar Pulse-Echo Ranging',
    givenInExam: false,
    syllabus: 'Core',
    latex: '2d = vt \\quad \\Longrightarrow \\quad d = \\frac{vt}{2}',
    meaning: '$d$：到反射面的单程距离；$t$：脉冲一去一回总耗时。',
    tip: '若车/船以速率 $u$ 驶向崖壁，用路程和 $(v + u)t = 2d_0$ 最快最稳！'
  },
  {
    chapter: 'ch7',
    sec: '7.4',
    code: 'F12',
    nameCn: '示波器（CRO）时基读频率与电压振幅',
    nameEn: 'CRO Time-base & Y-gain Reading',
    givenInExam: false,
    syllabus: 'Core',
    latex: 'T = n_x \\times (\\text{time-base}), \\quad f = \\frac{1}{T}, \\quad V_0 = n_y \\times (\\text{Y-gain})',
    meaning: '$n_x$：1 个完整周期所占水平格数；$n_y$：中心线到波峰所占竖直格数。',
    tip: '切勿把峰到谷总高（$2n_y$）直接当振幅！且务必把 $\\text{ms}$ 换算为 $10^{-3}\\text{ s}$。'
  }
];

window.BOOK_3B_GLOSSARY = [
  // Chapter 4
  { id: 'g1', chapter: 'ch4', sec: '4.1', en: 'wave pulse', cn: '波脉冲', def: '单一一次扰动在介质中传播形成的单个孤立波形。', examTip: '对比连续振动产生的 travelling / progressive wave（行波）。' },
  { id: 'g2', chapter: 'ch4', sec: '4.1', en: 'travelling wave (progressive wave)', cn: '行波（进行波）', def: '波形携带能量以波速 v 不断向前推进的连续波。', examTip: '与第 5.5 节波形不前进、不净传能的 stationary wave（驻波）相对。' },
  { id: 'g3', chapter: 'ch4', sec: '4.1', en: 'transverse wave', cn: '横波', def: '质点振动方向与波传播方向互相垂直（perpendicular）的波。', examTip: '英文定义必写关键词：particles vibrate perpendicular to the direction of travel。' },
  { id: 'g4', chapter: 'ch4', sec: '4.1', en: 'longitudinal wave', cn: '纵波', def: '质点振动方向与波传播方向互相平行（parallel / along）的波。', examTip: '千万写 vibrate along / parallel to，不可写 move in the same direction！' },
  { id: 'g5', chapter: 'ch4', sec: '4.1', en: 'crest / trough', cn: '波峰 / 波谷', def: '横波上的最高正向位移点（波峰）与最低负向位移点（波谷）。', examTip: '质点到达波峰或波谷时瞬时速率为 0（momentarily at rest）。' },
  { id: 'g6', chapter: 'ch4', sec: '4.1', en: 'compression / rarefaction', cn: '密部 / 疏部', def: '纵波中介质粒子聚集压强偏高区（密部）与粒子稀疏压强偏低区（疏部）。', examTip: '相邻密部与疏部中心相距 λ/2，且中心处质点瞬时位移 s = 0！' },
  { id: 'g7', chapter: 'ch4', sec: '4.1', en: 'mechanical wave', cn: '机械波', def: '必须依靠物质介质（material medium）粒子振动才能传播的波（如水波、声波）。', examTip: '不能在真空（vacuum）中传播。' },
  { id: 'g8', chapter: 'ch4', sec: '4.1', en: 'electromagnetic (EM) wave', cn: '电磁波', def: '由交变电场与磁场组成、无需介质可在真空中以 3.0×10⁸ m s⁻¹ 传播的横波。', examTip: '所有电磁波在真空中速率完全相同。' },
  { id: 'g9', chapter: 'ch4', sec: '4.1', en: 'equilibrium position', cn: '平衡位置', def: '没有波通过时质点原本静止所处的基准位置（位移 s = 0）。', examTip: '质点经过平衡位置时振动速率达到最大值（maximum speed）。' },
  { id: 'g10', chapter: 'ch4', sec: '4.2', en: 'displacement (s)', cn: '位移', def: '质点偏离平衡位置的距离与方向（矢量，有正负号）。', examTip: '单位为 m 或 cm。' },
  { id: 'g11', chapter: 'ch4', sec: '4.2', en: 'amplitude (A)', cn: '振幅', def: '质点偏离平衡位置的最大位移的大小（恒为正值）。', examTip: '波峰到波谷竖直总距离是 2A；振幅反映波的能量（响度/亮度）。' },
  { id: 'g12', chapter: 'ch4', sec: '4.2', en: 'period (T)', cn: '周期', def: '质点完成一次完整振动（one complete oscillation）所需的时间。', examTip: '从 s–t 图或 CRO 图横轴直接读取，T = 1/f。' },
  { id: 'g13', chapter: 'ch4', sec: '4.2', en: 'frequency (f)', cn: '频率', def: '每秒完成的完整振动次数（单位 Hz 或 s⁻¹）。', examTip: '只由波源决定，波跨过界面折射时频率绝不改变！' },
  { id: 'g14', chapter: 'ch4', sec: '4.2', en: 'wavelength (λ)', cn: '波长', def: '相邻两个同相振动质点之间的最短距离（如相邻两波峰或两密部间距）。', examTip: '从 s–d 快照图或水波槽相邻亮纹间距读取。' },
  { id: 'g15', chapter: 'ch4', sec: '4.2', en: 'wave speed (v)', cn: '波速', def: '波形（能量）每秒向前推进的距离，v = fλ。', examTip: '只由传播介质的性质（如水深、弦张力、气温、折射率）决定！' },
  { id: 'g16', chapter: 'ch4', sec: '4.2', en: 'in phase / in antiphase', cn: '同相 / 反相', def: '运动步调始终一致（同相，行波相隔 nλ）vs 始终相反（反相，相隔 (n+0.5)λ）。', examTip: '驻波同一环内所有质点同相，相邻环质点反相。' },
  { id: 'g17', chapter: 'ch4', sec: '4.3', en: 'displacement–distance (s–d) graph', cn: '位移—距离图', def: '表示某一固定时刻沿传播方向各质点位移的瞬间快照图。', examTip: '横轴是距离 d，读波长 λ；配合微平移法判质点瞬时运动方向。' },
  { id: 'g18', chapter: 'ch4', sec: '4.3', en: 'displacement–time (s–t) graph', cn: '位移—时间图', def: '记录某单个特定质点在不同时刻位移变化的图像。', examTip: '横轴是时间 t，读周期 T；切线斜率代表该质点瞬时速度。' },
  { id: 'g19', chapter: 'ch4', sec: '4.4', en: 'momentarily at rest', cn: '瞬时静止', def: '质点到达波峰或波谷极端折返点时，瞬时速率降为 0 的状态。', examTip: '区别于驻波波节处的 permanently at rest（永久静止）！' },

  // Chapter 5
  { id: 'g20', chapter: 'ch5', sec: '5.1', en: 'ripple tank', cn: '水波槽', def: '利用水面波峰聚光、波谷散光在底屏投射明暗条纹来演示二维波动的实验仪器。', examTip: '槽边铺倾斜海绵是为了吸收水波、防止槽壁反射（prevent unwanted reflections）。' },
  { id: 'g21', chapter: 'ch5', sec: '5.1', en: 'wavefront', cn: '波前', def: '将相邻且同相振动的所有点连成的线或面（常沿波峰画线）。', examTip: '作图铁律：波前永远垂直于传播方向（ray），相邻波前间距 = λ！' },
  { id: 'g22', chapter: 'ch5', sec: '5.1', en: 'stroboscope', cn: '频闪观测仪（频闪盘/灯）', def: '以周期性频率闪视或闪光，使周期运动的水波在视觉上“定格静止（freeze）”的仪器。', examTip: '若频闪频率设为水波频率的 2 倍，看到的静止亮纹间距会假性减半为 λ/2！' },
  { id: 'g23', chapter: 'ch5', sec: '5.2', en: 'refraction of waves', cn: '波的折射', def: '波跨越界面进入波速不同的介质时发生波长改变（及斜射时方向偏折）的现象。', examTip: '垂直入射（0°）虽不偏折，但 v 与 λ 仍改变，仍属折射！' },
  { id: 'g24', chapter: 'ch5', sec: '5.2', en: 'deep region / shallow region', cn: '深水区 / 浅水区', def: '水波槽中水深较大（波速快、λ 长）与放了有机玻璃板水较浅（波速慢、λ 短）的区域。', examTip: '深水斜入浅水：f 不变 → v 减慢 → λ 变短 → 偏向法线。' },
  { id: 'g25', chapter: 'ch5', sec: '5.3', en: 'diffraction', cn: '衍射（绕射）', def: '波绕过障碍物边缘或穿过狭缝后向几何阴影区弯曲扩展的现象。', examTip: '衍射绝不改变 v、f 和 λ！当缝宽 a ≤ λ 时衍射最显著（pronounced）。' },
  { id: 'g26', chapter: 'ch5', sec: '5.4', en: 'principle of superposition', cn: '叠加原理', def: '两列或多列波在某点相遇时，合位移等于各波单独引起的位移的代数和（矢量和）。', examTip: '相遇穿过后各波完全恢复原有波形、振幅和波速独立前进。' },
  { id: 'g27', chapter: 'ch5', sec: '5.4', en: 'coherent sources', cn: '相干波源', def: '频率相同且保持恒定相位差（如始终同相或始终反相）的两个波源。', examTip: '产生稳定可观测干涉图样（observable steady interference pattern）的先决条件！' },
  { id: 'g28', chapter: 'ch5', sec: '5.4', en: 'constructive interference (reinforcement)', cn: '相长干涉（加强）', def: '两列波同相到达某点（峰遇峰、谷遇谷），使合振幅增至最大（A₁+A₂）的干涉。', examTip: '该点并非停在最高处不动，而是以 2A 为振幅剧烈振动！' },
  { id: 'g29', chapter: 'ch5', sec: '5.4', en: 'destructive interference (cancellation)', cn: '相消干涉（抵消）', def: '两列波反相到达某点（峰遇谷），使合振幅减至最小（|A₁−A₂|，等幅时为 0）的干涉。', examTip: '主动降噪耳机与节线的核心原理。' },
  { id: 'g30', chapter: 'ch5', sec: '5.4', en: 'path difference (Δ)', cn: '波程差（程差）', def: '空间某点到两个波源的距离之差 Δ = |S₁P − S₂P|。', examTip: '同相波源：Δ = nλ 相长，Δ = (n+1/2)λ 相消。' },
  { id: 'g31', chapter: 'ch5', sec: '5.4', en: 'antinodal line / nodal line', cn: '腹线 / 节线', def: '干涉场中各相长干涉点连成的线（腹线）与各相消干涉点连成的线（节线）。', examTip: '增大 λ 或减小波源间距 a，会使腹线与节线间距变宽、总条数减少。' },
  { id: 'g32', chapter: 'ch5', sec: '5.5', en: 'stationary wave (standing wave)', cn: '驻波', def: '两列振幅、频率、波速均相同的波沿相反方向传播叠加形成的波形不前进的波。', examTip: '驻波不向外净传递能量（no net transfer of energy）。' },
  { id: 'g33', chapter: 'ch5', sec: '5.5', en: 'node (N) / antinode (A)', cn: '波节 / 波腹', def: '驻波上始终静止振幅为 0 的点（波节）与以最大振幅振动的点（波腹）。', examTip: '相邻两波节间距 = λ/2；波节到相邻波腹间距 = λ/4。' },
  { id: 'g34', chapter: 'ch5', sec: '5.5', en: 'fundamental frequency', cn: '基频', def: '两端固定弦线上形成单个驻波环（L = λ/2）时的最低共振频率 f₁。', examTip: '高次谐波频率满足 fₙ = nf₁（n 个环）。' },

  // Chapter 6
  { id: 'g35', chapter: 'ch6', sec: '6.1', en: 'monochromatic light', cn: '单色光', def: '只含单一频率（单一颜色，如红激光）的光。', examTip: '对比含连续多种波长（400–700 nm）的 white light（白光）。' },
  { id: 'g36', chapter: 'ch6', sec: '6.1', en: 'optically denser medium', cn: '光密介质', def: '折射率 n 较大、光在其中传播速率较慢的透明介质（如玻璃相对于空气）。', examTip: '光进光密介质：f 不变、v 减慢、λ 缩短、偏向法线。' },
  { id: 'g37', chapter: 'ch6', sec: '6.2', en: 'Young\'s double-slit experiment', cn: '杨氏双缝实验', def: '将同一束相干光经两条平行窄缝衍射重叠，在屏上形成等距明暗条纹以证明光波动性的实验。', examTip: '公式 C1：Δy = λD/a（要求 D >> a）。' },
  { id: 'g38', chapter: 'ch6', sec: '6.2', en: 'fringe separation (Δy)', cn: '条纹间距', def: '屏幕上相邻两条亮纹中心（或相邻两条暗纹中心）之间的距离。', examTip: '实验测 Δy 时应量度跨过 N 个条纹间隔的总宽度再除以 N 以减小百分误差！' },
  { id: 'g39', chapter: 'ch6', sec: '6.3', en: 'diffraction grating', cn: '衍射光栅（平面透射光栅）', def: '刻有大量平行等距狭缝（如每毫米数百条）的光学元件，产生极亮极锐利的大角度主极大。', examTip: '公式 C2：d sin θ = nλ，绝不可套双缝小角度公式！' },
  { id: 'g40', chapter: 'ch6', sec: '6.3', en: 'grating spacing (d)', cn: '光栅间距（光栅常数）', def: '光栅上相邻两条透光狭缝中心之间的距离，d = 1/N。', examTip: '看到 500 lines per mm 立即写 d = 10⁻³ m / 500 = 2.0×10⁻⁶ m！' },
  { id: 'g41', chapter: 'ch6', sec: '6.3', en: 'zero-order / nth-order maximum', cn: '零级 / 第 n 级亮纹（主极大）', def: '光栅中央 θ = 0° 处的亮斑（零级）及两侧满足 d sin θ = nλ 的各级亮斑。', examTip: '白光入射时零级为白光，两侧各级为内紫外红的连续光谱。' },
  { id: 'g42', chapter: 'ch6', sec: '6.4', en: 'electromagnetic spectrum', cn: '电磁波谱', def: '按波长或频率顺序排列的全部电磁波家族（无线电波、微波、红外、可见光、紫外、X 射线、伽马射线）。', examTip: '熟记可见光：紫 ~400 nm 至 红 ~700 nm。' },
  { id: 'g43', chapter: 'ch6', sec: '6.4', en: 'infrared (IR) radiation', cn: '红外辐射（红外线）', def: '波长介于微波与红光之间、一切有温度物体都会发出的热效应显著的电磁波。', examTip: '应用：热成像仪（thermal imaging）、额温枪、电视遥控器。' },
  { id: 'g44', chapter: 'ch6', sec: '6.4', en: 'ultraviolet (UV) radiation', cn: '紫外辐射（紫外线）', def: '波长介于紫光与 X 射线之间、能激发荧光物质发光及杀菌的电磁波。', examTip: '应用：防伪验钞（banknotes）、杀菌消毒；过量伤眼致皮肤癌。' },
  { id: 'g45', chapter: 'ch6', sec: '6.4', en: 'ionising radiation', cn: '电离辐射', def: '频率极高、能量足以将原子中的电子电离并破坏生物细胞 DNA 的辐射（如 X 射线、伽马射线、强紫外）。', examTip: '解释孕妇不用 X 光而用超声波产检的核心关键词！' },

  // Chapter 7
  { id: 'g46', chapter: 'ch7', sec: '7.1', en: 'bell-jar experiment', cn: '真空钟罩实验', def: '抽出玻璃罩内空气时电铃声渐弱消失而仍可见铃锤敲击，证明声音需介质而光可过真空。', examTip: '残余微弱声可经悬挂导线和钟罩固体传出。' },
  { id: 'g47', chapter: 'ch7', sec: '7.1', en: 'timer-scaler', cn: '电子计时器（毫秒计）', def: '配合两个麦克风自动开始与停止计时的精密仪器，消除人手反应时间误差。', examTip: '敲击点必须在两麦克风连线同一外侧，v = d/t。' },
  { id: 'g48', chapter: 'ch7', sec: '7.2', en: 'echo / reverberation', cn: '回声 / 混响', def: '声波经远处硬表面反射回来的声音（回声 2d = vt）及室内多次反射拖尾（混响）。', examTip: '软质多孔吸音材料（soft porous materials）用于吸收声能减少反射。' },
  { id: 'g49', chapter: 'ch7', sec: '7.3', en: 'audible frequency range', cn: '人类听觉频率范围', def: '正常人耳能感知的声波频率范围：约 20 Hz 至 20 kHz（20 000 Hz）。', examTip: '随年龄增长高频上限下降。' },
  { id: 'g50', chapter: 'ch7', sec: '7.3', en: 'ultrasound', cn: '超声波', def: '频率高于 20 kHz 的机械纵波（声波）。', examTip: '绝不是电磁波！优势：波长短衍射小（窄波束定向好）且非电离安全。' },
  { id: 'g51', chapter: 'ch7', sec: '7.3', en: 'SONAR', cn: '声呐（声波导航与测距）', def: '船只向水下发射超声波脉冲并接收海底或鱼群回波，由 d = vt/2 测距的系统。', examTip: '注意用海水中的声速（约 1500 m s⁻¹），且别忘除以 2！' },
  { id: 'g52', chapter: 'ch7', sec: '7.4', en: 'pitch', cn: '音调', def: '人耳对声音高低的感知，客观上完全由声波的频率（frequency f）决定。', examTip: '频率越高 → 音调越高（higher pitch）。' },
  { id: 'g53', chapter: 'ch7', sec: '7.4', en: 'loudness', cn: '响度', def: '人耳对声音强弱大小的感知，客观上取决于声波的振幅（amplitude A）与能量。', examTip: '振幅越大 → 声音越响（louder sound）。' },
  { id: 'g54', chapter: 'ch7', sec: '7.4', en: 'quality (timbre)', cn: '音色（音品）', def: '区分同音调同响度下不同乐器或人声的特征，取决于声波的波形（waveform / overtones）。', examTip: '由基音（fundamental）叠加不同数量和强弱的泛音（overtones）形成。' },
  { id: 'g55', chapter: 'ch7', sec: '7.4', en: 'overtones', cn: '泛音', def: '乐器发声时伴随基频同时产生的高频谐波成分（如 2f₀, 3f₀…），决定乐器波形与音色。', examTip: '纯音叉几乎没有泛音，故在 CRO 上呈现最纯净的正弦波。' },
  { id: 'g56', chapter: 'ch7', sec: '7.4', en: 'cathode-ray oscilloscope (CRO)', cn: '阴极射线示波器', def: '接上麦克风后将声音随时间的气压变化显示为电压—时间波形的仪器。', examTip: '时基 time-base 管横轴时间，Y-gain 管纵轴电压灵敏度。' }
];
