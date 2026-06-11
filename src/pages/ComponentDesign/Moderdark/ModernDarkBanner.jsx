import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkBanner = ({ data }) => {
    // ফ্রেমার মোশন অ্যানিমেশন কনফিগ
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    // সোশাল আইকনগুলোর SVG ম্যাপ (ইউজার ডাটার সাথে ম্যাচ করার জন্য)
    const socialIcons = {
        github: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        facebook: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
        twitter: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    };

    return (
        <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12 md:py-24">
                
                {/* 📝 বাম পাশের টেক্সট এবং সোশাল কন্টেন্ট */}
                <motion.div 
                    className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span 
                        variants={itemVariants}
                        className="text-cyan-400 font-mono tracking-widest text-sm uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block"
                    >
                        Available for Work
                    </motion.span>

                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
                    >
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{data?.fullName || 'John Doe'}</span>
                    </motion.h1>

                    <motion.h2 
                        variants={itemVariants}
                        className="text-xl sm:text-2xl font-semibold text-gray-300"
                    >
                        {data?.title || 'Full Stack Web Developer'}
                    </motion.h2>

                    <motion.p 
                        variants={itemVariants}
                        className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
                    >
                        {data?.description || 'I build scalable, modern, and highly interactive web applications.'}
                    </motion.p>

                    {/* ✨ অসাম অ্যানিমেটেড সোশাল আইকন গ্রুপ */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4 pt-2">
                        {Object.keys(socialIcons).map((platform) => {
                            if (data?.[platform]) {
                                return (
                                    <motion.a
                                        key={platform}
                                        href={data[platform]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 relative overflow-hidden group transition-colors duration-300"
                                        whileHover={{ 
                                            scale: 1.15, 
                                            y: -4,
                                            borderColor: '#22d3ee',
                                            boxShadow: '0px 0px 15px rgba(34, 211, 238, 0.4)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                                            {socialIcons[platform]}
                                        </span>
                                    </motion.a>
                                );
                            }
                            return null;
                        })}
                    </motion.div>

                    {/* অ্যাকশন বাটনসমূহ */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                    >
                        <a 
                            href="#contact" 
                            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Let's Talk
                        </a>
                        <a 
                            href="#projects" 
                            className="px-6 py-3 border border-gray-700 hover:border-cyan-400 text-white font-medium rounded-xl transition-all duration-300 bg-gray-800/30 backdrop-blur-sm transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>

                        {/* 📥 🆕 অ্যানিমেটেড ডাউনলোড রেজুমি বাটন */}
                        {data?.resumeUrl && (
                            <motion.a 
                                href={data.resumeUrl}
                                download="Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-transparent border border-cyan-500/30 text-cyan-400 font-medium rounded-xl flex items-center gap-2 bg-cyan-500/5 backdrop-blur-sm relative overflow-hidden group"
                                whileHover={{ 
                                    scale: 1.03,
                                    borderColor: '#22d3ee',
                                    boxShadow: '0px 0px 20px rgba(34, 211, 238, 0.2)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Download Resume</span>
                                {/* ডাউনলোড আইকন এবং হোভার বাউন্স অ্যানিমেশন */}
                                <motion.svg 
                                    className="w-5 h-5 text-cyan-400" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24"
                                    variants={{
                                        hover: { y: [0, 4, 0] }
                                    }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        duration: 0.8, 
                                        ease: "easeInOut" 
                                    }}
                                    // মাদার ট্যাগের হোভার ট্রিপ ট্রিগার করার জন্য
                                    animate={['hover']} 
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </motion.svg>
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>

                {/* 🖼️ ডান পাশের ইমেজ উইথ নিয়ন গ্লো */}
                <motion.div 
                    className="md:col-span-5 flex justify-center order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
                        {/* স্পেশাল পালসেটিং গ্লো অ্যানিমেশন */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20"
                            animate={{ 
                                opacity: [0.15, 0.3, 0.15],
                                scale: [1, 1.05, 1] 
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                        
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-800/40 backdrop-blur-md flex items-center justify-center relative z-10 shadow-2xl">
                            {data?.profileImage ? (
                                <img 
                                    src={data.profileImage} 
                                    alt={data.fullName} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                Amination    />
                            ) : (
                                <div className="text-gray-600 text-8xl font-bold font-mono">
                                    {data?.fullName ? data.fullName.charAt(0) : '👨‍💻'}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ModernDarkBanner;