import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CleanWhiteExperience = ({ data }) => {
    const [activeTab, setActiveTab] = useState('work');
    
    // ওয়ার্ক এক্সপেরিয়েন্স ডাটা
    const workExperiences = data?.workExperiences || [
        {
            id: 1,
            company: 'Tech Innovators Inc.',
            position: 'Senior Frontend Developer',
            period: '2023 - Present',
            location: 'Remote',
            description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.',
            achievements: [
                'Improved application performance by 40%',
                'Led migration from JavaScript to TypeScript',
                'Implemented CI/CD pipeline reducing deployment time by 60%'
            ],
            technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
        },
        {
            id: 2,
            company: 'Digital Creative Agency',
            position: 'Full Stack Developer',
            period: '2021 - 2023',
            location: 'Dhaka, Bangladesh',
            description: 'Developed and maintained multiple client projects, collaborated with design team, and ensured responsive cross-browser compatibility.',
            achievements: [
                'Delivered 15+ successful client projects',
                'Reduced bug rate by 30% through comprehensive testing',
                'Implemented real-time features using WebSocket'
            ],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB']
        },
        {
            id: 3,
            company: 'Startup Hub',
            position: 'Junior Web Developer',
            period: '2020 - 2021',
            location: 'Remote',
            description: 'Started career as a junior developer, learned best practices, and contributed to various web applications.',
            achievements: [
                'Learned modern JavaScript frameworks',
                'Built reusable component library',
                'Collaborated with senior developers'
            ],
            technologies: ['JavaScript', 'React', 'CSS3', 'HTML5']
        }
    ];
    
    // এডুকেশন ডাটা
    const educations = data?.educations || [
        {
            id: 1,
            degree: 'B.Sc. in Computer Science & Engineering',
            institution: 'University of Technology',
            period: '2016 - 2020',
            location: 'Dhaka, Bangladesh',
            description: 'Completed bachelor\'s degree with focus on web technologies and software development.',
            achievements: [
                'CGPA: 3.85/4.00',
                'Dean\'s list for 4 consecutive semesters',
                'Best Final Year Project Award'
            ]
        },
        {
            id: 2,
            degree: 'Professional Certification in Web Development',
            institution: 'Online Learning Platform',
            period: '2020',
            location: 'Online',
            description: 'Intensive program focused on modern full-stack development.',
            achievements: [
                'Completed 500+ hours of hands-on coding',
                'Built 10+ real-world projects',
                'Earned certification with distinction'
            ]
        }
    ];
    
    // সার্টিফিকেট ডাটা
    const certificates = data?.certificates || [
        {
            id: 1,
            name: 'React Advanced Certification',
            issuer: 'Meta',
            year: '2023',
            link: '#'
        },
        {
            id: 2,
            name: 'AWS Cloud Practitioner',
            issuer: 'Amazon Web Services',
            year: '2022',
            link: '#'
        },
        {
            id: 3,
            name: 'TypeScript Professional',
            issuer: 'Microsoft',
            year: '2023',
            link: '#'
        }
    ];
    
    // অ্যানিমেশন ভেরিয়েন্টস
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
    
    const timelineVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };
    
    return (
        <div className="w-full relative overflow-hidden py-16 md:py-24 bg-white">
            
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
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-mono text-yellow-600 tracking-wider">MY JOURNEY</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-gray-800">Work </span>
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-500 text-sm max-w-md mx-auto mt-4">
                        My professional journey and academic background
                    </p>
                </motion.div>
                
                {/* ট্যাব বাটন */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {[
                        { id: 'work', name: '💼 Work Experience', icon: '💼' },
                        { id: 'education', name: '🎓 Education', icon: '🎓' },
                        { id: 'certificates', name: '📜 Certificates', icon: '📜' }
                    ].map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'text-yellow-600 bg-yellow-50 border border-yellow-300 shadow-sm'
                                    : 'text-gray-500 bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                <span>{tab.icon}</span>
                                <span>{tab.name}</span>
                            </span>
                            {activeTab === tab.id && (
                                <motion.div 
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-400 rounded-full"
                                    layoutId="activeExpTab"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
                
                {/* ট্যাব কন্টেন্ট */}
                <AnimatePresence mode="wait">
                    {/* ওয়ার্ক এক্সপেরিয়েন্স */}
                    {activeTab === 'work' && (
                        <motion.div
                            key="work"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {workExperiences.map((exp, idx) => (
                                <motion.div
                                    key={exp.id}
                                    variants={timelineVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-8 md:pl-12"
                                >
                                    {/* টাইমলাইন লাইন */}
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400 via-yellow-200 to-transparent"></div>
                                    
                                    {/* টাইমলাইন ডট */}
                                    <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-yellow-400 border-2 border-white shadow-sm"></div>
                                    
                                    {/* কন্টেন্ট */}
                                    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                                                <p className="text-yellow-600 font-medium">{exp.company}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-flex px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-medium">
                                                    {exp.period}
                                                </span>
                                                <p className="text-xs text-gray-400 mt-1">{exp.location}</p>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                        
                                        {/* অ্যাচিভমেন্টস */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, i) => (
                                                    <motion.li 
                                                        key={i}
                                                        className="flex items-start gap-2 text-sm text-gray-600"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                                                    >
                                                        <span className="text-yellow-500 mt-0.5">▹</span>
                                                        {achievement}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* টেকনোলজিস */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    
                    {/* এডুকেশন */}
                    {activeTab === 'education' && (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {educations.map((edu, idx) => (
                                <motion.div
                                    key={edu.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                            🎓
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-xs font-medium">
                                            {edu.period}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{edu.degree}</h3>
                                    <p className="text-yellow-600 text-sm font-medium mb-2">{edu.institution}</p>
                                    <p className="text-xs text-gray-400 mb-3">{edu.location}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                        {edu.description}
                                    </p>
                                    
                                    <ul className="space-y-1">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-yellow-500">★</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    
                    {/* সার্টিফিকেট */}
                    {activeTab === 'certificates' && (
                        <motion.div
                            key="certificates"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {certificates.map((cert, idx) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-yellow-200 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                                        📜
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-1">{cert.name}</h3>
                                    <p className="text-sm text-yellow-600 mb-2">{cert.issuer}</p>
                                    <p className="text-xs text-gray-400">{cert.year}</p>
                                    <motion.a
                                        href={cert.link}
                                        className="inline-block mt-3 text-xs text-yellow-500 hover:text-yellow-600"
                                        whileHover={{ x: 3 }}
                                    >
                                        View Certificate →
                                    </motion.a>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* এক্সপেরিয়েন্স সামারি স্ট্যাটস */}
                <motion.div 
                    className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {[
                        { number: workExperiences.length + '+', label: 'Years Experience', icon: '⏱️' },
                        { number: workExperiences.length, label: 'Companies Worked', icon: '🏢' },
                        { number: '30+', label: 'Projects Completed', icon: '🚀' },
                        { number: '15+', label: 'Happy Clients', icon: '😊' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-yellow-200 transition-all duration-300 group">
                            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className="text-xl font-bold text-gray-800">{stat.number}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
                
            </div>
        </div>
    );
};

export default CleanWhiteExperience;