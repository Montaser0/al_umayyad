"use client";

import Image from "next/image";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../icons/social";

const socialLinks = [
  { name: "فيسبوك", href: "#", icon: FacebookIcon },
  { name: "إنستغرام", href: "#", icon: InstagramIcon },
  { name: "واتساب", href: "https://wa.me/9639XXXXXXXXX", icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer id="contact" dir="rtl" className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-[1100px] px-5 py-14 md:px-10 lg:py-16">
        <div className="flex h-[200px] items-center justify-center overflow-visible">
          <Image
            src="/logo.PNG"
            alt="مستشفى الأموي"
            width={400}
            height={400}
            className="h-[280px] w-[280px] object-contain md:h-[400px] md:w-[400px]"
          />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:items-start sm:text-right">
          <div>
            <h3 className="text-lg font-medium text-primary">تواصل معنا الآن</h3>
            <ul className="mt-5 space-y-4 text-sm text-background/90">
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <LocationOn sx={{ fontSize: 20 }} className="text-primary" />
                سوريا - دمشق
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Phone sx={{ fontSize: 20 }} className="text-primary" />
                <a href="tel:+9639XXXXXXXXX" className="hover:text-primary">
                  +963 9XX XXX XXX
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Email sx={{ fontSize: 20 }} className="text-primary" />
                <a href="mailto:info@alumayyad-hospital.com" className="hover:text-primary">
                  info@alumayyad-hospital.com
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:text-left">
            <h3 className="text-lg font-medium text-primary">تابعنا عبر وسائل التواصل</h3>
            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Icon sx={{ fontSize: 22 }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/55">
          © {new Date().getFullYear()} مشفى الأموي. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
