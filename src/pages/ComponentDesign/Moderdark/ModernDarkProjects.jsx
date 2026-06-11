import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkProjects = ({ data }) => {
    // কন্টেইনার অ্যানিমেশন (স্ট্যাগার ইফেক্ট এর জন্য)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // সিঙ্গেল প্রজেক্ট কার্ড অ্যানিমেশন
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <div className="w-full text-white space-y-12 py-12 border-t border-gray-800/60">
            
            {/* 🎯 সেকশন হেডার */}
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tight">
                    Featured <span className="text-cyan-400">Projects</span>
                </h2>
                <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0"></div>
                <p className="text-sm text-gray-500 pt-1">A selection of digital products and web applications I've built.</p>
            </div>

            {/* 📁 প্রজেক্ট কার্ডস গ্রিড */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {data?.projects && data.projects.length > 0 ? (
                    data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group rounded-2xl bg-gray-800/30 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-sm"
                        >
                            {/* ১. প্রজেক্ট ইমেজ হোল্ডার */}
                            <div className="h-48 sm:h-52 w-full overflow-hidden bg-gray-900 border-b border-gray-800 relative">
                                {project?.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-700 text-sm font-mono bg-gray-950">
                                        No Preview Image 🖼️
                                    </div>
                                )}
                                {/* ইমেজ হোভার ওভারলে ইফেক্ট */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* ২. প্রজেক্ট ডিটেইলস বডি */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200">
                                        {project?.title || 'Project Name'}
                                    </h3>
                                    <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                                        {project?.description || 'A modern web application crafted with optimal structure and clean code practices.'}
                                    </p>
                                </div>

                                {/* ৩. টেকনোলজি ব্যাজেস (যদি থাকে) */}
                                {project?.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.technologies.map((tech, techIdx) => (
                                            <span 
                                                key={techIdx}
                                                className="text-[11px] font-mono font-medium text-cyan-400/90 bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* ৪. লাইভ এবং কোড লিংক বাটন */}
                                <div className="flex items-center gap-4 pt-4 mt-auto border-t border-gray-800/80">
                                    {project?.liveLink && (
                                        <a 
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link"
                                        >
                                            Live Demo
                                            <span className="transform group-hover/link:translate-x-0.5 transition-transform">→</span>
                                        </a>
                                    )}
                                    {project?.githubLink && (
                                        <a 
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400 hover:text-white flex items-center gap-1"
                                        >
                                            Code Base
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    // ফলব্যাক ডেমো কার্ড (যদি ইউজারের কোনো প্রজেক্ট ডাটা না থাকে)
                    [1, 2, 3].map((item) => (
                        <div key={item} className="p-8 rounded-2xl bg-gray-800/10 border border-gray-800 text-gray-600 text-center text-sm font-medium">
                            Project Card Blueprint {item}
                        </div>
                    ))
                )}
            </motion.div>

        </div>
    );
};

export default ModernDarkProjects;