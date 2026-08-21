"use client";

import Image from "next/image";
import LocalHospital from "@mui/icons-material/LocalHospital";
import MedicalServices from "@mui/icons-material/MedicalServices";
import West from "@mui/icons-material/West";
import AmbulanceIcon from "../icons/AmbulanceIcon";

export default function Hero() {
  return (
    <section dir="rtl" className="w-full bg-neutral">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hospital.PNG"
            alt="مبنى مستشفى الأموي"
            fill
            priority
            className="scale-105 object-cover blur-[3px]"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[900px] flex-col items-center justify-center px-5 py-24 text-center md:min-h-[780px] md:py-32">
          <span className="inline-flex items-center rounded-md border border-primary px-4 py-1.5 text-sm font-medium text-background">
            أفضل رعاية طبية في سوريا
          </span>

          <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.4] text-background md:text-5xl">
            رعايتكم أمانة، وصحتكم غايتنا
          </h1>

          <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-background/85 md:text-[20px]">
            نلتزم بتقديم رعاية صحية بمعايير عالمية، عبر كادر طبي متخصص وتقنيات
            حديثة تضمن سلامتكم وراحتكم في كل زيارة.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-4 text-sm font-bold text-background hover:bg-primary/90"
            >
              اكتشف خدماتنا
              <West sx={{ fontSize: 16 }} />
            </a>

            <a
              href="https://wa.me/9639XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-secondary bg-background/95 px-5 py-4 text-sm font-bold text-secondary hover:bg-background"
            >
              <AmbulanceIcon sx={{ fontSize: 24 }} />
              الاسعاف
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        <div className="relative z-10 -mt-8 grid overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-[0_12px_35px_rgba(28,43,58,0.08)] sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-primary/10 px-6 py-6 sm:border-b-0 sm:border-l md:px-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <AmbulanceIcon sx={{ fontSize: 27 }} />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-none text-secondary">24/7</p>
              <p className="mt-2 text-sm font-medium text-foreground/55">رعاية إسعافية</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-primary/10 px-6 py-6 sm:border-b-0 sm:border-l md:px-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MedicalServices sx={{ fontSize: 27 }} />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-none text-foreground">+200</p>
              <p className="mt-2 text-sm font-medium text-foreground/55">طبيب واستشاري</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-6 md:px-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LocalHospital sx={{ fontSize: 27 }} />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-none text-foreground">+50</p>
              <p className="mt-2 text-sm font-medium text-foreground/55">عيادة تخصصية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
