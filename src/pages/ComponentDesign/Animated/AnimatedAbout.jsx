import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DetectUserType } from '../../../component/Utils/DetectUserType';
import { RoleBasedContent, defaultContent } from '../../../component/Utils/RoleBasedContent';

const AnimatedAbout = ({ data }) => {
    const [userType, setUserType] = useState('designer');
    const [content, setContent] = useState(defaultContent);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const detectedType = DetectUserType(data);
        setUserType(detectedType);
        setContent(RoleBasedContent[detectedType] || defaultContent);
    }, [data]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const aboutData = {
        name: data?.fullName || data?.name || content?.name || "Creative Professional",
        title: data?.title || content?.title || "Digital Creator",
        bio: data?.aboutMe || data?.description || content?.bio || "I'm passionate about creating meaningful digital experiences that connect with people.",
        bio2: data?.bio2 || "My journey started several years ago, and since then I've worked with various clients and agencies.",
        experience: data?.experience || content?.experience || "4+",
        projects: data?.projectsCompleted || content?.projects || "50+",
        clients: data?.happyClients || content?.clients || "30+",
        focusAreas: data?.focusAreas || content?.focusAreas || ["Creative Strategy", "Digital Design", "Content Creation"],
        skills: data?.skills || content?.skills || ["Creativity", "Problem Solving", "Communication"],
        userImage: data?.profileImage || data?.avatar || null,
    };
    
    const slides = [
        { icon: "🎯", title: "My Mission", desc: "Creating meaningful digital experiences that solve real problems." },
        { icon: "💡", title: "My Vision", desc: "Delivering excellence that makes a lasting impact." },
        { icon: "🚀", title: "My Approach", desc: "Creativity meets strategy, ideas come to life." },
        { icon: "🏆", title: "My Goal", desc: "Helping clients achieve their dreams through innovation." }
    ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
    
    const slideVariants = {
        enter: { x: 300, opacity: 0 },
        center: { x: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 300 } },
        exit: { x: -300, opacity: 0, transition: { duration: 0.4 } }
    };
    
    return (
        <section className="relative w-full py-12 md:py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-56 h-56 md:w-80 md:h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-block mb-3"
                    >
                        <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-xs md:text-sm text-purple-300">
                            ✦ Get to Know Me
                        </span>
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                        <span className="text-white">About </span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    
                    <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </motion.div>
                
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Left - Image with Unique Design */}
                    <motion.div 
                        className="relative flex justify-center lg:justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Rotating Ring */}
                            <motion.div
                                className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-400/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Second Ring */}
                            <motion.div
                                className="absolute -inset-8 rounded-full border-2 border-dashed border-pink-400/20"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Image Container */}
                            <motion.div 
                                className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/20"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {aboutData.userImage ? (
                                    <img 
                                        src={aboutData.userImage} 
                                        alt={aboutData.name} 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                                        <span className="text-6xl md:text-7xl mb-3">✨</span>
                                        <span className="text-white/60 text-sm md:text-base">{aboutData.name}</span>
                                    </div>
                                )}
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
                            </motion.div>
                            
                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 md:p-3 shadow-lg shadow-purple-500/30"
                                animate={{ 
                                    y: [0, -8, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <span className="text-white text-xs md:text-sm font-bold">✦</span>
                            </motion.div>
                            
                            {/* Experience Badge */}
                            <motion.div
                                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-3 shadow-lg"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <div className="text-center">
                                    <div className="text-lg md:text-xl font-bold text-white">{aboutData.experience}</div>
                                    <div className="text-[8px] md:text-[10px] text-purple-300">Years of Excellence</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    {/* Right - Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{aboutData.name}</h3>
                            <p className="text-purple-300 text-sm md:text-base mt-1">{aboutData.title}</p>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="space-y-2">
                            <p className="text-purple-200/80 text-sm leading-relaxed">{aboutData.bio}</p>
                            <p className="text-purple-200/60 text-sm leading-relaxed">{aboutData.bio2}</p>
                        </motion.div>
                        
                        {/* Stats Grid - New Design */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 md:gap-3">
                            {[
                                { value: aboutData.experience, label: "Years Exp", icon: "📅" },
                                { value: aboutData.projects, label: "Projects", icon: "🚀" },
                                { value: aboutData.clients, label: "Clients", icon: "🤝" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative group"
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                    <div className="relative text-center p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
                                        <div className="text-lg md:text-xl mb-0.5">{stat.icon}</div>
                                        <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                                        <div className="text-[8px] md:text-[10px] text-purple-300">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* Sliding Section - New Design */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="relative p-4 md:p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm"
                                    >
                                        <div className="flex items-start gap-3">
                                            <motion.div 
                                                className="text-2xl md:text-3xl flex-shrink-0"
                                                animate={{ 
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 10, -10, 0]
                                                }}
                                                transition={{ 
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }}
                                            >
                                                {slides[currentSlide].icon}
                                            </motion.div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-white font-semibold text-sm md:text-base">{slides[currentSlide].title}</h4>
                                                <p className="text-purple-200/70 text-xs md:text-sm leading-relaxed mt-1">{slides[currentSlide].desc}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Animated Progress Bar */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 5, ease: "linear" }}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                
                                {/* Navigation Dots - New Design */}
                                <div className="flex justify-center gap-1.5 mt-3">
                                    {slides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`transition-all duration-300 ${
                                                currentSlide === idx
                                                    ? 'w-8 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'
                                                    : 'w-1.5 h-1.5 bg-purple-400/30 rounded-full hover:bg-purple-400/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Skills & Focus Areas - New Design */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <div className="flex flex-wrap gap-1.5">
                                {aboutData.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/20 rounded-full text-[10px] md:text-xs text-purple-200"
                                        whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        #{skill}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {aboutData.focusAreas.map((area, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-400/20 rounded-full text-[10px] md:text-xs text-pink-200"
                                        whileHover={{ scale: 1.05, borderColor: "#ec4899" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        ✦ {area}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AnimatedAbout;