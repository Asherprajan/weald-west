"use client";

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const logoFilter = "brightness(0) invert(1) sepia(1) saturate(0.6) hue-rotate(5deg)";

  return (
    <footer className="bg-green-dark pt-10 pb-6 px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-cream/10 gap-6">
        <div className="flex items-center gap-[0.8rem]">
          <div className="h-12 w-12 flex items-center justify-center bg-cream/10 rounded-sm overflow-hidden">
            <img
              id="footer-logo"
              src="/logo.png"
              alt="Weald West"
              className="h-full w-auto object-contain"
              style={{ filter: logoFilter }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('footer-logo-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <span id="footer-logo-fallback" className="hidden font-playfair font-bold text-cream text-[1.6rem]">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-playfair text-[1.2rem] text-cream-light font-bold tracking-wider leading-none">
              WEALD WEST
            </span>
            <span className="font-lato text-[0.6rem] tracking-[0.3em] uppercase text-cream/60 font-bold mt-1">
              Nature&apos;s Bounty
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8">
          {["Cookie Policy", "Privacy Policy", "Sitemap"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-cream font-lato text-[0.72rem] tracking-[0.12em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {link}
            </Link>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-cream opacity-60 hover:opacity-100 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-cream opacity-60 hover:opacity-100 transition-opacity">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="pt-5 text-center text-[0.68rem] text-cream-dark opacity-45 tracking-[0.12em] font-lato uppercase">
        © Copyright 2026, Weald West. All Rights Reserved.
      </div>
    </footer>
  );
}
