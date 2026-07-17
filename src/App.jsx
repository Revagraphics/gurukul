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



export default function App() {
  return (
    <div className="bg-[#0B1D33]">
      <Navbar />
      <Hero />
      <TrustStrip/>
      <WhyChooseGurukul/>
      <AcademicPrograms/>
      <KeyBenefits/>
      <ParentTrust/>
      <FAQ/>
      <FinalCta/>
      <Social/>
      <Footer/>
      <GoToTop/>
      

    </div>
  );
}