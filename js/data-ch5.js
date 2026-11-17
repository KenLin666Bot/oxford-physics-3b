window.BOOK_3B_CHAPTERS = window.BOOK_3B_CHAPTERS || [];

window.BOOK_3B_CHAPTERS.push({
  id: 'ch5',
  number: 'Chapter 5',
  titleCn: '波动现象与驻波',
  titleEn: 'Wave Phenomena and Stationary Waves',
  color: '#2563eb',
  overview: '如果第 4 章是认识“一列孤独行进的波”，那么第 5 章就是观察波遇到边界、障碍物、狭缝以及另一列波时的精彩表演！借助实验室的“水波槽（ripple tank）”，我们将亲眼见证四大波动现象——反射、折射、衍射、干涉，以及两列反向全同波碰撞锁死而成的“驻波（stationary wave）”。',
  sections: [
    /* ========================================================================
       Section 5.1
       ======================================================================== */
    {
      id: '5.1',
      code: '5.1',
      titleCn: '水波槽、波前与频闪观测仪',
      titleEn: 'Ripple Tank, Wavefronts and Stroboscope',
      dseTag: '必考实验基础 · Core Practical',
      realLifeHook: {
        title: '🏊‍♀️ 先从生活出发：阳光下泳池底部的“亮暗水纹”是怎么来的？',
        html: `
          <p>大晴天去室外游泳池时，你一定见过池底晃动着一格格特别漂亮的<strong>亮线和暗影</strong>！水明明是透明无色的，为什么会在池底投出亮纹和暗纹呢？</p>
          <p>回想一下 3A 册刚学过的<strong>透镜（lenses）</strong>：水面上凸起的<strong>波峰（crest）</strong>就像一片<strong>凸透镜（convex / converging lens）</strong>，把阳光会聚到池底形成<strong>亮纹（bright fringe）</strong>；凹下去的<strong>波谷（trough）</strong>就像一片<strong>凹透镜（concave / diverging lens）</strong>，把阳光发散开形成<strong>暗纹（dark fringe）</strong>！物理学家正是把泳池缩小搬进教室，发明了研究二维波动的头号神器——<strong>水波槽（ripple tank）</strong>。</p>
        `
      },
      concepts: [
        {
          title: '1. 波前（Wavefront）与传播方向（Direction of Travel）',
          html: `
            <ul>
              <li><span class="term">波前</span><span class="term-en">wavefront</span>：把波面上相邻且<strong>振动同相（vibrating in phase）</strong>的所有点连成的线（课本通常沿着<strong>波峰 crests</strong> 画实线代表波前）。</li>
              <li>用直木条（straight dipper）拍击水面产生平行等距的<span class="term">直线波前</span><span class="term-en">straight wavefronts</span>（平面波）；用小球（spherical dipper）点水产生同心圆状的<span class="term">圆形波前</span><span class="term-en">circular wavefronts</span>。</li>
              <li><strong>两条作图铁律（HKDSE 画图题必查！）</strong>：
                <ol>
                  <li><strong>相邻两条波前之间的垂直距离 = 一个波长 $\\lambda$</strong>（对应水波槽底屏上相邻两条亮纹中心的间距，注意考虑投影放大率或直接在水面量度）。</li>
                  <li><strong>波的传播方向（ray / direction of travel）永远与波前互相垂直（perpendicular, $90^\\circ$）！</strong>画完波前记得标直角符号！</li>
                </ol>
              </li>
              <li><strong>实验细节加分项</strong>：水波槽四周边壁通常会铺上倾斜的海绵（sponge-lined sloping edges），目的是<strong>吸收水波能量，防止水波在槽壁发生不必要的反射（prevent unwanted reflections）</strong>干扰实验图样！</li>
            </ul>
          `
        },
        {
          title: '2. 频闪观测仪（Stroboscope）：给飞快的水波“按下暂停键”',
          html: `
            <p>水波跑得很快，肉眼很难用尺子直接量波长 $\\lambda$。实验里我们用<strong>手持频闪盘（hand-held stroboscope）</strong>或<strong>频闪灯（stroboscopic lamp）</strong>来把波形“定格（freeze）”：</p>
            <ul>
              <li>假设水波真实频率为 $f = 10\\text{ Hz}$（每过 $0.1\\text{ s}$ 后一个波峰刚好走到前一个波峰的位置）。</li>
              <li>如果我们让频闪灯也每隔 $0.1\\text{ s}$ 闪光一次（频闪频率 $f_{\\text{strobe}} = 10\\text{ Hz}$），每次闪光时波峰都恰好出现在完全相同的位置——人眼看起来波形就<strong>静止定格（frozen）</strong>了！</li>
              <li><strong>高阶陷阱预警</strong>：
                <ul>
                  <li>如果闪慢了一倍（$f_{\\text{strobe}} = 5\\text{ Hz}$，每过 $2T$ 闪一次），波走了 $2\\lambda$，看起来<strong>也定格，且表观波长不变</strong>！</li>
                  <li>如果闪快了一倍（$f_{\\text{strobe}} = 20\\text{ Hz}$，每过 $\\frac{1}{2}T$ 闪一次），原本波谷的位置此刻也变成了波峰被照亮——看起来<strong>虽然定格，但亮纹密度翻倍（表观波长变成 $\\frac{1}{2}\\lambda$ 假象）</strong>！</li>
                  <li><strong>标准实验操作</strong>：从高频往低调（或寻找<strong>不改变表观波长的最高定格频率</strong>），该最高频率就等于水波的真实频率 $f$！</li>
                </ul>
              </li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '手持频闪盘观测频率（Stroboscope Viewing Frequency）',
          badge: '实验必考关系',
          latex: 'f_{\\text{strobe}} = n_{\\text{slits}} \\times f_{\\text{disc}}',
          vars: [
            '$f_{\\text{strobe}}$：每秒透过狭缝看到画面的闪视频率（$\\text{Hz}$）',
            '$n_{\\text{slits}}$：圆盘上均匀开出的狭缝数目',
            '$f_{\\text{disc}}$：圆盘每秒转动的圈数（$\\text{rev s}^{-1}$ 或 $\\text{Hz}$）'
          ],
          condition: '当保持原波长不变的最高定格频率出现时，水波真实频率 $f = f_{\\text{strobe}}$。'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：水波槽的“明暗水纹”与频闪定格之谜',
        intro: '把 3A 册透镜知识和 3B 水波结合起来，3 步吃透水波槽实验原理：',
        steps: [
          {
            q: '追问 1：平行光从水波槽正上方照下来，水面上凸起的波峰（crest）中部厚、两边薄，在光学上相当于什么透镜？会在槽底屏上投出什么？',
            options: [
              '凸透镜（converging lens）——会聚光线形成亮纹（bright fringe）',
              '凹透镜（diverging lens）——挡住光线形成暗影'
            ],
            answerIndex: 0,
            a: '完全正确！波峰像凸透镜聚光成亮纹，波谷像凹透镜散光成暗纹，所以相邻两条亮纹中心的间距就对应一个波长 $\\lambda$！'
          },
          {
            q: '追问 2：水波频率 $f = 10\\text{ Hz}$（周期 $T = 0.1\\text{ s}$）。如果想让每次透过频闪盘看到画面时，后一个波峰刚好走到前一个波峰的位置从而“定格”，相邻两次闪视间隔应该是多少？',
            options: [
              '每隔 $0.1\\text{ s}$（或 $0.2\\text{ s}, 0.3\\text{ s}\\dots$ 周期整数倍）看一次',
              '必须连续不间断盯着看'
            ],
            answerIndex: 0,
            a: '太棒了！当闪视频率等于 $10\\text{ Hz}$（或 $\\frac{10}{2} = 5\\text{ Hz}$ 等分频）时，波每次都刚好走了整数个波长 $\\lambda$，视觉上完全定格且波长不变！'
          },
          {
            q: '追问 3：那如果把频闪灯调得太快，以 $20\\text{ Hz}$（每隔 $0.05\\text{ s} = \\frac{1}{2}T$）闪光一次，水波每次只往前挪了 $\\frac{1}{2}\\lambda$，屏幕上会出现什么假象？',
            options: [
              '条纹依然定格，但亮纹密度翻倍（表观波长假性减半为 $\\frac{1}{2}\\lambda$）',
              '条纹间距变宽为原来的 2 倍'
            ],
            answerIndex: 0,
            a: '满分防坑！这就是为什么实验测真实频率时，我们要寻找<strong>“不使表观波长减半的最高定格频率”</strong>！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 3A 册（凸透镜与凹透镜）',
          text: '水波槽底屏的亮暗条纹直接应用了 3A 册透镜对光线的会聚（波峰）与发散（波谷）原理！',
          targetSec: '4.1'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 5.2–5.4 节（四大波动现象作图）',
          text: '接下来画反射、折射、衍射图时，全靠“波前 ⊥ 传播方向”和“波前间距 = 波长 λ”这两把尺子！',
          targetSec: '5.2'
        }
      ],
      traps: [
        {
          wrong: '误区：以为水波槽屏幕上的“亮纹到相邻暗纹”的距离就是一个波长 $\\lambda$。',
          right: '真相：亮纹是波峰，暗纹是波谷！亮纹到相邻暗纹只有 $\\frac{1}{2}\\lambda$；相邻两条亮纹中心（或相邻两条暗纹中心）才是 $1\\lambda$！'
        }
      ],
      questions: [
        {
          id: 'q-5-1-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '在水波槽（ripple tank）实验中，平行光从水面上方垂直向下照射，在槽底白屏上形成明暗相间的条纹。下列说法正确的是？',
          options: [
            '亮纹对应波谷，相邻两条亮纹间距对应半个波长 $\\frac{1}{2}\\lambda$',
            '亮纹对应波峰，相邻两条亮纹间距对应一个波长 $\\lambda$',
            '亮纹对应波峰，亮纹与相邻暗纹间距对应一个波长 $\\lambda$',
            '在水波槽边缘铺海绵是为了让水波反射得更清晰'
          ],
          answerIndex: 1,
          hint: '水波凸起的波峰像什么透镜？波峰到下一个波峰的距离是几个波长？边缘海绵是硬挡板还是软吸能材料？',
          wrongDiagnostics: [
            '波谷凹下去像凹透镜，会把光线发散开形成暗纹（dark fringe），波峰才形成亮纹哦！',
            '',
            '亮纹确实对应波峰，但“亮纹到相邻暗纹”是“波峰到相邻波谷”，只有半个波长 $\\frac{1}{2}\\lambda$！',
            '恰恰相反！海绵多孔柔软，是为了吸收水波能量、消除槽壁反射干扰（prevent unwanted reflections）。'
          ],
          explanation: '水波的<strong>波峰（crest）</strong>相当于凸透镜，将光线会聚在白屏上形成<strong>亮纹（bright fringe）</strong>；波谷相当于凹透镜形成暗纹。相邻两波峰间距为一个波长 $\\lambda$，故相邻两亮纹间距对应一个波长 $\\lambda$（若平行光垂直投射无放大）。',
          markingKeywords: ['crests act as converging lenses → bright fringes', 'adjacent bright fringes = one wavelength λ']
        },
        {
          id: 'q-5-1-2',
          level: 2,
          levelLabel: '第二阶 · 频闪实验计算',
          stem: '某同学使用一个开有 <strong>$6$ 条均匀狭缝</strong>的手持频闪盘（stroboscope）观察水波槽中的直线水波。当频闪盘转速调至<strong>最高每秒 $4$ 转（$4\\text{ rev s}^{-1}$）</strong>时，水波波形恰好被“定格”且表观波长没有减半；量得相邻第 $1$ 条亮纹到第 $6$ 条亮纹的距离为 $15\\text{ cm}$。求水波的波速 $v$。',
          options: [
            '$v = 72\\text{ cm s}^{-1}$',
            '$v = 60\\text{ cm s}^{-1}$',
            '$v = 12\\text{ cm s}^{-1}$',
            '$v = 10\\text{ cm s}^{-1}$'
          ],
          answerIndex: 0,
          hint: '注意两个经典小细节！① 每转 1 圈有 6 条缝扫过眼睛，每秒转 4 圈，闪视频率 $f$ 是多少？② 从“第 1 条亮纹”数到“第 6 条亮纹”，中间隔了几个波长间隔（种树问题：$6 - 1 = 5$ 个）？',
          wrongDiagnostics: [
            '',
            '掉进“植树问题”小坑啦！第 1 条亮纹到第 6 条亮纹之间只有 $6 - 1 = 5$ 个波长间隔（不是 6 个！），所以 $\\lambda = \\frac{15}{5} = 3\\text{ cm}$，$v = 24 \\times 3 = 72\\text{ cm s}^{-1}$！',
            '忘了乘上圆盘上的 $6$ 条狭缝啦！圆盘每秒转 $4$ 圈，每圈看 $6$ 次，所以闪视频率 $f = 6 \\times 4 = 24\\text{ Hz}$！',
            '既漏乘了 $6$ 条狭缝，又把 $5$ 个间隔数成了 $6$ 个间隔哦，再按两步拆开算一次！'
          ],
          explanation: '1. <strong>求水波频率 $f$</strong>：最高无倍频定格时，$f = f_{\\text{strobe}} = n_{\\text{slits}} \\times f_{\\text{disc}} = 6 \\times 4 = 24\\text{ Hz}$。<br>2. <strong>求波长 $\\lambda$</strong>：第 $1$ 条到第 $6$ 条亮纹之间共有 $5$ 个间隔，故 $5\\lambda = 15\\text{ cm} \\Rightarrow \\lambda = 3\\text{ cm}$。<br>3. <strong>求波速 $v$</strong>：$v = f\\lambda = 24 \\times 3 = 72\\text{ cm s}^{-1}$。',
          markingKeywords: ['f = 6 × 4 = 24 Hz', '5λ = 15 cm → λ = 3 cm', 'v = fλ = 72 cm s⁻¹']
        },
        {
          id: 'q-5-1-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Straight water waves of frequency $15\\text{ Hz}$ and wavelength $2\\text{ cm}$ travel in a ripple tank. If the tank is illuminated by a stroboscopic lamp flashing at $30\\text{ Hz}$, what will a student observe on the screen?',
          cnTranslation: '频率为 $15\\text{ Hz}$、波长为 $2\\text{ cm}$ 的直线水波在水波槽中传播。如果用闪烁频率为 $30\\text{ Hz}$ 的频闪灯照射水波槽，学生在屏幕上会观察到什么现象？',
          options: [
            'Stationary bright fringes separated by $2\\text{ cm}$',
            'Stationary bright fringes separated by $1\\text{ cm}$',
            'Stationary bright fringes separated by $4\\text{ cm}$',
            'Moving fringes travelling at half the original speed'
          ],
          answerIndex: 1,
          hint: '水波周期 $T = \\frac{1}{15}\\text{ s}$，而频闪灯每隔 $\\frac{1}{30}\\text{ s} = \\frac{1}{2}T$ 就闪一次！过了半个周期 $\\frac{1}{2}T$，水波刚好向前挪了半个波长 $\\frac{1}{2}\\lambda = 1\\text{ cm}$——两次闪光叠在视网膜上会发生什么？',
          wrongDiagnostics: [
            '如果频闪灯以 $15\\text{ Hz}$（或 $7.5\\text{ Hz}$）闪烁，看到的才是间距 $2\\text{ cm}$ 的定格亮纹；现在闪快了一倍（每半个周期闪一次）哦！',
            '',
            '表观间距不会变宽成 $4\\text{ cm}$！哪怕灯闪得很慢（如 $7.5\\text{ Hz}$），波峰与波峰之间本身就只隔 $2\\text{ cm}$，不会凭空消失一半波峰的。',
            '因为 $30\\text{ Hz}$ 恰好是 $15\\text{ Hz}$ 的整数倍（2 倍），每次闪光时波峰都精确落在固定网格点上，所以条纹看起来是静止（stationary）的！'
          ],
          explanation: '水波周期为 $T = \\frac{1}{15}\\text{ s}$。频闪灯以 $30\\text{ Hz}$ 闪烁，即时间间隔为 $\\frac{1}{30}\\text{ s} = \\frac{1}{2}T$。每经过 $\\frac{1}{2}T$，整列水波向前推进半个波长 $\\frac{1}{2}\\lambda = 1\\text{ cm}$（原本波谷的位置也被后来推进了 $1\\text{ cm}$ 的波峰照亮）。在视觉暂留作用下，屏幕上会看到<strong>静止定格但间距减半为 $1\\text{ cm}$ 的亮纹</strong>！',
          markingKeywords: ['flashes every T/2', 'wave advances by λ/2 = 1 cm', 'stationary fringes separated by 1 cm']
        }
      ]
    },

    /* ========================================================================
       Section 5.2
       ======================================================================== */
    {
      id: '5.2',
      code: '5.2',
      titleCn: '波的反射与折射（深水区与浅水区）',
      titleEn: 'Reflection and Refraction of Waves',
      dseTag: '核心 + 延展 · Core & * Extension',
      realLifeHook: {
        title: '🏖️ 先从生活出发：为什么海浪不管从哪个方向吹来，最后总是“正对着沙滩”拍上岸？',
        html: `
          <p>去浅水湾或石澳海滩看海时，你会发现一个神奇现象：在外海深处，海浪明明是斜着吹过来的；可一旦靠近岸边的浅滩，海浪的阵线（波前）就会自动转弯，最后几乎<strong>平行于海岸线</strong>拍在沙滩上！</p>
          <p>再想一想：一排士兵手拉手斜着从平坦水泥地（走得快）踏进泥泞草地（走得慢）。<strong>先踩进泥地的那一侧士兵立刻减速，还在水泥地上的另一侧士兵继续大步快走</strong>——结果整排队伍就像汽车单侧踩刹车一样，自动向泥地法线方向转弯了！这就是水波从<strong>深水区（deep region）</strong>进入<strong>浅水区（shallow region）</strong>发生<strong>折射（refraction）</strong>的真正原因！</p>
        `
      },
      concepts: [
        {
          title: '1. 波的反射（Reflection of Waves）',
          html: `
            <ul>
              <li>水波遇到直挡板（straight barrier）会反弹回来，遵循与光完全相同的<strong>反射定律（law of reflection）</strong>：入射角 $i =$ 反射角 $r$（即入射波前与挡板的夹角 $=$ 反射波前与挡板的夹角）。</li>
              <li><strong>关键结论</strong>：反射前后水波仍在<strong>同一水深区域（同一介质）</strong>中传播，因此<strong>频率 $f$、波速 $v$、波长 $\\lambda$ 全部保持不变</strong>！改变的仅仅是传播方向（碰到刚性挡板还会损失少许能量使振幅略微减小）。</li>
              <li>若圆形波（点波源 $S$）射向直挡板，反射后的圆形波前看起来就像是从挡板后方等距对称的<strong>虚波源 $S'$（virtual image source）</strong>发出来的一样！（与 3A 平面镜成像完全一致！）</li>
            </ul>
          `
        },
        {
          title: '2. 波的折射（Refraction）：深水区 ↔ 浅水区全链路推理',
          html: `
            <p>在水波槽底放一块透明玻璃板或有机玻璃板（perspex plate），玻璃板上方的水变浅，形成<strong>浅水区（shallow region）</strong>。当水波从<strong>深水区斜射入浅水区</strong>时，请严格按以下四步因果链作答：</p>
            <div class="diagram-card">
              <svg viewBox="0 0 720 230" width="100%" aria-label="水波从深水区进入浅水区的折射图">
                <!-- Regions -->
                <rect x="30" y="15" width="330" height="200" fill="#e0f2fe" rx="8"/>
                <rect x="360" y="15" width="330" height="200" fill="#bae6fd" rx="8"/>
                <line x1="360" y1="15" x2="360" y2="215" stroke="#0369a1" stroke-width="2.5"/>
                <text x="50" y="42" fill="#0369a1" font-size="14" font-weight="bold">深水区 Deep region（v 大，λ 长）</text>
                <text x="380" y="42" fill="#0c4a6e" font-size="14" font-weight="bold">浅水区 Shallow region（v 小，λ 短）</text>

                <!-- Normal line -->
                <line x1="250" y1="115" x2="480" y2="115" stroke="#64748b" stroke-dasharray="6,4" stroke-width="1.5"/>
                <text x="255" y="108" fill="#475569" font-size="12">法线 Normal</text>

                <!-- Incident ray & Refracted ray -->
                <line x1="160" y1="55" x2="360" y2="115" stroke="#dc2626" stroke-width="2.5"/>
                <line x1="360" y1="115" x2="580" y2="148" stroke="#dc2626" stroke-width="2.5"/>
                <polygon points="270,83 282,91 268,93" fill="#dc2626"/>
                <polygon points="480,128 492,135 478,138" fill="#dc2626"/>
                <text x="150" y="155" fill="#dc2626" font-size="12" font-weight="bold">红线：传播方向（偏向法线 bends towards normal）</text>

                <!-- Incident wavefronts (wider spacing, perpendicular to incident ray) -->
                <g stroke="#0284c7" stroke-width="2.5">
                  <line x1="218" y1="30" x2="188" y2="130"/>
                  <line x1="266" y1="44" x2="236" y2="144"/>
                  <line x1="314" y1="58" x2="284" y2="158"/>
                  <line x1="360" y1="72" x2="332" y2="165"/>
                </g>
                <!-- Refracted wavefronts (closer spacing, connected at boundary!) -->
                <g stroke="#1d4ed8" stroke-width="2.5">
                  <line x1="360" y1="72" x2="346" y2="165"/>
                  <line x1="392" y1="77" x2="378" y2="170"/>
                  <line x1="424" y1="82" x2="410" y2="175"/>
                  <line x1="456" y1="87" x2="442" y2="180"/>
                  <line x1="488" y1="92" x2="474" y2="185"/>
                </g>
                <text x="380" y="204" fill="#1e3a8a" font-size="12" font-weight="bold">注意：波前在分界面上必须连续相接（因为频率 f 不变）！</text>
              </svg>
              <div class="diagram-caption">图 5.1：水波由深水区斜射入浅水区——波速减小、波长变短（波前变密），传播方向偏向法线。</div>
            </div>
            <ol>
              <li><strong>频率 $f$ 保持不变</strong>（<span class="term-en">frequency $f$ remains unchanged</span>，因为由同一个振动器产生）；</li>
              <li>在浅水区中，<strong>波速 $v$ 减慢</strong>（<span class="term-en">wave speed $v$ decreases</span>，$v_{\\text{shallow}} < v_{\\text{deep}}$）；</li>
              <li>根据 $v = f\\lambda$，因 $f$ 不变而 $v$ 减小，<strong>波长 $\\lambda$ 随之缩短</strong>（<span class="term-en">wavelength $\\lambda$ decreases</span>，波前间距变密）；</li>
              <li>传播方向<strong>偏向法线</strong>（<span class="term-en">bends towards the normal</span>，$\\theta_{\\text{shallow}} < \\theta_{\\text{deep}}$）。<em>（特例：若垂直分界面正射 $i = 0^\\circ$，传播方向不偏折，但 $v$ 和 $\\lambda$ 依然减小，依然属于折射！）</em></li>
            </ol>
          `
        }
      ],
      formulae: [
        {
          name: '波动折射通用关系（General Law of Refraction for Waves）',
          badge: '* Extension · 延展跨章公式',
          latex: '\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}',
          vars: [
            '$\\theta_1, \\theta_2$：介质 1、2 中的入射角与折射角（波传播方向与法线夹角，也等于波前与分界面夹角！）',
            '$v_1, v_2$：介质 1、2 中的波速（$\\text{m s}^{-1}$）',
            '$\\lambda_1, \\lambda_2$：介质 1、2 中的波长（$\\text{m}$）'
          ],
          condition: '因为跨介质时 $f_1 = f_2$，将 $v = f\\lambda$ 代入即得波速比等于波长比！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：水波斜射入浅水区时，4 个物理量怎么联动？',
        intro: 'DSE 长题目最爱考“Explain what happens to the water waves...”，顺着这 3 步就能写出滴水不漏的满分逻辑链：',
        steps: [
          {
            q: '追问 1：水波由同一个振动器拍击产生，从深水区跨过边界进入浅水区时，频率 $f$ 和波速 $v$ 分别怎么变？',
            options: [
              '频率 $f$ 不变（同一波源），浅水区波速 $v$ 减慢',
              '频率 $f$ 减慢，浅水区波速 $v$ 不变'
            ],
            answerIndex: 0,
            a: '第一步稳了！<strong>Frequency $f$ remains unchanged</strong>（波源决定），而浅水阻力效应使 <strong>wave speed $v$ decreases</strong>。'
          },
          {
            q: '追问 2：紧接着套用 $v = f\\lambda$：既然 $f$ 不变而 $v$ 变小了，浅水区里的波长 $\\lambda$（即相邻波前间距）必然怎样变化？',
            options: [
              '波长 $\\lambda$ 变短，波前变得更密集',
              '波长 $\\lambda$ 变长，波前变得更稀疏'
            ],
            answerIndex: 0,
            a: '第二步拿下！By $v = f\\lambda$，<strong>wavelength $\\lambda$ decreases</strong>，所以在折射作图时浅水区的波前间距一定要画得更窄！'
          },
          {
            q: '追问 3：当波前斜着进入浅水区，先踏入浅水的那一截波前先减速，还在深水的那一截走得快——整列波的传播方向会往哪边偏折？',
            options: [
              '偏向法线（bends towards the normal，折射角 $\\theta_2 < \\theta_1$）',
              '偏离法线（bends away from the normal，折射角 $\\theta_2 > \\theta_1$）'
            ],
            answerIndex: 0,
            a: '四步闭环完成！减速必<strong>偏向法线（bends towards the normal）</strong>，而且分界面两侧的波前端点必须连续相接、不能断开！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 3A 册 & 第 6.1 节（光的折射定律）',
          text: '3A 册光从空气射入玻璃减速偏向法线（$n = \\frac{c}{v}$），与 3B 水波从深水射入浅水减速偏向法线，背后遵循完全同一个公式！',
          targetSec: '6.1'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.2 节（声波昼夜折射）',
          text: '为什么夜晚远处的声音听得特别清楚？正是因为高空暖空气声速快、地面冷空气声速慢，声波折射弯回了地面！',
          targetSec: '7.2'
        }
      ],
      traps: [
        {
          wrong: '误区 1：当水波垂直于分界面（入射角 $i = 0^\\circ$）从深水进入浅水时，因为不拐弯，所以“没有发生折射，波长也不变”。',
          right: '真相：HKDSE 超高频陷阱！折射的本质是跨介质波速改变！正射时方向虽不偏转，但波速 $v$ 依然减小、波长 $\\lambda$ 依然缩短！'
        },
        {
          wrong: '误区 2：画折射波前图时，浅水区的波前跟深水区的波前在分界面上“错位断开”了。',
          right: '真相：扣分重灾区！因为两侧频率相同，深水区每到达一条波峰，浅水区就必须衔接出发一条波峰——分界面两侧的波前端点必须一一对齐相连！'
        }
      ],
      linkedLab: {
        labId: 'lab3',
        title: '实验 3：水波槽折射与衍射工作台',
        prompt: '在实验 3「折射模式」中拖动入射角滑块（包括试试 0° 正射！），观察波前在深浅水分界面上如何连续转折并变密！'
      },
      questions: [
        {
          id: 'q-5-2-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '一列直线水波<strong>垂直于分界面</strong>（入射角为 $0^\\circ$）从深水区传入浅水区。在此过程中，水波的频率 $f$、波长 $\\lambda$ 和传播方向分别怎样变化？',
          options: [
            '$f$ 减小，$\\lambda$ 减小，方向不变',
            '$f$ 不变，$\\lambda$ 不变，方向不变',
            '$f$ 不变，$\\lambda$ 减小，方向不变',
            '$f$ 不变，$\\lambda$ 减小，偏向法线转弯'
          ],
          answerIndex: 2,
          hint: '先默念口诀：换介质时谁永远不变？浅水区跑得慢，按 $v = f\\lambda$ 波长怎么变？既然本来就是沿着法线（$0^\\circ$）直着进去的，还能往哪边偏？',
          wrongDiagnostics: [
            '频率 $f$ 只由振源决定，跨过深浅水分界面时 $f$ 绝对不变！',
            '虽然正射（$0^\\circ$）不拐弯，但进入浅水区波速 $v$ 实实在在变慢了！由 $v = f\\lambda$ 可知波长 $\\lambda$ 一定会缩短（波前变密）！',
            '',
            '原本就已经沿着法线走（入射角 $0^\\circ$）啦，折射角也是 $0^\\circ$，所以传播方向保持直线不转弯！'
          ],
          explanation: '垂直入射（$i = 0^\\circ$）时传播方向不偏折（$\\theta_2 = 0^\\circ$）；但水波进入浅水区后<strong>波速 $v$ 减小</strong>，而<strong>频率 $f$ 由振源决定保持不变</strong>，由 $v = f\\lambda$ 可知<strong>波长 $\\lambda$ 必然减小</strong>（波前间距变窄）。',
          markingKeywords: ['frequency unchanged', 'speed decreases in shallow water → wavelength decreases', 'direction unchanged at normal incidence']
        },
        {
          id: 'q-5-2-2',
          level: 2,
          levelLabel: '第二阶 · 定量折射计算',
          stem: '在水波槽中，深水区的直线波前与分界面的夹角为 $60^\\circ$，波长为 $3.0\\text{ cm}$；进入浅水区后，折射波前与分界面的夹角变为 $30^\\circ$。已知深水区波速为 $18\\text{ cm s}^{-1}$，求浅水区的波长 $\\lambda_2$ 和波速 $v_2$。（提示：$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}, \\sin 30^\\circ = \\frac{1}{2}$）',
          options: [
            '$\\lambda_2 = \\sqrt{3}\\text{ cm}$，$v_2 = 6\\sqrt{3}\\text{ cm s}^{-1}$',
            '$\\lambda_2 = 1.5\\text{ cm}$，$v_2 = 9.0\\text{ cm s}^{-1}$',
            '$\\lambda_2 = \\sqrt{3}\\text{ cm}$，$v_2 = 18\\text{ cm s}^{-1}$',
            '$\\lambda_2 = 3\\sqrt{3}\\text{ cm}$，$v_2 = 18\\sqrt{3}\\text{ cm s}^{-1}$'
          ],
          answerIndex: 0,
          hint: '几何小提醒：“波前与分界面的夹角”正好等于“传播方向与法线的夹角 $\\theta$”！直接套用 $\\frac{\\sin 60^\\circ}{\\sin 30^\\circ} = \\frac{\\lambda_1}{\\lambda_2} = \\frac{v_1}{v_2}$ 算一算比值是多少（是 $2$ 还是 $\\sqrt{3}$？）。',
          wrongDiagnostics: [
            '',
            '不小心把角度比 $\\frac{60^\\circ}{30^\\circ} = 2$ 当成正弦比啦！折射定律用的是 $\\frac{\\sin 60^\\circ}{\\sin 30^\\circ} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$ 哦！',
            '波长算对了！但进入浅水区波速怎么可能不变呢？$\\frac{v_1}{v_2} = \\sqrt{3} \\Rightarrow v_2 = \\frac{18}{\\sqrt{3}} = 6\\sqrt{3}\\text{ cm s}^{-1}$。',
            '乘除反啦！浅水区波速更慢、波长更短，应该除以 $\\sqrt{3}$，而不是乘以 $\\sqrt{3}$！'
          ],
          explanation: '波前与界面的夹角即等于入射角/折射角：$\\theta_1 = 60^\\circ, \\theta_2 = 30^\\circ$。<br>由折射公式 $\\frac{\\sin\\theta_1}{\\sin\\theta_2} = \\frac{\\lambda_1}{\\lambda_2} = \\frac{v_1}{v_2}$ 得比值：$\\frac{\\sin 60^\\circ}{\\sin 30^\\circ} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$。<br>故 $\\lambda_2 = \\frac{3.0}{\\sqrt{3}} = \\sqrt{3}\\text{ cm} \\approx 1.73\\text{ cm}$，$v_2 = \\frac{18}{\\sqrt{3}} = 6\\sqrt{3}\\text{ cm s}^{-1} \\approx 10.4\\text{ cm s}^{-1}$。',
          markingKeywords: ['sin θ₁ / sin θ₂ = v₁ / v₂ = λ₁ / λ₂', 'ratio = sin 60° / sin 30° = √3']
        },
        {
          id: 'q-5-2-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Plane water waves travel towards a convex-shaped shallow region (formed by placing a convex perspex lens flat at the bottom of a ripple tank). What happens to the plane waves after passing over the shallow region?',
          cnTranslation: '平面直线水波射向一块凸透镜形状的浅水区（通过在水波槽底部平放一块凸形有机玻璃板形成）。平面水波穿过这片浅水区后会发生什么现象？',
          options: [
            'They diverge as if coming from a virtual focus because waves travel faster over the plate.',
            'They converge towards a focus because the middle part of the wavefront is slowed down for a longer distance than the edges.',
            'They pass straight through without bending because frequency remains constant.',
            'They reflect completely back into the deep region.'
          ],
          answerIndex: 1,
          hint: '和 3A 册玻璃凸透镜聚光一模一样！凸形浅水区中间厚（路径长）、上下边缘薄（路径短）。水波在浅水区走得慢，波前中间部分被“拖慢”得最多，两端走得快包抄过来——波前会向内凹进去会聚，还是向外散开？',
          wrongDiagnostics: [
            '在浅水区水波走得更慢（slower），不是更快！如果是凹透镜形状的浅水区才会发散哦。',
            '',
            '只有整条波前同时进入平直边界才不转弯；现在边界是弧形的，波前不同部位减速路程不同，必然发生弯曲会聚！',
            '水波可以顺利漫过浅水板表面，主要发生折射而非全反射。'
          ],
          explanation: '凸形有机玻璃板上方为<strong>浅水区，波速较慢</strong>。平面波穿过时，<strong>波前中央部分经过最宽的浅水区，被减速的时间最长</strong>，而上下边缘经过深水区（或极短浅水区）跑得快、向前超车，导致出射波前变成向内凹的圆弧，<strong>向焦点会聚（converge towards a focus）</strong>——这与玻璃凸透镜会聚光波的物理本质完全一致！',
          markingKeywords: ['waves travel slower in the shallow region', 'central part of wavefront slowed down more than edges', 'converge towards a focus']
        }
      ]
    },

    /* ========================================================================
       Section 5.3
       ======================================================================== */
    {
      id: '5.3',
      code: '5.3',
      titleCn: '波的衍射（绕射）',
      titleEn: 'Diffraction of Waves',
      dseTag: '高频定性对比 · Core',
      realLifeHook: {
        title: '🚢 先从生活出发：避风塘防波堤的缺口，为什么不能修得太宽？',
        html: `
          <p>香港有许多避风塘（typhoon shelters），外围筑有两道防波堤，中间留一个缺口让渔船进出。工程师设计缺口宽度时有个奇妙的纠结：如果缺口太窄，不仅大船难进，外海涌进来的巨浪穿过窄口后竟会像扇子一样<strong>向四面八方散开（明显衍射）</strong>，连躲在防波堤角落里的船都会被摇晃；可如果利用不同波长与缺口的比例合理设计，就能在通航与挡浪之间找到最佳平衡！</p>
        `
      },
      concepts: [
        {
          title: '1. 什么是衍射（Diffraction）？什么变了、什么没变？',
          html: `
            <ul>
              <li><span class="term">衍射（绕射）</span><span class="term-en">diffraction</span>：波在绕过障碍物边缘（around an obstacle）或穿过狭缝/缺口（through a gap / slit）时，<strong>向几何阴影区扩展弯曲（spreading / bending of waves）</strong>的现象。</li>
              <li><strong>铁律（必背！）</strong>：衍射前后的波始终在同一种均匀水深/介质中传播，因此：
                <ul>
                  <li><strong>频率 $f$ 不变、波速 $v$ 不变、波长 $\\lambda$ 也绝对不变！</strong>（画衍射图时，穿过狭缝后的圆弧波前间距必须与入射直线波前间距<strong>严格相等</strong>！）</li>
                  <li>唯一减小的是<strong>振幅 $A$</strong>（因为通过狭缝的有限能量散开分布在越来越长的圆弧波前上，单位长度能量减小）。</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          title: '2. 衍射明显程度（Degree of Diffraction）由谁决定？',
          html: `
            <p>衍射明不明显，<strong>不单看缝宽 $a$，也不单看波长 $\\lambda$，而是看狭缝宽度 $a$（或障碍物尺寸）与波长 $\\lambda$ 的相对大小</strong>：</p>
            <div class="diagram-card">
              <svg viewBox="0 0 700 190" width="100%" aria-label="宽缝与窄缝衍射对比图">
                <!-- Left: Wide gap a >> lambda -->
                <text x="20" y="24" fill="#1e40af" font-size="13.5" font-weight="bold">(a) 宽缝 Wide gap (a &gt;&gt; λ)：衍射不明显（仅边缘微弯）</text>
                <g stroke="#0284c7" stroke-width="2.2">
                  <line x1="40" y1="45" x2="40" y2="170"/><line x1="65" y1="45" x2="65" y2="170"/><line x1="90" y1="45" x2="90" y2="170"/>
                </g>
                <line x1="115" y1="38" x2="115" y2="68" stroke="#334155" stroke-width="6"/>
                <line x1="115" y1="147" x2="115" y2="177" stroke="#334155" stroke-width="6"/>
                <g stroke="#2563eb" stroke-width="2.2" fill="none">
                  <path d="M 135 66 Q 140 72, 140 80 L 140 135 Q 140 143, 135 149"/>
                  <path d="M 158 62 Q 165 70, 165 80 L 165 135 Q 165 145, 158 153"/>
                  <path d="M 181 58 Q 190 68, 190 80 L 190 135 Q 190 147, 181 157"/>
                  <path d="M 204 54 Q 215 66, 215 80 L 215 135 Q 215 149, 204 161"/>
                </g>

                <!-- Right: Narrow gap a <= lambda -->
                <text x="370" y="24" fill="#0d9488" font-size="13.5" font-weight="bold">(b) 窄缝 Narrow gap (a ≤ λ)：衍射极其明显（近乎半圆形扩展）</text>
                <g stroke="#0284c7" stroke-width="2.2">
                  <line x1="390" y1="45" x2="390" y2="170"/><line x1="415" y1="45" x2="415" y2="170"/><line x1="440" y1="45" x2="440" y2="170"/>
                </g>
                <line x1="465" y1="38" x2="465" y2="97" stroke="#334155" stroke-width="6"/>
                <line x1="465" y1="118" x2="465" y2="177" stroke="#334155" stroke-width="6"/>
                <g stroke="#0d9488" stroke-width="2.2" fill="none">
                  <path d="M 465 82 A 25 25 0 0 1 465 132"/>
                  <path d="M 465 57 A 50 50 0 0 1 465 157"/>
                  <path d="M 465 38 A 75 75 0 0 1 465 177"/>
                </g>
              </svg>
              <div class="diagram-caption">图 5.2：保持波长 λ 不变，当狭缝宽度 a 缩小至与 λ 相近或更小时，衍射显著增强；注意左右两图穿过狭缝前后波长 λ 始终不变！</div>
            </div>
            <ul>
              <li>当<strong>缝宽远大于波长（$a \\gg \\lambda$）</strong>时：衍射很微弱（less pronounced），大部分波沿直线前进，只有边缘轻微弯曲，障碍物后方有清晰的阴影区（shadow region）。</li>
              <li>当<strong>缝宽与波长相近或比波长更小（$a \\approx \\lambda$ 或 $a < \\lambda$）</strong>时：衍射非常明显（<strong>pronounced / significant diffraction</strong>），穿过狭缝后的波前几乎呈半圆形向四周散开！</li>
              <li><strong>怎样让水波槽里的衍射更明显？</strong>两个办法：① <strong>把狭缝调窄</strong>（减小 $a$，但别窄到完全挡死能量太弱看不见）；② <strong>把振动器频率 $f$ 调低</strong>（因为 $v$ 不变，$f$ 减小 $\\Rightarrow \\lambda$ 变长！）。</li>
            </ul>
          `
        }
      ],
      formulae: [],
      guidedChain: {
        title: '🧭 连环追问推导：为什么窄门挡不住声音，却能挡住手电筒的光？',
        intro: '抓住衍射唯一的裁判标准——“波长 $\\lambda$ 与缝宽 $a$ 谁大谁小”：',
        steps: [
          {
            q: '追问 1：直线水波穿过同一水深槽中的一道狭缝发生衍射（散开）后，它的波速 $v$、频率 $f$ 和波长 $\\lambda$ 会改变吗？',
            options: [
              '$v, f, \\lambda$ 全部保持不变（仅振幅因能量散开而减小）',
              '狭缝越窄，穿过后的波长 $\\lambda$ 被挤得越短'
            ],
            answerIndex: 0,
            a: '作图保命铁律！水深没变（$v$ 不变）、振源没变（$f$ 不变），所以穿过狭缝后圆弧波前的间距（波长 $\\lambda$）与入射前<strong>严格相等</strong>！'
          },
          {
            q: '追问 2：什么时候穿过狭缝后的水波会散成最明显的半圆形（pronounced diffraction）？',
            options: [
              '当狭缝宽度 $a$ 远大于波长 $\\lambda$（$a \\gg \\lambda$）时',
              '当狭缝宽度 $a$ 与波长 $\\lambda$ 相近或更小（$a \\approx \\lambda$ 或 $a < \\lambda$）时'
            ],
            answerIndex: 1,
            a: '完全正确！只有当障碍物或缝宽尺寸 $a$ 与波长 $\\lambda$ 差不多甚至更小时，波才会大幅度拐进阴影区！'
          },
          {
            q: '追问 3：教室房门宽约 $a = 1\\text{ m}$。说话声波的波长约 $0.5\\text{ m}$，可见光的波长只有 $5 \\times 10^{-7}\\text{ m}$。谁经过房门会发生明显衍射？',
            options: [
              '声波明显衍射（$\\lambda \\approx a$），光波衍射极微弱几乎走直线（$\\lambda \\ll a$）',
              '光波衍射更明显，因为光速更快'
            ],
            answerIndex: 0,
            a: '瞬间打通第 5、6、7 三章！这就是“未见其人、先闻其声”的满分英文解释逻辑！'
          }
        ]
      },
      relations: [
        {
          dir: '⏭️ 后续铺垫 → 第 6.1 & 6.4 节（光波与无线电波的衍射）',
          text: '为什么长波收音机信号能绕过山坡传进山谷，而波长短的电视信号/可见光却会被大楼挡住？全都是因为“波长 λ 与山坡/门框尺寸相比是大还是小”！',
          targetSec: '6.4'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.2 节（隔墙闻其声不见其人）',
          text: '声波波长约 0.3–3 m（与约 1 m 宽的房门相当），光波波长仅约 0.0000005 m（远小于房门）——这一节直接解释了为什么你能听见门外妈妈叫你却看不见她！',
          targetSec: '7.2'
        }
      ],
      traps: [
        {
          wrong: '误区 1：把狭缝调得越来越窄时，穿过狭缝的水波波长 $\\lambda$ 也会跟着被“挤短”。',
          right: '真相：绝对不会！狭缝宽度只改变波前散开的角度（衍射程度）和透过的能量（振幅），水深和频率都没变，波长 $\\lambda$ 纹丝不动！'
        },
        {
          wrong: '误区 2：想让衍射更明显，顺手把振源频率 $f$ 调高。',
          right: '真相：刚好调反！调高频率 $f$ 会使波长 $\\lambda$ 变短，导致 $a \\gg \\lambda$，衍射反而变得更不明显！应当调低频率 $f$ 来增大波长 $\\lambda$。'
        }
      ],
      linkedLab: {
        labId: 'lab3',
        title: '实验 3：切换到「衍射模式」调缝宽 a 与波长 λ',
        prompt: '亲自把缝宽 a 从 5λ 慢慢拖小到 1λ，看直线波前如何一步步变成完美的同心半圆弧！'
      },
      questions: [
        {
          id: 'q-5-3-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '在水波槽中，波长为 $2\\text{ cm}$ 的直线水波穿过一个宽为 $1.8\\text{ cm}$ 的狭缝。穿过狭缝后，水波会发生什么变化？',
          options: [
            '呈近似圆形大幅度散开，且波长变为 $1.8\\text{ cm}$',
            '呈近似圆形大幅度散开，但波长仍保持 $2\\text{ cm}$ 不变',
            '几乎不弯曲地直穿过去，因为狭缝宽度小于波长',
            '波速明显加快，因为狭缝处水流变急'
          ],
          answerIndex: 1,
          hint: '先比大小：缝宽 $a = 1.8\\text{ cm}$ 比波长 $\\lambda = 2\\text{ cm}$ 还要略小（$a \\le \\lambda$），衍射明不明显？再默念衍射铁律：穿过狭缝前后，$v, f, \\lambda$ 改不改变？',
          wrongDiagnostics: [
            '前半句“近似圆形散开”判断对了！但千万记住：衍射绝不改变波长，穿过狭缝后波长依然是 $2\\text{ cm}$！',
            '',
            '正好说反啦！狭缝宽度小于或接近波长时，衍射是最明显的（pronounced diffraction），会大幅散开，而不是直穿过去！',
            '水波传播的是波形而非水流输运，水深不变时波速 $v$ 恒定不变！'
          ],
          explanation: '由于狭缝宽度 $a = 1.8\\text{ cm} \\le \\lambda = 2\\text{ cm}$，水波发生<strong>非常明显的衍射（pronounced diffraction）</strong>，波前呈近乎圆形散开；由于水深与振源频率均未改变，波速 $v$、频率 $f$ 与<strong>波长 $\\lambda = 2\\text{ cm}$ 均保持不变</strong>。',
          markingKeywords: ['gap width comparable to / smaller than wavelength', 'pronounced circular diffraction', 'wavelength remains 2 cm']
        },
        {
          id: 'q-5-3-2',
          level: 2,
          levelLabel: '第二阶 · 实验调节推理',
          stem: '某同学在水波槽中做单缝衍射实验，发现穿过狭缝后的水波几乎只走直线、衍射现象非常微弱。下列哪组操作<strong>最能让衍射现象变得明显</strong>？',
          options: [
            '调高振动器的频率 $f$，同时把狭缝调宽',
            '调低振动器的频率 $f$，同时把狭缝调窄',
            '调高振动器的频率 $f$，同时把狭缝调窄',
            '不改狭缝宽度，但把槽里的水抽走一半使水变浅'
          ],
          answerIndex: 1,
          hint: '目标是让“波长 $\\lambda$ 尽可能大、缝宽 $a$ 尽可能小”！同一水深下，$v = f\\lambda$ 中想让 $\\lambda$ 变大，频率 $f$ 该调高还是调低？（顺便想一下 D 选项：水变浅会让波速变慢、$\\lambda$ 变短，反而不利哦！）',
          wrongDiagnostics: [
            '两个操作全反啦！调高 $f$ 让 $\\lambda$ 变短，调宽狭缝让 $a$ 变大，衍射会更看不见！',
            '',
            '把狭缝调窄是对的，但调高频率 $f$ 会缩短波长 $\\lambda$，两相抵消甚至变差；调低频率才能增大 $\\lambda$！',
            '好险！很多同学会误选这个！水变浅会使波速 $v$ 减小，在 $f$ 不变时波长 $\\lambda$ 反而变短了，衍射会变得更微弱！'
          ],
          explanation: '要增强衍射，需增大波长 $\\lambda$ 或减小缝宽 $a$（使 $a \\approx \\lambda$）。保持水深不变（$v$ 不变）时，<strong>调低频率 $f$</strong> 可使波长 $\\lambda = \\frac{v}{f}$ 增大；同时<strong>调窄狭缝</strong>减小 $a$，双管齐下使衍射最显著。',
          markingKeywords: ['decrease frequency f to increase wavelength λ', 'narrow the gap width a']
        },
        {
          id: 'q-5-3-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'A hillside village can receive FM radio broadcasts of frequency $100\\text{ MHz}$ poorly, while AM radio broadcasts of frequency $1\\text{ MHz}$ from the same transmitting tower behind the hill can be received clearly. ($1\\text{ MHz} = 10^6\\text{ Hz}$, speed of radio waves $= 3.0 \\times 10^8\\text{ m s}^{-1}$). Which statement best explains this?',
          cnTranslation: '山坡背后的村庄接收来自山后同一发射塔的 $100\\text{ MHz}$ 调频（FM）广播信号很差，却能清晰接收到 $1\\text{ MHz}$ 的调幅（AM）广播信号。下列哪项最能解释这一现象？',
          options: [
            'AM radio waves travel faster in air than FM radio waves.',
            'AM radio waves have a higher energy and can penetrate through the rocky hill.',
            'AM radio waves have a much longer wavelength ($300\\text{ m}$), comparable to the size of the hill, so they diffract much more around the hill.',
            'FM radio waves are longitudinal waves while AM radio waves are transverse waves.'
          ],
          answerIndex: 2,
          hint: '用 $c = f\\lambda$ 口算一下两者的波长：AM 波 $\\lambda = \\frac{3.0\\times 10^8}{10^6} = 300\\text{ m}$（跟一座小山差不多大！），FM 波 $\\lambda = \\frac{3.0\\times 10^8}{10^8} = 3\\text{ m}$（远小于小山）！而且所有无线电波在空气中波速一样吗？',
          wrongDiagnostics: [
            '所有电磁波（包括 AM 和 FM 无线电波）在空气/真空中的波速完全相同，都是 $3.0 \\times 10^8\\text{ m s}^{-1}$！',
            '无线电波并不能直接穿透厚实的岩石山体，且频率更低的 AM 波光子能量反而更小，靠的是绕过山顶的衍射！',
            '',
            'AM 和 FM 都是无线电波（电磁波），100% 都是横波（transverse waves）！'
          ],
          explanation: '这是一道经典的 HKDSE 跨章应用题：所有无线电波波速均为 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$。<br>• AM 电波波长 $\\lambda_{\\text{AM}} = \\frac{3.0 \\times 10^8}{1 \\times 10^6} = 300\\text{ m}$，与山丘尺寸相当，因此绕过山丘时发生<strong>明显衍射（significant diffraction）</strong>到达村庄。<br>• FM 电波波长 $\\lambda_{\\text{FM}} = \\frac{3.0 \\times 10^8}{100 \\times 10^6} = 3.0\\text{ m}$，远小于山丘尺寸，衍射微弱，村庄落入信号阴影区。',
          markingKeywords: ['AM has longer wavelength (300 m vs 3 m)', 'wavelength comparable to size of hill', 'diffracts more significantly around the hill']
        }
      ]
    },

    /* ========================================================================
       Section 5.4
       ======================================================================== */
    {
      id: '5.4',
      code: '5.4',
      titleCn: '叠加原理与双波源干涉',
      titleEn: 'Principle of Superposition and Interference',
      dseTag: '核心 + 延展计算 · Core & * Extension',
      realLifeHook: {
        title: '🎧 先从生活出发：主动降噪耳机为什么“用声音就能消灭噪音”？',
        html: `
          <p>按理说，“一个声音 + 另一个声音”应该更吵才对，为什么戴上 AirPods Pro 等<strong>主动降噪耳机（Active Noise-Cancelling Headphones）</strong>开启降噪的瞬间，地铁轰鸣声竟然消失了？</p>
          <p>秘密就在于<strong>波的叠加（superposition）与相消干涉（destructive interference）</strong>！耳机外侧麦克风捕捉到外界噪音的波峰与波谷后，芯片瞬间计算并让耳机喇叭发出一列<strong>振幅相等、但刚好反相（你来波峰 $+A$，我就给你波谷 $-A$）</strong>的声波。两者在耳道里相遇：$(+A) + (-A) = 0$！两列实实在在的波加在一起，居然能抵消成一片宁静！</p>
        `
      },
      concepts: [
        {
          title: '1. 叠加原理（Principle of Superposition）与独立传播',
          html: `
            <ul>
              <li><span class="term">叠加原理</span><span class="term-en">principle of superposition</span>：当两列或多列波在空间某点相遇重叠时，该点在任意时刻的<strong>合位移（resultant displacement）</strong>等于每列波单独在该点引起的位移的<strong>代数和 / 矢量和（algebraic / vector sum）</strong>。</li>
              <li><strong>穿过彼此后互不影响</strong>：两列反向行进的波脉冲相遇叠加后，会<strong>完全恢复各自原来的形状、振幅与波速继续前进</strong>，就像从未撞见过对方一样！</li>
            </ul>
          `
        },
        {
          title: '2. 相干波源（Coherent Sources）与波程差（Path Difference）',
          html: `
            <p>在水波槽中把两个小球振子（dippers $S_1, S_2$）装在<strong>同一个振动横杆</strong>上拍水，就能产生稳定的干涉图样。为什么必须装在同一个振动器上？</p>
            <ul>
              <li>因为要看见<strong>稳定可观测的干涉图样（steady / observable interference pattern）</strong>，两波源必须是<span class="term">相干波源</span><span class="term-en">coherent sources</span>——即具有<strong>相同的频率 $f$（same frequency）</strong>且保持<strong>恒定的相位差（constant phase difference，例如始终同相 in phase 或始终反相 in antiphase）</strong>。</li>
              <li>对于水面任意一点 $P$，它到两个波源的距离之差叫做<span class="term">波程差（程差）</span><span class="term-en">path difference</span>：
                $$\\Delta = |S_1P - S_2P|$$
              </li>
            </ul>
            <table class="compare-table">
              <thead>
                <tr>
                  <th>干涉类型（设两波源<strong>同相振动 in phase</strong>，振幅均为 $A$）</th>
                  <th>相长干涉（Constructive Interference）</th>
                  <th>相消干涉（Destructive Interference）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>相遇方式</strong></td>
                  <td>两列波到达 $P$ 点时<strong>同相（in phase）</strong>：<br>峰遇峰（$+A + A = +2A$），半周期后谷遇谷（$-A - A = -2A$）</td>
                  <td>两列波到达 $P$ 点时<strong>反相（in antiphase）</strong>：<br>永远是峰遇谷（$+A + (-A) = 0$）</td>
                </tr>
                <tr>
                  <td><strong>波程差条件（同相波源！）</strong></td>
                  <td>$$\\Delta = n\\lambda \\quad (n = 0, 1, 2, 3, \\dots)$$</td>
                  <td>$$\\Delta = \\left(n + \\frac{1}{2}\\right)\\lambda \\quad (n = 0, 1, 2, 3, \\dots)$$</td>
                </tr>
                <tr>
                  <td><strong>合振幅与质点状态</strong></td>
                  <td>合振幅最大 $= 2A$（水面在 $+2A$ 与 $-2A$ 之间<strong>剧烈上下振动</strong>！）</td>
                  <td>合振幅最小 $= 0$（水面<strong>始终平静不动 permanently calm</strong>！若两波原振幅不等 $A_1 \\neq A_2$，则合振幅为 $|A_1 - A_2|$）</td>
                </tr>
                <tr>
                  <td><strong>连成的轨迹线名称</strong></td>
                  <td><span class="term">腹线</span><span class="term-en">antinodal lines</span>（正中央 $\\Delta = 0$ 为第 $0$ 级腹线）</td>
                  <td><span class="term">节线</span><span class="term-en">nodal lines</span>（夹在相邻两条腹线之间）</td>
                </tr>
              </tbody>
            </table>
            <p><strong>⚠️ 变式大招（两波源反相振动 in antiphase）</strong>：如果题目特别说明 $S_1$ 和 $S_2$ 是<strong>反相振动（一上一下）</strong>，出发时就已经差了半个波！上面表格中的两个公式<strong>完全互换</strong>——中央连线（$\\Delta = 0$）反而变成平静无波的<strong>节线（destructive）</strong>，而 $\\Delta = \\left(n + \\frac{1}{2}\\right)\\lambda$ 变成<strong>腹线（constructive）</strong>！</p>
          `
        },
        {
          title: '3. 改变波长 $\\lambda$ 或波源间距 $a$ 对节线/腹线疏密的影响',
          html: `
            <ul>
              <li><strong>增大波长 $\\lambda$（调低频率 $f$）</strong> 或 <strong>减小两波源间距 $a$</strong> $\\Rightarrow$ 腹线与节线像扇子张开一样<strong>变疏、间距变宽（more widely spaced）</strong>，总条数减少！</li>
              <li><strong>减小波长 $\\lambda$（调高频率 $f$）</strong> 或 <strong>增大两波源间距 $a$</strong> $\\Rightarrow$ 腹线与节线<strong>变密、间距变窄（more closely spaced）</strong>，总条数增多！</li>
              <li><em>附赠神速数条纹技巧</em>：两波源连线上外侧任意点的最大波程差不可能超过波源间距 $a$（三角形两边之差小于等于第三边：$\\Delta \\le a$）。例如 $a = 3.2\\text{ cm}, \\lambda = 1.0\\text{ cm}$（同相波源），最大级数 $n_{\\max} = 3$，所以共有 $1$ 条中央腹线（$n=0$）$+$ 左右各 $3$ 条腹线（$n=1,2,3$）$= 7$ 条腹线！</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '两同相相干波源的干涉程差条件（In-phase Coherent Sources）',
          badge: '* Extension · 必背核心判据',
          latex: '\\Delta = |S_1P - S_2P| = \\begin{cases} n\\lambda & \\text{相长干涉 Constructive (antinodal lines)} \\\\ \\left(n + \\frac{1}{2}\\right)\\lambda & \\text{相消干涉 Destructive (nodal lines)} \\end{cases} \\quad (n = 0, 1, 2, \\dots)',
          vars: [
            '$\\Delta$：点 $P$ 到两波源 $S_1, S_2$ 的波程差 path difference（$\\text{m}$）',
            '$\\lambda$：波长 wavelength（$\\text{m}$）',
            '$n$：级数 order（非负整数 $0, 1, 2, \\dots$）'
          ],
          condition: '⚠️ 仅当两波源同相振动（vibrating in phase）时直接适用！若两波源反相（in antiphase），相长与相消条件对调！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：波程差 $\\Delta$ 怎样决定“加强”还是“抵消”？',
        intro: '假设两个波源 $S_1, S_2$ 同步同相拍水（同时送出波峰，波长 $\\lambda = 2\\text{ cm}$，振幅均为 $A$）：',
        steps: [
          {
            q: '追问 1：水面某点 $P$ 离 $S_1$ 距离 $6\\text{ cm}$（刚好 $3\\lambda$），离 $S_2$ 距离 $8\\text{ cm}$（刚好 $4\\lambda$）。两列波走的路程差了 $\\Delta = 2\\text{ cm} = 1\\lambda$，当 $S_1$ 的波峰到达 $P$ 时，$S_2$ 到达 $P$ 的是什么？',
            options: [
              '也是波峰（早一拍出发的前一个波峰刚好赶到！同相叠加）',
              '是波谷（反相抵消）'
            ],
            answerIndex: 0,
            a: '秒懂！因为多走了整整 $1\\lambda$，两个波峰同步会师（半周期后两个波谷同步会师），发生<strong>相长干涉（constructive interference）</strong>！'
          },
          {
            q: '追问 2：那在相长干涉点 $P$，水面是一直定格在最高点 $+2A$ 不动，还是在 $+2A$ 与 $-2A$ 之间上下振动？',
            options: [
              '以 $2A$ 为振幅在 $+2A$ 与 $-2A$ 之间剧烈上下振动（中间也会经过 $0$！）',
              '永远停留在 $+2A$ 的水峰上不动'
            ],
            answerIndex: 0,
            a: '避开了 DSE 头号陷阱！相长干涉只是<strong>合振幅翻倍（amplitude $= 2A$）</strong>，水面依然每半周期经过一次零位移平衡位置！'
          },
          {
            q: '追问 3：如果另一点 $Q$ 的波程差是 $\\Delta = 3\\text{ cm} = 1.5\\lambda$（半波长的奇数倍），$S_1$ 来波峰（$+A$）时 $S_2$ 永远来波谷（$-A$），$Q$ 点会发生什么？',
            options: [
              '相消干涉（destructive interference），合振幅为 $0$，水面始终平静',
              '振幅减半为 $0.5A$'
            ],
            answerIndex: 0,
            a: '完美推导！$(+A) + (-A) = 0$，这就是位于节线（nodal line）上的完全相消干涉！'
          }
        ]
      },
      relations: [
        {
          dir: '⏭️ 后续铺垫 → 第 6.2 & 6.3 节（杨氏双缝与衍射光栅）',
          text: '水波槽里“增大 λ 或减小间距 a 会让腹线变宽”的定性规律，到了第 6 章直接升级为精确公式 $\\Delta y = \\frac{\\lambda D}{a}$！原理一模一样！',
          targetSec: '6.2'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.3 节（双扬声器声干涉）',
          text: '把两个水波振子换成两个接同一信号发生器的喇叭：腹线变成“响声（loud sound）”，节线变成“弱声（soft sound）”！',
          targetSec: '7.3'
        }
      ],
      traps: [
        {
          wrong: '误区 1（HKDSE 史上第一大坑！）：相长干涉点 P 的合振幅是 2A，所以“P 点的水面永远停留在 +2A 的最高波峰处不动”！',
          right: '真相：错错错！水不可能违背重力悬在空中！相长干涉点 P 是以 2A 为振幅剧烈上下振动：此刻峰遇峰在 +2A，过 T/4 两个零位移相遇经过 0（平衡水面！），过 T/2 谷遇谷掉到 -2A！'
        },
        {
          wrong: '误区 2：以为只要是“波峰遇波峰”才叫相长干涉，“波谷遇波谷”是相消干涉。',
          right: '真相：波谷遇波谷（-A + -A = -2A）位移幅度翻倍，同样是 100% 的相长干涉（constructive interference）！只有“峰遇谷”才是相消干涉！'
        }
      ],
      linkedLab: {
        labId: 'lab4',
        title: '实验 4：双波源干涉与可拖动波程差探测器 P',
        prompt: '用鼠标或手指拖动探测点 P 在水波槽中四处移动，实时查看 S₁P、S₂P、程差 Δ = ?λ，以及同相/反相波源切换时中央线的惊天反转！'
      },
      questions: [
        {
          id: 'q-5-4-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '在水波槽中，两个<strong>同相振动（in phase）</strong>的相同波源 $S_1$ 和 $S_2$ 产生波长 $\\lambda = 2.0\\text{ cm}$、单波振幅均为 $A$ 的水波。水面上某点 $P$ 到 $S_1$ 的距离为 $11.0\\text{ cm}$，到 $S_2$ 的距离为 $14.0\\text{ cm}$。关于 $P$ 点的情况，下列说法正确的是？',
          options: [
            '$P$ 点发生相长干涉（constructive），水面永远停在 $+2A$ 高度',
            '$P$ 点发生相长干涉（constructive），水面在 $+2A$ 与 $-2A$ 之间振动',
            '$P$ 点发生相消干涉（destructive），水面始终保持平静（振幅为 $0$）',
            '$P$ 点发生相消干涉（destructive），水面以振幅 $A$ 上下振动'
          ],
          answerIndex: 2,
          hint: '先算波程差 $\\Delta = |14.0 - 11.0| = 3.0\\text{ cm}$，再除以波长 $\\lambda = 2.0\\text{ cm}$ 看看是整数倍还是“点五”倍（半波长的奇数倍）！',
          wrongDiagnostics: [
            '算一下程差：$\\Delta = 14.0 - 11.0 = 3.0\\text{ cm} = 1.5\\lambda$，不是整数倍哦！而且就算相长干涉，水面也是上下振动而不是停在 $+2A$！',
            '对相长干涉运动状态的描述是对的，但本题 $\\Delta = 3.0\\text{ cm} = 1.5\\lambda = (1 + \\frac{1}{2})\\lambda$，属于相消干涉！',
            '',
            '相消干涉判断正确！但既然两列波振幅相等（均为 $A$），峰谷抵消后合振幅为 $A - A = 0$，而不是 $A$ 哦。'
          ],
          explanation: '点 $P$ 的波程差为 $\\Delta = |S_2P - S_1P| = 14.0 - 11.0 = 3.0\\text{ cm}$。与波长比较：$\\frac{\\Delta}{\\lambda} = \\frac{3.0}{2.0} = 1.5\\lambda = \\left(1 + \\frac{1}{2}\\right)\\lambda$。因为两波源同相振动，程差为半波长的奇数倍，故 $P$ 点位于第 2 条节线（nodal line）上，发生<strong>相消干涉（destructive interference）</strong>，合振幅为 $0$，水面始终平静。',
          markingKeywords: ['path difference Δ = 3.0 cm = 1.5λ', 'destructive interference', 'nodal line / zero amplitude']
        },
        {
          id: 'q-5-4-2',
          level: 2,
          levelLabel: '第二阶 · 陷阱辨析与反转',
          stem: '承上题（$\\lambda = 2.0\\text{ cm}$，单波振幅为 $A$），如果把波源改成<strong>反相振动（vibrating in antiphase）</strong>，而 $Q$ 点到 $S_1$ 的距离为 $10.0\\text{ cm}$、到 $S_2$ 的距离为 $14.0\\text{ cm}$。在某一时刻 $t_0$，来自 $S_1$ 的波在 $Q$ 点位移恰好为 $0$。请问 $Q$ 点发生什么干涉？在 $t_0$ 之后的 $\\frac{1}{4}$ 周期内 $Q$ 点合位移大小最大可达多少？',
          options: [
            '相长干涉（constructive）；最大可达 $2A$',
            '相消干涉（destructive）；始终为 $0$',
            '相长干涉（constructive）；始终为 $0$',
            '相消干涉（destructive）；最大可达 $A$'
          ],
          answerIndex: 1,
          hint: '瞪大眼睛看题目里的关键词：<strong>反相振动（in antiphase）</strong>！先算 $\\Delta = 14.0 - 10.0 = 4.0\\text{ cm} = 2\\lambda$。出发时 $S_1$ 和 $S_2$ 就已经是反相的了，再多走整整 $2\\lambda$，到达 $Q$ 点时它俩是同相还是依然反相？',
          wrongDiagnostics: [
            '被习惯思维骗啦！虽然 $\\Delta = 4.0\\text{ cm} = 2\\lambda$ 是整数倍波长，但题目把波源改成了“反相振动（in antiphase）”！出发就反相，多走 $2\\lambda$ 到达时依然反相，峰遇谷完全抵消！',
            '',
            '相长干涉怎么会始终为 $0$ 呢？因为波源反相且 $\\Delta = 2\\lambda$，这里是彻头彻尾的相消干涉！',
            '相消干涉判断对了！因为两波振幅相等均为 $A$，反相叠加时在任何时刻合位移都恒为 $0$。'
          ],
          explanation: '1. 点 $Q$ 的程差 $\\Delta = 14.0 - 10.0 = 4.0\\text{ cm} = 2\\lambda$。<br>2. 关键：两波源<strong>反相振动（in antiphase）</strong>！出发时相位已相反，经过整数倍波长（$2\\lambda$）的程差后，到达 $Q$ 点时两列波<strong>依然保持反相</strong>（一峰一谷同时到达），因此发生<strong>相消干涉（destructive interference）</strong>，水面合位移在任何时刻恒为 $0$！',
          markingKeywords: ['sources in antiphase + Δ = 2λ → waves arrive in antiphase', 'destructive interference', 'resultant displacement always zero']
        },
        {
          id: 'q-5-4-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Two coherent point sources $S_1$ and $S_2$ vibrating <strong>in phase</strong> are placed $4.5\\text{ cm}$ apart in a ripple tank, generating water waves of wavelength $2.0\\text{ cm}$. How many <strong>antinodal lines</strong> and <strong>nodal lines</strong> are formed between the two sources in the interference pattern?',
          cnTranslation: '在水波槽中，两个<strong>同相振动</strong>的相干点波源 $S_1$ 和 $S_2$ 相距 $4.5\\text{ cm}$，产生波长为 $2.0\\text{ cm}$ 的水波。在整个干涉图样中共形成多少条<strong>腹线（antinodal lines）</strong>和多少条<strong>节线（nodal lines）</strong>？',
          options: [
            '5 antinodal lines and 4 nodal lines',
            '5 antinodal lines and 6 nodal lines',
            '3 antinodal lines and 2 nodal lines',
            '4 antinodal lines and 5 nodal lines'
          ],
          answerIndex: 0,
          hint: '水面上任意干涉点的波程差一定小于两波源间距：$\\Delta < 4.5\\text{ cm}$！① 腹线满足 $\\Delta = n\\lambda = 2.0n < 4.5$（注意 $n=0$ 在正中央只有 1 条，$n=1, 2$ 在左右两侧各 1 条！）；② 节线满足 $\\Delta = (n + 0.5)\\lambda < 4.5$，把 $1.0\\text{ cm}, 3.0\\text{ cm}, 5.0\\text{ cm}$ 比一比！',
          wrongDiagnostics: [
            '',
            '腹线 5 条数对啦！不过再查一下第 3 级节线：$(2 + 0.5)\\lambda = 5.0\\text{ cm} > 4.5\\text{ cm}$，已经超出两波源最大可能程差，不存在这条节线，所以节线只有左右各 2 条共 4 条！',
            '漏算了 $n = 2$（$\\Delta = 4.0\\text{ cm} < 4.5\\text{ cm}$）那一对腹线，以及 $\\Delta = 3.0\\text{ cm}$ 那一对节线哦！',
            '同相波源正中央 $\\Delta = 0$ 必定是 1 条中央腹线，加上左右对称成对出现的腹线，腹线总数一定是奇数（$2n_{\\max} + 1$），不可能是偶数 4 条！'
          ],
          explanation: '根据几何关系，干涉区任意点的最大波程差小于波源间距 $\\Delta < S_1S_2 = 4.5\\text{ cm}$：<br>• <strong>腹线（Antinodal lines）</strong>：$\\Delta = n\\lambda = 2.0n < 4.5\\text{ cm} \\Rightarrow n = 0, 1, 2$。其中中央 $\\Delta = 0$ 有 $1$ 条，$\\Delta = 2.0\\text{ cm}$（$n=1$）左右各 $1$ 条，$\\Delta = 4.0\\text{ cm}$（$n=2$）左右各 $1$ 条，共 $1 + 2 + 2 = 5$ 条腹线。<br>• <strong>节线（Nodal lines）</strong>：$\\Delta = \\left(n + \\frac{1}{2}\\right)\\lambda < 4.5\\text{ cm}$，满足条件的有 $\\Delta = 1.0\\text{ cm}$ 左右各 $1$ 条、$\\Delta = 3.0\\text{ cm}$ 左右各 $1$ 条（$5.0\\text{ cm} > 4.5\\text{ cm}$ 舍去），共 $2 + 2 = 4$ 条节线（恰好夹在 5 条腹线之间的 4 个空隙里！）。',
          markingKeywords: ['maximum path difference < 4.5 cm', 'antinodal: Δ = 0, 2.0, 4.0 cm → 5 lines', 'nodal: Δ = 1.0, 3.0 cm → 4 lines']
        }
      ]
    },

    /* ========================================================================
       Section 5.5
       ======================================================================== */
    {
      id: '5.5',
      code: '5.5',
      titleCn: '驻波的形成与特性（对比行波）',
      titleEn: 'Stationary Waves vs Travelling Waves',
      dseTag: '延展必考对比 · * Extension',
      realLifeHook: {
        title: '🎸 先从生活出发：拨动吉他琴弦时，波为什么没有“跑掉”，而是定在弦上嗡嗡响？',
        html: `
          <p>吉他琴弦的两端死死绑在琴枕和琴桥上（固定端 fixed ends）。当你拨动琴弦时，向左右传播的行波撞到两端固定点立即反射回来——于是<strong>向右跑的波和向左跑的全同反射波在同一根琴弦上迎头相撞、持续叠加</strong>！</p>
          <p>奇迹发生了：波形不再向前跑，而是分成了几个原地上下扇翅膀的“纺锤环（loops）”，环与环交界的地方像被钉子钉死一样纹丝不动！这种“波形驻留原地”的波，就叫做<strong>驻波（stationary wave / standing wave）</strong>，也是所有弦乐器能发出稳定音高的物理源泉！</p>
        `
      },
      concepts: [
        {
          title: '1. 驻波（Stationary Wave）的形成条件、波节（Node）与波腹（Antinode）',
          html: `
            <ul>
              <li><strong>形成条件（HKDSE 标准定义）</strong>：当<strong>两列完全相同（振幅、频率、波长、波速均相等）的波在同一介质中沿相反方向传播并相互叠加</strong>（superposition of two identical waves travelling in opposite directions）时，便形成驻波。</li>
              <li><span class="term">波节</span><span class="term-en">node, N</span>：两列波在此处始终反相抵消，<strong>振幅恒为零（permanently at rest / zero amplitude）</strong>的点（包括琴弦两端的固定端）。</li>
              <li><span class="term">波腹</span><span class="term-en">antinode, A</span>：两列波在此处同相加强，<strong>以最大振幅（$2A_{\\text{single}}$）剧烈振动</strong>的点。</li>
              <li><strong>距离铁律（高频计算！）</strong>：
                <ul>
                  <li><strong>相邻两波节间距（$N\\text{–}N$） $=$ 相邻两波腹间距（$A\\text{–}A$） $= \\frac{1}{2}\\lambda$</strong>（一个纺锤环 loop 的长度就是半个波长 $\\frac{1}{2}\\lambda$！）；</li>
                  <li><strong>波节到相邻波腹间距（$N\\text{–}A$） $= \\frac{1}{4}\\lambda$</strong>。</li>
                </ul>
              </li>
            </ul>
            <div class="diagram-card">
              <svg viewBox="0 0 700 175" width="100%" aria-label="驻波波节与波腹结构图">
                <line x1="60" y1="88" x2="640" y2="88" stroke="#94a3b8" stroke-dasharray="5,4" stroke-width="1.5"/>
                <!-- Fixed walls -->
                <rect x="52" y="38" width="8" height="100" fill="#334155"/>
                <rect x="640" y="38" width="8" height="100" fill="#334155"/>
                <!-- Envelope (2 loops = 1 full wavelength) -->
                <path d="M 60 88 Q 205 5, 350 88 T 640 88" fill="none" stroke="#7c3aed" stroke-width="3.2"/>
                <path d="M 60 88 Q 205 171, 350 88 T 640 88" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-dasharray="6,5"/>
                <!-- Nodes & Antinodes -->
                <circle cx="60" cy="88" r="6" fill="#ef4444"/><text x="54" y="112" fill="#ef4444" font-size="13" font-weight="bold">N</text>
                <circle cx="350" cy="88" r="6" fill="#ef4444"/><text x="345" y="112" fill="#ef4444" font-size="13" font-weight="bold">N</text>
                <circle cx="640" cy="88" r="6" fill="#ef4444"/><text x="630" y="112" fill="#ef4444" font-size="13" font-weight="bold">N</text>
                <text x="200" y="38" fill="#6d28d9" font-size="13" font-weight="bold">A (波腹)</text>
                <text x="490" y="38" fill="#6d28d9" font-size="13" font-weight="bold">A (波腹)</text>
                <!-- Loop phase arrows -->
                <line x1="160" y1="88" x2="160" y2="56" stroke="#0d9488" stroke-width="2"/><polygon points="156,58 160,48 164,58" fill="#0d9488"/>
                <line x1="250" y1="88" x2="250" y2="56" stroke="#0d9488" stroke-width="2"/><polygon points="246,58 250,48 254,58" fill="#0d9488"/>
                <text x="142" y="152" fill="#0d9488" font-size="12" font-weight="bold">同一环内所有质点同相（in phase）</text>
                <line x1="450" y1="88" x2="450" y2="120" stroke="#ea580c" stroke-width="2"/><polygon points="446,118 450,128 454,118" fill="#ea580c"/>
                <line x1="540" y1="88" x2="540" y2="120" stroke="#ea580c" stroke-width="2"/><polygon points="536,118 540,128 544,118" fill="#ea580c"/>
                <text x="430" y="152" fill="#ea580c" font-size="12" font-weight="bold">相邻两环质点反相（in antiphase）</text>
              </svg>
              <div class="diagram-caption">图 5.3：弦上第 2 谐波（2 个环 = 1 个完整波长 λ）。相邻两波节 N–N 间距为 λ/2。</div>
            </div>
          `
        },
        {
          title: '2. 必背满分表格：行波（Travelling Wave）vs 驻波（Stationary Wave）',
          html: `
            <p>这是 HKDSE Paper 1 结构题最爱考的对比大题（常考 3–4 分），请从<strong>波形、能量、振幅、相位</strong>四个维度作答：</p>
            <table class="compare-table">
              <thead>
                <tr>
                  <th>比较维度</th>
                  <th>行波（Travelling / Progressive Wave）</th>
                  <th>驻波（Stationary / Standing Wave）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 波形推进（Waveform）</strong></td>
                  <td>波峰与波谷以波速 $v$ 不断向前推进</td>
                  <td>波形驻留原地不向前移动（does not advance）</td>
                </tr>
                <tr>
                  <td><strong>2. 能量传递（Energy）</strong></td>
                  <td>能量沿波的传播方向不断<strong>向外传递（transmitted）</strong></td>
                  <td>能量<strong>不向外传递（not transmitted）</strong>，而是局域存储在各个驻波环内（动能与势能相互转化）</td>
                </tr>
                <tr>
                  <td><strong>3. 质点振幅（Amplitude）</strong></td>
                  <td>所有质点具有<strong>相同的振幅</strong>（忽略能量损耗时）</td>
                  <td>不同位置质点的<strong>振幅各不相同</strong>：波节处为 $0$，波腹处最大</td>
                </tr>
                <tr>
                  <td><strong>4. 质点相位（Phase）</strong></td>
                  <td>在一个波长 $\\lambda$ 内，各质点相位随距离连续渐进变化（不同时到最高点）</td>
                  <td>• <strong>同一环（相邻两波节之间）</strong>内所有质点<strong>同相（in phase）</strong>；<br>• <strong>相邻两环（波节两侧）</strong>质点<strong>反相（in antiphase）</strong>；<br>• 所有振动的质点<strong>同时到达各自最大位移，又同时经过平衡位置（每周瞬间拉直两次！）</strong></td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: '3. 两端固定弦线上的驻波模式（Modes on a Stretched String）',
          html: `
            <p>设弦长为 $L$，两端固定（两端必为波节 $N$），弦上波速为 $v$：</p>
            <ul>
              <li><strong>基频 / 第一谐波（Fundamental / 1st harmonic，$1$ 个环）</strong>：$L = \\frac{1}{2}\\lambda_1 \\Rightarrow \\lambda_1 = 2L \\Rightarrow f_1 = \\frac{v}{2L}$。</li>
              <li><strong>第二谐波（2nd harmonic，$2$ 个环）</strong>：$L = 2\\left(\\frac{\\lambda_2}{2}\\right) = \\lambda_2 \\Rightarrow f_2 = \\frac{v}{L} = 2f_1$。</li>
              <li><strong>第 $n$ 谐波（$n$ 个环）</strong>：$L = n\\left(\\frac{\\lambda_n}{2}\\right) \\Rightarrow \\lambda_n = \\frac{2L}{n} \\Rightarrow f_n = n f_1$！（即如果 $f_1 = 15\\text{ Hz}$，那么 $30\\text{ Hz}、45\\text{ Hz}、60\\text{ Hz}\\dots$ 都能激发出稳定驻波！）</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '驻波节点间距与两端固定弦谐波关系',
          badge: '* Extension · 必背高频关系',
          latex: 'd_{N\\text{–}N} = d_{A\\text{–}A} = \\frac{1}{2}\\lambda, \\qquad L = n\\left(\\frac{\\lambda_n}{2}\\right), \\qquad f_n = n f_1 = \\frac{nv}{2L}',
          vars: [
            '$d_{N\\text{–}N}$：相邻两波节（adjacent nodes）间距（$\\text{m}$）',
            '$L$：两端固定弦线的总长度（$\\text{m}$）',
            '$n$：驻波环（loops）的个数（$n = 1, 2, 3, \\dots$）',
            '$f_1$：基频 fundamental frequency（$1$ 个环时的最低驻波频率，$\\text{Hz}$）'
          ],
          condition: '适用于两端均为波节（fixed ends）的弦线驻波。切记：1 个环的长度只是半个波长 $\\frac{1}{2}\\lambda$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：为什么驻波“1 个环只有半个波长”？',
        intro: '很多同学数驻波环算波长总是差 2 倍，用这 3 个小追问一次彻底记牢：',
        steps: [
          {
            q: '追问 1：回想一个完整的正弦波（$1\\lambda$），它包含“一个向上的波峰凸起 + 一个向下的波谷凹陷”。那么驻波里单独 1 个纺锤环（loop）占几个波长？',
            options: [
              '半个波长 $\\frac{1}{2}\\lambda$（所以相邻两波节间距 $N\\text{–}N = \\frac{1}{2}\\lambda$）',
              '一整条波长 $1\\lambda$'
            ],
            answerIndex: 0,
            a: '一辈子忘不掉了！2 个环才拼成 1 个完整波长 $\\lambda$，所以 <strong>1 个环的长度永远等于 $\\frac{1}{2}\\lambda$</strong>！'
          },
          {
            q: '追问 2：在同一个纺锤环内部，靠近中间波腹 $A$ 的质点振幅大，靠近两侧波节 $N$ 的质点振幅小。它们谁先到达最高点？',
            options: [
              '同时到达！同一环内所有质点严格同相（in phase）',
              '振幅小的先到，因为路程短'
            ],
            answerIndex: 0,
            a: '超赞！同一环内所有质点同起同落（in phase），相邻环之间才一上一下反相（in antiphase）！'
          },
          {
            q: '追问 3：除了拉紧的吉他弦，课本还常用“微波发射器对着金属反射板”做驻波实验。当把接收探头沿着直线向反射板移动时，探头读数每经过两次最强点（相邻两波腹），探头移动了多少距离？',
            options: [
              '$\\frac{1}{2}\\lambda$（比如移了 $1.5\\text{ cm}$，说明微波波长 $\\lambda = 3.0\\text{ cm}$！）',
              '$1\\lambda$'
            ],
            answerIndex: 0,
            a: '直接命中 HKDSE 微波驻波经典实验题！相邻最强点就是相邻波腹（antinodes），间距同样是 $\\frac{1}{2}\\lambda$！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 5.4 节（叠加原理的另一朵花）',
          text: '同样是叠加原理：两列波在二维平面交叠形成“双源干涉图样”；两列全同波在一维直线上迎头对撞则形成“驻波”！',
          targetSec: '5.4'
        }
      ],
      traps: [
        {
          wrong: '误区 1：看到弦上有 3 个枣核状的环（3 loops），脱口而出“弦长等于 3 个波长（3λ）”！',
          right: '真相：每个环只是半个波（$\\frac{1}{2}\\lambda$）！2 个环才拼成一上一下 1 个完整正弦波长！所以 3 个环对应的弦长是 $L = 3 \\times \\frac{1}{2}\\lambda = 1.5\\lambda$！'
        },
        {
          wrong: '误区 2：以为驻波同一环里靠近波腹的质点振幅大，所以“比靠近波节的质点更晚到达最高点”。',
          right: '真相：错！同一环内所有质点严格同相（in phase）！振幅大的走得快，振幅小的走得慢，大家在同一瞬间齐刷刷到达各自最高点，又在同一瞬间齐刷刷穿过平衡位置（整根弦瞬间变直）！'
        }
      ],
      linkedLab: {
        labId: 'lab5',
        title: '实验 5：驻波合成透视仪（正反向行波叠加）',
        prompt: '在实验 5 中同时打开蓝色右行波与橙色左行波，亲眼看着它们如何合成紫色驻波，并切换 n = 1, 2, 3, 4 个环观察同环同相、邻环反相！'
      },
      questions: [
        {
          id: 'q-5-5-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '一根长 $1.2\\text{ m}$、两端固定的拉紧弦线上形成了具有 <strong>$3$ 个环（3 loops）</strong>的稳定驻波。请问这列波的波长 $\\lambda$ 是多少？整根弦上（包含两端固定点）共有几个波节（nodes）？',
          options: [
            '$\\lambda = 0.4\\text{ m}$，共有 $3$ 个波节',
            '$\\lambda = 0.8\\text{ m}$，共有 $4$ 个波节',
            '$\\lambda = 0.4\\text{ m}$，共有 $4$ 个波节',
            '$\\lambda = 0.8\\text{ m}$，共有 $3$ 个波节'
          ],
          answerIndex: 1,
          hint: '画三个相连的纺锤环看看：① 每个环的长度是 $\\frac{1}{2}\\lambda$，$3$ 个环总长 $1.2\\text{ m}$，那么 $1$ 个环长 $0.4\\text{ m}$——完整波长 $\\lambda$ 是多少？② 两头各有 1 个固定波节，中间两个交点也是波节，一共几个 $N$？',
          wrongDiagnostics: [
            '连踩两个小坑！$0.4\\text{ m}$ 只是 1 个环的长度（即 $\\frac{1}{2}\\lambda$），完整波长要乘以 2 得 $0.8\\text{ m}$；而且 3 个环包含两端共有 $3 + 1 = 4$ 个波节！',
            '',
            '波节个数 $4$ 个数对啦！不过 1 个环只是半个波长（$\\frac{1}{2}\\lambda = 0.4\\text{ m}$），所以完整波长 $\\lambda = 0.8\\text{ m}$ 哦！',
            '波长 $\\lambda = 0.8\\text{ m}$ 算得超准！数波节时别忘了把左右两个固定端点也算进去：$3$ 个环共有 $4$ 个波节（$3$ 个波腹）。'
          ],
          explanation: '1. 每个驻波环的长度为 $\\frac{1}{2}\\lambda$。$3$ 个环占满 $1.2\\text{ m}$，即 $3 \\times \\frac{\\lambda}{2} = 1.2\\text{ m} \\Rightarrow \\frac{\\lambda}{2} = 0.4\\text{ m} \\Rightarrow \\lambda = 0.8\\text{ m}$。<br>2. $3$ 个环在中间有 $2$ 个波节，加上左右两端固定点各 $1$ 个波节，共有 $3 + 1 = 4$ 个波节（nodes）。',
          markingKeywords: ['1 loop = λ/2 = 0.4 m → λ = 0.8 m', '4 nodes (including both fixed ends)']
        },
        {
          id: 'q-5-5-2',
          level: 2,
          levelLabel: '第二阶 · 驻波相位与谐波推理',
          stem: '在某两端固定的弦线上，当振动器频率为 $36\\text{ Hz}$ 时出现 <strong>$2$ 个环</strong>的驻波；质点 $P$ 和 $Q$ 位于<strong>同一个环内</strong>不同位置（$P$ 在波腹，$Q$ 靠近波节），质点 $R$ 位于<strong>相邻的另一个环</strong>内。若保持弦线张力不变，下列判断正确的是？',
          options: [
            '$P$ 与 $Q$ 振动同相且振幅相等；把频率调至 $54\\text{ Hz}$ 可看到 $3$ 个环的驻波',
            '$P$ 与 $Q$ 振动同相但 $P$ 振幅更大，$P$ 与 $R$ 振动反相；把频率调至 $54\\text{ Hz}$ 可看到 $3$ 个环的驻波',
            '$P$ 比 $Q$ 先到达最高点；把频率调至 $72\\text{ Hz}$ 可看到 $3$ 个环的驻波',
            '$P$ 与 $R$ 振动同相；该弦线的最低驻波基频为 $36\\text{ Hz}$'
          ],
          answerIndex: 1,
          hint: '拆成两半检验：① 驻波口诀“同环同相但振幅不同，邻环反相”；② $2$ 个环对应第 2 谐波 $f_2 = 2f_1 = 36\\text{ Hz}$，那基频 $f_1$（1 个环）是多少 $\\text{Hz}$？$3$ 个环（$3f_1$）又是多少 $\\text{Hz}$？',
          wrongDiagnostics: [
            '频率算得完全正确（$f_1 = 18\\text{ Hz}, f_3 = 54\\text{ Hz}$）！但在驻波里，$P$ 在波腹、$Q$ 靠近波节，$P$ 的振幅明显大于 $Q$，它们的振幅不相等哦！',
            '',
            '同一环内的 $P$ 和 $Q$ 严格同相，是同时到达最高点的！而且 $f_2 = 36\\text{ Hz} \\Rightarrow f_1 = 18\\text{ Hz}$，$72\\text{ Hz}$ 对应的是 $4$ 个环（$4f_1$）！',
            '$P$ 与相邻环的 $R$ 隔着一个波节，振动是反相（in antiphase）的；且 $2$ 个环是 $36\\text{ Hz}$，最低基频（$1$ 个环）应该是 $18\\text{ Hz}$！'
          ],
          explanation: '1. <strong>相位与振幅</strong>：驻波同一环内所有质点<strong>同相（in phase）</strong>，但波腹 $P$ 的振幅大于靠近波节的 $Q$；相邻环的 $R$ 与 $P$ 隔着一个波节，振动<strong>反相（in antiphase）</strong>。<br>2. <strong>谐波频率</strong>：$2$ 个环对应 $f_2 = 2f_1 = 36\\text{ Hz} \\Rightarrow$ 基频 $f_1 = 18\\text{ Hz}$。故 $3$ 个环对应第 3 谐波 $f_3 = 3f_1 = 3 \\times 18 = 54\\text{ Hz}$。',
          markingKeywords: ['same loop: in phase, different amplitudes', 'adjacent loops: in antiphase', 'f₁ = 18 Hz → f₃ = 3f₁ = 54 Hz']
        },
        {
          id: 'q-5-5-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Which of the following statements about a stationary wave on a stretched string is/are correct?<br>(1) There is no net transfer of wave energy from one end of the string to the other.<br>(2) Twice in every period $T$, all particles on the string pass through their equilibrium positions simultaneously so the string becomes completely flat.<br>(3) The wave speed along the string is zero because the waveform does not move forward.',
          cnTranslation: '关于拉紧弦线上驻波的下列陈述，哪些是正确的？(1) 波的能量不会从弦的一端净传递到另一端。(2) 在每个周期 $T$ 内有两次，弦上所有质点同时经过各自的平衡位置，使整根弦瞬间完全变平直。(3) 因为波形不向前移动，所以弦上的波速为零。',
          options: [
            '(1) only',
            '(1) and (2) only',
            '(2) and (3) only',
            '(1), (2) and (3)'
          ],
          answerIndex: 1,
          hint: '重点审视第 (3) 句！驻波是由两列速率均为 $v = f\\lambda$ 的正反向行波叠加而成的，我们还一直用 $v = f\\lambda$ 来算谐波频率呢——弦上的波速 $v$ 真的等于 $0$ 吗？',
          wrongDiagnostics: [
            '第 (1) 句确实对，但别漏了第 (2) 句！在驻波中所有质点同起同落，每半个周期（$\\frac{1}{2}T$）就会齐刷刷穿过中心平衡轴，所以每个周期 $T$ 整根弦真的会瞬间拉直两次！',
            '',
            '中了第 (3) 句的文字游戏陷阱！波形虽然驻留原地，但组成驻波的两列反向分量波仍以速率 $v = f\\lambda$ 在弦上传播，弦上的波速并不为零！',
            '第 (3) 句是错的！弦上波速 $v$ 由张力和线密度决定（$v = f\\lambda \\neq 0$），只是正反向两列波速度等大反向使合成波形不前进而已。'
          ],
          explanation: '• <strong>(1) 正确</strong>：驻波的能量局域储存在各个驻波环中，不沿弦向外做净传递（no net transfer of energy）。<br>• <strong>(2) 正确</strong>：驻波中所有运动质点同时达到最大位移、又同时经过平衡位置，因此在每个周期 $T$ 内（相隔 $\\frac{1}{2}T$），整根弦会有<strong>两次瞬间完全拉直</strong>（此时势能最小，各质点动能最大）！<br>• <strong>(3) 错误</strong>：组成驻波的两列相向行波依然以恒定波速 $v = f\\lambda$ 传播，不能说波速为零。故选 <strong>(1) and (2) only</strong>。',
          markingKeywords: ['no net transfer of energy', 'all particles pass through equilibrium simultaneously twice per period']
        }
      ]
    }
  ]
});
