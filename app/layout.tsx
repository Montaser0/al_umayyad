import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const expoArabic = localFont({
  src: "../public/alfont_com_AlFont_com_ExpoArabic-Medium.ttf",
  display: "swap",
  weight: "500",
  variable: "--font-expo-arabic",
});

export const metadata: Metadata = {
  title: "Al Umayyad",
  description: "Landing page for Al Umayyad",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${expoArabic.variable} ${expoArabic.className}`}>
      <body>{children}</body>
    </html>
  );
}
