import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function AboutSplit() {
  return (
    <section className="flex flex-col md:flex-row items-stretch min-h-[520px] overflow-hidden">
      <div
        className="flex-none h-[280px] md:h-auto md:w-[45%] bg-cover bg-center relative after:hidden md:after:block after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-white"
        style={{ backgroundImage: "url('rooted.png')" }}
      ></div>
      
      <div className="flex-1 bg-white p-[2.5rem] md:p-[5rem] px-[1.5rem] md:px-[4.5rem] flex flex-col justify-center">
        <SectionLabel>Our Heritage</SectionLabel>
        <SectionTitle className="!mb-8">Rooted in Wayanad</SectionTitle>
        <div className="space-y-[1.2rem] mb-6 text-[#3a3a3a] font-cormorant text-[1.1rem] leading-[1.85]">
          <p>
            Founded in the fertile heart of Wayanad, Weald West stands as a bridge between 
            India&apos;s agricultural heritage and the global market&apos;s quest for authenticity.
          </p>
          <p>
            By blending traditional agricultural wisdom with modern quality control, we 
            ensure that every shipment carries the spirit of our land — pure, authentic, 
            and world-class.
          </p>
        </div>
        <div>
          <Button href="/about" className="mt-4">Read Our Story</Button>
        </div>
      </div>
    </section>
  );
}
