import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const CleanWhiteContact = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // এখানে আপনার ফর্ম সাবমিট লজিক বসবে
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: data?.email || 'hello@example.com', link: `mailto:${data?.email || 'hello@example.com'}` },
        { icon: <FaPhone />, label: 'Phone', value: data?.phone || '+880 1234 567890', link: `tel:${data?.phone || '+8801234567890'}` },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: data?.location || 'Dhaka, Bangladesh', link: null }
    ];

    const socialLinks = data?.socialLinks || [
        { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com', color: '#333' },
        { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5' },
        { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
        { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com', color: '#1877f2' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="w-full relative overflow-hidden py-16 md:py-5">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-50 to-transparent rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-yellow-600 tracking-wider">GET IN TOUCH</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-gray-800">Contact </span>
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-500 text-sm max-w-md mx-auto mt-4">
                        Have a project in mind? Let's work together
                    </p>
                </motion.div>
                
                {/* মেইন কন্টেন্ট - ২ কলাম */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* বাম কলাম - কন্ট্যাক্ট ইনফো */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Talk</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                I'm always interested in hearing about new projects, 
                                collaborations, or just having a chat. Feel free to reach out!
                            </p>
                            
                            {/* কন্ট্যাক্ট ইনফো লিস্ট */}
                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="flex items-center gap-4 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-xl group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">{info.label}</p>
                                            {info.link ? (
                                                <a href={info.link} className="text-gray-700 font-medium hover:text-yellow-500 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-700 font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        {/* সোশ্যাল লিংকস */}
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Me</h3>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl hover:text-white transition-all duration-300"
                                        style={{ color: social.color }}
                                        whileHover={{ y: -5, scale: 1.05, backgroundColor: social.color, color: 'white' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* ডান কলাম - কন্ট্যাক্ট ফর্ম */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                            
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all outline-none resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message →'
                                    )}
                                </motion.button>
                                
                                {submitStatus === 'success' && (
                                    <motion.div 
                                        className="text-center text-green-600 text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default CleanWhiteContact;