
import React from 'react';
import { Play, Eye, Clock } from 'lucide-react';
// Fix: Renamed FEATURE_VIDEOS to FEATURED_VIDEOS to match the export in constants.tsx
import { FEATURED_VIDEOS } from '../constants.tsx';

const VideoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-4">Watch Now</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white">Featured Vlogs</h3>
        </div>
        <p className="text-slate-400 max-w-sm font-light">
          Handpicked stories that define the essence of this channel. From adrenaline to tranquility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Fix: Updated map call to use FEATURED_VIDEOS */}
        {FEATURED_VIDEOS.map((video) => (
          <a 
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900 border border-white/5">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                <div className="bg-red-600 p-6 rounded-full shadow-2xl">
                  <Play size={32} className="text-white fill-current" />
                </div>
              </div>

              {/* Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-4 text-white text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Eye size={14} /> {video.views}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {video.duration}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-2xl font-display text-white tracking-wide group-hover:text-red-500 transition-colors">
                {video.title}
              </h4>
              <div className="w-12 h-1 bg-red-600 mt-2 transition-all group-hover:w-full duration-500"></div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold border border-white/10 transition-all">
          Explore All Content
        </button>
      </div>
    </div>
  );
};

export default VideoGrid;