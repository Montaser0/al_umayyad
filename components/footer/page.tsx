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
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo2.PNG"
            alt="مستشفى الأموي"
            width={280}
            height={280}
            className="h-52 w-52 object-contain md:h-64 md:w-64"
          />


        </div>

        <div className="mt-10 flex flex-col items-center gap-10 text-center md:mt-14 md:grid md:grid-cols-2 md:items-start md:gap-12">
          <div className="w-full">
            <h3 className="text-lg font-bold text-primary">تواصل معنا الآن</h3>
            <ul className="mt-6 space-y-5 text-sm text-background">
              <li className="flex items-center justify-center gap-2">
                <LocationOn sx={{ fontSize: 22 }} className="text-primary" />
                سوريا - حلب - الباب - مدينة بزاعة
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone sx={{ fontSize: 22 }} className="text-primary" />
                <a href="tel:+9639XXXXXXXXX" className="hover:text-primary">
                  +963 9XX XXX XXX
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Email sx={{ fontSize: 22 }} className="text-primary" />
                <a href="mailto:info@alumayyad-hospital.com" className="hover:text-primary">
                  info@alumayyad-hospital.com
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-bold text-primary">تابعنا عبر وسائل التواصل!</h3>
            <div className="mt-6 flex items-center justify-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Icon sx={{ fontSize: 26 }} />
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
