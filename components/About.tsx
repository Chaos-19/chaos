import React from "react";
import { EXPERIENCE } from "../constants";

const About: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-x border-white/5 relative"
    >
      {/* Section Decor */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white"></div>

      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          01 // EXPERIENCE_LOG
        </h2>
        <span className="hidden md:block font-mono text-xs text-secondary">
          // CHRONOLOGICAL ORDER
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={exp.id}
            className="group relative pl-0 md:pl-8 transition-all duration-500"
          >
            {/* Decorative Index Number */}
            <div className="hidden md:block absolute left-0 top-0 text-[10px] font-mono text-white/20 pt-8 -ml-2">
              0{index + 1}
            </div>

            {/* The Card */}
            <div className="relative bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs tracking-wider">
                    <span className="text-white/40">AT</span>
                    <span className="text-blue-200">{exp.company}</span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex self-start items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-secondary uppercase tracking-wider">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      index === 0 ? "bg-green-500 animate-pulse" : "bg-white/20"
                    }`}
                  ></span>
                  {exp.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary/80 leading-relaxed font-light text-sm md:text-base max-w-3xl">
                {exp.description}
              </p>

              {/* Technical Footer (Visible on Hover) */}
              <div className="mt-8 pt-4 border-t border-dashed border-white/10 flex justify-between items-center text-[10px] font-mono text-white/20 opacity-50 group-hover:opacity-100 transition-opacity">
                <span>REF_ID: {exp.id}99-X</span>
                <span>
                  {index === 2 ? "STATUS: ACTIVE" : "STATUS: ARCHIVED"}
                </span>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-white/60 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-white/60 transition-colors"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
