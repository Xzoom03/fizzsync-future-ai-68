
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import { CheckCheck, Shield, Clock, Star, Rocket, Users, Wrench, Hand } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
      title: "No More Hiring Hassles",
      description: "Automate repetitive tasks instantly — no interviews, no overhead, just results."
    },
    {
      icon: <Star className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Simple to Use, Powerful Results",
      description: "Our AI systems work out of the box with zero technical skills needed."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Completely Risk-Free",
      description: "Start today with no upfront commitment — satisfaction guaranteed."
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Unlimited Revisions, Unlimited Growth",
      description: "We tweak and improve your automations until they're exactly what you need."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Built for Speed, Designed for Scale",
      description: "Launch faster, scale smarter — without growing your headcount."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#8B5CF6]" />,
      title: "24/7 Automation, 0% Stress",
      description: "Our AI doesn't sleep — automate workflows around the clock."
    },
    {
      icon: <CheckCheck className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Custom Solutions, No Cookie-Cutter Bots",
      description: "Every system is tailor-made to fit your exact business needs."
    },
    {
      icon: <Hand className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Replace Manual Work Instantly",
      description: "Free your team from repetitive tasks and focus on real growth."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-purple bg-line-texture text-white font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            AI Automation, Synced for the Future.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Replace manual work with smart, AI-powered solutions built for speed and efficiency.
          </p>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              Get Started
            </Button>
          </form>
        </div>

        {/* Features Grid */}
        <div className="mt-32 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#8B5CF6]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </main>
    </div>
  );
};

export default Index;
