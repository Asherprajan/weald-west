import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { ShieldCheck, Leaf, Users } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <SectionLabel>Our Promise</SectionLabel>
          <SectionTitle className="!mb-8">Sustainability Is Our Strength. Quality Is Our Promise.</SectionTitle>
          <div className="font-cormorant text-[1.15rem] leading-[1.85] text-[#3a3a3a] space-y-6">
            <p>
              At Weald West, we believe that the journey of excellence begins with respect for the land and those who cultivate it. We practice eco-conscious sourcing and support ethical trade partnerships, ensuring every step of our supply chain strengthens communities and protects nature.
            </p>
            <p>
              Our products undergo meticulous grading, sorting, and testing to meet global standards of purity and freshness. From soil to shipment, we uphold the promise of authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-green mb-3" strokeWidth={1} />
              <span className="font-lato text-[0.65rem] tracking-widest uppercase font-bold text-muted">Quality Grading</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Leaf className="w-10 h-10 text-green mb-3" strokeWidth={1} />
              <span className="font-lato text-[0.65rem] tracking-widest uppercase font-bold text-muted">Eco Sourcing</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-green mb-3" strokeWidth={1} />
              <span className="font-lato text-[0.65rem] tracking-widest uppercase font-bold text-muted">Ethical Trade</span>
            </div>
          </div>
        </div>
        
        <div 
          className="order-1 md:order-2 aspect-[4/5] bg-cover bg-center rounded-[2px]"
          style={{ backgroundImage: "url('/sus.png')" }}
        ></div>
      </div>
    </section>
  );
}
