import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/navbar/page";
import Footer from "../../../components/footer/page";
import ServiceDetails from "../../../components/products/[slug]/page";
import { getService, services } from "../../../components/products/data";
import { JsonLd, serviceJsonLd } from "../../../lib/json-ld";
import { siteEnglishName, siteName } from "../../../lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
      robots: { index: false, follow: true },
    };
  }

  const title = `${service.title} | مستشفى الأموي - بزاعة`;
  const description = `${service.description} ضمن خدمات ${siteName} (${siteEnglishName}) في مدينة بزاعة بريف حلب الشرقي.`;
  const path = `/products/${service.slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
    robots: service.comingSoon
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ar_SY",
      url: path,
      siteName: `${siteName} | ${siteEnglishName}`,
      title,
      description,
      images: [
        {
          url: service.image,
          alt: `${service.title} في ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <JsonLd
        data={serviceJsonLd(service.slug, service.title, service.description, service.image)}
      />
      <Navbar />
      <ServiceDetails service={service} />
      <Footer />
    </main>
  );
}
