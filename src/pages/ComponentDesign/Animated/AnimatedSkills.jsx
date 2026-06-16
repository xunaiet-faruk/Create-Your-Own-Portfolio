import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { DetectUserType } from '../../../component/Utils/DetectUserType';
import { RoleBasedContent, defaultContent } from '../../../component/Utils/RoleBasedContent';

// ৩ডি ইন্টারেক্টিভ টিল্ট কার্ড কম্পোনেন্ট
const KineticCard = ({ skill, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // কাউন্টার অ্যানিমেশনের জন্য মোশন ভ্যালু
    const count = useMotionValue(0);
    const roundedCount = useTransform(count, (latest) => Math.round(latest));

    // মাউস মুভমেন্ট অনুযায়ী ৩ডি রোটেশন ক্যালকুলেশন
    const rotateX = useTransform(y, [-300, 300], [15, -15]);
    const rotateY = useTransform(x, [-300, 300], [-15, 15]);

    useEffect(() => {
        // কার্ড স্ক্রিনে আসার সাথে সাথে ০ থেকে টার্গেট লেভেল পর্যন্ত কাউন্ট হবে
        const controls = animate(count, skill.level, {
            duration: 1.5,
            ease: "easeOut",
            delay: index * 0.1
        });
        return () => controls.stop();
    }, [skill.level, index]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        // ১. বাইরের wrapper কার্ডের স্ক্রল অ্যানিমেশন (fade-in & slide-up) হ্যান্ডেল করবে
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.215, 0.610, 0.355, 1.000] }}
            style={{ perspective: 1000 }}
        >
            {/* ২. ভেতরের এই ডিভটি ৩ডি টিল্ট এবং হোভার স্কেল অ্যানিমেশন হ্যান্ডেল করবে */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/25 transition-colors duration-300 backdrop-blur-3xl cursor-pointer"
            >
                {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো */}
                <div 
                    className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none blur-xl"
                    style={{
                        background: `radial-gradient(circle at 80% 20%, ${skill.color}15, transparent 50%)`
                    }}
                />

                <div style={{ transform: "translateZ(30px)" }} className="space-y-4 transition-transform duration-500 ease-out">
                    {/* কার্ড হেডার */}
                    <div className="flex items-center justify-between">
                        <div 
                            className="w-11 h-11 rounded-xl border flex items-center justify-center text-xl transition-all duration-500 group-hover:scale-110"
                            style={{ 
                                backgroundColor: `${skill.color}05`, 
                                borderColor: `${skill.color}30` 
                            }}
                        >
                            {skill.icon}
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                            // 00{index + 1}
                        </span>
                    </div>

                    {/* স্কিল ইনফো */}
                    <div className="space-y-0.5">
                        <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                            {skill.name}
                        </h3>
                        <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">{skill.category}</p>
                    </div>

                    {/* কাইনেটিক ডেকোরেশন এবং ডেটা ভ্যালু */}
                    <div className="pt-3 border-t border-white/5 flex items-end justify-between">
                        <div className="space-y-0.5">
                            <span className="text-[9px] font-mono text-white/20 block uppercase tracking-widest">Mastery Level</span>
                            <div className="flex items-baseline gap-0.5">
                                {/* কাউন্টেবল অ্যানিমেশন টেক্সট */}
                                <motion.span style={{ color: skill.color }} className="text-2xl font-black font-mono tracking-tighter">
                                    {roundedCount}
                                </motion.span>
                                <span className="text-[10px] font-mono text-white/30">%</span>
                            </div>
                        </div>

                        {/* ৩ডি জিওমেট্রিক ডট ম্যাট্রিক্স ইন্ডিকেটর */}
                        <div className="grid grid-cols-4 gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(4)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-1 h-1 rounded-full transition-colors duration-500"
                                    style={{ 
                                        backgroundColor: (skill.level / 25) > i ? skill.color : 'rgba(255,255,255,0.05)' 
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const AnimatedSkills = ({ data }) => {
    const [userType, setUserType] = useState('designer');
    const [content, setContent] = useState(defaultContent);
    const [activeCategory, setActiveCategory] = useState('all');
    
    useEffect(() => {
        const detectedType = DetectUserType(data);
        setUserType(detectedType);
        setContent(RoleBasedContent[detectedType] || defaultContent);
    }, [data]);
    
    const rawSkills = data?.skills || [];
    
    const skillsData = rawSkills.map((skill) => {
        if (typeof skill === 'string') {
            return {
                name: skill,
                level: 85,
                icon: '⚡',
                color: '#22d3ee',
                category: 'core'
            };
        }
        return {
            name: skill?.name || 'Skill',
            level: skill?.level || 80,
            icon: skill?.icon || '⚙️',
            color: skill?.color || '#a855f7',
            category: skill?.category || 'general'
        };
    });
    
    const categories = ['all', ...new Set(skillsData.map(item => item.category))];
    
    const filteredSkills = activeCategory === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeCategory);

    if (skillsData.length === 0) return null;

    return (
        <section className="relative w-full py-12 px-6 sm:px-12 lg:px-32 bg-transparent overflow-hidden select-none">
            
            {/* ব্যাকগ্রাউন্ড লার্জ কাইনেটিক টাইপোগ্রাফি */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.01] flex items-center whitespace-nowrap">
                <motion.div 
                    animate={{ x: [0, -2000] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    className="text-[25vw] font-black uppercase tracking-tighter"
                >
                    {skillsData.map(s => s.name).join(' • ')} •
                </motion.div>
            </div>

            <div className="w-full max-w-7xl mx-auto relative z-10">
                
                {/* মিনিমাল আর্কিটেকচারাল হেডার */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 border-b border-white/5 pb-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                            <span className="text-[10px] font-mono tracking-[0.3em] text-white/50 uppercase">
                                // {content?.badge || "CAPABILITIES"}
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
                            Expertise <br />
                            <span className="text-white/20">& Stack.</span>
                        </h2>
                    </div>
                    
                    {/* ডাইনামিক ফিল্টার কন্ট্রোলার */}
                    {categories.length > 2 && (
                        <div className="flex flex-wrap gap-1.5 bg-white/[0.01] p-1.5 rounded-xl border border-white/5 backdrop-blur-xl">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-lg transition-all duration-300 relative ${
                                        activeCategory === cat ? 'text-black font-black' : 'text-white/40 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10">{cat}</span>
                                    {activeCategory === cat && (
                                        <motion.div 
                                            layoutId="matrixTabGlow"
                                            className="absolute inset-0 bg-white rounded-lg"
                                            transition={{ type: "spring", stiffness: 350, damping: 35 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ৩ডি কাইনেটিক গ্রিড */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <KineticCard 
                                key={skill.name} 
                                skill={skill} 
                                index={index} 
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

             

            </div>
        </section>
    );
};

export default AnimatedSkills;