import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CleanWhiteSkills = ({ data }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    
    // স্কিল ডাটা
    const skillsData = data?.skills || [
        { name: 'React', level: 90, category: 'frontend', icon: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', level: 85, category: 'frontend', icon: '▲', color: '#000000' },
        { name: 'TypeScript', level: 80, category: 'frontend', icon: 'TS', color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: '🎨', color: '#06B6D4' },
        { name: 'Node.js', level: 85, category: 'backend', icon: '🟢', color: '#339933' },
        { name: 'Express.js', level: 80, category: 'backend', icon: '🚂', color: '#000000' },
        { name: 'MongoDB', level: 75, category: 'database', icon: '🍃', color: '#47A248' },
        { name: 'PostgreSQL', level: 70, category: 'database', icon: '🐘', color: '#336791' },
        { name: 'Git', level: 85, category: 'tools', icon: '📚', color: '#F05032' },
        { name: 'Docker', level: 65, category: 'tools', icon: '🐳', color: '#2496ED' },
        { name: 'Figma', level: 80, category: 'design', icon: '🎨', color: '#F24E1E' },
        { name: 'Adobe XD', level: 75, category: 'design', icon: '🎨', color: '#FF61F6' }
    ];
    
    // ক্যাটাগরি ফিল্টার
    const categories = [
        { id: 'all', name: 'All Skills', icon: '✨' },
        { id: 'frontend', name: 'Frontend', icon: '🖥️' },
        { id: 'backend', name: 'Backend', icon: '⚙️' },
        { id: 'database', name: 'Database', icon: '🗄️' },
        { id: 'tools', name: 'Tools', icon: '🛠️' },
        { id: 'design', name: 'Design', icon: '🎨' }
    ];
    
    const filteredSkills = activeCategory === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeCategory);
    
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
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };
    
    return (
        <div className="w-full relative overflow-hidden py-16 md:py-24 bg-gray-50">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-yellow-600 tracking-wider">MY EXPERTISE</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-gray-800">Technical </span>
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-500 text-sm max-w-md mx-auto mt-4">
                        Technologies and tools I work with
                    </p>
                </motion.div>
                
                {/* ক্যাটাগরি ফিল্টার - ট্যাব ডিজাইন */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeCategory === cat.id
                                    ? 'text-yellow-600 bg-yellow-50 border border-yellow-300 shadow-sm'
                                    : 'text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-700'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.name}</span>
                            {activeCategory === cat.id && (
                                <motion.div 
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full"
                                    layoutId="activeSkillTab"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
                
                {/* স্কিল গ্রিড - সম্পূর্ণ নতুন ডিজাইন */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={skillVariants}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all duration-300 overflow-hidden">
                                
                                {/* ব্যাকগ্রাউন্ড গ্লো */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                />
                                
                                {/* আইকন এবং টাইটেল */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div 
                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 group-hover:scale-110 transition-transform duration-300"
                                        >
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                                                {skill.name}
                                            </h3>
                                            <p className="text-xs text-gray-400 capitalize">{skill.category}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-yellow-500">{skill.level}%</span>
                                </div>
                                
                                {/* প্রগ্রেস সার্কেল - ইউনিক ডিজাইন */}
                                <div className="relative mt-2">
                                    {/* ব্যাকগ্রাউন্ড বার */}
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        {/* প্রগ্রেস বার */}
                                        <motion.div 
                                            className="h-full rounded-full relative"
                                            style={{ 
                                                width: `${skill.level}%`,
                                                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                                            }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.05 }}
                                        >
                                            {/* অ্যানিমেটেড শিমার */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {/* হোভার ইফেক্টের জন্য ডেকোরেশন */}
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* স্কিল সার্কেল চার্ট সেকশন - অতিরিক্ত ইউনিক ফিচার */}
                <motion.div 
                    className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { label: 'Frontend', percentage: 90, color: '#F59E0B' },
                        { label: 'Backend', percentage: 80, color: '#3B82F6' },
                        { label: 'UI/UX Design', percentage: 75, color: '#8B5CF6' },
                        { label: 'Problem Solving', percentage: 85, color: '#10B981' }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-3">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="58"
                                        fill="none"
                                        stroke="#E5E7EB"
                                        strokeWidth="8"
                                    />
                                    <motion.circle
                                        cx="64"
                                        cy="64"
                                        r="58"
                                        fill="none"
                                        stroke={item.color}
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray="364.4"
                                        initial={{ strokeDashoffset: 364.4 }}
                                        whileInView={{ strokeDashoffset: 364.4 * (1 - item.percentage / 100) }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: idx * 0.1 }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                        {item.percentage}%
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </motion.div>
                
                {/* টুলস ও টেকনোলজি ক্লাউড */}
                <motion.div 
                    className="mt-12 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Tools & Technologies I Love</h3>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {['VS Code', 'GitHub', 'Postman', 'Chrome DevTools', 'Vercel', 'Netlify', 'Firebase', 'Supabase'].map((tool, idx) => (
                            <motion.span
                                key={idx}
                                className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-yellow-300 hover:text-yellow-600 hover:shadow-sm transition-all duration-300 cursor-pointer"
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
                
            </div>
            
            {/* কাস্টম CSS অ্যানিমেশন */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default CleanWhiteSkills;