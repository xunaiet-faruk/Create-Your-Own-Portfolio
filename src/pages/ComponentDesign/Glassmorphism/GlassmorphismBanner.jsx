// frontend/src/components/ComponentDesign/Glassmorphism/GlassmorphismBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
    FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, 
    FiUser, FiCpu, FiCornerDownRight, FiMessageSquare
} from 'react-icons/fi';

const GlassmorphismBanner = ({ data = {} }) => {
    const {
        fullName = 'Your Name',
        title = 'Your Title',
        description = 'Add your description here',
        github = '',
        linkedin = '',
        email = '',
        resumeLink = '',
        profileImage = '',
        experiences = [],
        projects = [],
        skills = []
    } = data;

    const experienceYears = experiences.length || 0;
    const projectsCount = projects.length || 0;
    const skillsCount = skills.length || 0;

    // 🚀 Intro Stagger Trigger
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    };

    // 🚀 Smooth Scale & Fade Up for Components
    const itemVariants = {
        hidden: { opacity: 0, y: 35, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] } 
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1.2, ease: "easeInOut" } }
    };

    // 🔄 INFINITY ANIMATIONS
    
    // ১. ইমেজের জন্য ফ্লোটিং অ্যানিমেশন
    const infinityImageFloat = {
        animate: {
            y: [0, -12, 0],
            rotate: [0, 1, -1, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // ২. মেইন নামের জন্য গ্লো ইফেক্ট
    const infinityTextGlow = {
        animate: {
            scale: [1, 1.015, 1],
            textShadow: [
                "0 0 4px rgba(34,211,238,0.1)",
                "0 0 20px rgba(168,85,247,0.4)",
                "0 0 4px rgba(34,211,238,0.1)"
            ],
            transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // ৩. সিস্টেম কোডের জন্য সাইবার ব্লিংক ইফেক্ট
    const infinityCyberBlink = {
        animate: {
            opacity: [1, 0.5, 1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    // ৪. হ্যালো টেক্সটের জন্য টাইপিং + ওয়েভ ইফেক্ট
    const helloTextVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const helloWave = {
        animate: {
            rotate: [0, 15, -10, 15, -5, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // ৫. টাইপিং এনিমেশন (টেক্সটের জন্য)
    const typingVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    // ৬. ব্লিংকিং কার্সর
    const cursorBlink = {
        animate: {
            opacity: [0, 1, 0],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <section id="hero" className="w-full mt-12 flex items-center justify-center relative overflow-hidden px-6 py-20">
            
            {/* Background Structural Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-25">
                <motion.div initial="hidden" animate="visible" variants={lineVariants} className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></motion.div>
                <motion.div initial="hidden" animate="visible" variants={lineVariants} className="absolute bottom-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl w-full mx-auto relative z-10 flex flex-col gap-16"
            >
                {/* TOP HEADER - BIGGER TEXT */}
                <div className="w-full flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs md:text-sm tracking-[0.25em] text-gray-400">
                    <motion.span variants={itemVariants} className="flex items-center gap-3">
                        <FiCpu className="text-cyan-400 animate-spin text-lg" style={{ animationDuration: '5s' }} /> 
                        <motion.span {...infinityCyberBlink}>CORE://SYSTEM_ACTIVE</motion.span>
                    </motion.span>
                    <motion.span variants={itemVariants} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        ONLINE
                    </motion.span>
                </div>

                {/* MAIN LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* LEFT SIDE: BIGGER IMAGE & STATS */}
                    <div className="lg:col-span-5 flex flex-col items-center gap-10">
                        
                        {/* 🔄 Infinity Floating Big Avatar */}
                        <motion.div 
                            variants={itemVariants}
                            {...infinityImageFloat}
                            className="relative p-3 border border-white/15 rounded-3xl transition-all duration-300 hover:border-cyan-400/50"
                        >
                            {/* Neon Targets Corner */}
                            <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-purple-500"></div>
                            
                            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 relative shadow-2xl">
                                {profileImage ? (
                                    <img src={profileImage} alt={fullName} className="w-full h-full object-cover contrast-110" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <FiUser className="text-7xl text-white/10" />
                                    </div>
                                )}
                                
                                {/* Active Laser Scanner Line */}
                                <motion.div 
                                    animate={{ y: [0, 250, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]"
                                />
                            </div>
                        </motion.div>

                        {/* Bigger Stats Wrapper */}
                        <motion.div variants={itemVariants} className="w-full grid grid-cols-3 gap-4 text-center font-mono">
                            <div className="p-4 border-l-2 border-white/10 hover:border-cyan-400 transition-all bg-white/[0.01]">
                                <span className="text-xs text-gray-500 block uppercase tracking-widest font-bold">EXP</span>
                                <span className="text-2xl font-black text-white mt-1 block">{experienceYears}+ Yrs</span>
                            </div>
                            <div className="p-4 border-l-2 border-white/10 hover:border-purple-400 transition-all bg-white/[0.01]">
                                <span className="text-xs text-gray-500 block uppercase tracking-widest font-bold">PRJ</span>
                                <span className="text-2xl font-black text-white mt-1 block">{projectsCount} Unit</span>
                            </div>
                            <div className="p-4 border-l-2 border-white/10 hover:border-pink-400 transition-all bg-white/[0.01]">
                                <span className="text-xs text-gray-500 block uppercase tracking-widest font-bold">SKL</span>
                                <span className="text-2xl font-black text-white mt-1 block">{skillsCount} Tech</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: BIGGER TYPOGRAPHY */}
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                        
                        {/* ===== UPDATED: HELLO TEXT WITH ANIMATION ===== */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center gap-3 font-mono text-sm md:text-base text-cyan-400 tracking-[0.15em] font-semibold"
                        >
                            <FiMessageSquare className="text-lg" />
                            <motion.span 
                                variants={helloTextVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-2"
                            >
                                <motion.span {...helloWave} className="inline-block text-2xl">
                                    👋
                                </motion.span>
                                <span>HELLO, I'M</span>
                            </motion.span>
                            <motion.span 
                                {...infinityCyberBlink}
                                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            ></motion.span>
                        </motion.div>

                        {/* 🔄 Infinity Glowing Bold Text */}
                        <motion.div {...infinityTextGlow} className="space-y-4">
                            <motion.h1 
                                variants={itemVariants} 
                                className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none"
                            >
                                {fullName}
                            </motion.h1>
                            
                            {/* Title with Typing Animation */}
                            <motion.div className="flex items-center gap-2">
                                <span className="text-gray-400 font-mono text-sm">//</span>
                                <motion.p 
                                    variants={itemVariants} 
                                    className="text-lg sm:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold tracking-widest"
                                >
                                    {title}
                                </motion.p>
                                <motion.span
                                    {...cursorBlink}
                                    className="w-0.5 h-8 bg-cyan-400"
                                ></motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Animated Separator */}
                        <motion.div variants={lineVariants} className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent origin-left"></motion.div>

                        <motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            {description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
                            {resumeLink && (
                                <motion.a 
                                    href={resumeLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-mono text-sm tracking-widest font-bold uppercase hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3 shadow-lg"
                                >
                                    <FiDownload size={16} /> FETCH_RESUME.EXE
                                </motion.a>
                            )}
                            <motion.a 
                                href="#contact" 
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-mono text-sm tracking-widest font-bold uppercase hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 flex items-center gap-3 shadow-lg"
                            >
                                ESTABLISH_CONTACT <FiArrowRight size={16} />
                            </motion.a>
                        </motion.div>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4 font-mono text-xs">
                    <motion.div variants={itemVariants} className="text-gray-400">
                        <span className="text-gray-600">CONNECT_ADDR //</span> {email || 'N/A'}
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="flex items-center gap-6">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 no-underline inline-block">
                                <FiGithub size={20} />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 no-underline inline-block">
                                <FiLinkedin size={20} />
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 no-underline inline-block">
                                <FiMail size={20} />
                            </a>
                        )}
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default GlassmorphismBanner;