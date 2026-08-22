import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  description: "الصفحة المطلوبة غير موجودة في موقع مستشفى الأموي.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section dir="rtl" className="mx-auto max-w-xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">الصفحة غير موجودة</h1>
        <p className="mt-4 text-foreground/60">
          عذراً، لم نجد الصفحة التي تبحث عنها. يمكنك العودة إلى الصفحة الرئيسية.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background hover:bg-primary/90"
        >
          العودة للرئيسية
        </Link>
      </section>
      <Footer />
    </main>
  );
}
