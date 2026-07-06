export const SITE_CONFIG = {
  brand: {
    name: "Reddy Anna",
    logoText1: "REDDY",
    logoText2: "ANNA",
    logoSub: "— SINCE 2010 —"
  },

  // ==========================================
  // THEME CONFIGURATION & PRESETS
  // ==========================================
  // To change the color theme of the website, uncomment one of the presets below
  // and comment out the active one. Ensure you update all five properties.

  theme: {
    // PRESET 1: Classic Premium Gold (Dark)
    // primary: "#d4af37",
    // primaryHover: "#f1c40f",
    // primaryRgb: "212, 175, 55",
    // background: "#0f0f11",
    // secondary: "#1a1a1f",
    // foreground: "#f0f0f0",
    // textPrimary: "#ffffff",
    // textSecondary: "#bbbbbb",
    // textMuted: "#888888",
    // border: "#333333",

    // PRESET 2: Vibrant Blue (Dark)
    // primary: "#2499ed",
    // primaryHover: "#4db3f6",
    // primaryRgb: "36, 153, 237",
    // background: "#0a0c12",
    // secondary: "#111622",
    // foreground: "#f0f0f0",
    // textPrimary: "#ffffff",
    // textSecondary: "#bbbbbb",
    // textMuted: "#888888",
    // border: "#222a3a",

    // PRESET 3: Emerald Green (Dark)
    // primary: "#10b981",
    // primaryHover: "#34d399",
    // primaryRgb: "16, 185, 129",
    // background: "#060807",
    // secondary: "#0d1310",
    // foreground: "#f0f0f0",
    // textPrimary: "#ffffff",
    // textSecondary: "#bbbbbb",
    // textMuted: "#888888",
    // border: "#1f2a24",

    // PRESET 4: Crimson Red (Dark)
    // primary: "#ef4444",
    // primaryHover: "#f87171",
    // primaryRgb: "239, 68, 68",
    // background: "#0f0808",
    // secondary: "#1c1010",
    // foreground: "#f0f0f0",
    // textPrimary: "#ffffff",
    // textSecondary: "#bbbbbb",
    // textMuted: "#888888",
    // border: "#3a2222",

    // PRESET 5: Custom Maroon & Gold Theme (Active)
    primary: "#6b1201",
    primaryHover: "#8c1902",
    primaryRgb: "107, 18, 1",
    background: "#ffffff",
    secondary: "#ffffff",
    foreground: "#111111",
    textPrimary: "#111111",
    textSecondary: "#333333",
    textMuted: "#666666",
    border: "#ebd5d5",
  },

  description: "Join Reddy Anna – India’s leading cricket betting ID platform. Enjoy instant access, safe payments, special bonuses & 24*7 support.",
  whatsappNumber: "918437261975",
  whatsappLink: "https://wa.me/916026703858",
  url: "https://reddysports.co/",

  // ==========================================
  // IMAGES CONFIGURATION
  // ==========================================
  // Customize any image path here to update it across the site instantly.
  images: {
    heroBanner: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-sports-betting.webp",
    registrationBanner: "https://reddysports.co/wp-content/uploads/2026/02/reddy-anna-greyhound-racing.webp",
    banners: {
      banner1: {
        src: "https://reddysports.co/wp-content/uploads/2026/03/west-bengal-assembly-election-2026-reddy-anna-betting.jpg",
        alt: "West Bengal Election Betting live on Reddy Anna",
        width: 1456,
        height: 720
      },
      banner2: {
        src: "/banners/banner5.png",
        alt: "Bonuses and Rewards Banner",
        width: 1456,
        height: 720
      },
      banner3: {
        src: "/banners/banner6.png",
        alt: "Join Now Banner",
        width: 1456,
        height: 720
      }
    }
  },

  // ==========================================
  // LAYOUT CONFIGURATION & PRESETS
  // ==========================================
  // You can change the order of the sections, shuffle them, or disable some.
  // Available section IDs:
  // - "hero"          (Hero banner, subtitle, CTA buttons, stats)
  // - "registration"  (How to register in 60 seconds list & steps banner)
  // - "banner1"       (First wide image banner - Live Sports Coverage)
  // - "features"      (6 cards explaining benefits - e.g. Daily Cashback, Human support)
  // - "info"          (About Reddy Anna detailed text sections)
  // - "sports"        (Sports coverage list: Cricket, Tennis, Soccer, Live Casino etc.)
  // - "withdrawal"    (Withdrawal process steps & direct proof box)
  // - "banner2"       (Second wide image banner - Bonuses & Rewards)
  // - "bonuses"       (Bonus details table - Welcome Bonus, Deposit Bonus etc.)
  // - "comparison"    (Reddy Anna vs other platforms comparison table)
  // - "banner3"       (Third wide image banner - Join Now)
  // - "faq"           (Accordions containing questions and answers)
  // - "testimonials"  (User testimonials/reviews cards)
  // - "responsible"   (Responsible gaming warning footer section)

  layout: {
    // PRESET A: Classic Layout (Standard Landing Order)
    // sectionOrder: [
    //   "hero",
    //   "registration",
    //   "banner1",
    //   "sports",
    //   "withdrawal",
    //   "banner2",
    //   "bonuses",
    //   "comparison",
    //   "banner3",
    //   "faq",
    //   "testimonials",
    //   "responsible"
    // ],

    // PRESET B: Shuffled Content Sections (More info upfront)
    // sectionOrder: [
    //   "hero",
    //   "info",
    //   "features",
    //   "banner1",
    //   "registration",
    //   "sports",
    //   "withdrawal",
    //   "banner2",
    //   "bonuses",
    //   "comparison",
    //   "banner3",
    //   "faq",
    //   "testimonials",
    //   "responsible"
    // ],

    // PRESET C: Trust & Conversion Focused (Active - Highlights comparison & bonuses immediately)
    sectionOrder: [
      "hero",
      "sports",
      "info",
      "features",
      "banner1",
      "registration",
      "withdrawal",
      "bonuses",
      "comparison",
      "faq",
      "testimonials",
      "responsible"
    ]
  }
};

