# How to Publish Python Science Lab Online

Publishing lets your child access the app from any device — iPad, school computer, a friend's house — without needing the folder on that device. Both options below are **free** and require no backend server.

---

## Option A — GitHub Pages (Recommended)

GitHub Pages hosts your project directly from a GitHub repository. Free, fast, and takes about 10 minutes.

### Step 1: Create a GitHub account

Go to [github.com](https://github.com) and sign up for a free account if you don't have one.

### Step 2: Create a new repository

1. Click the **+** icon in the top right → **New repository**
2. Name it something like `python-science-lab`
3. Set visibility to **Public** (required for free GitHub Pages)
4. Leave everything else as default and click **Create repository**

### Step 3: Upload your files

On the repository page, click **uploading an existing file** (or drag and drop):

1. Open your `PythonLab/` folder on your computer
2. Select **all files and folders** inside it
3. Drag them into the GitHub upload area
4. Add a commit message like `Initial upload`, and click **Commit changes**

### Step 4: Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (in the left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: **main** and folder: **/ (root)**
4. Click **Save**

### Step 5: Wait ~2 minutes, then visit your site

GitHub will show:

> ✅ Your site is live at `https://your-username.github.io/python-science-lab/`

Share that link with your child! Bookmark it on their devices.

---

## Option B — Netlify Drop (Easiest — no account needed)

1. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag the entire `PythonLab/` folder onto the Netlify Drop page.
3. Netlify gives you a URL like `https://amazing-curie-abc123.netlify.app`. Done!

---

## Things to know after publishing

- **Python engine**: First visit downloads Pyodide (~8 MB). One-time per browser.
- **AI Tutor**: Always needs an internet connection. Each user enters their own API key.
- **Progress is per-device**: Stored in `localStorage`. Doesn't sync across devices.
- **HTTPS is automatic**: Required for voice narration (Web Speech API).
