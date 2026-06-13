import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CleanWhiteProjects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [imageErrors, setImageErrors] = useState({});
    
    const handleImageError = (projectId) => {
        setImageErrors(prev => ({
            ...prev,
            [projectId]: true
        }));
    };
    
    // লিংক ওপেন করার ফাংশন - সমস্যা সমাধান
    const openLink = (url) => {
        if (url && url !== '#' && url !== '') {
            // যদি URL http বা https দিয়ে না শুরু হয়, তাহলে যোগ করে দিন
            let finalUrl = url;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                finalUrl = 'https://' + url;
            }
            window.open(finalUrl, '_blank', 'noopener,noreferrer');
        }
    };
    
    // ডাইনামিক প্রজেক্ট ডাটা
    const projects = data?.projects || [];
    
    // অ্যানিমেশন ভেরিয়েন্টস
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
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    
    return (
        <div className="w-full py-16 md:py-20">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <motion.div 
                                key={i}
                                className="w-1 h-1 rounded-full bg-yellow-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">
                        <span className="text-gray-800">Featured </span>
                        <span className="text-yellow-500 font-bold">Projects</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-px bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-8 h-px bg-yellow-400"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm max-w-md mx-auto mt-4">
                        {data?.tagline || "Some of my best work"}
                    </p>
                </motion.div>
                
                {/* প্রজেক্ট গ্রিড */}
                {projects.length > 0 ? (
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="rounded-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 overflow-hidden bg-white/30">
                                    
                                    {/* ইমেজ এলাকা */}
                                    <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                                        {project.imageUrl && project.imageUrl !== '' && !imageErrors[project.id] ? (
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={() => handleImageError(project.id)}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <span className="text-5xl mb-2">🚀</span>
                                                <span className="text-xs text-gray-400">{project.title}</span>
                                            </div>
                                        )}
                                        
                                        <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300"></div>
                                    </div>
                                    
                                    {/* কন্টেন্ট */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-500 transition-colors mb-2">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                                            {project.description}
                                        </p>
                                        
                                        {/* টেক স্ট্যাক */}
                                        {project.technologies && project.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <span key={idx} className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="text-[10px] text-gray-400">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        
                                        {/* লিংক বাটন - সঠিকভাবে কাজ করবে */}
                                        <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                                            {project.liveLink && project.liveLink !== '' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openLink(project.liveLink);
                                                    }}
                                                    className="text-xs font-medium text-yellow-500 hover:text-yellow-600 transition-colors flex items-center gap-1"
                                                >
                                                    Live Demo →
                                                </button>
                                            )}
                                            {project.githubLink && project.githubLink !== '' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openLink(project.githubLink);
                                                    }}
                                                    className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                                                >
                                                    GitHub →
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-400">No projects added yet</p>
                    </div>
                )}
                
                {/* প্রজেক্ট স্ট্যাটস */}
                {projects.length > 0 && (
                    <motion.div 
                        className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-500">{projects.length}+</div>
                            <div className="text-[10px] text-gray-400">Total Projects</div>
                        </div>
                        <div className="w-px h-6 bg-gray-200"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-500">
                                {projects.filter(p => p.liveLink && p.liveLink !== '').length}
                            </div>
                            <div className="text-[10px] text-gray-400">Live Deployed</div>
                        </div>
                    </motion.div>
                )}
                
                {/* ডেকোরেটিভ বটম */}
                <motion.div 
                    className="mt-10 pt-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs text-gray-300">
                        <span>✦</span>
                        <span>More projects coming soon</span>
                        <span>✦</span>
                    </div>
                </motion.div>
            </div>
            
            {/* প্রজেক্ট ডিটেইলস মোডাল */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-40 bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                                {selectedProject.imageUrl && selectedProject.imageUrl !== '' && !imageErrors[selectedProject.id] ? (
                                    <img 
                                        src={selectedProject.imageUrl} 
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                        onError={() => handleImageError(selectedProject.id)}
                                    />
                                ) : (
                                    <span className="text-6xl">🚀</span>
                                )}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {selectedProject.description}
                                </p>
                                
                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Features</h4>
                                        <ul className="grid grid-cols-1 gap-1">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <span className="text-yellow-500">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    {selectedProject.liveLink && selectedProject.liveLink !== '' && (
                                        <button
                                            onClick={() => openLink(selectedProject.liveLink)}
                                            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition-colors text-sm"
                                        >
                                            🔗 Live Demo
                                        </button>
                                    )}
                                    {selectedProject.githubLink && selectedProject.githubLink !== '' && (
                                        <button
                                            onClick={() => openLink(selectedProject.githubLink)}
                                            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors text-sm"
                                        >
                                            📂 GitHub Repository
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CleanWhiteProjects;