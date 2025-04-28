
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1A1F2C]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/d3a1b068-8305-4c1d-951e-0b8e704124c1.png"
              alt="FizzSync Logo"
              className="w-10 h-10"
            />
            <a href="/" className="text-white font-outfit font-bold text-2xl">
              FizzSync
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-4">
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-10 py-6 text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
