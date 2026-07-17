import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    tier: "Junior Wing",
    tag: "Foundations · Class 5–8",
    featured: false,
    items: [
      "Comprehensive NCERT academic support",
      "Concept-building workshops",
      "Intro to logic & reasoning",
      "Quarterly parent progress synch",
      "Digital resource library",
      "Personalized doubt resolution",
    ],
  },
  {
    tier: "Senior Wing",
    tag: "Board Mastery · Class 9–12",
    featured: false,
    items: [
      "Strategic board exam preparation",
      "Mentorship with senior faculty",
      "Performance analytics & reporting",
      "Career guidance & stream selection",
      "Intensive revision programs",
      "Priority doubt counters",
    ],
  },
  {
    tier: "Excellence",
    tag: "The Elite Program",
    featured: true,
    items: [
      "1-on-1 dedicated mentorship",
      "Advanced competitive modules",
      "Small cohort — max 15 students",
      "Weekly masterclasses by AJ Sir",
      "Premium learning materials box",
      "24/7 academic support access",
    ],
  },
];

export default function AcademicPrograms() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addCardRef = (el) => el && cardRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="programmes"
      ref={sectionRef}
      className="relative bg-[#0B1D33] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-14">
          
          <div className="inline-block px-6 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#C9A227] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-1">
              <span className="text-[#C9A227]">◆</span> Academic Programs
            </p>
          </div>

          <h2 className="font-sarif text-[#FAF8F4] text-3xl md:text-[2.75rem] leading-[1.12] font-semibold">
            Structured by stage, not one-size-fits-all.
          </h2>

          <p className="font-sarif text-[#E7E2D6]/80 md:text-lg mt-5 leading-relaxed max-w-2xl">
            Coaching classes in Patna taught at the right depth and pace for
            every stage — from foundational years through board mastery and our
            elite mentorship track.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {programs.map((p) => (
            <div
              key={p.tier}
              ref={addCardRef}
              className={`rounded-md p-8 flex flex-col h-full ${
                p.featured
                  ? "bg-[#0B1D33] border-2 border-[#8FA3B0] md:-translate-y-4 "
                  : "bg-[#0F2540] border-2 border-[#8FA3B0] md:-translate-y-4"
              }`}
            >
              <p className="font-sarif text-[#C9A227] text-[1rem] font-bold tracking-widest uppercase">
                {p.tag}
              </p>
              <h3 className="font-sarif text-[#FAF8F4] text-2xl md:text-3xl font-semibold mt-2">
                {p.tier}
              </h3>

              <ul className="mt-6 space-y-3 flex-1">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="font-sarif text-[#E7E2D6]/85 text-sm leading-relaxed flex gap-2.5"
                  >
                    <span className="text-[#C9A227] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                className={`mt-8 text-center font-sarif text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-colors duration-300 ${
                  p.featured
                    ? "border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#C9A227] hover:text-[#C9A227]"
                    : "border border-[#FAF8F4]/30 text-[#FAF8F4] hover:border-[#C9A227] hover:text-[#C9A227]"
                }`}
              >
                Get Free Recommendation
              </a>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block cursor-hover font-sarif text-xs lg:text-xl tracking-widest uppercase text-[#0B1D33] bg-[#C9A227] px-8 py-3.5 rounded-md hover:bg-[#E0BC4A] transition-colors duration-300 mt-12"
        >
         Not sure which program fits your child? Get a free 1-on-1 recommendation →
        </a>
      </div>
    </section>
  );
}
