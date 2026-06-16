import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

const AnimatedFooter = ({ data }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const footerLinks = data?.footerLinks || [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    const socialLinks = data?.socialLinks || [
        { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com', color: '#333' },
        { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5' },
        { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
        { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com', color: '#1877f2' }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <footer className="relative w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 border-t border-purple-500/20 overflow-hidden">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                
                {/* মেইন ফুটার কন্টেন্ট */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* লোগো ও বিবরণ */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
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
                                    <span className="text-white text-lg font-bold">✨</span>
                                </div>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                                {data?.fullName?.split(' ')[0] || 'Portfolio'}
                            </span>
                        </div>
                        
                        <p className="text-purple-200/50 text-sm leading-relaxed">
                            {data?.footerBio || "Building digital experiences with passion and creativity. Let's create something amazing together."}
                        </p>
                        
                        {/* সোশ্যাল লিংকস */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300"
                                    style={{ color: social.color }}
                                    whileHover={{ y: -3, scale: 1.1, backgroundColor: social.color, color: 'white' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* কুইক লিংকস */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-sm mb-4 tracking-wider">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.map((link, idx) => (
                                <motion.li 
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                >
                                    <button 
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-purple-200/50 hover:text-purple-300 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-purple-400/30">→</span>
                                        {link.name}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* কন্ট্যাক্ট ইনফো */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-sm mb-4 tracking-wider">Contact Info</h3>
                        <ul className="space-y-3">
                            <motion.li 
                                className="flex items-start gap-3 text-purple-200/50 hover:text-purple-300 transition-colors"
                                whileHover={{ x: 3 }}
                            >
                                <span className="text-purple-400 mt-0.5">📧</span>
                                <a href={`mailto:${data?.email || 'hello@example.com'}`} className="text-sm break-all">
                                    {data?.email || 'hello@example.com'}
                                </a>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-3 text-purple-200/50 hover:text-purple-300 transition-colors"
                                whileHover={{ x: 3 }}
                            >
                                <span className="text-purple-400 mt-0.5">📱</span>
                                <a href={`tel:${data?.phone || '+8801234567890'}`} className="text-sm">
                                    {data?.phone || '+880 1234 567890'}
                                </a>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-3 text-purple-200/50"
                                whileHover={{ x: 3 }}
                            >
                                <span className="text-purple-400 mt-0.5">📍</span>
                                <span className="text-sm">{data?.location || 'Dhaka, Bangladesh'}</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                    
                    {/* নিউজলেটার */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-sm mb-4 tracking-wider">Newsletter</h3>
                        <p className="text-purple-200/50 text-sm mb-3">
                            Subscribe for updates & projects
                        </p>
                        <div className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email"
                                className="px-4 py-2.5 rounded-lg bg-purple-500/10 border border-purple-400/30 text-white placeholder:text-purple-300/30 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
                            />
                            <motion.button
                                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* কপিরাইট বার */}
                <motion.div 
                    className="mt-12 pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-center sm:text-left">
                        <p className="text-purple-400/40 text-xs font-mono">
                            © {currentYear} {data?.fullName || 'Portfolio'}. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <p className="text-purple-400/40 text-xs font-mono flex items-center gap-1">
                            Made with 
                            <motion.span 
                                className="text-pink-500 inline-block"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <FaHeart className="inline" />
                            </motion.span> 
                            by {data?.fullName?.split(' ')[0] || 'Me'}
                        </p>
                    </div>
                    
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 hover:bg-purple-500/40 transition-all duration-300 text-xs font-medium"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaArrowUp className="text-sm" />
                        Back to Top
                    </motion.button>
                </motion.div>
                
            </div>
            
            {/* স্ক্রল টু টপ ফ্লোটিং বাটন */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span 
                            className="text-xl"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ↑
                        </motion.span>
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default AnimatedFooter;