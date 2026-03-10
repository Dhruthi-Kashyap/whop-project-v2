import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import TemplateCard from "@/components/organisms/TemplateCard";
import Footer from "@/components/organisms/Footer";
import StartSellingCard from "@/components/organisms/StartSellingCard";
import CaseStudyCard from "@/components/organisms/CaseStudyCard";
import CustomersIntro from "@/components/organisms/CustomersIntro";
import AccountManagement from "@/components/organisms/AccountManagement";
import TeamAndSupport from "@/components/organisms/TeamAndSupport";
import DeveloperSection from "@/components/organisms/DeveloperSection";
import ApiIntegrationCard from "@/components/organisms/ApiIntegrationCard";
import MoneySection from "@/components/organisms/MoneySection";
import DeveloperCardsSection from "@/components/organisms/DeveloperCardsSection";
// import DeveloperServiceCard from "@/components/organisms/DeveloperServiceCard";
// import MarketplaceShowcase from "@/components/organisms/MarketplaceShowcase";
// import StockDadsCard from "@/components/organisms/StockDadsCard";

export default function Home() {
  return (
  <main className="min-h-screen bg-black text-white flex justify-center">
  <div className="w-full max-w-[1200px]">
    <Navbar />
      <HeroSection />
      <br />
      <br />
      <TemplateCard />
      <DeveloperCardsSection />
      {/* <ApiIntegrationCard /> */}
      {/* <DeveloperServiceCard /> */}
      {/* <MarketplaceShowcase/> */}
      <MoneySection />
      <DeveloperSection />
      <br />
      <br />
      <TeamAndSupport />
      <AccountManagement />
      <CustomersIntro />
      <CaseStudyCard
        title="Beat the Books"
        description="Beat the Books is a premium sports betting community. Members get access to a thriving community and premium sports picks!"
        date="April 12, 2023"
        members="13,000+"
        image="/beatthebooks.png"
        imageLeft={false}
      />
      <CaseStudyCard
        title="Stock Dads"
        description="StockDads is a trading community that provides accessible education, resources, and support that can positively impact the financial well-being of future generations."
        date="May 10, 2023"
        members="2,200+"
        image="/stockdads.png"
        imageLeft={true}
      />
      <CaseStudyCard
        title="GFNF"
        description="GFNF is a premium reselling community that offers exclusive alerts, tools, and educational materials to help members make a profit reselling."
        date="February 15, 2023"
        members="2,000+"
        image="/gfnf.png"
        imageLeft={false}
      />
      <br /> 
      <StartSellingCard />
      <br />
      <Footer />
      <br />
  </div>
</main>
     
  );
}