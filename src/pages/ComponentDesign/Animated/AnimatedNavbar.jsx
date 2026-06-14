import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedNavbar = ({ data }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // স্ক্রল করার সময় কোন সেকশনে আছেন তা ডিটেক্ট করুন
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            let current = '';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            if (current) {
                setActiveSection(current);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        // পেজ লোড হলে একবার কল করুন
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home', icon: '🏠' },
        { name: 'About', href: '#about', id: 'about', icon: '👤' },
        { name: 'Skills', href: '#skills', id: 'skills', icon: '⚡' },
        { name: 'Projects', href: '#projects', id: 'projects', icon: '🚀' },
        { name: 'Contact', href: '#contact', id: 'contact', icon: '📧' },
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 70; // নেভবারের উচ্চতা
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.6, type: "spring", stiffness: 200 }
        }
    };

    // রেসিউম ডাউনলোড ফাংশন
    const downloadResume = () => {
        if (data?.resumeUrl) {
            window.open(data.resumeUrl, '_blank');
        } else {
            alert('Resume download started!');
        }
    };

    return (
        <motion.nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-gradient-to-r from-purple-900/95 to-indigo-900/95 backdrop-blur-md py-3 ' 
                    : 'bg-gradient-to-r from-purple-900/95 to-indigo-900/95 backdrop-blur-sm py-5'
            }`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* লোগো - home এ ক্লিক করলে যাবে */}
                    <motion.a
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className="relative group cursor-pointer"
                        variants={logoVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <motion.div 
                                    className="absolute inset-0 bg-purple-500 rounded-full blur-md"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                    <span className="text-white text-lg font-bold animate-pulse">✨</span>
                                </div>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                                {data?.fullName?.split(' ')[0] || 'Portfolio'}
                            </span>
                        </div>
                        
                        <motion.span 
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"
                            whileHover={{ width: '100%' }}
                        />
                    </motion.a>

                    {/* ডেস্কটপ মেনু */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group cursor-pointer ${
                                    activeSection === link.id
                                        ? 'text-purple-300'
                                        : 'text-purple-100/70 hover:text-purple-200'
                                }`}
                                variants={itemVariants}
                                whileHover={{ y: -2 }}
                            >
                                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                                    <span className="text-base">{link.icon}</span>
                                    <span>{link.name}</span>
                                </span>
                                
                                {/* অ্যাক্টিভ ইন্ডিকেটর */}
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="activeAnimatedNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                        transition={{ type: "spring", duration: 0.5 }}
                                        style={{
                                            boxShadow: '0 0 12px rgba(168, 85, 247, 0.8), 0 0 8px rgba(236, 72, 153, 0.6)'
                                        }}
                                    />
                                )}
                                
                                {/* হোভার ব্যাকগ্রাউন্ড */}
                                <span className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    {/* রেসিউম বাটন */}
                    <motion.button
                        onClick={downloadResume}
                        className="hidden md:block relative group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
                            <motion.span
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                📄
                            </motion.span>
                            Resume
                            <motion.span 
                                className="inline-block"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                            >
                                ⬇️
                            </motion.span>
                        </div>
                    </motion.button>

                    {/* মোবাইল মেনু বাটন */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 transition-colors cursor-pointer"
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* মোবাইল মেনু */}
            <motion.div 
                className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 shadow-2xl overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    height: isMobileMenuOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <motion.button
                            key={link.id}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-left cursor-pointer ${
                                activeSection === link.id
                                    ? 'bg-purple-500/30 text-purple-200 border-l-4 border-purple-400'
                                    : 'text-purple-100/70 hover:bg-purple-500/20 hover:text-purple-200'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <span className="text-xl">{link.icon}</span>
                            <span>{link.name}</span>
                            {activeSection === link.id && (
                                <motion.span 
                                    className="ml-auto text-purple-400"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    ●
                                </motion.span>
                            )}
                        </motion.button>
                    ))}
                    
                    {/* মোবাইলে রেসিউম বাটন */}
                    <motion.button
                        onClick={downloadResume}
                        className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold w-full cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>📄</span>
                        Download Resume
                        <span>⬇️</span>
                    </motion.button>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default AnimatedNavbar;