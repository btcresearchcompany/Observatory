# TBRC Bitcoin Adoption Observatory

A living, interactive map of corporate bitcoin adoption. Static site — no backend, no build step, no dependencies. Two files: `index.html` (the app) and `data.js` (your research data).

## Quick start

Open `index.html` in a browser. That's it.

## Deploy to GitHub Pages (free hosting)

1. Create a new GitHub repo (e.g. `observatory`).
2. Upload `index.html`, `data.js`, and this README.
3. In the repo: Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save.
4. Live in ~1 minute at `https://YOURUSERNAME.github.io/observatory/`.

### Custom domain (recommended)

1. In Settings → Pages, add `observatory.bitcoinresearchcompany.com` as the custom domain.
2. At your DNS provider, add a CNAME record: `observatory` → `YOURUSERNAME.github.io`.
3. Enable "Enforce HTTPS" once the certificate provisions.

Alternatives: Netlify or Vercel (drag-and-drop the folder), or upload to any web host.

## Updating the data (your quarterly index)

All research lives in `data.js`. Each company is one object — the field guide is at the top of the file. To add a company, copy an existing entry and edit it. No other code changes needed.

Suggested cadence: update quarterly and announce it as **"The TBRC Bitcoin Adoption Index — Q_ 20__"**. The `asOf` field tracks when each entry was last verified.

**Important:** the shipped data is illustrative seed data. Verify every figure (especially BTC holdings and maturity classifications) against primary sources — filings, company announcements, reputable trackers — before publishing.

## Connecting lead capture

The email gate works out of the box (unlocks locally), but to actually *collect* emails, set a form endpoint:

1. Create a free form at [formspree.io](https://formspree.io) (or use ConvertKit, Mailchimp, Beehiiv — anything that accepts a POST).
2. In `index.html`, find the config block near the top of the `<script>`:
   ```js
   const FORM_ENDPOINT = "";
   ```
3. Paste your endpoint, e.g. `const FORM_ENDPOINT = "https://formspree.io/f/abcd1234";`

Captured emails arrive with `source: "observatory"` so you can segment them in your CRM.

## The TBRC score

Node size defaults to the **TBRC adoption score** (0–100) — your proprietary metric. Define a public rubric (e.g. weighting of holdings, product depth, operational integration, public commitment) and publish the methodology on your site. The methodology page itself is a credibility asset and link magnet.

## Customization notes

- **Colors/fonts:** all design tokens are CSS variables at the top of `index.html` (`:root`). Swap `--btc`, `--ink`, etc. to restyle globally.
- **Categories or maturity tiers:** edit the `CATS` and `RINGS` arrays in the script config; data entries reference them by name/index.
- **Analytics:** paste your Plausible/Fathom/GA snippet before `</head>`.

## Roadmap ideas

- Auto-generate a shareable PNG of the map for social posts each quarter
- "Movers" changelog showing which companies changed tiers since last quarter
- Per-company source citations (add a `sources: []` array to entries and render links in the detail panel)
- Gate a downloadable PDF report instead of / alongside the extended brief
