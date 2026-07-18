import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const trustItems = [
  {
    q: "Will my child actually improve academically?",
    a: "Students follow a structured NCERT / CBSE curriculum with weekly tests and performance analytics, so progress is tracked, not assumed. Society Gurukul reports a 95%+ success rate across 10,000+ students trained.",
  },
  {
    q: "Will my child get individual attention in a big batch?",
    a: "We cap our mentor ratio at 1:20 — nowhere close to the crowded classrooms typical of mass coaching centres. Every student gets personal attention, not a broadcast lecture.",
  },
  {
    q: "Will this build confidence, not just marks?",
    a: "Our teaching philosophy is built on Socratic questioning, first-principles thinking, and one-on-one doubt resolution, so your child learns to think and reason, not just recall answers.",
  },
  {
    q: "Is this a long-term investment in learning?",
    a: "Our approach is structured around daily, disciplined practice rather than last-minute cramming, supported by a qualified psychiatrist and educational psychologist on our founding team.",
  },
];

export default function ParentTrust() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const addCardRef = (el) => el && cardRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="parents"
      ref={sectionRef}
      className="relative bg-[#0B1D33] py-24 md:py-32"
    >
      <div className="max-w-7xl flex flex-col items-center  mx-auto px-6 md:px-10">
        <div className="max-w-4xl flex flex-col items-center mb-14">
         

          <div className="inline-block px-6 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#C9A227] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-2">
              <span className="text-[#C9A227]">◆</span>For Parents
            </p>
          </div>

          <h2 className="font-sarif text-[#FAF8F4] text-3xl text-center md:text-[2.75rem] leading-[1.12] font-semibold">
            The questions on every parent's mind.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.q}
              ref={addCardRef}
              className="bg-[#0F2540] border border-[#8FA3B0]/15 rounded-[30px] p-8"
            >
              <span className="font-sarif text-[#C9A227] text-4xl leading-none">"</span>
              <h3 className="font-['Fraunces'] italic text-[#FAF8F4] text-xl md:text-2xl leading-snug mt-2">
                {item.q}
              </h3>
              <p className="font-sarif text-[#E7E2D6]/75 text-sm md:text-base mt-4 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#top"
          className="inline-block cursor-hover font-sarif text-xs lg:text-xl tracking-widest uppercase text-[#0B1D33] bg-[#C9A227] px-4 lg:px-8  py-3.5 rounded-md hover:bg-[#E0BC4A] transition-colors duration-300 mt-12"
        >
          Book Your Free Parent Counselling Session
        </a>
      </div>
    </section>
  );
}
