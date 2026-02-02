
import React from 'react';
import { BarChart3, Users, PlayCircle, Globe, Utensils, Zap, Shield, Target } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-out] container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-display text-white mb-4">The Viral Edge</h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">Numbers don't lie. Here is how "Vlogs by HCN" impacts local food scenes and restaurant growth.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {[
            { label: 'Subscribers', value: '12.5K+', sub: 'Loyal Foodies', icon: <Users size={32} /> },
            { label: 'Total Reach', value: '3.6M+', sub: 'Viral Peak Performance', icon: <PlayCircle size={32} /> },
            { label: 'Avg Weekly Reach', value: '20K+', sub: 'Consistent Engagement', icon: <BarChart3 size={32} /> },
            { label: 'Conversion Rate', value: '12.4%', sub: 'Business Impact', icon: <Target size={32} /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl text-center group hover:border-rose-600/30 transition-all">
              <div className="text-rose-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-display text-white mb-1">{stat.value}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mb-1">{stat.label}</p>
              <p className="text-slate-600 text-[9px] font-light uppercase tracking-tight">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-rose-900/10 to-transparent rounded-[3rem] p-12 border border-white/5">
          <h3 className="text-3xl font-display text-white mb-12 text-center">Why Restaurants Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Targeted Reach", desc: "Connect with thousands of local food lovers who are actively looking for their next meal.", icon: <Globe className="text-rose-500" size={24} /> },
              { title: "Cinematic Quality", desc: "Professional production that makes your dishes look as good as they taste.", icon: <Utensils className="text-rose-500" size={24} /> },
              { title: "Fast Turnaround", desc: "Viral-ready content delivered in record time to keep your brand trending.", icon: <Zap className="text-rose-500" size={24} /> }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
