# Eze's Personal Website 🔴

A modern, responsive personal website and portfolio built for **Eze** — 17-year-old student at **St. Andrews College** and passionate **Manchester United** supporter.

🌐 **Live Website**: [https://ceze.pages.dev](https://ceze.pages.dev)

---

## ⚡ Highlights

- **Bento Grid**: Overview of student life, hobbies, and personal philosophy.
- **The Manchester United Zone**:
  - Old Trafford tribute & iconic chants.
  - Interactive **Matchday Energy Booster** with real-time hype meters.
  - Legends & current squad spotlight (Mainoo, Bruno Fernandes, Garnacho, Rooney).
- **St. Andrews College Showcase**: Academic focus, community leadership, and school spirit.
- **Interactive Shoutout Board**: Leave a matchday chant or message that persists locally.
- **Theme**: Dark mode aesthetic with glassmorphic cards and ambient red glows.

---

## 🛠️ Tech Stack & Hosting

- **Frontend**: Semantic HTML5, Modern Vanilla CSS (Flexbox/Grid, CSS Variables, Glassmorphism), Vanilla JavaScript.
- **Hosting & Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Deployment Automation**: Cloudflare Wrangler CLI

---

## 🚀 Local Development

Open `public/index.html` directly in any web browser, or preview with a local server:

```powershell
# Using Node / npx
npx serve public
```

---

## 📦 Deployment to Cloudflare Pages

To deploy changes live to `https://ceze.pages.dev`:

```powershell
npx wrangler pages deploy ./public --project-name ceze
```
