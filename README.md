# Oxford Physics at Work for HKDSE - Wave Motion II (Book 3B) 互动学习平台

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HKDSE Physics](https://img.shields.io/badge/HKDSE-Physics%203B-purple.svg)]()
[![Pure Vanilla Web](https://img.shields.io/badge/Stack-Vanilla%20HTML%2FCSS%2FJS-brightgreen.svg)]()

专为香港中学文凭考试（HKDSE）物理科学生设计的互动学习网站，全量覆盖牛津大学出版社教材 **《Physics at Work (2nd Edition) - Book 3B: Wave Motion II》**。

网站采用中文系统讲解核心概念，核心物理术语严格标注对应英文，数学公式与符号体系 100% 严格依照教材及香港考评局（HKEAA）官方考纲规范，辅以生活实例、苏格拉底式启发问题与仿真实验实验室。

---

## 🌟 核心特色 (Core Features)

1. **全书知识点体系化覆盖（4 大章节 · 17 个小节）**
   - **Chapter 4: Wave Nature of Light（光的波動本質）**：光的波模型发展史、折射率 $n = c/v$、惠更斯原理解释折射与反射定律、光电磁波谱。
   - **Chapter 5: Wave Nature of Sound（聲的波動本質）**：声波纵波本色、声速决定因素、超声波与次声波、回声测距、共鸣与固有频率。
   - **Chapter 6: Superposition and Interference of Waves（波的疊加與干涉）**：位移叠加原理、相干波源、双缝干涉条纹 $\Delta y = \frac{\lambda D}{a}$、波程差 $\Delta x$ 判断明暗纹条件、薄膜干涉、衍射光栅方程 $d \sin\theta = m\lambda$。
   - **Chapter 7: Stationary Waves（駐波）**：驻波形成机理、波节（Node）与波腹（Antinode）、两端固定弦线驻波（$f_n = n \frac{v}{2L}$）、开管与闭管空气柱驻波谐音系列。

2. **苏格拉底式分步启发（Socratic Guided Inquiries）**
   - 包含 51 步启发式引导，拒绝填鸭式被动灌输。每节先抛出真实物理困惑与生活案例，层层引导学生自主推导物理定律。

3. **三阶进阶闯关练习（3-Stage Progressive Exercises）**
   - 包含 51 道阶梯式原创题型，覆盖：
     - **Stage 1**: 概念辨析（判定概念混淆点）
     - **Stage 2**: 综合计算（代入与单位陷阱排查）
     - **Stage 3**: DSE 典题思维（长答题踩分点与规范论述）
   - 每题均配备即时解题反馈、错误归因诊断与 DSE 评分标准（Marking Rubrics）。

4. **7 大 HTML5 Canvas 高清物理交互实验室（Virtual Interactive Labs）**
   - 🔬 **杨氏双缝干涉实验室**：动态调整缝间距 $a$、屏距 $D$、波长 $\lambda$，实时观察条纹密度变化与强度剖面。
   - 🌈 **衍射光栅光谱仪**：多波长混合光入射，观察白光被光栅分光展开成一阶、二阶连续光谱及中央白纹。
   - 🫧 **薄膜干涉与劈尖干涉**：观察上下面反射光程差与半波损失带来的彩色干涉条纹。
   - 🎸 **弦线驻波调频仿真**：自由调节振动频率与张力，实时展现基波与各次谐波（Harmonics）波节与波腹分布。
   - 🎷 **空气管柱驻波共鸣台**：开管与闭管端点边界条件演示，可视化空气位移波与压强波。
   - 🌊 **双波源干涉场水波槽**：2D 波动动力学引擎，渲染节线（Nodal lines）与腹线（Antinodal lines）双曲线簇。
   - 🔊 **Web Audio 声波拍频（Beats）听觉实验室**：调用浏览器音频合成器，直观聆听双频率声波叠加产生的拍频强弱周期。

5. **知识网络与全景复习工具**
   - **概念关系全景图谱（Concept Network Graph）**：直观展示光与声在干涉、衍射与驻波上的横向联系。
   - **4 大综合对比矩阵**：行波 vs 驻波、单缝衍射 vs 双缝干涉 vs 衍射光栅、开管 vs 闭管等高频易混对比。
   - **12 个核心公式推导卡**：标注适用前提、符号物理意义与常见扣分误区。
   - **56 张 3D 翻转抽认卡（Flip Flashcards）**：英汉双语术语快速默记。
   - **4 套章节模拟测试卷**：全真模拟 DSE Paper 1A 单选与 Paper 1B 结构化问答题。

6. **免安装 & 离线高可用架构**
   - 零构建依赖（Vanilla HTML5 + CSS3 + ES6 Modules）。
   - 双引擎公式渲染（优先 CDN KaTeX；离线自动切换纯原生 HTML 语义化数学排版）。
   - 本地自动保存刷题进度、错题本与掌握度分析。

---

## 🚀 本地运行 (Quick Start)

本项目为纯前端静态工程，无需安装任何构建工具或 Node.js 环境：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/KenLin666Bot/oxford-physics-3b.git
   cd oxford-physics-3b
   ```

2. **直接在浏览器中打开**：
   - 双击 `index.html` 即可在 Safari / Chrome / Edge 中畅享完整功能。
   - 或使用任意静态文件服务器（例如 Python）：
     ```bash
     python3 -m http.server 8080
     ```
     然后在浏览器中访问 `http://localhost:8080`。

---

## 📂 项目结构 (Project Structure)

```text
oxford-physics-3b/
├── index.html               # 响应式 SPA 单页应用主结构
├── css/
│   └── styles.css           # 现代化 UI 样式库（深浅主题、暗色模式、排版、组件动效）
├── js/
│   ├── app.js               # 单页应用路由、题目判卷交互、双引擎数学排版与状态管理
│   ├── data-ch4.js          # 第4章知识点、苏格拉底引导与练习数据（光的波動本質）
│   ├── data-ch5.js          # 第5章知识点、苏格拉底引导与练习数据（聲的波動本質）
│   ├── data-ch6.js          # 第6章知识点、苏格拉底引导与练习数据（波的疊加與干涉）
│   ├── data-ch7.js          # 第7章知识点、苏格拉底引导与练习数据（駐波）
│   ├── data-map-glossary.js # 概念关联拓扑图、综合对比表、核心公式推导卡与 3D 抽认卡
│   ├── data-exams.js        # 4 套全真模拟卷题库（含 Paper 1A MC 与 Paper 1B SQ 评分细则）
│   └── labs.js              # 7 个 HTML5 Canvas 物理动力学仿真引擎与 Web Audio 交互
├── .gitignore
└── README.md
```

---

## 🎯 教学与考纲标准 (HKDSE Curriculum Alignment)

- 依据香港考评局（HKEAA）《物理科课程及评估指引（中四至中六）》设计。
- 严格剔除 DSE 选修或超纲概念（如偏振/極化 Polarization、多普勒效應 Doppler effect、薄膜反射相位跃迁定量推导等），专注把控必修核心范围与踩分要点。
- 符号与单位统一遵循教材原貌：如双缝条纹间距 $\Delta y$、小孔/缝间距 $a$、光栅常数 $d$、波长 $\lambda$、频率 $f$ 等。

---

## 📄 开源许可证 (License)

本项目遵循 [MIT License](LICENSE) 开源协议。
教学内容与知识点归纳参考香港牛津大学出版社（Oxford University Press）教材设计，仅供个人学习与辅助教学交流使用。
