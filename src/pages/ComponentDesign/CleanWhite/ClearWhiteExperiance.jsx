import React from 'react';
import { motion } from 'framer-motion';

const CleanWhiteExperience = ({ data }) => {
    
    // ডাইনামিক ডাটা
    const experiences = data?.experiences || [
        {
            id: 1,
            year: '2023 - Present',
            role: 'Senior Frontend Developer',
            company: 'Tech Innovators Inc.',
            description: 'Leading frontend development for enterprise applications, mentoring junior developers.',
            achievements: ['Performance optimization', 'Team leadership', 'Code reviews']
        },
        {
            id: 2,
            year: '2021 - 2023',
            role: 'Full Stack Developer',
            company: 'Digital Creative Agency',
            description: 'Developed and maintained multiple client projects with modern technologies.',
            achievements: ['15+ projects delivered', 'Client satisfaction', 'Technical documentation']
        },
        {
            id: 3,
            year: '2020 - 2021',
            role: 'Junior Developer',
            company: 'Startup Hub',
            description: 'Started career, learned best practices, and contributed to web applications.',
            achievements: ['Fast learner', 'Team collaboration', 'Problem solving']
        }
    ];
    
  
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    
    return (
        <div className="w-full py-16 md:py-5">
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
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
                        <span className="text-gray-800">Work </span>
                        <span className="text-yellow-500 font-bold">Journey</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-px bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-8 h-px bg-yellow-400"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm max-w-md mx-auto mt-4">
                        {data?.tagline || "My professional journey so far"}
                    </p>
                </motion.div>
                
                {/* এক্সপেরিয়েন্স টাইমলাইন - নতুন ডিজাইন */}
                <motion.div 
                    className="relative mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* সেন্টার লাইন */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-300 via-yellow-400 to-transparent"></div>
                    
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 ${
                                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* টাইমলাইন ডট */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 border-2 border-white shadow-sm"></div>
                            
                            {/* ইয়ার ব্যাজ */}
                            <div className="ml-12 md:ml-0 md:w-5/12">
                                <div className="inline-block px-4 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full">
                                    <span className="text-sm font-medium text-yellow-600">{exp.year}</span>
                                </div>
                            </div>
                            
                            {/* কন্টেন্ট কার্ড */}
                            <div className="ml-12 md:ml-0 md:w-5/12 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                                <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                                <p className="text-yellow-500 text-sm font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-3">{exp.description}</p>
                                
                                {/* অ্যাচিভমেন্টস */}
                                {exp.achievements && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.achievements.slice(0, 3).map((ach, i) => (
                                            <span key={i} className="text-xs px-2 py-0.5 bg-white rounded-full text-gray-500 border border-gray-200">
                                                {ach}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
    
                
            </div>
        </div>
    );
};

export default CleanWhiteExperience;