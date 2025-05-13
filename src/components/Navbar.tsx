
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const refreshPage = () => {
    window.location.href = '/';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#1A0033]/85 backdrop-blur-md shadow-lg shadow-[#9B4DFF]/10 border-b border-[#9B4DFF]/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a onClick={refreshPage} className="group cursor-pointer flex items-center">
              <h1 className="text-3xl font-bold font-outfit text-white group-hover:text-[#D4AFFF] transition-colors duration-300 cursor-pointer">
                FizzSync
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-gradient-to-r from-[#9B4DFF] to-[#8A3DFF] hover:from-[#8A3DFF] hover:to-[#7A2DFF] text-white px-10 py-6 text-lg shadow-lg shadow-[#9B4DFF]/30 rounded-xl border border-[#9B4DFF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#9B4DFF]/40 hover:scale-[1.03]"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
