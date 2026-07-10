// frontend/src/components/ComponentDesign/Glassmorphism/GlassmorphismAbout.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
    FiUser, FiAward, FiHeart, FiTarget, FiTrendingUp, 
    FiCode, FiBriefcase, FiSmile, FiZap, FiStar,
    FiCpu, FiGlobe, FiClock, FiCheckCircle,
    FiCoffee
} from 'react-icons/fi';

const GlassmorphismAbout = ({ data = {} }) => {
    const {
        fullName = 'Your Name',
        title = 'Your Title',
        description = 'Add your description here',
        skills = [],
        experiences = [],
        projects = []
    } = data;

    // 🚀 Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, rotateY: 10 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
            transition: { duration: 0.5, type: "spring" }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Stats
    const experienceYears = experiences?.length || 0;
    const projectsCount = projects?.length || 0;
    const skillsCount = skills?.length || 0;

    // Fun facts
    const funFacts = [
        { icon: <FiCode />, label: 'Lines of Code', value: '10k+' },
        { icon: <FiCoffee />, label: 'Coffee per Day', value: '☕ 3+' },
        { icon: <FiSmile />, label: 'Happy Clients', value: '15+' },
        { icon: <FiClock />, label: 'Hours Learning', value: '1000+' }
    ];

    return (
        <section id="about" className="w-full py- px-6 relative overflow-hidden">
            
            {/* Container */}
            <div className="container mx-auto">
                
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                 
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                            Know Me Better
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A glimpse into my world, my skills, and what drives me
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                >

                    {/* ============ LEFT: PROFILE CARD ============ */}
                    <motion.div 
                        variants={cardVariants}
                        className="lg:col-span-2 relative"
                    >
                        <div className="relative backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/15 shadow-2xl shadow-black/30 p-8 overflow-hidden h-full">
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
                            
                            <div className="absolute inset-1 rounded-3xl border border-white/5 pointer-events-none"></div>

                            <div className="relative z-10">
                                {/* Profile Image Placeholder */}
                                <motion.div 
                                    variants={floatVariants}
                                    animate="animate"
                                    className="flex justify-center mb-6"
                                >
                                    <div className="relative">
                                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 shadow-2xl shadow-cyan-500/30">
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                                                {fullName?.charAt(0) || 'Y'}
                                            </div>
                                        </div>
                                        {/* Pulse Ring */}
                                        <motion.div 
                                            variants={pulseVariants}
                                            animate="animate"
                                            className="absolute -inset-2 rounded-full border border-cyan-500/20"
                                        ></motion.div>
                                    </div>
                                </motion.div>

                                {/* Name & Title */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white">{fullName}</h3>
                                    <p className="text-cyan-400/80 text-sm">{title}</p>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xl font-bold text-white">{experienceYears}+</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Experience</p>
                                    </div>
                                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xl font-bold text-white">{projectsCount}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</p>
                                    </div>
                                    <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xl font-bold text-white">{skillsCount}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Skills</p>
                                    </div>
                                </div>

                                {/* Fun Facts */}
                                <div className="grid grid-cols-2 gap-2">
                                    {funFacts.map((fact, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <span className="text-cyan-400">{fact.icon}</span>
                                            <div>
                                                <p className="text-xs font-semibold text-white">{fact.value}</p>
                                                <p className="text-[8px] text-gray-500 uppercase tracking-wider">{fact.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ============ RIGHT: ABOUT CONTENT ============ */}
                    <div className="lg:col-span-3 space-y-6">
                        
                        {/* Description */}
                        <motion.div 
                            variants={itemVariants}
                            className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/15 shadow-2xl shadow-black/30 p-8"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <FiTarget className="text-cyan-400" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Who I Am</span>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {description || 'Passionate developer with a love for creating beautiful and functional applications.'}
                            </p>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div 
                            variants={itemVariants}
                            className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/15 shadow-2xl shadow-black/30 p-8"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <FiCode className="text-purple-400" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Core Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills?.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 text-white/80 text-sm hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Value Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <motion.div 
                                variants={cardVariants}
                                className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/15 p-6 text-center hover:border-cyan-400/30 transition-all duration-300 group"
                            >
                                <motion.div 
                                    variants={floatVariants}
                                    animate="animate"
                                    className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition"
                                >
                                    <FiHeart className="text-cyan-400 text-xl" />
                                </motion.div>
                                <h4 className="text-white font-semibold text-sm">Passion</h4>
                                <p className="text-gray-400 text-xs mt-1">Love what I do</p>
                            </motion.div>

                            <motion.div 
                                variants={cardVariants}
                                className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/15 p-6 text-center hover:border-purple-400/30 transition-all duration-300 group"
                            >
                                <motion.div 
                                    variants={floatVariants}
                                    animate="animate"
                                    className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition"
                                >
                                    <FiTrendingUp className="text-purple-400 text-xl" />
                                </motion.div>
                                <h4 className="text-white font-semibold text-sm">Growth</h4>
                                <p className="text-gray-400 text-xs mt-1">Always learning</p>
                            </motion.div>

                            <motion.div 
                                variants={cardVariants}
                                className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/15 p-6 text-center hover:border-pink-400/30 transition-all duration-300 group"
                            >
                                <motion.div 
                                    variants={floatVariants}
                                    animate="animate"
                                    className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition"
                                >
                                    <FiAward className="text-pink-400 text-xl" />
                                </motion.div>
                                <h4 className="text-white font-semibold text-sm">Quality</h4>
                                <p className="text-gray-400 text-xs mt-1">Excellence matters</p>
                            </motion.div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default GlassmorphismAbout;