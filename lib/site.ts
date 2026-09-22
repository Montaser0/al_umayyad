const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

/** Official production domain — never use legacy or vercel.app hosts for SEO URLs. */
export const siteUrl =
  configuredSiteUrl &&
  !configuredSiteUrl.includes("vercel.app") &&
  !configuredSiteUrl.includes("alumayyad-hospital.com")
    ? configuredSiteUrl
    : "https://umayyad.hospital";

export const siteName = "مستشفى الأموي";
export const siteAlternateName = "مشفى الأموي";
export const siteEnglishName = "Al-Umayyad Hospital";

export const siteTitle =
  "مستشفى الأموي | Al-Umayyad Hospital - بزاعة";

export const siteDescription =
  "مستشفى الأموي في مدينة بزاعة بريف حلب الشرقي، يقدم خدمات ورعاية طبية متكاملة ويضم مجموعة من الأقسام والعيادات والخدمات الصحية.";

export const siteKeywords = [
  "مستشفى الأموي",
  "مشفى الأموي",
  "مستشفى الأموي بزاعة",
  "مشفى الأموي بزاعة",
  "مستشفى بزاعة",
  "مستشفى في بزاعة",
  "Al-Umayyad Hospital",
  "Al Umayyad Hospital Bza'a",
  "ريف حلب الشرقي",
];

/** Contact email already used on the site (not the website domain). */
export const siteEmail = "info@alumayyad-hospital.com";

/** Placeholder contact numbers — keep UI as-is; omit from schema until real. */
export const sitePhoneDisplay = "+963 9XX XXX XXX";
export const sitePhoneE164 = "+9639XXXXXXXXX";

export const siteAddress = {
  streetAddress: "مدينة بزاعة – طريق حلب–منبج الدولي",
  addressLocality: "بزاعة",
  addressRegion: "حلب",
  addressCountry: "SY",
} as const;

export const siteAddressText =
  "مدينة بزاعة – طريق حلب–منبج الدولي – سوريا";

export const siteLocationPhrase =
  "مستشفى الأموي في مدينة بزاعة، ريف حلب الشرقي، سوريا";

export const siteGeo = {
  latitude: 36.3885263,
  longitude: 37.5737988,
} as const;

export const siteMapsUrl = "https://maps.app.goo.gl/9tzBSJqcdyvFZkws7";

export const ogImage = {
  url: "/hospital.PNG",
  width: 1200,
  height: 630,
  alt: "مستشفى الأموي في مدينة بزاعة",
} as const;

export const logoPath = "/logo.PNG";
