import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DetectUserType } from '../../../component/Utils/DetectUserType';
import { RoleBasedContent , defaultContent} from '../../../component/Utils/RoleBasedContent';


const AnimatedAbout = ({ data }) => {
    const [userType, setUserType] = useState('designer');
    const [content, setContent] = useState(defaultContent);
    
    useEffect(() => {
        // ইউজারের টাইপ ডিটেক্ট করুন
        const detectedType = DetectUserType(data);
        setUserType(detectedType);
        setContent(RoleBasedContent[detectedType] || defaultContent);
    }, [data]);
    
    // ডাইনামিক ডাটা - ইউজারের ডাটা প্রাধান্য পাবে, না থাকলে রোল বেসড কন্টেন্ট
    const aboutData = {
        name: data?.fullName || data?.name || content.name,
        title: data?.title || content.title,
        bio: data?.aboutMe || data?.description || content.bio,
        experience: data?.experience || content.experience,
        projects: data?.projectsCompleted || content.projects,
        clients: data?.happyClients || content.clients,
        focusAreas: data?.focusAreas || content.focusAreas,
        quote: data?.quote || content.quote,
        quoteAuthor: data?.quoteAuthor || content.quoteAuthor,
        skills: data?.skills || content.skills,
        icon: content.icon,
        badge: content.badge,
        greeting: content.greeting
    };
    
    // অ্যানিমেশন ভেরিয়েন্টস
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
    
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 }
        }
    };
    
    const numberVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 200 }
        }
    };
    
    return (
        <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
            
            {/* ডেকোরেটিভ এলিমেন্টস */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                {/* গ্রিড প্যাটার্ন */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm mb-5"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <motion.div 
                            className="w-2 h-2 rounded-full bg-purple-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-purple-200 tracking-wider">{aboutData.badge || "ABOUT ME"}</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-white">Know </span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            About Me
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
                        {aboutData.greeting}
                    </p>
                </motion.div>
                
                {/* মেইন কন্টেন্ট */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* বাম কলাম - ব্যক্তিগত তথ্য */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* প্রোফাইল হেডার */}
                        <div className="flex items-center gap-4">
                            <motion.div 
                                className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                {aboutData.icon}
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{aboutData.name}</h3>
                                <p className="text-purple-300">{aboutData.title}</p>
                            </div>
                        </div>
                        
                        {/* বায়ো */}
                        <div className="space-y-4">
                            <p className="text-purple-200/70 leading-relaxed">
                                {aboutData.bio}
                            </p>
                        </div>
                        
                        {/* স্ট্যাটস গ্রিড */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { number: aboutData.experience, label: 'Years Exp', icon: '⏱️' },
                                { number: aboutData.projects, label: 'Projects', icon: '🚀' },
                                { number: aboutData.clients, label: 'Clients', icon: '😊' }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={numberVariants}
                                    className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-400/20"
                                    whileHover={{ y: -5, backgroundColor: 'rgba(168,85,247,0.2)' }}
                                >
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                                    <div className="text-xs text-purple-300">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* ডান কলাম - ফোকাস এরিয়া */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* ফোকাস এরিয়া কার্ড */}
                        <motion.div 
                            variants={cardVariants}
                            className="p-6 rounded-2xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎯</span>
                                Core Focus Areas
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {aboutData.focusAreas.map((area, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm"
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(168,85,247,0.3)' }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {area}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* কোট কার্ড */}
                        <motion.div 
                            variants={cardVariants}
                            className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-sm"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-4xl text-purple-400">"</span>
                                <div>
                                    <p className="text-purple-200/80 italic leading-relaxed">
                                        {aboutData.quote}
                                    </p>
                                    <p className="text-purple-400 text-sm mt-2">— {aboutData.quoteAuthor}</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* স্কিল স্নিপেট */}
                        <motion.div 
                            variants={cardVariants}
                            className="p-6 rounded-2xl bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm"
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚡</span>
                                What I Bring
                            </h3>
                            <div className="space-y-3">
                                {aboutData.skills.map((skill, idx) => (
                                    <motion.div 
                                        key={idx}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                        <span className="text-purple-200/70 text-sm">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                {/* বটম ডেকোরেশন */}
                <motion.div 
                    className="mt-16 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs text-purple-400/50">
                        <span>✦</span>
                        <span>Always evolving & creating</span>
                        <span>✦</span>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default AnimatedAbout;