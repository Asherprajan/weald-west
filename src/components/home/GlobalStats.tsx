import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { number: "150+", label: "Partner Farms" },
  { number: "25+", label: "Global Destinations" },
  { number: "100%", label: "Traceable Produce" },
];

export default function GlobalStats() {
  return (
    <section className="bg-green-dark py-[5.5rem] px-8 text-center relative overflow-hidden">
      {/* Background radial gradient equivalent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(36,71,47,0.55)_0%,transparent_70%)] opacity-80 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionLabel className="!text-cream-dark">Our Reach</SectionLabel>
        <h2 className="font-playfair text-[clamp(1.7rem,3vw,2.5rem)] text-cream-light mb-4 font-semibold">
          A Global Community
        </h2>
        <p className="font-cormorant text-[1.15rem] text-cream opacity-70 mb-[2.5rem] italic">
          From the deep woods of the Pacific Northwest to hands across the world.
        </p>
        
        <div className="flex justify-center gap-[5rem] flex-wrap mt-12 relative z-[1]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-playfair text-[3.2rem] text-cream font-bold block leading-none">
                {stat.number}
              </span>
              <span className="font-lato text-[0.72rem] tracking-[0.22em] uppercase text-cream-dark mt-[0.4rem] block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
