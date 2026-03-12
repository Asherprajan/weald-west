export default function SectionTitle({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`font-playfair text-[clamp(1.7rem,3vw,2.5rem)] text-green mb-14 font-semibold ${className}`}>
      {children}
    </h2>
  );
}
