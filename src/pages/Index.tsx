
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { CheckCheck, Shield, Clock, Star, Rocket, Users, Wrench, Hand } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#9B4DFF]" />,
      title: "No More Hiring Hassles",
      description: "Automate repetitive tasks instantly — no interviews, no overhead, just results."
    },
    {
      icon: <Star className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Simple to Use, Powerful Results",
      description: "Our AI systems work out of the box with zero technical skills needed."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Completely Risk-Free",
      description: "Start today with no upfront commitment — satisfaction guaranteed."
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Unlimited Revisions, Unlimited Growth",
      description: "We tweak and improve your automations until they're exactly what you need."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Built for Speed, Designed for Scale",
      description: "Launch faster, scale smarter — without growing your headcount."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#9B4DFF]" />,
      title: "24/7 Automation, 0% Stress",
      description: "Our AI doesn't sleep — automate workflows around the clock."
    },
    {
      icon: <CheckCheck className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Custom Solutions, No Cookie-Cutter Bots",
      description: "Every system is tailor-made to fit your exact business needs."
    },
    {
      icon: <Hand className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Replace Manual Work Instantly",
      description: "Free your team from repetitive tasks and focus on real growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0033] to-[#2D0058] text-white font-inter">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2b26f885-7efd-47c7-928f-66cfc17a8aa1.png')] bg-cover bg-center mix-blend-soft-light opacity-40"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2b26f885-7efd-47c7-928f-66cfc17a8aa1.png')] bg-center bg-no-repeat opacity-10"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
            AI Automation, Synced for the Future.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#D4AFFF] max-w-2xl mx-auto">
            Replace manual work with smart, AI-powered solutions built for speed and efficiency.
          </p>
        </div>

        {/* Features Section - Updated Style */}
        <div className="mt-32 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
            Why Choose FizzSync?
          </h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-y-16 gap-x-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex group"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-[#9B4DFF]/10 mr-5 h-fit group-hover:bg-[#9B4DFF]/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#D4AFFF] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#D4AFFF]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* How It Works Section */}
        <HowItWorks />
        
        {/* CTA Section */}
        <CTASection />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#4B0082] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-blob animation-delay-4000"></div>
      </main>
    </div>
  );
};

export default Index;
