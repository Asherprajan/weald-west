import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-100px)] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-10 py-20 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-cream/50">
        <SectionLabel>Reach Out</SectionLabel>
        <SectionTitle className="!mb-6">Partner With Us</SectionTitle>
        <p className="font-cormorant text-[1.1rem] text-[#3a3a3a] mb-12 max-w-md">
          Whether you&apos;re an importer looking for the finest Wayanad spices or a brand seeking authentic sourcing, we are ready to collaborate.
        </p>
        
        <form className="flex flex-col gap-6 max-w-md">
          <div className="flex flex-col gap-2">
            <label className="font-lato text-[0.7rem] uppercase tracking-[0.15em] text-green font-bold">Your Name / Organization</label>
            <input type="text" className="border-b border-cream-dark/50 pb-2 focus:outline-none focus:border-green transition-colors text-text bg-transparent rounded-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-lato text-[0.7rem] uppercase tracking-[0.15em] text-green font-bold">Email Address</label>
            <input type="email" className="border-b border-cream-dark/50 pb-2 focus:outline-none focus:border-green transition-colors text-text bg-transparent rounded-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-lato text-[0.7rem] uppercase tracking-[0.15em] text-green font-bold">Inquiry Details</label>
            <textarea rows={4} className="border-b border-cream-dark/50 pb-2 focus:outline-none focus:border-green transition-colors text-text bg-transparent resize-none rounded-none"></textarea>
          </div>
          <div className="mt-4">
            <Button>Send Inquiry</Button>
          </div>
        </form>
      </div>
      
      <div className="w-full md:w-1/2 bg-cream-light p-10 py-20 md:p-24 flex flex-col justify-center">
        <SectionLabel>Our Location</SectionLabel>
        <SectionTitle className="!mb-6">The Heart of Wayanad</SectionTitle>
        <div className="font-cormorant text-[1.15rem] leading-[1.8] text-[#3a3a3a] mb-12">
          <p>
            Weald West<br/>
            Moolankave, Sulthan Bathery,<br/>
            Wayanad, Kerala, India
          </p>
          <p className="mt-6 text-green font-bold">
            Email: contact@wealdwest.com<br/>
            Phone: +91 98470 00000
          </p>
          <p className="mt-6">
            <strong className="font-playfair text-green text-[1.2rem]">Office Hours:</strong><br/>
            Monday - Saturday: 9:00 AM - 6:00 PM<br/>
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
