import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "../components/about/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f8fc]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
