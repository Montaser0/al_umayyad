"use client";

import Image from "next/image";
import Bloodtype from "@mui/icons-material/Bloodtype";
import ChildCare from "@mui/icons-material/ChildCare";
import Emergency from "@mui/icons-material/Emergency";
import Healing from "@mui/icons-material/Healing";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import Science from "@mui/icons-material/Science";
import Visibility from "@mui/icons-material/Visibility";
import West from "@mui/icons-material/West";
import type { SvgIconComponent } from "@mui/icons-material";

const services: {
  title: string;
  description: string;
  image: string;
  icon: SvgIconComponent;
}[] = [
  {
    title: "الرنين المغناطيسي",
    description: "تصوير دقيق للأعضاء والأنسجة بأجهزة رنين حديثة تساعد على التشخيص المبكر ووضع خطة علاج واضحة.",
    image: "/hospital.PNG",
    icon: Science,
  },
  {
    title: "القثطرة القلبية",
    description: "تشخيص وعلاج أمراض القلب والشرايين عبر قثطرة متقدمة بإشراف كادر استشاري متخصص.",
    image: "/hero.jpg",
    icon: MonitorHeart,
  },
  {
    title: "طب العيون",
    description: "فحص وعلاج أمراض العين والرؤية، مع إمكانيات جراحية وتشخيصية حديثة للحفاظ على سلامة البصر.",
    image: "/hospital.PNG",
    icon: Visibility,
  },
  {
    title: "الأشعة التشخيصية",
    description: "خدمات أشعة رقمية وتصوير مقطعي توفّر نتائج سريعة ودقيقة لدعم القرار الطبي.",
    image: "/hero.jpg",
    icon: Science,
  },
  {
    title: "الطوارئ والإسعاف",
    description: "قسم طوارئ يعمل على مدار الساعة لاستقبال الحالات الحرجة وتقديم الإسعاف الأولي فوراً.",
    image: "/hospital.PNG",
    icon: Emergency,
  },
  {
    title: "الجراحة العامة",
    description: "عمليات جراحية بمعايير سلامة عالية وغرف عمليات مجهّزة وتقنيات حديثة تقلل فترة التعافي.",
    image: "/hero.jpg",
    icon: Healing,
  },
  {
    title: "المختبر والتحاليل",
    description: "تحاليل مخبرية شاملة بنتائج موثوقة لدعم التشخيص والمتابعة الطبية اليومية.",
    image: "/hospital.PNG",
    icon: Bloodtype,
  },
  {
    title: "طب الأطفال",
    description: "رعاية متخصصة للرضع والأطفال، من الفحص الدوري إلى علاج الحالات الحادة والمزمنة.",
    image: "/hero.jpg",
    icon: ChildCare,
  },
];

export default function Products() {
  return (
    <section id="services" dir="rtl" className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-primary">ماذا نقدّم</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-[2.35rem]">
            خدماتنا الطبية
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-[0_10px_30px_rgba(28,43,58,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,120,153,0.12)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl bg-background/95 text-primary shadow-sm">
                    <Icon sx={{ fontSize: 24 }} />
                  </span>
                </div>

                <div className="flex h-[calc(100%-11rem)] flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-foreground/55">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex w-fit items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background transition-colors hover:bg-primary/90"
                  >
                    عرض التفاصيل
                    <West sx={{ fontSize: 16 }} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
