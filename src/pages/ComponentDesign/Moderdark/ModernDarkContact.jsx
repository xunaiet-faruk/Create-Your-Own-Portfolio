import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModernDarkContact = ({ data }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে ফর্ম সাবমিট হ্যান্ডলার বসবে (যেমন: EmailJS বা API call)
        console.log('Submitted Data:', formData);
    };

    return (
        <div className="w-full text-white space-y-12 py-12 border-t border-gray-800/60">
            
            {/* 🎯 সেকশন হেডার */}
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tight">
                    Get In <span className="text-cyan-400">Touch</span>
                </h2>
                <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto md:mx-0"></div>
                <p className="text-sm text-gray-500 pt-1">Feel free to reach out for collaborations or just a hello.</p>
            </div>

            {/* ✉️ কন্টাক্ট কন্টেন্ট গ্রিড */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ১. বাম পাশ: ইনফো প্যানেল */}
                <motion.div 
                    className="lg:col-span-5 space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="p-6 rounded-2xl bg-gray-800/20 border border-gray-800/80 backdrop-blur-sm space-y-6">
                        <h3 className="text-xl font-bold text-gray-200">Contact Information</h3>
                        
                        <div className="space-y-4">
                            {/* ইমেইল */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-cyan-400">
                                    📧
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono">EMAIL ME</p>
                                    <a href={`mailto:${data?.email || 'hello@example.com'}`} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                                        {data?.email || 'hello@example.com'}
                                    </a>
                                </div>
                            </div>

                            {/* ফোন (যদি ডাটায় থাকে) */}
                            {data?.phone && (
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-cyan-400">
                                        📞
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-mono">CALL ME</p>
                                        <p className="text-sm text-gray-300">{data.phone}</p>
                                    </div>
                                </div>
                            )}

                            {/* লোকেশন (যদি ডাটায় থাকে) */}
                            {data?.location && (
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-cyan-400">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-mono">LOCATION</p>
                                        <p className="text-sm text-gray-300">{data.location}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* ২. ডান পাশ: নিয়ন-ফোকাস কন্টাক্ট ফর্ম */}
                <motion.div 
                    className="lg:col-span-7"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-mono tracking-wider text-gray-400 uppercase">Your Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-gray-800/40 border border-gray-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-mono tracking-wider text-gray-400 uppercase">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full bg-gray-800/40 border border-gray-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-mono tracking-wider text-gray-400 uppercase">Message</label>
                            <textarea 
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full bg-gray-800/40 border border-gray-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold rounded-xl shadow-lg shadow-cyan-500/10 transition-all duration-300"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default ModernDarkContact;