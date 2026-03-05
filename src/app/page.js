import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import TemplateCard from "@/components/organisms/TemplateCard";
import Footer from "@/components/organisms/Footer";
import StartSellingCard from "@/components/organisms/StartSellingCard";
import CaseStudyCard from "@/components/organisms/CaseStudyCard";

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
      <CaseStudyCard />
      <br />
      <StartSellingCard />
      <br />
      <Footer />
      <br />
    </main>
  );
}