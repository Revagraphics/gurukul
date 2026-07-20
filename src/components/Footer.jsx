import react from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0A1628] text-[#E7E2D6] pt-16 pb-8 border-t border-[#C9A227]/20"
    >
      <div className="max-w-[90vw] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 p-6">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-['Fraunces'] text-3xl text-[#C9A227] mb-4">
              Society Gurukul
            </h3>
            <p className="text-[#8FA3B0] leading-relaxed">
              Patna's First Delhi NCR–Style Coaching Institute.
              <br />
              Real mentors. Small batches. Strong fundamentals.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-[#8FA3B0]">
              <li>
                <a
                  href="#programmes"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Programmes
                </a>
              </li>

              <li>
                <a
                  href="#admissions"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#campus-life"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Campus Life
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wider">
              CONTACT US
            </h4>
            <div className="space-y-4 text-[#8FA3B0]">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-lg shrink-0" />
                Flat No. 202, Lata Kunj Apartment, W Boring Rd Crossing, Patna,
                Bihar-800001
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4AF37] text-lg shrink-0" />
                9296906663
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37] text-lg shrink-0" />
                info@societygurukul.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#C9A227]/10 flex flex-col md:flex-row justify-center items-center text-sm text-[#8FA3B0]">
          <p>© 2026 Society Gurukul . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
