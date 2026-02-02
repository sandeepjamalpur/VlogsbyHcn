
import React, { useEffect, useRef } from 'react';
import { Play, Youtube, Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants.tsx';

interface CinematicVideoCardProps {
  videoUrl: string;
  posterUrl: string;
  label: string;
  category: string;
  link: string;
}

const CinematicVideoCard: React.FC<CinematicVideoCardProps> = ({ videoUrl, posterUrl, label, category, link }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden group border border-white/10 bg-black shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:border-rose-600/30"
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img 
          src={posterUrl} 
          alt={label} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
        />
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-700"
        />
      </div>
      
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-2 md:gap-4 z-10">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 w-fit">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/90">{category}</span>
        </div>
        <h4 className="text-2xl md:text-5xl font-display text-white tracking-widest drop-shadow-lg group-hover:text-rose-500 transition-colors flex items-center gap-4">
          {label} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={32} />
        </h4>
      </div>

      {/* Play indicator for hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <div className="bg-rose-600/20 backdrop-blur-sm p-8 rounded-full border border-rose-600/40">
           <Play size={48} className="text-white fill-current" />
        </div>
      </div>
    </a>
  );
};

const Work: React.FC = () => {
  const foodProjects = [
    { 
      title: "The Ultimate Biryani Quest", 
      url: "https://www.youtube.com/shorts/hpPwTg4eCV8",
      views: "Viral",
      platform: "youtube",
      thumbnail: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "KFC Cinematic Wings", 
      url: "https://www.youtube.com/shorts/PtXN7jFjBeA",
      views: "1.2M",
      platform: "youtube",
      thumbnail: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Authentic Street Momos", 
      url: "https://www.instagram.com/reel/DKmNmSsRP81/",
      views: "Viral",
      platform: "instagram",
      thumbnail: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Gourmet Burger Craft", 
      url: "https://www.youtube.com/shorts/XlDyzRIItY4",
      views: "Trending",
      platform: "youtube",
      thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Cinematic Biryani Showcase", 
      url: "https://www.instagram.com/reel/DR4ZEEXkceL/",
      views: "New",
      platform: "instagram",
      thumbnail: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600"
    },
    { 
      title: "Traditional Dessert Tour", 
      url: "https://www.youtube.com/@VlogsbyHCN",
      views: "Viral",
      platform: "youtube",
      thumbnail: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const motionFilms = [
    {
      label: "Mahindra Scorpio: Built for Dominance",
      category: "Automobile Visuals",
      link: "https://www.youtube.com/watch?v=82GR0JZ1E-E",
      videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=31818256a00c6d26338e55e56e0d37e5e9b36952&profile_id=139&oauth2_token_id=57447761",
      posterUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1920"
    },
    {
      label: "Tirupati: Spiritual Serenity",
      category: "Travel Films",
      link: "https://www.youtube.com/watch?v=F8YAjmeJvoI",
      videoUrl: "https://player.vimeo.com/external/517090025.sd.mp4?s=0e36e76878b1d9266e74659f80a2d2f70b77918a&profile_id=139&oauth2_token_id=57447761",
      posterUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  return (
    <div className="py-12 animate-[fadeIn_0.5s_ease-out] container mx-auto px-4 md:px-6">
      {/* Top Header - Pure Text, No Symbols */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-6xl md:text-9xl font-display text-white tracking-tighter uppercase leading-none">
          The Portfolio
        </h2>
        <div className="w-24 h-1 bg-rose-600 mx-auto mt-6"></div>
      </div>

      {/* Section 1: Food Showcase Grid */}
      <div className="mb-24 md:mb-32">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-3xl md:text-5xl font-display text-white mb-4 uppercase tracking-widest">Food Showcase</h3>
          <p className="text-slate-400 max-w-xl mx-auto font-light text-base md:text-lg px-4">
            Cinematic storytelling for the world's finest culinary experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {foodProjects.map((project, i) => (
            <a 
              key={i} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl md:rounded-[2rem] overflow-hidden bg-slate-900 aspect-[9/16] border border-white/5 transition-all hover:border-rose-600/50 shadow-2xl"
            >
              <img 
                src={project.thumbnail} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                alt={project.title}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="bg-rose-600 p-3 md:p-4 rounded-full shadow-xl shadow-rose-600/40 scale-75 md:scale-100">
                  <Play size={20} className="text-white fill-current" />
                </div>
              </div>

              <div className="absolute top-3 right-3 md:top-5 md:right-5">
                 <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-rose-500 border border-white/10">
                   Food
                 </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
                <div className="flex items-center gap-1.5 mb-1 md:mb-2">
                  {project.platform === 'youtube' ? (
                    <Youtube size={12} className="text-rose-500" />
                  ) : (
                    <Instagram size={12} className="text-rose-500" />
                  )}
                  <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-white/70">{project.views}</span>
                </div>
                <h4 className="text-sm md:text-2xl font-display text-white tracking-wide mb-1 flex items-center justify-between group-hover:text-rose-500 transition-colors leading-tight">
                  {project.title} <ArrowUpRight size={12} className="text-rose-500" />
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Section 2: Motion Portfolio (Automobile & Travel) */}
      <div className="mb-20">
        <div className="text-left mb-12 max-w-4xl">
          <h3 className="text-5xl md:text-8xl font-display text-white mb-4 uppercase tracking-tighter">
            Motion <span className="text-rose-600">&</span> Landscapes
          </h3>
          <p className="text-slate-500 text-lg md:text-xl font-light uppercase tracking-widest">
            Automotive Visuals • Travel Films
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24 max-w-7xl mx-auto">
          {motionFilms.map((film, idx) => (
            <div key={idx} className="animate-[fadeIn_0.8s_ease-out]">
              <CinematicVideoCard 
                videoUrl={film.videoUrl}
                posterUrl={film.posterUrl}
                label={film.label}
                category={film.category}
                link={film.link}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-32 flex flex-col items-center bg-white/[0.02] p-8 md:p-16 rounded-[3rem] border border-white/5 text-center max-w-4xl mx-auto px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-3xl md:text-5xl font-display text-white mb-6 tracking-wider">Promote Your Brand</h3>
        <p className="text-slate-400 mb-10 max-w-2xl text-base md:text-lg font-light leading-relaxed">
          Ready to elevate your visibility? I bring cinematic precision and strategic distribution to your brand's story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-rose-700 transition-all hover:scale-105 text-center shadow-lg shadow-rose-600/20"
          >
            Business Inquiries
          </a>
          <a 
            href="https://www.youtube.com/@VlogsbyHCN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none bg-white/5 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-center"
          >
            Main Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
