
import React from 'react';
import { Youtube, TrendingUp, Star, Quote, CheckCircle2 } from 'lucide-react';
import { CHANNEL_URL } from '../constants.tsx';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const testimonials = [
    {
      name: "The Spice Garden",
      role: "Restaurant Owner",
      text: "HCN turned our signature Biryani into a viral reel that brought in 500+ new customers in one week. The quality is unmatched.",
      stat: "+300% Footfall"
    },
    {
      name: "Burger Craft Co.",
      role: "Marketing Manager",
      text: "We've worked with many creators, but HCN's cinematic eye for detail is what really sets our brand apart on social media.",
      stat: "1.2M+ Reach"
    },
    {
      name: "Street Bites",
      role: "Vendor",
      text: "The raw authenticity he captures is exactly what our audience loves. Our engagement has doubled since the promo.",
      stat: "2x Engagement"
    }
  ];

  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20"
            alt="Food background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-600/20 px-4 py-2 rounded-full mb-8">
            <TrendingUp size={16} className="text-rose-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500">Trusted by 50+ Local Brands</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-none tracking-tight text-glow">
            Turning Food Into <br/> <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">Viral Stories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            I help restaurants and food brands explode their reach through high-quality, cinematic social content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-rose-600/20"
            >
              Promote Your Food
            </button>
            <a 
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
            >
              <Youtube size={24} className="text-rose-600" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By / Clients Ticker */}
      <section className="py-12 bg-black overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-8">Powering Growth For</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-xl md:text-2xl font-display text-white tracking-widest">KFC</span>
            <span className="text-xl md:text-2xl font-display text-white tracking-widest">DOMINO'S</span>
            <span className="text-xl md:text-2xl font-display text-white tracking-widest">HALDIRAM'S</span>
            <span className="text-xl md:text-2xl font-display text-white tracking-widest">BURGER KING</span>
            <span className="text-xl md:text-2xl font-display text-white tracking-widest">PUNJAB GRILL</span>
          </div>
        </div>
      </section>

      {/* Intro Stats Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 border-y border-white/5 py-12">
          <div className="text-center">
            <h3 className="text-4xl font-display text-white mb-2">3.6M+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Highest Short Views</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-display text-white mb-2">12.5K+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">YouTube Subscribers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-display text-white mb-2">20K+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Average Weekly Reach</p>
          </div>
        </div>
      </section>

      {/* Content Types / Services */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-4 uppercase tracking-tight">Our Services</h2>
            <div className="w-12 h-1 bg-rose-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Street Food Reviews", desc: "Raw, authentic footage that captures the soul of the city's best eats. We make 'local' look 'global'." },
              { title: "Restaurant Promos", desc: "Cinematic showcases highlighting your chef's best work, atmosphere, and the dining experience." },
              { title: "Viral Food Shorts", desc: "Short, snappy edits designed specifically for the IG Reels and YT Shorts algorithms to maximize reach." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm border border-white/5 p-10 rounded-3xl hover:border-rose-600/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-rose-600/5 rounded-full blur-2xl group-hover:bg-rose-600/10 transition-all"></div>
                <Star className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-display text-white mb-4 tracking-wider uppercase">{item.title}</h4>
                <p className="text-slate-400 font-light text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-rose-500 mb-4">
            <CheckCircle2 size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-display text-white mb-6 uppercase">Voices of the Kitchen</h2>
          <p className="text-slate-400 font-light text-lg">See how we've helped restaurant brands scale their digital presence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] relative group hover:bg-white/[0.05] transition-all">
              <Quote className="text-rose-600/20 absolute top-6 right-6" size={48} />
              <div className="mb-6">
                <div className="text-rose-500 text-2xl font-display mb-1">{t.stat}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Verified Result</div>
              </div>
              <p className="text-slate-300 italic mb-8 font-light leading-relaxed">"{t.text}"</p>
              <div>
                <h5 className="text-white font-bold text-lg">{t.name}</h5>
                <p className="text-rose-500 text-xs uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA for Contact */}
      <section className="py-24 bg-gradient-to-t from-rose-950/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-display text-white mb-12 uppercase tracking-tighter">Ready for Your <br/><span className="text-rose-600">Viral Moment?</span></h2>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-5 rounded-2xl font-bold text-xl border border-rose-500/30 transition-all scale-100 hover:scale-105 shadow-xl shadow-rose-600/30"
            >
              Book a Shoot
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
