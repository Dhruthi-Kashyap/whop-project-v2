import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
    </main>
  );
}