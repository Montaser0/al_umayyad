"use client";

import React, { useState } from "react";
import Image from "next/image";

const navItems = [
  "الرئيسية",
  "من نحن",
  "ابحث عن طبيب",
  "المدونة",
  "الصفحات",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="absolute left-0 right-0 top-0 z-50 w-full bg-transparent pt-4 md:pt-6"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12 lg:px-16">
        
        {/* =========================
            الشعار (مكبر بدون التأثير على الارتفاع)
        ========================== */}
        <div className="relative h-10 w-[140px] shrink-0 md:h-12 md:w-[180px]">
          <Image
            src="/logo.PNG"
            alt="شعار العيادة"
            width={250}
            height={100}
            priority
            className="absolute right-0 top-1/2 h-[150px] w-auto max-w-none -translate-y-1/2 object-contain md:h-[230px]"
          />
        </div>

        {/* =========================
            روابط التنقل - شاشات كبيرة
        ========================== */}
        <nav className="hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium text-[#4a5f73] md:flex lg:gap-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`transition-colors duration-200 hover:text-[#1e3b56] ${
                index === 0 ? "font-bold text-[#1e3b56]" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* =========================
            الأزرار (زر تواصل معنا + القائمة)
        ========================== */}
        <div className="flex shrink-0 items-center gap-4">
          
          {/* زر تواصل معنا - يظهر في الشاشات الكبيرة */}
          <button 
            type="button" 
            className="hidden rounded-md bg-[#1e3b56] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#152a3d] hover:shadow-lg md:block"
          >
            تواصل معنا
          </button>

          {/* أيقونة القائمة للشاشات الصغيرة */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1e3b56] transition-opacity hover:opacity-70 md:hidden"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =========================
          قائمة الموبايل المنسدلة (بشفافية وحركة انزلاق)
      ========================== */}
      <div 
        className={`absolute left-0 top-full w-full transform transition-all duration-300 ease-out md:hidden ${
          isOpen 
            ? "translate-y-0 opacity-100 visible pointer-events-auto" 
            : "-translate-y-4 opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* الحاوية الداخلية للشفافية وتأثير الزجاج */}
        <div className="border-t border-white/20 bg-[#dbeaf4]/75 pb-6 pt-4 shadow-xl backdrop-blur-lg">
          <nav className="flex flex-col items-center gap-4 px-6">
            {navItems.map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className={`w-full border-b border-[#c9dbe8] pb-3 text-center text-lg font-medium transition-colors ${
                  index === 0 ? "font-bold text-[#1e3b56]" : "text-[#4a5f73] hover:text-[#1e3b56]"
                }`}
              >
                {item}
              </a>
            ))}
            
            {/* زر تواصل معنا يظهر داخل القائمة في الجوال */}
            <button 
              type="button" 
              className="mt-2 w-full rounded-full bg-[#1e3b56] py-3 text-lg font-bold text-white shadow-md transition-colors hover:bg-[#152a3d]"
            >
              تواصل معنا
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}