"use client";
import Image from 'next/image'
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const allProducts = [
  { 
    name: "Coffee Beans", 
    desc: "Harvested from misty Wayanad slopes, embodying balance and depth.", 
    price: "Premium Arabica/Robusta", 
    image: "coffee-beans.png" 
  },
  { 
    name: "Ginger", 
    desc: "Bold aroma, cultivated in mineral-rich terrain for natural potency.", 
    price: "Fresh & Sun-Dried", 
    image: "ginger.png" 
  },
  { 
    name: "Cardamom (Elam)", 
    desc: "The 'Queen of Spices', capturing Kerala's aromatic essence.", 
    price: "Green & Bold", 
    image: "elam.png" 
  },
  { 
    name: "Banana", 
    desc: "Naturally ripened, known for superior sweetness and export quality.", 
    price: "Export Grade", 
    image: "banana.png" 
  },
  { 
    name: "Black Pepper", 
    desc: "Sun-dried to perfection, delivering a bold, peppery bite.", 
    price: "Tellicherry Bold", 
    image: "pepper.png" 
  },
  { 
    name: "Tea Powder", 
    desc: "Sourced from South Indian gardens for a smooth, refreshing brew.", 
    price: "Fine Blend", 
    image: "tea-powder.png" 
  },
  { 
    name: "Coffee Powder", 
    desc: "Finely ground, delivering a deep, aromatic South Indian experience.", 
    price: "Pure & Blended", 
    image: "coffee-powder.png" 
  },
  { 
    name: "Pepper Powder", 
    desc: "Crafted from premium peppercorns for warmth and pure flavor.", 
    price: "Fine Ground", 
    image: "pepper-powder.png" 
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-100px)] pt-20 pb-32 font-cormorant">
      <div className="text-center px-6">
        <SectionLabel>Our Harvest</SectionLabel>
        <SectionTitle>Crafted by Nature. Perfected by Weald West.</SectionTitle>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 max-w-6xl mx-auto px-6 md:px-10 mt-12">
        {allProducts.map((p) => (
          <div key={p.name} className="flex flex-col items-center group cursor-pointer">
            <div className="w-full aspect-square bg-cream-light mb-6 overflow-hidden rounded-[2px] transition-shadow duration-300 group-hover:shadow-[0_20px_50px_rgba(26,54,38,0.15)]">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <h3 className="font-playfair text-[1.4rem] text-green font-semibold mb-1">{p.name}</h3>
            <p className="text-[#3a3a3a] mb-3 text-center px-4 leading-[1.6]">{p.desc}</p>
            <p className="font-lato text-[0.8rem] tracking-[0.2em] text-muted font-bold uppercase">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
