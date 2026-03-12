"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "Hero1.png", // Wayanad/Kerala lush hills
    eyebrow: "Nature's Bounty",
    title: "From the Heart of\nWayanad to the World.",
    cta: "Explore Our Harvest",
    link: "/products",
  },
  {
    image: "Hero2.png", // Coffee beans drying
    eyebrow: "Grown with Care",
    title: "Sourcing Nature's\nFinest Spices & Coffee.",
    cta: "Our Story",
    link: "/about",
  },
  {
    image: "Hero2.png", // Tea plantations
    eyebrow: "Sustainability First",
    title: "Harvested with Integrity,\nDelivered with Trust.",
    cta: "Partner With Us",
    link: "/contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] min-h-[560px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-end"
        >
          <Image
            src={`/${slides[current].image}`}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,15,0.8)] via-[rgba(10,25,15,0.25)] to-[rgba(10,25,15,0.08)]"></div>
          
          <div className="relative z-10 w-full px-6 md:px-20 pb-16 max-w-[840px]">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-lato text-[0.72rem] tracking-[0.28em] uppercase text-cream mb-[0.9rem]"
            >
              {slides[current].eyebrow}
            </motion.p>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-playfair text-[clamp(2rem,4.5vw,3.8rem)] text-cream-light leading-[1.15] mb-[1.4rem] font-semibold whitespace-pre-line"
            >
              {slides[current].title}
            </motion.h2>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href={slides[current].link}
                className="inline-flex items-center gap-2 text-cream font-lato text-[0.78rem] tracking-[0.2em] uppercase font-bold border-b border-cream/50 pb-[2px] transition-all hover:gap-4 duration-300 group"
              >
                {slides[current].cta} <span className="transform transition-transform group-hover:translate-x-1"><ArrowRight size={16} /></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-[1.8rem] right-6 md:right-10 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === idx ? "bg-cream scale-[1.5]" : "bg-cream/35 hover:bg-cream/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
