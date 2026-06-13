import React from 'react';
import { motion } from 'framer-motion';

const CleanWhiteSkills = ({ data }) => {
    
    // ডাইনামিক স্কিল ডাটা - যেকোনো পেশার জন্য কাজ করবে
    const rawSkills = data?.skills || [];
    const skillsData = rawSkills.length > 0
        ? rawSkills.map((skill) => {
            if (typeof skill === 'string') {
                return {
                    name: skill,
                    level: Math.floor(Math.random() * 30) + 70,
                    icon: '🔧'
                };
            }
            return {
                name: skill?.name || 'Untitled Skill',
                level: typeof skill?.level === 'number' ? skill.level : Math.floor(Math.random() * 30) + 70,
                icon: skill?.icon || '🔧'
            };
        })
        : [
            { name: 'React', level: 90, icon: '⚛️' },
            { name: 'Photoshop', level: 85, icon: '🎨' },
            { name: 'SEO', level: 80, icon: '📈' },
            { name: 'Content Writing', level: 88, icon: '✍️' },
            { name: 'Node.js', level: 82, icon: '🟢' },
            { name: 'Figma', level: 78, icon: '🎯' }
        ];
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };
    
    const skillVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    
    return (
        <div className="w-full py-16 md:py-2">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* ডেকোরেটিভ ডটস */}
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <motion.div 
                                key={i}
                                className="w-1 h-1 rounded-full bg-yellow-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">
                        <span className="text-gray-800">My </span>
                        <span className="text-yellow-500 font-bold">Skills</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-px bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-8 h-px bg-yellow-400"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm max-w-md mx-auto mt-4">
                        {data?.tagline || "What I bring to the table"}
                    </p>
                </motion.div>
                
                {/* স্কিল গ্রিড */}
                {skillsData.length > 0 ? (
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={skillVariants}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="relative p-5 rounded-2xl border border-gray-100 hover:border-yellow-300 transition-all duration-300 cursor-pointer overflow-hidden bg-white/50 backdrop-blur-sm">
                                    
                                    {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
                                    <div className="absolute -right-5 -top-5 w-20 h-20 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        {/* আইকন এবং নাম */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gray-50 shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                                {skill.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors text-lg">
                                                    {skill.name}
                                                </h3>
                                                <p className="text-xs text-gray-400">Skill level</p>
                                            </div>
                                        </div>
                                        
                                        {/* প্রগ্রেস বার */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Proficiency</span>
                                                <span className="font-medium text-yellow-500">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div 
                                                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-400">No skills added yet</p>
                    </div>
                )}
                
                {/* টুলস সেকশন */}
                {data?.tools && data.tools.length > 0 && (
                    <motion.div 
                        className="mt-12 pt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="text-center mb-5">
                            <h3 className="text-base font-semibold text-gray-600">
                                {data?.toolsLabel || "Tools I Work With"}
                            </h3>
                            <div className="flex justify-center gap-1 mt-2">
                                <div className="w-6 h-px bg-yellow-300"></div>
                                <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                                <div className="w-6 h-px bg-yellow-300"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {data.tools.map((tool, idx) => (
                                <motion.span
                                    key={idx}
                                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-600 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.02 }}
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                )}
                
                {/* সার্টিফিকেশন সেকশন */}
                {data?.certifications && data.certifications.length > 0 && (
                    <motion.div 
                        className="mt-10 pt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="text-center mb-4">
                            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Certifications
                            </h3>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {data.certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-full border border-yellow-200"
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.03 }}
                                >
                                    <span className="text-yellow-500 text-sm">🏅</span>
                                    <span className="text-xs text-gray-700">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
                
              
                
            </div>
        </div>
    );
};

export default CleanWhiteSkills;