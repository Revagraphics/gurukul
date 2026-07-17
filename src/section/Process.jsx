import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const steps = [
  { step: "01", title: "NCERT / CBSE curriculum", detail: "Strictly NCERT-based teaching for Classes 5th–12th, no shortcuts." },
  { step: "02", title: "90-minute deep-work sessions", detail: "Focused blocks matched to real attention spans, not marathon classes." },
  { step: "03", title: "1:20 mentor ratio", detail: "Small cohorts, capped, so every session stays personal." },
  { step: "04", title: "A structured daily rhythm", detail: "A ritual-based timetable — not a random one." },
];

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);
  stepRefs.current = [];
  const addStepRef = (el) => el && stepRefs.current.push(el);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        stepRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-[#F3EEE3] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="font-sarif text-[#8A6D1E] text-xs tracking-[0.25em] uppercase mb-5">
          04 &middot; In The Classroom
        </p>
        <h2 className="font-sarif text-[#0B1D33] text-3xl md:text-[2.75rem] leading-[1.12] font-semibold max-w-2xl">
          A method, not a random timetable.
        </h2>

        {/* Rail */}
        <div ref={sectionRef} className="relative mt-16 md:mt-20">
          <div className="hidden md:block absolute top-[13px] left-0 right-0 h-[2px] bg-[#0B1D33]/10">
            <div
              ref={lineRef}
              className="h-full w-full bg-[#C9A227] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} ref={addStepRef} className="relative">
                <span className="hidden md:block h-[13px] w-[13px] rounded-full bg-[#C9A227] mb-6" />
                <p className="font-sarif italic text-[#C9A227] text-lg">
                  {s.step}
                </p>
                <h3 className="font-sarif font-semibold text-[#0B1D33] text-lg mt-1">
                  {s.title}
                </h3>
                <p className="font-sarif text-[#3D4A57]/80 text-sm mt-2 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
            {/* font-['Fraunces'],  font-['IBM_Plex_Mono'] */}
        {/* Pull-quote */}
        <div
          ref={quoteRef}
          className="mt-20 md:mt-24 border-l-4 border-[#C9A227] pl-6 md:pl-10 max-w-3xl"
        >
          <p className="font-sarif italic text-[#0B1D33] text-xl md:text-3xl leading-snug">
            "We are building a space where students learn to love the
            struggle of understanding, rather than the ease of
            memorization."
          </p>
          <p className="font-sarif text-[#8A6D1E] text-xs tracking-widest uppercase mt-5">
            — Faculty Vision, Society Gurukul
          </p>
        </div>
      </div>
    </section>
  );
}
