
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants.tsx';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'work' },
    { label: 'Stats', id: 'stats' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  // Close menu on resize if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 py-3">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button 
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 group text-left"
        >
          {/* Logo Container */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl border border-white/10 group-hover:scale-110 transition-transform shadow-lg shadow-rose-600/10 shrink-0">
            <img 
              src={LOGO_URL} 
              alt="Vlogs by HCN Brand Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-display tracking-widest text-white leading-none">VLOGS BY HCN</span>
            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-rose-600 mt-1 hidden sm:block">Cinematic Food Stories</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-rose-500 ${
                currentPage === item.id ? 'text-rose-500' : 'text-slate-400'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <div className="h-0.5 w-full bg-rose-500 mt-1 animate-[grow_0.3s_ease]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white hover:text-rose-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-left text-sm font-bold uppercase tracking-[0.3em] py-2 transition-all ${
                currentPage === item.id ? 'text-rose-500' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
