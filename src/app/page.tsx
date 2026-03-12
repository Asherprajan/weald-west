import HeroSlider from "@/components/home/HeroSlider";
import ProductsGrid from "@/components/home/ProductsGrid";
import ValuesStrip from "@/components/home/ValuesStrip";
import GlobalStats from "@/components/home/GlobalStats";
import AboutSplit from "@/components/home/AboutSplit";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import GlobalReachMap from "@/components/home/GlobalReachMap";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ValuesStrip />
      <ProductsGrid />
      <SustainabilitySection />
      <GlobalStats />
      <AboutSplit />
      <GlobalReachMap />
    </>
  );
}
