import react, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import TrustStrip from "./section/TrustStrip";
import WhyChooseGurukul from "./section/WhyChooseGurukul";
import AcademicPrograms from "./section/AcademicPrograms";
import Process from "./section/Process";
import ParentTrust from "./section/ParentTrust";
import FinalCta from "./section/FinalCta";
import FAQ from "./components/FAQ";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import KeyBenefits from "./section/KeyBenefits";
import PopupForm from "./components/PopupForm";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0B1D33]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <WhyChooseGurukul />
      <AcademicPrograms />
      <KeyBenefits />
      <ParentTrust />
      <FinalCta />
      <Social />
      <Footer />
      <GoToTop />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </div>
  );
}
