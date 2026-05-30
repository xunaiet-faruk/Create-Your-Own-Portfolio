import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="relative overflow-hidden container mx-auto">
            {/* 3D Background Image */}
            <div
                className="absolute  inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* 3D Shapes Animation */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 3D Cube 1 */}
                <motion.div
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-20 left-10 w-32 h-32"
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 rounded-lg blur-sm"></div>
                </motion.div>

                {/* 3D Sphere Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -80, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl"
                />

                {/* 3D Rotating Ring */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-cyan-500/20 rounded-full"
                />

                {/* Particle Effect */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 100 - 50, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 py-32 flex items-center">
                <div className="grid lg:grid-cols-2 gap-60 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6"
                        >
                            <FaRocket className="text-cyan-300 animate-pulse" />
                            <span className="text-white text-sm font-medium">Welcome to PortfolioGen</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Create Your
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent block">
                                Dream Portfolio
                            </span>
                        </motion.h1>

                        {/* Animated Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-xl md:text-2xl text-white/90 mb-6"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Showcase Your Skills ✨',
                                    2000,
                                    'Stand Out from the Crowd 🚀',
                                    2000,
                                    'Get Hired Faster 💼',
                                    2000,
                                    'Build Your Brand 🌟',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-semibold"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-white/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Generate stunning, professional portfolios in minutes.
                            Stand out with unique designs and impress potential employers.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button className="group relative px-8 py-3 bg-white text-purple-700 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Free
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>

                            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                View Demo
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="flex gap-4 justify-center lg:justify-start mt-8"
                        >
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                                <FaTwitter size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - 3D Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {/* 3D Card 1 */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    rotateX: 5,
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <FaCode className="text-cyan-400 text-4xl mb-4" />
                                <h3 className="text-white font-semibold text-lg mb-2">Clean Code</h3>
                                <p className="text-white/70 text-sm">Modern & maintainable code</p>
                            </motion.div>

                            {/* 3D Card 2 */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: -10,
                                    rotateX: 5,
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8 shadow-2xl"
                            >
                                <FaPalette className="text-purple-400 text-4xl mb-4" />
                                <h3 className="text-white font-semibold text-lg mb-2">Unique Design</h3>
                                <p className="text-white/70 text-sm">Stand out visually</p>
                            </motion.div>

                            {/* 3D Card 3 */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    rotateX: -5,
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                            >
                                <FaRocket className="text-pink-400 text-4xl mb-4" />
                                <h3 className="text-white font-semibold text-lg mb-2">Fast Loading</h3>
                                <p className="text-white/70 text-sm">Optimized performance</p>
                            </motion.div>

                            {/* 3D Card 4 */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: -10,
                                    rotateX: -5,
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8 shadow-2xl"
                            >
                                <div className="text-yellow-400 text-4xl mb-4">⚡</div>
                                <h3 className="text-white font-semibold text-lg mb-2">Responsive</h3>
                                <p className="text-white/70 text-sm">Works on all devices</p>
                            </motion.div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className="absolute -bottom-10 -left-10 bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl"
                        >
                            <div className="text-white text-center">
                                <div className="text-2xl font-bold">10K+</div>
                                <div className="text-sm text-white/80">Portfolios Created</div>
                            </div>
                        </motion.div>

                        {/* Floating Rating Card */}
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: 1,
                            }}
                            className="absolute -top-10 -right-10 bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl"
                        >
                            <div className="text-white text-center">
                                <div className="text-2xl font-bold">⭐ 4.9</div>
                                <div className="text-sm text-white/80">User Rating</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="w-1 h-2 bg-white/50 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;