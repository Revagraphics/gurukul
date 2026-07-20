import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CLASSROOM_IMAGE from "../assets/gurukul-3.jpg";
import { FaGraduationCap, FaChartLine, FaUsers, FaAward,} from "react-icons/fa6";

export default function Hero() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const badgeRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    classLevel: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
      );
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1)",
        },
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, delay: 0.6 },
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919876543210";
    const message = `Hello, I am ${formData.name}. Interested in ${formData.classLevel}. Phone: ${formData.phone}`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#F8F5EE] pt-20 lg:pt-24">
      <div className="max-w-full mx-auto px-6 md:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <div className="lg:col-span-5">
            <h1
              ref={titleRef}
              className="font-serif text-[#0B1D33] text-3xl mt-3 md:text-4xl lg:text-6xl leading-[1.2] font-bold tracking-tight"
            >
              Patna's First <br />
              <span className="text-[#1E3A8A] text-4xl md:text-6xl lg:text-7xl block my-2 ">
                Delhi NCR–Based
              </span>
              Coaching Institute Is Here
            </h1>

            <div className="mt-4 space-y-2 text-[#1F2937]">
              {/* Item 1 */}
              <div className="flex items-start gap-2 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine className="text-3xl" />
                </div>
                <div className="pt-2">
                  <p className="text-[19px]  font-medium">
                    Small batches. Real mentors.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Item 2 */}
              <div className="flex items-start gap-2 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="pt-2">
                  <p className="text-[19px] font-medium">
                    A curriculum based on NCERT fundamentals, not shortcuts.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

             
            </div>
          </div>

          {/* Center - Classroom Image with Badge */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={CLASSROOM_IMAGE}
                alt="Gurukul Classroom"
                className="w-full h-full object-cover aspect-[16/10] lg:aspect-[4/3]"
              />

             
            </div>
          </div>

          {/* Right - Form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="bg-[#48525B] text-white rounded-3xl p-8 lg:p-9 shadow-2xl">
              <h3 className="text-white text-xl font-semibold mb-1 text-center">
                BOOK YOUR 3 FREE DEMO CLASSES
              </h3>
              <p className="text-center text-blue-200 text-sm mb-8">
                See the difference before you commit to anything
              </p>

              <form action="/contact.php" method="POST" class="space-y-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder:text-white/60 text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder:text-white/60 text-white"
                />

                <select
                  name="classLevel"
                  required
                  class="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/30 focus:outline-none focus:border-white text-white"
                >
                  <option value="" class="text-black">
                    Interested In
                  </option>
                  <option class="text-black" value="Class 5-8">
                    Class 5 - 8
                  </option>
                  <option class="text-black" value="Class 9-12">
                    Class 9 - 12
                  </option>
                  <option class="text-black" value="Class 12th Pass Out">
                    Class 12th Pass Out
                  </option>
                </select>

                <button
                  type="submit"
                  class="w-full py-4 mt-3 bg-[#FACC15] hover:bg-yellow-300 text-[#0B1D33] font-bold rounded-2xl transition-all active:scale-95"
                >
                  APPLY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
