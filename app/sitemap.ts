import type { MetadataRoute } from "next";
import { services } from "../components/products/data";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services
      .filter((service) => !service.comingSoon)
      .map((service) => ({
        url: `${siteUrl}/products/${service.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];
}
