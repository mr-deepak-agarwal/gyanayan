import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainRegister from "@/components/PainRegister";
import ProductShowcase from "@/components/ProductShowcase";
import Founders from "@/components/Founders";
import DemoSection from "@/components/DemoSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-chalk-noise">
      <Header />
      <Hero />
      <PainRegister />
      <ProductShowcase />
      <Founders />
      <DemoSection />
      <SiteFooter />
    </main>
  );
}
