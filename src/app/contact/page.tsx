"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-100px)]">
      {/* Header Section */}
      <section className="bg-cream-light py-24 px-6 md:px-16 text-center border-b border-cream/30">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Connect</SectionLabel>
          <SectionTitle>How Can We Help You?</SectionTitle>
          <p className="font-cormorant text-[1.2rem] text-[#3a3a3a] leading-relaxed italic">
            Whether you&apos;re looking to source the finest harvests of Wayanad or interested in a strategic partnership, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content - Form & Info */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Contact Form */}
          <div className="lg:w-[60%] order-2 lg:order-1">
            <h3 className="font-playfair text-[1.8rem] text-green-dark mb-10 font-semibold">Send an Inquiry</h3>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    placeholder=" "
                    className="w-full bg-transparent border-b border-cream-dark/40 py-3 focus:outline-none focus:border-green peer transition-all duration-300"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 top-3 font-lato text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-[0.85rem] peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-green-dark"
                  >
                    Name / Organization
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    placeholder=" "
                    className="w-full bg-transparent border-b border-cream-dark/40 py-3 focus:outline-none focus:border-green peer transition-all duration-300"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 top-3 font-lato text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-[0.85rem] peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-green-dark"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select 
                  id="subject"
                  className="w-full bg-transparent border-b border-cream-dark/40 py-3 focus:outline-none focus:border-green peer transition-all duration-300 appearance-none text-muted"
                >
                  <option value="">Inquiry Type</option>
                  <option value="import">Wholesale / Export</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
                <label 
                  htmlFor="subject"
                  className="absolute left-0 -top-4 font-lato text-[0.65rem] uppercase tracking-[0.2em] text-green-dark"
                >
                  Purpose
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-cream-dark/40 py-3 focus:outline-none focus:border-green peer transition-all duration-300 resize-none"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-3 font-lato text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-[0.85rem] peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-green-dark"
                >
                  Inquiry Details
                </label>
              </div>

              <div className="pt-4">
                <Button className="w-full hover:shadow-xl transition-shadow">Submit Request</Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-[40%] order-1 lg:order-2 space-y-16">
            <div>
              <h3 className="font-playfair text-[1.8rem] text-green-dark mb-10 font-semibold">Our Presence</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cream-light rounded-sm flex items-center justify-center shrink-0 border border-cream/30">
                    <MapPin className="text-green w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-green-dark font-semibold">Head Office</h4>
                    <p className="font-cormorant text-[1.1rem] text-[#3a3a3a] leading-relaxed mt-1">
                      Moolankave, Sulthan Bathery,<br />
                      Wayanad, Kerala, India 673592
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cream-light rounded-sm flex items-center justify-center shrink-0 border border-cream/30">
                    <Mail className="text-green w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-green-dark font-semibold">Email Us</h4>
                    <p className="font-cormorant text-[1.1rem] text-[#3a3a3a] leading-relaxed mt-1">
                      partnerships@wealdwest.com<br />
                      support@wealdwest.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-cream-light rounded-sm flex items-center justify-center shrink-0 border border-cream/30">
                    <Clock className="text-green w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-green-dark font-semibold">Office Hours</h4>
                    <p className="font-cormorant text-[1.1rem] text-[#3a3a3a] leading-relaxed mt-1">
                      Mon — Sat: 9:00 AM — 6:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-dark p-8 rounded-[2px] text-cream shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
              <h4 className="font-playfair text-xl font-semibold mb-4 relative z-10 text-cream-light">Global Reach</h4>
              <p className="font-cormorant text-[1rem] opacity-80 leading-relaxed relative z-10 mb-6 font-italic">
                Supplying the world's most discerning importers across North America, Europe, and Asia with traceable, organic produce.
              </p>
              <div className="relative z-10">
                <span className="font-lato text-[0.65rem] tracking-[0.2em] uppercase font-bold text-cream-dark">Certified Organic • ISO 22000</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Placeholder or Visual */}
      <section className="h-[400px] bg-cream-light relative overflow-hidden">
        <div 
          className="absolute inset-0 grayscale opacity-40 hover:opacity-70 transition-opacity duration-700 bg-cover bg-center"
          style={{ backgroundImage: "url('/rooted.png')" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-cream/50 text-center">
            <span className="font-playfair text-green-dark text-lg font-bold">Wayanad Logistics Hub</span>
            <p className="font-lato text-[0.65rem] tracking-widest text-muted uppercase mt-1">The Source of Excellence</p>
          </div>
        </div>
      </section>
    </div>
  );
}
