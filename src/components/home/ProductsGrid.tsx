"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const products = [
  { 
    name: "Coffee Beans", 
    desc: "Misty Slope Harvest", 
    image: "/coffee-beans.png", 
    link: "/products" 
  },
  { 
    name: "Ginger", 
    desc: "Bold & Potent", 
    image: "/ginger.png", 
    link: "/products" 
  },
  { 
    name: "Cardamom", 
    desc: "Aromatic Queen", 
    image: "/elam.png", 
    link: "/products" 
  },
  { 
    name: "Wayanad Pepper", 
    desc: "Sun-Dried Boldness", 
    image: "/pepper.png", 
    link: "/products" 
  },
  { 
    name: "Banana", 
    desc: "Export Quality Sweetness", 
    image: "/banana.png", 
    link: "/products" 
  },
  { 
    name: "Tea Powder", 
    desc: "South Indian Freshness", 
    image: "/tea-powder.png", 
    link: "/products" 
  },
  { 
    name: "Coffee Powder", 
    desc: "Aromatic Blend", 
    image: "/coffee-powder.png", 
    link: "/products" 
  },
  { 
    name: "Pepper Powder", 
    desc: "Pure Heat & Flavor", 
    image: "/pepper-powder.png", 
    link: "/products" 
  },
];

export default function ProductsGrid() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 text-center font-cormorant border-t border-cream/10">
      <SectionLabel>What we offer</SectionLabel>  
      <SectionTitle>Our Finest Collections</SectionTitle>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto mt-12 ">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.link}
            className="flex flex-col items-center group transition-transform duration-[400ms]"
          >
            <div className="w-full aspect-square bg-cream-light overflow-hidden rounded-[2px] border border-cream/20 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(26,54,38,0.12)] rounded-[2px]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col mt-5">
              <span className="font-playfair text-[1.2rem] text-green font-semibold">
                {product.name}
              </span>
              <span className="text-[0.68rem] text-muted tracking-[0.14em] uppercase font-lato mt-1.5 opacity-80">
                {product.desc}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
