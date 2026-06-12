import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

const CleanWhiteFooter = ({ data }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
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

    const footerLinks = data?.footerLinks || [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Skills', url: '#skills' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' }
    ];

    const socialLinks = data?.socialLinks || [
        { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com', color: '#333' },
        { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5' },
        { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
        { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com', color: '#1877f2' }
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative w-full bg-white border-t border-gray-100">
            
            {/* ডেকোরেটিভ টপ লাইন */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                
                {/* মেইন ফুটার কন্টেন্ট */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    
                    {/* লোগো ও বিবরণ */}
                    <div className="space-y-4">
                        <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                                <span className="text-white text-lg font-bold">&lt;/&gt;</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">
                                {data?.fullName?.split(' ')[0] || 'Portfolio'}
                            </span>
                        </motion.div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {data?.footerBio || "Creating beautiful and functional web experiences that make a difference."}
                        </p>
                        
                        {/* সোশ্যাল লিংকস */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                                    style={{ color: social.color }}
                                    whileHover={{ y: -3, scale: 1.05, backgroundColor: social.color, color: 'white' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    {/* কুইক লিংকস */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, idx) => (
                                <motion.li 
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                >
                                    <a 
                                        href={link.url}
                                        onClick={(e) => scrollToSection(e, link.url.substring(1))}
                                        className="text-gray-500 hover:text-yellow-500 text-sm transition-colors flex items-center gap-2"
                                    >
                                        <span className="text-yellow-400">→</span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* কন্ট্যাক্ট ইনফো */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">📧</span>
                                <a href={`mailto:${data?.email || 'hello@example.com'}`} className="text-gray-500 hover:text-yellow-500 text-sm break-all">
                                    {data?.email || 'hello@example.com'}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">📱</span>
                                <a href={`tel:${data?.phone || '+8801234567890'}`} className="text-gray-500 hover:text-yellow-500 text-sm">
                                    {data?.phone || '+880 1234 567890'}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">📍</span>
                                <span className="text-gray-500 text-sm">
                                    {data?.location || 'Dhaka, Bangladesh'}
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* নিউজলেটার */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
                        <p className="text-gray-500 text-sm mb-3">
                            Subscribe to get updates about my work!
                        </p>
                        <div className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email address"
                                className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                            />
                            <motion.button
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </div>
                
                {/* কপিরাইট বার */}
                <div className="pt-8 mt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {data?.fullName || 'Portfolio'}. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            Made with <FaHeart className="text-red-500 animate-pulse" /> by {data?.fullName?.split(' ')[0] || 'Me'}
                        </p>
                    </div>
                    
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-yellow-400 hover:text-white transition-all duration-300 text-sm"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaArrowUp className="text-sm" />
                        Back to Top
                    </motion.button>
                </div>
            </div>
            
            {/* স্ক্রল টু টপ ফ্লোটিং বাটন */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default CleanWhiteFooter;