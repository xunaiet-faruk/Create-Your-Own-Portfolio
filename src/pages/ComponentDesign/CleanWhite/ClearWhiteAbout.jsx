import React from 'react';
import { motion } from 'framer-motion';

const CleanWhiteAbout = ({ data }) => {
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    
    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    
    const rightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
        }
    };
    
    // স্কিল আইটেমস
    const skills = data?.skills || ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'];
    
    // এক্সপেরিয়েন্স ডাটা
    const experiences = data?.experiences || [
        { year: '2024 - Present', company: 'Tech Company', role: 'Senior Frontend Developer' },
        { year: '2022 - 2024', company: 'Digital Agency', role: 'React Developer' },
        { year: '2020 - 2022', company: 'Startup Hub', role: 'Junior Developer' }
    ];
    
    return (
        <div className="w-full container mx-auto relative overflow-hidden py-16 md:py-12 bg-white">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            </div>
            
            <div className="px-4 sm:px-6 lg:px- relative z-10">
                
                {/* সেকশন হেডার */}
+                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                   
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-gray-800">About </span>
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-500 text-sm max-w-md mx-auto mt-4">
                        Let me introduce myself and share my journey
                    </p>
                </motion.div>
                
                {/* মেইন কন্টেন্ট - ২ কলাম */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* বাম কলাম - ইমেজ ও ব্যক্তিগত তথ্য */}
                    <motion.div 
                        variants={leftVariants}
                        className="space-y-6"
                    >
                        {/* ইমেজ কার্ড */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <div className="h-80 overflow-hidden">
                                    {data?.aboutImage ? (
                                        <img 
                                            src={data.aboutImage} 
                                            alt={data?.fullName || 'About'}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100">
                                            <span className="text-8xl">👨‍💻</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* ইমেজের উপর ব্যাজ */}
                            <div className="absolute -bottom-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-yellow-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-gray-700">Available for work</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* ব্যক্তিগত তথ্য কার্ড */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Info</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <span className="text-yellow-500 text-sm">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Email</p>
                                        <p className="text-sm text-gray-700">{data?.email || 'hello@example.com'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <span className="text-yellow-500 text-sm">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Location</p>
                                        <p className="text-sm text-gray-700">{data?.location || 'Dhaka, Bangladesh'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <span className="text-yellow-500 text-sm">🎂</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Birthday</p>
                                        <p className="text-sm text-gray-700">{data?.birthday || 'January 1, 1995'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <span className="text-yellow-500 text-sm">🌐</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Languages</p>
                                        <p className="text-sm text-gray-700">{data?.languages || 'English, Bengali'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* ডান কলাম - বায়ো ও এক্সপেরিয়েন্স */}
                    <motion.div 
                        variants={rightVariants}
                        className="space-y-6"
                    >
                        {/* বায়ো টেক্সট */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">Who Am I?</h3>
                            <div className="w-12 h-0.5 bg-yellow-400 rounded-full"></div>
                            <p className="text-gray-600 leading-relaxed">
                                {data?.aboutMe || data?.description || "I'm a passionate developer who loves building innovative and user-friendly digital experiences. With a strong foundation in modern technologies, I focus on writing clean, efficient, and maintainable code."}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {data?.aboutMe2 || "My journey in web development started 4+ years ago, and since then I've worked with various startups, agencies, and businesses to bring their ideas to life. I'm constantly learning new technologies and improving my skills."}
                            </p>
                        </div>
                        
                        {/* এক্সপেরিয়েন্স টাইমলাইন */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">Work Experience</h3>
                            <div className="space-y-4">
                                {experiences.map((exp, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="relative pl-6 pb-4 border-l-2 border-yellow-200 last:border-l-2 last:border-yellow-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400 border-2 border-white"></div>
                                        <div className="text-sm text-yellow-500 font-medium">{exp.year}</div>
                                        <div className="text-lg font-semibold text-gray-800">{exp.role}</div>
                                        <div className="text-sm text-gray-500">{exp.company}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        {/* স্কিলস */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">Core Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => (
                                    <motion.span 
                                        key={idx}
                                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-white transition-all duration-300 cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        
                        {/* সিভি ডাউনলোড বাটন */}
                        <motion.button
                            onClick={() => {
                                if (data?.resumeUrl) {
                                    window.open(data.resumeUrl, '_blank');
                                } else {
                                    alert('Resume download started!');
                                }
                            }}
                            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Download CV</span>
                            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
      
                
            </div>
        </div>
    );
};

export default CleanWhiteAbout;