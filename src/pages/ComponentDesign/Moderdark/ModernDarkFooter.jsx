import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernDarkFooter = ({ data }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    
    // স্ক্রল পজিশন ট্র্যাক করা
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // স্মুথ স্ক্রল টু টপ
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    const currentYear = new Date().getFullYear();
    
    // সোশ্যাল লিংকস (ডাইনামিক ডাটা থেকে নিবে)
    const socialLinks = data?.socialLinks || [
        { name: 'GitHub', icon: '🐙', url: '#' },
        { name: 'LinkedIn', icon: '🔗', url: '#' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'Discord', icon: '💬', url: '#' }
    ];
    
    // ফুটার লিংকস
    const footerLinks = data?.footerLinks || [
        { name: 'Projects', url: '#projects' },
        { name: 'Skills', url: '#skills' },
        { name: 'Contact', url: '#contact' },
        { name: 'Blog', url: '#blog' }
    ];
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    
    return (
        <footer className="relative w-full overflow-hidden">
            {/* গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent -z-10"></div>
            
            {/* ডেকোরেটিভ টপ লাইন উইথ গ্রেডিয়েন্ট */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
            
            {/* ফ্লোটিং পার্টিকেলস */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * 100,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -50, -100],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: 0
                        }}
                    />
                ))}
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                <motion.div 
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* মেইন ফুটার কন্টেন্ট - ৩ কলাম */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                        
                        {/* বাম কলাম - ব্র্যান্ড/লোগো */}
                        <motion.div variants={itemVariants} className="md:col-span-4 space-y-4">
                            {/* অ্যানিমেটেড লোগো */}
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">&lt;/&gt;</span>
                                    </div>
                                    <motion.div 
                                        className="absolute -inset-1 rounded-lg bg-cyan-500/20 blur-md"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <span className="text-white font-bold text-lg tracking-tight">
                                    {data?.fullName || 'Portfolio'}
                                </span>
                            </div>
                            
                            {/* ট্যাগলাইন */}
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {data?.tagline || 'Building digital experiences with passion & precision.'}
                            </p>
                            
                            {/* সোশ্যাল আইকনস */}
                            <div className="flex gap-3 pt-2">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group"
                                        onHoverStart={() => setHoveredIcon(social.name)}
                                        onHoverEnd={() => setHoveredIcon(null)}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-lg group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                            {social.icon}
                                        </div>
                                        {hoveredIcon === social.name && (
                                            <motion.div 
                                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-[10px] text-cyan-400 whitespace-nowrap"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                            >
                                                {social.name}
                                            </motion.div>
                                        )}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* মাঝের কলাম - লিংকস */}
                        <motion.div variants={itemVariants} className="md:col-span-4">
                            <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Quick Links
                                </span>
                            </h3>
                            <ul className="space-y-2">
                                {footerLinks.map((link, idx) => (
                                    <motion.li 
                                        key={idx}
                                        whileHover={{ x: 5 }}
                                    >
                                        <a 
                                            href={link.url}
                                            className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="text-cyan-400/0 group-hover:text-cyan-400 transition-all duration-200">→</span>
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        {/* ডান কলাম - কন্ট্যাক্ট/নিউজলেটার */}
                        <motion.div variants={itemVariants} className="md:col-span-4 space-y-4">
                            <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Stay Updated
                                </span>
                            </h3>
                            
                            {/* এমেইল সাবস্ক্রাইব */}
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                                <motion.button 
                                    className="absolute right-1 top-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                            
                            {/* কন্ট্যাক্ট ইমেইল */}
                            <div className="flex items-center gap-2 pt-2">
                                <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center">
                                    <span className="text-cyan-400 text-sm">📧</span>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Email me at</p>
                                    <a href={`mailto:${data?.email || 'hello@example.com'}`} className="text-white text-sm hover:text-cyan-400 transition-colors">
                                        {data?.email || 'hello@example.com'}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* বটম বার - কপিরাইট + ব্যাক টু টপ */}
                    <motion.div 
                        variants={itemVariants}
                        className="pt-8 mt-4 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                        {/* কপিরাইট টেক্সট উইথ টাইপরাইটার ইফেক্ট */}
                        <div className="text-sm text-gray-600 text-center sm:text-left">
                            <span className="font-mono">
                                © {currentYear} 
                                <span className="text-gray-400 mx-1">
                                    {data?.fullName || 'Portfolio'}
                                </span>
                                • All rights reserved
                            </span>
                        </div>
                        
                        {/* ব্যাক টু টপ বাটন - অ্যানিমেটেড */}
                        <AnimatePresence>
                            <motion.button
                                onClick={scrollToTop}
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300">
                                    <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors font-mono">
                                        Back to Top
                                    </span>
                                    <motion.span 
                                        className="text-cyan-400 text-sm"
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        ↑
                                    </motion.span>
                                </div>
                                
                                {/* টুলটিপ */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-cyan-500 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    Scroll to top
                                </div>
                            </motion.button>
                        </AnimatePresence>
                    </motion.div>
                    
                </motion.div>
            </div>
            
            {/* স্ক্রল টু টপ ফ্লোটিং বাটন (যখন স্ক্রল ডাউন করে) */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span 
                            className="text-white text-xl"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            ↑
                        </motion.span>
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default ModernDarkFooter;