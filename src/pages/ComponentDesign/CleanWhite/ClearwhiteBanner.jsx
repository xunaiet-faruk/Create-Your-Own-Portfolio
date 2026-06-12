import React from 'react';
import { motion } from 'framer-motion';

const CleanWhiteBanner = ({ data }) => {
    
    // টাইপিং অ্যানিমেশনের জন্য টেক্সট
    const roles = data?.roles || ['Frontend Developer', 'UI/UX Designer', 'React Expert'];
    
    // রেজিউম ডাউনলোড ফাংশন
    const downloadResume = () => {
        const resumeUrl = data?.resumeUrl || '/resume/sample-resume.pdf';
        
        // যদি কাস্টম রেজিউম লিংক থাকে
        if (data?.resumeUrl) {
            window.open(resumeUrl, '_blank');
        } else {
            // ডেমো রেজিউম ডাউনলোড (আপনার ব্যাকএন্ড থেকে আসবে)
            alert('Resume download started! (Demo)');
            // এখানে আপনার একচুয়াল রেজিউম ডাউনলোড লজিক বসবে
        }
    };
    
    // স্ক্রল টু কন্টাক্ট সেকশন
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
    
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };
    
    return (
        <div className="relative w-full  flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড এলিমেন্টস */}
            <div className="absolute inset-0 overflow-hidden">
                {/* সার্কেল ডেকোরেশন */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100 rounded-full filter blur-3xl opacity-10"></div>
                
                {/* ডট প্যাটার্ন */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
                <motion.div 
                    className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    
                    {/* বাম পাশের কন্টেন্ট */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        
                        {/* গ্রিটিং ব্যাজ */}
                        <motion.div 
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            <span className="text-sm font-medium text-yellow-600">
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>
                        
                        {/* হেডিং */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="text-gray-800">Hi, I'm </span>
                                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                                    {data?.fullName?.split(' ')[0] || 'John'}
                                </span>
                            </h1>
                            
                            {/* টাইপিং এফেক্ট সহ রোল */}
                            <div className="h-16 md:h-20">
                                <motion.div
                                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="border-r-2 border-yellow-500 pr-2">
                                        {data?.title || 'Creative Developer'}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        {/* বায়ো/বর্ণনা */}
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            {data?.bio || data?.description || "I'm a passionate developer who loves building innovative and user-friendly digital experiences that make a difference."}
                        </motion.p>
                        
                        {/* সোশ্যাল লিংকস */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex justify-center lg:justify-start gap-4"
                        >
                            {data?.socialLinks?.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-white transition-all duration-300"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-sm">{social.icon || '🔗'}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                        
                        {/* বাটন গ্রুপ */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                        >
                            {/* লেটস টক বাটন */}
                            <motion.button
                                onClick={scrollToContact}
                                className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold text-base overflow-hidden shadow-md hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Let's Talk
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </motion.button>
                            
                            {/* ডাউনলোড রেজিউম বাটন */}
                            <motion.button
                                onClick={downloadResume}
                                className="group px-8 py-3 rounded-full bg-white border-2 border-yellow-400 text-yellow-500 font-semibold text-base hover:bg-yellow-50 transition-all duration-300 shadow-sm hover:shadow-md"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    Download Resume
                                    <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </span>
                            </motion.button>
                        </motion.div>
                        
                      
                    </div>
                    
                    {/* ডান পাশের ইমেজ/ইলাস্ট্রেশন */}
                    <motion.div 
                        variants={imageVariants}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative">
                            {/* ইমেজের ব্যাকগ্রাউন্ড ডেকোরেশন */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-yellow-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                            <div className="absolute -inset-4 bg-yellow-300 rounded-full blur-2xl opacity-20"></div>
                            
                            {/* প্রোফাইল ইমেজ */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl bg-gray-100">
                                {data?.profileImage ? (
                                    <img 
                                        src={data.profileImage} 
                                        alt={data?.fullName || 'Profile'}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50">
                                        <span className="text-6xl">👨‍💻</span>
                                    </div>
                                )}
                            </div>
                            
                            {/* ফ্লোটিং এলিমেন্টস */}
                            <motion.div 
                                className="absolute -top-5 -right-5 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-2xl">🚀</span>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute -bottom-5 -left-5 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            >
                                <span className="text-xl">💡</span>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute top-1/2 -right-8 w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="text-lg">✨</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* স্ক্রল ইন্ডিকেটর */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
                    <motion.div 
                        className="w-1 h-2 bg-yellow-400 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default CleanWhiteBanner;