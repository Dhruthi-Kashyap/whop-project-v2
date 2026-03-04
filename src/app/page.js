import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import TemplateCard from "@/components/organisms/TemplateCard";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <br />
      <br />
      <TemplateCard />
      <br />
      <br />
      <Footer />
      <br />
    </main>
  );
}