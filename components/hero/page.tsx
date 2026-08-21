import Image from "next/image";

export default function Hero() {
  return (
    <section dir="rtl" className="w-full bg-[#f3f8fc]">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 md:px-10 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#d7eef6] px-4 py-1.5 text-sm font-medium text-[#1e6f86]">
              <span className="h-2 w-2 rounded-full bg-[#2a9bb5]" />
              أفضل رعاية طبية في سوريا
            </span>

            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.35] text-[#1c2b3a] md:text-5xl">
              رعايتكم أمانة،
              <span className="relative mt-1 inline-block">
                وصحتكم غايتنا
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c42-6 88-8 130-4 28 2.5 56 5 86 2"
                    stroke="#7ec8d8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[15px] leading-8 text-[#6b7c89]">
              نلتزم بتقديم رعاية صحية بمعايير عالمية، عبر كادر طبي متخصص وتقنيات
              حديثة تضمن سلامتكم وراحتكم في كل زيارة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-[#1a8fa8] px-5 py-5 text-sm font-bold text-white hover:bg-[#167c92]"
              >
                اكتشف خدماتنا
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>

              <a
                href="https://wa.me/9639XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-red-300 bg-white px-5 py-5 text-sm font-bold text-red-600 hover:bg-red-50"
                style={{ borderColor: '#ee364e', color: '#ee364e' }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-red-600" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 14.2V7.8L16.2 12l-5.7 4.2Z" />
                </svg>
                الاسعاف
              </a>
         
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-6 top-10 h-56 w-56 rounded-full bg-[#cfeaf3] blur-2xl" />
            <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-[#dbeff6] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#e7f4f8]">
              <Image
                src="/hero.jpg"
                alt="طبيبة في مستشفى الأموي"
                width={720}
                height={860}
                priority
                className="h-[420px] w-full object-cover object-top md:h-[480px]"
              />
            </div>

            <div className="absolute right-4 top-8 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(28,43,58,0.1)] md:right-8">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a8fa8] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#1c2b3a]">+30 موثّق</span>
            </div>

            <div className="absolute bottom-8 left-4 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(28,43,58,0.1)] md:left-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff1ea] text-[#e08a5c]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-[#1c2b3a]">+200 طبيب ممارس</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-[1.6rem] bg-white px-6 py-7 shadow-[0_12px_40px_rgba(28,43,58,0.06)] sm:grid-cols-3 md:mt-16 md:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#e08a5c]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10.5C16.6 21.4 20 17 20 12V6l-8-4Zm1 13h-2v-2H9v-2h2V9h2v2h2v2h-2v2Z" />
              </svg>
            </span>
            <div>
              <p className="text-lg font-bold text-[#1c2b3a]">24/7</p>
              <p className="text-sm text-[#6b7c89]">رعاية إسعافية</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:justify-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f8] text-[#1a8fa8]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
              </svg>
            </span>
            <div>
              <p className="text-lg font-bold text-[#1c2b3a]">+200</p>
              <p className="text-sm text-[#6b7c89]">طبيب واستشاري</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:justify-end">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f8] text-[#1a8fa8]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M19 10h-2V8c0-1.1-.9-2-2-2h-2V4H9v2H7c-1.1 0-2 .9-2 2v2H3v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2Zm-9 8H8v-4h2v4Zm4 0h-2v-4h2v4Zm4 0h-2v-4h2v4Zm0-6H6V8h12v4Z" />
              </svg>
            </span>
            <div>
              <p className="text-lg font-bold text-[#1c2b3a]">+50</p>
              <p className="text-sm text-[#6b7c89]">عيادة تخصصية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
