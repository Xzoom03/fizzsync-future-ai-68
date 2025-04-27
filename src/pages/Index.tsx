import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

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

        {/* Dashboard Mockup */}
        <DashboardMockup />

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
