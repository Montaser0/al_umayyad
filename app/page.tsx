import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "../components/about/page";
import Products from "../components/products/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral">
      <Navbar />
      <Hero />
      <About />
      <Products />
    </main>
  );
}
