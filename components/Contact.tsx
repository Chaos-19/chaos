import React, { useState } from 'react';
import { Send, Terminal, Mail, MapPin, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('TRANSMISSION SENT. ACKNOWLEDGED.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-x border-white/5 relative">
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          04 // INITIALIZE_UPLINK
        </h2>
        <span className="hidden md:block font-mono text-xs text-secondary">
          // OPEN FOR OPPORTUNITIES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info Module */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal size={120} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              DIRECT_LINE
            </h3>
            
            <p className="text-secondary mb-8 leading-relaxed font-light">
              Currently accepting new contract commissions and full-time engineering roles. 
              Initiate communication via the secure form or direct email protocol.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-4 text-white/80">
                <MapPin size={16} className="text-secondary" />
                <span>{PORTFOLIO_DATA.location}</span>
              </div>
              
              <div className="flex items-center gap-4 group/email cursor-pointer" onClick={handleCopy}>
                <Mail size={16} className="text-secondary" />
                <span className="text-white group-hover/email:text-blue-300 transition-colors">{PORTFOLIO_DATA.email}</span>
                <button className="text-secondary hover:text-white transition-colors ml-auto">
                  {copied ? <Check size={14} className="text-green-500"/> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {Object.entries(PORTFOLIO_DATA.social).map(([platform, url]) => (
               <a 
                 key={platform} 
                 href={url}
                 target="_blank"
                 rel="noreferrer"
                 className="flex-1 border border-white/10 bg-background hover:bg-white text-secondary hover:text-black py-4 text-center font-mono text-xs uppercase tracking-widest transition-all"
               >
                 {platform}
               </a>
            ))}
          </div>
        </div>

        {/* Transmission Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
           <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-secondary uppercase tracking-wider">Agent Name</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-white text-white p-3 text-sm font-mono outline-none transition-colors placeholder-white/20"
                  placeholder="ENTER_NAME"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-secondary uppercase tracking-wider">Contact Frequency (Email)</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-white text-white p-3 text-sm font-mono outline-none transition-colors placeholder-white/20"
                  placeholder="ENTER_EMAIL"
                  required
                />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-mono text-secondary uppercase tracking-wider">Message Payload</label>
              <textarea 
                rows={6}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-white/[0.02] border border-white/10 focus:border-white text-white p-3 text-sm font-mono outline-none transition-colors placeholder-white/20 resize-none"
                placeholder="ENTER_DATA_PACKET..."
                required
              />
           </div>

           <button 
             type="submit" 
             className="w-full bg-white text-black font-bold font-mono text-sm py-4 hover:bg-white/90 transition-colors flex items-center justify-center gap-3 uppercase tracking-widest"
           >
             <Send size={16} />
             Transmit Data
           </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;