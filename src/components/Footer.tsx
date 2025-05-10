
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const Footer = () => {
  const currentYear = 2024; // Fixed to 2024 as requested
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  return (
    <footer className="py-12 border-t border-[#9B4DFF]/30 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/00bed8f0-66e2-42ba-82d7-5941dfd8ede5.png" 
                alt="FizzSync Logo" 
                className="h-10 mr-2" 
              />
              <h1 className="text-2xl font-bold font-outfit text-white">
                FizzSync
              </h1>
            </div>
            <p className="text-[#D4AFFF]/80 text-sm mb-4">
              Automation Systems that Scale with You
            </p>
          </div>
          
          {/* Right Column - Navigation Links */}
          <div className="flex flex-col md:items-end">
            <nav className="flex flex-col space-y-2">
              <Link to="#" className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors">
                Pricing
              </Link>
              <Link to="#" className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors">
                How It Works
              </Link>
              <Link to="#" className="text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors">
                Book a Call
              </Link>
              <button 
                onClick={() => setTermsOpen(true)}
                className="text-left text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="text-left text-[#D4AFFF]/70 hover:text-[#D4AFFF] transition-colors"
              >
                Privacy
              </button>
            </nav>
          </div>
        </div>
        
        <div className="flex justify-center pt-8 border-t border-[#9B4DFF]/20 mt-8">
          <p className="text-sm text-[#D4AFFF]/60">
            © {currentYear} FizzSync. All rights reserved.
          </p>
        </div>
      </div>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#1A0033] border border-[#9B4DFF]/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Terms of Service</DialogTitle>
          </DialogHeader>
          <TermsOfService />
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#1A0033] border border-[#9B4DFF]/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Privacy Policy</DialogTitle>
          </DialogHeader>
          <PrivacyPolicy />
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
