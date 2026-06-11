import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkSkills = ({ data }) => {
    // কন্টেইনার অ্যানিমেশন (স্ট্যাগার ইফেক্ট এর জন্য)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    // সিঙ্গেল স্কিল কার্ড অ্যানিমেশন
    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: 'spring', stiffness: 80, damping: 12 }
        }
    };

    return (
        <div className="w-full text-white space-y-10 py-12">
            
            {/* 🎯 সেকশন হেডার */}
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tight">
                    My <span className="text-cyan-400">Skills</span> & Tools
                </h2>
                <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0"></div>
                <p className="text-sm text-gray-500 pt-1">The technologies and workflow tools I use daily.</p>
            </div>

            {/* 💻 স্কিল কার্ডস গ্রিড */}
            <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {data?.skills && data.skills.length > 0 ? (
                    data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                y: -5,
                                borderColor: '#22d3ee',
                                boxShadow: '0px 10px 20px rgba(34, 211, 238, 0.15)',
                            }}
                            className="p-5 rounded-2xl bg-gray-800/30 border border-gray-800/80 flex flex-col items-center justify-center text-center gap-3 transition-colors duration-300 group backdrop-blur-sm cursor-pointer"
                        >
                            {/* স্কিল আইকনের জায়গায় একটি ডাইনামিক গ্লোয়িং সার্কেল */}
                            <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-700/60 flex items-center justify-center text-xl group-hover:border-cyan-400/50 group-hover:bg-cyan-950/20 transition-all duration-300 relative overflow-hidden">
                                <span className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 font-mono font-bold">
                                    {skill.substring(0, 2).toUpperCase()}
                                </span>
                                {/* ব্যাকগ্রাউন্ড গ্লো */}
                                <span className="absolute -inset-full bg-cyan-400/5 blur-md rounded-full group-hover:inset-0 transition-all duration-500" />
                            </div>

                            {/* স্কিল নেম */}
                            <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                                {skill}
                            </span>
                        </motion.div>
                    ))
                ) : (
                    // ফলব্যাক ডেমো ডেটা (যদি ইউজারের কোনো স্কিল না থাকে)
                    ['React', 'Node.js', 'Tailwind', 'JavaScript', 'MongoDB'].map((skill, index) => (
                        <div key={index} className="p-5 rounded-2xl bg-gray-800/10 border border-gray-800 text-gray-600 text-center text-sm font-medium">
                            {skill}
                        </div>
                    ))
                )}
            </motion.div>

        </div>
    );
};

export default ModernDarkSkills;