import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { JsonLd, hospitalJsonLd } from "../lib/json-ld";
import {
  logoPath,
  ogImage,
  siteAlternateName,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from "../lib/site";
import "./globals.css";

const expoArabic = localFont({
  src: "../public/alfont_com_AlFont_com_ExpoArabic-Medium.ttf",
  display: "swap",
  weight: "500",
  variable: "--font-expo-arabic",
});

export const viewport: Viewport = {
  themeColor: "#007899",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "healthcare",
  alternates: {
    canonical: "/",
    languages: {
      "ar-SY": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: logoPath, type: "image/png" }],
    apple: [{ url: logoPath }],
  },
  other: {
    "geo.region": "SY-HL",
    "geo.placename": "بزاعة، الباب، حلب",
    "geo.position": "36.3885263;37.5737988",
    ICBM: "36.3885263, 37.5737988",
    "apple-mobile-web-app-title": siteAlternateName,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${expoArabic.variable} ${expoArabic.className}`}>
      <body>
        <JsonLd data={hospitalJsonLd()} />
        {children}
      </body>
    </html>
  );
}
