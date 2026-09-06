"use client";

import { useState } from "react";
import Link from "next/link";
import Bloodtype from "@mui/icons-material/Bloodtype";
import ChildCare from "@mui/icons-material/ChildCare";
import Emergency from "@mui/icons-material/Emergency";
import Healing from "@mui/icons-material/Healing";
import Hotel from "@mui/icons-material/Hotel";
import LocalPharmacy from "@mui/icons-material/LocalPharmacy";
import MedicalServices from "@mui/icons-material/MedicalServices";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import PregnantWoman from "@mui/icons-material/PregnantWoman";
import Science from "@mui/icons-material/Science";
import Spa from "@mui/icons-material/Spa";
import West from "@mui/icons-material/West";
import type { SvgIconComponent } from "@mui/icons-material";
import {
  serviceCategories,
  services,
  type ServiceCategoryId,
  type ServiceIcon,
} from "./data";

const icons: Record<ServiceIcon, SvgIconComponent> = {
  emergency: Emergency,
  scan: Science,
  lab: Bloodtype,
  obstetrics: PregnantWoman,
  clinics: MedicalServices,
  surgery: Healing,
  inpatient: Hotel,
  child: ChildCare,
  icu: MonitorHeart,
  heart: MonitorHeart,
  pharmacy: LocalPharmacy,
  cosmetics: Spa,
};

const categoryIcons: Record<ServiceCategoryId, SvgIconComponent> = {
  critical: Emergency,
  diagnostics: Science,
  clinics: MedicalServices,
  care: Healing,
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>("critical");
  const currentCategory = serviceCategories.find((category) => category.id === activeCategory);
  const visibleServices = services.filter((service) => service.category === activeCategory);

  return (
    <section id="services" dir="rtl" className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold text-primary">ماذا نقدّم</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-[2.35rem]">
            أقسامنا وخدماتنا
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-foreground/55 md:text-base">
            اختر المجموعة المناسبة لحالتك، ثم انتقل مباشرة إلى القسم المطلوب.
          </p>
          <span className="mx-auto mt-4 block h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div
          role="tablist"
          aria-label="مجموعات الأقسام"
          className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {serviceCategories.map((category) => {
            const Icon = categoryIcons[category.id];
            const isActive = category.id === activeCategory;
            const count = services.filter((service) => service.category === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-right transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary text-background shadow-[0_10px_24px_rgba(0,120,153,0.2)]"
                    : "border-primary/10 bg-background text-foreground hover:border-primary/30 hover:bg-neutral"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-background/15 text-background" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon sx={{ fontSize: 22 }} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold md:text-base">{category.title}</span>
                  <span className={`mt-0.5 block text-xs ${isActive ? "text-background/75" : "text-foreground/45"}`}>
                    {count} أقسام
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground">{currentCategory?.title}</h3>
            <p className="mt-1 text-sm text-foreground/55">{currentCategory?.description}</p>
          </div>

          <div className="divide-y divide-primary/10 overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-[0_10px_30px_rgba(28,43,58,0.06)]">
            {visibleServices.map((service) => {
              const Icon = icons[service.icon];
              const rowClass = "flex items-center gap-4 px-5 py-5 transition-colors hover:bg-neutral";
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon sx={{ fontSize: 24 }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-bold text-foreground">{service.title}</span>
                      {service.comingSoon ? (
                        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                          قريباً
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1 block text-sm leading-7 text-foreground/55">
                      {service.description}
                    </span>
                  </span>
                  {service.comingSoon ? null : (
                    <West sx={{ fontSize: 18 }} className="shrink-0 text-primary" />
                  )}
                </>
              );

              if (service.comingSoon) {
                return (
                  <div key={service.slug} className={`${rowClass} cursor-default opacity-80`}>
                    {content}
                  </div>
                );
              }

              return (
                <Link key={service.slug} href={`/products/${service.slug}`} className={rowClass}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
