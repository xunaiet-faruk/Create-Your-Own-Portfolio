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
    
    // স্লাইড গুলো - গ্লাস ইফেক্ট এর জন্য
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
        <section className="relative w-full py-20 md:py-28 verflow-hidden">
            
            <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-5"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                            className="w-2 h-2 rounded-full bg-purple-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-purple-200 tracking-wider">ABOUT ME</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-white">About </span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </motion.div>
                
                {/* মেইন কন্টেন্ট */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* বাম দিকে - ইমেজ (শুধু চারপাশে বর্ডার অ্যানিমেশন) */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            {/* শুধু বর্ডার অ্যানিমেশন - ইমেজের চারপাশে */}
                            <motion.div 
                                className="absolute -inset-2 rounded-2xl"
                                animate={{ 
                                    rotate: [0, 360]
                                }}
                              
                              
                            />
                            
                            {/* ইমেজ */}
                            <motion.div 
                                className="relative w-72 h-72 md:w-full md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            >
                                {aboutData.userImage ? (
                                    <img src={aboutData.userImage} alt={aboutData.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                        <span className="text-7xl mb-2">✨</span>
                                        <span className="text-white/50 text-sm">{aboutData.name}</span>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* ডান দিকে - সকল কন্টেন্ট */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold text-white">{aboutData.name}</h3>
                            <p className="text-purple-300 text-base mt-1">{aboutData.title}</p>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="space-y-2">
                            <p className="text-purple-200/80 text-sm leading-relaxed">{aboutData.bio}</p>
                            <p className="text-purple-200/60 text-sm leading-relaxed">{aboutData.bio2}</p>
                        </motion.div>
                        
                        {/* স্লাইডিং সেকশন - গ্লাস ইফেক্ট (কোটের জায়গায়) */}
                        <motion.div variants={itemVariants} className="relative pt-2">
                            <div className="relative max-w-md">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                                    >
                                        <div className="flex items-start gap-3">
                                            <motion.div 
                                                className="text-3xl"
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {slides[currentSlide].icon}
                                            </motion.div>
                                            <div>
                                                <h4 className="text-white font-semibold text-sm">{slides[currentSlide].title}</h4>
                                                <p className="text-purple-200/70 text-xs leading-relaxed mt-1">{slides[currentSlide].desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                
                                {/* ছোট নেভিগেশন */}
                                <div className="flex justify-center gap-1 mt-3">
                                    {slides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`transition-all duration-300 ${
                                                currentSlide === idx
                                                    ? 'w-4 h-1 bg-purple-400 rounded-full'
                                                    : 'w-1 h-1 bg-purple-400/30 rounded-full'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* স্ট্যাটস */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-2">
                            <div className="text-center p-2 rounded-xl bg-purple-500/10 border border-purple-400/20">
                                <div className="text-xl font-bold text-white">{aboutData.experience}</div>
                                <div className="text-[10px] text-purple-300">Years Exp</div>
                            </div>
                            <div className="text-center p-2 rounded-xl bg-purple-500/10 border border-purple-400/20">
                                <div className="text-xl font-bold text-white">{aboutData.projects}</div>
                                <div className="text-[10px] text-purple-300">Projects</div>
                            </div>
                            <div className="text-center p-2 rounded-xl bg-purple-500/10 border border-purple-400/20">
                                <div className="text-xl font-bold text-white">{aboutData.clients}</div>
                                <div className="text-[10px] text-purple-300">Clients</div>
                            </div>
                        </motion.div>
                        
                        {/* স্কিলস */}
                        <motion.div variants={itemVariants}>
                            <div className="flex flex-wrap gap-1.5">
                                {aboutData.skills.map((skill, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-[10px] text-purple-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* ফোকাস এরিয়া */}
                        <motion.div variants={itemVariants}>
                            <div className="flex flex-wrap gap-1.5">
                                {aboutData.focusAreas.map((area, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-pink-500/20 border border-pink-400/30 rounded-full text-[10px] text-pink-200">
                                        {area}
                                    </span>
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