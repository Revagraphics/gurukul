import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserTie, FaUserGraduate,FaChild } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function KeyBenefits() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const childRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );

      gsap.fromTo(childRef.current.children, 
        { opacity: 0, x: -30 }, 
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.1, 
          duration: 0.7, 
          ease: "power3.out",
          scrollTrigger: { trigger: childRef.current, start: "top 80%" } 
        }
      );

      gsap.fromTo(parentRef.current.children, 
        { opacity: 0, x: 30 }, 
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.1, 
          duration: 0.7, 
          ease: "power3.out",
          scrollTrigger: { trigger: parentRef.current, start: "top 80%" } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const childBenefits = [
    "Concept-based learning, not rote memorization.",
    "Small batches with real personal attention.",
    "Weekly tests + performance tracking to catch gaps early.",
    "One-on-one doubt-solving whenever they're stuck.",
    "Mentorship from faculty with genuine subject expertise — an IIT Kanpur alumnus, an AIIMS-trained psychiatrist, and a senior civil-services mentor are part of our core team."
  ];

  const parentBenefits = [
    "Regular parent counselling sessions to stay informed.",
    "A continuous parent feedback system.",
    "Transparent, all-inclusive fees — no hidden costs.",
    "A free one-time counselling session before you decide anything."
  ];

  return (
    <section 
      id="benefits"
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#F3EEE3]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">

          <div className="inline-block px-6 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#0B1D33] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-2">
              <span className="text-[#C9A227]">◆</span>Key Benefits
            </p>
          </div>
          <h2 
            ref={titleRef}
            className="font-['Fraunces'] text-[#0B1D33] text-4xl md:text-5xl font-bold tracking-tight"
          >
            For Your Child &amp; For You, As a Parent
          </h2>
          

          
        </div>

        

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* For Your Child */}
          <div 
            ref={childRef}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-[#C9A227]/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#C9A227] text-white rounded-2xl flex items-center justify-center text-2xl"><FaChild /></div>
              <h3 className="font-semibold text-2xl text-[#0B1D33]">For Your Child</h3>
            </div>

            <ul className="space-y-6">
              {childBenefits.map((item, i) => (
                <li key={i} className="flex gap-4 text-[#0B1D33]/80 text-[1.2rem] leading-relaxed">
                  <span className="text-[#C9A227] text-xl mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For You, As a Parent */}
          <div 
            ref={parentRef}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-[#C9A227]/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#C9A227] text-white rounded-2xl flex items-center justify-center text-2xl"><FaUserTie/></div>
              <h3 className="font-semibold text-2xl text-[#0B1D33]">For You, As a Parent</h3>
            </div>

            <ul className="space-y-6">
              {parentBenefits.map((item, i) => (
                <li key={i} className="flex gap-4 text-[#0B1D33]/80 text-[1.2rem] leading-relaxed">
                  <span className="text-[#C9A227] text-xl mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}