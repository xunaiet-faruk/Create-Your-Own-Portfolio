import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CleanWhiteProjects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');
    
    // প্রজেক্ট ডাটা
    const projects = data?.projects || [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
            image: 'https://i.ibb.co/placeholder1.jpg',
            category: 'web',
            technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/example/project',
            features: ['User Authentication', 'Payment Gateway', 'Product Management', 'Order Tracking']
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Productivity app for managing tasks, projects, and team collaboration with real-time updates.',
            image: 'https://i.ibb.co/placeholder2.jpg',
            category: 'web',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/example/project',
            features: ['Task Board', 'Real-time Chat', 'File Attachments', 'Due Date Reminders']
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'Modern portfolio website with smooth animations and responsive design.',
            image: 'https://i.ibb.co/placeholder3.jpg',
            category: 'web',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/example/project',
            features: ['Smooth Animations', 'Dark/Light Mode', 'Contact Form', 'SEO Optimized']
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'Real-time weather application with 5-day forecast and location search.',
            image: 'https://i.ibb.co/placeholder4.jpg',
            category: 'app',
            technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/example/project',
            features: ['Real-time Weather', '5-day Forecast', 'Location Search', 'Temperature Units']
        }
    ];
    
    // ক্যাটাগরি ফিল্টার
    const categories = [
        { id: 'all', name: 'All Projects', icon: '✨' },
        { id: 'web', name: 'Web Apps', icon: '🌐' },
        { id: 'app', name: 'Mobile Apps', icon: '📱' },
        { id: 'design', name: 'UI/UX Design', icon: '🎨' }
    ];
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
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
    
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };
    
    return (
        <div className="w-full relative overflow-hidden py-16 md:py-24 bg-gray-50">
            
            {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
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
                        <span className="text-xs font-mono text-yellow-600 tracking-wider">MY PORTFOLIO</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-gray-800">Featured </span>
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    
                    <motion.div 
                        className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    
                    <p className="text-gray-500 text-sm max-w-md mx-auto mt-4">
                        Some of my best work and personal projects
                    </p>
                </motion.div>
                
                {/* ফিল্টার বাটন */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                filter === cat.id
                                    ? 'text-yellow-600 bg-yellow-50 border border-yellow-300 shadow-sm'
                                    : 'text-gray-500 bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.name}</span>
                            {filter === cat.id && (
                                <motion.div 
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full"
                                    layoutId="activeProjectTab"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
                
                {/* প্রজেক্ট গ্রিড */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                layout
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    
                                    {/* ইমেজ কন্টেইনার */}
                                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        {project.image ? (
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-center">
                                                    <span className="text-5xl mb-2 block">🚀</span>
                                                    <span className="text-sm text-gray-400">No preview image</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* ইমেজ ওভারলে */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* ক্যাটাগরি ব্যাজ */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 rounded-md bg-yellow-500/90 text-white text-[10px] font-medium uppercase tracking-wider">
                                                {project.category === 'web' ? 'Web App' : project.category === 'app' ? 'Mobile App' : 'UI/UX Design'}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* কন্টেন্ট */}
                                    <div className="p-5 space-y-3">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                        
                                        {/* টেক স্ট্যাক */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="text-[10px] font-mono text-yellow-600 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="text-[10px] text-gray-400">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* বাটন গ্রুপ */}
                                        <div className="flex items-center gap-3 pt-3">
                                            {project.liveLink && (
                                                <motion.a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center px-3 py-1.5 rounded-lg bg-yellow-400 text-white text-xs font-medium hover:bg-yellow-500 transition-colors"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Live Demo
                                                </motion.a>
                                            )}
                                            {project.githubLink && (
                                                <motion.a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center px-3 py-1.5 rounded-lg bg-gray-800 text-white text-xs font-medium hover:bg-gray-900 transition-colors"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    GitHub
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* ভিউ মোর বাটন */}
                {projects.length > 6 && (
                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            className="px-8 py-3 rounded-full bg-white border-2 border-yellow-400 text-yellow-500 font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Projects
                        </motion.button>
                    </motion.div>
                )}
                
                {/* প্রজেক্ট স্ট্যাটস */}
                <motion.div 
                    className="mt-16 pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">{projects.length}+</div>
                        <div className="text-[10px] text-gray-500">Total Projects</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">
                            {projects.filter(p => p.liveLink).length}
                        </div>
                        <div className="text-[10px] text-gray-500">Live Deployed</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">⭐ 4.8</div>
                        <div className="text-[10px] text-gray-500">Client Rating</div>
                    </div>
                </motion.div>
            </div>
            
            {/* প্রজেক্ট ডিটেইলস মোডাল */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* মোডাল ইমেজ */}
                            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                                {selectedProject.image ? (
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-6xl">🚀</span>
                                    </div>
                                )}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            {/* মোডাল কন্টেন্ট */}
                            <div className="p-6 md:p-8 space-y-5">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                        {selectedProject.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.category && (
                                            <span className="px-2 py-1 rounded-md bg-yellow-100 text-yellow-600 text-xs font-medium">
                                                {selectedProject.category === 'web' ? 'Web Application' : 'Mobile App'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                                
                                {/* ফিচার লিস্ট */}
                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="text-yellow-500">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {/* টেকনোলজি */}
                                {selectedProject.technologies && (
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* বাটন গ্রুপ */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    {selectedProject.liveLink && (
                                        <a 
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold hover:shadow-lg transition-all"
                                        >
                                            🔗 Live Demo
                                        </a>
                                    )}
                                    {selectedProject.githubLink && (
                                        <a 
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all"
                                        >
                                            📂 GitHub Repository
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CleanWhiteProjects;