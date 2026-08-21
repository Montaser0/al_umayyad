import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "../components/about/page";
import WhyUs from "../components/WhyUs/page";
import Products from "../components/products/page";
import Questions from "../components/questions/page";
import HospitalMap from "../components/map/page";
import Footer from "../components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral">
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
