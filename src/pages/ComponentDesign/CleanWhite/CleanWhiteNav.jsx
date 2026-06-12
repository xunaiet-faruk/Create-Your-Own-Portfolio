import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CleanWhiteNavbar = ({ data }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // স্ক্রল ইফেক্ট
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // অ্যাক্টিভ সেকশন ডিটেক্ট
    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-white py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* লোগো */}
                    <motion.a
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className="relative group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            {data?.fullName?.split(' ')[0] || 'Portfolio'}
                        </span>
                        <motion.span 
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                            whileHover={{ width: '100%' }}
                        />
                    </motion.a>

                    {/* ডেস্কটপ মেনু */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -2 }}
                            >
                                <span className={`relative z-10 transition-colors duration-300 ${
                                    activeSection === link.id
                                        ? 'text-yellow-500'
                                        : 'text-gray-600 group-hover:text-gray-900'
                                }`}>
                                    {link.name}
                                </span>
                                
                                {/* অ্যাক্টিভ ইন্ডিকেটর - আন্ডারলাইন + ইয়েলো শ্যাডো */}
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                                        transition={{ type: "spring", duration: 0.5 }}
                                        style={{
                                            boxShadow: '0 0 8px rgba(234, 179, 8, 0.6), 0 0 12px rgba(234, 179, 8, 0.4)'
                                        }}
                                    />
                                )}
                                
                                {/* হোভার ইফেক্ট */}
                                <span className="absolute inset-0 rounded-lg bg-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* কন্টাক্ট বাটন */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Hire Me
                    </motion.a>

                    {/* মোবাইল মেনু বাটন */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-yellow-50 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* মোবাইল মেনু */}
            <motion.div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden ${
                    isMobileMenuOpen ? 'block' : 'hidden'
                }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    height: isMobileMenuOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                                activeSection === link.id
                                    ? 'bg-yellow-50 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <span className="ml-2 text-yellow-400">●</span>
                            )}
                        </motion.a>
                    ))}
                    
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="block mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center font-semibold"
                    >
                        Hire Me
                    </a>
                </div>
            </motion.div>
        </nav>
    );
};

export default CleanWhiteNavbar;