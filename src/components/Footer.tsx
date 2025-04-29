
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-[#9B4DFF]/30 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="/lovable-uploads/89d21f06-d24b-4660-9f2c-af010eb194f8.png"
              alt="FizzSync Logo"
              className="h-10 w-auto"
            />
            <p className="text-[#D4AFFF]/70 mt-2 text-sm">
              AI Automation, Synced for the Future.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <div>
              <h4 className="font-medium text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">AI Automation</a></li>
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">Workflow Design</a></li>
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">Integration Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">hello@fizzsync.com</a></li>
                <li><a href="#" className="text-[#D4AFFF]/80 hover:text-[#D4AFFF] transition-colors">+1 (555) 123-4567</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-[#9B4DFF]/20">
          <p className="text-sm text-[#D4AFFF]/60 mb-4 md:mb-0">
            © {currentYear} FizzSync. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
