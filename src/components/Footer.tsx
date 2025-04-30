
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-[#9B4DFF]/30 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold font-outfit bg-clip-text text-white mb-4">
            FizzSync
          </h1>
          <p className="text-[#D4AFFF]/70 text-sm mb-8">
            AI Automation, Synced for the Future.
          </p>
          
          <div className="flex space-x-5 mb-8">
            <a href="#" className="text-[#D4AFFF]/60 hover:text-[#D4AFFF] transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-[#D4AFFF]/60 hover:text-[#D4AFFF] transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-[#D4AFFF]/60 hover:text-[#D4AFFF] transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-[#D4AFFF]/60 hover:text-[#D4AFFF] transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center pt-6 border-t border-[#9B4DFF]/20">
          <p className="text-sm text-[#D4AFFF]/60">
            © {currentYear} FizzSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
