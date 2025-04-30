
import React from 'react';

const TechPartners = () => {
  const partners = [
    { 
      name: 'n8n', 
      logo: "https://n8n.io/favicon.ico" 
    },
    { 
      name: 'Make.com', 
      logo: "https://make.com/favicon.ico" 
    },
    { 
      name: 'Smartlead', 
      logo: "https://smartlead.ai/favicon.ico" 
    },
    { 
      name: 'Instantly', 
      logo: "https://instantly.ai/favicon.ico" 
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4AFFF]">
          Technology Partners
        </h2>
        
        <p className="text-[#D4AFFF] mb-12 max-w-2xl mx-auto">
          We integrate with the best automation platforms to power your workflows
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center group transition-all duration-300 hover:scale-110">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 w-32 h-32 flex items-center justify-center border border-[#9B4DFF]/30 shadow-lg mb-3 group-hover:border-[#9B4DFF]/80 transition-all">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-16 opacity-70 group-hover:opacity-100 transition-all"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/200x200/9B4DFF/FFFFFF/?text=" + partner.name;
                  }}
                />
              </div>
              <p className="text-white font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#9B4DFF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob"></div>
    </section>
  );
};

export default TechPartners;
