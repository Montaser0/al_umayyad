export type ServiceSection = {
  title: string;
  description: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: "science" | "heart" | "eye" | "scan" | "emergency" | "surgery" | "lab" | "child";
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "mri",
    title: "الرنين المغناطيسي",
    description:
      "تصوير دقيق للأعضاء والأنسجة بأجهزة رنين حديثة تساعد على التشخيص المبكر ووضع خطة علاج واضحة.",
    image: "/hospital.PNG",
    icon: "science",
    sections: [
      {
        title: "رنين الدماغ",
        description: "تصوير الدماغ والأعصاب لتشخيص الأورام والسكتات والاضطرابات العصبية.",
        image: "/hospital.PNG",
      },
      {
        title: "رنين العمود الفقري",
        description: "تقييم الفقرات والأقراص والأعصاب بدقة عالية.",
        image: "/hero.jpg",
      },
      {
        title: "رنين المفاصل",
        description: "فحص الركبة والكتف والورك لتحديد الإصابات والالتهابات.",
        image: "/hospital.PNG",
      },
      {
        title: "رنين البطن والحوض",
        description: "تصوير الأعضاء الداخلية لدعم التشخيص الجراحي والباطني.",
        image: "/hero.jpg",
      },
    ],
  },
  {
    slug: "catheterization",
    title: "القثطرة القلبية",
    description:
      "تشخيص وعلاج أمراض القلب والشرايين عبر قثطرة متقدمة بإشراف كادر استشاري متخصص.",
    image: "/hero.jpg",
    icon: "heart",
    sections: [
      {
        title: "قثطرة تشخيصية",
        description: "تصوير الشرايين التاجية لتحديد موضع الانسداد أو التضيق.",
        image: "/hero.jpg",
      },
      {
        title: "قثطرة علاجية",
        description: "توسيع الشرايين وتركيب الدعامات عند الحاجة.",
        image: "/hospital.PNG",
      },
      {
        title: "قثطرة الشرايين التاجية",
        description: "إجراء متخصص لعلاج أمراض القلب الإقفارية.",
        image: "/hero.jpg",
      },
      {
        title: "متابعة ما بعد القثطرة",
        description: "برنامج متابعة طبية لضمان استقرار الحالة والوقاية من المضاعفات.",
        image: "/hospital.PNG",
      },
    ],
  },
  {
    slug: "ophthalmology",
    title: "طب العيون",
    description:
      "فحص وعلاج أمراض العين والرؤية، مع إمكانيات جراحية وتشخيصية حديثة للحفاظ على سلامة البصر.",
    image: "/hospital.PNG",
    icon: "eye",
    sections: [
      {
        title: "فحص النظر",
        description: "تقييم شامل للرؤية وضغط العين وشبكية العين.",
        image: "/hospital.PNG",
      },
      {
        title: "جراحة الساد",
        description: "إزالة المياه البيضاء بعدسات حديثة واستعادة وضوح الرؤية.",
        image: "/hero.jpg",
      },
      {
        title: "علاج الشبكية",
        description: "متابعة اعتلال الشبكية وعلاجات الليزر عند الحاجة.",
        image: "/hospital.PNG",
      },
      {
        title: "تصحيح البصر",
        description: "خيارات علاجية لتحسين حدة الإبصار وفق حالة المريض.",
        image: "/hero.jpg",
      },
    ],
  },
  {
    slug: "radiology",
    title: "الأشعة التشخيصية",
    description: "خدمات أشعة رقمية وتصوير مقطعي توفّر نتائج سريعة ودقيقة لدعم القرار الطبي.",
    image: "/hero.jpg",
    icon: "scan",
    sections: [
      {
        title: "الأشعة السينية",
        description: "تصوير العظام والصدر بسرعة ودقة رقمية.",
        image: "/hero.jpg",
      },
      {
        title: "التصوير المقطعي",
        description: "مقاطع ثلاثية الأبعاد للأعضاء لتقييم الحالات المعقدة.",
        image: "/hospital.PNG",
      },
      {
        title: "الأمواج فوق الصوتية",
        description: "فحص الأنسجة الرخوة والبطن والحوامل بدون إشعاع.",
        image: "/hero.jpg",
      },
    ],
  },
  {
    slug: "emergency",
    title: "الطوارئ والإسعاف",
    description: "قسم طوارئ يعمل على مدار الساعة لاستقبال الحالات الحرجة وتقديم الإسعاف الأولي فوراً.",
    image: "/hospital.PNG",
    icon: "emergency",
    sections: [
      {
        title: "الاستقبال الإسعافي",
        description: "فرز الحالات وتقديم التدخل الأولي خلال دقائق.",
        image: "/hospital.PNG",
      },
      {
        title: "الإنعاش",
        description: "وحدة جاهزة للتعامل مع توقف القلب والتنفس.",
        image: "/hero.jpg",
      },
      {
        title: "إصابات الحوادث",
        description: "رعاية متخصصة للكسور والإصابات المتعددة.",
        image: "/hospital.PNG",
      },
    ],
  },
  {
    slug: "surgery",
    title: "الجراحة العامة",
    description:
      "عمليات جراحية بمعايير سلامة عالية وغرف عمليات مجهّزة وتقنيات حديثة تقلل فترة التعافي.",
    image: "/hero.jpg",
    icon: "surgery",
    sections: [
      {
        title: "جراحة البطن",
        description: "إجراءات جراحية للزائدة والمرارة والفتق بأمان عالٍ.",
        image: "/hero.jpg",
      },
      {
        title: "الجراحة التنظيرية",
        description: "عمليات بأقل تدخل جراحي لتعافٍ أسرع.",
        image: "/hospital.PNG",
      },
      {
        title: "جراحة اليوم الواحد",
        description: "إجراءات مختارة دون الحاجة إلى تنويم طويل.",
        image: "/hero.jpg",
      },
    ],
  },
  {
    slug: "lab",
    title: "المختبر والتحاليل",
    description: "تحاليل مخبرية شاملة بنتائج موثوقة لدعم التشخيص والمتابعة الطبية اليومية.",
    image: "/hospital.PNG",
    icon: "lab",
    sections: [
      {
        title: "تحاليل الدم",
        description: "فحوصات الدم الشاملة والكيمياء الحيوية.",
        image: "/hospital.PNG",
      },
      {
        title: "الهرمونات",
        description: "قياس الهرمونات لدعم تشخيص الغدد والاستقلاب.",
        image: "/hero.jpg",
      },
      {
        title: "الأحياء الدقيقة",
        description: "زرع الجراثيم وتحديد الحساسية للمضادات.",
        image: "/hospital.PNG",
      },
    ],
  },
  {
    slug: "pediatrics",
    title: "طب الأطفال",
    description: "رعاية متخصصة للرضع والأطفال، من الفحص الدوري إلى علاج الحالات الحادة والمزمنة.",
    image: "/hero.jpg",
    icon: "child",
    sections: [
      {
        title: "عيادة الأطفال العامة",
        description: "متابعة النمو والتطعيمات والأمراض الشائعة.",
        image: "/hero.jpg",
      },
      {
        title: "حديثو الولادة",
        description: "رعاية الرضع بعد الولادة ومتابعة صحتهم المبكرة.",
        image: "/hospital.PNG",
      },
      {
        title: "طوارئ الأطفال",
        description: "استقبال الحالات الحادة لدى الأطفال على مدار الساعة.",
        image: "/hero.jpg",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
