"use client";

import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
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

  return (
    <header
      dir="rtl"
      className="relative z-50 w-full border-b border-[#e8edf2] bg-white shadow-[0_6px_20px_rgba(30,59,86,0.06)]"
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
              drop-shadow-[0_8px_18px_rgba(30,59,86,0.1)]
              md:h-60
            "
          />
        </div>

        {/* =========================
            روابط الكمبيوتر
        ========================== */}
        <nav
          className="
            hidden
            flex-1
            items-center
            justify-center
            gap-3
            text-base
            font-bold
            text-[#1d3a4e]
            md:flex
            lg:gap-5
          "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
                whitespace-nowrap
                rounded-full
                px-4
                py-3
                transition-all
                duration-200
                hover:bg-[#f1f8fa]
                hover:text-[#0ba3be]
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* =========================
            زر تواصل + زر القائمة
        ========================== */}
        <div className="flex shrink-0 items-center gap-2 md:gap-3">

          {/* تواصل معنا */}
          <button
            type="button"
            className="
              rounded-md
              bg-[#1e3b56]
              px-4
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_12px_25px_rgba(30,59,86,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#16314a]
              md:px-6
              md:py-4
              md:text-lg
            "
          >
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
              border-[#d8e5eb]
              bg-white
              text-2xl
              text-[#1e3b56]
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#f1f8fa]
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
          border-[#e8edf2]
          bg-white
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
              onClick={() => setIsOpen(false)}
              className="
                border-b
                border-[#eef2f5]
                px-4
                py-6
                text-base
                font-bold
                text-[#1d3a4e]
                transition-colors
                duration-200
                hover:bg-[#f1f8fa]
                hover:text-[#0ba3be]
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}