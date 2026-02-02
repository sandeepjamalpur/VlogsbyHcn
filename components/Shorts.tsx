
import React from 'react';
import { SHORTS } from '../constants.tsx';
import { Zap } from 'lucide-react';

const Shorts: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <Zap className="text-red-600 fill-current" />
        <h3 className="text-4xl font-display text-white tracking-wider uppercase">Recent Shorts</h3>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {SHORTS.map((short) => (
            <div 
              key={short.id}
              className="min-w-[260px] aspect-[9/16] rounded-3xl overflow-hidden relative group snap-center cursor-pointer border border-white/5"
            >
              <img 
                src={short.thumbnail} 
                alt="Short" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest bg-red-600 px-3 py-1 rounded-full w-max">Trending</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subtle Fade on sides */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
      </div>
      
      <p className="text-center text-slate-500 text-sm mt-8 animate-pulse">
        Swipe to explore more shorts
      </p>
    </div>
  );
};

export default Shorts;
