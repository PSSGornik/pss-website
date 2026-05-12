# Prometheus Strategic Solutions — Website

Production website for [prometheusss.com](https://prometheusss.com). Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Deployed on Cloudflare Pages as a static export.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body), Space Grotesk (headings) via Google Fonts
- **Deployment:** Cloudflare Pages

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, pain points, solutions, process, social proof |
| `/services` | Services & Solutions — workflow automation, NOVA, DryTrace, integrations |
| `/nova` | NOVA AI System — architecture diagram, capabilities |
| `/about` | About PSS — mission, values, team, location |
| `/contact` | Contact form — POSTs to webhook for lead intake |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

No environment variables are required. The contact form webhook URL is hardcoded to the production endpoint:

```
POST https://pssautomations.com/webhook/cros-01-lead-intake
```

## Build

```bash
npm run build
```

Output is written to `/out` (static HTML export).

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
3. Create a new project and connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Framework preset:** Next.js (Static HTML Export)
5. Deploy

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy out --project-name=pss-website
```

### Custom Domain

After deploying, add a custom domain in Cloudflare Pages settings:
1. Go to your Pages project > Custom domains
2. Add `prometheusss.com` and `www.prometheusss.com`
3. Cloudflare handles DNS and SSL automatically

## Project Structure

```
src/
  app/
    page.tsx          # Home
    layout.tsx        # Root layout (Navbar + Footer)
    globals.css       # Global styles, glass-card, grid-bg utilities
    services/page.tsx
    nova/page.tsx
    about/page.tsx
    contact/page.tsx
    terms/page.tsx
    privacy/page.tsx
  components/
    Navbar.tsx         # Sticky nav with mobile menu
    Footer.tsx         # 4-column footer
    GlassCard.tsx      # Reusable glassmorphism card
    PageHero.tsx       # Inner page hero section
    CTABanner.tsx      # CTA section with glow effect
    FeatureCard.tsx    # Icon + title + description card
    PricingCard.tsx    # Pricing tier card
    StatsBar.tsx       # Horizontal stats display
    TestimonialCard.tsx
    ContactForm.tsx    # Form with webhook POST
    AgentDiagram.tsx   # NOVA hierarchy SVG diagram
```
