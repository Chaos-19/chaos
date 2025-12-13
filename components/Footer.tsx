import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background text-center font-mono text-[10px] text-secondary/40 uppercase tracking-widest">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
        <span>© {new Date().getFullYear()} Kalkidan Getachew</span>
        <span>ChaosDev</span>
        <span>SECURE_CONNECTION</span>
      </div>
    </footer>
  );
};

export default Footer;
