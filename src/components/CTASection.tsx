
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Ready to Automate Your Future?
        </h2>
        
        <p className="text-xl text-[#D4AFFF] mb-10 max-w-2xl mx-auto">
          Launch faster, grow smarter — with zero risk.
        </p>
        
        <Button 
          className="bg-[#9B4DFF] hover:bg-[#8A3DFF] text-white px-10 py-7 text-xl font-medium shadow-lg shadow-[#9B4DFF]/30 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Book a Free Consultation
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4B0082] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default CTASection;
