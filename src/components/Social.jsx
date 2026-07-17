import { useState, memo, useCallback } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const social = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    link: "https://wa.me/+91 9296906663",
    content: (
      <div className="text-center">
        <img
          src="/qr-whatsapp.png"
          alt="WhatsApp QR"
          className="h-32 w-32 mx-auto"
        />
        <p className="mt-2 text-xs">Scan to Chat</p>
      </div>
    ),
  },

  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    link: "tel:919296906663",
    content: (
      <div>
        <p className="font-semibold">+91 9296906663</p>
      </div>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "mailto:info@societygurukul.com", // Replace with your actual email
    content: (
      <div>
        <p className="font-semibold">Get in touch</p>
        <p className="text-sm text-gray-600">info@societygurukul.com</p>
      </div>
    ),
  },
];

const Social = () => {
  const [active, setActive] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setActive(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-[9999] flex flex-col gap-3">
      {social.map((item, index) => (
        <div
          key={index}
          className="relative"
          // onMouseEnter={() => handleMouseEnter(index)}
          // onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            aria-label={item.title}
            className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 text-lg lg:text-xl ${
              item.title === "WhatsApp" ? "bg-[#25D366]" : "bg-[#C9A227]"
            }`}
          >
            {item.icon}
          </a>

        </div>
      ))}
    </div>
  );
};

export default memo(Social);
