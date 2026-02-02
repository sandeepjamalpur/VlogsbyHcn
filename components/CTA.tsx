
import React from 'react';
import { Youtube, Bell } from 'lucide-react';
import { CHANNEL_URL } from '../constants.tsx';

const CTA: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="bg-red-600 rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-2xl shadow-red-600/20">
        {/* Abstract shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-display text-white leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Don't miss a single story. Subscribe now to join a community of 50,000+ adventurers who see the world differently.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/90 text-white border border-white/20 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-rose-600 hover:border-rose-500/50 transition-all flex items-center gap-3 shadow-xl"
            >
              <Youtube size={28} />
              Subscribe Now
            </a>
            
            <div className="flex items-center gap-3 text-white/90 font-medium">
              <Bell size={24} className="animate-bounce" />
              <span>Turn on all notifications</span>
            </div>
          </div>
          
          <p className="text-sm text-white/60 font-medium tracking-widest uppercase pt-8">
            New Cinematic Vlogs • Weekly on Sundays • 6PM EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
