
import React from 'react';
import { STATS } from '../constants.tsx';
import { Users, Eye, Video } from 'lucide-react';

const Stats: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'users': return <Users size={32} />;
      case 'eye': return <Eye size={32} />;
      case 'video': return <Video size={32} />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {STATS.map((stat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex justify-center text-red-600">
              {getIcon(stat.icon)}
            </div>
            <div className="text-6xl font-display text-white tracking-wider">{stat.value}</div>
            <div className="text-sm font-bold uppercase tracking-[0.4em] text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
