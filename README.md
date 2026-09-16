# study-pack-generate — 考试复习包 Skill

一个 [Hermes Agent](https://hermes-agent.nousresearch.com) Skill：把老师的 PPT、PDF、讲义、课堂笔记和往年题一键整理成**可复习、可自测、可按天执行**的考试复习包。

## 功能

- 📋 **资料盘点与覆盖图** — 自动盘点资料，标明已覆盖 / 缺失 / 无法识别的部分
- 🎯 **自动划重点** — 按章节总结知识点，重点带资料位置引用
- 📝 **题型与考点映射** — 总结题型，关联对应考点
- ✍️ **练习题 + 闪卡** — 生成可直接自测的题库（含答案解析）和原子化闪卡（CSV）
- 🖨️ **考前速记页** — 单文件 HTML 速记卡，浏览器打开即用、可打印成 A4
- 📅 **复习计划** — 按考试日期和每天可用时间排出每日复习安排
- 🔁 **错题复盘联动** — 读取错题本，为高频错因和薄弱章节加权安排时间

适用于期末考试、期末周突击、补考、考研、自考和证书考试。

## 安装

将本仓库克隆到 Hermes Agent 的 skills 目录：

```bash
git clone https://github.com/LidioMonkey/study-pack-generate.git \
  ~/.hermes/skills/study-pack-generate
```

## 使用

对 Agent 说：

- 「帮我整理期末复习资料」
- 「总结题型 / 生成题库 / 生成闪卡」
- 「做考前速记」「安排复习计划」

并提供课程资料（PPT / PDF / 讲义 / 笔记 / 往年题），可选提供考试日期与每天可用时间。

## 交付物

| 文件 | 说明 |
|---|---|
| `复习包-<课程名>/复习包.md` | 按章节组织的复习包正文 |
| `复习包-<课程名>/复习计划.md` | 每日复习计划 |
| `复习包-<课程名>/闪卡.csv` | 可导入 Anki 等工具的闪卡表 |
| `复习包-<课程名>/考前速记.html` | 单文件 A4 可打印速记页 |

## 目录结构

```text
study-pack-generate/
├── SKILL.md                            # Skill 入口与流程定义
├── references/
│   ├── intake-and-coverage.md          # 资料盘点与覆盖图规范
│   ├── study-pack-output.md            # 复习包正文与 HTML 产物规范
│   ├── flashcards-and-questions.md     # 闪卡 / 题库 / 限时模拟规范
│   └── review-plan.md                  # 复习计划规范
├── assets/
│   ├── study-pack-template.md          # 复习包模板
│   ├── review-plan-template.md         # 复习计划模板
│   └── study-pack.html                 # 速记页 / 复习包 HTML 模板
└── scripts/
    └── validate-study-pack.mjs         # 结构化 JSON 校验脚本
```

## 学术诚信

本工具帮助整理、理解、练习、复盘和规划，**不**帮助作弊、替考、伪造学习记录或绕过监考。

## License

MIT
