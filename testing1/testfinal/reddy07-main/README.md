# Reddy Anna Book — Next.js Replicated Website

A fully responsive, pixel-perfect replication of [reddybookwinin.in](https://reddybookwinin.in) constructed in **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The project implements the exact visual layout structure, header menus, custom sidebars, live match listings, step-by-step guides, collapsible FAQ accordions, certified legal badge sections, and all subpages of the original.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS & custom styled micro-animations (conic gradient hover buttons, pulsating WhatsApp badges) in `globals.css`
- **Typings**: Fully typed structures inside TypeScript layouts and components
- **Optimization**: Statically generated and Turbopack optimized for high-fidelity browser rendering speeds with no loading layouts shifts

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx                    # Shell layout with Header, Footer, and WhatsApp Button
│   ├── page.tsx                      # Home page (matches, banners, stats, app grids)
│   ├── about-us/                     # About Us page
│   ├── contact-us/                   # Contact US page
│   ├── privacy-policy/               # Privacy Policy
│   ├── terms-and-conditions/         # Terms & Conditions
│   ├── indian-card-games/            # Indian Card Games subpage
│   ├── blogs/                        # Blogs index page
│   ├── register/                     # Register redirection info
│   ├── login/                        # Login redirection info
│   ├── reddy-anna-id/
│   │   ├── demo-id/                  # Practice Trial Demo ID Page
│   │   ├── cricket-id/               # Cricket ID Page
│   │   └── ipl-betting-id/           # IPL Betting ID Page
│   └── reddy-anna-sports/
│       ├── cricket-betting/          # Cricket Betting page
│       ├── football-betting/         # Football Betting page
│       ├── tennis-betting/           # Tennis Betting page
│       ├── live-betting/             # Live Betting page
│       └── horse-racing/             # Horse Racing page
├── components/
│   ├── Header.tsx                    # Desktop responsive sticky navbar & mobile drawer
│   ├── Footer.tsx                    # Multi-column Footer with cert badges
│   ├── Sidebar.tsx                   # Category navigation menu (desktop)
│   ├── WhatsAppButton.tsx            # Floating pulsating WhatsApp support hub
│   ├── Accordion.tsx                 # Collapsible elements-kit FAQ accordions
│   └── ConicButton.tsx               # Conic-gradient rotating glowing buttons
└── utils/
    └── config.ts                     # Configuration mapping (links, matches, mock data)
```

---

## ⚡ Getting Started & Development

### 1. Install Dependencies
Initialize and install standard npm packages:
```bash
npm install
```

### 2. Run Local Development Server
Boot up the dev instance on Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 3. Verify & Build
Run full production compilation and verify static generation:
```bash
npm run build
```

---

## ⚙️ Configuration & Customization

The entire website is controlled from a single centralized configuration file:
- **Location**: [utils/config.ts](file:///i:/Himmanav/Anurag%20New/SreddyBooKwinin/utils/config.ts)
- **Modifications**: Easily update your WhatsApp Links (`CONFIG.whatsappUrl`), logo paths, sports matches trackers schedules, or FAQ answers inside this file without scouring React pages.
