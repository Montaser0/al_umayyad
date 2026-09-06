export type ServiceSection = {
  title: string;
  description: string;
  image: string;
};

export type ServiceIcon =
  | "emergency"
  | "scan"
  | "lab"
  | "obstetrics"
  | "clinics"
  | "surgery"
  | "inpatient"
  | "child"
  | "icu"
  | "heart"
  | "pharmacy"
  | "cosmetics";

export type ServiceCategoryId = "critical" | "diagnostics" | "clinics" | "care";

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: ServiceIcon;
  category: ServiceCategoryId;
  comingSoon?: boolean;
  sections: ServiceSection[];
};

export const serviceCategories: {
  id: ServiceCategoryId;
  title: string;
  description: string;
}[] = [
  {
    id: "critical",
    title: "طوارئ وعناية",
    description: "الإسعاف والعناية المشددة والحواضن",
  },
  {
    id: "diagnostics",
    title: "التشخيص",
    description: "الأشعة والمخبر والقثطرة القلبية",
  },
  {
    id: "clinics",
    title: "العيادات والتوليد",
    description: "العيادات التخصصية وقسم التوليد",
  },
  {
    id: "care",
    title: "عمليات وإقامة",
    description: "العمليات والإقامة والصيدلية والتجميل",
  },
];

const hospital = "/hospital.PNG";
const radiologyImg = "/رنين.png";
const cathImg = "/قثطرة.png";
const eyeImg = "/عيون.png";

export const services: Service[] = [
  {
    slug: "emergency",
    title: "قسم الإسعاف",
    description:
      "استقبال الحالات الإسعافية على مدار الساعة مع مسارات منفصلة للرجال والنساء والأطفال.",
    image: hospital,
    icon: "emergency",
    category: "critical",
    sections: [
      {
        title: "رجال",
        description: "رعاية إسعافية للرجال مع فرز سريع وتدخل فوري للحالات الحرجة.",
        image: hospital,
      },
      {
        title: "نساء",
        description: "مسار إسعافي مخصص للنساء يضمن الخصوصية والرعاية العاجلة.",
        image: radiologyImg,
      },
      {
        title: "أطفال",
        description: "إسعاف الأطفال بحضور كادر مدرّب على الحالات الحادة لدى الصغار.",
        image: hospital,
      },
    ],
  },
  {
    slug: "radiology",
    title: "قسم الأشعة",
    description: "تصوير تشخيصي رقمي يدعم القرار الطبي بنتائج واضحة وسريعة.",
    image: radiologyImg,
    icon: "scan",
    category: "diagnostics",
    sections: [
      {
        title: "أشعة بسيطة",
        description: "تصوير شعاعي رقمي للعظام والصدر والحالات اليومية.",
        image: radiologyImg,
      },
      {
        title: "بانوراما",
        description: "تصوير بانورامي للفكين والأسنان لدعم التشخيص السني والجراحي.",
        image: hospital,
      },
      {
        title: "طبقي محوري",
        description: "تصوير مقطعي محوري دقيق لتقييم الحالات المعقدة والأعضاء الداخلية.",
        image: radiologyImg,
      },
    ],
  },
  {
    slug: "lab",
    title: "قسم المخبر",
    description: "تحاليل مخبرية موثوقة تغطي الفحوصات الدموية والكيميائية والهرمونية.",
    image: hospital,
    icon: "lab",
    category: "diagnostics",
    sections: [
      {
        title: "دموي",
        description: "فحوصات الدم الشاملة وتعداد الكريات ومتابعة اضطرابات الدم.",
        image: hospital,
      },
      {
        title: "كيميائي",
        description: "تحاليل كيميائية حيوية للكبد والكلى والسكر والشحوم.",
        image: radiologyImg,
      },
      {
        title: "هرموني",
        description: "قياس الهرمونات لدعم تشخيص الغدد والاستقلاب.",
        image: hospital,
      },
    ],
  },
  {
    slug: "obstetrics",
    title: "قسم التوليد",
    description:
      "رعاية متكاملة للحمل والولادة والجراحة النسائية من الإسعاف حتى العيادة.",
    image: hospital,
    icon: "obstetrics",
    category: "clinics",
    sections: [
      {
        title: "إسعاف",
        description: "استقبال الحالات النسائية والتوليدية العاجلة على مدار الساعة.",
        image: hospital,
      },
      {
        title: "مراقبة",
        description: "مراقبة الحوامل والجنين قبل الولادة وفي أثناء المخاض.",
        image: radiologyImg,
      },
      {
        title: "ولادة طبيعية",
        description: "ولادة طبيعية بإشراف طبي وتمريض متخصص مع دعم الأم والوليد.",
        image: hospital,
      },
      {
        title: "قيصرية",
        description: "عمليات قيصرية وفق معايير السلامة مع تجهيز غرف العمليات.",
        image: cathImg,
      },
      {
        title: "عمليات نسائية",
        description: "إجراءات جراحية نسائية علاجية وتشخيصية حسب الحالة.",
        image: hospital,
      },
      {
        title: "عيادة الأمراض النسائية",
        description: "كشف ومتابعة الأمراض النسائية وصحة المرأة خارج حالات الولادة.",
        image: eyeImg,
      },
    ],
  },
  {
    slug: "clinics",
    title: "قسم العيادات",
    description:
      "عيادات تخصصية تغطي الباطنة والجراحة وطب الأطفال والجلدية وبقية الفروع الطبية.",
    image: eyeImg,
    icon: "clinics",
    category: "clinics",
    sections: [
      {
        title: "أطفال",
        description: "عيادة طب الأطفال لمتابعة النمو والأمراض الشائعة واللقاحات.",
        image: hospital,
      },
      {
        title: "داخلية عامة",
        description: "تقييم وعلاج الأمراض الباطنية العامة والمتابعة المزمنة.",
        image: radiologyImg,
      },
      {
        title: "داخلية غدد صم",
        description: "تشخيص ومتابعة أمراض الغدد والسكري واضطرابات الهرمونات.",
        image: hospital,
      },
      {
        title: "داخلية أورام",
        description: "متابعة الأورام الباطنية والتنسيق مع الفريق العلاجي.",
        image: cathImg,
      },
      {
        title: "داخلية أمراض دم",
        description: "رعاية أمراض الدم وفقر الدم واضطرابات التخثر.",
        image: hospital,
      },
      {
        title: "داخلية أمراض مناعة ورثوية ومفاصل",
        description: "علاج أمراض المناعة والرثوية والمفاصل والالتهابات المزمنة.",
        image: eyeImg,
      },
      {
        title: "داخلية قلبية",
        description: "كشف أمراض القلب والضغط واضطرابات النظم والمتابعة القلبية.",
        image: cathImg,
      },
      {
        title: "داخلية عصبية",
        description: "تقييم الصداع والسكتات والصرع وأمراض الأعصاب.",
        image: radiologyImg,
      },
      {
        title: "داخلية صدرية",
        description: "علاج أمراض الرئة والربو والالتهابات الصدرية.",
        image: hospital,
      },
      {
        title: "داخلية كلية",
        description: "متابعة وظائف الكلى وارتفاع الضغط والأمراض الكلوية.",
        image: radiologyImg,
      },
      {
        title: "داخلية هضمية",
        description: "تشخيص أمراض المعدة والكبد والأمعاء والجهاز الهضمي.",
        image: hospital,
      },
      {
        title: "جلدية",
        description: "علاج أمراض الجلد والحساسية والإصابات الجلدية.",
        image: eyeImg,
      },
      {
        title: "جراحة عامة",
        description: "كشف جراحي عام وتحضير العمليات ومتابعة ما بعد الجراحة.",
        image: hospital,
      },
      {
        title: "جراحة أطفال",
        description: "تقييم الحالات الجراحية لدى الأطفال وتخطيط العلاج المناسب.",
        image: radiologyImg,
      },
      {
        title: "جراحة عينية",
        description: "عيادة جراحة العيون لفحص البصر والحالات التي تحتاج تدخلاً جراحياً.",
        image: eyeImg,
      },
      {
        title: "جراحة أذنية",
        description: "علاج أمراض الأذن والأنف والحنجرة والحالات الجراحية المرتبطة بها.",
        image: hospital,
      },
      {
        title: "جراحة بولية",
        description: "كشف أمراض الجهاز البولي والحصيات والمسالك البولية.",
        image: radiologyImg,
      },
      {
        title: "جراحة أورام",
        description: "تقييم الأورام الجراحية ووضع خطة الاستئصال أو المتابعة.",
        image: cathImg,
      },
      {
        title: "جراحة عصبية",
        description: "عيادة جراحة الدماغ والأعصاب والعمود الفقري.",
        image: hospital,
      },
      {
        title: "جراحة تجميلية",
        description: "استشارات الجراحة التجميلية والترميمية حسب الحالة.",
        image: eyeImg,
      },
      {
        title: "جراحة قلبية",
        description: "تقييم الحالات القلبية التي قد تحتاج تدخلاً جراحياً.",
        image: cathImg,
      },
      {
        title: "جراحة عظمية",
        description: "علاج الكسور والمفاصل والإصابات العظمية.",
        image: hospital,
      },
      {
        title: "جراحة وعائية",
        description: "كشف أمراض الشرايين والأوردة والدوالي.",
        image: radiologyImg,
      },
      {
        title: "جراحة فكية وسنية (رجال ونساء)",
        description: "جراحة الفكين والأسنان بمسارين للرجال والنساء.",
        image: eyeImg,
      },
    ],
  },
  {
    slug: "surgery",
    title: "قسم العمليات الجراحية",
    description: "غرف عمليات مجهّزة للجراحة العامة والإجراءات التنظيرية بمعايير سلامة عالية.",
    image: hospital,
    icon: "surgery",
    category: "care",
    sections: [
      {
        title: "جراحة عامة",
        description: "عمليات الجراحة العامة بإشراف كادر متخصص وتجهيز كامل لغرف العمليات.",
        image: hospital,
      },
      {
        title: "العمليات التنظيرية",
        description: "جراحة تنظيرية بأقل تدخل ممكن لتعافٍ أسرع وإقامة أقصر.",
        image: radiologyImg,
      },
    ],
  },
  {
    slug: "inpatient",
    title: "جناح الإقامة والاستشفاء",
    description: "أجنحة إقامة مريحة ومنفصلة للرجال والنساء والأطفال خلال فترة الاستشفاء.",
    image: hospital,
    icon: "inpatient",
    category: "care",
    sections: [
      {
        title: "رجال",
        description: "غرف إقامة للرجال مع متابعة تمريضية وطبية مستمرة.",
        image: hospital,
      },
      {
        title: "نساء",
        description: "جناح إقامة للنساء يراعي الخصوصية وراحة المريضة.",
        image: radiologyImg,
      },
      {
        title: "أطفال",
        description: "إقامة مهيأة للأطفال مع مراقبة لصيقة ودعم الأهل.",
        image: hospital,
      },
    ],
  },
  {
    slug: "nicu",
    title: "قسم الحواضن",
    description: "رعاية حديثي الولادة في حواضن مجهّزة لمتابعة الخدّج والحالات التي تحتاج مراقبة دقيقة.",
    image: hospital,
    icon: "child",
    category: "critical",
    sections: [],
  },
  {
    slug: "icu",
    title: "وحدة العناية المشددة",
    description: "عناية مشددة متخصصة للحالات القلبية والداخلية والجراحية والأطفال.",
    image: cathImg,
    icon: "icu",
    category: "critical",
    sections: [
      {
        title: "قلبية",
        description: "عناية مشددة لمرضى القلب واضطرابات النظم والحالات الإقفارية.",
        image: cathImg,
      },
      {
        title: "داخلية",
        description: "مراقبة مكثفة للحالات الباطنية الحرجة والفشل العضوي.",
        image: hospital,
      },
      {
        title: "جراحية",
        description: "عناية بعد العمليات الكبرى وللحالات الجراحية غير المستقرة.",
        image: radiologyImg,
      },
      {
        title: "أطفال",
        description: "عناية مشددة للأطفال والرضع الذين يحتاجون دعماً تنفسياً أو دوائياً دقيقاً.",
        image: hospital,
      },
    ],
  },
  {
    slug: "catheterization",
    title: "وحدة القثطرة القلبية",
    description: "قثطرة قلبية للتشخيص وتوسيع الشرايين وتركيب الشبكات بإشراف فريق متخصص.",
    image: cathImg,
    icon: "heart",
    category: "diagnostics",
    sections: [
      {
        title: "تشخيص",
        description: "قثطرة تشخيصية لتصوير الشرايين التاجية وتحديد موضع التضيق.",
        image: cathImg,
      },
      {
        title: "توسيع",
        description: "توسيع الشرايين المتضيقة عبر القثطرة العلاجية.",
        image: hospital,
      },
      {
        title: "شبكات",
        description: "تركيب الشبكات القلبية عند الحاجة لاستعادة تدفق الدم.",
        image: cathImg,
      },
    ],
  },
  {
    slug: "pharmacy",
    title: "قسم الصيدلية",
    description: "صرف الأدوية للمرضى الداخليين والمراجعين وفق الوصفات الطبية المعتمدة في المشفى.",
    image: hospital,
    icon: "pharmacy",
    category: "care",
    sections: [],
  },
  {
    slug: "cosmetics",
    title: "قسم التجميل",
    description: "خدمات التجميل الطبي ستكون متاحة قريباً ضمن مستشفى الأموي.",
    image: eyeImg,
    icon: "cosmetics",
    category: "care",
    comingSoon: true,
    sections: [],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
