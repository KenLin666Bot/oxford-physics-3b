window.BOOK_3B_CHAPTERS = window.BOOK_3B_CHAPTERS || [];

window.BOOK_3B_CHAPTERS.push({
  id: 'ch7',
  number: 'Chapter 7',
  titleCn: '声波',
  titleEn: 'Sound',
  color: '#ea580c',
  overview: '来到 3B 册的压轴篇章！如果第 6 章的“光波”是跑得飞快、无需介质的电磁横波代表，那么第 7 章的“声波（sound）”就是我们身边最亲切、必须依靠物质粒子前后碰撞传递的机械纵波代表。我们将用前几章学过的波动定律，一口气揭开太空无声、夜晚传声更远、超声波探伤与 B 超，以及钢琴小提琴音色奥秘的全部物理真相！',
  sections: [
    /* ========================================================================
       Section 7.1
       ======================================================================== */
    {
      id: '7.1',
      code: '7.1',
      titleCn: '声波的本质、传播介质与声速测量',
      titleEn: 'Nature, Medium and Speed of Sound Waves',
      dseTag: '必考基础与实验 · Core Practical',
      realLifeHook: {
        title: '🚀 先从生活出发：科幻大片里太空战舰爆炸“轰隆巨响”，为什么全是穿帮镜头？',
        html: `
          <p>在星战电影里，外太空飞船爆炸总是伴随着震天动地的轰鸣；可是在真实的宇宙太空中，哪怕离你十米远发生剧烈爆炸，你也只能看见耀眼的火光（电磁波无需介质），耳边却是<strong>死一般的绝对寂静</strong>！宇航员在月球表面走出舱外，就算面对面把嗓子喊破，如果不靠头盔里的无线电波（radio waves）通话，对方也半个字都听不见。</p>
          <p>相反，老电影里的印第安猎人或铁路工人只要把耳朵贴在地面或钢轨上，隔着几公里就能提前听到马蹄声或火车声——因为声波不仅离不开物质介质，而且在紧实的钢铁里跑得比空气快十多倍！</p>
        `
      },
      concepts: [
        {
          title: '1. 声波的产生与空气气压微观变化（Compressions & Rarefactions）',
          html: `
            <ul>
              <li>声波由物体的机械振动（如音叉叉股、扬声器纸盆 loudspeaker cone、吉他弦、人的声带）产生，在介质中以<strong>机械纵波（longitudinal mechanical wave）</strong>的形式传播：
                <ul>
                  <li>当纸盆向前推出时，挤压前方空气层使其分子聚集、密度与压强升高（<strong>略高于正常大气压</strong>），形成<span class="term">密部</span><span class="term-en">compression</span>；</li>
                  <li>当纸盆向后缩回时，前方空气分子散开、密度与压强降低（<strong>略低于正常大气压</strong>），形成<span class="term">疏部</span><span class="term-en">rarefaction</span>。</li>
                </ul>
              </li>
              <li><strong>关键判据</strong>：空气分子本身<strong>并没有像吹风一样从喇叭一路飞进你的耳朵</strong>，它们只是沿着声波传播方向在平衡位置附近前后微幅振动！相邻两个密部中心（或相邻两个疏部中心）之间的距离等于 $1\\lambda$；密部中心到相邻疏部中心的距离等于 $\\frac{1}{2}\\lambda$。</li>
            </ul>
          `
        },
        {
          title: '2. 真空钟罩电铃实验与不同介质中的声速规律',
          html: `
            <ul>
              <li><strong>真空玻璃钟罩实验（Electric bell in a bell jar）</strong>：用抽气机（vacuum pump）把玻璃钟罩内的空气慢慢抽出，听到的铃声越来越微弱直至几乎消失，但仍能清楚看见小锤敲铃 $\\Rightarrow$ 证实<strong>声波需要物质介质（material medium），不能在真空中传播</strong>，而光波可以在真空中传播。
                <br><em>DSE 实验必考追问</em>：为什么抽气后有时还能隐约听到极微弱的铃声？① 钟罩内无法抽成绝对真空，仍残留极稀薄空气；② <strong>电铃的振动顺着悬挂它的导线/橡皮筋及玻璃罩固体结构传了出来</strong>！
              </li>
              <li><strong>声速大小铁律</strong>：一般而言，<strong>固体最快 $>$ 液体次之 $>$ 气体最慢</strong>（$v_{\\text{solid}} > v_{\\text{liquid}} > v_{\\text{gas}}$）。典型值：常温空气约 <strong>$340\\text{ m s}^{-1}$</strong>（注意数量级！），水约 $1500\\text{ m s}^{-1}$，钢铁约 $5000\\text{ m s}^{-1}$。</li>
              <li><strong>空气中声速受什么影响？不受什么影响？</strong>
                <ul>
                  <li><strong>气温越高，空气中声速越快</strong>（如 $0^\\circ\\text{C}$ 约 $331\\text{ m s}^{-1}$，$20^\\circ\\text{C}$ 约 $343\\text{ m s}^{-1}$）；顺风/逆风也会叠加风速。</li>
                  <li>在相同温度的空气中，无论你唱高音还是低音（改变 $f$）、大喊还是耳语（改变 $A$），<strong>所有声波和超声波的波速 $v$ 都完全相同</strong>！</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          title: '3. 实验室测量空气声速：双麦克风 + 电子计时器法（Direct Timing Method）',
          html: `
            <p>如果两个同学在教室里相隔 $3\\text{ m}$ 用手按秒表测声速，声音走过去只需 $\\frac{3}{340} \\approx 0.0088\\text{ s}$，而人的<strong>反应时间误差（human reaction time error）高达约 $0.2\\text{ s}$</strong>，误差比真实值大二十多倍，完全不可行！因此在实验室短距离内，必须改用<strong>两个麦克风（microphones $M_1, M_2$）连接电子计时器（timer-scaler）</strong>：</p>
            <div class="diagram-card">
              <svg viewBox="0 0 720 180" width="100%" aria-label="双麦克风电子计时器测声速装置图">
                <!-- Bench line -->
                <line x1="30" y1="145" x2="690" y2="145" stroke="#64748b" stroke-width="2"/>
                <!-- Hammer & Metal plate on the left of M1 -->
                <rect x="68" y="88" width="10" height="52" fill="#475569" rx="2"/>
                <circle cx="52" cy="105" r="10" fill="#ef4444"/>
                <text x="32" y="75" fill="#dc2626" font-size="12.5" font-weight="bold">敲击点（必须在 M₁ 外侧！）</text>
                <!-- Sound wavefronts moving right -->
                <path d="M 96 92 A 26 26 0 0 1 96 136" fill="none" stroke="#ea580c" stroke-width="2"/>
                <path d="M 114 84 A 38 38 0 0 1 114 142" fill="none" stroke="#ea580c" stroke-width="2"/>
                <path d="M 132 76 A 50 50 0 0 1 132 145" fill="none" stroke="#ea580c" stroke-width="2"/>

                <!-- Mic 1 & Mic 2 -->
                <rect x="210" y="96" width="26" height="18" rx="4" fill="#0f766e"/>
                <line x1="223" y1="114" x2="223" y2="145" stroke="#0f766e" stroke-width="3"/>
                <text x="195" y="86" fill="#0f766e" font-size="13" font-weight="bold">Mic M₁ (START)</text>

                <rect x="530" y="96" width="26" height="18" rx="4" fill="#2563eb"/>
                <line x1="543" y1="114" x2="543" y2="145" stroke="#2563eb" stroke-width="3"/>
                <text x="515" y="86" fill="#2563eb" font-size="13" font-weight="bold">Mic M₂ (STOP)</text>

                <!-- Distance d -->
                <line x1="223" y1="162" x2="543" y2="162" stroke="#1e293b" stroke-width="2"/>
                <text x="335" y="176" fill="#1e293b" font-size="13" font-weight="bold">间距 d（用米尺量度，约 1–2 m）</text>

                <!-- Timer-scaler box -->
                <rect x="330" y="18" width="135" height="46" rx="8" fill="#1e293b"/>
                <text x="348" y="38" fill="#38bdf8" font-size="12" font-weight="bold">Timer-scaler</text>
                <text x="355" y="55" fill="#22c55e" font-size="13" font-family="monospace" font-weight="bold">t = 4.41 ms</text>
                <path d="M 223 96 Q 223 40, 330 40" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="4,3"/>
                <path d="M 543 96 Q 543 40, 465 40" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/>
              </svg>
              <div class="diagram-caption">图 7.1：双麦克风测声速装置——声脉冲先后经过 M₁、M₂ 自动启停毫秒级电子计时器，彻底消除人手反应时间误差！</div>
            </div>
            <ul>
              <li><strong>三个高频实验细节</strong>：
                <ol>
                  <li>敲击发声处必须位于 <strong>$M_1, M_2$ 连线的延长线外侧（紧靠 $M_1$ 后方）</strong>，确保声波沿直线走过完整间距 $d$！（若放在 $M_1$ 和 $M_2$ 中间，路程差就小于 $d$ 了！）</li>
                  <li>适当<strong>增大 $M_1$ 与 $M_2$ 的间距 $d$</strong>，可以增大传播时间 $t$，从而减小测量的百分误差（percentage error），但不能远到声音太弱无法触发 $M_2$。</li>
                  <li>若存在气流/微风，可<strong>将敲击位置换到另一端（或互换两麦克风方向）再测一次取平均值</strong>，以抵消风速带来的系统误差！</li>
                </ol>
              </li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '双麦克风直线测声速公式（Direct Speed of Sound Measurement）',
          badge: '必考实验公式 · Core',
          latex: 'v = \\frac{d}{t}',
          vars: [
            '$v$：空气中的声速 speed of sound in air（常温约 $340\\text{ m s}^{-1}$）',
            '$d$：两个麦克风 $M_1, M_2$ 之间的直线距离（$\\text{m}$）',
            '$t$：电子计时器记录的时间差（$\\text{s}$，注意 $\\text{ms} \\to \\times 10^{-3}\\text{ s}$）'
          ],
          condition: '发声点必须位于两麦克风连线同一侧的外侧！注意区分单程测速 $v = \\frac{d}{t}$ 与下一节回声往返 $v = \\frac{2d}{t}$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：看到闪电再听见雷声，能算出雷暴离你几公里吗？',
        intro: '把第 6 章的光速和第 7 章的声速放在同一个生活场景里比一比：',
        steps: [
          {
            q: '追问 1：夏夜远处一道闪电劈下，雷声和闪光其实是同时在云层产生的。为什么你总是“先看见闪电，几秒钟后才听见轰隆雷声”？',
            options: [
              '因为空气中光速（$3.0 \\times 10^8\\text{ m s}^{-1}$）比声速（约 $340\\text{ m s}^{-1}$）快近百万倍，光几乎瞬间到达！',
              '因为云层先发光、过了几秒才开始振动发声'
            ],
            answerIndex: 0,
            a: '完全正确！光走 $1\\text{ km}$ 只需要 $3.3$ 微秒（完全可忽略不计），而声音走 $1\\text{ km}$ 大约要 $3\\text{ s}$！'
          },
          {
            q: '追问 2：如果你看见闪电后默数了 $5.0\\text{ s}$ 才听到雷声（取空气声速 $v = 340\\text{ m s}^{-1}$），闪电发生处离你大约多远？这里需要除以 2 吗？',
            options: [
              '单程传播不需要除以 2！$d = vt = 340 \\times 5.0 = 1700\\text{ m} = 1.7\\text{ km}$',
              '需要除以 2，距离是 $850\\text{ m}$'
            ],
            answerIndex: 0,
            a: '头脑超清醒！雷声直接从云层单程传到你耳朵（不是你喊一声撞墙反射回来），所以直接用 $d = vt = 1.7\\text{ km}$！'
          },
          {
            q: '追问 3：如果在做双麦克风实验时，某同学粗心把小锤敲击点放在了 $M_1$ 和 $M_2$ 连线中间偏左的位置（离 $M_1$ 为 $0.3\\text{ m}$，离 $M_2$ 为 $1.2\\text{ m}$，但他仍按总间距 $d = 1.5\\text{ m}$ 代入 $v = \\frac{d}{t}$），他算出来的声速会偏大还是偏小？',
            options: [
              '明显偏大！因为计时器只记录了差值 $(1.2 - 0.3) = 0.9\\text{ m}$ 所需的时间 $t$，却拿 $1.5\\text{ m}$ 去除了更小的 $t$！',
              '明显偏小'
            ],
            answerIndex: 0,
            a: 'HKDSE 实验误差分析满分水准！声波同时向两边跑，时间差只对应路程差 $0.9\\text{ m}$，分母 $t$ 变小导致算出的假声速暴涨！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.1 & 4.3 节（纵波疏密与图像）',
          text: '声波就是第 4 章纵波的头号代表：密部中心与疏部中心处空气分子的瞬时位移恰好为 0，但压强偏离最大！',
          targetSec: '4.3'
        },
        {
          dir: '🔗 跨章对比 ← 第 6.4 节（光速 vs 声速天壤之别）',
          text: '光波过真空最快（3×10⁸ m s⁻¹），进水进玻璃减速；声波恰恰相反——真空为 0，空气最慢（~340 m s⁻¹），进水进钢铁反而大幅加速！',
          targetSec: '6.4'
        }
      ],
      traps: [
        {
          wrong: '误区 1：像光波从空气进水会减速一样，以为“声波从空气传入水中也会减速、波长变短”！',
          right: '真相：刚好跟光波相反！声波在水中（约 $1500\\text{ m s}^{-1}$）比空气中（约 $340\\text{ m s}^{-1}$）快 4 倍多！所以声波从空气入水：频率 $f$ 不变、波速 $v$ 变大、波长 $\\lambda$ 变长，且折射偏离法线！'
        },
        {
          wrong: '误区 2：以为用力敲鼓（声音更响）发出的声波比轻轻敲鼓跑得更快。',
          right: '真相：用力敲鼓只增大振幅 $A$（响度更大、能量更多），同一空气温度下声速 $v$ 完全不变！'
        }
      ],
      questions: [
        {
          id: 'q-7-1-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '一列频率为 $680\\text{ Hz}$ 的声波从空气（声速 $340\\text{ m s}^{-1}$）传入水中（水中声速 $1500\\text{ m s}^{-1}$）。当声波进入水中后，它的<strong>频率 $f$</strong> 和<strong>波长 $\\lambda$</strong> 分别怎样变化？',
          options: [
            '频率保持 $680\\text{ Hz}$ 不变，波长由 $0.5\\text{ m}$ 增大到约 $2.21\\text{ m}$',
            '频率增大，波长保持 $0.5\\text{ m}$ 不变',
            '频率保持 $680\\text{ Hz}$ 不变，波长由 $0.5\\text{ m}$ 缩短到约 $0.11\\text{ m}$',
            '频率减小，波长增大到约 $2.21\\text{ m}$'
          ],
          answerIndex: 0,
          hint: '牢记两句话：① 跨介质频率 $f$ 永远不变；② 声波跟光波相反——声波在水里比空气里跑得快得多（$1500 > 340$），按 $v = f\\lambda$ 波长变长还是变短？',
          wrongDiagnostics: [
            '',
            '频率只由声源决定，进水后频率保持 $680\\text{ Hz}$ 绝对不变哦！',
            '把声波当成光波啦！光进水减速，但声波进水是加速（从 $340$ 飙升到 $1500\\text{ m s}^{-1}$），所以波长是变长而不是缩短！',
            '波长 $2.21\\text{ m}$ 算对了，但别忘了跨介质时频率 $f$ 保持不变！'
          ],
          explanation: '1. 跨介质传播时，声波的<strong>频率保持 $f = 680\\text{ Hz}$ 不变</strong>。<br>2. 在空气中 $\\lambda_{\\text{air}} = \\frac{340}{680} = 0.50\\text{ m}$；进入水中声速增大为 $1500\\text{ m s}^{-1}$，故水中波长增大为 $\\lambda_{\\text{water}} = \\frac{1500}{680} \\approx 2.21\\text{ m}$。',
          markingKeywords: ['frequency remains 680 Hz', 'speed increases in water → wavelength increases to 2.21 m']
        },
        {
          id: 'q-7-1-2',
          level: 2,
          levelLabel: '第二阶 · 实验设计与计算',
          stem: '在双麦克风测声速实验中，两麦克风 $M_1, M_2$ 相距 $1.36\\text{ m}$。某同学在 $M_1$ 外侧敲击小金属片，电子计时器显示的读数为 $4.0\\text{ ms}$。求测得的空气声速；若实验室开冷气使室温显著下降，重新做同一实验时计时器读数 $t$ 会怎样变化？',
          options: [
            '$v = 340\\text{ m s}^{-1}$；室温下降后计时器读数 $t$ 会大于 $4.0\\text{ ms}$',
            '$v = 340\\text{ m s}^{-1}$；室温下降后计时器读数 $t$ 会小于 $4.0\\text{ ms}$',
            '$v = 0.34\\text{ m s}^{-1}$；室温下降后计时器读数 $t$ 会大于 $4.0\\text{ ms}$',
            '$v = 680\\text{ m s}^{-1}$；室温下降后计时器读数 $t$ 不变'
          ],
          answerIndex: 0,
          hint: '注意毫秒换算：$4.0\\text{ ms} = 4.0 \\times 10^{-3}\\text{ s}$（且双麦克风是单程 $v = \\frac{d}{t}$，不用乘 2）！室温下降时空气声速变慢，跑完同样 $1.36\\text{ m}$ 需要的时间 $t$ 会变长还是变短？',
          wrongDiagnostics: [
            '',
            '声速 $340\\text{ m s}^{-1}$ 算对了！但冷空气里声速变慢（slower），走完同样 $1.36\\text{ m}$ 花的时间应该更长（$> 4.0\\text{ ms}$）哦！',
            '忘了把毫秒 $\\text{ms}$ 换算成 $10^{-3}\\text{ s}$ 啦！$1.36 \\div (4.0 \\times 10^{-3}) = 340\\text{ m s}^{-1}$。',
            '双麦克风是单程直线传播（不是回声反射），不需要乘以 $2$；且气温降低会使声速减慢、耗时变长。'
          ],
          explanation: '1. 由单程公式 $v = \\frac{d}{t} = \\frac{1.36\\text{ m}}{4.0 \\times 10^{-3}\\text{ s}} = 340\\text{ m s}^{-1}$。<br>2. 空气温度下降会使空气中的声速 $v$ 减慢；在间距 $d = 1.36\\text{ m}$ 不变的情况下，由 $t = \\frac{d}{v}$ 知所需时间 $t$ 变长（大于 $4.0\\text{ ms}$）。',
          markingKeywords: ['v = d / t = 340 m s⁻¹', 'lower air temperature → lower speed of sound → longer time t']
        },
        {
          id: 'q-7-1-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Why is it NOT suitable for two students standing $5\\text{ m}$ apart in a laboratory to measure the speed of sound in air using a pair of wooden blocks and a hand-held stopwatch?',
          cnTranslation: '为什么两名学生站在实验室里相距 $5\\text{ m}$，用一对木块敲击发声并配合手持秒表来测量空气声速是不合适的？',
          options: [
            'Sound waves diffract too much inside a laboratory.',
            'The time taken for sound to travel $5\\text{ m}$ (about $0.015\\text{ s}$) is much smaller than the human reaction time (about $0.2\\text{ s}$), causing a huge percentage error.',
            'Light from the wooden blocks takes a noticeable time to reach the observer.',
            'Sound travels faster indoors than outdoors.'
          ],
          answerIndex: 1,
          hint: '算一算声音走 $5\\text{ m}$ 要多少秒（$\\frac{5}{340} \\approx 0.015\\text{ s}$），再对比一下人手按秒表的反应时间（约 $0.2\\text{ s}$）！',
          wrongDiagnostics: [
            '声波衍射并不妨碍直线方向的传播计时，真正致命的问题是 $0.015\\text{ s}$ 远小于人手按秒表的反应时间！',
            '',
            '光走 $5\\text{ m}$ 只需约 $1.7 \\times 10^{-8}\\text{ s}$，完全可以忽略不计！',
            '只要气温相同，室内外空气声速并没有本质差异。'
          ],
          explanation: '这是 HKDSE 实验设计题的经典标准答案：声音走完 $5\\text{ m}$ 仅需 $t = \\frac{5}{340} \\approx 0.015\\text{ s}$，远小于人手操作秒表的<strong>反应时间误差（human reaction time $\\approx 0.2\\text{ s}$）</strong>，会导致极大的<strong>百分误差（huge percentage error）</strong>。（若坚持用拍手+秒表测声速，必须在户外离大墙至少 $50\\text{–}100\\text{ m}$ 连续按节奏拍手测几十次回声总时间！）',
          markingKeywords: ['time of travel (~0.015 s) << human reaction time (~0.2 s)', 'very large percentage error']
        }
      ]
    },

    /* ========================================================================
       Section 7.2
       ======================================================================== */
    {
      id: '7.2',
      code: '7.2',
      titleCn: '声波的反射（回声）、昼夜折射与绕射',
      titleEn: 'Reflection (Echoes), Refraction and Diffraction of Sound',
      dseTag: '高频生活解释与回声计算 · Core',
      realLifeHook: {
        title: '🌙 先从生活出发：“夜半钟声到客船”——为什么夜晚远处的声音比白天听得清楚得多？',
        html: `
          <p>唐诗写“姑苏城外寒山寺，夜半钟声到客船”，很多人以为夜晚听得远仅仅是因为“晚上周围比较安静”。其实物理学家告诉你：还有一个更神奇的帮手——<strong>声波的折射（refraction of sound）</strong>！</p>
          <p>大白天太阳把地面烤得滚烫，地面热空气声速快、高空冷空气声速慢，地面发出的声音说着说着就“往天上翘跑了”；到了夜晚地面冷却，近地面冷空气声速慢、上方暖空气声速快，原本往斜上方飞走的钟声在半空中硬生生被“折射摁回地面”，一路贴地传进几里外的客船里！</p>
        `
      },
      concepts: [
        {
          title: '1. 声波的反射与回声计算（Reflection & Echoes）',
          html: `
            <ul>
              <li>声波遇到坚硬平整的障碍物（悬崖、大厦墙壁、海底）会遵循反射定律反弹回来，形成<span class="term">回声</span><span class="term-en">echo</span>。音乐厅和电影院墙壁铺设吸音棉或凹凸软垫，正是为了<strong>吸收声能、减少反射回声干扰</strong>。</li>
              <li><strong>静止回声公式</strong>：发声者与反射面相距 $d$，经时间 $t$ 听到回声，声音走了一去一回共 $2d$：
                $$2d = vt \\quad \\Longrightarrow \\quad d = \\frac{vt}{2}$$
              </li>
              <li><strong>运动物体回声妙招（车/船向峭壁匀速驶近）</strong>：设鸣笛时车离峭壁 $d_0$，车以速率 $u$ 向峭壁开了时间 $t$ 后听到回声。别背死公式，直接画线段看总路程：
                $$d_{\\text{sound}} + d_{\\text{car}} = 2d_0 \\quad \\Longrightarrow \\quad vt + ut = 2d_0$$
                （如果车是背离峭壁开走，则是 $vt - ut = 2d_0$！一行式子秒杀所有压轴回声题！）
              </li>
            </ul>
          `
        },
        {
          title: '2. 声波的昼夜折射（Refraction of Sound in Day vs Night）',
          html: `
            <div class="diagram-card">
              <svg viewBox="0 0 740 195" width="100%" aria-label="白天与夜晚声波折射对比图">
                <!-- Daytime (Left) -->
                <rect x="20" y="18" width="335" height="150" rx="8" fill="#fef3c7"/>
                <line x1="20" y1="152" x2="355" y2="152" stroke="#92400e" stroke-width="3"/>
                <text x="34" y="40" fill="#1d4ed8" font-size="12.5" font-weight="bold">☀️ 白天高空：冷空气 Cool air（声速较慢）</text>
                <text x="34" y="140" fill="#dc2626" font-size="12.5" font-weight="bold">地面滚烫：暖空气 Warm air（声速较快）</text>
                <circle cx="58" cy="122" r="7" fill="#ea580c"/>
                <path d="M 65 120 Q 190 112, 295 52" fill="none" stroke="#ea580c" stroke-width="3"/>
                <polygon points="292,47 305,46 297,58" fill="#ea580c"/>
                <text x="145" y="96" fill="#9a3412" font-size="12" font-weight="bold">声波向上弯曲逃离地面！</text>

                <!-- Night-time (Right) -->
                <rect x="385" y="18" width="335" height="150" rx="8" fill="#e0e7ff"/>
                <line x1="385" y1="152" x2="720" y2="152" stroke="#312e81" stroke-width="3"/>
                <text x="400" y="40" fill="#dc2626" font-size="12.5" font-weight="bold">🌙 夜晚高空：较暖空气 Warmer air（声速较快）</text>
                <text x="400" y="140" fill="#1d4ed8" font-size="12.5" font-weight="bold">地面散热快：冷空气 Cool air（声速较慢）</text>
                <circle cx="420" cy="122" r="7" fill="#4f46e5"/>
                <path d="M 427 118 Q 555 58, 685 124" fill="none" stroke="#4f46e5" stroke-width="3"/>
                <polygon points="684,118 694,128 679,128" fill="#4f46e5"/>
                <circle cx="698" cy="130" r="6" fill="#0d9488"/>
                <text x="485" y="80" fill="#312e81" font-size="12" font-weight="bold">声波向下弯回地面（传得更远）！</text>
              </svg>
              <div class="diagram-caption">图 7.2：声波总是向“波速较慢（温度较低）”的那一侧空气层弯曲！</div>
            </div>
          `
        },
        {
          title: '3. 声波的衍射：为什么“隔墙闻其声、不见其人”，且低音比高音更绕弯？',
          html: `
            <ul>
              <li><strong>声波 vs 光波过房门（HKDSE 满分标准模板）</strong>：
                <ul>
                  <li>日常人声波长约为 $0.3\\text{ m} \\sim 3\\text{ m}$，与房门或墙角的尺寸（约 $1\\text{ m}$）<strong>大小相当（comparable to the width of the doorway）</strong>，因此声波发生<strong>明显衍射（pronounced diffraction）</strong>绕过墙角传进耳中；</li>
                  <li>可见光的波长极短（约 $5 \\times 10^{-7}\\text{ m}$），<strong>远小于房门宽度（much smaller than the doorway）</strong>，衍射极其微弱，无法绕过墙角。</li>
                </ul>
              </li>
              <li><strong>低音（Low-pitched sound）vs 高音（High-pitched sound）</strong>：低音频率 $f$ 较低 $\\Rightarrow$ 波长 $\\lambda = \\frac{v}{f}$ 更长 $\\Rightarrow$ 遇到门窗、柱子时<strong>低音比高音的衍射明显得多</strong>！这就是为什么在音乐厅门外走廊上，听到的重低音贝斯鼓点格外清晰，而高音长笛却变弱了很多。</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '回声 / 声呐脉冲往返测距公式（Echo / Sonar Ranging）',
          badge: '必考核心公式 · Core',
          latex: '2d = vt \\quad \\Longrightarrow \\quad d = \\frac{vt}{2}',
          vars: [
            '$d$：声源/探测器到反射障碍物的单程距离（$\\text{m}$）',
            '$v$：该介质中的声速（空气约 $340\\text{ m s}^{-1}$，海水约 $1500\\text{ m s}^{-1}$）',
            '$t$：从发出脉冲到接收到反射回波的往返时间（$\\text{s}$）'
          ],
          condition: '适用于声源与障碍物均静止的情形；若声源以速率 $u$ 向静止崖壁驶近，则满足 $(v + u)t = 2d_0$。'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：一步步推演“汽车鸣笛迎向悬崖”的回声妙题',
        intro: '假设一辆汽车正以 $u = 20\\text{ m s}^{-1}$ 匀速向正前方的悬崖驶去，司机在距离悬崖 $d_0 = 360\\text{ m}$ 处按响喇叭（空气声速 $v = 340\\text{ m s}^{-1}$）：',
        steps: [
          {
            q: '追问 1：从按喇叭到司机听见回声经过了时间 $t$。在这段时间 $t$ 内，声音先跑到悬崖再折返迎上汽车，汽车也往前开了一截——“声音走的路程 $vt$”加上“汽车开的路程 $ut$”合起来刚好等于多少？',
            options: [
              '刚好等于最初距离的两倍：$vt + ut = 2d_0 = 720\\text{ m}$！',
              '等于 $d_0 = 360\\text{ m}$'
            ],
            answerIndex: 0,
            a: '画条线段一目了然！声音从起点走到崖壁是 $d_0$，再从崖壁往回走、跟迎面开来的汽车相遇合凑出第二个 $d_0$，所以 $vt + ut = 2d_0$！'
          },
          {
            q: '追问 2：把 $v = 340\\text{ m s}^{-1}$、$u = 20\\text{ m s}^{-1}$ 和 $2d_0 = 720\\text{ m}$ 代入 $(340 + 20)t = 720$，司机过几秒听到回声？',
            options: [
              '$t = \\frac{720}{360} = 2.0\\text{ s}$',
              '$t = \\frac{720}{340} \\approx 2.12\\text{ s}$'
            ],
            answerIndex: 0,
            a: '秒出答案！因为汽车自己也迎上去接回声，所以比停在原地时（$2.12\\text{ s}$）更早听到，只需整整 $2.0\\text{ s}$！'
          },
          {
            q: '追问 3：最后一击！题目如果问“司机听到回声的那一刻，汽车距离悬崖还有多远？”，答案是多少？',
            options: [
              '$360 - 20 \\times 2.0 = 320\\text{ m}$！',
              '还是 $360\\text{ m}$'
            ],
            answerIndex: 0,
            a: '完美防坑！$2.0\\text{ s}$ 内汽车已经往前开了 $40\\text{ m}$，所以听到回声时离悬崖只剩 $320\\text{ m}$！以后任何移动回声题都难不倒你了！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 5.2 & 5.3 节（水波折射与衍射）',
          text: '夜晚地面冷空气就像水波槽里的“浅水区（波速慢）”，声波自然向地面冷空气一侧弯曲！',
          targetSec: '5.2'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.3 节（超声波声呐测深）',
          text: '探测船测量海底深度、医院 B 超探测器官位置，计算的底层公式全都是这一节的 $d = \\frac{vt}{2}$！',
          targetSec: '7.3'
        }
      ],
      traps: [
        {
          wrong: '误区 1：白天地面空气热，以为“热空气往上升把声波吹上了天”！',
          right: '真相：大错特错！不是风吹的，而是<strong>折射（refraction）</strong>！标准得分句必须写：sound travels faster in warmer air near the ground than in cooler air above, so sound waves refract (bend) upwards away from the ground！'
        },
        {
          wrong: '误区 2：回声题算得太顺手，忘记除以 $2$，把往返总路程 $vt$ 直接写成悬崖距离 $d$！',
          right: '真相：看到 echo / sonar / radar / ultrasound pulse reflection，第一反应先在草稿纸写上大大的 $2d = vt$！'
        }
      ],
      questions: [
        {
          id: 'q-7-2-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '你站在走廊拐角处，看不到房间里正在说话的姐姐，却能清楚听见她的声音；而且如果房间里音响同时播放高音长笛和低音大鼓，你在拐角外听到的低音鼓声明显比高音笛声更突出。这主要是因为什么现象？',
          options: [
            '声波波长与房门宽度相近发生明显衍射，且低音波长更长、衍射更显著',
            '声波在门框处发生了全内反射，且低音声速更快',
            '光波不能在空气中发生反射，而声波可以',
            '低音频率更高、能量更强，能直接穿透水泥墙壁'
          ],
          answerIndex: 0,
          hint: '抓两个关键词：绕过门框墙角叫什么波动现象？低音频率低，根据 $\\lambda = \\frac{v}{f}$ 它的波长更长还是更短？',
          wrongDiagnostics: [
            '',
            '同一空气中低音和高音的声速完全相同！能绕过墙角是因为衍射（diffraction），不是全反射哦。',
            '光波当然能反射，看不见姐姐是因为光波波长极短（$\\sim 10^{-7}\\text{ m}$），穿过约 $1\\text{ m}$ 宽的房门时衍射极微弱！',
            '低音的频率是更低（lower frequency）而不是更高，正是因为频率低使波长更长，绕过门框衍射更强！'
          ],
          explanation: '声波波长（分米至米级）与房门宽度相当，能发生<strong>明显衍射（significant diffraction）</strong>绕过墙角；而可见光波长远小于门宽，几乎不衍射。同时低音频率较低、波长更长，比高音更容易发生大幅度衍射。',
          markingKeywords: ['wavelength of sound comparable to doorway → significant diffraction', 'low-pitched sound has longer wavelength → diffracts more']
        },
        {
          id: 'q-7-2-2',
          level: 2,
          levelLabel: '第二阶 · 移动回声定量推演',
          stem: '一艘考察船以 $10\\text{ m s}^{-1}$ 的恒定速率径直驶向一座陡峭海岛悬崖。船在某位置鸣响汽笛，经过 $4.0\\text{ s}$ 后船员听到悬崖反射回来的回声。已知空气中声速为 $340\\text{ m s}^{-1}$，求<strong>船员听到回声的那一刻</strong>船与悬崖的距离。',
          options: [
            '$700\\text{ m}$',
            '$660\\text{ m}$',
            '$680\\text{ m}$',
            '$1360\\text{ m}$'
          ],
          answerIndex: 1,
          hint: '用我们在连环追问里刚练过的神技！① 先由 $(340 + 10) \\times 4.0 = 2d_0$ 算出鸣笛时的初始距离 $d_0$；② 别急着选 $d_0$！看清题目问的是“听到回声那一刻”的距离，记得减去 $4.0\\text{ s}$ 内船往前开的 $40\\text{ m}$！',
          wrongDiagnostics: [
            '差最后一步就满分啦！$700\\text{ m}$ 是船刚开始鸣笛时的初始距离 $d_0$；在等回声的 $4.0\\text{ s}$ 里船又往前开了 $10 \\times 4.0 = 40\\text{ m}$，所以听到回声时离悬崖是 $700 - 40 = 660\\text{ m}$！',
            '',
            '$680\\text{ m}$ 是当成船静止不动（$\\frac{340 \\times 4}{2}$）算出来的，忘了考虑船在这 $4.0\\text{ s}$ 内往前开了 $40\\text{ m}$ 哦！',
            '$1360\\text{ m}$ 是声音 $4.0\\text{ s}$ 跑的总路程，既忘了往返折半，也忘了船在移动！'
          ],
          explanation: '设鸣笛时船距悬崖 $d_0$。在 $t = 4.0\\text{ s}$ 内，声音走过 $vt = 340 \\times 4.0 = 1360\\text{ m}$，船驶近 $ut = 10 \\times 4.0 = 40\\text{ m}$。<br>由路程关系 $vt + ut = 2d_0$ 得：$1360 + 40 = 2d_0 \\Rightarrow d_0 = 700\\text{ m}$。<br>听到回声那一刻，船已前进 $40\\text{ m}$，故此时距悬崖 $d = 700 - 40 = 660\\text{ m}$。',
          markingKeywords: ['d_sound + d_ship = 2d₀ → 1360 + 40 = 2d₀ → d₀ = 700 m', 'distance when echo heard = 700 - 40 = 660 m']
        },
        {
          id: 'q-7-2-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'At night, the air near the ground is cooler than the air higher up. Why can distant sounds often be heard more clearly at night than during the day?',
          cnTranslation: '在夜晚，靠近地面的空气比高处的空气更冷。为什么在夜晚往往比白天能更清楚地听见远处的声音？',
          options: [
            'Sound travels faster in the cooler air near the ground, causing sound waves to bend upwards.',
            'Sound travels slower in the cooler air near the ground than in the warmer air above, causing upward-travelling sound waves to refract downwards back towards the ground.',
            'Cold air increases the frequency of the sound waves so they carry more energy.',
            'Sound waves undergo total internal reflection off the cold ground.'
          ],
          answerIndex: 1,
          hint: '先锁定声速与温度的关系：近地面冷空气声速慢，高空较暖空气声速快；波前上半截跑得比下半截快，声波会往哪边弯？',
          wrongDiagnostics: [
            '写反啦！冷空气中声速更慢（slower），不是更快；而且向上弯是白天的现象，会让地面听不清！',
            '',
            '空气温度改变的是声速和波长，绝不会改变声波的频率 $f$！',
            '这不是全反射回地面，而是斜向高空发散的声波在温度梯度空气层中向下折射弯回地面！'
          ],
          explanation: '夜晚近地面空气较冷（<strong>声速较慢 slower</strong>），上方空气相对较暖（<strong>声速较快 faster</strong>）。斜向高空传播的声波在高空跑得更快，波前向下偏转，即<strong>声波向地面方向折射（refract downwards towards the ground）</strong>，使更多声能回到地面观察者耳中。',
          markingKeywords: ['sound travels slower in cooler air near ground than in warmer air above', 'sound waves refract / bend downwards towards the ground']
        }
      ]
    },

    /* ========================================================================
       Section 7.3
       ======================================================================== */
    {
      id: '7.3',
      code: '7.3',
      titleCn: '声波的干涉、听觉范围与超声波应用',
      titleEn: 'Interference of Sound, Audible Range and Ultrasound',
      dseTag: '必考实验问答与超声波 · Core & * Ext',
      realLifeHook: {
        title: '🦇 先从生活出发：蝙蝠黑夜捕虫与医院胎儿 B 超，为什么都钟情“超声波”？',
        html: `
          <p>人类耳朵能听见的声音上限大约在 $20\\,000\\text{ Hz}$（$20\\text{ kHz}$），可是蝙蝠和海豚却能发出高达 $50\\text{ kHz} \\sim 100\\text{ kHz}$ 的<strong>超声波（ultrasound）</strong>！为什么蝙蝠不干脆“大喊一声普通口哨”去探测飞蛾，非要用高频超声波呢？</p>
          <p>算一下波长你就恍然大悟了：$1000\\text{ Hz}$ 口哨声波长有 $34\\text{ cm}$，碰到只有 $1\\text{ cm}$ 大的小飞蛾会直接<strong>衍射绕过去</strong>，根本反射不回多少回声；而 $100\\text{ kHz}$ 超声波波长只有 $3.4\\text{ mm}$，衍射极小，能聚成激光般精准的声束打在小飞蛾身上反射回来！医学 B 超和声呐正是向大自然学来的绝技！</p>
        `
      },
      concepts: [
        {
          title: '1. 双扬声器声波干涉实验（Interference of Sound from Two Loudspeakers）',
          html: `
            <ul>
              <li><strong>实验设置</strong>：在空旷场地（或吸音良好的实验室）将两个相同的扬声器 $L_1, L_2$ 相隔约 $1\\text{ m}$ 放置，并<strong>连接到同一个信号发生器（connected to the same signal generator）</strong>，目的是确保两扬声器发出<strong>频率相同且相位差恒定的相干声波（coherent sound waves）</strong>。</li>
              <li><strong>实验现象</strong>：观察者堵住一只耳朵（或手持接上示波器 CRO 的麦克风）沿平行于两扬声器连线的直线 $XY$ 缓慢走动，会交替听到<strong>响声（loud sound，相长干涉 $\\Delta = n\\lambda$）</strong>与<strong>弱声（soft sound，相消干涉 $\\Delta = (n + \\frac{1}{2})\\lambda$）</strong>。</li>
              <li><strong>🌟 HKDSE 必背两分问答题：为什么在普通实验室里，相消干涉位置听到的只是“弱声（soft sound）”，而不是“完全无声（complete silence）”？</strong>
                <ol>
                  <li><strong>墙壁、地板与天花板反射的声波</strong>也会传到该位置（<span class="term-en">sound waves reflected from walls, ceiling and floor also reach those positions</span>）；</li>
                  <li>该位置到两个扬声器的距离一般不相等（$L_1P \\neq L_2P$），较远一列声波衰减更多，导致<strong>两列声波到达该点时的振幅不完全相等</strong>（<span class="term-en">the two waves arriving have unequal amplitudes</span>），反相叠加后仍有剩余振幅！</li>
                </ol>
              </li>
            </ul>
          `
        },
        {
          title: '2. 人类听觉频率范围（Audible Frequency Range）与超声波（Ultrasound）',
          html: `
            <ul>
              <li><span class="term">人类听觉频率范围</span><span class="term-en">audible frequency range</span>：约为 <strong>$20\\text{ Hz}$ 至 $20\\text{ kHz}$（$20\\,000\\text{ Hz}$）</strong>。（人随着年龄增长，耳蜗对高频的敏感度下降，高频上限会降到 $15\\text{ kHz}$ 甚至更低。）</li>
              <li><span class="term">超声波</span><span class="term-en">ultrasound</span>：频率<strong>高于 $20\\text{ kHz}$</strong> 的声波。
                <ul>
                  <li><strong>三大核心应用</strong>：① 船用<strong>声呐（SONAR）</strong>探测水深、鱼群或冰山；② 医学<strong>产前超声波扫描（prenatal ultrasonic scanning / B-scan）</strong>观察胎儿；③ 工业检测金属铸件内部微小裂纹（flaw detection）及超声波清洗眼镜/珠宝。</li>
                  <li><strong>必背优势 A（对比普通可听声波）</strong>：频率高 $\\Rightarrow$ <strong>波长 $\\lambda$ 短 $\\Rightarrow$ 衍射很小（much less diffraction）</strong>，因此可以发射成<strong>狭窄定向波束（narrow directional beam）</strong>，且能清晰反射微小目标（高分辨率）！</li>
                  <li><strong>必背优势 B（对比医学 X 射线）</strong>：超声波是非电离机械波（non-ionising），不会像 X 射线那样电离破坏人体与胎儿细胞 DNA，<strong>对孕妇和胎儿安全得多（much safer for the foetus）</strong>！</li>
                </ul>
              </li>
            </ul>
          `
        }
      ],
      formulae: [],
      guidedChain: {
        title: '🧭 连环追问推导：调节信号发生器频率，走廊上的“响声点”怎么动？',
        intro: '把两个同相发声的扬声器 $L_1, L_2$ 接在同一台信号发生器上，正前方中垂线上有一点 $O$，$O$ 旁边第一个响声点在 $P_1$：',
        steps: [
          {
            q: '追问 1：正中央中垂线上的 $O$ 点到两个同相扬声器的距离相等（$\\Delta = 0$）。如果此时缓缓调高信号发生器的频率 $f$，$O$ 点会变成弱声还是保持响声？',
            options: [
              '始终保持响声！因为无论波长 $\\lambda$ 怎么变，$O$ 点的波程差永远是 $\\Delta = 0$，永远同相相长！',
              '会交替变成弱声和响声'
            ],
            answerIndex: 0,
            a: '超稳！只要两扬声器保持同相，中垂线 $\\Delta = 0$ 铁打不动永远是第 0 级腹线（响声）！'
          },
          {
            q: '追问 2：那旁边的第 1 级响声点 $P_1$ 呢？调高频率 $f$ 后，空气中声波的波长 $\\lambda = \\frac{v}{f}$ 变短了，相邻两个响声点之间的间距会变宽还是变密？',
            options: [
              '间距变密（$P_1$ 向中央 $O$ 靠拢！），走过同样一段距离会听到更多次“响—弱”交替',
              '间距变宽（$P_1$ 远离中央 $O$）'
            ],
            answerIndex: 0,
            a: '跟水波干涉和杨氏双缝完全相通！$\\lambda$ 变短后，只需更小的偏角就能凑够 $1\\lambda$ 的程差，所以响声点间距变窄变密！'
          },
          {
            q: '追问 3：如果实验员不小心把右侧扬声器 $L_2$ 背面的红黑接线柱接反了（导致纸盆动作与 $L_1$ 刚好一推一拉相反，变成 in antiphase），中央 $O$ 点瞬间会发生什么？',
            options: [
              '瞬间由“响声（constructive）”反转为“弱声（destructive）”！',
              '没有任何变化'
            ],
            answerIndex: 0,
            a: '一招制胜！接线反接 = 反相波源（in antiphase），$\\Delta = 0$ 处两列声波一密一疏反相抵消，中央立刻变成弱声点！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 5.4 节（相干波源与波程差）',
          text: '水波双振子连同一马达 ↔ 光波双缝分自同一束激光 ↔ 声波双喇叭接同一信号发生器：全书三大干涉实验底层逻辑 100% 统一！',
          targetSec: '5.4'
        },
        {
          dir: '⏭️ 后续衔接 → 第 7.4 节（用 CRO 测响弱与频率）',
          text: '人耳判断响弱有主观性，在实验室里把麦克风接上示波器（CRO），看屏幕振幅高低就能客观定量找出干涉极大与极小点！',
          targetSec: '7.4'
        }
      ],
      traps: [
        {
          wrong: '误区 1：把两台独立手机同时播放 $500\\text{ Hz}$ 纯音放在桌上，以为能听到稳定的声波干涉响弱条纹。',
          right: '真相：两台独立音源往往难以严格锁死恒定相位差；标准实验必须把两个扬声器接到<strong>同一个信号发生器（same signal generator）</strong>才能保证相干（coherent）！'
        },
        {
          wrong: '误区 2：以为人听不见 $40\\text{ kHz}$ 的超声波是因为它“振幅太小、声音太轻”。',
          right: '真相：就算 $40\\text{ kHz}$ 超声波功率极大、振幅很强，人耳也听不见——原因纯粹是它的<strong>频率超出了人类听觉上限 $20\\text{ kHz}$</strong>！'
        }
      ],
      linkedLab: {
        labId: 'lab4',
        title: '实验 4：把双波源看作双扬声器测试程差 Δ',
        prompt: '在实验 4 中切换「同相 / 反相（喇叭反接）」，拖动探测麦克风 P 沿水平线移动，直观看到腹线（响声）与节线（弱声）交替！'
      },
      questions: [
        {
          id: 'q-7-3-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '正常青年人的听觉频率范围（audible frequency range）大约是多少？在常温空气（声速 $340\\text{ m s}^{-1}$）中，下列哪个波长的声波属于<strong>超声波（ultrasound）</strong>？',
          options: [
            '$20\\text{ Hz} \\sim 20\\text{ kHz}$；波长为 $0.0085\\text{ m}$（即 $8.5\\text{ mm}$）的声波',
            '$20\\text{ Hz} \\sim 2000\\text{ Hz}$；波长为 $0.34\\text{ m}$ 的声波',
            '$20\\text{ Hz} \\sim 20\\text{ kHz}$；波长为 $34\\text{ m}$ 的声波',
            '$0\\text{ Hz} \\sim 20\\text{ kHz}$；波长为 $1.7\\text{ m}$ 的声波'
          ],
          answerIndex: 0,
          hint: '先确认人耳范围是 $20\\text{ Hz}$ 到 $20\\text{ kHz}$（$20\\,000\\text{ Hz}$）！当 $f > 20\\,000\\text{ Hz}$ 时，空气中波长 $\\lambda = \\frac{340}{f}$ 应该比 $\\frac{340}{20\\,000} = 0.017\\text{ m}$（$1.7\\text{ cm}$）更短还是更长？',
          wrongDiagnostics: [
            '',
            '人耳高频上限是 $20\\text{ kHz}$（$20\\,000\\text{ Hz}$），不是 $2000\\text{ Hz}$ 哦！且 $\\lambda = 0.34\\text{ m}$ 对应 $1000\\text{ Hz}$，正是人耳最敏感的可听声！',
            '范围背对了！但 $\\lambda = 34\\text{ m}$ 对应的频率是 $f = \\frac{340}{34} = 10\\text{ Hz} < 20\\text{ Hz}$，这是低于人耳下限的次声波（infrasound），不是超声波！',
            '人耳听不到低于 $20\\text{ Hz}$ 的振动，且 $\\lambda = 1.7\\text{ m}$ 对应 $200\\text{ Hz}$，属于普通可听低音。'
          ],
          explanation: '1. 人类听觉频率范围为 <strong>$20\\text{ Hz}$ 至 $20\\text{ kHz}$（$20\\,000\\text{ Hz}$）</strong>。<br>2. 超声波频率 $f > 20\\,000\\text{ Hz}$，在空气中其波长必满足 $\\lambda = \\frac{340}{f} < 0.017\\text{ m}$。波长 $0.0085\\text{ m}$ 对应频率 $f = \\frac{340}{0.0085} = 40\\,000\\text{ Hz} = 40\\text{ kHz} > 20\\text{ kHz}$，属于超声波！',
          markingKeywords: ['audible range: 20 Hz to 20 kHz', 'ultrasound: f > 20 kHz → λ < 0.017 m in air']
        },
        {
          id: 'q-7-3-2',
          level: 2,
          levelLabel: '第二阶 · 双扬声器干涉计算',
          stem: '两个连接到同一信号发生器、<strong>同相发声</strong>的扬声器 $L_1$ 和 $L_2$，发出频率为 $850\\text{ Hz}$ 的纯音（空气声速为 $340\\text{ m s}^{-1}$）。某学生站在 $P$ 点，测得 $L_1P = 3.20\\text{ m}$，$L_2P = 3.80\\text{ m}$。请问她在 $P$ 点听到响声还是弱声？如果她原地不动，老师把信号发生器频率慢慢从 $850\\text{ Hz}$ 调高到 $1700\\text{ Hz}$，到达 $1700\\text{ Hz}$ 时她在 $P$ 点听到什么？',
          options: [
            '$850\\text{ Hz}$ 时听到弱声；$1700\\text{ Hz}$ 时变成响声',
            '$850\\text{ Hz}$ 时听到响声；$1700\\text{ Hz}$ 时变成弱声',
            '两次都听到响声',
            '两次都听到弱声'
          ],
          answerIndex: 0,
          hint: '定点变波长好题！$P$ 点的几何波程差固定是 $\\Delta = 3.80 - 3.20 = 0.60\\text{ m}$。① 先算 $850\\text{ Hz}$ 时波长 $\\lambda_1 = \\frac{340}{850} = 0.40\\text{ m}$，$0.60\\text{ m}$ 是几个 $\\lambda_1$？② 再算 $1700\\text{ Hz}$ 时波长 $\\lambda_2 = \\frac{340}{1700} = 0.20\\text{ m}$，$0.60\\text{ m}$ 又是几个 $\\lambda_2$？',
          wrongDiagnostics: [
            '',
            '算反啦！在 $850\\text{ Hz}$ 时 $\\lambda_1 = 0.40\\text{ m}$，程差 $\\Delta = 0.60\\text{ m} = 1.5\\lambda_1$（半波长奇数倍，相消弱声）；在 $1700\\text{ Hz}$ 时 $\\lambda_2 = 0.20\\text{ m}$，$\\Delta = 0.60\\text{ m} = 3\\lambda_2$（整倍数，相长响声）！',
            '在 $850\\text{ Hz}$ 时 $\\frac{0.60}{0.40} = 1.5$，不是整数倍波长，所以第一次是相消干涉（弱声）哦！',
            '当频率翻倍到 $1700\\text{ Hz}$ 时，新波长缩减为 $0.20\\text{ m}$，此时 $\\frac{0.60}{0.20} = 3$ 恰好变成整数倍，会反转为相长响声！'
          ],
          explanation: '点 $P$ 的波程差固定为 $\\Delta = |L_2P - L_1P| = 3.80 - 3.20 = 0.60\\text{ m}$。<br>1. 当 $f_1 = 850\\text{ Hz}$ 时，$\\lambda_1 = \\frac{340}{850} = 0.40\\text{ m}$，$\\Delta = 0.60\\text{ m} = 1.5\\lambda_1$，发生相消干涉，听到<strong>弱声（soft sound）</strong>。<br>2. 当 $f_2 = 1700\\text{ Hz}$ 时，$\\lambda_2 = \\frac{340}{1700} = 0.20\\text{ m}$，$\\Delta = 0.60\\text{ m} = 3\\lambda_2$，发生相长干涉，听到<strong>响声（loud sound）</strong>！',
          markingKeywords: ['Δ = 0.60 m', 'at 850 Hz, λ₁ = 0.40 m → Δ = 1.5λ₁ (destructive / soft)', 'at 1700 Hz, λ₂ = 0.20 m → Δ = 3λ₂ (constructive / loud)']
        },
        {
          id: 'q-7-3-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Which of the following correctly states the main reasons why <strong>ultrasound</strong> (instead of audible sound or X-rays) is used in prenatal scanning of a foetus?<br>(1) Ultrasound has a much shorter wavelength than audible sound, so it diffracts much less and forms a narrow beam for sharp imaging.<br>(2) Ultrasound is non-ionising and therefore much safer for the foetus than X-rays.<br>(3) Ultrasound travels at the speed of light in human tissue, giving instant images.',
          cnTranslation: '下列哪些正确说明了产前胎儿检查选用<strong>超声波</strong>（而非普通可听声波或 X 射线）的主要原因？(1) 超声波波长远短于可听声波，因此衍射小得多，能形成窄波束获得清晰图像。(2) 超声波是非电离性的，因此对胎儿比 X 射线安全得多。(3) 超声波在人体组织中以光速传播，能瞬间成像。',
          options: [
            '(1) only',
            '(1) and (2) only',
            '(2) and (3) only',
            '(1), (2) and (3)'
          ],
          answerIndex: 1,
          hint: '看第 (3) 句！超声波是机械声波，它在人体软组织（主要是水）里的波速大约是 $1500\\text{ m s}^{-1}$，怎么可能等于光速 $3 \\times 10^8\\text{ m s}^{-1}$ 呢？',
          wrongDiagnostics: [
            '第 (1) 句确实对，但别忘了第 (2) 句（非电离、不伤胎儿细胞）正是超声波相比 X 射线最大的医学安全优势！',
            '',
            '第 (3) 句掉进经典伪装坑啦！超声波是声波，在人体组织中的速率约 $1540\\text{ m s}^{-1}$，远小于光速！',
            '第 (3) 句错把超声波当成了光速电磁波！记住超声波永远是机械纵波。'
          ],
          explanation: '• <strong>(1) 正确</strong>：相比可听声波，超声波频率极高、波长极短，衍射极小（diffracts much less），可聚成窄声束并分辨细小结构。<br>• <strong>(2) 正确</strong>：相比 X 射线（电离辐射），超声波是非电离机械波（non-ionising），对胎儿安全。<br>• <strong>(3) 错误</strong>：超声波在软组织中的速率约为 $1500\\text{ m s}^{-1}$，绝不是光速。故选 <strong>(1) and (2) only</strong>。',
          markingKeywords: ['shorter wavelength → less diffraction / sharper beam', 'non-ionising → safe for foetus']
        }
      ]
    },

    /* ========================================================================
       Section 7.4
       ======================================================================== */
    {
      id: '7.4',
      code: '7.4',
      titleCn: '乐音三要素与示波器（CRO）波形分析',
      titleEn: 'Musical Notes (Pitch, Loudness, Quality) and CRO Traces',
      dseTag: '必考读图与计算 · Core',
      realLifeHook: {
        title: '🎹 先从生活出发：闭着眼睛听同一个“中央 Do”，为什么一秒就能分清钢琴、小提琴还是妈妈哼唱？',
        html: `
          <p>请钢琴手和小提琴手同时拉奏同一个音符（比如 $440\\text{ Hz}$ 的标准 A 音），并且控制音量一模一样大。既然<strong>音调高低（频率 $f$）相同</strong>、<strong>声音响度（振幅 $A$）也相同</strong>，为什么我们的耳朵闭着眼都能瞬间认出谁是钢琴、谁是小提琴？</p>
          <p>只要把麦克风接上物理实验室的<strong>阴极射线示波器（CRO）</strong>，谜底立刻揭晓：音叉的波形是光滑纯正的正弦波，而小提琴和钢琴在每秒重复 $440$ 次的大波浪上，各自叠满了锯齿状的小花纹（泛音 overtones）——正是波形的“长相（waveform）”赋予了每种乐器独一无二的灵魂（<strong>音色 quality / timbre</strong>）！</p>
        `
      },
      concepts: [
        {
          title: '1. 乐音三要素与物理量的铁律对应（严禁混淆！）',
          html: `
            <table class="compare-table">
              <thead>
                <tr>
                  <th>主观听觉特征（你耳朵听到的）</th>
                  <th>决定的客观物理量（课本必考！）</th>
                  <th>在相同设置的示波器（CRO）屏幕上怎么看？</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 音调（Pitch）</strong><br>（声音尖细高亢 vs 低沉浑厚）</td>
                  <td>由<strong>频率 $f$（frequency）</strong>决定<br>（$f$ 越高 $\\Leftrightarrow$ 音调越高）</td>
                  <td>看<strong>水平疏密</strong>：周期 $T$ 越短，同一屏幕宽度内出现的<strong>完整波形个数越多（more cycles）</strong>！</td>
                </tr>
                <tr>
                  <td><strong>2. 响度（Loudness）</strong><br>（声音响亮大声 vs 轻柔微弱）</td>
                  <td>由<strong>振幅 $A$（amplitude）</strong>决定<br>（$A$ 越大，能量越强 $\\Leftrightarrow$ 越响）</td>
                  <td>看<strong>竖直高低</strong>：波峰与波谷偏离中心线的<strong>竖直格数越高（larger vertical amplitude）</strong>！</td>
                </tr>
                <tr>
                  <td><strong>3. 音色 / 音品（Quality / Timbre）</strong><br>（区分不同乐器或不同人的嗓音）</td>
                  <td>由<strong>波形（waveform）</strong>决定<br>（即基音 fundamental + 不同比例泛音 overtones）</td>
                  <td>看<strong>曲线形状</strong>：在周期 $T$ 与振幅 $A$ 相同时，<strong>每个重复周期内的曲线形状不同</strong>！（纯音叉是正弦曲线，乐器是复杂周期曲线，噪音则是无周期乱纹）</td>
                </tr>
              </tbody>
            </table>

            <div class="diagram-card">
              <svg viewBox="0 0 760 195" width="100%" aria-label="示波器CRO四种声音波形对比图">
                <!-- Panel 1: Reference Note -->
                <rect x="16" y="18" width="170" height="122" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                <line x1="16" y1="79" x2="186" y2="79" stroke="#334155" stroke-width="1"/>
                <path d="M 24 79 Q 44 42, 64 79 T 104 79 T 144 79 T 180 79" fill="none" stroke="#22c55e" stroke-width="2.5"/>
                <text x="32" y="162" fill="#0f766e" font-size="12.5" font-weight="bold">(a) 基准音叉纯音</text>
                <text x="42" y="178" fill="#64748b" font-size="11.5">(频率 f，振幅 A)</text>

                <!-- Panel 2: Higher Pitch (2f, same A) -->
                <rect x="202" y="18" width="170" height="122" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                <line x1="202" y1="79" x2="372" y2="79" stroke="#334155" stroke-width="1"/>
                <path d="M 210 79 Q 220 42, 230 79 T 250 79 T 270 79 T 290 79 T 310 79 T 330 79 T 350 79 T 366 79" fill="none" stroke="#38bdf8" stroke-width="2.3"/>
                <text x="218" y="162" fill="#0284c7" font-size="12.5" font-weight="bold">(b) 更高音调 Higher pitch</text>
                <text x="220" y="178" fill="#64748b" font-size="11.5">(波变密 2f，高度 A 不变)</text>

                <!-- Panel 3: Louder Sound (same f, 2A) -->
                <rect x="388" y="18" width="170" height="122" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                <line x1="388" y1="79" x2="558" y2="79" stroke="#334155" stroke-width="1"/>
                <path d="M 396 79 Q 416 14, 436 79 T 476 79 T 516 79 T 552 79" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
                <text x="404" y="162" fill="#d97706" font-size="12.5" font-weight="bold">(c) 更大响度 Louder</text>
                <text x="402" y="178" fill="#64748b" font-size="11.5">(疏密 f 不变，波变高 2A)</text>

                <!-- Panel 4: Different Quality / Timbre (same f, same A, complex waveform) -->
                <rect x="574" y="18" width="170" height="122" rx="8" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                <line x1="574" y1="79" x2="744" y2="79" stroke="#334155" stroke-width="1"/>
                <path d="M 582 79 L 594 42 L 604 64 L 612 48 L 622 79 L 634 116 L 644 94 L 652 110 L 662 79 L 674 42 L 684 64 L 692 48 L 702 79 L 714 116 L 724 94 L 732 110 L 740 79" fill="none" stroke="#c084fc" stroke-width="2.3"/>
                <text x="585" y="162" fill="#7c3aed" font-size="12.5" font-weight="bold">(d) 不同乐器音色 Quality</text>
                <text x="586" y="178" fill="#64748b" font-size="11.5">(同周期 T 同高度，波形异)</text>
              </svg>
              <div class="diagram-caption">图 7.3：同一示波器设置下，对比音调（水平疏密）、响度（竖直高度）与音色（波形轮廓）。</div>
            </div>
          `
        },
        {
          title: '2. 示波器（CRO）旋钮与定量读数（Time-base & Y-gain）',
          html: `
            <ul>
              <li><strong>千万认清坐标轴</strong>：麦克风 + CRO 显示的是<strong>电压—时间图像（voltage–time graph，等效于 $s\\text{–}t$ 图）</strong>！横格代表<strong>时间（time）</strong>，纵格代表<strong>电压/振幅（voltage/amplitude）</strong>——<strong>单凭 CRO 屏幕绝对无法直接读出波长 $\\lambda$</strong>（除非另外告诉你声速 $v$ 再用 $\\lambda = \\frac{v}{f}$ 计算）！</li>
              <li><strong>计算步骤</strong>：
                <ol>
                  <li>在屏幕上找出<strong>$1$ 个完整重复周期（one complete cycle，注意复杂乐器波形要找大周期！）</strong>所占的水平格数 $n_x$（例如 $4$ 格）；</li>
                  <li>乘以时基旋钮读数（time-base setting，如 $2.5\\text{ ms div}^{-1}$），得到周期：$T = 4 \\times 2.5\\text{ ms} = 10\\text{ ms} = 0.010\\text{ s}$；</li>
                  <li>取倒数求出声音频率：$f = \\frac{1}{T} = \\frac{1}{0.010} = 100\\text{ Hz}$！</li>
                </ol>
              </li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '示波器（CRO）时基读周期与频率公式（CRO Time-base Calculation）',
          badge: '必考读图公式 · Core',
          latex: 'T = n_x \\times (\\text{time-base}), \\qquad f = \\frac{1}{T}',
          vars: [
            '$n_x$：$1$ 个完整周期波形在屏幕上所占的水平格数（$\\text{div}$）',
            '$\\text{time-base}$：时基设置（每格代表的时间，如 $\\text{ms div}^{-1}$）',
            '$T, f$：声波的周期（$\\text{s}$）与频率（$\\text{Hz}$）'
          ],
          condition: '⚠️ 旋钮陷阱：如果声音本身没变，只是老师把 CRO 的 time-base 从 $2\\text{ ms div}^{-1}$ 拧成 $1\\text{ ms div}^{-1}$（每格时间减半），屏幕上的波形会被横向拉宽一倍，但声音的真实频率 $f$ 没有变！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：别被 CRO 旋钮骗了！分清“声音变了”还是“旋钮拧了”',
        intro: '假设音叉对着麦克风持续发出 $250\\text{ Hz}$（周期 $T = 4\\text{ ms}$）的稳定声音，当前 CRO 时基设为 $2\\text{ ms div}^{-1}$：',
        steps: [
          {
            q: '追问 1：既然 $1$ 个完整周期是 $T = 4\\text{ ms}$，而水平每 $1$ 格代表 $2\\text{ ms}$，现在屏幕上 $1$ 个完整正弦波占几格宽？',
            options: [
              '占 $\\frac{4\\text{ ms}}{2\\text{ ms div}^{-1}} = 2$ 格宽！',
              '占 $8$ 格宽'
            ],
            answerIndex: 0,
            a: '算得清清楚楚！每 $2$ 格就是一个完整周期 $4\\text{ ms}$。'
          },
          {
            q: '追问 2：现在音叉换成另一支音调高八度的音叉（频率变成 $500\\text{ Hz}$，周期缩短为 $2\\text{ ms}$），且更用力敲击！不碰 CRO 任何旋钮，屏幕图形怎么变？',
            options: [
              '每个完整波缩窄为只占 $1$ 格宽（波变密），且波峰上下变得更高！',
              '每个完整波拉宽成 $4$ 格宽，波峰变矮'
            ],
            answerIndex: 0,
            a: '完全正确！音调变高 $\\to f$ 翻倍 $\\to T$ 减半为 $2\\text{ ms}$（占 $1$ 格）；更用力敲 $\\to$ 响度变大 $\\to$ 竖直振幅更高！'
          },
          {
            q: '追问 3（终极防坑）：如果音叉根本没换（还是 $T = 4\\text{ ms}$），老师悄悄把 CRO 的时基旋钮改成 $1\\text{ ms div}^{-1}$，$1$ 个完整波在屏幕上会变成占几格？声音音调变了吗？',
            options: [
              '在屏幕上横向拉宽成占 $4$ 格，但声音本身的频率仍是 $250\\text{ Hz}$、音调完全没变！',
              '声音音调降低了一半'
            ],
            answerIndex: 0,
            a: '炼成火眼金睛了！调示波器旋钮就像放大手机照片一样，只改变显示比例，绝不改变外界声源本身的物理属性！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.3 节（位移—时间图 s–t graph）',
          text: 'CRO 屏幕横轴是时间（由电子束匀速水平扫描形成），与第 4.3 节的单点 s–t 图完全同源！',
          targetSec: '4.3'
        },
        {
          dir: '🔗 前置衔接 ← 第 5.5 节（弦上驻波谐波 fₙ = nf₁）',
          text: '为什么小提琴和钢琴会有泛音（overtones）从而形成独特音色？正是因为琴弦同时激发了第 5.5 节的基频 f₁ 与高次谐波 2f₁, 3f₁…叠加！',
          targetSec: '5.5'
        }
      ],
      traps: [
        {
          wrong: '误区 1：看到复杂乐器波形在一个大周期里有 1 个高尖峰和 2 个小尖峰，就把一个小尖峰的宽度当成了周期 $T$！',
          right: '真相：一定要找<strong>整个复杂图案完整重复一次</strong>的水平总长度，那才是决定音调的基音周期 $T_0$！小尖峰只是叠加在上面的高频泛音！'
        },
        {
          wrong: '误区 2：用英文回答时把“声音更响亮（louder）”错写成“higher pitch”，或把“音调更高”写成“louder”！',
          right: '真相：EMI 考试千万分清英文日常词与物理专有名词：<strong>high/low pitch = 音调高低（看频率 $f$）</strong>；<strong>loud/soft sound = 响度大小（看振幅 $A$）</strong>！'
        }
      ],
      linkedLab: {
        labId: 'lab7',
        title: '实验 7：乐音三要素与 CRO 示波器互动合成台（可发声！）',
        prompt: '去实验 7 亲手调节音调频率 f、响度振幅 A、切换「音叉 / 小提琴 / 钢琴」波形与 CRO 时基旋钮，还能点按试听真实声音变化！'
      },
      questions: [
        {
          id: 'q-7-4-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '女高音歌唱家唱出一个高亢而轻柔的音符，男低音歌唱家唱出一个低沉而洪亮的音符。比较两人发出的声波在空气中的物理量，下列说法正确的是？',
          options: [
            '女高音声波的波速更快，振幅更大',
            '女高音声波的频率更高，男低音声波的振幅更大',
            '女高音声波的波长更长，男低音声波的频率更高',
            '女高音声波的振幅更大，男低音声波的波长更短'
          ],
          answerIndex: 1,
          hint: '逐词翻译成物理量：“高亢（音调高）”对应什么量更大？“洪亮（响度大）”对应什么量更大？同一空气中两人的声速一样吗？',
          wrongDiagnostics: [
            '在同一室温空气中，女高音和男低音的声速完全相等！而且女高音唱得“轻柔”，振幅应该更小哦。',
            '',
            '女高音频率更高，由 $\\lambda = \\frac{v}{f}$（$v$ 相同）可知女高音的波长应该更短，男低音频率更低、波长更长！',
            '刚好反啦！“洪亮”代表响度大，所以男低音的振幅更大；且男低音频率低，波长更长！'
          ],
          explanation: '• <strong>音调（Pitch）由频率 $f$ 决定</strong>：女高音音调高 $\\Rightarrow$ <strong>频率 $f$ 更高</strong>（波长更短）。<br>• <strong>响度（Loudness）由振幅 $A$ 决定</strong>：男低音声音洪亮 $\\Rightarrow$ <strong>振幅 $A$ 更大</strong>。<br>• 两人声波在同一空气中<strong>波速 $v$ 相等</strong>。',
          markingKeywords: ['higher pitch → higher frequency', 'louder sound → larger amplitude', 'same wave speed in air']
        },
        {
          id: 'q-7-4-2',
          level: 2,
          levelLabel: '第二阶 · CRO 读图计算',
          stem: '将麦克风连接到示波器（CRO），时基（time-base）调至 <strong>$0.5\\text{ ms div}^{-1}$</strong>，Y 轴增益（Y-gain）调至 $0.2\\text{ V div}^{-1}$。敲击音叉后，屏幕上观察到<strong>$2$ 个完整的正弦波形共占据水平 $8.0$ 格</strong>，波峰到波谷的总竖直高度占据 $6.0$ 格。求该音叉声波的频率 $f$ 和信号电压振幅 $V_0$。',
          options: [
            '$f = 500\\text{ Hz}$，$V_0 = 0.6\\text{ V}$',
            '$f = 500\\text{ Hz}$，$V_0 = 1.2\\text{ V}$',
            '$f = 250\\text{ Hz}$，$V_0 = 0.6\\text{ V}$',
            '$f = 0.5\\text{ Hz}$，$V_0 = 0.6\\text{ V}$'
          ],
          answerIndex: 0,
          hint: '小心两个经典小弯！① “$2$ 个完整波占 $8.0$ 格”，那 **$1$ 个完整波**占几格？乘以 $0.5\\text{ ms div}^{-1}$ 得到周期 $T$ 后别忘了 $\\text{ms} = 10^{-3}\\text{ s}$！② “波峰到波谷占 $6.0$ 格”是 $2V_0$，单边振幅占几格？',
          wrongDiagnostics: [
            '',
            '频率 $500\\text{ Hz}$ 算得超准！但竖直 $6.0$ 格是从波谷到波峰的峰峰值（peak-to-peak $= 1.2\\text{ V}$），电压振幅 $V_0$ 是从中心线算起的一半（$3.0\\text{ div} \\times 0.2 = 0.6\\text{ V}$）哦！',
            '振幅 $0.6\\text{ V}$ 对啦！不过 $8.0$ 格里有 $2$ 个完整波，所以 $1$ 个周期只占 $4.0$ 格，$T = 4.0 \\times 0.5\\text{ ms} = 2.0\\text{ ms}$，$f = \\frac{1}{0.002} = 500\\text{ Hz}$！',
            '漏换算毫秒 $\\text{ms} = 10^{-3}\\text{ s}$ 啦！$T = 2.0\\text{ ms} = 2.0 \\times 10^{-3}\\text{ s}$，取倒数得 $500\\text{ Hz}$！'
          ],
          explanation: '1. <strong>求周期与频率</strong>：$2$ 个完整周期占 $8.0$ 格 $\\Rightarrow 1$ 个周期占 $n_x = 4.0\\text{ div}$。故周期 $T = 4.0 \\times 0.5\\text{ ms} = 2.0\\text{ ms} = 2.0 \\times 10^{-3}\\text{ s}$，频率 $f = \\frac{1}{T} = \\frac{1}{2.0 \\times 10^{-3}} = 500\\text{ Hz}$。<br>2. <strong>求电压振幅</strong>：峰谷总高 $6.0$ 格，故单边振幅占 $3.0\\text{ div}$，电压振幅 $V_0 = 3.0 \\times 0.2\\text{ V} = 0.6\\text{ V}$。',
          markingKeywords: ['1 cycle = 4.0 div → T = 2.0 ms', 'f = 1 / T = 500 Hz', 'amplitude = 3.0 div × 0.2 V = 0.6 V']
        },
        {
          id: 'q-7-4-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'A piano and a violin play the <strong>same musical note</strong> at the <strong>same loudness</strong> in the same room. Their sounds are captured by a microphone connected to a CRO with unchanged settings. Which of the following quantities MUST be the same for the two CRO traces, and what makes the two instruments sound different?',
          cnTranslation: '在同一房间内，钢琴和小提琴以<strong>相同的响度</strong>演奏<strong>同一个音符（相同音调）</strong>。声音由接在设置不变的示波器上的麦克风采集。两个示波器图形的哪个量必定相同？又是什么让两种乐器听起来不同？',
          options: [
            'Same waveform shape; they sound different because their wave speeds in air are different.',
            'Same fundamental period $T$ on the CRO screen; they sound different because they have different waveforms (different combinations of overtones), giving different quality (timbre).',
            'Same number of minor peaks per cycle; they sound different because the violin produces transverse sound waves.',
            'Different fundamental periods $T$; they sound different because of different frequencies.'
          ],
          answerIndex: 1,
          hint: '“同一个音符（same musical note / pitch）”锁死了相同的基频 $f$ 和相同的重复大周期 $T$！区分不同乐器靠的是乐音三要素里的哪一个英文词？',
          wrongDiagnostics: [
            '波形形状恰恰是不同的！而且在同一房间空气中，钢琴声和小提琴声的波速完全相同！',
            '',
            '无论是小提琴还是钢琴，它们在空气中激起的声波 100% 都是纵波（longitudinal waves），绝不是横波！',
            '既然演奏的是“同一个音符（same pitch）”，它们的基频 $f$ 和重复大周期 $T$ 就必定相同！'
          ],
          explanation: '演奏相同音符（same pitch）意味着两列声波具有<strong>相同的基频 $f$ 与相同的重复大周期 $T$</strong>；相同响度对应相近的振幅。两种乐器之所以音色（<strong>quality / timbre</strong>）不同，是因为它们伴随基音产生了不同数量与强弱比例的<strong>泛音（overtones）</strong>，从而在 CRO 上呈现出<strong>不同的波形轮廓（different waveforms）</strong>。',
          markingKeywords: ['same pitch → same fundamental frequency f and period T', 'different waveforms / overtones → different quality (timbre)']
        }
      ]
    }
  ]
});
