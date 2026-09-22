import Image from "next/image";
import Link from "next/link";
import East from "@mui/icons-material/East";
import type { Service } from "../data";
import { services } from "../data";

export default function ServiceDetails({ service }: { service: Service }) {
  const related = services
    .filter((item) => item.slug !== service.slug && !item.comingSoon)
    .slice(0, 4);

  return (
    <div dir="rtl" className="bg-background">
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden md:min-h-[440px]">
        <Image
          src={service.image}
          alt={`${service.title} في مستشفى الأموي`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70"></div>

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center text-background">
          <nav
            aria-label="مسار التنقل"
            className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-background/80"
          >
            <Link href="/" className="hover:text-background">
              الرئيسية
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services" className="hover:text-background">
              الأقسام الطبية
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-background">{service.title}</span>
          </nav>

          <Link
            href="/#services"
            className="mb-6 inline-flex items-center gap-2 rounded-lg bg-background/15 px-4 py-2 text-sm font-bold text-background hover:bg-background/25"
          >
            <East sx={{ fontSize: 18 }} />
            رجوع
          </Link>
          <span className="rounded-md border border-primary px-4 py-1.5 text-sm font-semibold text-primary">
            {service.comingSoon ? "قريباً" : "أقسام مستشفى الأموي"}
          </span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-background/80 md:text-base">
            {service.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 lg:px-12 lg:py-20">
        {service.comingSoon ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-primary/10 bg-background px-6 py-12 text-center shadow-[0_10px_30px_rgba(28,43,58,0.06)]">
            <h2 className="text-2xl font-bold text-foreground">هذا القسم قيد التجهيز</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/55 md:text-base">
              سيُفتتح قسم التجميل قريباً، ويمكنكم متابعة المستشفى لمعرفة موعد إطلاق الخدمة.
            </p>
          </div>
        ) : service.sections.length > 0 ? (
          <>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                ما يتضمنه {service.title}
              </h2>
              <p className="mt-3 text-sm text-foreground/55 md:text-base">
                الوحدات والخدمات التابعة لهذا القسم في مستشفى الأموي بمدينة بزاعة.
              </p>
              <span className="mx-auto mt-4 block h-[3px] w-20 rounded-full bg-primary"></span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.sections.map((section) => (
                <article
                  key={section.title}
                  className="overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-[0_10px_30px_rgba(28,43,58,0.06)]"
                >
                  <div className="relative h-44">
                    <Image
                      src={section.image}
                      alt={`${section.title} ضمن ${service.title} في مستشفى الأموي`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/55">{section.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-primary/10 bg-background px-6 py-12 text-center shadow-[0_10px_30px_rgba(28,43,58,0.06)]">
            <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/55 md:text-base">
              {service.description}
            </p>
          </div>
        )}

        {!service.comingSoon && related.length > 0 ? (
          <div className="mt-14">
            <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
              أقسام أخرى قد تهمك
            </h2>
            <nav
              aria-label="أقسام ذات صلة"
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="rounded-lg border border-primary/15 bg-neutral px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}

        <div className="mt-12 text-center">
          <Link
            href="/#services"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background hover:bg-primary/90"
          >
            العودة إلى الأقسام
          </Link>
        </div>
      </section>
    </div>
  );
}
