import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaCode, FaDownload, FaArrowRight } from 'react-icons/fa';

const TemplatesGallery = () => {
    const templates = [
        {
            id: 1,
            title: "Developer Portfolio",
            category: "Developer",
            image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Free",
            popular: true,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Creative Designer",
            category: "Designer",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Free",
            popular: false,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "Photography Studio",
            category: "Photographer",
            image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Pro",
            popular: true,
            color: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            title: "Freelancer Hub",
            category: "Freelancer",
            image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Free",
            popular: false,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "Agency Pro",
            category: "Agency",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Pro",
            popular: true,
            color: "from-indigo-500 to-purple-500"
        },
        {
            id: 6,
            title: "Student Showcase",
            category: "Student",
            image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "Free",
            popular: false,
            color: "from-pink-500 to-rose-500"
        }
    ];


    const [activeCategory, setActiveCategory] = React.useState("All");
    const [hoveredTemplate, setHoveredTemplate] = React.useState(null);

    const filteredTemplates = activeCategory === "All"
        ? templates
        : templates.filter(template => template.category === activeCategory);

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/5 to-transparent"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.05, 0.15],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 3,
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4"
                    >
                        <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Beautiful Templates
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Choose Your Perfect
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {" "}Template
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Browse our collection of professionally designed templates
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                   
                </motion.div>

                {/* Templates Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                            onMouseEnter={() => setHoveredTemplate(template.id)}
                            onMouseLeave={() => setHoveredTemplate(null)}
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                                {/* Template Image */}
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={template.image}
                                        alt={template.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay on Hover */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredTemplate === template.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center gap-4"
                                    >
                                      
                                    </motion.div>

                                    {/* Popular Badge */}
                                    {template.popular && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                                            🔥 Popular
                                        </div>
                                    )}
                                </div>

                                {/* Template Info */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                                {template.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">{template.category}</p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${template.price === "Free"
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-purple-400 border border-purple-500/30'
                                            }`}>
                                            {template.price}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex gap-3 text-xs text-gray-400">
                                        <span>✅ Responsive</span>
                                        <span>🎨 Customizable</span>
                                        <span>⚡ Fast Loading</span>
                                    </div>

                                    {/* View Details Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                                    >
                                        View Details <FaArrowRight size={12} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Templates Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-b border-cyan-500 rounded-full cursor-pointer hover:bg-cyan-500 text-white font-semibold  transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                    >
                        View All Templates
                        <FaArrowRight />
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default TemplatesGallery;