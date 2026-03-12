import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { Globe, Ship, Zap } from "lucide-react";

export default function GlobalReachMap() {
  return (
    <section className="bg-green-dark py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,71,47,0.4)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionLabel className="!text-cream-dark">Expanding Horizons</SectionLabel>
          <SectionTitle className="!text-cream-light !mb-6">Connecting Wayanad to the World.</SectionTitle>
          <p className="font-cormorant text-[1.15rem] text-cream opacity-70 max-w-2xl mx-auto italic">
            From the lush plantations of Kerala to distribution centers across Europe, the Middle East, and North America.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <div className="bg-green/40 p-10 border border-cream/20 rounded-[2px] transition-all duration-300 hover:bg-green/60 hover:border-cream/40">
            <Globe className="w-12 h-12 text-cream mb-8 opacity-90" strokeWidth={1} />
            <h3 className="font-playfair text-[1.5rem] text-white mb-4 font-semibold text-left">Global Legacy</h3>
            <p className="font-cormorant text-[1.15rem] text-cream-light leading-relaxed text-left opacity-90">
              Building a name recognized for quality and trust in international spice and coffee trade, exported from the heart of Wayanad.
            </p>
          </div>
          
          <div className="bg-green/40 p-10 border border-cream/20 rounded-[2px] transition-all duration-300 hover:bg-green/60 hover:border-cream/40">
            <Ship className="w-12 h-12 text-cream mb-8 opacity-90" strokeWidth={1} />
            <h3 className="font-playfair text-[1.5rem] text-white mb-4 font-semibold text-left">Efficient Logistics</h3>
            <p className="font-cormorant text-[1.15rem] text-cream-light leading-relaxed text-left opacity-90">
              Temperature-controlled global delivery ensuring every single harvest maintains its peak freshness and flavor integrity.
            </p>
          </div>
          
          <div className="bg-green/40 p-10 border border-cream/20 rounded-[2px] transition-all duration-300 hover:bg-green/60 hover:border-cream/40">
            <Zap className="w-12 h-12 text-cream mb-8 opacity-90" strokeWidth={1} />
            <h3 className="font-playfair text-[1.5rem] text-white mb-4 font-semibold text-left">Strategic Partnerships</h3>
            <p className="font-cormorant text-[1.15rem] text-cream-light leading-relaxed text-left opacity-90">
              Collaborating with prestigious brands and importers who share our dedication to excellence and ethical trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
