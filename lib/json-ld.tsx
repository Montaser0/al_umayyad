import { faqs } from "../components/questions/data";
import { services } from "../components/products/data";
import {
  logoPath,
  ogImage,
  siteAddress,
  siteAlternateName,
  siteDescription,
  siteEmail,
  siteEnglishName,
  siteGeo,
  siteMapsUrl,
  siteName,
  siteUrl,
} from "./site";

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const medicalSpecialties = [
  "https://schema.org/Diagnostic",
  "https://schema.org/Cardiovascular",
  "https://schema.org/Ophthalmic",
  "https://schema.org/Emergency",
  "https://schema.org/Surgical",
  "https://schema.org/Pediatric",
];

const hospitalId = `${siteUrl}/#hospital`;
const websiteId = `${siteUrl}/#website`;
const logoId = `${siteUrl}/#logo`;

export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        alternateName: [siteAlternateName, siteEnglishName],
        description: siteDescription,
        inLanguage: "ar",
        publisher: { "@id": hospitalId },
      },
      {
        "@type": ["Hospital", "MedicalOrganization"],
        "@id": hospitalId,
        name: siteName,
        alternateName: [
          siteAlternateName,
          siteEnglishName,
          "Al Umayyad Hospital",
          "Al Umayyad Hospital Bza'a",
        ],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: `${siteUrl}${logoPath}`,
        },
        image: [`${siteUrl}${ogImage.url}`, `${siteUrl}${logoPath}`],
        description: siteDescription,
        email: siteEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteAddress.streetAddress,
          addressLocality: siteAddress.addressLocality,
          addressRegion: siteAddress.addressRegion,
          addressCountry: siteAddress.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteGeo.latitude,
          longitude: siteGeo.longitude,
        },
        hasMap: siteMapsUrl,
        areaServed: [
          {
            "@type": "City",
            name: "بزاعة",
          },
          {
            "@type": "AdministrativeArea",
            name: "ريف حلب الشرقي",
          },
        ],
        medicalSpecialty: medicalSpecialties,
        availableService: services
          .filter((service) => !service.comingSoon)
          .map((service) => ({
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.description,
            url: `${siteUrl}/products/${service.slug}`,
          })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        isAcceptingNewPatients: true,
        knowsLanguage: ["ar"],
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": siteUrl,
        },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(slug: string, title: string, description: string, image: string) {
  const url = `${siteUrl}/products/${slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: `${title} | ${siteName}`,
      description,
      url,
      isPartOf: { "@id": websiteId },
      about: {
        "@type": "MedicalProcedure",
        name: title,
        description,
        image: `${siteUrl}${image}`,
        url,
        provider: {
          "@type": "Hospital",
          "@id": hospitalId,
          name: siteName,
          url: siteUrl,
        },
      },
      primaryImageOfPage: `${siteUrl}${image}`,
      inLanguage: "ar",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "الأقسام الطبية",
          item: `${siteUrl}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];
}
