"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoFilter = "brightness(0) invert(1) sepia(1) saturate(0.6) hue-rotate(5deg)";

  return (
    <nav
      className={`bg-green h-16 flex items-center justify-between px-6 md:px-10 sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_28px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative h-11 w-11 flex items-center justify-center bg-cream/10 rounded-sm overflow-hidden">
          <img
            id="navbar-logo"
            src="/logo.png"
            alt="Weald West"
            className="h-full w-auto object-contain transition-all duration-300"
            style={{ filter: logoFilter }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('navbar-logo-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <span id="navbar-logo-fallback" className="hidden font-playfair font-bold text-cream text-[1.4rem]">W</span>
        </div>
        <div className="font-playfair text-[1.15rem] text-cream-light font-semibold tracking-[0.06em] leading-[1.1]">
          WEALD WEST
          <small className="block text-[0.62rem] tracking-[0.25em] uppercase text-cream-dark/80 font-lato font-bold mt-0.5">
            Est. 2023
          </small>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {["About Us", "Products"].map((item) => (
          <li key={item}>
            <Link
              href={item === "About Us" ? "/about" : item === "Products" ? "/products" : "#"}
              className="text-cream-light font-lato text-[0.78rem] tracking-[0.12em] uppercase font-bold relative transition-colors duration-200 hover:text-cream after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-cream after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className="bg-cream text-green-dark px-4 py-[0.4rem] rounded-[2px] font-lato text-[0.78rem] tracking-[0.12em] uppercase font-bold transition-colors hover:bg-cream-light"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="text-cream w-6 h-6" />
        ) : (
          <Menu className="text-cream w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-green-dark p-6 flex flex-col gap-4 md:hidden shadow-lg border-t border-green-mid">
          {["About Us", "Products", "Heritage", "Sustainability"].map((item) => (
            <Link
              key={item}
              href={item === "About Us" ? "/about" : item === "Products" ? "/products" : "#"}
              className="text-cream-light font-lato text-[0.78rem] tracking-[0.12em] uppercase font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-cream font-lato text-[0.78rem] tracking-[0.12em] uppercase font-bold mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
