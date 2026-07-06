import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://reddynow.com"),
  applicationName: "Reddy Anna Book",
  title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
  description:
    "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
  keywords: [
    "Reddy Anna",
    "Reddy Anna Book",
    "Reddy Anna ID",
    "Cricket Betting ID",
    "IPL Betting ID",
    "Online Betting ID",
    "Best Betting Id Provider"
  ],
  authors: [{ name: "Reddy Anna Book" }],
  creator: "Reddy Anna Book",
  publisher: "Reddy Anna Book",
  alternates: {
    canonical: "https://reddynow.com",
  },
  openGraph: {
    title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
    url: "https://reddynow.com",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
        width: 800,
        height: 600,
        alt: "Reddy Anna Book Cricket Background"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
    images: [
      "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
    ]
  },
  icons: {
    icon: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-150x150.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta name="google-site-verification" content="N85gFpQeZMUWZnN2y13W9dkgHN6VAkq1O_3a4HfHwt8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXD7FFNS');`
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#05080f] text-gray-200 antialiased flex flex-col justify-between">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXD7FFNS" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        <Header />
        <main className="flex-1 w-full bg-[#05080f]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GSYPQG92W7" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSYPQG92W7');
            `
          }}
        />
      </body>
    </html>
  );
}
