"use client";

import Image from "next/image";
import Link from "next/link";
import Check from "@mui/icons-material/Check";
import Phone from "@mui/icons-material/Phone";
import { siteWhatsAppUrl } from "../../lib/site";

const features = [
  "رعاية طبية وفق معايير مهنية دقيقة",
  "طوارئ تعمل على مدار الساعة",
  "كادر استشاري متعدد التخصصات",
  "تقنيات حديثة في التشخيص والعلاج",
];

const highlights = [
  { href: "/products/emergency", label: "الطوارئ والإسعاف" },
  { href: "/products/clinics", label: "العيادات التخصصية" },
  { href: "/products/radiology", label: "الأشعة والتشخيص" },
  { href: "/products/lab", label: "المختبر" },
];

export default function About() {
  return (
    <section id="about" dir="rtl" className="w-full border-t border-[#d7e3ea] bg-neutral">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <span className="inline-block rounded-md bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
            من نحن
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.45] text-[#1c2b3a] md:text-[2.35rem]">
            رعاية طبية متكاملة في بزاعة
            <span className="mt-1 block">
              <span className="mt-3 block h-[6px] w-28 rounded-full bg-primary" />
            </span>
          </h2>

          <p className="mt-5 text-[18px] leading-8 text-[#5b6b76]">
            مستشفى الأموي في مدينة بزاعة، ريف حلب الشرقي، سوريا، هو منشأة صحية خاصة
            تقدّم رعاية طبية متكاملة لسكان المدينة والمناطق المحيطة في ريف حلب
            الشرقي. يجمع المشفى بين أقسام الطوارئ والعيادات والجراحة والتنويم
            وخدمات التشخيص تحت سقف واحد.
          </p>

          <p className="mt-4 text-[17px] leading-8 text-[#5b6b76]">
            نقدّم خدمات الإسعاف على مدار الساعة، إضافة إلى الأشعة والمختبر والنسائية
            والتوليد والعناية المشددة ووحدة القثطرة القلبية والصيدلية، بكادر متخصص
            وتجهيزات حديثة تخدم احتياجات المرضى اليومية والحالات الحرجة.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <article
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#e8eef1] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(28,43,58,0.05)]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check sx={{ fontSize: 14 }} />
                </span>
                <p className="text-sm font-semibold leading-6 text-[#1c2b3a]">{item}</p>
              </article>
            ))}
          </div>

          <nav aria-label="أقسام رئيسية" className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <a
              href={siteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-[#006480]"
            >
              <Phone sx={{ fontSize: 16 }} />
              اتصل بنا
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,120,153,0.28)]">
          <Image
            src="/hospital.PNG"
            alt="مستشفى الأموي في مدينة بزاعة"
            width={1400}
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
