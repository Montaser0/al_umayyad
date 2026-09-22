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
  sitePhoneE164,
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
        inLanguage: "ar-SY",
        publisher: { "@id": hospitalId },
      },
      {
        "@type": "Hospital",
        "@id": hospitalId,
        name: siteName,
        alternateName: [siteAlternateName, siteEnglishName, "Umayyad Hospital"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: `${siteUrl}${logoPath}`,
        },
        image: [`${siteUrl}${ogImage.url}`, `${siteUrl}${logoPath}`],
        description: siteDescription,
        email: siteEmail,
        telephone: sitePhoneE164,
        address: {
          "@type": "PostalAddress",
          ...siteAddress,
        },
        geo: {
          "@type": "GeoCoordinates",
          ...siteGeo,
        },
        hasMap: siteMapsUrl,
        areaServed: [
          {
            "@type": "City",
            name: "بزاعة",
          },
          {
            "@type": "City",
            name: "الباب",
          },
          {
            "@type": "AdministrativeArea",
            name: "حلب",
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
        knowsLanguage: ["ar", "en"],
        priceRange: "$$",
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
      "@type": "MedicalProcedure",
      name: title,
      description,
      image: `${siteUrl}${image}`,
      url,
      procedureType: title,
      provider: {
        "@type": "Hospital",
        "@id": hospitalId,
        name: siteName,
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteName,
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: url,
        },
      ],
    },
  ];
}
