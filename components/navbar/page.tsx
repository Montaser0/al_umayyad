"use client";

import React, { useState } from "react";

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
      // تم إضافة relative هنا لضمان تموضع القائمة المنسدلة بشكل صحيح
      className="relative w-full border-b border-[#d7dadb] bg-[#dfe1e3]"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-3 py-3 md:px-6">
        
        {/* =========================
            الشعار - يمين
        ========================== */}
        <div className="flex h-16 shrink-0 items-center md:h-20">
          <img
            src="/logo.PNG"
            alt="شعار الشركة"
            className="h-40 w-auto object-contain md:h-50 md:scale-125"
          />
        </div>

        {/* =========================
            روابط التنقل - شاشات كبيرة
        ========================== */}
        <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-medium text-[#0f2d34] md:flex lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3 py-2 transition-colors duration-200 hover:text-[var(--primary)]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* =========================
            الأزرار - يسار
        ========================== */}
        <div className="flex shrink-0 items-center gap-3">
          
          <button
            type="button"
            className="hidden items-center gap-3 rounded-xl bg-[var(--secondary)] px-4 py-3 text-base font-bold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] md:flex"
          >
            <span>تواصل معنا</span>
            <span className="flex h-2 w-2 items-center justify-center rounded-full border border-white/80 bg-white/10 text-xl leading-none">
              +
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#0f2d34] text-[#0f2d34] transition-colors md:hidden"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* =========================
          قائمة الموبايل المنسدلة (شبه شفافة)
      ========================== */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#d7dadb] bg-[#dfe1e3]/80 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-4 px-4 pb-8 pt-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`w-full rounded-md py-3 text-center text-lg font-bold transition-colors ${
                  index === 0
                    ? "bg-[var(--secondary)] text-[#0f2d34]"
                    : "text-[#0f2d34] hover:bg-black/5"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}