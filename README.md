# NOVA AI Studio

A polished React AI productivity workspace built for a front-end developer portfolio.

## Features

- React component architecture
- Smart Writer, Resume Bullet Lab, Cover Letter, and Text Summarizer
- Portfolio demo mode requiring no API key or paid service
- Optional live AI mode through a secure Netlify Function
- Local generation history
- Copy and text-download actions
- Dark/light themes
- Ctrl/Cmd + K command palette
- Responsive desktop, tablet, and mobile layouts
- Loading, empty, and error states
- Profile and notification menus

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Netlify deployment

Build command: `npm run build`  
Publish directory: `dist`

The included `netlify.toml` configures this automatically.

## Optional live AI mode

1. Deploy the GitHub repository to Netlify.
2. Open **Site configuration → Environment variables**.
3. Add `OPENAI_API_KEY`.
4. Optionally add `OPENAI_MODEL`.
5. Redeploy.
6. Select **Live AI mode** in NOVA Settings.

Never put an API key in React source code or commit it to GitHub.

## Important

Demo mode is fully usable for portfolio review. Live AI may create usage charges on the API account and should only be enabled after reviewing the provider's pricing and limits.
