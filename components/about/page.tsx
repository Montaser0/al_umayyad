"use client";

import Image from "next/image";
import Check from "@mui/icons-material/Check";
import Phone from "@mui/icons-material/Phone";

const features = [
  "رعاية طبية وفق معايير مهنية دقيقة",
  "طوارئ تعمل على مدار الساعة",
  "كادر استشاري متعدد التخصصات",
  "تقنيات حديثة في التشخيص والعلاج",
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
            رؤية طبية متطورة
            لرعاية أفضل

            <span className="mt-1 block">
              <span className="mt-3 block h-[6px] w-28 rounded-full bg-primary" />
            </span>
          </h2>

          <p className="mt-5 text-[18px] leading-8 text-[#5b6b76]">
            تأسس مستشفى الأموي ليكون صرحاً طبياً يواكب أحدث التطورات في التشخيص
            والعلاج، مع التزام واضح بسلامة المريض وراحته. نقدّم رعاية متكاملة عبر
            العيادات والطوارئ وأقسام التنويم بكادر متخصص وتجهيزات حديثة.
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



          <div className="mt-8">
            <a
              href="#contact"
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
            alt="مبنى مستشفى الأموي"
            width={1400}
            height={600}
            className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
