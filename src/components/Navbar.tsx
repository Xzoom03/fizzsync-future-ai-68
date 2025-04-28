
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1A0033]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/89d21f06-d24b-4660-9f2c-af010eb194f8.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-4">
            <Button className="bg-[#9B4DFF] hover:bg-[#8A3DFF] text-white px-10 py-6 text-lg shadow-lg shadow-[#9B4DFF]/30">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
