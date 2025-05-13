
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import { ScrollArea } from "./ui/scroll-area";

const Footer = () => {
  const currentYear = 2024; // Fixed to 2024 as requested
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="py-12 border-t border-[#9B4DFF]/30 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/lovable-uploads/00bed8f0-66e2-42ba-82d7-5941dfd8ede5.png" 
              alt="FizzSync Logo" 
              className="h-12 mb-3" 
            />
            <p className="text-[#D4AFFF]/80 text-sm">
              Automation Systems that Scale with You
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact-form')} 
              className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
            >
              Book a Call
            </button>
            <button 
              onClick={() => setTermsOpen(true)}
              className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setPrivacyOpen(true)}
              className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
            >
              Privacy
            </button>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-[#D4AFFF]/60">
            © {currentYear} FizzSync. All rights reserved.
          </p>
        </div>
      </div>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden bg-[#2D0058]/80 backdrop-blur-md border border-[#9B4DFF]/40 rounded-2xl shadow-lg shadow-[#9B4DFF]/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Terms of Service</DialogTitle>
          </DialogHeader>
          <ScrollArea className="pr-4 custom-scrollbar h-[60vh]">
            <TermsOfService />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden bg-[#2D0058]/80 backdrop-blur-md border border-[#9B4DFF]/40 rounded-2xl shadow-lg shadow-[#9B4DFF]/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Privacy Policy</DialogTitle>
          </DialogHeader>
          <ScrollArea className="pr-4 custom-scrollbar h-[60vh]">
            <PrivacyPolicy />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
