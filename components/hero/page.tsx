import Image from "next/image";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(23,186,212,0.18),transparent_28%),linear-gradient(180deg,#f9fdff_0%,#eef8fd_100%)] pb-16 pt-32 lg:pb-24 lg:pt-48"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(#1e3b56 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-gradient-to-tr from-[#bfeaf9] to-[#e2f7ff] opacity-60 blur-[80px]"></div>
        <div
          className="absolute -left-[5%] bottom-[5%] h-[600px] w-[600px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-gradient-to-bl from-[#9adff0] to-[#dff4fb] opacity-55 blur-[100px]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-[40%] top-[20%] h-[200px] w-[200px] animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-[#17bad4] opacity-20 blur-[60px]"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-[600px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bfeaf9] bg-white/60 px-4 py-2 text-sm font-bold text-[#0ba3be] shadow-[0_8px_20px_rgba(23,186,212,0.12)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#17bad4] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#17bad4]"></span>
              </span>
              رعاية طبية بمقاييس عالمية
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.2] md:text-6xl lg:text-[4.5rem]">
              <span className="bg-gradient-to-l from-[#1e3b56] to-[#0ba3be] bg-clip-text text-transparent">
                مستشفى الأموي
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-[#5a7184]">
              صرح طبي رائد يجمع بين نخبة من أمهر الأطباء وأحدث التقنيات العالمية، لنضع
              صحتك وصحة عائلتك في أيدٍ أمينة برعاية استثنائية على مدار الساعة.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1e3b56] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(30,59,86,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(30,59,86,0.34)]">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>

                <span className="relative z-10">عرض الخدمات</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="absolute bottom-16 right-0 z-20 flex items-center gap-4 rounded-full border border-white/40 bg-gradient-to-r from-[#17bad4]/90 to-[#0ba3be]/90 p-2 pl-6 shadow-[0_20px_40px_rgba(23,186,212,0.3)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 lg:-left-12 lg:right-auto lg:bottom-28">
              <div className="flex -space-x-3 space-x-reverse">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-gray-200"></div>
                <div className="h-12 w-12 rounded-full border-2 border-white bg-gray-300"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-[#0ba3be]">
                  +99
                </div>
              </div>
              <div className="text-white">
                <p className="text-xl font-bold leading-none">150K +</p>
                <p className="text-sm text-white/90">حالة تعافي</p>
              </div>
              <div className="absolute -top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#17bad4] shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-5 w-5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>

            <div className="absolute right-4 top-16 z-20 flex flex-col items-center justify-center rounded-[2rem] border border-white/60 bg-white/80 px-8 py-6 shadow-[0_20px_40px_rgba(30,59,86,0.08)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 lg:-right-4 lg:top-24">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7fb] text-[#1e3b56]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-[#1e3b56]">870+</p>
              <p className="text-sm font-bold text-[#5a7184]">طبيب متخصص</p>
            </div>

            <div className="absolute left-10 top-10 z-0 h-4 w-4 animate-bounce rounded-full bg-[#17bad4] opacity-60"></div>
            <div className="absolute bottom-10 right-20 z-0 h-3 w-3 animate-pulse rounded-full bg-[#1e3b56] opacity-40"></div>

            <div className="relative z-10 w-[90%] max-w-[650px] transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/hero.jpg"
                alt="فريق أطباء مستشفى الأموي"
                width={800}
                height={800}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(30,59,86,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}