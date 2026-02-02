
import React from 'react';
import { Youtube, Instagram, Mail } from 'lucide-react';
import { CHANNEL_URL, INSTAGRAM_URL, LOGO_URL } from '../constants.tsx';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-rose-600/10">
                <img 
                  src={LOGO_URL} 
                  alt="Vlogs by HCN Brand Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => { 
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100"; 
                  }}
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-display tracking-widest text-white leading-none">VLOGS BY HCN</h3>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-rose-600 mt-1">Cinematic Food Stories</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-light max-w-xs mt-2">
              Making food go viral, one frame at a time. The ultimate partner for restaurant growth and brand storytelling.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Home', 'Work', 'Stats', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors font-bold"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={CHANNEL_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white/10 transition-all"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white/10 transition-all"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="mailto:vlogsbyhcn@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white/10 transition-all"
              title="Email Us"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 text-center flex flex-col gap-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Vlogs by HCN Media Agency • All Rights Reserved
          </p>
          <a 
            href="https://www.instagram.com/mr_sandeep_4007/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-white/20 hover:text-rose-500 transition-colors font-medium uppercase tracking-[0.2em]"
          >
            Website Credits to mr_sandeep_4007
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
