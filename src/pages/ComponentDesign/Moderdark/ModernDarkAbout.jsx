import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkAbout = ({ data }) => {
    // Animation variants for better control
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const quoteVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    return (
        <div className="container mx-auto w-full relative overflow-hidden">
            {/* Background glowing orb - adds a modern tech vibe */}
            <div className="absolute top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-10 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[70px] -z-10"></div>
            
            <div className="w-full px-4 sm:px-6 lg:px- py-16 md:py-24">
                <motion.div 
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {/* Decorative vertical line - left side */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent hidden lg:block"></div>
                    
                    <div className="lg:pl-12">
                        {/* Section header with badge and title */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-10">
                            <motion.div variants={itemVariants} className="relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                    </span>
                                    <span className="text-xs font-mono text-cyan-400 tracking-wider">ABOUT</span>
                                </div>
                            </motion.div>
                            
                            <motion.h2 
                                variants={itemVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
                            >
                                <span className="bg-gradient-to-r from-white via-white to-cyan-400/60 bg-clip-text text-transparent">
                                    Who Am
                                </span>
                                <span className="text-cyan-400 ml-3">I?</span>
                            </motion.h2>
                            
                            <motion.div 
                                variants={itemVariants}
                                className="hidden sm:block flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent"
                            ></motion.div>
                        </div>
                        
                        {/* Main content area with card-like feel */}
                        <motion.div 
                            variants={itemVariants}
                            className="relative bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-6 md:p-8 lg:p-10"
                        >
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent rounded-2xl pointer-events-none"></div>
                            
                            {/* Quote icon and text */}
                            <div className="relative z-10">
                                <motion.div variants={quoteVariants} className="mb-6">
                                    <svg className="w-10 h-10 text-cyan-400/20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </motion.div>
                                
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                    {data?.aboutMe || data?.description || "I'm a passionate developer who loves building innovative and user-friendly digital experiences. With a strong foundation in modern technologies, I focus on writing clean, efficient, and maintainable code."}
                                </p>
                                
                                {/* Decorative line under text */}
                                <div className="mt-8 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                            </div>
                        </motion.div>
                        
                        {/* Optional: Stats or highlights row - adds uniqueness without changing colors */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-6 mt-8 justify-start"
                        >
                            {[
                                { label: "Projects", value: "+20" },
                                { label: "Experience", value: "4+ Years" },
                                { label: "Clients", value: "Worldwide" }
                            ].map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">{stat.value}</div>
                                        <div className="text-gray-500 text-xs tracking-wide">{stat.label}</div>
                                    </div>
                                    {idx < 2 && <div className="w-px h-8 bg-white/10 mx-2"></div>}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ModernDarkAbout;