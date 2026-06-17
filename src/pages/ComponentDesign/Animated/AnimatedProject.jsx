import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ৩ডি স্থায়ী অ্যাঁকা-বাঁকা এবং স্লাইড ভেরিয়েন্ট
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "120%" : "-120%",
    rotateY: direction > 0 ? 45 : -45,  
    rotateX: 12,                         
    rotateZ: direction > 0 ? 6 : -6,     
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    rotateY: -15,   
    rotateX: 10,    
    rotateZ: -3,    
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 220, damping: 24 },
      rotateY: { duration: 0.5, ease: "easeOut" },
      rotateX: { duration: 0.5, ease: "easeOut" },
      rotateZ: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "120%" : "-120%",
    rotateY: direction < 0 ? 45 : -45,
    rotateX: -12,
    rotateZ: direction < 0 ? -6 : 6,
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring", stiffness: 220, damping: 24 },
      rotateY: { duration: 0.4 },
      opacity: { duration: 0.3 },
    },
  }),
};

const AnimatedProject = ({ data }) => {
  const [projectList, setProjectList] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    if (!data) return;
    let rawList = Array.isArray(data) ? data : [];
    if (!Array.isArray(data) && typeof data === "object") {
      rawList = data.projects || data.work || data.projectsData || [];
    }

    const formatted = rawList.map((item, idx) => ({
      id: item.id || item._id || idx,
      title: item.title || item.name || "UNTITLED",
      category: item.category || item.type || "FEATURED",
      description: item.description || item.desc || "A modern web application built with cutting-edge technologies.",
      tags: item.technologies || item.tags || item.skills || [],
      liveLink: item.liveLink || item.link || item.demo || null,
      githubLink: item.githubLink || item.github || item.source || null,
      status: item.status || "COMPLETED",
    }));

    setProjectList(formatted);
  }, [data]);

  // অটো-স্লাইডার মেকানিজম
  useEffect(() => {
    if (projectList.length <= 1) return;

    const timer = setInterval(() => {
      setPage(([prevPage, _]) => [prevPage + 1, 1]);
    }, 3800); 

    return () => clearInterval(timer);
  }, [projectList]);

  if (!projectList || projectList.length === 0) return null;

  const activeIndex = Math.abs(page % projectList.length);
  const project = projectList[activeIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="container mx-auto px-4 relative block bg-transparent my-12 overflow-x-clip">
      
      {/* সেকশন হেডার */}
      <div className="relative z-20 pt-8  pb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">Featured </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-3" />
      </div>

      {/* স্লাইডার এরিয়া */}
      <div className="w-full flex flex-col items-center justify-center relative min-h-[520px]">
        
        <div 
          style={{ perspective: 1600, transformStyle: "preserve-3d" }} 
          className="relative w-full max-w-3xl h-[440px] flex items-center justify-center"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              {/* মূল কার্ড বডি */}
              <div className="w-full max-w-3xl h-[420px] bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between group relative overflow-hidden shadow-[0_30px_100px_-40px_rgba(255,255,255,0.05)]">
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-cyan-500/[0.03]" />

                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:w-12 group-hover:h-12" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:w-12 group-hover:h-12" />

                <div className="flex items-center justify-between font-mono text-xs tracking-widest text-white/40 relative z-10">
                  <span>// PROJECT_0{activeIndex + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold uppercase text-[10px]">
                    {project.category || "FEATURED"}
                  </span>
                </div>

                <div className="my-auto w-full space-y-4 relative z-10">
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors">
                    {project.description || "A modern web application built with cutting-edge technologies."}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-full border border-white/10 text-white/40 bg-white/5 hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10 relative z-10">
                  <div className="flex gap-3">
                    {project.liveLink ? (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[11px] font-bold tracking-wider hover:shadow-lg hover:shadow-cyan-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🔗 LIVE DEMO →
                      </motion.a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/30 text-[11px] font-bold cursor-not-allowed">
                        🔗 NO DEMO
                      </span>
                    )}

                    {project.githubLink ? (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-[11px] font-bold tracking-wider hover:bg-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📂 SOURCE
                      </motion.a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/30 text-[11px] font-bold cursor-not-allowed">
                        📂 NO SOURCE
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-white/20 hidden sm:block">
                    {project.status || "COMPLETED"}
                  </span>
                </div>

                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ইন্ডিকেটর এবং বাটন */}
        <div className="flex items-center justify-center gap-8 mt-10 z-20">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 text-white flex items-center justify-center transition-all shadow-lg text-lg"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {projectList.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-cyan-400" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 text-white flex items-center justify-center transition-all shadow-lg text-lg"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnimatedProject;