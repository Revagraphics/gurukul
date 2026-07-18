import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA_IMAGE from "../assets/gurukul-3.jpg"; // Update this path

gsap.registerPlugin(ScrollTrigger);

const ctas = [
  { icon: "📞", label: "Book Your Three Free Demo Classes Today", href: "#apply" },

];

export default function FinalCta() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRefs = useRef([]);
  ctaRefs.current = [];
  const addCtaRef = (el) => el && ctaRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.fromTo(headingRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(ctaRefs.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" }, "-=0.4");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="campus-life"  ref={sectionRef} className="relative bg-[#F3EEE3] py-16 md:py-18 overflow-hidden">
      <div className="relative z-10 max-w-[90vw] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div ref={headingRef} className="text-left">
          
          <div className="inline-block px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#000] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-1">
              <span className="text-[#C9A227]">◆</span>Enrollment Open Classes 5th–12th
            </p>
          </div>
          <h2 className="font-sarif text-[#000] text-3xl md:text-5xl leading-[1.15] font-semibold">
            Patna's students deserve more than another crowded coaching centre.
          </h2>
          <p className="font-sarif text-[#000]/80 text-base md:text-lg mt-6 leading-relaxed">
            They deserve mentors who know their name. Society Gurukul's Patna centre is now open for enrollment for Classes 5th to 12th.
          </p>

          <div className="flex flex-col items-start gap-4 mt-12 max-w-md">
            {ctas.map((c, i) => (
              <a
                key={c.label}
                ref={addCtaRef}
                href="#top"
                className={`w-full flex items-center justify-start gap-2 font-sarif text-xs md:text-sm tracking-normal uppercase px-2 lg:px-4 py-4 rounded-md transition-colors duration-300 ${
                  i === 0
                    ? "bg-[#C9A227] text-[#0B1D33] hover:bg-[#E0BC4A]"
                    : "border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#C9A227] hover:text-[#C9A227]"
                }`}
              >
                <span aria-hidden="true">{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block">
          <img 
            src={CTA_IMAGE} 
            alt="Society Gurukul Classroom" 
            className="w-full h-auto rounded-lg shadow-2xl border border-[#C9A227]/20"
          />
        </div>

      </div>
    </section>
  );
}