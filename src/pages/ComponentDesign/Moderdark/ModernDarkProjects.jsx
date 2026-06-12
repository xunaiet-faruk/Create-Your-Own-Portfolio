import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernDarkProjects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');
    
    const projects = data?.projects || [];
    
    const categories = ['all', ...new Set(projects.map(p => p.category).filter(Boolean))];
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: { duration: 0.2 }
        }
    };
    
    return (
        <div className="w-full relative overflow-hidden py-16 md:py-24">
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন - শুধু সায়ান টোন */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-20"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
            
            {/* গ্রিড প্যাটার্ন */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* সেকশন হেডার - সায়ান কালার মেইনটেইন */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-5"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-cyan-400 tracking-wider">PORTFOLIO</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="text-white">Featured </span>
                        <span className="text-cyan-400">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        Handcrafted digital experiences that solve real problems
                    </p>
                    
                    {/* আন্ডারলাইন */}
                    <motion.div 
                        className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </motion.div>
                
                {/* ফিল্টার বাটন */}
                {categories.length > 1 && (
                    <motion.div 
                        className="flex flex-wrap items-center justify-center gap-2 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map((cat, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setFilter(cat)}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    filter === cat 
                                        ? 'text-cyan-400' 
                                        : 'text-gray-500 hover:text-gray-300'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {filter === cat && (
                                    <motion.div 
                                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                                        layoutId="activeFilter"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10 capitalize">
                                    {cat === 'all' ? 'All Work' : cat}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
                
                {/* প্রজেক্ট গ্রিড - সম্পূর্ণ নতুন কার্ড ডিজাইন */}
                {filteredProjects.length > 0 ? (
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={filter}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id || index}
                                        variants={cardVariants}
                                        layout
                                        onClick={() => setSelectedProject(project)}
                                        className="group cursor-pointer"
                                    >
                                        {/* নতুন কার্ড ডিজাইন - স্ট্যাকড কার্ড */}
                                        <div className="relative rounded-2xl overflow-hidden bg-gray-900/40 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2">
                                            
                                            {/* ইমেজ কন্টেইনার */}
                                            <div className="relative h-52 overflow-hidden">
                                                {project?.image ? (
                                                    <>
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        {/* ইমেজ ওভারলে */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    </>
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-gray-800/50 flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center">
                                                            <span className="text-3xl">🚀</span>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {/* হোভারে দেখা যাওয়া ক্যাটাগরি ব্যাজ */}
                                                <div className="absolute top-3 left-3">
                                                    {project.category && (
                                                        <div className="px-2 py-1 rounded-md bg-cyan-500/90 backdrop-blur-sm">
                                                            <span className="text-[10px] font-mono text-white uppercase tracking-wider">
                                                                {project.category}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* ডেকোরেটিভ নম্বর - হোভারে পরিবর্তন */}
                                                <motion.div 
                                                    className="absolute bottom-3 right-3 text-5xl font-black text-gray-800/50 group-hover:text-cyan-500/20 transition-all duration-300"
                                                    animate={{ 
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </motion.div>
                                            </div>
                                            
                                            {/* কন্টেন্ট সেকশন */}
                                            <div className="p-5 space-y-3">
                                                {/* টাইটেল */}
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                                                    {project.title || 'Project Name'}
                                                </h3>
                                                
                                                {/* বর্ণনা */}
                                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                                    {project.description || 'A modern web application crafted with optimal structure and clean code practices.'}
                                                </p>
                                                
                                                {/* টেক স্ট্যাক */}
                                                {project.technologies && project.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                                        {project.technologies.slice(0, 3).map((tech, techIdx) => (
                                                            <span 
                                                                key={techIdx}
                                                                className="text-[9px] font-mono text-cyan-400/80 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.technologies.length > 3 && (
                                                            <span className="text-[9px] text-gray-500">
                                                                +{project.technologies.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                                
                                                {/* লিংক বাটন */}
                                                <div className="flex items-center gap-4 pt-3 mt-1">
                                                    <motion.div 
                                                        className="flex items-center gap-1 text-xs text-cyan-400 group/link"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <span>View Case Study</span>
                                                        <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                                                    </motion.div>
                                                </div>
                                            </div>
                                            
                                            {/* বটম গ্রেডিয়েন্ট বার - হোভারে গ্রো */}
                                            <motion.div 
                                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600"
                                                initial={{ width: "0%" }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-800/30 flex items-center justify-center mb-4">
                            <span className="text-3xl">📁</span>
                        </div>
                        <p className="text-gray-500">No projects found</p>
                    </div>
                )}
                
              
            </div>
            
            {/* মোডাল */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 overflow-hidden"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-64 overflow-hidden">
                                {selectedProject.image ? (
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-gray-800/50 flex items-center justify-center">
                                        <span className="text-4xl">🚀</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {selectedProject.description}
                                </p>
                                
                                {selectedProject.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="flex gap-4 pt-4">
                                    {selectedProject.liveLink && (
                                        <a 
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 text-center px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {selectedProject.githubLink && (
                                        <a 
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ModernDarkProjects;