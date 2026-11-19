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
  logoPath,
  siteAddressText,
  siteEmail,
  siteEnglishName,
  siteFacebookUrl,
  siteGeo,
  siteInstagramUrl,
  siteMapsUrl,
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
    icon: <Language />,
    external: true,
    ltr: true,
  },
  {
    label: "رقم التواصل",
    value: sitePhoneDisplay,
    href: `tel:${sitePhoneE164}`,
    icon: <Phone />,
    ltr: true,
  },
  {
    label: "البريد الإلكتروني",
    value: siteEmail,
    href: `mailto:${siteEmail}`,
    icon: <Email />,
    ltr: true,
  },
  {
    label: "العنوان",
    value: siteAddressText,
    href: siteMapsUrl,
    icon: <LocationOn />,
    external: true,
  },
];

const socialLinks = [
  { name: "واتساب", href: siteWhatsAppUrl, icon: WhatsAppIcon },
  { name: "فيسبوك", href: siteFacebookUrl, icon: FacebookIcon },
  { name: "إنستغرام", href: siteInstagramUrl, icon: InstagramIcon },
];

export default function InfoPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-neutral">
      <header className="bg-primary px-5 pb-16 pt-10 text-center text-background">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-background p-3 shadow-lg">
          <Image
            src={logoPath}
            alt={`شعار ${siteName}`}
            width={160}
            height={160}
            priority
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="mt-5 text-2xl font-medium md:text-3xl">{siteName}</h1>
        <p dir="ltr" className="mt-1 text-sm text-background/80">
          {siteEnglishName}
        </p>
      </header>

      <div className="mx-auto -mt-8 max-w-xl px-5 pb-12">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${sitePhoneE164}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-medium text-background shadow-md transition-opacity hover:opacity-90"
          >
            <Phone sx={{ fontSize: 20 }} />
            اتصل الآن
          </a>
          <a
            href={siteWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-tertiary px-4 py-3.5 text-sm font-medium text-background shadow-md transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            واتساب
          </a>
        </div>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-background p-4 shadow-[0_8px_24px_rgba(28,43,58,0.06)] transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-foreground/55">{item.label}</span>
                  <span
                    dir={item.ltr ? "ltr" : undefined}
                    className={`mt-1 block break-words text-sm font-medium text-foreground ${
                      item.ltr ? "text-right" : ""
                    }`}
                  >
                    {item.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <section aria-labelledby="location-title" className="mt-8">
          <h2 id="location-title" className="mb-3 text-lg font-medium text-foreground">
            الموقع الجغرافي
          </h2>
          <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-[0_8px_24px_rgba(28,43,58,0.06)]">
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
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <LocationOn sx={{ fontSize: 20 }} />
            احصل على الاتجاهات
          </a>
        </section>

        <section aria-labelledby="social-title" className="mt-8 text-center">
          <h2 id="social-title" className="text-lg font-medium text-foreground">
            تابعنا عبر وسائل التواصل
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                >
                  <Icon sx={{ fontSize: 26 }} />
                </a>
              );
            })}
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/" className="text-sm font-medium text-primary hover:underline">
            زيارة الموقع الرئيسي
          </Link>
        </div>
      </div>
    </main>
  );
}
