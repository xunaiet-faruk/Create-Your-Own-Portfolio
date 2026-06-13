import React from 'react';
import { motion } from 'framer-motion';

const CleanWhiteAbout = ({ data }) => {
    
    // অ্যানিমেশন ভেরিয়েন্টস
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
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
    
    // ডাইনামিক স্কিলস (যেকোনো পেশার জন্য কাজ করবে)
    const skills = data?.skills || ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'];
    
    // ডাইনামিক ফিউন ফ্যাক্টস (ইউজার ডাটা থেকে নিবে)
    const funFacts = data?.funFacts || [
        { number: '50+', label: 'Projects', icon: '🚀' },
        { number: '30+', label: 'Clients', icon: '😊' },
        { number: '4+', label: 'Years', icon: '⏱️' },
        { number: '∞', label: 'Passion', icon: '❤️' }
    ];
  
    
    // ডাইনামিক পার্সোনাল ইনফো (যেকোনো ফিল্ডের জন্য)
    const personalInfo = data?.personalInfo || [
        { icon: '📧', label: 'Email', value: data?.email || 'hello@example.com', isLink: true, linkType: 'email' },
        { icon: '📍', label: 'Location', value: data?.location || 'Dhaka, Bangladesh', isLink: false },
        { icon: '🎂', label: 'Birthday', value: data?.birthday || 'Jan 1, 1995', isLink: false },
        { icon: '💼', label: 'Profession', value: data?.profession || 'Developer', isLink: false }
    ];
    
    // ডাইনামিক কোট (যেকোনো মোটিভেশনাল কোট)
    const quote = data?.quote || { text: "Creativity is intelligence having fun", author: "Albert Einstein" };
    
    return (
        <div className="w-full py-16 md:py-20">
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* সেকশন হেডার - মিনিমাল */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* ডেকোরেটিভ ডটস */}
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <motion.div 
                                key={i}
                                className="w-1 h-1 rounded-full bg-yellow-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">
                        <span className="text-gray-800">About </span>
                        <span className="text-yellow-500 font-bold">Me</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-px bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-8 h-px bg-yellow-400"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm max-w-md mx-auto mt-4">
                        {data?.tagline || "Get to know me better"}
                    </p>
                </motion.div>
                
                {/* মেইন কন্টেন্ট - ২ কলাম */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    
                    {/* বাম কলাম - পার্সোনাল ইনফো */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* নম্বর ডেকোরেশন */}
                        <div className="text-7xl font-black text-yellow-100 select-none">01</div>
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Who Am <span className="text-yellow-500">I?</span>
                            </h3>
                            
                            <div className="space-y-3">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {data?.aboutMe || data?.description || "I'm a passionate professional who loves creating amazing experiences. With a strong foundation in my field, I focus on delivering high-quality work that makes a difference."}
                                </p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {data?.aboutMe2 || "My journey started several years ago, and since then I've worked with various clients, agencies, and businesses to bring their ideas to life. I'm constantly learning and improving my skills."}
                                </p>
                            </div>
                        </div>
                        
                        {/* ব্যক্তিগত তথ্য গ্রিড - ডাইনামিক */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {personalInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 border-l-2 border-yellow-400 bg-gray-50/50">
                                    <span className="text-yellow-500 text-lg">{info.icon}</span>
                                    <div>
                                        <p className="text-xs text-gray-400">{info.label}</p>
                                        {info.isLink ? (
                                            info.linkType === 'email' ? (
                                                <a href={`mailto:${info.value}`} className="text-sm text-gray-700 font-medium hover:text-yellow-500 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <a href={info.value} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 font-medium hover:text-yellow-500 transition-colors">
                                                    {info.value}
                                                </a>
                                            )
                                        ) : (
                                            <p className="text-sm text-gray-700 font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* ডান কলাম - স্কিলস ও এক্সপেরিয়েন্স */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* নম্বর ডেকোরেশন */}
                        <div className="text-7xl font-black text-yellow-100 select-none text-right">02</div>
                        
                        {/* স্কিলস - ডাইনামিক */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Core <span className="text-yellow-500">Skills</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => (
                                    <motion.span 
                                        key={idx}
                                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-medium hover:border-yellow-400 hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                                        whileHover={{ scale: 1.05, x: 3 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        
                        {/* এক্সপেরিয়েন্স টাইমলাইন - ডাইনামিক */}
                    
                        
                        {/* রেজিউম/পোর্টফোলিও ডাউনলোড */}
                        <motion.button
                            onClick={() => {
                                if (data?.resumeUrl) {
                                    window.open(data.resumeUrl, '_blank');
                                } else {
                                    alert('Download started!');
                                }
                            }}
                            className="group flex items-center justify-between w-full p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                                    <span className="text-yellow-500 text-lg">📄</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        {data?.resumeLabel || 'Download Resume'}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {data?.resumeFormat || 'PDF format'}
                                    </p>
                                </div>
                            </div>
                            <motion.span 
                                className="text-yellow-500 text-xl"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </motion.div>
                
              
                
            </div>
        </div>
    );
};

export default CleanWhiteAbout;