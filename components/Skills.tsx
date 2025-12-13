import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-x border-white/5 mb-20">
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            03 // TECHNICAL_CAPABILITIES
          </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {categories.map((cat) => (
            <div key={cat} className="space-y-6">
                <h3 className="font-mono text-xs text-secondary uppercase tracking-widest border-b border-white/20 pb-2">
                    {cat}
                </h3>
                <ul className="space-y-3">
                    {SKILLS.filter(s => s.category === cat).map(skill => (
                        <li key={skill.name} className="flex items-center justify-between text-white/80 hover:text-white group cursor-default">
                            <span className="font-light">{skill.name}</span>
                            <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white rotate-45 transition-colors"></span>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;