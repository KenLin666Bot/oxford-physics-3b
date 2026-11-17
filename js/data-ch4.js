window.BOOK_3B_CHAPTERS = window.BOOK_3B_CHAPTERS || [];

window.BOOK_3B_CHAPTERS.push({
  id: 'ch4',
  number: 'Chapter 4',
  titleCn: '波的本质',
  titleEn: 'Nature of Waves',
  color: '#0d9488',
  overview: '欢迎来到 Wave Motion II 的起点！在 3A 册我们用“光线（rays）”研究了光的反射与折射；从第 4 章开始，我们要揭开波的真正面纱：为什么质点明明只在原地来回振动，能量却能跨越千里传出去？怎样看懂最容易混淆的两张波动图像（s–d 图与 s–t 图）？这一章打下的语言和公式地基，将贯穿整本 3B。',
  sections: [
    /* ========================================================================
       Section 4.1
       ======================================================================== */
    {
      id: '4.1',
      code: '4.1',
      titleCn: '波动的形成：横波与纵波',
      titleEn: 'Wave Motion: Transverse and Longitudinal Waves',
      dseTag: '核心基础 · Core',
      realLifeHook: {
        title: '🏟️ 先从生活出发：体育场里的“人浪”与池塘里的小黄鸭',
        html: `
          <p>想象你在红馆或大球场看演唱会，全场观众玩起了<strong>“人浪（Mexican wave）”</strong>：第一排观众站起来举手又坐下，紧接着旁边一列观众站起来又坐下……远远看去，一道壮观的“浪”绕着球场飞快奔跑！</p>
          <p>但仔细想一想：<strong>有没有任何一个观众真的离开自己的座位、绕着球场跑了一圈？没有！</strong>每个人都只是在自己的座位上“站起—坐下”，传出去的是“站起来”的动作与能量。同样地，池塘里有一只塑料小黄鸭，你往水里丢一颗石子，水波一圈圈向外扩散，小黄鸭只会<strong>在原地上下起伏</strong>，并不会随着水波漂到岸边。这就是物理学中“波”最核心的灵魂！</p>
        `
      },
      concepts: [
        {
          title: '1. 什么是波动（Wave Motion）？—— 传能不传质',
          html: `
            <p><span class="term">波</span><span class="term-en">wave</span>是由振动源（<span class="term-en">vibrating source</span>）产生的扰动在空间中的传播。牛津课本开篇最重要的第一条定律就是：</p>
            <ul>
              <li><strong>波只传递能量（与信息），而不传递物质</strong>（<span class="term-en">Waves transfer energy without transferring matter</span>）。介质中的各个<span class="term">质点</span><span class="term-en">particles</span>只是在各自的<span class="term">平衡位置</span><span class="term-en">equilibrium position</span>附近来回振动（<span class="term-en">oscillate / vibrate</span>）。</li>
              <li>如果只抖动绳子或弹簧一次，产生单个向前跑的凸起，叫做<span class="term">波脉冲</span><span class="term-en">wave pulse</span>；如果持续周期性地抖动，就会形成一列连续的<span class="term">行波（进行波）</span><span class="term-en">travelling wave / progressive wave</span>。</li>
              <li>按是否需要介质分类：<span class="term">机械波</span><span class="term-en">mechanical waves</span>（如水波、声波、绳波、弹簧波）必须依靠物质介质（<span class="term-en">medium</span>）才能传播；而<span class="term">电磁波</span><span class="term-en">electromagnetic waves</span>（如可见光、无线电波、X 射线）不需要介质，可以在<span class="term">真空</span><span class="term-en">vacuum</span>中传播。</li>
            </ul>
          `
        },
        {
          title: '2. 实验室神器：用长弹簧（Slinky Spring）区分横波与纵波',
          html: `
            <p>在学校物理实验室里，老师最常把一根长长的软弹簧（<span class="term-en">slinky spring</span>）平放在光滑桌面上，并在中间某一圈绑上一根红丝带代表单个质点。根据手抖动方向与波传播方向的关系，波严格分为两大类：</p>
            <div class="diagram-card">
              <svg viewBox="0 0 760 230" width="100%" aria-label="横波与纵波对比示意图">
                <!-- Transverse Wave -->
                <text x="16" y="26" fill="#0d9488" font-size="14" font-weight="bold">(a) 横波 Transverse wave（质点振动方向 ⊥ 波传播方向）</text>
                <line x1="60" y1="72" x2="720" y2="72" stroke="#94a3b8" stroke-dasharray="5,5" stroke-width="1.5"/>
                <path d="M 60 72 Q 110 18, 160 72 T 260 72 T 360 72 T 460 72 T 560 72 T 660 72" fill="none" stroke="#0d9488" stroke-width="3.5"/>
                <circle cx="310" cy="36" r="6" fill="#ef4444"/>
                <line x1="310" y1="16" x2="310" y2="56" stroke="#ef4444" stroke-width="2"/>
                <text x="322" y="34" fill="#ef4444" font-size="12" font-weight="bold">质点上下振动 (up &amp; down)</text>
                <text x="100" y="28" fill="#0f766e" font-size="12" font-weight="bold">波峰 Crest</text>
                <text x="200" y="112" fill="#0f766e" font-size="12" font-weight="bold">波谷 Trough</text>
                <line x1="540" y1="24" x2="660" y2="24" stroke="#0284c7" stroke-width="2.5"/>
                <polygon points="660,19 672,24 660,29" fill="#0284c7"/>
                <text x="535" y="16" fill="#0284c7" font-size="12" font-weight="bold">波传播方向 Direction of travel</text>

                <!-- Longitudinal Wave -->
                <text x="16" y="148" fill="#2563eb" font-size="14" font-weight="bold">(b) 纵波 Longitudinal wave（质点振动方向 ∥ 波传播方向）</text>
                <!-- Coils: compressed & rarefied -->
                <g stroke="#2563eb" stroke-width="2.3" fill="none">
                  <!-- Compression 1 -->
                  <ellipse cx="95" cy="182" rx="5" ry="20"/><ellipse cx="103" cy="182" rx="5" ry="20"/><ellipse cx="111" cy="182" rx="5" ry="20"/><ellipse cx="119" cy="182" rx="5" ry="20"/><ellipse cx="127" cy="182" rx="5" ry="20"/>
                  <!-- Rarefaction 1 -->
                  <ellipse cx="152" cy="182" rx="7" ry="20"/><ellipse cx="182" cy="182" rx="7" ry="20"/><ellipse cx="212" cy="182" rx="7" ry="20"/><ellipse cx="242" cy="182" rx="7" ry="20"/>
                  <!-- Compression 2 -->
                  <ellipse cx="272" cy="182" rx="5" ry="20"/><ellipse cx="280" cy="182" rx="5" ry="20"/><ellipse cx="288" cy="182" rx="5" ry="20"/><ellipse cx="296" cy="182" rx="5" ry="20"/><ellipse cx="304" cy="182" rx="5" ry="20"/>
                  <!-- Rarefaction 2 -->
                  <ellipse cx="330" cy="182" rx="7" ry="20"/><ellipse cx="360" cy="182" rx="7" ry="20"/><ellipse cx="390" cy="182" rx="7" ry="20"/><ellipse cx="420" cy="182" rx="7" ry="20"/>
                  <!-- Compression 3 -->
                  <ellipse cx="450" cy="182" rx="5" ry="20"/><ellipse cx="458" cy="182" rx="5" ry="20"/><ellipse cx="466" cy="182" rx="5" ry="20"/><ellipse cx="474" cy="182" rx="5" ry="20"/><ellipse cx="482" cy="182" rx="5" ry="20"/>
                  <!-- Rarefaction 3 -->
                  <ellipse cx="510" cy="182" rx="7" ry="20"/><ellipse cx="540" cy="182" rx="7" ry="20"/><ellipse cx="570" cy="182" rx="7" ry="20"/>
                </g>
                <circle cx="360" cy="162" r="6" fill="#ef4444"/>
                <line x1="336" y1="150" x2="384" y2="150" stroke="#ef4444" stroke-width="2"/>
                <text x="392" y="154" fill="#ef4444" font-size="12" font-weight="bold">质点前后振动 (back &amp; forth)</text>
                <text x="86" y="220" fill="#1e40af" font-size="12" font-weight="bold">密部 Compression</text>
                <text x="165" y="220" fill="#64748b" font-size="12" font-weight="bold">疏部 Rarefaction</text>
                <text x="262" y="220" fill="#1e40af" font-size="12" font-weight="bold">密部 Compression</text>
              </svg>
              <div class="diagram-caption">图 4.1：横波具有波峰（crest）与波谷（trough）；纵波具有密部（compression）与疏部（rarefaction）。</div>
            </div>

            <table class="compare-table">
              <thead>
                <tr>
                  <th>对比维度</th>
                  <th>横波（Transverse Wave）</th>
                  <th>纵波（Longitudinal Wave）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>定义（HKDSE 必背得分句）</strong></td>
                  <td>质点振动方向与波的传播方向<strong>互相垂直</strong>（perpendicular, $\perp$）</td>
                  <td>质点振动方向与波的传播方向<strong>互相平行 / 沿同一直线</strong>（parallel / along the same direction, $\parallel$）</td>
                </tr>
                <tr>
                  <td><strong>波形特征结构</strong></td>
                  <td>交替出现的<span class="term">波峰</span><span class="term-en">crests</span>（最高点）和<span class="term">波谷</span><span class="term-en">troughs</span>（最低点）</td>
                  <td>交替出现的<span class="term">密部</span><span class="term-en">compressions</span>（质点密集区）和<span class="term">疏部</span><span class="term-en">rarefactions</span>（质点稀疏区）</td>
                </tr>
                <tr>
                  <td><strong>典型课本实例</strong></td>
                  <td>• 水波（water waves，近似）<br>• 左右/上下甩动的绳波或弹簧波<br>• <strong>所有电磁波</strong>（光波、微波、X 射线等）</td>
                  <td>• <strong>声波（sound waves）与超声波（ultrasound）</strong><br>• 前后推拉（push and pull）长弹簧产生的波</td>
                </tr>
                <tr>
                  <td><strong>粒子分布与气压特征</strong></td>
                  <td>介质粒子疏密保持均匀，通过高低起伏呈现波形</td>
                  <td>出现粒子聚集与散开交替；在空气中分别对应<strong>气压高于大气压（密部）</strong>与<strong>低于大气压（疏部）</strong></td>
                </tr>
              </tbody>
            </table>
          `
        }
      ],
      formulae: [],
      guidedChain: {
        title: '🧭 连环追问推导：一步步看透“波到底传了什么？”',
        intro: '先别死记英文定义！顺着下面 3 个生活化追问点一点，亲自推导出 HKDSE 最核心的第一条定律：',
        steps: [
          {
            q: '追问 1：在长弹簧中间某一圈绑上红丝带，手在左端不断上下抖动使波向右传播。过了一会儿，红丝带会跑到弹簧右端去吗？',
            options: [
              '会跟着波峰一路跑到右端',
              '不会跑走，只会在原来的位置上下往返运动'
            ],
            answerIndex: 1,
            a: '完全正确！就像体育场人浪里的观众不会离开座位一样，弹簧圈（介质物质 matter）只会在各自的平衡位置（equilibrium position）附近来回振动。'
          },
          {
            q: '追问 2：既然弹簧圈没有跑到右端，为什么绑在弹簧右端的小铃铛过一会儿还是被摇响了呢？真正从左端传到右端的是什么？',
            options: [
              '传递的是能量（energy）与振动形式',
              '传递的是看不见的空气推力'
            ],
            answerIndex: 0,
            a: '一针见血！这正是 DSE 必背得分句：<strong>Waves transfer energy without transferring matter</strong>（波只传递能量而不传递物质）。'
          },
          {
            q: '追问 3：如果把“上下抖动”改成“沿着弹簧前后推拉（push and pull）”，红丝带的振动方向与波向右传播的方向是什么几何关系？属于什么波？',
            options: [
              '互相垂直（perpendicular）——横波 transverse wave',
              '互相平行 / 沿同一直线（parallel / along）——纵波 longitudinal wave'
            ],
            answerIndex: 1,
            a: '太棒了！振动方向与传播方向平行（along / parallel to the direction of travel）就是<strong>纵波（longitudinal wave）</strong>，并产生交替的密部（compressions）和疏部（rarefactions）！'
          }
        ]
      },
      relations: [
        {
          dir: '⏭️ 后续铺垫 → 第 6.4 节（电磁波谱家族）',
          text: '可见光、红外线、无线电波、X 射线等所有电磁波都是横波（transverse waves），且不需要物质介质即可在真空中传播。',
          targetSec: '6.4'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.1 节（声波的本质）',
          text: '空气分子被扬声器纸盆前后推拉，形成气压较高的密部（compression）与气压较低的疏部（rarefaction），这就是第 7 章的主角——声波。',
          targetSec: '7.1'
        }
      ],
      traps: [
        {
          wrong: '误区 1：水波向右传播时，水面上的软木塞（cork）也会慢慢向右漂走。',
          right: '真相：错！波只传递能量不传递物质（transfers energy without transferring matter）。软木塞只会在原平衡位置上下振动。'
        },
        {
          wrong: '误区 2：考试写纵波定义时，写成“particles move in the same direction as the wave”（质点向波的同一方向移动）。',
          right: '真相：扣分大坑！质点是来回振动的，有时向前、有时向后！标准英文必须写：particles vibrate ALONG (or PARALLEL TO) the direction of travel of the wave。'
        }
      ],
      linkedLab: {
        labId: 'lab1',
        title: '实验 1：横波 vs 纵波粒子追踪器（Slinky Simulator）',
        prompt: '去实验室切换横波与纵波模式，盯住那颗红色标记球！亲眼确认波形一直向右跑，但红球只在原地往返运动。'
      },
      questions: [
        {
          id: 'q-4-1-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '把一根平放在桌面上的长弹簧（slinky spring）左端不断<strong>左右摆动</strong>，产生一列向<strong>前方</strong>传播的波。如果在弹簧中间某一圈系上一条红丝带，红丝带会怎样运动？',
          options: [
            '一边左右摆动，一边随着波一起移动到弹簧最前端',
            '只在原来的位置附近不断左右来回振动',
            '只在原来的位置附近不断前后推拉振动',
            '保持完全静止不动，把能量直接传给下一圈'
          ],
          answerIndex: 1,
          hint: '回想一下体育场里的“人浪”：波向前传播（垂直于左右方向），作为介质一分子的红丝带需要离开座位往前跑吗？它的振动方向应该跟手抖动的方向一致哦！',
          wrongDiagnostics: [
            '掉进最常见的直觉陷阱啦！波向前传播的是“波形和能量”，弹簧圈本身（物质 matter）是不会跟着跑到前端去的。',
            '',
            '前后推拉是纵波（longitudinal wave）的振动方式，但题目里手是“左右摆动”的，产生的是横波（transverse wave）哦。',
            '如果红丝带完全不动，能量就没法传给下一圈啦！它必须在平衡位置附近振动才能带动相邻弹簧圈。'
          ],
          explanation: '手左右摆动而波向前传播，两者互相垂直，因此这是一列<strong>横波（transverse wave）</strong>。波传播时只传递能量而不传递物质（transfers energy without transferring matter），所以系着红丝带的那一圈弹簧只会在原平衡位置附近<strong>左右来回振动</strong>。',
          markingKeywords: ['vibrate side-to-side about its equilibrium position', 'transfers energy without transferring matter']
        },
        {
          id: 'q-4-1-2',
          level: 2,
          levelLabel: '第二阶 · 概念辨析',
          stem: '下列四组波中，哪一组<strong>全部属于横波（transverse waves）</strong>，而且<strong>全部可以在真空（vacuum）中传播</strong>？',
          options: [
            '可见光（visible light）、水波（water waves）、无线电波（radio waves）',
            '超声波（ultrasound）、红外辐射（infrared radiation）、X 射线（X-rays）',
            '微波（microwaves）、可见光（visible light）、紫外辐射（ultraviolet radiation）',
            '声波（sound waves）、微波（microwaves）、伽马射线（gamma rays）'
          ],
          answerIndex: 2,
          hint: '分两步筛查：① 能在真空中传播的只有电磁波家族（electromagnetic waves）；② 水波虽然近似横波但需要水作介质；声波与超声波则是机械纵波！',
          wrongDiagnostics: [
            '水波（water waves）属于机械波，没有水就无法传播，不能在真空中行进哦！',
            '小心“超声波（ultrasound）”这个伪装者！它只是频率高于 $20\\text{ kHz}$ 的声波，本质依然是需要介质的机械纵波，绝不是电磁波！',
            '',
            '声波（sound waves）是典型的机械纵波，既不是横波，也不能在真空中传播。'
          ],
          explanation: '所有<strong>电磁波（electromagnetic waves）</strong>都是横波（transverse waves），且都不需要介质即可在真空中以 $c = 3.0 \\times 10^8\\text{ m s}^{-1}$ 传播。微波、可见光、紫外辐射均属于电磁波谱成员；而水波需要介质，声波和超声波则是需要介质的机械纵波（longitudinal mechanical waves）。',
          markingKeywords: ['electromagnetic waves', 'transverse waves', 'travel through a vacuum']
        },
        {
          id: 'q-4-1-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'Which of the following statements correctly compares a light wave and a sound wave travelling in air?<br>(1) Both waves transfer energy without transferring air particles from the source to the receiver.<br>(2) Air particles vibrate perpendicular to the direction of travel in a light wave, whereas they vibrate parallel to the direction of travel in a sound wave.<br>(3) Sound wave consists of compressions and rarefactions of air, whereas light wave is a transverse electromagnetic wave.',
          cnTranslation: '下列哪些陈述正确比较了在空气中传播的光波与声波？(1) 两种波都在不把空气粒子从波源运送到接收处的前提下传递能量。(2) 光波中空气粒子垂直于传播方向振动，而声波中空气粒子平行于传播方向振动。(3) 声波由空气的密部与疏部组成，而光波是横向电磁波。',
          options: [
            '(1) and (2) only',
            '(1) and (3) only',
            '(2) and (3) only',
            '(1), (2) and (3)'
          ],
          answerIndex: 1,
          hint: '仔细审读第 (2) 句的前半句！光波（电磁波）传播时，真的在靠“空气粒子上下振动（air particles vibrate）”来传播吗？光在真空里没有空气照样能走呀！',
          wrongDiagnostics: [
            '中了第 (2) 句的隐藏陷阱！光波是电磁波（振荡的是电场与磁场），它并不是靠空气分子上下振动来传播的！',
            '',
            '再检查一下第 (2) 句：光波不是空气粒子的机械振动；而且第 (1) 句关于传递能量不传递物质是完全正确的。',
            '第 (2) 句把光波误当成了空气的机械横波！光波不需要空气粒子振动，振荡的是电磁场。'
          ],
          explanation: '这是一道极具 HKDSE 辨识度的概念题：<br>• <strong>(1) 正确</strong>：无论电磁波还是机械波，都遵循传递能量而不迁移介质物质的原则。<br>• <strong>(2) 错误</strong>：光波是电磁波（electromagnetic wave），振荡的是电场与磁场，<strong>并不是空气粒子在上下振动</strong>！<br>• <strong>(3) 正确</strong>：声波在空气中是纵波，表现为交替的密部（compressions）与疏部（rarefactions）；光波是电磁横波。因此选 <strong>(1) and (3) only</strong>。',
          markingKeywords: ['transfer energy without transferring matter', 'electromagnetic wave (does not vibrate air particles)', 'compressions and rarefactions']
        }
      ]
    },

    /* ========================================================================
       Section 4.2
       ======================================================================== */
    {
      id: '4.2',
      code: '4.2',
      titleCn: '描述波的物理量与波动方程',
      titleEn: 'Wave Terms, Phase and the Wave Equation',
      dseTag: '必考核心公式 · Core',
      realLifeHook: {
        title: '🚂 先从生活出发：站在月台数港铁车厢算车速',
        html: `
          <p>假设你站在港铁月台上，一列列车正匀速驶过你面前。你量出<strong>每一节车厢的长度是 $20\\text{ m}$</strong>（这就像一节完整波的长度——<strong>波长 $\\lambda$</strong>），同时你掐表发现<strong>每秒钟刚好有 $0.5$ 节车厢经过你面前</strong>（或者说每过 $2\\text{ s}$ 才有一节车厢完全通过，这就像<strong>频率 $f = 0.5\\text{ Hz}$、周期 $T = 2\\text{ s}$</strong>）。</p>
          <p>不用看驾驶室的速度表，你立刻就能算出列车速度：$v = 0.5 \\times 20 = 10\\text{ m s}^{-1}$！波的传播也是一模一样的道理：每经过一个周期 $T$，波刚好向前推进一个波长 $\\lambda$，于是就诞生了统治整册 3B 的第一核心公式 <strong>$v = f\\lambda$</strong>！</p>
        `
      },
      concepts: [
        {
          title: '1. 六大基本物理量（Six Fundamental Terms）',
          html: `
            <ul>
              <li><span class="term">位移</span><span class="term-en">displacement, $s$</span>（单位：$\\text{m}$）：质点偏离其平衡位置（equilibrium position）的距离与方向。它是<strong>矢量（vector）</strong>，通常取向上（或向前）为正（$+$），向下（或向后）为负（$-$）。</li>
              <li><span class="term">振幅</span><span class="term-en">amplitude, $A$</span>（单位：$\\text{m}$）：质点偏离平衡位置的<strong>最大位移的大小</strong>（magnitude of maximum displacement）。振幅恒为正值，代表波所携带能量的强弱。<strong>切记：波峰到波谷的垂直距离是 $2A$，绝不是 $A$！</strong></li>
              <li><span class="term">周期</span><span class="term-en">period, $T$</span>（单位：$\\text{s}$）：单个质点完成<strong>一次完整振动</strong>（one complete oscillation，例如从波峰→平衡位置→波谷→平衡位置→回到波峰）所需的时间。</li>
              <li><span class="term">频率</span><span class="term-en">frequency, $f$</span>（单位：赫兹 $\\text{Hz}$，即 $\\text{s}^{-1}$）：每秒钟内质点完成完整振动的次数（或波源每秒产生的完整波个数）。它与周期互为倒数：$f = \\frac{1}{T}$。</li>
              <li><span class="term">波长</span><span class="term-en">wavelength, $\\lambda$</span>（单位：$\\text{m}$）：两个相邻且振动<strong>同相（in phase）</strong>的质点之间的最短距离。在横波中等于<strong>相邻两波峰（或相邻两波谷）</strong>间距；在纵波中等于<strong>相邻两密部中心（或相邻两疏部中心）</strong>间距（注意：相邻密部与疏部中心间距只有 $\\frac{1}{2}\\lambda$！）。</li>
              <li><span class="term">波速</span><span class="term-en">wave speed, $v$</span>（单位：$\\text{m s}^{-1}$）：波形（如某个波峰或密部）每秒向前推进的距离。</li>
            </ul>
          `
        },
        {
          title: '2. 同相（In Phase）与反相（In Antiphase）',
          html: `
            <p>课本经常问你波上两个质点 $P$ 和 $Q$ 的<span class="term">相位关系</span><span class="term-en">phase relationship</span>，只需看它们相隔几个波长 $\\lambda$：</p>
            <ul>
              <li><strong>同相（In phase）</strong>：两质点在任何时刻都处于相同的运动阶段（同时到达波峰、同时到达波谷、运动方向始终相同）。在行波上，相距 <strong>$\\lambda, 2\\lambda, 3\\lambda, \\dots$（即 $n\\lambda$）</strong> 的质点彼此<strong>同相</strong>。</li>
              <li><strong>反相（In antiphase / completely out of phase）</strong>：两质点动作永远“唱反调”——当一个到达波峰（$+A$）时，另一个恰好到达波谷（$-A$）；一个向上走时，另一个向下走。在行波上，相距 <strong>$\\frac{1}{2}\\lambda, 1\\frac{1}{2}\\lambda, 2\\frac{1}{2}\\lambda, \\dots$（即 $(n + \\frac{1}{2})\\lambda$）</strong> 的质点彼此<strong>反相</strong>。</li>
            </ul>
          `
        },
        {
          title: '3. 黄金决定铁律：谁决定 $f$？谁决定 $v$？谁跟着变？',
          html: `
            <p>这是 HKDSE 选择题和解释题年年必考的“黄金三角关系”，一定要刻在脑海里：</p>
            <ol>
              <li><strong>频率 $f$ 只由波源（wave source / vibrator）决定！</strong>只要振源抖动的快慢不变，哪怕波从空气进入玻璃、从深水进入浅水，<strong>频率 $f$（和周期 $T$）绝对保持不变</strong>！</li>
              <li><strong>波速 $v$ 只由传播介质的性质（properties of the medium）决定！</strong>例如水波的速度取决于水深（水越深越快），绳波的速度取决于绳的张力与粗细，空气中声速取决于气温。<strong>在同一种均匀介质中，你把振源抖得再快（增大 $f$），波速 $v$ 都不会变快！</strong></li>
              <li><strong>波长 $\\lambda$ 是“受气包”（由 $v$ 和 $f$ 共同决定，$\\lambda = \\frac{v}{f}$）</strong>：
                <ul>
                  <li>同一介质中（$v$ 不变）：调高频率 $f$ $\\Rightarrow$ 波长 $\\lambda$ 按反比缩短（$\\lambda \\propto \\frac{1}{f}$）。</li>
                  <li>穿过界面进入新介质（$f$ 不变）：波速 $v$ 变慢 $\\Rightarrow$ 波长 $\\lambda$ 按正比缩短（$\\lambda \\propto v$）。</li>
                </ul>
              </li>
            </ol>
          `
        }
      ],
      formulae: [
        {
          name: '频率与周期关系（Frequency–Period Relation）',
          badge: '必背基础公式',
          latex: 'f = \\frac{1}{T} \\quad \\text{or} \\quad T = \\frac{1}{f}',
          vars: [
            '$f$：频率 frequency（$\\text{Hz}$ 或 $\\text{s}^{-1}$）',
            '$T$：周期 period（$\\text{s}$）'
          ],
          condition: '适用于一切周期性振动与波动（注意将毫秒 $\\text{ms}$ 换算为 $10^{-3}\\text{ s}$）。'
        },
        {
          name: '通用波动方程（The Wave Equation）',
          badge: '全书核心公式',
          latex: 'v = f\\lambda',
          vars: [
            '$v$：波速 wave speed（$\\text{m s}^{-1}$）',
            '$f$：频率 frequency（$\\text{Hz}$）',
            '$\\lambda$：波长 wavelength（$\\text{m}$）'
          ],
          condition: '适用于所有机械波与电磁波（电磁波在真空中写为 $c = f\\lambda$）。切记：$v$ 由介质决定，$f$ 由波源决定！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：自己推出 $v = f\\lambda$ 与“变与不变铁律”',
        intro: '不用死背公式！跟着下面 3 步把时间、空间和介质串起来：',
        steps: [
          {
            q: '追问 1：波源每完成 1 次完整振动，耗时 1 个周期 $T$，同时恰好向外送出 1 个完整波形（长度为 1 个波长 $\\lambda$）。根据速率 = 距离 ÷ 时间，波速 $v$ 等于什么？',
            options: [
              '$v = \\frac{\\lambda}{T}$',
              '$v = \\lambda T$'
            ],
            answerIndex: 0,
            a: '没错！在时间 $T$ 内波形前进了距离 $\\lambda$，所以 $v = \\frac{\\lambda}{T}$。'
          },
          {
            q: '追问 2：已知频率 $f$ 与周期 $T$ 互为倒数（$f = \\frac{1}{T}$）。把 $\\frac{1}{T}$ 替换成 $f$，上面的式子变成了什么？',
            options: [
              '$v = \\frac{f}{\\lambda}$',
              '$v = f\\lambda$'
            ],
            answerIndex: 1,
            a: 'bingo！$v = \\lambda \\times \\frac{1}{T} = f\\lambda$，这就是统领整本 3B 的通用波动方程（The Wave Equation）！'
          },
          {
            q: '追问 3：现在你在同一盆水里（水深不变），把拍水振动器的频率 $f$ 调快为原来的 2 倍。水波的波速 $v$ 和波长 $\\lambda$ 会怎样变？',
            options: [
              '波速 $v$ 变 2 倍，波长 $\\lambda$ 不变',
              '波速 $v$ 不变（介质没变！），波长 $\\lambda$ 缩短为原来的 $\\frac{1}{2}$'
            ],
            answerIndex: 1,
            a: '满分思维！记住口诀：<strong>“波速看介质，频率看波源，波长跟着两边变”</strong>——同一水深下 $v$ 恒定，$f$ 翻倍必然导致 $\\lambda = \\frac{v}{f}$ 减半！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.1 节（横纵波结构）',
          text: '无论横波的“峰—峰间距”还是纵波的“密—密间距”，都统一用波长 $\\lambda$ 度量，服从同一个 $v = f\\lambda$。',
          targetSec: '4.1'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 5.2 节（深浅水折射）',
          text: '当水波从深水区进入浅水区时，正是靠“$f$ 不变、$v$ 减小 $\\Rightarrow \\lambda$ 缩短”来推导波前变密与传播方向偏折！',
          targetSec: '5.2'
        }
      ],
      traps: [
        {
          wrong: '误区 1：在同一盆水里，把振动器频率 $f$ 调大为原来的 2 倍，水波的波速 $v$ 也会变成 2 倍。',
          right: '真相：大错特错！水深没变（介质没变），波速 $v$ 完全不变！频率 $f$ 变 2 倍，结果是波长 $\\lambda$ 缩短为原来的 $\\frac{1}{2}$。'
        },
        {
          wrong: '误区 2：看图时把“波峰最高点到波谷最低点的总高度 $8\\text{ cm}$”直接当成振幅 $A = 8\\text{ cm}$。',
          right: '真相：振幅是从中心平衡位置算起的最大偏移！峰谷总高度等于 $2A$，所以振幅 $A = 4\\text{ cm}$。'
        }
      ],
      linkedLab: {
        labId: 'lab1',
        title: '实验 1：亲手验证 v = fλ 与黄金铁律',
        prompt: '在实验 1 中保持介质波速 v 不变，把频率滑块 f 调高一倍，观察波形是不是立刻变密（波长 λ 减半）！'
      },
      questions: [
        {
          id: 'q-4-2-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '在水波槽中，一列水波的波峰与相邻波谷之间的<strong>水平距离</strong>为 $3\\text{ cm}$，波峰与波谷之间的<strong>竖直高度差</strong>为 $1.6\\text{ cm}$。这列水波的波长 $\\lambda$ 和振幅 $A$ 分别是多少？',
          options: [
            '$\\lambda = 3\\text{ cm}$，$A = 1.6\\text{ cm}$',
            '$\\lambda = 6\\text{ cm}$，$A = 0.8\\text{ cm}$',
            '$\\lambda = 6\\text{ cm}$，$A = 1.6\\text{ cm}$',
            '$\\lambda = 3\\text{ cm}$，$A = 0.8\\text{ cm}$'
          ],
          answerIndex: 1,
          hint: '小心两个“一半”陷阱！① 相邻波峰到波峰才是一个完整波长 $\\lambda$，波峰到相邻波谷只是半个波；② 振幅 $A$ 是从中间平衡水面算到波峰的高度哦！',
          wrongDiagnostics: [
            '两个陷阱都踩中啦！波峰到相邻波谷只有半个波长（$\\frac{1}{2}\\lambda$），而波峰到波谷的竖直差是两倍振幅（$2A$）！',
            '',
            '波长算对了（$6\\text{ cm}$），但竖直高度差 $1.6\\text{ cm}$ 是从波谷到波峰的 $2A$，振幅 $A$ 要除以 2 哦！',
            '振幅算对了（$0.8\\text{ cm}$），但水平方向上“波峰到相邻波谷”只是半个波形（$\\frac{1}{2}\\lambda = 3\\text{ cm}$），完整波长要乘以 2！'
          ],
          explanation: '1. 相邻波峰与波谷处于反相位置，水平间距等于半个波长：$\\frac{1}{2}\\lambda = 3\\text{ cm} \\Rightarrow \\lambda = 6\\text{ cm}$。<br>2. 波峰（$+A$）与波谷（$-A$）之间的竖直高度差为 $2A = 1.6\\text{ cm} \\Rightarrow A = 0.8\\text{ cm}$。',
          markingKeywords: ['wavelength = 6 cm', 'amplitude = 0.8 cm']
        },
        {
          id: 'q-4-2-2',
          level: 2,
          levelLabel: '第二阶 · 公式与变量推演',
          stem: '振源在同一根拉紧的长绳上产生频率为 $4\\text{ Hz}$、波长为 $0.6\\text{ m}$ 的横波。如果<strong>不改变绳子的松紧程度</strong>，只把振源频率调高到 $6\\text{ Hz}$，新的波速 $v$ 和新的波长 $\\lambda$ 分别是多少？',
          options: [
            '$v = 3.6\\text{ m s}^{-1}$，$\\lambda = 0.6\\text{ m}$',
            '$v = 2.4\\text{ m s}^{-1}$，$\\lambda = 0.4\\text{ m}$',
            '$v = 2.4\\text{ m s}^{-1}$，$\\lambda = 0.9\\text{ m}$',
            '$v = 1.6\\text{ m s}^{-1}$，$\\lambda = 0.4\\text{ m}$'
          ],
          answerIndex: 1,
          hint: '先用原来的 $f_1 = 4\\text{ Hz}$ 和 $\\lambda_1 = 0.6\\text{ m}$ 算出绳上的波速 $v$。题目说“不改变绳子的松紧”，意味着介质没变——波速 $v$ 会变吗？',
          wrongDiagnostics: [
            '记住黄金铁律：介质（绳子松紧和材质）没变，波速 $v$ 是绝对不会随频率变大的！',
            '',
            '波速 $v = 2.4\\text{ m s}^{-1}$ 算对了！但频率变高时，波长应该变短：$\\lambda_2 = \\frac{v}{f_2} = \\frac{2.4}{6} = 0.4\\text{ m}$，不是变长哦。',
            '波速算错啦，原来 $v = f_1\\lambda_1 = 4 \\times 0.6 = 2.4\\text{ m s}^{-1}$，绳子性质不变，波速保持 $2.4\\text{ m s}^{-1}$。'
          ],
          explanation: '第一步：由 $v = f_1\\lambda_1 = 4 \\times 0.6 = 2.4\\text{ m s}^{-1}$ 求出该绳上的波速。<br>第二步：由于<strong>绳子性质与张力不变（medium unchanged）</strong>，波速保持 $v = 2.4\\text{ m s}^{-1}$ 不变。<br>第三步：新波长 $\\lambda_2 = \\frac{v}{f_2} = \\frac{2.4}{6} = 0.4\\text{ m}$。',
          markingKeywords: ['wave speed depends only on the medium', 'v = fλ = 2.4 m s⁻¹', 'λ = 0.4 m']
        },
        {
          id: 'q-4-2-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'A longitudinal wave of frequency $50\\text{ Hz}$ travels along a slinky spring at a speed of $4.0\\text{ m s}^{-1}$. What is the shortest distance between a centre of compression and an adjacent centre of rarefaction, and what is the phase relationship between particles at these two centres?',
          cnTranslation: '一列频率为 $50\\text{ Hz}$ 的纵波以 $4.0\\text{ m s}^{-1}$ 的速率沿长弹簧传播。一个密部中心与相邻疏部中心之间的最短距离是多少？位于这两个中心处的质点相位关系如何？',
          options: [
            '$0.08\\text{ m}$, in phase',
            '$0.08\\text{ m}$, in antiphase',
            '$0.04\\text{ m}$, in antiphase',
            '$0.04\\text{ m}$, in phase'
          ],
          answerIndex: 2,
          hint: '先用 $\\lambda = \\frac{v}{f}$ 算出完整波长（那是“密部到相邻密部”的距离）。“密部到相邻疏部”相当于横波里的“波峰到相邻波谷”，距离是几个 $\\lambda$？相位又是同相还是反相？',
          wrongDiagnostics: [
            '$0.08\\text{ m}$ 是两个相邻密部（compression to compression）之间的完整波长 $\\lambda$！而密部与相邻疏部只隔半个波长，且动作相反。',
            '你已经知道它们是反相（in antiphase）了！但既然反相，距离就应该是半个波长 $\\frac{1}{2}\\lambda = 0.04\\text{ m}$，而不是整波长 $0.08\\text{ m}$。',
            '',
            '距离 $\\frac{1}{2}\\lambda = 0.04\\text{ m}$ 完全正确！不过相隔 $\\frac{1}{2}\\lambda$ 的两个质点运动方向总是相反，属于反相（in antiphase），不是同相哦。'
          ],
          explanation: '1. 由 $v = f\\lambda$ 得完整波长：$\\lambda = \\frac{v}{f} = \\frac{4.0}{50} = 0.08\\text{ m}$（相邻两密部中心间距）。<br>2. 密部中心与<strong>相邻疏部中心</strong>之间相隔半个波长：$\\frac{1}{2}\\lambda = 0.04\\text{ m}$。<br>3. 相距 $\\frac{1}{2}\\lambda$ 的两个质点振动状态完全相反，即处于<strong>反相（in antiphase）</strong>。',
          markingKeywords: ['λ = v / f = 0.08 m', 'adjacent compression and rarefaction = λ / 2 = 0.04 m', 'in antiphase']
        }
      ]
    },

    /* ========================================================================
       Section 4.3
       ======================================================================== */
    {
      id: '4.3',
      code: '4.3',
      titleCn: '波动双图辨析：位移—距离图与位移—时间图',
      titleEn: 'Graphical Representation: s–d and s–t Graphs',
      dseTag: '高分分水岭 · Top Exam Trap',
      realLifeHook: {
        title: '📸 先从生活出发：“全场大合照” vs “单人跟踪录像”',
        html: `
          <p>很多同学刚学 3B 时最头疼的就是：两张图画出来明明都是弯弯曲曲的正弦波，怎么一会儿读出来是波长 $\\lambda$，一会儿读出来又是周期 $T$？</p>
          <p>其实你只要看一眼<strong>横坐标（x-axis）</strong>，用摄影来比喻就瞬间秒懂了：<br>
          • <strong>位移—距离图（displacement–distance graph, $s\\text{–}d$ 图）</strong>是按下快门拍的一张<strong>“全场瞬间合照（Snapshot）”</strong>——时间定格在某一刻，横轴拍下了整条绳子上<strong>所有质点</strong>此刻的位置；<br>
          • <strong>位移—时间图（displacement–time graph, $s\\text{–}t$ 图）</strong>则是镜头死死盯着<strong>某一个特定质点（比如红球 $P$）</strong>拍下的<strong>“单人历史录像（CCTV Diary）”</strong>——记录这一个点从 $t=0$ 开始每一秒钟是怎么上下起伏的！</p>
        `
      },
      concepts: [
        {
          title: '1. 一表彻底分清 s–d 图与 s–t 图',
          html: `
            <table class="compare-table">
              <thead>
                <tr>
                  <th>对比项目</th>
                  <th>位移—距离图（Displacement–Distance, $s\\text{–}d$）</th>
                  <th>位移—时间图（Displacement–Time, $s\\text{–}t$）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>物理本质</strong></td>
                  <td><strong>同一时刻（fixed instant $t$）</strong>，沿波传播方向上<strong>所有质点</strong>的位置快照</td>
                  <td><strong>同一个质点（one single particle）</strong>，在<strong>不同时刻 $t$</strong> 的振动记录</td>
                </tr>
                <tr>
                  <td><strong>横轴（Horizontal axis）</strong></td>
                  <td>距离波源的距离 $\\text{distance } d$（单位：$\\text{m}$ 或 $\\text{cm}$）</td>
                  <td>时间 $\\text{time } t$（单位：$\\text{s}$ 或 $\\text{ms}$）</td>
                </tr>
                <tr>
                  <td><strong>直接读出的物理量</strong></td>
                  <td>• <strong>振幅 $A$</strong>（峰高）<br>• <strong>波长 $\\lambda$</strong>（一个完整波形的水平距离）</td>
                  <td>• <strong>振幅 $A$</strong>（峰高）<br>• <strong>周期 $T$</strong>（一个完整波形的时间，进而算出 $f = \\frac{1}{T}$）</td>
                </tr>
                <tr>
                  <td><strong>能否单独算出波速 $v$？</strong></td>
                  <td>不能（缺 $T$ 或 $f$）</td>
                  <td>不能（缺 $\\lambda$）——<strong>两张图联手即可用 $v = \\frac{\\lambda}{T} = f\\lambda$ 求波速！</strong></td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: '2. 破题神技：“微平移法”判断质点瞬时运动方向',
          html: `
            <p>在 <strong>$s\\text{–}d$ 图（快照图）</strong>上，如果题目告诉你“波正向右传播”，问你图上某质点 $P$ 此刻是向上动还是向下动？千万别靠猜！只需两步<strong>“微平移法（Next-instant sketch）”</strong>：</p>
            <div class="diagram-card">
              <svg viewBox="0 0 700 185" width="100%" aria-label="微平移法判断质点运动方向">
                <line x1="40" y1="95" x2="660" y2="95" stroke="#94a3b8" stroke-width="1.5"/>
                <line x1="50" y1="20" x2="50" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="58" y="28" fill="#475569" font-size="12" font-weight="bold">displacement s</text>
                <text x="585" y="114" fill="#475569" font-size="12" font-weight="bold">distance d</text>
                <!-- Current wave (solid) -->
                <path d="M 50 95 Q 125 15, 200 95 T 350 95 T 500 95 T 620 95" fill="none" stroke="#0d9488" stroke-width="3"/>
                <!-- Slightly later wave shifted right by 28px (dashed) -->
                <path d="M 78 95 Q 153 15, 228 95 T 378 95 T 528 95 T 648 95" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="7,5"/>
                <!-- Particle P at x=200 -->
                <circle cx="200" cy="95" r="5.5" fill="#ef4444"/>
                <line x1="200" y1="95" x2="200" y2="62" stroke="#ef4444" stroke-width="2.5"/>
                <polygon points="195,64 200,53 205,64" fill="#ef4444"/>
                <text x="208" y="76" fill="#ef4444" font-size="12.5" font-weight="bold">P 向上动 (moving up)</text>
                <!-- Particle Q at x=125 crest -->
                <circle cx="125" cy="55" r="5.5" fill="#7c3aed"/>
                <text x="72" y="42" fill="#7c3aed" font-size="12" font-weight="bold">波峰处瞬时静止 (momentarily at rest)</text>
                <!-- Particle R at x=350 -->
                <circle cx="350" cy="95" r="5.5" fill="#2563eb"/>
                <line x1="350" y1="95" x2="350" y2="128" stroke="#2563eb" stroke-width="2.5"/>
                <polygon points="345,126 350,137 355,126" fill="#2563eb"/>
                <text x="360" y="130" fill="#2563eb" font-size="12.5" font-weight="bold">R 向下动 (moving down)</text>
                <!-- Legend -->
                <text x="415" y="30" fill="#0d9488" font-size="12" font-weight="bold">── 当前波形 (t)</text>
                <text x="415" y="48" fill="#d97706" font-size="12" font-weight="bold">--- 下一瞬间波形 (t + Δt，向右微移)</text>
              </svg>
              <div class="diagram-caption">图 4.2：把波形顺着传播方向轻轻平移一点点（橙色虚线），在同一横坐标处由实线指向虚线的箭头，就是质点此刻真实的运动方向！</div>
            </div>
            <ul>
              <li><strong>第 1 步</strong>：顺着波的传播方向，用铅笔把整条曲线轻轻平移一小段（画出虚线波形 $t + \\Delta t$）。</li>
              <li><strong>第 2 步</strong>：质点只能在原地<strong>竖直上下动</strong>！在 $P$ 点同一横坐标处，看虚线在实线上方还是下方——在上方就是<strong>向上运动（moving upwards）</strong>，在下方就是<strong>向下运动（moving downwards）</strong>！</li>
              <li><strong>特别注意</strong>：处在波峰（crest）或波谷（trough）顶点的质点，此刻正准备折返，它的瞬时速率为零，英文标准表述叫 <strong>momentarily at rest（瞬时静止）</strong>！</li>
            </ul>
          `
        },
        {
          title: '3. 进阶拔高：纵波画成 s–d 图时，哪里是密部（Compression）？',
          html: `
            <p>纵波明明是前后振动的，但课本同样会规定“<strong>向右（向前）位移记为正 $+$，向左（向后）位移记为负 $-$</strong>”，把它画成正弦形状的 $s\\text{–}d$ 图！遇到这种 DSE 压轴选择题时，怎么一眼抓出<strong>密部中心（centre of compression）</strong>和<strong>疏部中心（centre of rarefaction）</strong>？</p>
            <ul>
              <li>看图上<strong>位移 $s = 0$ 的交点</strong>：
                <ul>
                  <li>如果某点<strong>左边质点的位移为正（$+$，向右挤过来）</strong>，而<strong>右边质点的位移为负（$-$，向左挤过来）</strong>——即曲线<strong>从正穿到负（下坡斜率为负）</strong>的交点：左右邻居都在往这个中心挤！这里就是<strong>密部中心（centre of compression）</strong>！</li>
                  <li>反之，如果左边质点位移为负（向左逃离），右边质点位移为正（向右逃离）——即曲线<strong>从负穿到正（上坡斜率为正）</strong>的交点：左右邻居都在背道而驰！这里就是<strong>疏部中心（centre of rarefaction）</strong>！</li>
                </ul>
              </li>
              <li>惊人推论：在密部正中心和疏部正中心的那颗质点，它此刻的位移恰好是 <strong>$s = 0$</strong>（处在平衡位置），但它的振动速率最大！</li>
            </ul>
          `
        }
      ],
      formulae: [],
      guidedChain: {
        title: '🧭 连环追问推导：3 步攻克双图（$s\\text{–}d$ 与 $s\\text{–}t$）混战题',
        intro: '遇到正弦图像题先别慌！按这 3 个问题顺序排查，永远不会掉坑：',
        steps: [
          {
            q: '追问 1：拿到一张波的图像，第一眼应该先看哪里，才能确定读出来的波峰间距是“波长 $\\lambda$”还是“周期 $T$”？',
            options: [
              '看横坐标轴（x-axis）写的是距离 $d$ 还是时间 $t$',
              '看曲线画得高不高、陡不陡'
            ],
            answerIndex: 0,
            a: '第一铁律！横轴是 distance $d$ 就是瞬间大合照（读波长 $\\lambda$）；横轴是 time $t$ 就是单点跟踪录像（读周期 $T$）！'
          },
          {
            q: '追问 2：如果这是 $s\\text{–}d$ 快照图，且已知波向右传。想判断平衡位置处某质点 $P$ 此刻向上还是向下动，我们该把波形虚线往哪边微移一小段？',
            options: [
              '顺着波的传播方向，向右微移一小段',
              '逆着波的传播方向，向左微移一小段'
            ],
            answerIndex: 0,
            a: '对极了！下一瞬间 $t + \\Delta t$ 波形自然顺着传播方向往右走一小步；看 $P$ 同一横坐标处虚线在实线上方还是下方，就立刻知道它向上还是向下动！'
          },
          {
            q: '追问 3：那如果题目给的是质点 $P$ 的 $s\\text{–}t$ 时间图，问你 $t = 1\\text{ s}$ 时 $P$ 向上还是向下动，还需要知道波向左还是向右传吗？',
            options: [
              '不需要！横轴本来就是时间 $t$，直接看 $t = 1\\text{ s}$ 往右一点曲线是上升还是下降即可',
              '需要，必须知道波向哪边传才能平移'
            ],
            answerIndex: 0,
            a: '彻底通透！$s\\text{–}t$ 图横轴就是时间流逝的方向：往右看曲线往上爬（斜率 $>0$）就是正向运动，往下滑（斜率 $<0$）就是负向运动！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.2 节（波动方程）',
          text: '从 s–d 图量出 $\\lambda$，从 s–t 图量出 $T$（得 $f=\\frac{1}{T}$），正是 $v=f\\lambda$ 最经典的图像出题组合！',
          targetSec: '4.2'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 7.4 节（CRO 示波器波形）',
          text: '第 7 章麦克风接上示波器（CRO）看到的屏幕波形，本质上是一张“电压—时间图（对应 s–t 图）”，所以只能直接读周期 T，不能直接读波长！',
          targetSec: '7.4'
        }
      ],
      traps: [
        {
          wrong: '误区 1：在 s–t 图（位移—时间图）上也用“波形向右平移”去判断质点运动方向！',
          right: '真相：千万别搞混！s–t 图横轴已经是时间 t 了！想知道下一刻去哪，直接在横轴往右看（t 增大时 s 变大就是向上动，s 变小就是向下动），根本不用猜波向哪边传！'
        },
        {
          wrong: '误区 2：以为纵波 s–d 图上的“波峰（最高点 +A）”是密部（compression）。',
          right: '真相：最高点只是向右偏离最远的点！真正的密部中心在“左正右负”向中间挤压的零位移交点（s = 0 且下坡处）！'
        }
      ],
      linkedLab: {
        labId: 'lab2',
        title: '实验 2：s–d 快照图与 s–t 追踪图同屏联动仪',
        prompt: '打开实验 2，开启“显示下一瞬间微平移虚线”，点击波上不同质点 P、Q、R，同时观察左边的空间快照和右边的时间轨迹！'
      },
      questions: [
        {
          id: 'q-4-3-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '观察水面上一只上下起伏的玩具鸭，用秒表记录它每隔 $0.5\\text{ s}$ 的高度变化并画成图像。从这张图像上，我们可以<strong>直接读出</strong>水波的哪些物理量？',
          options: [
            '振幅（amplitude $A$）和波长（wavelength $\\lambda$）',
            '振幅（amplitude $A$）和周期（period $T$）',
            '波长（wavelength $\\lambda$）和波速（wave speed $v$）',
            '周期（period $T$）和波速（wave speed $v$）'
          ],
          answerIndex: 1,
          hint: '我们只盯着“一只玩具鸭（单个质点）”随时间 $t$ 的高度变化，画出来的是 $s\\text{–}d$ 全场快照，还是 $s\\text{–}t$ 单人录像？',
          wrongDiagnostics: [
            '只看一只鸭子的时间记录，不知道旁边别的波峰离它有多远，所以读不出空间长度——波长 $\\lambda$ 哦！',
            '',
            '既没有空间距离数据（读不出 $\\lambda$），也就没法算出波速 $v = f\\lambda$。',
            '周期 $T$ 可以直接读出，但不知道一个周期内波传了多远（缺 $\\lambda$），无法单凭这一张图求出波速 $v$。'
          ],
          explanation: '跟踪单个质点（玩具鸭）随时间的位置变化，得到的是<strong>位移—时间图（displacement–time graph, $s\\text{–}t$ 图）</strong>。纵轴峰值给出<strong>振幅 $A$</strong>，横轴完成一次完整振动的时间给出<strong>周期 $T$</strong>（进而可算 $f = \\frac{1}{T}$），但无法单独读出波长 $\\lambda$ 或波速 $v$。',
          markingKeywords: ['displacement-time graph', 'amplitude A', 'period T']
        },
        {
          id: 'q-4-3-2',
          level: 2,
          levelLabel: '第二阶 · 图像与微平移推演',
          stem: '在 $t = 0$ 时刻的位移—距离图（$s\\text{–}d$ graph）上，$x = 0$ 处为平衡位置（$s=0$），$x = 2\\text{ cm}$ 处为波峰（$+A$），$x = 4\\text{ cm}$ 处回到平衡位置（$s=0$），$x = 6\\text{ cm}$ 处为波谷（$-A$）。已知在 $t = 0$ 这一瞬间，位于 <strong>$x = 4\\text{ cm}$ 处的质点正在向下运动（moving downwards）</strong>，且周期 $T = 0.2\\text{ s}$。这列波向哪个方向传播？波速是多少？',
          options: [
            '向右（$+x$ 方向）传播，波速 $v = 40\\text{ cm s}^{-1}$',
            '向左（$-x$ 方向）传播，波速 $v = 40\\text{ cm s}^{-1}$',
            '向右（$+x$ 方向）传播，波速 $v = 20\\text{ cm s}^{-1}$',
            '向左（$-x$ 方向）传播，波速 $v = 20\\text{ cm s}^{-1}$'
          ],
          answerIndex: 1,
          hint: '先画个小草图：$x=2$ 是山峰，$x=4$ 是下坡半山腰（$s=0$），$x=6$ 是山谷。要把整条曲线往左移还是往右移，才能让 $x=4$ 处的新高度掉到负值（向下动）？另外注意完整波长 $\\lambda$ 是多少厘米！',
          wrongDiagnostics: [
            '试着把波形往右移一点点：$x=2$ 的波峰会移向 $x=4$，那 $x=4$ 的质点就会往上升（向上动），跟题目说的“向下动”反啦！',
            '',
            '传播方向和波长都差一点点：$x=0\\to 2(\\text{峰})\\to 4(0)\\to 6(\\text{谷})\\to 8(0)$ 才是一个完整波长 $\\lambda = 8\\text{ cm}$，且向右移会让 $x=4$ 向上动哦。',
            '方向判对了（向左传）！但算波长时小心：$x=0$ 到 $x=4\\text{ cm}$ 只是半个波（一个凸起），完整波长 $\\lambda = 8\\text{ cm}$，所以 $v = \\frac{8}{0.2} = 40\\text{ cm s}^{-1}$！'
          ],
          explanation: '1. <strong>求波长与波速</strong>：$x = 0$（平衡）→ $2\\text{ cm}$（峰）→ $4\\text{ cm}$（平衡）只是半个波长（$\\frac{1}{2}\\lambda = 4\\text{ cm}$），故完整波长 $\\lambda = 8\\text{ cm}$。波速 $v = \\frac{\\lambda}{T} = \\frac{8\\text{ cm}}{0.2\\text{ s}} = 40\\text{ cm s}^{-1}$。<br>2. <strong>用微平移法判方向</strong>：$x = 4\\text{ cm}$ 左边是波峰（$+A$），右边是波谷（$-A$）。既然 $x = 4\\text{ cm}$ 此刻向下运动（下一瞬间位移变负），说明右边 $x = 6\\text{ cm}$ 的波谷正在往左移过来！因此波<strong>向左（$-x$ 方向）</strong>传播。',
          markingKeywords: ['λ = 8 cm', 'v = λ / T = 40 cm s⁻¹', 'travelling to the left (-x direction)']
        },
        {
          id: 'q-4-3-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'A longitudinal wave travels to the right along a row of particles $A, B, C, D, E$ equally spaced by $2\\text{ cm}$. Taking displacement to the right as positive ($+$), at a certain instant the displacements of $A, B, C, D, E$ are $0\\text{ cm}, +0.5\\text{ cm}, 0\\text{ cm}, -0.5\\text{ cm}, 0\\text{ cm}$ respectively. Which particle is at the centre of a compression at this instant, and in which direction is particle $C$ moving?',
          cnTranslation: '一列纵波沿等间距（相邻间隔 $2\\text{ cm}$）排列的质点 $A, B, C, D, E$ 向右传播。取向右位移为正（$+$），在某一瞬间 $A, B, C, D, E$ 的位移分别为 $0\\text{ cm}, +0.5\\text{ cm}, 0\\text{ cm}, -0.5\\text{ cm}, 0\\text{ cm}$。此刻哪个质点位于密部中心？质点 $C$ 正向哪个方向运动？',
          options: [
            'Particle $B$ is at a compression; particle $C$ is moving to the right',
            'Particle $C$ is at a compression; particle $C$ is moving to the right',
            'Particle $C$ is at a compression; particle $C$ is moving to the left',
            'Particle $A$ is at a compression; particle $C$ is moving to the left'
          ],
          answerIndex: 1,
          hint: '分两步击破！① 看 $C$ 的左右邻居：$B$ 的位移是 $+0.5\\text{ cm}$（向右靠拢 $C$），$D$ 的位移是 $-0.5\\text{ cm}$（向左靠拢 $C$），大家都往 $C$ 挤！② 在 $s\\text{–}d$ 图上波形向右微移，$B$ 处的正峰移向 $C$，所以 $C$ 的位移即将变成正（$+$）——正代表向哪边动？',
          wrongDiagnostics: [
            '经典误区！$B$ 的位移最大（$+0.5\\text{ cm}$），但它不是最挤的地方；真正左右两边同时往中间挤的是零位移点 $C$！',
            '',
            '恭喜你抓准了 $C$ 是密部中心！不过再看运动方向：波向右传，下一瞬间左边 $B$ 的正位移（$+$）会传到 $C$ 身上，$C$ 的位移将由 $0$ 变为正值，题目规定“向右为正”，所以 $C$ 正向右运动！',
            '在 $A$ 点右边，$B$ 的位移为 $+0.5\\text{ cm}$（向右远离 $A$），说明质点正在散开，$A$ 是疏部中心（rarefaction），不是密部哦。'
          ],
          explanation: '这道题浓缩了 HKDSE 纵波图像的最高阶考点：<br>1. <strong>找密部中心</strong>：$C$ 本身在原位（$0$），它左边的 $B$ 向右移了 $+0.5\\text{ cm}$（靠近 $C$），它右边的 $D$ 向左移了 $-0.5\\text{ cm}$（也靠近 $C$），两侧质点向 $C$ 聚集，故 <strong>$C$ 位于密部中心（centre of compression）</strong>。<br>2. <strong>判 $C$ 运动方向</strong>：将 $s\\text{–}d$ 曲线向右微移（因为波向右传），原本在 $B$ 处的波峰（$+$）移向 $C$，因此下一瞬间 $C$ 的位移变为<strong>正值（$+$）</strong>，即<strong>向右运动（moving to the right）</strong>。',
          markingKeywords: ['centre of compression at C', 'neighbours displaced towards C', 'moving to the right (positive displacement next instant)']
        }
      ]
    },

    /* ========================================================================
       Section 4.4
       ======================================================================== */
    {
      id: '4.4',
      code: '4.4',
      titleCn: '波速与质点振动速率的区别及能量关系',
      titleEn: 'Wave Speed vs Particle Speed & Wave Energy',
      dseTag: '概念精辨 · Core',
      realLifeHook: {
        title: '🎢 先从生活出发：荡秋千的快慢 vs 传话接力的快慢',
        html: `
          <p>想象一排小朋友坐在秋千上依次传递暗号。<strong>暗号沿着队伍传下去的速度</strong>是恒定的（比如每秒传给 2 个小朋友，这就是<strong>波速 wave speed $v$</strong>）；但是<strong>每个小朋友自己荡秋千的速度</strong>却是时刻在变的——荡到最高点时要停一下才能往回摆（瞬时速率为 $0$），荡过最低点（平衡位置）时飕的一下最快（速率最大）！</p>
          <p>把“队伍传信号的速度”和“单个秋千摆动的速度”彻底分开，你就永远不会被考试里的速度问题绕晕了！</p>
        `
      },
      concepts: [
        {
          title: '1. 波速（Wave Speed） vs 质点速率（Particle Speed）',
          html: `
            <table class="compare-table">
              <thead>
                <tr>
                  <th>对比维度</th>
                  <th>波速（Wave Speed, $v$）</th>
                  <th>质点振动速率（Particle Speed）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>物理意义</strong></td>
                  <td>波形（能量）在介质中向前推进的速率（$v = f\\lambda$）</td>
                  <td>介质中某颗质点在平衡位置附近来回振动的瞬时快慢</td>
                </tr>
                <tr>
                  <td><strong>在均匀介质中是否恒定？</strong></td>
                  <td><strong>恒定不变（constant）</strong>！只取决于介质本身性质</td>
                  <td><strong>时刻周期性变化（changing continuously）</strong>！</td>
                </tr>
                <tr>
                  <td><strong>何处最大 / 何处为零？</strong></td>
                  <td>处处相等</td>
                  <td>• 在<strong>波峰与波谷（极端位置 $s = \\pm A$）</strong>：速率 $= 0$（<span class="term-en">momentarily at rest</span>，瞬时静止，但加速度最大）<br>• 经过<strong>平衡位置（$s = 0$）</strong>：速率达到<strong>最大值（maximum speed）</strong></td>
                </tr>
                <tr>
                  <td><strong>与图像斜率的关系</strong></td>
                  <td><strong>不等于</strong> $s\\text{–}t$ 图斜率！由 $v = \\frac{\\lambda}{T}$ 计算</td>
                  <td>等于该质点 <strong>$s\\text{–}t$ 图切线斜率的大小（magnitude of slope of $s\\text{–}t$ graph）</strong>！</td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: '2. 质点在一个周期 $T$ 内走过的路程（Distance）与位移（Displacement）',
          html: `
            <p>很多计算题会结合运动学考察单个质点的路程：</p>
            <ul>
              <li>在 <strong>$1$ 个周期 $T$</strong> 内，波形向前推进了 <strong>$1\\lambda$</strong>；与此同时，介质中的每一个质点从原位出发完成一次全振动，走过的<strong>总路程（total distance）恒等于 $4A$</strong>，而净位移（net displacement）等于 $0$！</li>
              <li>在 <strong>$\\frac{1}{2}T$</strong> 内，质点走过的总路程也一定等于 <strong>$2A$</strong>。</li>
              <li>因此，质点在一个周期内的<strong>平均振动速率</strong>为 $\\frac{4A}{T} = 4fA$——可见频率越高或振幅越大，质点振动得越剧烈，<strong>波携带的能量（energy）也越大</strong>！</li>
            </ul>
          `
        }
      ],
      formulae: [
        {
          name: '单周期内波传播距离 vs 质点振动路程对比',
          badge: '高频解题关系',
          latex: '\\text{In } 1\\text{ period } T: \\quad d_{\\text{wave}} = \\lambda, \\qquad d_{\\text{particle}} = 4A',
          vars: [
            '$d_{\\text{wave}}$：波形向前推进的水平距离（$\\text{m}$）',
            '$d_{\\text{particle}}$：单个质点上下（或前后）往返走过的总路程（$\\text{m}$）',
            '$A$：振幅 amplitude（$\\text{m}$）'
          ],
          condition: '适用于一切简谐行波。注意：只有从平衡位置或波峰/波谷出发时，$\\frac{1}{4}T$ 路程才恰好等于 $A$！'
        }
      ],
      guidedChain: {
        title: '🧭 连环追问推导：为什么波峰处质点速率反而是 $0$？',
        intro: '把波动跟我们熟悉的“竖直上抛小球 / 荡秋千”联系起来：',
        steps: [
          {
            q: '追问 1：当你把一颗小球竖直向上抛到最高点的那一瞬间，它是正往上飞、往下掉，还是瞬时速率恰好等于 $0$？',
            options: [
              '瞬时速率恰好等于 $0$（准备掉头向下）',
              '速率最大，因为离地面最高'
            ],
            answerIndex: 0,
            a: '完全正确！任何往返运动在到达极端折返点（最高点/最低点）的那一刹那，速率都必须降为 $0$ 才能改变方向。'
          },
          {
            q: '追问 2：波峰（crest, $+A$）和波谷（trough, $-A$）就是质点上下振动的最高折返点和最低折返点！在英文 DSE 考卷上，我们该用哪个标准词组描述质点此刻的状态？',
            options: [
              'permanently at rest（永久静止）',
              'momentarily at rest（瞬时静止）'
            ],
            answerIndex: 1,
            a: '精准拿分！行波上的波峰质点只是“那一瞬间速率为 0”（<strong>momentarily at rest</strong>），下一刻立刻往回加速；第 5 章驻波的波节（node）才是 permanently at rest！'
          },
          {
            q: '追问 3：当质点经过 $1$ 个完整周期 $T$ 时，波形向右推进了 $1\\lambda$；那这颗质点在原地“中→峰→中→谷→中”一共走了多少路程（distance）？净位移（displacement）又是多少？',
            options: [
              '总路程 $= 4A$，净位移 $= 0$',
              '总路程 $= 2A$，净位移 $= \\lambda$'
            ],
            answerIndex: 0,
            a: '漂亮！每 $\\frac{1}{4}T$ 走一个振幅 $A$（从中心或端点算起），一整圈就是 $4A$ 路程，最后回到原位所以净位移为 $0$！'
          }
        ]
      },
      relations: [
        {
          dir: '🔗 前置衔接 ← 第 4.3 节（s–t 图像的斜率）',
          text: '为什么质点在平衡位置（s=0）速率最大、在波峰（s=+A）瞬时静止？看一眼 s–t 图就明白了：过零点时曲线最陡（斜率最大），在波峰顶点处切线水平（斜率为 0）！',
          targetSec: '4.3'
        },
        {
          dir: '⏭️ 后续铺垫 → 第 5.3 节 & 第 7.4 节（振幅与能量）',
          text: '波的能量与振幅 A 正相关：第 5 章水波散开时振幅变小，第 7 章声音振幅越大响度（loudness）越强。',
          targetSec: '7.4'
        }
      ],
      traps: [
        {
          wrong: '误区：看到质点处在波峰最高点（位移最大 $s = +A$），就以为它此刻运动得最快！',
          right: '真相：恰恰相反！就像竖直上抛的小球到达最高点一样，波峰和波谷处的质点此刻正在改变方向，瞬时速率等于 0（momentarily at rest）！经过中心平衡位置（$s = 0$）时才最快！'
        }
      ],
      linkedLab: {
        labId: 'lab2',
        title: '实验 2：观察质点在波峰停顿、过零点冲刺',
        prompt: '在实验 2 中盯住红色箭头（代表质点速度矢量）：每当质点到达波峰或波谷时箭头缩短为 0，穿过中心轴时箭头最长！'
      },
      questions: [
        {
          id: 'q-4-4-1',
          level: 1,
          levelLabel: '第一阶 · 直觉破冰',
          stem: '当一列横波沿着水平拉紧的绳子匀速向右传播时，关于绳子上某一质点 $P$ 的运动快慢，下列说法正确的是？',
          options: [
            '质点 $P$ 上下运动的速率保持恒定，且等于波速 $v$',
            '当质点 $P$ 到达波峰（crest）最高点时，它的瞬时速率达到最大值',
            '当质点 $P$ 经过平衡位置（equilibrium position）时，它的瞬时速率达到最大值',
            '质点 $P$ 在波谷（trough）处停留一段时间后才开始向上运动'
          ],
          answerIndex: 2,
          hint: '把质点 $P$ 想象成正在荡秋千的小朋友：秋千荡到最高点时快，还是荡过最低点（平衡位置）时最快？在最高点是“瞬时速率为 0”还是“停在那里不动一段时间”？',
          wrongDiagnostics: [
            '把“恒定的波速 $v$”跟“时刻变化的质点振动速率”混为一谈啦！质点上下往返怎么可能匀速掉头呢？',
            '反啦！到达波峰最高点时正准备向下折返，瞬时速率是 $0$（momentarily at rest）！',
            '',
            '小心区分“momentarily at rest（仅在那一瞬间速率为 0）”与“stay at rest for a period of time（停留一段时间）”——波谷处受力最大，一到波谷立刻折返，不会停留在那里！'
          ],
          explanation: '在波动过程中，波速 $v$ 恒定，但质点做往复振动：经过<strong>平衡位置（$s = 0$）时速率最大</strong>；到达波峰或波谷（$s = \\pm A$）的那一瞬间速率降为 $0$（<strong>momentarily at rest</strong>），并立即反向加速。',
          markingKeywords: ['maximum speed at equilibrium position', 'momentarily at rest at crests and troughs']
        },
        {
          id: 'q-4-4-2',
          level: 2,
          levelLabel: '第二阶 · 定量对比计算',
          stem: '一列水波的振幅 $A = 2\\text{ cm}$，波长 $\\lambda = 12\\text{ cm}$，频率 $f = 3\\text{ Hz}$。在 $2\\text{ s}$ 时间内，<strong>某个波峰向前推进的距离</strong>与<strong>水面上某只小浮标上下运动的总路程</strong>分别是多少？',
          options: [
            '波峰推进 $72\\text{ cm}$；小浮标路程 $48\\text{ cm}$',
            '波峰推进 $72\\text{ cm}$；小浮标路程 $12\\text{ cm}$',
            '波峰推进 $36\\text{ cm}$；小浮标路程 $48\\text{ cm}$',
            '波峰推进 $72\\text{ cm}$；小浮标路程 $24\\text{ cm}$'
          ],
          answerIndex: 0,
          hint: '频率 $f = 3\\text{ Hz}$ 代表每秒产生 $3$ 个完整振动（$2\\text{ s}$ 就是 $6$ 个完整周期）！① 每周期波峰前进 $1\\lambda = 12\\text{ cm}$；② 每周期浮标上下往返走过 $4A$！',
          wrongDiagnostics: [
            '',
            '波峰推进距离算对了！但 $f = 3\\text{ Hz}$ 意味着 $2\\text{ s}$ 内浮标完成了 $6$ 次全振动，每次全振动路程是 $4A = 8\\text{ cm}$，$6 \\times 8 = 48\\text{ cm}$ 哦！',
            '浮标路程 $48\\text{ cm}$ 算得超棒！再核对一下波速：$v = f\\lambda = 3 \\times 12 = 36\\text{ cm s}^{-1}$，走 $2\\text{ s}$ 应该是 $36 \\times 2 = 72\\text{ cm}$。',
            '差点就全对了！每次完整振动浮标从平衡位置→波峰→平衡→波谷→平衡，走的是 $4A = 8\\text{ cm}$（不是 $2A = 4\\text{ cm}$），$6$ 个周期总共走 $48\\text{ cm}$！'
          ],
          explanation: '1. <strong>波峰推进距离</strong>：波速 $v = f\\lambda = 3 \\times 12 = 36\\text{ cm s}^{-1}$，$2\\text{ s}$ 内推进 $d_{\\text{wave}} = vt = 36 \\times 2 = 72\\text{ cm}$。<br>2. <strong>浮标振动总路程</strong>：$2\\text{ s}$ 内完成的振动次数 $N = ft = 3 \\times 2 = 6$ 个周期。每个周期浮标走过 $4A = 4 \\times 2 = 8\\text{ cm}$，故总路程 $d_{\\text{particle}} = 6 \\times 8 = 48\\text{ cm}$。',
          markingKeywords: ['v = fλ = 36 cm s⁻¹', '4A per cycle', '6 cycles in 2 s → 48 cm']
        },
        {
          id: 'q-4-4-3',
          level: 3,
          levelLabel: '第三阶 · HKDSE 英文实战',
          stem: 'The displacement–time graph of a particle on a stretched string is given. If the vibrator now oscillates with the <strong>same amplitude</strong> but <strong>twice the frequency</strong> (while the tension of the string remains unchanged), how will the wave speed $v$ and the maximum vibration speed $v_{\\text{max}}$ of the particle change?',
          cnTranslation: '已知拉紧弦线上某质点的位移—时间图。若振动器现在保持<strong>相同振幅</strong>，但以<strong>两倍的频率</strong>振动（弦线张力保持不变），波速 $v$ 与质点的最大振动速率 $v_{\\text{max}}$ 将如何变化？',
          options: [
            '$v$ doubles; $v_{\\text{max}}$ doubles',
            '$v$ remains unchanged; $v_{\\text{max}}$ remains unchanged',
            '$v$ remains unchanged; $v_{\\text{max}}$ doubles',
            '$v$ doubles; $v_{\\text{max}}$ remains unchanged'
          ],
          answerIndex: 2,
          hint: '用我们刚学的对比表拆开看：① 弦线张力不变（medium unchanged），波速 $v$ 变不变？② 质点振幅 $A$ 不变，但完成一次 $4A$ 路程所需的时间周期 $T$ 缩短了一半，质点上下跑得是不是快了一倍？',
          wrongDiagnostics: [
            '质点最大振动速率确实翻倍了，但别忘了第 4.2 节的铁律：弦线张力（介质性质）不变，波速 $v$ 绝对不变！',
            '波速 $v$ 不变是对的！但频率翻倍意味着周期 $T$ 减半，质点要在原来一半的时间里跑完同样的 $4A$ 路程，$s\\text{–}t$ 图变得两倍陡峭，所以质点最大速率翻倍！',
            '',
            '正好判断反啦！介质不变所以波速 $v$ 不变；而振动周期减半、振幅不变，质点往返运动速率变为原来的 2 倍。'
          ],
          explanation: '1. <strong>波速 $v$</strong>：只取决于介质性质（弦线张力与线密度），张力不变，故 <strong>$v$ remains unchanged</strong>（波长 $\\lambda$ 减半）。<br>2. <strong>质点最大速率 $v_{\\text{max}}$</strong>：振幅 $A$ 不变而频率翻倍（周期 $T$ 减半），质点在原来一半的时间内完成相同的振动幅度，$s\\text{–}t$ 图在平衡位置处的斜率变为原来的 2 倍，故 <strong>$v_{\\text{max}}$ doubles</strong>。',
          markingKeywords: ['wave speed unchanged (same medium/tension)', 'period halved with same amplitude → particle speed doubles']
        }
      ]
    }
  ]
});
