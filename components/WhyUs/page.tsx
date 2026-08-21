"use client";

import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import MedicalServices from "@mui/icons-material/MedicalServices";
import MonitorHeart from "@mui/icons-material/MonitorHeart";

const reasons = [
  {
    title: "نخبة من الأطباء",
    description:
      "كادر استشاري متعدد التخصصات بخبرة عالية، يضع سلامة المريض أولاً في كل خطوة تشخيص وعلاج.",
    icon: MedicalServices,
  },
  {
    title: "أحدث التقنيات",
    description:
      "أجهزة رنين وقثطرة وأشعة حديثة تمنحكم تشخيصاً أدق وعلاجاً أسرع بنتائج يمكن الاعتماد عليها.",
    icon: MonitorHeart,
  },
  {
    title: "رعاية متكاملة 24/7",
    description:
      "طوارئ وعيادات وتنويم في مكان واحد، مع متابعة مستمرة تضمن راحتكم من لحظة الدخول حتى التعافي.",
    icon: HealthAndSafety,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" dir="rtl" className="w-full bg-foreground">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-primary px-4 py-1 text-sm font-semibold text-primary">
            قيمنا
          </span>
          <h2 className="mt-4 text-3xl font-bold text-background md:text-[2.35rem]">
            لماذا تختار مشفى الأموي؟
          </h2>
          <span className="mx-auto mt-4 block h-[4px] w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-background/70 md:text-base">
            صرح طبي يجمع الخبرة والتقنية والرعاية الإنسانية ليكون خياركم الأول للصحة في سوريا.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-background/10 bg-background/5 px-7 py-10 text-center"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-background">
                  <Icon sx={{ fontSize: 30 }} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-background/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
