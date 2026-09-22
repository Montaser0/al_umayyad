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

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: ServiceIcon;
  comingSoon?: boolean;
  sections: ServiceSection[];
};

const hospital = "/hospital.PNG";

export const services: Service[] = [
  {
    slug: "emergency",
    title: "قسم الإسعاف",
    description:
      "استقبال الحالات الإسعافية على مدار الساعة مع مسارات منفصلة للرجال والنساء والأطفال.",
    image: hospital,
    icon: "emergency",
    sections: [
      {
        title: "رجال",
        description: "رعاية إسعافية للرجال مع فرز سريع وتدخل فوري للحالات الحرجة.",
        image: hospital,
      },
      {
        title: "نساء",
        description: "مسار إسعافي مخصص للنساء يضمن الخصوصية والرعاية العاجلة.",
        image: hospital,
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
    image: hospital,
    icon: "scan",
    sections: [
      {
        title: "أشعة بسيطة",
        description: "تصوير شعاعي رقمي للعظام والصدر والحالات اليومية.",
        image: hospital,
      },
      {
        title: "بانوراما",
        description: "تصوير بانورامي للفكين والأسنان لدعم التشخيص السني والجراحي.",
        image: hospital,
      },
      {
        title: "طبقي محوري",
        description: "تصوير مقطعي محوري دقيق لتقييم الحالات المعقدة والأعضاء الداخلية.",
        image: hospital,
      },
    ],
  },
  {
    slug: "lab",
    title: "قسم المخبر",
    description: "تحاليل مخبرية موثوقة تغطي الفحوصات الدموية والكيميائية والهرمونية.",
    image: hospital,
    icon: "lab",
    sections: [
      {
        title: "دموي",
        description: "فحوصات الدم الشاملة وتعداد الكريات ومتابعة اضطرابات الدم.",
        image: hospital,
      },
      {
        title: "كيميائي",
        description: "تحاليل كيميائية حيوية للكبد والكلى والسكر والشحوم.",
        image: hospital,
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
    sections: [
      {
        title: "إسعاف",
        description: "استقبال الحالات النسائية والتوليدية العاجلة على مدار الساعة.",
        image: hospital,
      },
      {
        title: "مراقبة",
        description: "مراقبة الحوامل والجنين قبل الولادة وفي أثناء المخاض.",
        image: hospital,
      },
      {
        title: "ولادة طبيعية",
        description: "ولادة طبيعية بإشراف طبي وتمريض متخصص مع دعم الأم والوليد.",
        image: hospital,
      },
      {
        title: "قيصرية",
        description: "عمليات قيصرية وفق معايير السلامة مع تجهيز غرف العمليات.",
        image: hospital,
      },
      {
        title: "عمليات نسائية",
        description: "إجراءات جراحية نسائية علاجية وتشخيصية حسب الحالة.",
        image: hospital,
      },
      {
        title: "عيادة الأمراض النسائية",
        description: "كشف ومتابعة الأمراض النسائية وصحة المرأة خارج حالات الولادة.",
        image: hospital,
      },
    ],
  },
  {
    slug: "clinics",
    title: "قسم العيادات",
    description:
      "عيادات تخصصية تغطي الباطنة والجراحة وطب الأطفال والجلدية وبقية الفروع الطبية.",
    image: hospital,
    icon: "clinics",
    sections: [
      {
        title: "أطفال",
        description: "عيادة طب الأطفال لمتابعة النمو والأمراض الشائعة واللقاحات.",
        image: hospital,
      },
      {
        title: "داخلية عامة",
        description: "تقييم وعلاج الأمراض الباطنية العامة والمتابعة المزمنة.",
        image: hospital,
      },
      {
        title: "داخلية غدد صم",
        description: "تشخيص ومتابعة أمراض الغدد والسكري واضطرابات الهرمونات.",
        image: hospital,
      },
      {
        title: "داخلية أورام",
        description: "متابعة الأورام الباطنية والتنسيق مع الفريق العلاجي.",
        image: hospital,
      },
      {
        title: "داخلية أمراض دم",
        description: "رعاية أمراض الدم وفقر الدم واضطرابات التخثر.",
        image: hospital,
      },
      {
        title: "داخلية أمراض مناعة ورثوية ومفاصل",
        description: "علاج أمراض المناعة والرثوية والمفاصل والالتهابات المزمنة.",
        image: hospital,
      },
      {
        title: "داخلية قلبية",
        description: "كشف أمراض القلب والضغط واضطرابات النظم والمتابعة القلبية.",
        image: hospital,
      },
      {
        title: "داخلية عصبية",
        description: "تقييم الصداع والسكتات والصرع وأمراض الأعصاب.",
        image: hospital,
      },
      {
        title: "داخلية صدرية",
        description: "علاج أمراض الرئة والربو والالتهابات الصدرية.",
        image: hospital,
      },
      {
        title: "داخلية كلية",
        description: "متابعة وظائف الكلى وارتفاع الضغط والأمراض الكلوية.",
        image: hospital,
      },
      {
        title: "داخلية هضمية",
        description: "تشخيص أمراض المعدة والكبد والأمعاء والجهاز الهضمي.",
        image: hospital,
      },
      {
        title: "جلدية",
        description: "علاج أمراض الجلد والحساسية والإصابات الجلدية.",
        image: hospital,
      },
      {
        title: "جراحة عامة",
        description: "كشف جراحي عام وتحضير العمليات ومتابعة ما بعد الجراحة.",
        image: hospital,
      },
      {
        title: "جراحة أطفال",
        description: "تقييم الحالات الجراحية لدى الأطفال وتخطيط العلاج المناسب.",
        image: hospital,
      },
      {
        title: "جراحة عينية",
        description: "عيادة جراحة العيون لفحص البصر والحالات التي تحتاج تدخلاً جراحياً.",
        image: hospital,
      },
      {
        title: "جراحة أذنية",
        description: "علاج أمراض الأذن والأنف والحنجرة والحالات الجراحية المرتبطة بها.",
        image: hospital,
      },
      {
        title: "جراحة بولية",
        description: "كشف أمراض الجهاز البولي والحصيات والمسالك البولية.",
        image: hospital,
      },
      {
        title: "جراحة أورام",
        description: "تقييم الأورام الجراحية ووضع خطة الاستئصال أو المتابعة.",
        image: hospital,
      },
      {
        title: "جراحة عصبية",
        description: "عيادة جراحة الدماغ والأعصاب والعمود الفقري.",
        image: hospital,
      },
      {
        title: "جراحة تجميلية",
        description: "استشارات الجراحة التجميلية والترميمية حسب الحالة.",
        image: hospital,
      },
      {
        title: "جراحة قلبية",
        description: "تقييم الحالات القلبية التي قد تحتاج تدخلاً جراحياً.",
        image: hospital,
      },
      {
        title: "جراحة عظمية",
        description: "علاج الكسور والمفاصل والإصابات العظمية.",
        image: hospital,
      },
      {
        title: "جراحة وعائية",
        description: "كشف أمراض الشرايين والأوردة والدوالي.",
        image: hospital,
      },
      {
        title: "جراحة فكية وسنية (رجال ونساء)",
        description: "جراحة الفكين والأسنان بمسارين للرجال والنساء.",
        image: hospital,
      },
    ],
  },
  {
    slug: "surgery",
    title: "قسم العمليات الجراحية",
    description: "غرف عمليات مجهّزة للجراحة العامة والإجراءات التنظيرية بمعايير سلامة عالية.",
    image: hospital,
    icon: "surgery",
    sections: [
      {
        title: "جراحة عامة",
        description: "عمليات الجراحة العامة بإشراف كادر متخصص وتجهيز كامل لغرف العمليات.",
        image: hospital,
      },
      {
        title: "العمليات التنظيرية",
        description: "جراحة تنظيرية بأقل تدخل ممكن لتعافٍ أسرع وإقامة أقصر.",
        image: hospital,
      },
    ],
  },
  {
    slug: "inpatient",
    title: "جناح الإقامة والاستشفاء",
    description: "أجنحة إقامة مريحة ومنفصلة للرجال والنساء والأطفال خلال فترة الاستشفاء.",
    image: hospital,
    icon: "inpatient",
    sections: [
      {
        title: "رجال",
        description: "غرف إقامة للرجال مع متابعة تمريضية وطبية مستمرة.",
        image: hospital,
      },
      {
        title: "نساء",
        description: "جناح إقامة للنساء يراعي الخصوصية وراحة المريضة.",
        image: hospital,
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
    sections: [],
  },
  {
    slug: "icu",
    title: "وحدة العناية المشددة",
    description: "عناية مشددة متخصصة للحالات القلبية والداخلية والجراحية والأطفال.",
    image: hospital,
    icon: "icu",
    sections: [
      {
        title: "قلبية",
        description: "عناية مشددة لمرضى القلب واضطرابات النظم والحالات الإقفارية.",
        image: hospital,
      },
      {
        title: "داخلية",
        description: "مراقبة مكثفة للحالات الباطنية الحرجة والفشل العضوي.",
        image: hospital,
      },
      {
        title: "جراحية",
        description: "عناية بعد العمليات الكبرى وللحالات الجراحية غير المستقرة.",
        image: hospital,
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
    image: hospital,
    icon: "heart",
    sections: [
      {
        title: "تشخيص",
        description: "قثطرة تشخيصية لتصوير الشرايين التاجية وتحديد موضع التضيق.",
        image: hospital,
      },
      {
        title: "توسيع",
        description: "توسيع الشرايين المتضيقة عبر القثطرة العلاجية.",
        image: hospital,
      },
      {
        title: "شبكات",
        description: "تركيب الشبكات القلبية عند الحاجة لاستعادة تدفق الدم.",
        image: hospital,
      },
    ],
  },
  {
    slug: "pharmacy",
    title: "قسم الصيدلية",
    description: "صرف الأدوية للمرضى الداخليين والمراجعين وفق الوصفات الطبية المعتمدة في المشفى.",
    image: hospital,
    icon: "pharmacy",
    sections: [],
  },
  {
    slug: "cosmetics",
    title: "قسم التجميل",
    description: "خدمات التجميل الطبي ستكون متاحة قريباً ضمن مستشفى الأموي.",
    image: hospital,
    icon: "cosmetics",
    comingSoon: true,
    sections: [],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
