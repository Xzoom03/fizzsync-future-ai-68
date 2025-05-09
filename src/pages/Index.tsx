
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TechPartners from "@/components/TechPartners";
import { CheckCheck, Shield, Clock, Star, Rocket, Users, Wrench, Hand } from "lucide-react";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0033] to-[#2D0058] text-white font-inter">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2b26f885-7efd-47c7-928f-66cfc17a8aa1.png')] bg-cover bg-center mix-blend-soft-light opacity-40"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2b26f885-7efd-47c7-928f-66cfc17a8aa1.png')] bg-center bg-no-repeat opacity-10"></div>
      
      <Navbar onGetStarted={scrollToForm} />
      
      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
            Smart Business Automation, Synced for the Future.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#D4AFFF] max-w-2xl mx-auto">
            Save hours of manual work, close more deals, and never miss a lead.
          </p>
        </div>

        {/* Problem We Solve Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto py-10 px-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-[#9B4DFF]/20">
          <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-6">
            The Problem We Solve
          </h2>
          <p className="text-lg text-[#D4AFFF] leading-relaxed mb-6">
            Most businesses rely on multiple tools and manual effort to handle repetitive tasks — costing time, money, and productivity.
          </p>
          <p className="text-lg text-[#D4AFFF] leading-relaxed mb-6">
            FizzSync delivers smart automation systems that replace the work of 4–5 staff members. 
            From lead generation to outreach and follow-ups, our systems run 24/7 — without hiring, training, or micromanaging.
          </p>
          <p className="text-lg text-[#D4AFFF] leading-relaxed">
            We help modern businesses scale faster by automating what slows them down.
          </p>
        </div>

        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Tech Partners Section */}
        <TechPartners />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer */}
        <Footer />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#4B0082] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-blob animation-delay-4000"></div>
      </main>
    </div>
  );
};

export default Index;
