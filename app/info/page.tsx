import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Email from "@mui/icons-material/Email";
import Language from "@mui/icons-material/Language";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import ShareButton from "../../components/info/ShareButton";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../../components/icons/social";
import {
  siteAddressText,
  siteEmail,
  siteEnglishName,
  siteFacebookUrl,
  siteGeo,
  siteInstagramUrl,
  siteName,
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

/** Local (national) format, e.g. 0985001003 */
const sitePhoneLocal = sitePhoneE164.replace(/^\+963/, "0");
const websiteLabel = siteUrl.replace(/^https?:\/\//, "");
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteGeo.latitude},${siteGeo.longitude}`;

type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  ltr?: boolean;
};

const links: LinkItem[] = [
  {
    title: "الموقع الإلكتروني",
    subtitle: websiteLabel,
    href: siteUrl,
    icon: <Language sx={{ fontSize: 24 }} />,
    external: true,
    ltr: true,
  },
  {
    title: "اتصل بنا",
    subtitle: sitePhoneLocal,
    href: `tel:${sitePhoneE164}`,
    icon: <Phone sx={{ fontSize: 24 }} />,
    ltr: true,
  },
  {
    title: "تواصل عبر واتساب",
    subtitle: sitePhoneLocal,
    href: siteWhatsAppUrl,
    icon: <WhatsAppIcon sx={{ fontSize: 24 }} />,
    external: true,
    ltr: true,
  },
  {
    title: "البريد الإلكتروني",
    subtitle: siteEmail,
    href: `mailto:${siteEmail}`,
    icon: <Email sx={{ fontSize: 24 }} />,
    ltr: true,
  },
  {
    title: "الموقع الجغرافي",
    subtitle: siteAddressText,
    href: mapsUrl,
    icon: <LocationOn sx={{ fontSize: 24 }} />,
    external: true,
  },
  {
    title: "فيسبوك",
    subtitle: "تابعنا على فيسبوك",
    href: siteFacebookUrl,
    icon: <FacebookIcon sx={{ fontSize: 24 }} />,
    external: true,
  },
  {
    title: "إنستغرام",
    subtitle: "تابعنا على إنستغرام",
    href: siteInstagramUrl,
    icon: <InstagramIcon sx={{ fontSize: 24 }} />,
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
      <div className="mx-auto flex max-w-[620px] flex-col items-center px-5 pb-12 pt-10">
        {/* Profile */}
        <Image
          src="/logo2.PNG"
          alt={`شعار ${siteName}`}
          width={280}
          height={280}
          priority
          className="-my-4 h-48 w-48 object-contain"
        />
        <h1 className="sr-only">{siteName}</h1>

        <div className="mt-3 flex items-center justify-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full text-background transition-colors hover:bg-background/10 hover:text-primary"
              >
                <Icon sx={{ fontSize: 26 }} />
              </a>
            );
          })}
        </div>

        {/* Links */}
        <ul className="mt-6 w-full space-y-4">
          {links.map((item) => (
            <li
              key={item.title}
              className="relative rounded-md bg-background text-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative flex min-h-[64px] w-full items-center justify-center px-16 py-3 text-center"
              >
                <span className="absolute right-3 flex h-10 w-10 items-center justify-center text-primary">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold leading-6">{item.title}</span>
                  <span
                    dir={item.ltr ? "ltr" : undefined}
                    className="block truncate text-xs leading-5 text-foreground/55"
                  >
                    {item.subtitle}
                  </span>
                </span>
              </a>
              <ShareButton
                title={item.title}
                text={`${item.title}: ${item.subtitle}`}
                url={item.href.startsWith("http") ? item.href : undefined}
              />
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-xs text-background/45">
          © {new Date().getFullYear()} {siteName} — {siteEnglishName}
        </p>
      </div>
    </main>
  );
}
