import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../components/navbar/page";
import ServiceDetails from "../../../components/products/[slug]/page";
import { getService, services } from "../../../components/products/data";

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
    return { title: "الخدمة غير موجودة" };
  }

  return {
    title: `${service.title} | مستشفى الأموي`,
    description: service.description,
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
      <Navbar />
      <ServiceDetails service={service} />
    </main>
  );
}
