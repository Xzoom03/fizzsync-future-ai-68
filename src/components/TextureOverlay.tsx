
import React from 'react';

const TextureOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      ></div>

      {/* Gradient mesh */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden opacity-30">
        <div className="absolute -top-[40%] -left-[30%] w-[160%] h-[160%] bg-gradient-conic from-transparent via-[#9B4DFF]/5 to-transparent"></div>
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#9B4DFF]/5 blur-[100px] rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default TextureOverlay;
