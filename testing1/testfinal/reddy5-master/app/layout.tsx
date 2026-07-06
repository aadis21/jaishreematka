import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://reddyraj.com"),
  applicationName: "Reddy Anna",
  title: `${SITE_CONFIG.brand.name} – Official ID | Get ${SITE_CONFIG.brand.name} Book ID Online`,
  description: SITE_CONFIG.description,
  keywords: ["Reddy Anna", "Reddy Book", "Anna Book", "Cricket Betting ID", "IPL Betting ID", "Online Betting India"],
  authors: [{ name: "Reddy Anna" }],
  creator: "Reddy Anna",
  publisher: "Reddy Anna",
  alternates: {
    canonical: "https://reddyraj.com",
  },
  openGraph: {
    title: `${SITE_CONFIG.brand.name} – Official ID`,
    description: SITE_CONFIG.description,
    url: "https://reddyraj.com",
    siteName: SITE_CONFIG.brand.name,
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brand.name} – Official ID`,
    description: SITE_CONFIG.description,
    images: ["/hero_bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="sog5HD9L3Yr4WVLBpkpboecuwE2-Q5PjCd7Z4ju-_iU" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPJQFQ4X');`
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
        } as React.CSSProperties}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPJQFQ4X" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7K2DYR1YJ4" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7K2DYR1YJ4');
            `
          }}
        />
      </body>
    </html>
  );
}
