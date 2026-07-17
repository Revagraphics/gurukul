import react from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact"  className="bg-[#0A1628] text-[#E7E2D6] pt-16 pb-8 border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-['Fraunces'] text-3xl text-[#C9A227] mb-4">
              Gurukul
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
                  href="#why-gurukul"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Why Gurukul
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Our Mentors
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Book Free Demo
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
                <FaMapMarkerAlt className="text-[#D4AF37] text-lg" />
                Near Boring Road, Patna, Bihar
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4AF37] text-lg" />
                +91 12345 67890
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37] text-lg" />
                info@gurukulpatna.com
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
            <div className="bg-[#13223A] rounded-2xl p-6">
              <h5 className="text-[#C9A227] font-medium mb-4">Quick Enquiry</h5>
              <form 
                action="/contact.php" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-[#0A1628] border border-[#C9A227]/30 rounded-xl text-white placeholder:text-[#8FA3B0] focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-[#0A1628] border border-[#C9A227]/30 rounded-xl text-white placeholder:text-[#8FA3B0] focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <div>
                  <select
                    name="interested_in"
                    required
                    className="w-full px-4 py-3 bg-[#0A1628] border border-[#C9A227]/30 rounded-xl text-white focus:outline-none focus:border-[#C9A227]"
                  >
                    <option value="">Interested In</option>
                    <option value="Class 5-8">Class 5 - 8</option>
                    <option value="Class 9-12">Class 9 - 12</option>
                    <option value="Class 12th Pass Out">Class 12th Pass Out</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A227] hover:bg-[#E0BC4A] text-[#0B1D33] font-semibold rounded-xl transition-all active:scale-95"
                >
                  Send Enquiry
                </button>
              </form>
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

