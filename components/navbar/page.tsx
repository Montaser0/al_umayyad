"use client";

import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Phone from "@mui/icons-material/Phone";
import { useState } from "react";

const navItems = [
  "الرئيسية",
  "من نحن",
  "تجربتنا",
  "الأعمال السابقة",
  "الأخبار",
  "اتصل بنا",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const currentItem = hoveredItem ?? activeItem;

  return (
    <header
      dir="rtl"
      className="relative z-50 w-full border-b border-primary/10 bg-background shadow-[0_6px_20px_rgba(0,120,153,0.06)]"
    >
      {/* =========================
          الهيدر
      ========================== */}
      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-4 md:px-6">

        {/* الشعار */}
        <div className="flex h-20 w-[120px] shrink-0 items-center justify-center md:w-[150px]">
          <img
            src="/logo.PNG"
            alt="شعار الشركة"
            className="
              h-50
              w-auto
              max-w-none
              object-contain
              drop-shadow-[0_8px_18px_rgba(0,120,153,0.1)]
              md:h-60
            "
          />
        </div>

        {/* =========================
            روابط الكمبيوتر
        ========================== */}
        <nav
          className="hidden flex-1 items-center justify-center gap-2 text-base font-bold text-foreground md:flex lg:gap-3"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const isCurrent = item === currentItem;

            return (
              <a
                key={item}
                href="#"
                onClick={() => setActiveItem(item)}
                onMouseEnter={() => setHoveredItem(item)}
                className={`whitespace-nowrap rounded-xl px-4 py-3 transition-all duration-300 ${
                  isCurrent
                    ? "bg-primary text-background"
                    : "bg-transparent text-foreground"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* =========================
            زر تواصل + زر القائمة
        ========================== */}
        <div className="flex shrink-0 items-center gap-2 md:gap-3">

          {/* تواصل معنا */}
          <button
            type="button"
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
          </button>

          {/* زر القائمة - يظهر فقط على الهاتف */}
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
              md:hidden
            "
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* =========================
          قائمة الهاتف
      ========================== */}
      <div
        className={`
          overflow-hidden
          border-t
          border-primary/10
          bg-background
          transition-all
          duration-300
          md:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => {
                setActiveItem(item);
                setIsOpen(false);
              }}
              className={`border-b border-primary/10 px-4 py-6 text-base font-bold transition-all duration-300 ${
                item === activeItem
                  ? "bg-primary text-background"
                  : "bg-transparent text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}