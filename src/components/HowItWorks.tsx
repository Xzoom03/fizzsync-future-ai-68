
import { CheckCheck, ArrowRight, RocketIcon, LayersIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCheck className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Tell Us What You Need",
      description: "Share the tasks, workflows, or roles you want to automate. Whether it's customer support, lead generation, scheduling, or internal processes — we've got you covered."
    },
    {
      icon: <LayersIcon className="w-8 h-8 text-[#9B4DFF]" />,
      title: "We Build Custom Smart Solutions",
      description: "Our team designs and implements smart, automated systems tailored exactly to your needs. No cookie-cutter templates — only systems that fit your business."
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Integrate Seamlessly",
      description: "We connect your new automation into your existing tools, CRM, or systems without disrupting your operations. Smooth, fast, and fully optimized."
    },
    {
      icon: <RocketIcon className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Launch & Scale Effortlessly",
      description: "Once live, your automation runs 24/7. You can monitor, scale, or upgrade anytime — and we'll be right there for support and improvements."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-outfit text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-[#9B4DFF]/20 hover:border-[#9B4DFF]/40 transition-all duration-300 shadow-lg shadow-[#9B4DFF]/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#9B4DFF]/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#D4AFFF] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6A0DAD] rounded-full mix-blend-multiply filter blur-[160px] opacity-10 animate-blob"></div>
    </section>
  );
};

export default HowItWorks;
