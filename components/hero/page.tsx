"use client";

import Image from "next/image";
import Check from "@mui/icons-material/Check";
import Groups from "@mui/icons-material/Groups";
import LocalHospital from "@mui/icons-material/LocalHospital";
import MedicalServices from "@mui/icons-material/MedicalServices";
import West from "@mui/icons-material/West";
import AmbulanceIcon from "../icons/AmbulanceIcon";

export default function Hero() {
  return (
    <section dir="rtl" className="w-full bg-neutral">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 md:px-10 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              أفضل رعاية طبية في سوريا
            </span>

            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.35] text-foreground md:text-5xl">
              رعايتكم أمانة،
              <span className="relative mt-1 inline-block">
                وصحتكم غايتنا
                <svg
                  className="absolute -bottom-2 left-0 w-full text-primary/40"
                  viewBox="0 0 220 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c42-6 88-8 130-4 28 2.5 56 5 86 2"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[15px] leading-8 text-foreground/55">
              نلتزم بتقديم رعاية صحية بمعايير عالمية، عبر كادر طبي متخصص وتقنيات
              حديثة تضمن سلامتكم وراحتكم في كل زيارة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-5 text-sm font-bold text-background hover:bg-primary/90"
              >
                اكتشف خدماتنا
                <West sx={{ fontSize: 16 }} />
              </button>

              <a
                href="https://wa.me/9639XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-secondary bg-background px-5 py-5 text-sm font-bold text-secondary hover:bg-secondary/10"
              >
                <AmbulanceIcon sx={{ fontSize: 24 }} className="text-secondary" />
                الاسعاف
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-6 top-10 h-56 w-56 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-primary/10">
              <Image
                src="/hero.jpg"
                alt="طبيبة في مستشفى الأموي"
                width={720}
                height={860}
                priority
                className="h-[420px] w-full object-cover object-top md:h-[480px]"
              />
            </div>

{/* =========================
    البطاقات العائمة على الصورة
========================= */}

<div className="absolute right-4 top-6 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(28,43,58,0.14)] backdrop-blur-md md:right-7 md:top-8">
  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
      <Check sx={{ fontSize: 14 }} />
    </span>
  </span>

  <div className="leading-tight">
    <p className="text-sm font-bold text-foreground">
      +30
    </p>
    <p className="mt-0.5 text-[11px] text-foreground/55">
      سنة من الخبرة
    </p>
  </div>
</div>


<div className="absolute bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(28,43,58,0.14)] backdrop-blur-md md:bottom-8 md:left-7">
  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
    <Groups sx={{ fontSize: 19 }} />
  </span>

  <div className="leading-tight">
    <p className="text-sm font-bold text-foreground">
      +200
    </p>
    <p className="mt-0.5 text-[11px] text-foreground/55">
      طبيب واستشاري
    </p>
  </div>
</div>
          </div>
        </div>

{/* =========================
    شريط الإحصائيات
========================= */}

<div className="mt-10 grid overflow-hidden rounded-[2rem] border border-[#e4edf1] bg-white shadow-[0_20px_60px_rgba(28,43,58,0.08)] sm:grid-cols-3 md:mt-14">

  {/* الإسعاف */}
  <div className="group relative flex items-center gap-5 px-6 py-7 transition-all duration-300 hover:bg-[#f8fbfc] md:px-8 lg:py-8">
    <div className="absolute inset-y-7 right-0 hidden w-px bg-[#e8eef1] sm:block" />

    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#fff1f2] text-secondary shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
      <AmbulanceIcon sx={{ fontSize: 30 }} />

      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-secondary" />
    </span>

    <div>
      <p className="text-[1.65rem] font-black leading-none tracking-tight text-foreground">
        24/7
      </p>

      <p className="mt-2 text-sm font-semibold text-foreground/55">
        رعاية إسعافية متواصلة
      </p>

      <div className="mt-3 h-1 w-8 rounded-full bg-secondary/60 transition-all duration-300 group-hover:w-12" />
    </div>
  </div>


  {/* الأطباء */}
  <div className="group relative flex items-center gap-5 border-t border-[#edf1f3] px-6 py-7 transition-all duration-300 hover:bg-[#f8fbfc] sm:border-t-0 md:px-8 lg:py-8">
    <div className="absolute inset-y-7 right-0 hidden w-px bg-[#e8eef1] sm:block" />

    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#eaf7fa] text-primary shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
      <MedicalServices sx={{ fontSize: 30 }} />

      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-primary" />
    </span>

    <div>
      <p className="text-[1.65rem] font-black leading-none tracking-tight text-foreground">
        +200
      </p>

      <p className="mt-2 text-sm font-semibold text-foreground/55">
        طبيب واستشاري متخصص
      </p>

      <div className="mt-3 h-1 w-8 rounded-full bg-primary/60 transition-all duration-300 group-hover:w-12" />
    </div>
  </div>


  {/* العيادات */}
  <div className="group flex items-center gap-5 border-t border-[#edf1f3] px-6 py-7 transition-all duration-300 hover:bg-[#f8fbfc] sm:border-t-0 md:px-8 lg:py-8">
    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#eaf7fa] text-primary shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
      <LocalHospital sx={{ fontSize: 30 }} />

      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-primary" />
    </span>

    <div>
      <p className="text-[1.65rem] font-black leading-none tracking-tight text-foreground">
        +50
      </p>

      <p className="mt-2 text-sm font-semibold text-foreground/55">
        عيادة تخصصية متكاملة
      </p>

      <div className="mt-3 h-1 w-8 rounded-full bg-primary/60 transition-all duration-300 group-hover:w-12" />
    </div>
  </div>

</div>
      </div>
      
      
    </section>
  );
}
