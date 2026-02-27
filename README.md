# herjotdhaliwal.dev

Personal portfolio website for Herjot Dhaliwal — Software Engineer at Microsoft.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 6** — Build tool and dev server
- **Vanilla CSS** — Custom properties (CSS variables), no UI library
- **GitHub Models API** — Free AI chatbot powered by GPT-4o-mini
- **Express** — Local API server for development
- **Vercel Serverless Functions** — API hosting in production

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A GitHub Personal Access Token with `models:read` permission (for the AI chatbot)

### Install & Run

```bash
npm install
```

Create a `.env` file in the project root:

```
GITHUB_TOKEN=your_github_pat_here
```

Start both the API server and Vite dev server:

```bash
node server.mjs &    # Start API server on port 3001
npm run dev          # Start Vite on port 5173 (proxies /api to 3001)
```

Opens at `http://localhost:5173/`. The AI chatbot will call the local API server which proxies to GitHub Models.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy this folder to any static host.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
herjotdhaliwal-react/
├── index.html              # Entry point
├── vite.config.js          # Vite config (includes /api proxy for local dev)
├── vercel.json             # Vercel routing config
├── server.mjs              # Local Express API server (dev only)
├── .env                    # GitHub token (git-ignored)
├── .gitignore
├── package.json
├── public/                 # Static assets
├── dist/                   # Production build output
├── api/
│   └── chat.js             # Vercel serverless function (production)
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # App shell — composes all sections
    ├── styles/
    │   └── global.css      # CSS variables, resets, shared classes
    └── components/
        ├── Particles.jsx   # Animated particle background
        ├── Cursor.jsx/css  # Custom cursor with trail effect
        ├── Nav.jsx/css     # Fixed navbar with scroll detection
        ├── Hero.jsx/css    # Hero section with typing animation
        ├── About.jsx/css   # About section with stat counters
        ├── Experience.jsx/css  # Timeline with career history
        ├── Skills.jsx/css  # Skill category cards
        ├── Education.jsx/css   # Education card
        ├── BeyondCode.jsx/css  # Hobbies / personal interests
        ├── AiChat.jsx/css  # AI chatbot (floating widget)
        ├── Contact.jsx/css # Contact section
        └── Footer.jsx/css  # Footer
```

## Components

### Particles

Canvas-based particle system with mouse interaction. Particles repel from the cursor and connect with lines when close together. Automatically scales particle count based on viewport size.

### Cursor

Custom cursor with a dot and trailing ring. Grows on hover over interactive elements (links, buttons, cards). Hidden on touch devices.

### Nav

Fixed top navbar. Transparent on top, blurs on scroll. Active section tracking via `IntersectionObserver`. Includes a hamburger menu for mobile.

### Hero

Full-viewport hero with:
- **Typing animation** — Rotates through phrases about work and interests
- **Glitch effect** — Hover the name for a text glitch
- **Staggered fade-in** — Each element animates in sequentially

### About

Two-column layout with bio text and animated stat counters. Stats count up from zero when scrolled into view. Includes a styled quote block.

### Experience

Vertical timeline showing career progression. Each entry is a card with role title, company, date, bullet points, and tech tags. The timeline has a gradient line and glowing markers on hover. Shows the promotion from SWE → SWE 2 as separate entries.

### Skills

2x2 grid of skill categories (Languages, Frameworks, Cloud & Infra, Tools). Each skill is a chip with an animated underline on hover.

### Education

Simple card with school info and graduation emoji.

### BeyondCode

Grid of hobby cards (Hiking, Lifting, Reading, Travel, Food) with emoji icons and short descriptions. Introduced by a personal tagline.

### AiChat

Floating chat widget in the bottom-right corner. Powered by **GitHub Models API** (GPT-4o-mini) with a detailed system prompt containing all of Herjot's info. Features:

- **Floating action button** with "Ask AI" tooltip
- **Real AI responses** via GitHub Models API (GPT-4o-mini, free tier)
- **Fallback mode** — if the API is unavailable, falls back to built-in pattern-matching responses
- **Chat window** with message bubbles, typing indicator (bouncing dots), and suggestion chips
- **Conversation memory** — sends last 10 messages for contextual responses

**Architecture:**
- **Local dev:** React → Vite proxy → `server.mjs` (Express on port 3001) → GitHub Models API
- **Production (Vercel):** React → `/api/chat` serverless function → GitHub Models API

To update responses, edit the `getResponse()` function and `HERJOT_INFO` object in `AiChat.jsx`.

## Customization

### Content

All content is defined inline in each component. To update:

- **Bio & stats** → `About.jsx`
- **Job history** → `Experience.jsx` (the `jobs` array)
- **Skills** → `Skills.jsx` (the `categories` array)
- **Hobbies** → `BeyondCode.jsx` (the `hobbies` array)
- **Typing phrases** → `Hero.jsx` (the `phrases` array)
- **AI chatbot answers** → `AiChat.jsx` (`HERJOT_INFO` and `getResponse()`)
- **Contact info** → `Contact.jsx` and `Hero.jsx`

### Styling

All colors and fonts are defined as CSS variables in `src/styles/global.css`:

```css
--bg: #0a0a0f;           /* Page background */
--bg-card: #12121a;      /* Card background */
--text: #e4e4e7;         /* Primary text */
--text-muted: #8888a0;   /* Secondary text */
--accent: #6366f1;       /* Primary accent (indigo) */
--accent2: #818cf8;      /* Secondary accent (lighter indigo) */
--green: #22c55e;        /* Terminal green */
--border: #1e1e2e;       /* Card borders */
--font-body: 'Inter';    /* Body font */
--font-mono: 'JetBrains Mono';  /* Code/mono font */
```

Change these variables to retheme the entire site.

## Deployment

### GitHub Pages

1. Push to a GitHub repo
2. Run `npm run build`
3. Deploy `dist/` via GitHub Pages settings or use `gh-pages` package

### Vercel (recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Framework: Vite. Build command: `npm run build`. Output: `dist`
4. Deploy — Vercel handles the rest

### Netlify

1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build command: `npm run build`. Publish directory: `dist`

### Custom Domain

After deploying, point your domain's DNS:
- **Vercel/Netlify**: Add a CNAME record pointing `herjotdhaliwal.dev` to the provided URL
- **GitHub Pages**: Add a CNAME record pointing to `<username>.github.io`

## License

Private — all rights reserved.

## AI Chatbot Setup

The "Ask AI" chatbot uses **GitHub Models** (free) to power real AI conversations about Herjot.

### Architecture

```
Local dev:   React → Vite proxy (:5173/api) → Express server (:3001) → GitHub Models API
Production:  React → Vercel serverless (/api/chat) → GitHub Models API
Fallback:    React → Built-in pattern matching (no API needed)
```

### Files

| File | Purpose |
|---|---|
| `api/chat.js` | Vercel serverless function (used in production) |
| `server.mjs` | Express server (used in local development) |
| `vite.config.js` | Proxies `/api` to `localhost:3001` in dev mode |
| `src/components/AiChat.jsx` | Chat UI + fallback pattern matching |
| `.env` | GitHub token (git-ignored, never committed) |

### Local Setup

1. Create a GitHub PAT with `models:read` permission at https://github.com/settings/personal-access-tokens/new
2. Create `.env` in the project root:
   ```
   GITHUB_TOKEN=your_token_here
   ```
3. Start the API server and Vite:
   ```bash
   node server.mjs &
   npm run dev
   ```

### Vercel Setup

1. Push to GitHub
2. Import on vercel.com
3. Add environment variable: `GITHUB_TOKEN` = your PAT
4. Deploy — the `/api/chat` serverless function handles requests automatically

### Model & Rate Limits

Uses `gpt-4o-mini` via GitHub Models API. Free tier: 15 requests/min, 150 requests/day — more than enough for a portfolio chatbot.

### Customization

- **System prompt** (what the AI knows): `api/chat.js` and `server.mjs` — update the `SYSTEM_PROMPT` constant
- **Fallback responses** (offline mode): `src/components/AiChat.jsx` — update `getResponse()` and `HERJOT_INFO`
- **Model**: Change the `model` field in `api/chat.js` and `server.mjs`
