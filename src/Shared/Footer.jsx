import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarker, FaHeart, FaUser } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent pt-16 pb-8 px-4 sm:px-6 lg:px-8 container mx-auto">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.05, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img className='lg:w-16 md:w-12 w-10 pb-6' src="./images/Logo.png" alt="" />

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Create stunning portfolios in minutes. Showcase your skills and get noticed by employers worldwide.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaUser className="text-cyan-400" />
                                <span className="text-sm">Junaiet Faruk</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaPhone className="text-cyan-400" />
                                <a href="tel:01882239828" className="text-sm hover:text-cyan-400 transition-colors">
                                    01882239828
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaEnvelope className="text-cyan-400" />
                                <a href="mailto:xunaiet28@gmail.com" className="text-sm hover:text-cyan-400 transition-colors break-all">
                                    xunaiet28@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaMapMarker className="text-cyan-400" />
                                <span className="text-sm">Bangladesh</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                                <FaGithub />
                            </a>
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                            <p className="text-sm text-gray-300">
                                📧 Need help?{" "}
                                <a href="mailto:xunaiet28@gmail.com" className="text-cyan-400 hover:underline">
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="pt-8 border-t border-white/10 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-cyan-400">Junaiet Faruk</span>. All rights reserved.
                    </p>
                    
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;