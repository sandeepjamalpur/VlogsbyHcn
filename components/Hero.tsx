
import React from 'react';
import { Play, Youtube, Utensils } from 'lucide-react';
import { CHANNEL_URL } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-[#0a0a0a]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-[fadeIn_1s_ease-out]">
        <div className="inline-flex items-center gap-2 bg-rose-600/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-rose-600/20">
          <Utensils size={14} className="text-rose-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-white/80">Cinematic Food Promotion Agency</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-display text-white mb-6 tracking-tighter drop-shadow-2xl">
          Food <span className="text-rose-600">•</span> Stories <span className="text-rose-600">•</span> Growth
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-12 leading-relaxed font-light">
          Experience world-class food storytelling through the lens of <span className="text-white font-semibold">HCN</span>. 
          We turn culinary masterpieces into viral sensations for the digital age.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-rose-600/20"
          >
            <Youtube size={24} className="group-hover:rotate-12 transition-transform" />
            Grow Your Brand
          </a>
          <a 
            href="#videos"
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold border border-white/10 backdrop-blur-sm transition-all hover:scale-105"
          >
            <Play size={20} className="fill-current" />
            Watch Showreels
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white font-bold">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-rose-600 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
