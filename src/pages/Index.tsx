import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import NumbersBar from "@/components/NumbersBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import CtaSection from "@/components/CtaSection";
import SiteFooter from "@/components/SiteFooter";
import Preloader from "@/components/Preloader";

const Index = () => (
  <>
    <Preloader />

    <SiteHeader />
    <main>
      <HeroSection />
      <NumbersBar />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
