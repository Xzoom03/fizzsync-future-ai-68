
import React from 'react';

const AbstractDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Diagonal abstract lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[10%] left-[-5%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#9B4DFF] to-transparent transform rotate-[15deg]"></div>
        <div className="absolute top-[20%] left-[-5%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#9B4DFF] to-transparent transform rotate-[-8deg]"></div>
        <div className="absolute top-[40%] left-[-5%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#9B4DFF] to-transparent transform rotate-[5deg]"></div>
        <div className="absolute top-[60%] left-[-5%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#9B4DFF] to-transparent transform rotate-[-12deg]"></div>
        <div className="absolute top-[80%] left-[-5%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#9B4DFF] to-transparent transform rotate-[10deg]"></div>
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgLz4KICA8cGF0aCBkPSJNMCAwdjYwaDYwVjB6TTU5IDU5SDFWMWg1OHoiIGZpbGw9IiM5QjREREYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgLz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Circular decorations */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9B4DFF] rounded-full opacity-[0.03] blur-3xl"></div>
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[#6A0DAD] rounded-full opacity-[0.04] blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4B0082] rounded-full opacity-[0.025] blur-3xl"></div>
    
      {/* Dots pattern */}
      <div className="hidden md:block absolute right-10 top-32 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {Array(24).fill(0).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#9B4DFF] rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="hidden md:block absolute left-20 bottom-40 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {Array(16).fill(0).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#9B4DFF] rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbstractDecoration;
