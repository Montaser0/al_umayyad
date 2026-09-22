export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://umayyad.hospital";

export const siteName = "مستشفى الأموي";
export const siteAlternateName = "مشفى الأموي";

export const siteTitle =
  "مستشفى الأموي | مشفى خاص في بزاعة شرق حلب";

export const siteDescription =
  "مستشفى الأموي الخاص في مدينة بزاعة شرق محافظة حلب: طوارئ على مدار الساعة، رنين مغناطيسي، قثطرة قلبية، أشعة تشخيصية، جراحة، مختبر وطب عيون وأطفال.";

export const siteKeywords = [
  "مستشفى الأموي",
  "مشفى الأموي",
  "مستشفى بزاعة",
  "مستشفى الباب",
  "مستشفى حلب",
  "رنين مغناطيسي حلب",
  "قثطرة قلبية",
  "طوارئ بزاعة",
  "أشعة تشخيصية",
  "طب عيون",
  "طب أطفال",
];

export const siteEmail = "info@alumayyad-hospital.com";

export const siteAddress = {
  streetAddress: "مدينة بزاعة",
  addressLocality: "الباب",
  addressRegion: "حلب",
  addressCountry: "SY",
} as const;

export const siteGeo = {
  latitude: 36.3885263,
  longitude: 37.5737988,
} as const;

export const siteMapsUrl = "https://maps.app.goo.gl/9tzBSJqcdyvFZkws7";

export const ogImage = {
  url: "/hospital.PNG",
  alt: "مبنى مستشفى الأموي في مدينة بزاعة",
} as const;

export const logoPath = "/logo.PNG";
