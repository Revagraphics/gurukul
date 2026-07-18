import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaAward,
} from "react-icons/fa6";

import {
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaComments,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "10,000+",
    label: "Students trained",
    icon: <FaGraduationCap className="w-10 h-10 text-[#C9A227]" />,
  },
  {
    value: "95%+",
    label: "Success rate",
    icon: <FaChartLine className="w-10 h-10 text-[#C9A227]" />,
  },
  {
    value: "1:20",
    label: "Mentor-to-student ratio",
    icon: <FaUsers className="w-10 h-10 text-[#C9A227]" />,
  },
  {
    value: "100%",
    label: "Scholarship available",
    icon: <FaAward className="w-10 h-10 text-[#C9A227]" />,
  },
];

export default function TrustStrip() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const addItemRef = (el) => el && itemRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#0A1628] via-[#0F1F3A] to-[#0B1D33] border-t border-[#C9A227]/20 py-12 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-5" />

      <div className="max-w-[90vw] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={addItemRef}
              className={`group flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 hover:scale-105 ${
                i !== 0 ? "md:border-l md:border-[#C9A227]/20 md:pl-8" : ""
              }`}
            >
              <div className="mb-4 transition-transform group-hover:-translate-y-1">
                {s.icon}
              </div>

              <p className="font-serif text-[#C9A227] text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                {s.value}
              </p>

              <p className="font-medium text-[#E7E2D6] text-base md:text-lg mt-3 tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#C9A227]/20">
          <div className="grid md:grid-cols-3 gap-8 text-[#E7E2D6]">
            {/* Part 1 */}
            <div className="flex items-start gap-4">
              <div className="text-[#C9A227] text-2xl mt-1">
                <FaMapMarkerAlt />
              </div>
              <p className="font-serif text-base md:text-lg leading-relaxed">
                Delhi NCR-origin institute, now open in Patna
              </p>
            </div>

            {/* Part 2 */}
            {/* <div className="flex items-start gap-4">
              <div className="text-[#C9A227] text-2xl mt-1">
                <FaChalkboardTeacher />
              </div>
              <p className="font-serif text-base md:text-lg leading-relaxed">
                Three free demo classes included
              </p>
            </div> */}

            {/* Part 3 */}
            <div className="flex items-start gap-4">
              <div className="text-[#C9A227] text-2xl mt-1">
                <FaComments />
              </div>
              <p className="font-serif text-base md:text-lg leading-relaxed">
                Free one-time counselling session with three demo classes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
