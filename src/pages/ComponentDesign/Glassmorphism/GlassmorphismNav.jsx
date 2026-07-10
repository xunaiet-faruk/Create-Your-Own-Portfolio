import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const GlassmorphismNav = ({ fullName, resumeLink, github, linkedin, email }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    // Active section detect
    useEffect(() => {
        const sections = ['hero', 'skills', 'projects', 'contact'];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: 'hero', label: 'Home', icon: '🏠' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'contact', label: 'Contact', icon: '📬' }
    ];

    // লিংকে ক্লিক করলে মেনু বন্ধ হবে না
    const handleLinkClick = (e, linkId) => {
        e.preventDefault();
        // সেকশনে স্ক্রল করা
        const element = document.getElementById(linkId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(linkId);
        // মেনু বন্ধ হবে না - এই লাইনটি সরানো হয়েছে
        // setIsOpen(false); ← এই লাইনটি নেই
    };

    // হামবার্গার ক্লিক করলেই শুধু টগল হবে
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl shadow-black/20 px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => {
                                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('hero');
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
                                {fullName?.charAt(0) || 'P'}
                            </div>
                            <span className="text-white font-semibold text-lg bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                                {fullName || 'Portfolio'}
                            </span>
                        </motion.div>

                        {/* Desktop Links - হামবার্গার ক্লিক করলে দেখাবে */}
                        <div className={`hidden md:flex items-center gap-1 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleLinkClick(e, link.id)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer
                                        ${activeSection === link.id 
                                            ? 'bg-gradient-to-r from-cyan-400/30 to-purple-500/30 text-white shadow-lg shadow-cyan-500/20 border border-white/20' 
                                            : 'text-white/60 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span>{link.icon}</span>
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            {resumeLink && (
                                <a
                                    href={resumeLink}
                                    target="_blank"
                                    className={`hidden md:flex px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 items-center gap-2
                                        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <FiExternalLink size={14} />
                                    Resume
                                </a>
                            )}

                            {/* Hamburger - শুধু এটাই মেনু টগল করবে */}
                            <motion.button
                                onClick={toggleMenu}
                                className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="md:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
                            >
                                {/* Mobile Links */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={`#${link.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.getElementById(link.id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                                setActiveSection(link.id);
                                                // মেনু বন্ধ হবে না
                                            }}
                                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer
                                                ${activeSection === link.id 
                                                    ? 'bg-gradient-to-r from-cyan-400/30 to-purple-500/30 text-white shadow-lg shadow-cyan-500/20 border border-white/20' 
                                                    : 'text-white/60 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            <span>{link.icon}</span>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>

                                {/* Social Links */}
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    {github && (
                                        <a href={github} target="_blank" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300">
                                            <FiGithub size={18} />
                                        </a>
                                    )}
                                    {linkedin && (
                                        <a href={linkedin} target="_blank" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300">
                                            <FiLinkedin size={18} />
                                        </a>
                                    )}
                                    {email && (
                                        <a href={`mailto:${email}`} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300">
                                            <FiMail size={18} />
                                        </a>
                                    )}
                                    {resumeLink && (
                                        <a href={resumeLink} target="_blank" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                                            <FiExternalLink size={14} />
                                            Resume
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default GlassmorphismNav;