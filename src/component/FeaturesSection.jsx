import { motion } from 'framer-motion';
import {
    FaRocket,
    FaPalette,
    FaMobile,
    FaShieldAlt,
    FaHeadset,
    FaChartLine,
    FaCode,
    FaCloudUploadAlt,
    
} from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaRocket className="text-4xl" />,
            title: "Lightning Fast",
            description: "Experience blazing fast performance with optimized loading times and smooth navigation.",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: <FaPalette className="text-4xl" />,
            title: "Unique Designs",
            description: "Choose from 500+ professionally designed templates that stand out from the crowd.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: <FaMobile className="text-4xl" />,
            title: "Fully Responsive",
            description: "Your portfolio looks perfect on all devices - desktop, tablet, and mobile.",
            color: "from-green-500 to-teal-500",
        },
        {
            icon: <FaShieldAlt className="text-4xl" />,
            title: "Secure & Reliable",
            description: "Enterprise-grade security with SSL encryption and daily backups.",
            color: "from-blue-500 to-indigo-500",
        },
        {
            icon: <FaCode className="text-4xl" />,
            title: "Clean Code",
            description: "Developed with modern technologies and best practices for easy customization.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: <FaCloudUploadAlt className="text-4xl" />,
            title: "Easy Deployment",
            description: "One-click deployment to your favorite hosting platforms like Netlify or Vercel.",
            color: "from-red-500 to-pink-500",
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: "SEO Optimized",
            description: "Built-in SEO tools to help your portfolio rank higher in search results.",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: <FaHeadset className="text-4xl" />,
            title: "24/7 Support",
            description: "Dedicated support team ready to help you anytime, anywhere.",
            color: "from-purple-500 to-indigo-500",
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 2,
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-3xl"
                />
            </div>

            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4"
                    >
                        <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Why Choose Us
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Powerful Features for
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {" "}Your Success
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Everything you need to create a stunning portfolio that impresses employers and clients
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="mt-4"
                            >
                                <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1">
                                    Learn More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

              
            </div>
        </section>
    );
};

export default FeaturesSection;