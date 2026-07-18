import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gurukul1 from "../assets/gurukul-1.jpg";
import gurukul2 from "../assets/gurukul-2.jpg";
import gurukul3 from "../assets/gurukul-3.jpg";
import gurukul4 from "../assets/gurukul-4.jpg";
import gurukul5 from "../assets/gurukul-5.jpg";
import gurukul6 from "../assets/gurukul-6.jpg";
import gurukul7 from "../assets/gurukul-7.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Strict 1:20 mentor ratio",
    detail:
      "Small batch size so every student is actually seen, not just the top scorers.",
    image: gurukul1,
    tilt: "-3deg",
  },
  {
    title: "Weekly tests, always",
    detail:
      "Consistent evaluation before board exams, not a single test at year end.",
    image: gurukul2,
    tilt: "2deg",
  },
  {
    title: "Advanced performance tracking",
    detail:
      "Gaps are caught early in the term, not discovered in the final result.",
    image: gurukul3,
    tilt: "-4deg",
  },
  {
    title: "Psychological mentoring",
    detail:
      "Guidance from a qualified psychiatrist who's part of our core team.",
    image: gurukul4,
    tilt: "3deg",
  },
  {
    title: "Regular parent counselling",
    detail: "You stay informed on progress, always — never in the dark.",
    image: gurukul5,
    tilt: "-2deg",
  },
  {
    title: "One-on-one doubt solving",
    detail: "No question goes unanswered, no student waits till tomorrow.",
    image: gurukul6,
    tilt: "4deg",
  },
  {
    title: "Continuous feedback loop",
    detail: "A running parent feedback system for full transparency.",
    image: gurukul7,
    tilt: "-3deg",
  },
];

export default function WhyChooseGurukul() {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const [activeFeature, setActiveFeature] = useState(null);
  const imageRef = useRef(null);

  const addRowRef = (el) => el && rowRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover image animation
  useEffect(() => {
    if (!imageRef.current) return;

    if (activeFeature !== null) {
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotation: features[activeFeature].tilt,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 0.3,
      });
    }
  }, [activeFeature]);

  return (
    <section
      id="admissions"
      ref={sectionRef}
      className="relative bg-[#F3EEE3] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[90vw] mx-auto px-6 md:px-10 grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-20">
        {/* Sticky Intro */}
        <div className="md:sticky md:top-32 h-fit">
          <div className="inline-block px-2 lg:px-6 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#0B1D33] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-2">
              <span className="text-[#C9A227]">◆</span> Why Society Gurukul
            </p>
          </div>

          <h2 className="font-serif text-[#0B1D33] text-3xl md:text-[2.75rem] leading-[1.1] font-semibold">
            Big coaching centres optimize for batch size.
            <br />
            <span className="italic text-[#8A6D1E]">
              We optimize for your child.
            </span>
          </h2>

          <p className="font-serif text-[#3D4A57] text-base md:text-lg mt-6 leading-relaxed max-w-md">
            We're not a new, unproven setup — we're Delhi NCR's established
            coaching institute, now open in Patna, bringing the same 1:20 mentor
            ratio and NCERT-first method.
          </p>

          {/* Added Image - Looks Premium */}
          <div className="mt-10 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={gurukul2}
              alt="Society Gurukul Classroom & Students"
              className="w-full h-auto object-cover aspect-[16/10] md:aspect-[4/3]"
            />
          </div>

          {/* Optional subtle caption */}
          {/* <p className="text-center text-[#8A6D1E]/70 text-xs mt-4 tracking-widest">
            SMALL BATCHES • PERSONAL ATTENTION • PROVEN RESULTS
          </p> */}
        </div>

        {/* Features with Hover Images */}
        <div className="relative flex flex-col">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={addRowRef}
              className="group relative flex gap-6 py-7 border-b border-[#0B1D33]/10 cursor-pointer transition-all hover:bg-white/60 rounded-xl px-4 -mx-4"
              onMouseEnter={() => setActiveFeature(i)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <span className="font-serif text-[#C9A227] text-xl italic w-9 shrink-0 pt-1 transition-transform group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="font-serif font-semibold text-[#0B1D33] text-lg md:text-xl transition-colors group-hover:text-[#8A6D1E]">
                  {feature.title}
                </h3>
                <p className="font-serif text-[#3D4A57] text-[15px] md:text-base mt-2 leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Hover Image */}
      <div
        ref={imageRef}
        className="hidden lg:block fixed pointer-events-none z-50 opacity-0 scale-75 shadow-2xl rounded-2xl overflow-hidden"
        style={{ top: "35%", right: "12%" }}
      >
        {activeFeature !== null && (
          <img
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            className="w-[320px] h-[240px] object-cover rounded-2xl"
          />
        )}
      </div>
    </section>
  );
}
