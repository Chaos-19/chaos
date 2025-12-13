import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-x border-white/5"
    >
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          02 // PROJECT_INDEX
        </h2>
        <span className="hidden md:block font-mono text-xs text-secondary">
          // DEPLOYED SYSTEMS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-background p-8 group hover:bg-white/[0.02] transition-colors relative h-full flex flex-col"
          >
            {/* Project Preview Image */}
            <div className="w-full aspect-video mb-8 overflow-hidden border border-white/10 relative bg-black">
              {/* Technical Overlay Effects */}
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Corner Markers */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/50 z-20"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/50 z-20"></div>

              {/* Status Indicator */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur px-2 py-1 border border-white/10">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[8px] font-mono text-white/70 tracking-widest">
                  LIVE_FEED
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-secondary border border-white/10 px-2 py-0.5">
                ID: {project.id.toString().padStart(3, "0")}
              </span>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-secondary hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.link}
                  className="text-secondary hover:text-white transition-colors"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 group-hover:underline decoration-1 underline-offset-4">
              {project.title}
            </h3>
            <p className="text-secondary mb-8 leading-relaxed font-light flex-grow">
              {project.description}
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-dim group-hover:text-secondary transition-colors uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;