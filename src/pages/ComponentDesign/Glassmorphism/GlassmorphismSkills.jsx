// frontend/src/components/ComponentDesign/Glassmorphism/GlassmorphismSkills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiCode, FiZap, FiCpu, FiMonitor, FiServer,
    FiDatabase, FiCloud, FiTool, FiBox, FiGrid,
    FiAward, FiTrendingUp, FiStar, FiLayers,
    FiPenTool, FiCamera, FiVideo, FiBarChart2,
    FiBookOpen, FiMusic, FiShoppingBag, FiHexagon,
    FiChevronDown, FiChevronUp, FiMaximize2, FiMinimize2,
    FiCompass, FiTarget, FiActivity
} from 'react-icons/fi';

const GlassmorphismSkills = ({ data = {} }) => {
    const { skills = [] } = data;
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [viewMode, setViewMode] = useState('grid');

    const getSkillIcon = (skill) => {
        const lower = skill.toLowerCase();
        if (lower.includes('react') || lower.includes('vue') || lower.includes('angular') || 
            lower.includes('html') || lower.includes('css') || lower.includes('javascript') ||
            lower.includes('typescript') || lower.includes('tailwind') || lower.includes('bootstrap')) 
            return { icon: <FiMonitor />, color: 'cyan' };
        if (lower.includes('node') || lower.includes('python') || lower.includes('php') || 
            lower.includes('java') || lower.includes('express') || lower.includes('django'))
            return { icon: <FiServer />, color: 'purple' };
        if (lower.includes('mongodb') || lower.includes('sql') || lower.includes('postgres') || 
            lower.includes('mysql') || lower.includes('redis') || lower.includes('firebase'))
            return { icon: <FiDatabase />, color: 'emerald' };
        if (lower.includes('aws') || lower.includes('docker') || lower.includes('cloud') || 
            lower.includes('kubernetes'))
            return { icon: <FiCloud />, color: 'pink' };
        if (lower.includes('git') || lower.includes('github') || lower.includes('vscode'))
            return { icon: <FiTool />, color: 'orange' };
        if (lower.includes('figma') || lower.includes('design') || lower.includes('photoshop') || 
            lower.includes('illustrator') || lower.includes('ui') || lower.includes('ux'))
            return { icon: <FiPenTool />, color: 'rose' };
        if (lower.includes('camera') || lower.includes('photography') || lower.includes('photo'))
            return { icon: <FiCamera />, color: 'yellow' };
        if (lower.includes('video') || lower.includes('youtube') || lower.includes('content'))
            return { icon: <FiVideo />, color: 'red' };
        if (lower.includes('seo') || lower.includes('marketing') || lower.includes('analytics'))
            return { icon: <FiBarChart2 />, color: 'blue' };
        if (lower.includes('writing') || lower.includes('blog') || lower.includes('article'))
            return { icon: <FiBookOpen />, color: 'amber' };
        return { icon: <FiHexagon />, color: 'gray' };
    };

    const getCategory = (skill) => {
        const lower = skill.toLowerCase();
        if (['react', 'vue', 'angular', 'html', 'css', 'javascript', 'typescript', 'tailwind', 
             'bootstrap', 'figma', 'photoshop', 'illustrator', 'ui', 'ux', 'design'].some(s => lower.includes(s))) 
            return 'design-dev';
        if (['node', 'python', 'php', 'java', 'express', 'django', 'ruby', 'go', 'rust', 'mongodb', 
             'sql', 'postgres', 'mysql', 'redis', 'firebase', 'aws', 'docker', 'cloud', 'kubernetes'].some(s => lower.includes(s))) 
            return 'backend-cloud';
        if (['camera', 'photography', 'photo', 'lightroom', 'lens', 'capture', 'portrait', 'wedding', 
             'editing', 'video', 'youtube', 'content', 'vlog', 'podcast', 'script', 'storytelling'].some(s => lower.includes(s))) 
            return 'creative';
        if (['seo', 'marketing', 'analytics', 'campaign', 'social media', 'digital marketing', 'brand', 
             'strategy', 'advertising', 'google ads', 'facebook ads'].some(s => lower.includes(s))) 
            return 'business';
        if (['writing', 'blog', 'article', 'copywriting', 'content writing', 'author', 'story', 'poem'].some(s => lower.includes(s))) 
            return 'creative';
        return 'other';
    };

    const grouped = {
        'design-dev': { label: '💻 Design & Dev', icon: <FiMonitor className="text-cyan-400" />, color: 'cyan', bg: 'from-cyan-500/5' },
        'backend-cloud': { label: '☁️ Backend & Cloud', icon: <FiCloud className="text-purple-400" />, color: 'purple', bg: 'from-purple-500/5' },
        'creative': { label: '🎨 Creative & Media', icon: <FiPenTool className="text-rose-400" />, color: 'rose', bg: 'from-rose-500/5' },
        'business': { label: '📊 Business & Marketing', icon: <FiBarChart2 className="text-blue-400" />, color: 'blue', bg: 'from-blue-500/5' },
        'other': { label: '🔧 Other Skills', icon: <FiTool className="text-gray-400" />, color: 'gray', bg: 'from-gray-500/5' }
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        const cat = getCategory(skill);
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {});

    const totalSkills = skills.length || 0;
    const categories = Object.keys(groupedSkills).filter(cat => groupedSkills[cat]?.length > 0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, rotate: -5 },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotate: 0,
            transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
        }
    };

    const floatVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        animate: {
            boxShadow: [
                "0 0 20px rgba(6,182,212,0.05)",
                "0 0 50px rgba(168,85,247,0.12)",
                "0 0 20px rgba(6,182,212,0.05)"
            ],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const rotateIcon = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const waveVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const getColorClass = (color) => {
        const colors = {
            cyan: 'border-cyan-500/30 hover:border-cyan-400',
            purple: 'border-purple-500/30 hover:border-purple-400',
            rose: 'border-rose-500/30 hover:border-rose-400',
            blue: 'border-blue-500/30 hover:border-blue-400',
            emerald: 'border-emerald-500/30 hover:border-emerald-400',
            pink: 'border-pink-500/30 hover:border-pink-400',
            orange: 'border-orange-500/30 hover:border-orange-400',
            yellow: 'border-yellow-500/30 hover:border-yellow-400',
            red: 'border-red-500/30 hover:border-red-400',
            amber: 'border-amber-500/30 hover:border-amber-400',
            gray: 'border-gray-500/30 hover:border-gray-400'
        };
        return colors[color] || colors.gray;
    };

    const getTextColor = (color) => {
        const colors = {
            cyan: 'text-cyan-400',
            purple: 'text-purple-400',
            rose: 'text-rose-400',
            blue: 'text-blue-400',
            emerald: 'text-emerald-400',
            pink: 'text-pink-400',
            orange: 'text-orange-400',
            yellow: 'text-yellow-400',
            red: 'text-red-400',
            amber: 'text-amber-400',
            gray: 'text-gray-400'
        };
        return colors[color] || colors.gray;
    };

    const getBgColor = (color) => {
        const colors = {
            cyan: 'bg-cyan-500/10',
            purple: 'bg-purple-500/10',
            rose: 'bg-rose-500/10',
            blue: 'bg-blue-500/10',
            emerald: 'bg-emerald-500/10',
            pink: 'bg-pink-500/10',
            orange: 'bg-orange-500/10',
            yellow: 'bg-yellow-500/10',
            red: 'bg-red-500/10',
            amber: 'bg-amber-500/10',
            gray: 'bg-gray-500/10'
        };
        return colors[color] || colors.gray;
    };

    return (
        <section id="skills" className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <motion.div 
                    animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    animate={{ x: [0, -80, 80, 0], y: [0, 40, -40, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    {...waveVariants}
                    animate="animate"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-pink-500/10 rounded-full"
                ></motion.div>
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
                        <motion.div {...rotateIcon} animate="animate">
                            <FiCompass className="text-cyan-400" size={14} />
                        </motion.div>
                        <span className="text-cyan-300/70 text-[10px] font-mono tracking-[0.2em] uppercase">// expertise</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Tech <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 flex items-center justify-center gap-2">
                        <FiActivity className="text-cyan-400" size={12} />
                        {totalSkills} {totalSkills === 1 ? 'skill' : 'skills'} · {categories.length} {categories.length === 1 ? 'category' : 'categories'}
                    </p>
                </motion.div>

                {totalSkills > 0 ? (
                    <>
                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative mb-10"
                        >
                            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 p-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <motion.p 
                                            {...pulseVariants}
                                            animate="animate"
                                            className="text-3xl font-bold text-white"
                                        >
                                            {totalSkills}
                                        </motion.p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Total Skills</p>
                                    </div>
                                    <div className="text-center border-l border-white/5">
                                        <motion.p 
                                            {...floatVariants}
                                            animate="animate"
                                            className="text-3xl font-bold text-cyan-400"
                                        >
                                            {categories.length}
                                        </motion.p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Categories</p>
                                    </div>
                                    <div className="text-center border-l border-white/5">
                                        <p className="text-3xl font-bold text-purple-400">
                                            {categories.length > 0 ? Math.max(...Object.values(groupedSkills).map(arr => arr.length)) : 0}
                                        </p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Top Category</p>
                                    </div>
                                    <div className="text-center border-l border-white/5">
                                        <p className="text-3xl font-bold text-emerald-400">
                                            {skills.filter(s => s.length > 8).length}
                                        </p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Expert Level</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* View Toggle */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs hover:bg-white/10 transition-all duration-300"
                            >
                                {viewMode === 'grid' ? <FiMaximize2 size={12} /> : <FiMinimize2 size={12} />}
                                {viewMode === 'grid' ? 'Grid' : 'List'}
                            </button>
                        </div>

                        {/* Skills Display */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {categories.map((cat) => {
                                const skillsList = groupedSkills[cat] || [];
                                const info = grouped[cat] || grouped.other;
                                const displaySkills = viewMode === 'list' ? skillsList : skillsList;

                                return (
                                    <motion.div
                                        key={cat}
                                        variants={itemVariants}
                                        {...glowVariants}
                                        animate="animate"
                                        className={`relative backdrop-blur-2xl bg-gradient-to-br ${info.bg} to-transparent rounded-3xl border border-white/10 p-6 overflow-hidden`}
                                    >
                                        {/* Category Header */}
                                        <div className="flex items-center gap-4 mb-5">
                                            <motion.div 
                                                {...floatVariants}
                                                animate="animate"
                                                className={`w-12 h-12 rounded-2xl ${getBgColor(info.color)} flex items-center justify-center ${getTextColor(info.color)} border ${getColorClass(info.color)}`}
                                            >
                                                {info.icon}
                                            </motion.div>
                                            <div>
                                                <h4 className="text-white font-semibold">{info.label}</h4>
                                                <p className="text-[10px] text-white/40">{skillsList.length} skills</p>
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div className={`flex flex-wrap gap-2.5 ${viewMode === 'list' ? 'flex-col' : ''}`}>
                                            {displaySkills.map((skill, idx) => {
                                                const iconData = getSkillIcon(skill);
                                                const colorClass = iconData.color || 'gray';
                                                
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: idx * 0.03 }}
                                                        whileHover={{ 
                                                            scale: viewMode === 'grid' ? 1.08 : 1.02,
                                                            x: viewMode === 'list' ? 5 : 0,
                                                        }}
                                                        onMouseEnter={() => setHoveredSkill(idx)}
                                                        onMouseLeave={() => setHoveredSkill(null)}
                                                        className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-${colorClass}-400/50 hover:bg-white/10 transition-all duration-300 cursor-default ${viewMode === 'list' ? 'w-full' : ''}`}
                                                    >
                                                        <span className={`${getTextColor(colorClass)} group-hover:scale-110 transition-transform duration-300`}>
                                                            {iconData.icon}
                                                        </span>
                                                        <span className="text-white/70 group-hover:text-white transition-colors text-sm font-medium">
                                                            {skill}
                                                        </span>
                                                        {/* Hover Glow */}
                                                        {hoveredSkill === idx && (
                                                            <motion.div
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                className={`absolute inset-0 rounded-xl ${getBgColor(colorClass)} blur-xl -z-10`}
                                                            ></motion.div>
                                                        )}
                                                        {viewMode === 'list' && (
                                                            <motion.div 
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: '100%' }}
                                                                className={`h-0.5 bg-gradient-to-r from-${colorClass}-400/30 to-transparent ml-auto`}
                                                            ></motion.div>
                                                        )}
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <motion.div 
                            {...floatVariants}
                            animate="animate"
                            className="w-24 h-24 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                        >
                            <FiTarget className="text-4xl text-white/20" />
                        </motion.div>
                        <h3 className="text-white/50 mt-4 font-light">No skills added yet</h3>
                        <p className="text-white/30 text-sm">Add your skills in the builder to showcase them here</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default GlassmorphismSkills;