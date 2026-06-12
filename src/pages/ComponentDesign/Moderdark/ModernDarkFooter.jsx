import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkFooter = ({ data }) => {
    // স্মুথ স্ক্রল করে একদম উপরে চলে যাওয়ার ফাংশন
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="container mx-auto bg-gray-950 border-t border-gray-900 text-gray-500 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* ১. বাম পাশ: কপিরাইট টেক্সট */}
                <div className="text-sm font-medium tracking-wide text-center sm:text-left">
                    © {currentYear} <span className="text-gray-300 font-bold">{data?.fullName || 'Portfolio'}</span>. 
                    All rights reserved.
                </div>

                {/* ২. ডান পাশ: ব্যাক টু টপ বাটন উইথ ফ্রেমার মোশন */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: '#1f2937', 
                        textColor: '#22d3ee',
                        borderColor: '#22d3ee' 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 shadow-md group cursor-pointer"
                    title="Scroll to top"
                >
                    Back to top 
                    <span className="transform group-hover:-translate-y-0.5 transition-transform inline-block text-cyan-400">
                        ↑
                    </span>
                </motion.button>

            </div>
        </footer>
    );
};

export default ModernDarkFooter;