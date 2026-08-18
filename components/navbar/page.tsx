const navItems = [
  "الرئيسية",
  "من نحن",
  "تجربتنا",
  "الأعمال السابقة",
  "الأخبار",
  "اتصل بنا",
];

export default function Navbar() {
  return (
    <header
      dir="rtl"
      className="w-full border-b border-[#e8edf2] bg-white shadow-[0_6px_20px_rgba(30,59,86,0.06)]"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-3 py-3 md:px-6">
        <div className="flex shrink-0 items-center">
          <img
            src="/logo.PNG"
            alt="شعار الشركة"
            className="h-20 w-auto object-contain drop-shadow-[0_8px_18px_rgba(30,59,86,0.1)]"
          />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-medium text-[#1d3a4e] md:flex lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3 py-2 transition-all duration-200 hover:text-[#0ba3be]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className="group flex items-center gap-3 overflow-hidden rounded-full bg-[#1e3b56] px-4 py-3 text-base font-bold text-white shadow-[0_12px_25px_rgba(30,59,86,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16314a]"
          >
            <span className="relative">تواصل معنا</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/80 bg-white/10 text-xl leading-none transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
          </button>

          <button
            type="button"
            aria-label="السلة"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cfe5f0] bg-white/80 text-xl text-[#1d3a4e] shadow-[0_8px_18px_rgba(30,59,86,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            🛒
          </button>
        </div>
      </div>
    </header>
  );
}