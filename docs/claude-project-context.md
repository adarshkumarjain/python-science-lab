# Claude Project Context — Python Science Lab for Kids

Paste this into a new Claude Project's **Custom Instructions** field so Claude always has full context about this project without re-explaining it each session.

---

## What this project is

**Python Science Lab** is a static web app that teaches Python to a 10-year-old child who loves math and science. It runs entirely in the browser — no server, no build step. The child works through 20 chapters, each covering one Python concept, with a 4-step structure: Intro → Learn → Lab → Quiz.

Key features:
- **Pyodide** — real Python runs in the browser via WebAssembly (loaded from CDN)
- **CodeMirror 5** — syntax-highlighted code editor (CDN)
- **Web Speech API** — browser-native text-to-speech narration, no API key needed
- **Claude Haiku** — "Ask Professor Python" Q&A tutor, called directly from the browser using the Anthropic API (`anthropic-dangerous-direct-browser-access: true`)
- **localStorage** — stores chapter progress, API key, narrator speed, mute state
- Chapter unlock chain: completing a quiz unlocks the next chapter

## File structure

```
PythonLab/
├── index.html          — Home page: chapter grid, progress bar, unlock system
├── chapter.html        — Single template that renders all 20 chapters dynamically
├── css/
│   └── style.css       — All styling (dark space theme, narrator bar, real-world card, Q&A widget)
├── js/
│   ├── chapters.js     — All 20 chapter definitions (content, lab, quiz)
│   ├── realworld.js    — Narration text + real-world usage examples per chapter
│   ├── narrator.js     — Web Speech API TTS (Narrator class + global helpers)
│   ├── qa.js           — Claude Haiku Q&A widget (chat UI + API calls)
│   └── runner.js       — Pyodide engine (runPython, formatError)
├── docs/
│   ├── how-to-publish.md       — GitHub Pages + Netlify step-by-step
│   ├── how-to-add-chapter.md   — Full guide for adding chapter 21+
│   └── claude-project-context.md — This file
├── README.md
├── LICENSE             — MIT, "Python Science Lab for Kids by AKJ"
└── .gitignore
```

## Chapter data shape (`js/chapters.js`)

Each chapter in the `CHAPTERS` array:

```js
{
  id: 1,                          // integer, 1-based
  emoji: '🖨️',
  color: '#ff6b6b',               // hex, used for card highlight
  title: 'Hello, World!',
  tagline: 'Make Python speak',
  steps: [
    { type: 'intro',  title, visual, content (HTML), concepts[] },
    { type: 'learn',  title, explanation (HTML), code (string) },
    { type: 'lab',    title, instructions (HTML), starterCode, hints[], checkKeywords[], successMessage },
    { type: 'quiz',   title, question, options[{ label }], correct (0-indexed), explanation }
  ]
}
```

## Real-world data shape (`js/realworld.js`)

```js
const REALWORLD = {
  1: {
    intro: { speakText: "..." },
    learn: {
      speakText: "...",
      realWorld: {
        heading: "...",
        examples: [
          { icon: "🌐", app: "App Name", desc: "..." },   // exactly 3
          { icon: "🤖", app: "App Name", desc: "..." },
          { icon: "🎮", app: "App Name", desc: "..." }
        ],
        tip: "Pro tip text..."
      }
    }
  },
  // 2 through 20...
}
```

## Key rendering logic (`chapter.html`)

- `goStep(n)` — switches between the 4 steps; calls `stopNarrator()` on each transition
- `renderIntroStep()` — adds `Narrator.renderBar()` + `renderQAWidget()`
- `renderLearnStep()` — adds `Narrator.renderBar()` + real-world card (from REALWORLD) + `renderQAWidget()`
- `renderLabStep()` / `renderQuizStep()` — add `renderQAWidget()` only
- Lab validation: code must have been run without error AND contain all strings in `checkKeywords`
- `Narrator.buildSpeakText(stepType, chapterId, stepTitle)` — reads from REALWORLD first, falls back to DOM text

## Common tasks you'll be asked to do

- **Add a new chapter** — update `js/chapters.js` (new entry in CHAPTERS array) + `js/realworld.js` (new key with intro/learn data). See `docs/how-to-add-chapter.md` for the full template.
- **Edit an existing chapter** — find the chapter by `id` in `chapters.js` and/or the matching key in `realworld.js`
- **Fix a bug in the lab validator** — logic is in `chapter.html` around the `checkKeywords` loop
- **Update styling** — all in `css/style.css`; CSS custom properties are at the top of the file
- **Change narrator voices** — priority list is in `narrator.js` in `_loadVoices()`
- **Update Q&A system prompt** — in `qa.js` in the `askProfessorPython()` function
- **Publish the app** — see `docs/how-to-publish.md`

## Conventions to follow

- HTML is allowed inside `content`, `explanation`, and `instructions` fields in chapters.js
- `speakText` in realworld.js must be plain text only (no HTML) — it's passed to Web Speech API
- `checkKeywords` should have 3–5 strings — tight enough to confirm the concept was used, loose enough not to block valid solutions
- `correct` in quiz steps is zero-indexed
- Chapter IDs in both files must stay in sync; gaps will cause silent failures
- Never use `localStorage` for anything other than: `pythonlab_progress`, `pythonlab_apikey`, `pythonlab_narrator_rate`, `pythonlab_narrator_muted`
