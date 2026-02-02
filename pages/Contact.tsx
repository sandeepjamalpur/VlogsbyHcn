
import React from 'react';
import { Mail, Instagram, MessageCircle, ArrowUpRight, Phone, Utensils } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_URL } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <div className="py-24 animate-[fadeIn_0.5s_ease-out] container mx-auto px-6 flex flex-col min-h-full">
      <div className="max-w-6xl mx-auto text-center flex-grow">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Utensils size={24} className="text-rose-600" />
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-rose-600">Growth Agency</h2>
        </div>
        
        <h2 className="text-7xl md:text-8xl font-display text-white mb-8 leading-none">
          Let's Make Your Food <br/> <span className="text-rose-600 text-glow">Go Viral</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-20 leading-relaxed max-w-2xl mx-auto">
          Ready to show the world what you're cooking? I handle everything from cinematic production to viral distribution. Choose your preferred way to connect.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Option */}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <h4 className="text-2xl font-display text-white tracking-wider mb-2">WhatsApp Business</h4>
            <p className="text-slate-500 text-sm mb-6">+91 91826 77742</p>
            <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px]">
              Chat Now <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Instagram Option */}
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-rose-600/50 hover:bg-rose-600/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
              <Instagram size={28} />
            </div>
            <h4 className="text-2xl font-display text-white tracking-wider mb-2">Direct Message</h4>
            <p className="text-slate-500 text-sm mb-6">@hcn_vlogs</p>
            <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-[10px]">
              Open Instagram <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Email Option */}
          <a 
            href="mailto:vlogsbyhcn11@gmail.com"
            className="group flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-rose-600/50 hover:bg-rose-600/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h4 className="text-2xl font-display text-white tracking-wider mb-2">Email Inquiry</h4>
            <p className="text-slate-500 text-sm mb-6">vlogsbyhcn@gmail.com</p>
            <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-[10px]">
              Send Email <ArrowUpRight size={14} />
            </div>
          </a>
        </div>

        <div className="mt-24 p-12 bg-rose-600/10 rounded-[3rem] border border-rose-600/20 max-w-2xl mx-auto mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <MessageCircle size={24} className="text-rose-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500">Fast Track</span>
            </div>
            <h3 className="text-3xl font-display text-white">Food Promotion Specialist</h3>
            <p className="text-slate-400 font-light text-center leading-relaxed">
              Currently accepting bookings for restaurant cinematic shoots and viral food discovery vlogs. Limited slots available monthly for premium brand partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto text-center opacity-30 pb-4">
         <a 
          href="https://www.instagram.com/mr_sandeep_4007/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] text-white hover:text-rose-500 transition-colors uppercase tracking-[0.3em] font-medium"
        >
          Website Credits to mr_sandeep_4007
        </a>
      </div>
    </div>
  );
};

export default Contact;
