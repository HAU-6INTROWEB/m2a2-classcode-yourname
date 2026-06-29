# Module 2 – Activity 2 – Your Portfolio: The Projects Grid

The projects section is the centerpiece of your portfolio - a grid of cards that
**all share the same structure**. That shared structure is a **component**. With
no framework, your component is a **CSS class**: you write the `.card` rules
**once**, and every card that uses that class looks the same. Change `.card`,
and every project updates at once. That is the "build once, reuse everywhere"
idea from design-system week, in CSS.

New concepts: **CSS Grid** for 2-D layout and **responsive columns with no media
query**.

## What to do

### 1. Fill in your details

Open `student.json` and fill in every field (keep it **identical** to your other
activities; the `classCode` must match your repo name):

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

### 2. Build the grid

> **Work in the [`src/`](src/) folder.** Everything else is course plumbing -
> leave it alone.

This activity ships with a **starter**: [`src/index.html`](src/index.html) has
**one finished card** marked as your reusable unit inside a
`<section class="projects">`, and [`src/styles.css`](src/styles.css) has two
`TODO`s.

1. In `index.html`, **copy** the whole `.card` block so you have at least
   **three** projects (4–6 is better). Every copy keeps `class="card"`.
2. In `styles.css`, turn **`.projects`** into a **responsive grid** whose
   columns fit automatically and reflow as the window resizes - **no media
   query**. Research `repeat()`, `minmax()`, and `auto-fit`.
3. Make **`.card`** a **vertical flex container** so its contents stack neatly.

The `TODO`s name every concept to research. Write the CSS yourself.

### 3. View it in a browser

Open `src/index.html` and **slowly resize the window** - watch the grid reflow
from about three columns to fewer, with no HTML changes. (Stretch goal: add one
media query to fine-tune a breakpoint.)

> The component **is** the `.card` class. Style the class once; never copy-paste
> CSS per card. If you catch yourself copying CSS, that's the signal a class
> should be doing the work.

## Set up your repo

1. **Create from the template** - *Use this template → Create a new repository*.
2. **Owner = the `HAU-6INTROWEB` course org.**
3. **Name it** `m2a2-<classcode>-yourname`. The `<classcode>` must match
   `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m2a2-<classcode>-yourname.git
cd m2a2-<classcode>-yourname
```

## Running the tests

```bash
npm install
npm test
```

This activity is graded by **8 tests** (1 point each). They check:

- ✅ `styles.css` is linked and has rules in it
- ✅ no inline `style=""` attributes
- ✅ a `.projects` container with at least three `.card` components
- ✅ every card keeps the component structure (image, heading, link)
- ✅ `.projects` is a grid (`display: grid`)
- ✅ columns fit automatically (`repeat()` + `minmax()` + `auto-fit`/`auto-fill`)
- ✅ the card stacks with flexbox (`flex-direction: column` + `gap`)
- ✅ `student.json` is completely filled in

Each part is graded independently, so you earn partial credit.

## Confirm your submission

When your tests pass locally, **commit and push**:

```bash
git add -A
git commit -m "Activity 2 complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, then the
latest **Autograde** run, and confirm the green ✅ check, the "8 / 8 tests
passed" summary, and the 📸 page-preview link.

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.
