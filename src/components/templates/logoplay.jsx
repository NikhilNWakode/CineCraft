import React from 'react';
import { Clapperboard } from 'lucide-react';

const CineCraftLogo = () => {
  return (
    <div className="flex items-center h-[10vh] w-full gap-2 p-2" style={{ background: '#1F1E24' }}>
      <div className="relative ">
        <Clapperboard 
          size={32} 
          className="text-white" 
          strokeWidth={1.5}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent mix-blend-overlay" />
      </div>
     
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold playfair-display-sc-regular text-white tracking-wide">
            CINE<span className="text-red-500">CRAFT</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-8 bg-red-500/30" />
          <p className="lg:text-[8px] md:text-[6px] text-[6px]  text-gray-400 tracking-[0.25em] uppercase">
           Discover Cinema 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CineCraftLogo;