import Image from "next/image";

export default function Hero() {
  return (
    <section dir="rtl" className="relative w-full overflow-hidden bg-[#fafbfc] pt-32 pb-16 lg:pt-48 lg:pb-24">
      
      {/* =========================
          خلفية عصرية (Mesh Gradients & Glows)
      ========================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* بقعة إضاءة علوية زرقاء */}
        <div className="absolute -top-40 right-0 h-[600px] w-[800px] rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-60 blur-[120px]"></div>
        {/* بقعة إضاءة سفلية تركواز */}
        <div className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#cffafe] to-[#a5f3fc] opacity-50 blur-[100px]"></div>
        {/* نسيج شبكي دقيق جداً */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwZjE3MmEiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          
          {/* =========================
              قسم النصوص (يمين)
          ========================== */}
          <div className="max-w-[650px] pt-10">
            
            {/* شارة مودرن (Modern Badge) */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-bold tracking-wide text-[#0f283d] shadow-sm backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06b6d4] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#0891b2]"></span>
              </span>
              الرعاية الصحية للمستقبل
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="text-5xl font-black leading-[1.15] text-[#0f283d] tracking-tight md:text-6xl lg:text-[5rem]">
              مستشفى الأموي
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#0284c7]">
                صحتك بين أيدٍ أمينة
              </span>
            </h1>

            {/* النص الوصفي */}
            <p className="mt-8 max-w-[500px] text-lg leading-relaxed text-slate-500 font-medium">
              صرح طبي رائد يجمع بين نخبة من أمهر الأطباء وأحدث التقنيات العالمية، لنقدم لك ولعائلتك رعاية استثنائية ترتقي بمقاييس جودة الحياة.
            </p>

            {/* الأزرار (أزرار عصرية بأسلوب بسيط ونظيف) */}
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#0f283d] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0f283d]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]"></div>
                <span className="relative z-10">عرض الخدمات</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>

              <button className="flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-transparent px-8 py-4 text-base font-bold text-[#0f283d] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0891b2] text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                شاهد كيف نعمل
              </button>
            </div>
          </div>

          {/* =========================
              قسم الصور (يسار)
          ========================== */}
          <div className="relative flex items-center justify-center lg:justify-end">
            
            {/* إطار الصورة المودرن */}
            <div className="relative z-10 w-full max-w-[600px] rounded-[2.5rem] bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff] p-2 shadow-2xl shadow-slate-200/50 lg:p-4">
              <div className="relative overflow-hidden rounded-[2rem] bg-white">
                <Image
                  src="/hero.jpg" 
                  alt="فريق أطباء مستشفى الأموي"
                  width={800}
                  height={800}
                  priority
                  className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
                />
              </div>

              {/* بطاقة الإحصائيات 1 (Apple-style Glassmorphism) */}
              <div className="absolute -left-6 bottom-12 z-20 flex items-center gap-4 rounded-3xl border border-white/60 bg-white/70 p-4 pr-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 lg:-left-12 lg:bottom-20">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0891b2] to-[#0284c7] text-white shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">حالات تعافي</p>
                  <p className="text-2xl font-black tracking-tight text-[#0f283d]">+150,000</p>
                </div>
              </div>

              {/* بطاقة الإحصائيات 2 */}
              <div className="absolute -right-6 top-12 z-20 flex flex-col gap-2 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 lg:-right-10 lg:top-16">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-black text-[#0f283d]">870+</p>
                  <p className="text-sm font-bold text-slate-500">طبيب متخصص</p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}