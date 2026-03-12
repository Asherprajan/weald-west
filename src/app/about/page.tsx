"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-100px)]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] scale-105"
          style={{ backgroundImage: "url('/rooted.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <SectionLabel className="!text-cream-light mb-4">Our Legacy</SectionLabel>
          <h1 className="font-playfair text-[clamp(2.5rem,6vw,4.5rem)] text-white font-semibold leading-tight">
            Rooted in Nature.<br />Driven by Excellence.
          </h1>
        </div>
      </section>

      {/* Our Story - Asymmetric Split */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <SectionLabel>Our Story</SectionLabel>
            <SectionTitle className="!mb-8 italic">Cultivating a Vision for Global Purity.</SectionTitle>
            <div className="font-cormorant text-[1.2rem] leading-[1.8] text-[#3a3a3a] space-y-6">
              <p>
                Founded in the fertile heart of Wayanad, Weald West stands as a bridge between India&apos;s agricultural heritage and the global market&apos;s quest for authenticity. Our farmlands and partner growers nurture the finest produce nature offers, from the aroma of freshly ground coffee to the earthy warmth of Wayanad&apos;s pepper.
              </p>
              <p>
                What began as a commitment to local excellence has grown into a global mission. We believe that the truest luxury lies in the purity of the source. By maintaining direct relationships with our farmers, we ensure every harvest carries the soul of the land.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              <div className="absolute -inset-4 border border-cream transition-transform duration-500 group-hover:scale-[1.02]"></div>
              <img 
                src="/hero2.png" 
                alt="Wayanad Harvest" 
                className="w-full h-full object-cover relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Refined Modern */}
      <section className="bg-cream-light py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionLabel>The Journey</SectionLabel>
          <SectionTitle>Our Growth Timeline</SectionTitle>
        </div>
        
        <div className="max-w-3xl mx-auto relative px-4">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-green/10"></div>
          
          <div className="space-y-24">
            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:text-right pr-0 md:pr-16 mb-4 md:mb-0">
                <span className="font-playfair text-3xl text-green-dark font-bold">2023</span>
                <p className="font-lato text-[0.7rem] tracking-[0.2em] uppercase text-muted mt-2 font-bold">The Seed is Sown</p>
              </div>
              <div className="absolute left-[1.12rem] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green border-4 border-cream-light z-20"></div>
              <div className="md:w-1/2 md:pl-16 pl-10">
                <p className="font-cormorant text-[1.15rem] text-[#3a3a3a] italic leading-relaxed">
                  Weald West local collection started in a small corner of Wayanad, sourcing only the elite pepper harvests from heirloom vines.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:order-2 md:text-left pl-0 md:pl-16 mb-4 md:mb-0">
                <span className="font-playfair text-3xl text-green-dark font-bold">2025</span>
                <p className="font-lato text-[0.7rem] tracking-[0.2em] uppercase text-muted mt-2 font-bold">Global Expansion</p>
              </div>
              <div className="absolute left-[1.12rem] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green border-4 border-cream-light z-20"></div>
              <div className="md:w-1/2 md:order-1 md:text-right md:pr-16 pl-10 md:pl-0">
                <p className="font-cormorant text-[1.15rem] text-[#3a3a3a] italic leading-relaxed">
                  Our first international shipping partnership established, bringing the aroma of Kerala to enthusiasts in Europe and the Middle East.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:text-right pr-0 md:pr-16 mb-4 md:mb-0">
                <span className="font-playfair text-3xl text-green-dark font-bold">2026</span>
                <p className="font-lato text-[0.7rem] tracking-[0.2em] uppercase text-muted mt-2 font-bold">Sustainability First</p>
              </div>
              <div className="absolute left-[1.12rem] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green border-4 border-cream-light z-20"></div>
              <div className="md:w-1/2 md:pl-16 pl-10">
                <p className="font-cormorant text-[1.15rem] text-[#3a3a3a] italic leading-relaxed">
                  Launch of our &quot;Earth-to-Table&quot; initiative, ensuring 100% plastic-free packaging and carbon-neutral logistics across our premium range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 border border-cream/30">
          <div className="lg:w-1/2">
            <img 
              src="/sus.png" 
              alt="Sustainability" 
              className="w-full h-full object-cover min-h-[400px]" 
            />
          </div>
          <div className="lg:w-1/2 bg-green-dark p-12 md:p-16 lg:p-24 flex flex-col justify-center">
            <SectionLabel className="!text-cream-dark">Our Philosophy</SectionLabel>
            <h2 className="font-playfair text-[2.4rem] text-cream-light mb-8 font-semibold leading-tight">Nature is Not a Resource. It is Our Partner.</h2>
            <p className="font-cormorant text-[1.2rem] text-cream opacity-80 leading-relaxed mb-10">
              We reject the industrial shortcuts that strip flavor and deplete soil. Our commitment is to the slow way—the right way. By honoring seasonal cycles and traditional drying methods, we preserve the life-force of everything we harvest.
            </p>
            <div>
              <Button href="/contact" className="!bg-cream !text-green-dark hover:!bg-white">Partner With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Hands Section */}
      <section className="py-32 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto mb-20">
          <SectionLabel>The Stewards</SectionLabel>
          <SectionTitle>Guided by Heritage. Built by Trust.</SectionTitle>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <div className="group">
            <div className="aspect-[4/5] bg-cream-light mb-8 overflow-hidden rounded-[2px] transition-all duration-700 group-hover:shadow-2xl">
              <img src="/hero1.png" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <h4 className="font-playfair text-xl text-green-dark font-semibold">Founder & Visionary</h4>
            <p className="font-lato text-[0.7rem] tracking-[0.15em] uppercase text-muted mt-2">Deep-Rooted Expertise</p>
          </div>
          
          <div className="group md:mt-12">
            <div className="aspect-[4/5] bg-cream-light mb-8 overflow-hidden rounded-[2px] transition-all duration-700 group-hover:shadow-2xl">
              <img src="/hero2.png" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <h4 className="font-playfair text-xl text-green-dark font-semibold">Head of Quality</h4>
            <p className="font-lato text-[0.7rem] tracking-[0.15em] uppercase text-muted mt-2">Precision & Purity</p>
          </div>
          
          <div className="group">
            <div className="aspect-[4/5] bg-cream-light mb-8 overflow-hidden rounded-[2px] transition-all duration-700 group-hover:shadow-2xl">
              <img src="/rooted.png" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <h4 className="font-playfair text-xl text-green-dark font-semibold">Global Relations</h4>
            <p className="font-lato text-[0.7rem] tracking-[0.15em] uppercase text-muted mt-2">Connecting Worlds</p>
          </div>
        </div>
      </section>
    </div>
  );
}
