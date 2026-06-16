import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// খালি জায়গার জন্য কাইনেটিক অ্যানিমেশন কম্পোনেন্ট
const KineticOrbitDecoration = ({ activeIndex, total }) => {
    return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden pointer-events-none mt-10">
            <svg className="w-full h-full max-w-[240px]" viewBox="0 0 200 200">
                <motion.circle 
                    cx="100" cy="100" r="80" 
                    stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="transparent"
                />
                <motion.circle 
                    cx="100" cy="100" r="80" 
                    stroke="#22d3ee" strokeWidth="1.5" fill="transparent"
                    strokeDasharray="40 180"
                    animate={{ rotate: 360 }}
                    transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                />
                <motion.circle 
                    cx="100" cy="100" r="50" 
                    stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="transparent"
                    strokeDasharray="10 10"
                />
                <motion.circle 
                    cx="100" cy="100" r="30" 
                    stroke="rgba(34,211,238,0.15)" strokeWidth="1" fill="transparent"
                    animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.g
                    animate={{ rotate: (activeIndex * (360 / (total || 1))) }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    style={{ originX: "100px", originY: "100px" }}
                >
                    <circle cx="100" cy="20" r="5" fill="#22d3ee" />
                    <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                </motion.g>
                <text x="100" y="106" textAnchor="middle" className="font-mono text-[11px] font-bold fill-white/40 tracking-widest">
                    STAGE_0{activeIndex + 1}
                </text>
            </svg>
        </div>
    );
};

// ইন্ডিভিজুয়াল এক্সপেরিয়েন্স কার্ড
const ExperienceCard = ({ exp, index, activeIndex }) => {
    const isActive = index === activeIndex;

    return (
        <motion.div
            initial={{ opacity: 0, x: 150, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.9, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ 
                scale: 1.01,
                x: 12,
                rotate: 0.8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className={`relative w-full p-8 rounded-lg border transition-all duration-500 mb-8 overflow-hidden backdrop-blur-sm ${
                isActive 
                    ? 'border-white/20 bg-white/[0.02] shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/5 bg-transparent shadow-md shadow-black/40'
            }`}
        >
            {/* বাম পাশের টপ কর্নার বর্ডার (হালকা নিয়ন টাচ) */}
            <div className={`absolute left-0 top-0 w-8 h-8 border-l border-t transition-colors duration-500 rounded-tl-lg ${
                isActive ? 'border-cyan-400/60' : 'border-white/10'
            }`} />
            
            {/* ডান পাশের বটম কর্নার বর্ডার (হালকা নিয়ন টাচ) */}
            <div className={`absolute right-0 bottom-0 w-8 h-8 border-r border-b transition-colors duration-500 rounded-br-lg ${
                isActive ? 'border-cyan-400/60' : 'border-white/10'
            }`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                
                {/* মেটা ইনফো কলাম */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold tracking-widest text-white/30">
                                // 0{index + 1}
                            </span>
                            <span className="w-8 h-[1px] bg-white/10" />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                            <div className="text-xs font-mono font-bold tracking-wider text-cyan-400">
                                {exp.period || "2024 - PRESENT"}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/40">
                                <span>📍 LOCATION: {exp.location || "REMOTE"}</span>
                            </div>
                        </div>
                    </div>

                    {/* লোকেশনের নিচে খালি জায়গায় বড় অ্যানিমেটেড এক্সপেরিয়েন্স ইমোজি */}
                    <div className=" hidden lg:block">
                        <motion.div 
                            className={`text-6xl filter drop-shadow-[0_4px_12px_rgba(34,211,238,0.2)] transition-all duration-500 ${
                                isActive ? 'opacity-40 scale-110 animate-pulse' : 'opacity-10 scale-100'
                            }`}
                        >
                            {index % 2 === 0 ? '🚀' : '🚀'}
                        </motion.div>
                    </div>
                </div>

                {/* কন্টেন্ট ডেসক্রিপশন কলাম */}
                <div className="lg:col-span-8 space-y-4">
                    <div>
                        <motion.h3 
                            className="text-2xl font-black tracking-tight uppercase leading-none transition-colors duration-300"
                            style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
                        >
                            {exp.title || exp.role || "Position"}
                        </motion.h3>
                        <p className="text-white/40 font-mono text-xs tracking-wider mt-1.5 block">
                            🏢 COMPANY: <span className="text-white/70">{exp.company || "COMPANY_NAME"}</span>
                        </p>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed font-normal max-w-2xl">
                        {exp.description || "Responsible for developing and maintaining web applications, collaborating with cross-functional teams, and delivering high-quality solutions."}
                    </p>

                    {/* টেকনোলজি ট্যাগস */}
                    {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ y: -2 }}
                                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-md border border-white/10 text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all bg-transparent"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const AnimatedWorkExperience = ({ data }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [experienceData, setExperienceData] = useState([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const processData = () => {
            if (!data) {
                setExperienceData([]);
                return;
            }

            if (data.experiences && Array.isArray(data.experiences) && data.experiences.length > 0) {
                const formatted = data.experiences.map((exp) => ({
                    title: exp.title || exp.role || "Position",
                    company: exp.company || "Company",
                    period: exp.period || exp.duration || "Date",
                    description: exp.description || "Job description",
                    location: exp.location || "Remote",
                    skills: exp.skills || []
                }));
                setExperienceData(formatted);
                return;
            }

            if (data.experience && Array.isArray(data.experience) && data.experience.length > 0) {
                setExperienceData(data.experience);
                return;
            }

            if (data.work && Array.isArray(data.work) && data.work.length > 0) {
                setExperienceData(data.work);
                return;
            }

            if (Array.isArray(data) && data.length > 0) {
                setExperienceData(data);
                return;
            }

            setExperienceData([]);
        };

        processData();
    }, [data]);

    useEffect(() => {
        if (experienceData.length === 0) return;
        
        const unsubscribe = springProgress.on("change", (latest) => {
            const totalItems = experienceData.length;
            const currentItem = Math.min(Math.floor(latest * totalItems), totalItems - 1);
            setActiveIndex(currentItem >= 0 ? currentItem : 0);
        });
        return () => unsubscribe();
    }, [springProgress, experienceData.length]);

    if (experienceData.length === 0) {
        return null;
    }

    return (
        <section 
            ref={containerRef} 
            className="relative w-full py-24 lg:py-12 px-4 sm:px-8 lg:px-16 bg-transparent select-none overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* মেইন গ্রিড লেআউট */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* বাম প্যানেল - Sticky Dashboard */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 pb-4">
                        <div className="space-y-4">
                           
                            
                            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
                                Work <br />
                                <span className="text-white/20">History.</span>
                            </h2>
                        </div>

                        {/* লাইভ টাইমলাইন ট্র্যাক ড্যাশবোর্ড */}
                        <div className="hidden lg:block border-l border-white/10 pl-4 space-y-4 pt-4">
                            {experienceData.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className={`text-xs font-mono transition-all duration-300 flex items-center gap-3 ${
                                        idx === activeIndex 
                                            ? 'text-cyan-400 font-bold translate-x-2' 
                                            : 'text-white/40 font-normal'
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full transition-transform ${
                                        idx === activeIndex ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' : 'bg-white/10'
                                    }`} />
                                    <span>{item.company}</span>
                                </div>
                            ))}
                        </div>

                        {/* ডাইনামিক 3D নোড অরবিট অ্যানিমেশন */}
                        <KineticOrbitDecoration 
                            activeIndex={activeIndex} 
                            total={experienceData.length} 
                        />
                    </div>

                    {/* ডান পাশের প্যানেল - কার্ড ম্যাট্রিক্স */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="popLayout">
                            {experienceData.map((exp, index) => (
                                <ExperienceCard 
                                    key={index} 
                                    exp={exp} 
                                    index={index} 
                                    activeIndex={activeIndex}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default AnimatedWorkExperience;