"use client";

import Image from "next/image";
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

            <p className="mt-6 max-w-[480px] text-[20px] leading-8 text-foreground/55">
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
          </div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#e4edf1] bg-white shadow-[0_12px_35px_rgba(28,43,58,0.06)] sm:grid-cols-3 md:mt-14">

{/* الإسعاف */}
<div className="flex items-center gap-4 border-b border-[#edf1f3] px-6 py-6 sm:border-b-0 sm:border-l md:px-8">
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#C62128]/10 text-[#C62128]">
    <AmbulanceIcon sx={{ fontSize: 27 }} />
  </span>

  <div>
    <p className="text-xl font-extrabold leading-none text-[#C62128]">
      24/7
    </p>

    <p className="mt-2 text-sm font-medium text-foreground/55">
      رعاية إسعافية
    </p>
  </div>
</div>


{/* الأطباء */}
<div className="flex items-center gap-4 border-b border-[#edf1f3] px-6 py-6 sm:border-b-0 sm:border-l md:px-8">
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
    <MedicalServices sx={{ fontSize: 27 }} />
  </span>

  <div>
    <p className="text-xl font-extrabold leading-none text-foreground">
      +200
    </p>

    <p className="mt-2 text-sm font-medium text-foreground/55">
      طبيب واستشاري
    </p>
  </div>
</div>


{/* العيادات */}
<div className="flex items-center gap-4 px-6 py-6 md:px-8">
  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
    <LocalHospital sx={{ fontSize: 27 }} />
  </span>

  <div>
    <p className="text-xl font-extrabold leading-none text-foreground">
      +50
    </p>

    <p className="mt-2 text-sm font-medium text-foreground/55">
      عيادة تخصصية
    </p>
  </div>
</div>

</div>
      </div>
    </section>
  );
}
