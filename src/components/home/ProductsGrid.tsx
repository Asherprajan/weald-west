"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <section className="bg-white py-24 px-6 md:px-10 text-center border-t border-cream/10">
      <SectionLabel>What we offer</SectionLabel>  
      <SectionTitle>Our Finest Collections</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 md:gap-x-8 md:gap-y-20 max-w-7xl mx-auto mt-16 font-cormorant">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group block relative"
          >
            {/* Image Container with Editorial Aspect Ratio */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-light rounded-[2px] transition-all duration-700 ease-in-out group-hover:shadow-[0_30px_60px_-15px_rgba(26,54,38,0.2)]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-110" 
              />
              
              {/* Premium Overlay Reveal */}
              <div className="absolute inset-0 bg-green-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cream border border-cream/20 flex items-center justify-center mb-3">
                    <ArrowUpRight className="text-green w-5 h-5" />
                  </div>
                  <span className="font-lato text-[0.65rem] tracking-[0.2em] uppercase font-bold text-cream">View Details</span>
                </div>
              </div>
            </div>

            {/* Text Content with Refined Typography */}
            <div className="mt-8 flex flex-col items-center">
              <h3 className="font-playfair text-[1.25rem] md:text-[1.4rem] text-green-dark font-semibold leading-tight mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-4 bg-cream-dark opacity-40"></span>
                <span className="text-[0.9rem] md:text-[1rem] text-muted italic opacity-90 leading-none">
                  {product.desc}
                </span>
                <span className="h-[1px] w-4 bg-cream-dark opacity-40"></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
