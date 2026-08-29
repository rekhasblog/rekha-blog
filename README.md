# Hollow Moon Tarot — website

Built with [Astro](https://astro.build). Static site, works on any host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages all have free tiers).

## Running it locally

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:4321).

To build the final files for hosting:

```
npm run build
```

That outputs a `dist/` folder — upload that folder's contents to any static
host, or connect your host directly to this project's Git repo and it will
run `npm run build` for you automatically.

## Where to edit things (this is the important part)

The whole point of this setup is that everyday edits happen in a few plain
files, and never touch the layout/design code. You should not need to open
anything in `src/components` or `src/layouts` for routine changes.

**Shop info, phone number, nav menu, social links**
→ `src/data/site.ts`

**Add, remove, or edit a reading/offering**
→ `src/data/offerings.ts`
Copy an existing block, change the title/price/description, save. Delete a
block to remove that offering. The Offerings page and the homepage preview
both update automatically.

**Write a new blog post**
→ add a new `.md` file inside `src/content/blog/`
Copy an existing post file as a starting point. Each post needs this at the
top:

```
---
title: "Your Post Title"
date: 2026-09-01
excerpt: "One sentence that shows up in the preview."
---
```

Everything below the second `---` is the post body, written in plain
Markdown (blank line between paragraphs, `**bold**`, `*italic*`, etc).
Posts are sorted by `date` automatically — the newest one always appears
featured at the top of `/blog` and on the homepage. You don't need to
update any list or index anywhere else.

**About Me page text**
→ `src/pages/about.astro` — edit the text inside the `<div class="post-body">`
block near the bottom. Leave the surrounding tags alone.

**Terms & Conditions**
→ `src/pages/terms.astro`

## Why it's set up this way

Everything above lives in small, plain files that only hold content — no
layout or styling logic. The actual design (header, footer, colors, the
two-column section layout, card styling) lives once in `src/components`,
`src/layouts`, and `src/styles/global.css`, and every page reuses it. That
means:

- Editing a blog post or an offering can't break the layout — there's no
  layout code in those files to break.
- If you want to change something visual (colors, fonts, spacing), there's
  one file for that: `src/styles/global.css`. The color and font values
  are declared once at the top of that file under `:root` — change a value
  there and it updates across the whole site.
- Every page (`Home`, `About Me`, `Offerings`, `Blog`) is built from the
  same two components — `Header` and `Footer` — plus a shared two-column
  `SplitSection` layout for the inner pages, matching the section
  structure you sketched out. Adding a fifth page later means copying one
  of the existing page files and swapping the content, not rebuilding
  navigation or the footer again.

## Structure

```
src/
  data/
    site.ts        ← shop name, phone, nav, social links
    offerings.ts    ← list of readings offered
  content/
    blog/           ← one .md file per blog post
  components/
    Header.astro
    Footer.astro
    SplitSection.astro   ← the sidebar + main-content layout
  layouts/
    BaseLayout.astro      ← wraps every page in Header/Footer/fonts
  pages/
    index.astro     ← home
    about.astro
    offerings.astro
    terms.astro
    blog/
      index.astro          ← blog listing
      [...slug].astro      ← single post template (auto-generated per post)
  styles/
    global.css      ← colors, fonts, spacing — the whole design system
```
