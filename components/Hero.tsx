import React from "react";
import { ArrowDownRight, Globe } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative border-x border-white/5 bg-blueprint"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/5"></div>

      <div className="relative z-10 animate-fade-in-up">
        {/* Pre-header Meta */}
        <div className="flex items-center gap-4 text-xs font-mono text-secondary mb-8 pl-1">
          <span className="border border-white/20 px-2 py-1 rounded-sm">
            LOC: {PORTFOLIO_DATA.location}
          </span>
          <span className="border border-white/20 px-2 py-1 rounded-sm">
            ROLE: FULL_STACK
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
          Chaos
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
            DEV.
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-start gap-12 mt-12">
          <div className="md:w-1/3 border-t border-white/20 pt-6">
            <h2 className="text-lg font-mono text-white mb-4 flex items-center gap-2">
              <Globe size={16} /> MISSION OBJECTIVE
            </h2>
            <p className="text-secondary text-base leading-relaxed">
              {PORTFOLIO_DATA.bio}
            </p>
          </div>

          <div className="md:w-1/3 border-t border-white/20 pt-6">
            <h2 className="text-lg font-mono text-white mb-4">CURRENT STACK</h2>
            <div className="flex flex-wrap gap-2 text-sm font-mono text-secondary">
              {["React", "Next.js", "Node", "Gemini AI", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-white/5 px-2 py-1 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="md:w-1/3 flex justify-end items-end">
            <a
              href="#projects"
              className="group flex items-center gap-4 text-xl text-white font-bold hover:gap-6 transition-all"
            >
              VIEW_WORKS{" "}
              <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
