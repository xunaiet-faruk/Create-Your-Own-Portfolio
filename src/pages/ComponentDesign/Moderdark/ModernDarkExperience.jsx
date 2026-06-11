import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const ModernDarkExperience = ({ data }) => {
    // কন্টেইনার অ্যানিমেশন
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // সিঙ্গেল এক্সপেরিয়েন্স কার্ড অ্যানিমেশন
    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <div className="w-full text-white space-y-12 py-12 border-t border-gray-800/60">
            
            {/* 🎯 সেকশন হেডার */}
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tight">
                    Work <span className="text-cyan-400">Experience</span>
                </h2>
                <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0"></div>
                <p className="text-sm text-gray-500 pt-1">My professional journey and career highlights.</p>
            </div>

            {/* 💼 এক্সপেরিয়েন্স টাইমলাইন */}
            <motion.div 
                className="space-y-6 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* ভার্টিকাল লাইন (ডেস্কটপ অনলি) */}
                <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/40 to-transparent"></div>

                {data?.experiences && data.experiences.length > 0 ? (
                    data.experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="md:pl-24 relative group"
                        >
                            {/* টাইমলাইন ডট (ডেস্কটপ অনলি) */}
                            <div className="hidden md:block absolute left-0 top-2 w-14 h-14 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                                    <FaBriefcase className="text-cyan-400 text-lg" />
                                </div>
                            </div>

                            {/* এক্সপেরিয়েন্স কার্ড */}
                            <div className="rounded-2xl bg-gray-800/30 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 p-6 backdrop-blur-sm">
                                
                                {/* হেডার: টাইটেল এবং কোম্পানি */}
                                <div className="space-y-2 mb-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        {exp?.title || 'Job Title'}
                                        <span className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-300 rounded-full font-semibold">
                                            {exp?.company || 'Company'}
                                        </span>
                                    </h3>
                                    
                                    {/* পিরিয়ড */}
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <FaCalendar className="text-cyan-400/60" />
                                        <span>{exp?.period || 'Period not specified'}</span>
                                    </div>
                                </div>

                                {/* ডেস্ক্রিপশন */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {exp?.description || 'Description of responsibilities and achievements'}
                                </p>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    // ফলব্যাক ডেটা
                    <div className="text-center py-8 text-gray-500">
                        <p>No experience added yet</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ModernDarkExperience;
