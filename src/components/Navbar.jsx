import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/gurukul.png";



export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
    );

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Programmes", "Admissions", "Benefits", "Campus Life", "Contact"];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F0E3]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)] py-3"
          : "bg-gradient-to-b from-[#F8F0E3]/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-[90vw] mx-auto px-1 md:px-10 flex items-center justify-between">
        {/* Logo */}
        
      <div className="relative flex cursor-pointer items-center lg:gap-0">
        {/* Logo Container */}
        <a className="flex cursor-hover items-center h-12 w-12 lg:h-28 lg:w-28 relative" href="#top">
          <img src={logo} alt="society" className="w-full h-full object-contain" />
        </a>

        {/* Added Text */}
        <span className="text-xl lg:text-2xl font-bold leading-tighter text-gray-900 whitespace-nowrap">
          Society Gurukul
        </span>
      </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-sarif text-[1.1rem] text-[#000]/85 font-semibold cursor-hover hover:text-[#C9A227] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* <div className="hidden md:block">
          <a
            href="#contact"
            className="font-sarif text-xs tracking-widest cursor-hover uppercase text-[#0B1D33] bg-[#C9A227] px-5 py-2.5 rounded-md hover:bg-[#E0BC4A] transition-colors duration-300"
          >
            Apply Now
          </a>
        </div> */}

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col cursor-hover gap-1.5 w-7 h-7 justify-center items-end"
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] bg-[#000] transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
          <span className={`h-[2px] bg-[#000] transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4 opacity-100"}`} />
          <span className={`h-[2px] bg-[#000] transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden  transition-all duration-400 ease-out ${
          menuOpen ? "max-h-80 opacity-100 bg-[#FAF8F4] mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-sarif cursor-hover text-sm text-[#000]/90"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          {/* <a
            href="#contact"
            className="font-sarif text-xs tracking-widest cursor-hover uppercase text-[#0B1D33] bg-[#C9A227] px-5 py-2.5 rounded-sm text-center"
          >
            Apply Now
          </a> */}
        </div>
      </div>
    </nav>
  );
}
