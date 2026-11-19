import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Email from "@mui/icons-material/Email";
import Language from "@mui/icons-material/Language";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../../components/icons/social";
import {
  siteAddressText,
  siteEmail,
  siteFacebookUrl,
  siteGeo,
  siteInstagramUrl,
  siteName,
  sitePhoneDisplay,
  sitePhoneE164,
  siteUrl,
  siteWhatsAppUrl,
} from "../../lib/site";

const pageTitle = "معلومات التواصل";
const pageDescription = `معلومات التواصل مع ${siteName}: الموقع الإلكتروني، رقم الهاتف، البريد الإلكتروني والموقع الجغرافي في مدينة بزاعة.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/info" },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: "/info",
  },
};

const websiteLabel = siteUrl.replace(/^https?:\/\//, "");

const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${siteGeo.latitude},${siteGeo.longitude}`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteGeo.latitude},${siteGeo.longitude}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${siteGeo.latitude},${siteGeo.longitude}&hl=ar&z=16&output=embed`;

type InfoItem = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  ltr?: boolean;
};

const items: InfoItem[] = [
  {
    label: "الموقع الإلكتروني",
    value: websiteLabel,
    href: siteUrl,
    icon: <Language sx={{ fontSize: 24 }} />,
    external: true,
    ltr: true,
  },
  {
    label: "رقم التواصل",
    value: sitePhoneDisplay,
    href: `tel:${sitePhoneE164}`,
    icon: <Phone sx={{ fontSize: 24 }} />,
    ltr: true,
  },
  {
    label: "البريد الإلكتروني",
    value: siteEmail,
    href: `mailto:${siteEmail}`,
    icon: <Email sx={{ fontSize: 24 }} />,
    ltr: true,
  },
  {
    label: "العنوان",
    value: siteAddressText,
    href: mapsOpenUrl,
    icon: <LocationOn sx={{ fontSize: 24 }} />,
    external: true,
  },
];

const socialLinks = [
  { name: "فيسبوك", href: siteFacebookUrl, icon: FacebookIcon },
  { name: "إنستغرام", href: siteInstagramUrl, icon: InstagramIcon },
  { name: "واتساب", href: siteWhatsAppUrl, icon: WhatsAppIcon },
];

export default function InfoPage() {
  return (
    <main dir="rtl" className="min-h-screen w-full bg-foreground text-background">
      <div className="mx-auto max-w-[560px] px-5 py-14 md:py-16">
        {/* Logo — no wrapper, same as the footer */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo2.PNG"
            alt={`شعار ${siteName}`}
            width={280}
            height={280}
            priority
            className="h-52 w-52 object-contain md:h-64 md:w-64"
          />
          <h1 className="-mt-4 text-lg font-bold text-primary">تواصل معنا الآن</h1>
        </div>

        {/* Quick actions */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <a
            href={`tel:${sitePhoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-4 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Phone sx={{ fontSize: 20 }} />
            اتصل بنا
          </a>
          <a
            href={siteWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-tertiary px-4 py-4 text-sm font-bold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            واتساب
          </a>
        </div>

        {/* Contact list */}
        <ul className="mt-10 space-y-6 text-center text-sm">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-1.5 hover:text-primary"
              >
                <span className="flex items-center justify-center gap-2 text-background/55">
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </span>
                <span
                  dir={item.ltr ? "ltr" : undefined}
                  className="break-words text-base font-medium"
                >
                  {item.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Map */}
        <section aria-labelledby="location-title" className="mt-12 text-center">
          <h2 id="location-title" className="text-lg font-bold text-primary">
            الموقع الجغرافي
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-background/15">
            <iframe
              title={`موقع ${siteName} في مدينة بزاعة على الخريطة`}
              src={mapEmbedSrc}
              className="h-[300px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary px-5 py-4 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-background"
          >
            <LocationOn sx={{ fontSize: 20 }} />
            احصل على الاتجاهات
          </a>
        </section>

        {/* Social */}
        <section aria-labelledby="social-title" className="mt-12 text-center">
          <h2 id="social-title" className="text-lg font-bold text-primary">
            تابعنا عبر وسائل التواصل!
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Icon sx={{ fontSize: 26 }} />
                </a>
              );
            })}
          </div>
        </section>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/55">
          <Link href="/" className="font-medium text-background hover:text-primary">
            زيارة الموقع الرئيسي
          </Link>
          <p className="mt-2">
            © {new Date().getFullYear()} مستشفى الأموي — Al-Umayyad Hospital. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </main>
  );
}
