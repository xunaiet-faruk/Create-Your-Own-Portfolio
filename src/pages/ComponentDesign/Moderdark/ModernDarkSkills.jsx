import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkSkills = ({ data }) => {
    const skills = data?.skills || [];
    
    // ইউনিক অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 10
            }
        }
    };

    return (
        <div className="w-full relative overflow-hidden py-20 md:py-2">
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black -z-20"></div>
            
            {/* অরবিটাল রিংস */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/20 rounded-full -z-10"></div>
            
            {/* ফ্লোটিং পার্টিকেলস */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [null, -30, 30, -30],
                        x: [null, 20, -20, 20],
                        opacity: [0.1, 0.5, 0.1]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* 🎯 হেডার - এক লাইনে */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-xs font-mono text-cyan-400">⚡ SKILLS & TOOLS</span>
                    </motion.div>
                    
                    {/* হেডিং এক লাইনে */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                        <span className="text-white">My </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent relative inline-block">
                            Tech Arsenal
                            <motion.div 
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                        </span>
                    </h2>
                </motion.div>
                
                {/* 🔥 স্কিল ওয়েভ - সম্পূর্ণ ইউনিক লেআউট */}
                {skills.length > 0 ? (
                    <motion.div 
                        className="relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* সর্পিল লাইন কানেক্টর */}
                        <svg className="absolute left-1/2 transform -translate-x-1/2 h-full w-auto overflow-visible -z-10 hidden lg:block">
                            <motion.path
                                d="M 0 0 C 50 100, -50 200, 0 300 C 50 400, -50 500, 0 600"
                                fill="none"
                                stroke="rgba(34, 211, 238, 0.1)"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                            />
                        </svg>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative"
                                >
                                    {/* কাস্টম স্টাইল্ড কার্ড */}
                                    <div className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                                        {/* হোভার গ্লো */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="flex items-center gap-3">
                                            {/* অ্যানিমেটেড আইকন কন্টেইনার */}
                                            <div className="relative">
                                                <motion.div 
                                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300"
                                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <span className="text-lg font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                                        {skill.substring(0, 1).toUpperCase()}
                                                    </span>
                                                </motion.div>
                                                
                                                {/* পালসিং ডট */}
                                                <motion.div 
                                                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400"
                                                    animate={{ scale: [1, 1.3, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                                                />
                                            </div>
                                            
                                            {/* স্কিল ইনফো */}
                                            <div className="flex-1">
                                                <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                                                    {skill}
                                                </h3>
                                                
                                                {/* লেভেল ইন্ডিকেটর ডটস */}
                                                <div className="flex gap-1 mt-1.5">
                                                    {[1, 2, 3, 4].map((level) => (
                                                        <motion.div
                                                            key={level}
                                                            className={`h-1 w-5 rounded-full transition-all duration-300 ${
                                                                level <= (data?.skillRatings?.[index] || 3)
                                                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                                                                    : 'bg-gray-700'
                                                            }`}
                                                            initial={{ scaleX: 0 }}
                                                            whileInView={{ scaleX: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.02 + level * 0.05 }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* ইনডেক্স নম্বর */}
                                        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-gray-700 group-hover:text-cyan-500/30 transition-colors">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* সেন্টার ডেকোরেশন এলিমেন্ট */}
                        <motion.div 
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        />
                    </motion.div>
                ) : (
                    <div className="text-center py-">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-800/50 flex items-center justify-center mb-3">
                            <span className="text-2xl">💻</span>
                        </div>
                        <p className="text-gray-500 text-sm">No skills added yet</p>
                    </div>
                )}
                
               
                
            </div>
        </div>
    );
};

export default ModernDarkSkills;