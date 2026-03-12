export default function UtilityBar() {
  return (
    <div className="bg-green-dark h-[36px] flex items-center justify-end px-10 gap-8 hidden md:flex">
      {["Investors", "Sustainability", "Careers", "In the News", "Blogs"].map(
        (link) => (
          <a
            key={link}
            href="#"
            className="text-cream font-lato text-[0.7rem] tracking-[0.1em] uppercase opacity-75 hover:opacity-100 transition-opacity duration-200"
          >
            {link}
          </a>
        )
      )}
    </div>
  );
}
