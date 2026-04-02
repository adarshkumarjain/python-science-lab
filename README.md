# 🔬 Python Science Lab for Kids

**An interactive, browser-based Python learning app for curious kids aged 8–12.**

Built with love for young scientists and mathematicians. No installation required — just open `index.html` and learn!

---

## ✨ What's Inside

- **20 chapters** covering every core Python concept — from `print()` all the way to a capstone project
- **Science & math themed** — every example uses rockets, planets, chemistry, and real formulas
- **Real Python** running live in the browser (powered by [Pyodide](https://pyodide.org))
- **Voice narration** — press "Read to me" and the lesson is read aloud
- **Ask Professor Python** — an AI tutor that answers questions about the current lesson
- **Real-world examples** — every concept shows where it's used in real apps (Instagram, NASA, Google Maps…)
- **Progress tracking** — chapters unlock as you complete them, progress saved automatically
- **No installation, no server** — open `index.html` directly in any modern browser

---

## 👨‍👩‍👧 For Parents — Getting Started

### Step 1: Open the app
Double-click `index.html` inside this folder. It opens in your web browser — no installation needed.

### Step 2 (optional): Set up the AI Tutor
The "Ask Professor Python" feature lets your child ask questions and get instant, kid-friendly answers. To enable it:

1. A parent should go to [console.anthropic.com](https://console.anthropic.com) and create a free account
2. Generate an API key (starts with `sk-ant-...`)
3. When your child clicks "Ask Professor Python" in the app for the first time, paste the key in the box that appears
4. The key is saved on your computer only — it never leaves your device except to talk to Anthropic's AI

> **Cost:** The AI tutor uses Claude Haiku, which is extremely cheap. A typical session of 20–30 questions costs less than $0.01.

### Step 3 (optional): Publish it online
If you'd like your child to access the app from any device (iPad, school computer, etc.), see **[docs/how-to-publish.md](docs/how-to-publish.md)** for a simple step-by-step guide. It's free using GitHub Pages or Netlify.

### Things to know
- The first time a chapter loads, it downloads the Python engine (~8 MB). This takes 5–15 seconds and only happens once.
- An internet connection is needed the first time and for the AI tutor. After that, the app and narration work offline.
- Progress is saved in the browser automatically. Clearing browser data will reset progress.

---

## 🗺️ The 20 Chapters

| # | Topic | Concept |
|---|-------|---------|
| 1 | Hello, Python! | `print()` |
| 2 | Variables | Storing data |
| 3 | Numbers & Math | Arithmetic operators |
| 4 | Strings & Text | String basics, f-strings |
| 5 | User Input | `input()`, type conversion |
| 6 | If / Else | Conditionals |
| 7 | Multiple Conditions | `elif` chains |
| 8 | Comparisons & Logic | `and`, `or`, `not` |
| 9 | While Loops | Repetition |
| 10 | For Loops | Iteration, `range()` |
| 11 | Lists | Collections, indexing |
| 12 | List Operations | `append`, `sort`, `sum` |
| 13 | Dictionaries | Key-value pairs |
| 14 | Functions | `def`, reusable code |
| 15 | Return Values | Parameters, `return` |
| 16 | String Methods | `.split()`, `.strip()`, `.join()` |
| 17 | Nested Loops | 2D data, grids |
| 18 | Error Handling | `try` / `except` |
| 19 | Modules & Libraries | `import math`, `import random` |
| 20 | Capstone Project | Science Lab Simulator |

---

## 🛠️ For Developers

### Project structure

```
PythonLab/
├── index.html
├── chapter.html
├── css/
│   └── style.css
├── js/
│   ├── chapters.js
│   ├── realworld.js
│   ├── narrator.js
│   ├── qa.js
│   └── runner.js
└── docs/
    ├── how-to-publish.md
    └── how-to-add-chapter.md
```

### Tech stack

| What | How |
|------|-----|
| Python execution | [Pyodide](https://pyodide.org) |
| Code editor | [CodeMirror 5](https://codemirror.net/5/) |
| Voice narration | Web Speech API |
| AI tutor | [Anthropic Claude Haiku](https://www.anthropic.com) |
| Styling | Vanilla CSS |
| Storage | `localStorage` |
| Deployment | GitHub Pages, Netlify, Vercel, etc. |

### Contributing

1. Fork this repo
2. Add or improve a chapter in `js/chapters.js`
3. Open a pull request

---

## 📄 License

MIT — see [LICENSE](LICENSE). Made with ❤️ by AKJ.
