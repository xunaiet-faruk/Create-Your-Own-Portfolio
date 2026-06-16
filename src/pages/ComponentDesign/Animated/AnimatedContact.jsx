import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const AnimatedContact = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => setIsSubmitted(false), 4000);
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
                staggerChildren: 0.15,
                delayChildren: 0.1
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
    
    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };
    
    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
    };
    
    return (
        <section 
            ref={sectionRef}
            className="relative w-full py-20 md:py-28  overflow-hidden"
        >
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [null, -60, -120],
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>
            
            {/* গ্লো ইফেক্ট */}
            <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="animate"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* সেকশন হেডার */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-white">Let's </span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-purple-200/60 text-sm max-w-md mx-auto mt-4">
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
                        <div className="p-6 md:p-8 rounded-2xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="flex items-center gap-4 group p-3 rounded-xl hover:bg-purple-500/20 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div 
                                            className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 transition-transform"
                                            variants={floatingVariants}
                                            animate="animate"
                                        >
                                            {info.icon}
                                        </motion.div>
                                        <div>
                                            <p className="text-xs text-purple-300/50">{info.label}</p>
                                            {info.link ? (
                                                <a href={info.link} className="text-purple-200 font-medium hover:text-purple-400 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-purple-200 font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        {/* সোশ্যাল লিংকস */}
                        <div className="p-6 md:p-8 rounded-2xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4">Connect Socially</h3>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-xl hover:text-white transition-all duration-300"
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
                        <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                            
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300/70 mb-1">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-purple-300/70 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-purple-300/70 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-purple-300/70 mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.span 
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <FaCheckCircle className="text-white" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="text-white" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                                
                                {isSubmitted && (
                                    <motion.div 
                                        className="text-center text-green-400 text-sm bg-green-500/10 border border-green-500/30 rounded-xl p-3"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✅ Your message has been sent successfully!
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
                
               
                
            </div>
        </section>
    );
};

export default AnimatedContact;