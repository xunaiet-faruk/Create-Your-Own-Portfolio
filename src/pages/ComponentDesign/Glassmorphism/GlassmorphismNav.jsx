// frontend/src/components/PortfolioViewer/navbar/GlassmorphismNav.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const GlassmorphismNav = ({ fullName, resumeLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
            {/* Glassmorphism Background */}
            <div className="max-w-7xl mx-auto">
                <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl shadow-black/20 px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo / Name */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
                                {fullName?.charAt(0) || 'P'}
                            </div>
                            <span className="text-white font-semibold text-lg hidden sm:block">
                                {fullName || 'Portfolio'}
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            <motion.a 
                                href="#hero" 
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                                whileHover={{ y: -2 }}
                            >
                                Home
                            </motion.a>
                            <motion.a 
                                href="#skills" 
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                                whileHover={{ y: -2 }}
                            >
                                Skills
                            </motion.a>
                            <motion.a 
                                href="#projects" 
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                                whileHover={{ y: -2 }}
                            >
                                Projects
                            </motion.a>
                            <motion.a 
                                href="#contact" 
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                                whileHover={{ y: -2 }}
                            >
                                Contact
                            </motion.a>
                            
                            {resumeLink && (
                                <motion.a
                                    href={resumeLink}
                                    target="_blank"
                                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download CV
                                </motion.a>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white text-2xl focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3"
                        >
                            <a href="#hero" className="text-white/80 hover:text-white transition-colors py-2">Home</a>
                            <a href="#skills" className="text-white/80 hover:text-white transition-colors py-2">Skills</a>
                            <a href="#projects" className="text-white/80 hover:text-white transition-colors py-2">Projects</a>
                            <a href="#contact" className="text-white/80 hover:text-white transition-colors py-2">Contact</a>
                            {resumeLink && (
                                <a
                                    href={resumeLink}
                                    target="_blank"
                                    className="px-5 py-2 text-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium"
                                >
                                    Download CV
                                </a>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default GlassmorphismNav;