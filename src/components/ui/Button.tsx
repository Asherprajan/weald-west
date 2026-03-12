import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, className = "", onClick }: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-8 py-3 bg-green text-cream-light font-lato text-[0.76rem] tracking-[0.18em] uppercase font-bold rounded-[2px] transition-all duration-200 hover:bg-green-mid hover:-translate-y-0.5 ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children} <span className="text-[1.1em]">→</span>
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {children} <span className="text-[1.1em]">→</span>
    </button>
  );
}
