import React from 'react';
import { Aperture } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-6 md:px-12 font-mono text-xs tracking-wider">
      {/* Brand / ID */}
      <a href="#" className="flex items-center gap-3 group">
        <Aperture size={16} className="text-white group-hover:rotate-180 transition-transform duration-700" />
        <span className="font-bold text-white uppercase">SYS.ARCH // <span className="text-secondary font-normal group-hover:text-white transition-colors">Kalkidan Choas</span></span>
      </a>

      {/* Navigation Coordinates */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="group flex items-center gap-2 text-secondary hover:text-white transition-colors uppercase"
          >
            <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors">0{index + 1}</span>
            {item}
          </a>
        ))}
      </div>

      {/* Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border border-green-500/20 bg-green-500/10 px-2 py-1 rounded">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500 text-[10px] font-bold">ONLINE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;