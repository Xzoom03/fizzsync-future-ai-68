
import { Shield, Zap, Clock, CheckCheck, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Faster Delivery",
      description: "Get your automation live in days, not weeks."
    },
    {
      icon: <CheckCheck className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Tailored Solutions",
      description: "Custom-built automations made exactly for your business needs."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#9B4DFF]" />,
      title: "24/7 Automation",
      description: "Your business runs non-stop, even when you're offline."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Unlimited Revisions",
      description: "We tweak and perfect until you're 100% satisfied."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#9B4DFF]" />,
      title: "Secure and Scalable",
      description: "Enterprise-grade security with room to grow effortlessly."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-outfit text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Why Choose FizzSync?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-[#9B4DFF]/20 hover:border-[#9B4DFF]/40 transition-all duration-300 shadow-lg shadow-[#9B4DFF]/5 h-full"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-[#9B4DFF]/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[#D4AFFF] leading-relaxed text-sm">
                    {feature.description}
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

export default WhyChooseUs;
