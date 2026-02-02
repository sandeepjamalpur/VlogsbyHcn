
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-red-600/20 rounded-3xl blur-2xl group-hover:bg-red-600/30 transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/hcnprofile/800/1000" 
              alt="HCN Creator" 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl hidden lg:block">
            <p className="text-3xl font-display text-red-600 leading-none">100M+</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Impact Moments</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-4">The Creator</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">Beyond The Lens: <br/>The Story of HCN</h3>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            I'm a filmmaker and visual storyteller dedicated to capturing the raw, authentic beauty of life and travel. 
            "Vlogs by HCN" isn't just a channel; it's a community built on curiosity and the pursuit of adventure.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-600/10 p-3 rounded-xl border border-red-600/20 text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Global Exploration</h4>
                <p className="text-slate-500 text-sm">Traveling to the most remote corners of the Earth to bring you unique perspectives.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-600/10 p-3 rounded-xl border border-red-600/20 text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Cinematic Quality</h4>
                <p className="text-slate-500 text-sm">Every frame is crafted with care, using professional gear for an immersive experience.</p>
              </div>
            </div>
          </div>
          
          <button className="text-white font-bold border-b-2 border-red-600 pb-2 hover:text-red-600 transition-colors uppercase tracking-widest text-sm">
            Read Full Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
