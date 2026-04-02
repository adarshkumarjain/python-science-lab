# How to Add a New Chapter

This guide walks you through adding chapter 21, 22, or any new chapter to Python Science Lab.

Each chapter lives in two files:
- **`js/chapters.js`** — the lesson content (intro, lesson, lab, quiz)
- **`js/realworld.js`** — narration text and real-world usage examples

You need to update both files for a new chapter to work correctly.

---

## Step 1: Pick your topic and concept

Decide what Python concept the chapter will teach. Some ideas for chapters 21+:

| # | Topic | Concept |
|---|-------|---------|
| 21 | File Explorer | Reading files with `open()` |
| 22 | Sorting Lab | Sorting algorithms (`sorted`, `key=`) |
| 23 | Data Tables | 2D lists and tabular data |
| 24 | Classes & Objects | OOP basics with `class` |
| 25 | Turtle Graphics | Drawing with `turtle` (Pyodide supports this!) |

---

## Step 2: Add the chapter to `js/chapters.js`

Open `js/chapters.js` and scroll to the end of the `CHAPTERS` array. Add a new object inside the array (before the closing `]`). Here’s the full template:

```js
{
  id: 21,
  emoji: '📂',           // pick a fun emoji for this topic
  color: '#ff9500',      // pick a highlight color (hex)
  title: 'File Explorer',
  tagline: 'Read and write files like a pro',

  steps: [

    // ── STEP 1: INTRO ──────────────────────────────────────────────────
    {
      type: 'intro',
      title: 'What are files?',
      visual: '📂',        // large emoji shown in the intro card
      content: `
        <p>Every time you save a document or a photo, it becomes a <strong>file</strong>.</p>
        <p>Python can open files, read what’s inside, and even write new files — just like a filing cabinet!</p>
      `,
      concepts: [
        'Files store data permanently on your computer',
        'Python uses <code>open()</code> to access files',
        'You can read, write, or append to files'
      ]
    },

    // ── STEP 2: LEARN ──────────────────────────────────────────────────
    {
      type: 'learn',
      title: 'Opening and reading files',
      explanation: `
        <p>Use <code>open(filename, mode)</code> to open a file. The most common modes are:</p>
        <ul>
          <li><code>'r'</code> — read (default)</li>
          <li><code>'w'</code> — write (creates or overwrites)</li>
          <li><code>'a'</code> — append (adds to end)</li>
        </ul>
        <p>Always use a <strong>with</strong> block — it closes the file automatically:</p>
      `,
      code: `# Write a file, then read it back
with open('planets.txt', 'w') as f:
    f.write('Mercury\\n')
    f.write('Venus\\n')
    f.write('Earth\\n')

with open('planets.txt', 'r') as f:
    contents = f.read()

print(contents)`
    },

    // ── STEP 3: LAB ────────────────────────────────────────────────────
    {
      type: 'lab',
      title: 'Science Notes Lab',
      instructions: `
        <p>Create a file called <code>notes.txt</code>, write at least <strong>two science facts</strong> into it (one per line), then read the file and print its contents.</p>
      `,
      starterCode: `# Science Notes Lab
# Write two science facts to notes.txt, then print them

with open('notes.txt', 'w') as f:
    f.write('')   # write fact 1

# Now read it back
with open('notes.txt', 'r') as f:
    pass  # read and print contents
`,
      hints: [
        "Use f.write('Your fact here\\n') — the \\n adds a new line",
        "After writing, open the file again with mode 'r' to read it",
        "Use print(f.read()) to print everything at once"
      ],
      checkKeywords: ['open', 'write', 'read', 'notes.txt'],
      successMessage: "🗂️ You're a file wizard! Scientists use files just like this to store experiment data."
    },

    // ── STEP 4: QUIZ ───────────────────────────────────────────────────
    {
      type: 'quiz',
      title: 'Quick Quiz',
      question: 'Which mode should you use to add text to the END of an existing file without erasing what\'s already there?',
      options: [
        { label: "'r' — read mode" },
        { label: "'w' — write mode" },
        { label: "'a' — append mode" },
        { label: "'e' — extend mode" }
      ],
      correct: 2,    // 0-indexed — 'a' is index 2
      explanation: "Append mode ('a') adds new text to the end of the file. Write mode ('w') would erase everything first. There's no 'e' mode!"
    }

  ]
},
```

### Key rules

- `id` must be **unique** and one higher than the previous chapter.
- `checkKeywords` is an array of strings the student’s code must contain to pass the lab. Keep it tight — 3–5 keywords that confirm they actually used the concept.
- `correct` in the quiz is **zero-indexed** (first option = 0, second = 1, etc.).
- HTML is allowed in `content`, `explanation`, and `instructions` fields.

---

## Step 3: Add the chapter to `js/realworld.js`

Open `js/realworld.js` and add an entry to the `REALWORLD` object. Use the chapter ID as the key:

```js
21: {
  intro: {
    speakText: `Welcome to Chapter 21! Today we're going to learn about files.
      Every app you've ever used — games, notes, music players — stores data in files.
      Python makes it easy to create, read, and write files, and that’s exactly what we’re going to do.`
  },
  learn: {
    speakText: `In Python, we use the open function to work with files.
      You can open a file to read what’s already inside, write brand new content, or append to add more at the end.
      The with block is your best friend here — it automatically closes the file when you’re done, which prevents bugs.`,
    realWorld: {
      heading: 'Where are files used in the real world?',
      examples: [
        {
          icon: '🎵',
          app: 'Spotify',
          desc: 'Stores downloaded songs as files on your device so you can listen offline.'
        },
        {
          icon: '🏥',
          app: 'Hospitals',
          desc: 'Patient records, test results, and prescriptions are all stored as files in medical systems.'
        },
        {
          icon: '🎮',
          app: 'Video Games',
          desc: 'Save files store your progress — when you quit and reload, the game reads your save file.'
        }
      ],
      tip: `Tip: When scientists run experiments, they often write results to a CSV file (a type of text file). Python’s pandas library can read millions of rows from these files in seconds.`
    }
  }
},
```

### What each field does

- **`intro.speakText`** — read aloud when the student clicks “Read” on the intro step. Write it as natural spoken sentences (not HTML).
- **`learn.speakText`** — read aloud on the learn step.
- **`learn.realWorld`** — shown in the “Real World” card on the learn step:
  - `heading` — card title
  - `examples` — array of exactly 3 objects with `icon`, `app`, and `desc`
  - `tip` — shown at the bottom of the card (Pro Tip box)

If you skip a chapter ID or leave out a field, the narrator will fall back to reading the page text, and the real-world card will not render. That’s fine — just means no curated content for that step.

---

## Step 4: Update the chapter count (optional)

If you want the home page to show “of 21 chapters” instead of “of 20”, search `index.html` for `20` in these two spots and update the number:

```js
// index.html, around line 39
<div class="big-label">of 20 done</div>

// index.html, around line 119
const pct = Math.round((completedCount / 20) * 100);
```

Also update the progress label array if you want new trophy milestones.

---

## Step 5: Test your chapter

1. Open `index.html` in your browser.
2. If you’ve already completed chapter 20, your new chapter will appear unlocked. Otherwise, quickly complete the previous chapter’s quiz to unlock it.
3. Walk through all 4 steps. Check that:
   - The intro renders correctly
   - The code in the learn step runs without errors
   - The lab validates correctly (submit code that contains your `checkKeywords`)
   - The quiz marks the right answer as correct
   - The narrator reads aloud on intro and learn steps
   - The real-world card appears on the learn step

That’s it — your new chapter is live!
