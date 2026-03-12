"use client";

import { Sprout, ShieldCheck, Footprints, Scale } from "lucide-react";

const values = [
  { title: "Honest Materials", desc: "SOURCED WITH CARE", icon: Sprout },
  { title: "Lifelong Durability", desc: "BUILT TO ENDURE", icon: ShieldCheck },
  { title: "Rooted Design", desc: "NATURE INSPIRED", icon: Footprints },
  { title: "Ethical Craft", desc: "FAIR LABOR", icon: Scale },
];

export default function ValuesStrip() {
  return (
    <div className="bg-cream-light py-14 px-8 flex justify-center flex-wrap">
      {values.map((val, idx) => (
        <div
          key={val.title}
          className={`text-center px-12 py-6 md:py-0 min-w-[190px] w-full md:w-auto border-b md:border-b-0 border-cream-dark/40 ${
            idx !== values.length - 1 ? "md:border-r" : "last:border-b-0"
          }`}
        >
          <div className="flex justify-center mb-[0.7rem]">
            <val.icon className="w-10 h-10 text-green-mid" strokeWidth={1.5} />
          </div>
          <div className="font-playfair text-[1rem] text-green font-semibold mb-[0.3rem]">
            {val.title}
          </div>
          <div className="text-[0.72rem] text-muted tracking-[0.08em] uppercase font-lato">
            {val.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
