export default function SectionLabel({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`font-lato text-[0.7rem] tracking-[0.3em] uppercase text-muted mb-[0.6rem] ${className}`}>
      {children}
    </p>
  );
}
