"use client";

import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Phone from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "الرئيسية", hash: "" },
  { label: "من نحن", hash: "#about" },
  { label: "خدماتنا", hash: "#services" },
  { label: "لماذا الأموي", hash: "#why-us" },
  { label: "الأسئلة", hash: "#faq" },
  { label: "موقعنا", hash: "#location" },
  { label: "التواصل", hash: "#contact" },
];

function itemHref(pathname: string, hash: string) {
  if (!hash) return "/";
  return pathname === "/" ? hash : `/${hash}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(
    pathname.startsWith("/products") ? "خدماتنا" : navItems[0].label,
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const currentItem = hoveredItem ?? activeItem;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname.startsWith("/products")) {
      const timer = window.setTimeout(() => setActiveItem("خدماتنا"), 0);
      return () => window.clearTimeout(timer);
    }

    if (pathname !== "/") return;

    const syncActiveItem = () => {
      const hash = window.location.hash;
      const matchingItem = navItems.find((item) => item.hash === hash);
      setActiveItem(matchingItem?.label ?? navItems[0].label);

      if (!hash) return;
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    };

    const timer = window.setTimeout(syncActiveItem, 50);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <header
        dir="rtl"
        className="fixed top-0 right-0 left-0 z-50 w-full border-b border-primary/10 bg-background shadow-[0_6px_20px_rgba(0,120,153,0.06)]"
      >
        <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex h-20 w-[120px] shrink-0 items-center justify-center md:w-[150px]"
          >
            <Image
              src="/logo.PNG"
              alt="شعار مستشفى الأموي"
              width={180}
              height={180}
              priority
              className="h-40 w-auto max-w-none object-contain drop-shadow-[0_8px_18px_rgba(0,120,153,0.1)] md:h-60"
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-2 text-[17px] font-medium text-[#4a4a4a] lg:flex"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isCurrent = item.label === currentItem;

              return (
                <Link
                  key={item.label}
                  href={itemHref(pathname, item.hash)}
                  onClick={() => setActiveItem(item.label)}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  className={`whitespace-nowrap rounded-xl px-5 py-2.5 transition-all duration-300 ${
                    isCurrent
                      ? "bg-primary text-background"
                      : "bg-transparent text-[#4a4a4a] hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href={itemHref(pathname, "#contact")}
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-primary
                px-4
                py-3
                text-sm
                font-bold
                text-background
                shadow-[0_12px_25px_rgba(0,120,153,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-primary/90
                md:px-6
                md:py-4
                md:text-lg
              "
            >
              <Phone sx={{ fontSize: 20 }} />
              تواصل معنا
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-md
                bg-foreground
                text-2xl
                text-background
                shadow-sm
                transition-all
                duration-200
                hover:bg-foreground/85
                lg:hidden
              "
            >
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-x-0 bottom-0 top-[88px] z-40
          flex items-center justify-center
          bg-background/75 backdrop-blur-md
          transition-all duration-300
          lg:hidden
          ${isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex w-full max-w-[360px] flex-col items-center px-8">
          {navItems.map((item) => {
            const isActive = item.label === activeItem;

            return (
              <Link
                key={item.label}
                href={itemHref(pathname, item.hash)}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsOpen(false);
                }}
                className={`w-full py-4 text-center text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "rounded-xl bg-primary px-6 py-3.5 font-bold text-background"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="h-[88px]" aria-hidden="true" />
    </>
  );
}
