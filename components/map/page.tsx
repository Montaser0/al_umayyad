export default function HospitalMap() {
  const embedSrc =
    "https://www.google.com/maps?q=36.3885263,37.5737988&hl=ar&z=16&output=embed";
  const mapsLink = "https://maps.app.goo.gl/9tzBSJqcdyvFZkws7";

  return (
    <section id="location" dir="rtl" className="w-full bg-neutral">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-md bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
            موقعنا
          </span>
          <h2 className="mt-4 text-3xl font-medium text-foreground md:text-[2.1rem]">
            موقع مستشفى الأموي
          </h2>
          <span className="mx-auto mt-4 block h-[4px] w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-foreground/55">
            يمكنكم الوصول إلينا عبر الخريطة أدناه، أو فتح الموقع مباشرة في خرائط Google.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-[0_12px_40px_rgba(28,43,58,0.08)]">
          <iframe
            title="موقع مستشفى الأموي على الخريطة"
            src={embedSrc}
            className="h-[380px] w-full border-0 md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-medium text-background hover:bg-primary/90"
          >
            فتح الموقع في خرائط Google
          </a>
        </div>
      </div>
    </section>
  );
}
