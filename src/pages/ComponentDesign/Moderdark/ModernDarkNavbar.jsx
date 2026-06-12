import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernDarkNavbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    // নেভিগেশন লিংকস এর অ্যারে
    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed top-0 left-0 w-full z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* ১. লোগো / নাম (Neon Cyan Accent) */}
                    <div className="flex-shrink-0">
                        <a href="#hero" className="text-xl font-black tracking-wider text-white">
                            {data?.fullName?.split(' ')[0] || 'PORTFOLIO'}
                            <span className="text-cyan-400">.</span>
                        </a>
                    </div>

                    {/* ২. ডেক্সটপ মেনু */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                                >
                                    {link.name}
                                    {/* হোভার করলে নিচে একটি নিওন ডট বা হালকা আন্ডারলাইন আসবে */}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-1/2 group-hover:left-1/4"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ৩. মোবাইল মেনু বাটন */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ৪. মোবাইল ড্রপডাউন মেনু (Framer Motion দিয়ে অ্যানিমেটেড) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-b border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)} // লিংক ক্লিক করলে মেনু বন্ধ হয়ে যাবে
                                    className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default ModernDarkNavbar;