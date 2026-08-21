"use client";

import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Phone from "@mui/icons-material/Phone";
import { useState } from "react";

const navItems = [
  { label: "الرئيسية", href: "#" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا الأموي", href: "#why-us" },
  { label: "الأسئلة", href: "#faq" },
  { label: "موقعنا", href: "#location" },
  { label: "التواصل", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].label);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const currentItem = hoveredItem ?? activeItem;

  return (
    <>
    <header
      dir="rtl"
      className="fixed top-0 right-0 left-0 z-50 w-full border-b border-primary/10 bg-background shadow-[0_6px_20px_rgba(0,120,153,0.06)]"
    >
      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-4 md:px-6">
        <div className="flex h-20 w-[120px] shrink-0 items-center justify-center md:w-[150px]">
          <img
            src="/logo.PNG"
            alt="شعار الشركة"
            className="h-50 w-auto max-w-none object-contain drop-shadow-[0_8px_18px_rgba(0,120,153,0.1)] md:h-60"
          />
        </div>

        <nav
          className="hidden flex-1 items-center justify-center gap-2 text-[17px] font-medium text-[#4a4a4a] lg:flex"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const isCurrent = item.label === currentItem;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                onMouseEnter={() => setHoveredItem(item.label)}
                className={`whitespace-nowrap rounded-xl px-5 py-2.5 transition-all duration-300 ${
                  isCurrent
                    ? "bg-primary text-background"
                    : "bg-transparent text-[#4a4a4a] hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href="#contact"
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
          </a>

          <button
            type="button"
            aria-label="فتح القائمة"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-md
              border
              border-primary/20
              bg-background
              text-2xl
              text-foreground
              shadow-sm
              transition-all
              duration-200
              hover:bg-primary/10
              lg:hidden
            "
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`
          overflow-hidden
          border-t
          border-primary/10
          bg-background
          transition-all
          duration-300
          lg:hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveItem(item.label);
                setIsOpen(false);
              }}
              className={`rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 ${
                item.label === activeItem
                  ? "bg-primary text-background"
                  : "bg-transparent text-[#4a4a4a]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
    <div className="h-[88px]" aria-hidden="true" />
    </>
  );
}
