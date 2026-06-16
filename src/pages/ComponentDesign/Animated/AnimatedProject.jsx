import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index, totalProjects, progress }) => {
    const segment = 1 / totalProjects;
    const start = index * segment;
    const end = (index + 1) * segment;
    
    const entryStart = start;
    const entryEnd = start + segment * 0.4;
    const exitStart = end - segment * 0.2;
    const exitEnd = end;

    // ১ম কার্ডের ক্ষেত্রে স্ক্রল করার আগে থেকেই স্ক্রিনে সেন্টারে (0%) থাকবে, পরের কার্ডগুলো ডান পাশে (100%) থাকবে
    const initialX = index === 0 ? "0%" : "100%";

    const x = useTransform(
        progress, 
        [entryStart, entryEnd, exitStart, exitEnd], 
        [initialX, "0%", "0%", "-100%"]
    );
    
    const rotate = useTransform(
        progress, 
        [entryStart, entryEnd, exitEnd], 
        [index === 0 ? 0 : 12, 0, -12]
    );
    
    const scale = useTransform(
        progress, 
        [entryStart, entryEnd, exitStart, exitEnd], 
        [index === 0 ? 1 : 0.8, 1, 1, 0.8]
    );
    
    const opacity = useTransform(
        progress, 
        [entryStart, entryEnd, exitStart, exitEnd], 
        [index === 0 ? 1 : 0, 1, 1, 0]
    );

    const y = useTransform(
        progress, 
        [entryStart, entryEnd, exitEnd], 
        [index === 0 ? 0 : 60, 0, -60]
    );

    return (
        <motion.div
            style={{
                x,
                y,
                rotate,
                scale,
                opacity,
                zIndex: totalProjects - index,
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div className="w-full max-w-3xl h-[420px] bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between group relative overflow-hidden shadow-2xl">
                
                {/* হোভার ইফেক্ট */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* কর্নার বর্ডার */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:w-12 group-hover:h-12" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:w-12 group-hover:h-12" />

                {/* টপ মেটা */}
                <div className="flex items-center justify-between font-mono text-xs tracking-widest text-white/40 relative z-10">
                    <span>// PROJECT_0{index + 1}</span>
                    <span className="px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold uppercase text-[10px]">
                        {project.category || "FEATURED"}
                    </span>
                </div>

                {/* মেইন কন্টেন্ট */}
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

                {/* বাটন */}
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

                {/* গ্লো ইফেক্ট */}
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            </div>
        </motion.div>
    );
};

const AnimatedProject = ({ data }) => {
    const containerRef = useRef(null);
    const [projectList, setProjectList] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        if (!data) return;
        
        let rawList = Array.isArray(data) ? data : [];
        if (!Array.isArray(data) && typeof data === 'object') {
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
            status: item.status || "COMPLETED"
        }));

        setProjectList(formatted);
    }, [data]);

    if (!projectList || projectList.length === 0) {
        return null; 
    }

    // প্রতিটা কার্ডের জন্য ১৫০ভিয়েইচ ট্রাক এরিয়া রাখা হয়েছে স্ক্রলিং স্মুথনেস মেইনটেইনের জন্য
    const scrollHeight = `${projectList.length * 150}vh`;

    return (
        <div ref={containerRef} className="relative w-full block bg-transparent">
            
            {/* সেকশন হেডার */}
            <div className="relative z-20 pt-12 pb-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-white">Featured </span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-3" />
                <p className="text-purple-200/60 text-sm max-w-md mx-auto mt-3">
                    Scroll down to explore my work
                </p>
            </div>
            
            {/* স্ক্রলিং ট্র্যাক এরিয়া */}
            <div style={{ height: scrollHeight }} className="w-full relative block">
                
                {/* স্টিকি ভিউপোর্ট */}
                <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 z-10">
                    
                    {/* কার্ড কন্টেইনার */}
                    <div className="relative w-full max-w-3xl h-[420px]">
                        {isClient && projectList.map((project, index) => (
                            <ProjectCard 
                                key={project.id || index} 
                                project={project} 
                                index={index} 
                                totalProjects={projectList.length}
                                progress={scrollYProgress} 
                            />
                        ))}
                    </div>
              
                </div>
            </div>
        </div>
    );
};

export default AnimatedProject;