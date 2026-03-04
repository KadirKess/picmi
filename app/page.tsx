import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectionSection from "@/components/SelectionSection";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-transition">
      <Navbar />
      <Hero />
      <Marquee />
      <Testimonials />
      <SelectionSection />
      <Footer showMainCta={true} />
    </main>
  );
}
