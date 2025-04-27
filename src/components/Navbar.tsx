
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-outfit font-bold text-xl">
              FizzSync
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A1F2C]/95 backdrop-blur-md">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">How It Works</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Login</a>
              <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
