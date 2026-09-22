import type { Metadata } from "next";
import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "../components/about/page";
import WhyUs from "../components/WhyUs/page";
import Products from "../components/products/page";
import Questions from "../components/questions/page";
import HospitalMap from "../components/map/page";
import Footer from "../components/footer/page";
import { JsonLd, faqJsonLd } from "../lib/json-ld";
import { siteDescription, siteKeywords, siteTitle } from "../lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral">
      <JsonLd data={faqJsonLd()} />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Questions />
      <HospitalMap />
      <Footer />
    </main>
  );
}
