import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial } from '@react-three/drei';
import { GetCompleteBannerContent } from '../../../component/Utils/GetRoleContent';

const Floating3DRings = () => {
    const ringRef1 = useRef();
    const ringRef2 = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        
     
        if (ringRef1.current) {
            ringRef1.current.position.y = Math.sin(t * 0.4) * 0.2;
            ringRef1.current.rotation.x = t * 0.2;
            ringRef1.current.rotation.y = t * 0.4;
        }
        
        // দ্বিতীয় রিংটির পজিশন ও রোটেশন
        if (ringRef2.current) {
            ringRef2.current.position.x = Math.cos(t * 0.3) * 0.3;
            ringRef2.current.rotation.x = t * -0.3;
            ringRef2.current.rotation.z = t * 0.2;
        }
    });

    return (
        <group>
            {/* বড় রিং - সায়ান মেটালিক গ্লো */}
            <Torus ref={ringRef1} args={[0.4, 0.08, 16, 100]} position={[0.6, 0.3, 0]}>
                <MeshDistortMaterial
                    color="#06b6d4"
                    attach="material"
                    distort={0.2}
                    speed={1.5}
                    roughness={0.3}
                    metalness={0.8}
                />
            </Torus>

            {/* ছোট রিং - পার্পল গ্লো */}
            <Torus ref={ringRef2} args={[0.25, 0.05, 16, 100]} position={[-0.6, -0.2, -0.1]}>
                <MeshDistortMaterial
                    color="#a855f7"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.5}
                />
            </Torus>
        </group>
    );
};

// ২. মেইন ব্যানার কম্পোনেন্ট
const AnimatedBanner = ({ data, onConnectClick, onWorkClick }) => {
    const [imageError, setImageError] = useState(false);
    const profileImage = data?.profileImage;

    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);

    const mouseX = useSpring(rawMouseX, { stiffness: 100, damping: 25 });
    const mouseY = useSpring(rawMouseY, { stiffness: 100, damping: 25 });

    const mouseRotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const mouseRotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        rawMouseX.set(e.clientX - (rect.left + rect.width / 2));
        rawMouseY.set(e.clientY - (rect.top + rect.height / 2));
    };

    const handleMouseLeave = () => {
        rawMouseX.set(0);
        rawMouseY.set(0);
    };

    // টেক্সট এন্ট্রি অ্যানিমেশন
    const textAnimation = {
        initial: { opacity: 0, y: 30 },
        animate: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.12 }
        })
    };

    const handleDefaultConnect = () => {
        if (onConnectClick) onConnectClick();
        else window.location.href = "mailto:your-email@example.com";
    };

    const handleDefaultWork = () => {
        if (onWorkClick) onWorkClick();
        else {
            const projectSection = document.getElementById('projects');
            if (projectSection) projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div 
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-12 px-4 sm:px-8 lg:px-16 select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* ৩ডি ক্যানভাস ব্যাকগ্রাউন্ড - ৩ডি রিং অ্যানিমেশন */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Canvas camera={{ position: [0, 0, 1.5], fov: 55 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[2, 2, 2]} intensity={2.5} />
                    <pointLight position={[-2, -2, 2]} intensity={1.5} />
                    <Floating3DRings />
                </Canvas>
            </div>

            {/* অ্যাম্বিয়েন্ট সফট ফিল্টার গ্লো */}
            <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl relative z-10">
                
                {/* বাম পাশের টেক্সট এরিয়া */}
                <div className="lg:col-span-7 text-center lg:text-left space-y-5">
                    <div className="space-y-3">
                        
                        {/* ইউনিক গ্রিটিং লাইন */}
                        <div className="overflow-hidden py-1">
                            <motion.span 
                                custom={1}
                                variants={textAnimation}
                                initial="initial"
                                animate="animate"
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                Hi, I am {data?.firstName || 'Available Now'}
                            </motion.span>
                        </div>

                        {/* মেইন হেডিং লাইন ১ */}
                        <div className="overflow-hidden py-1">
                            <motion.h1 
                                custom={2}
                                variants={textAnimation}
                                initial="initial"
                                animate="animate"
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none"
                            >
                                Crafting Visual
                            </motion.h1>
                        </div>

                        {/* মেইন হেডিং লাইন ২ */}
                        <div className="overflow-hidden py-1">
                            <motion.h1 
                                custom={3}
                                variants={textAnimation}
                                initial="initial"
                                animate="animate"
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                {data?.lastName || 'Stories & Realities'}
                            </motion.h1>
                        </div>

                        {/* সাবটাইটেল */}
                        <div className="overflow-hidden py-1">
                            <motion.p 
                                custom={4}
                                variants={textAnimation}
                                initial="initial"
                                animate="animate"
                                className="text-base sm:text-lg font-medium tracking-wide text-cyan-300/80 font-mono"
                            >
                              
                            </motion.p>
                        </div>
                    </div>
                    
                    {/* ডেসক্রিপশন */}
                    <div className="overflow-hidden py-1">
                        <motion.p 
                            custom={5}
                            variants={textAnimation}
                            initial="initial"
                            animate="animate"
                            className="text-purple-200/60 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
                        >
                            {data?.description || "Dedicated to crafting premium digital solutions. Blending high-end aesthetics with functional design to build impactful web experiences."}
                        </motion.p>
                    </div>
                    
                    {/* ওয়ার্কেবল বাটন গ্রুপ */}
                    <div className="overflow-hidden py-2">
                        <motion.div 
                            custom={6}
                            variants={textAnimation}
                            initial="initial"
                            animate="animate"
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
                        >
                            <motion.button 
                                onClick={handleDefaultConnect}
                                whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-300 shadow-lg"
                            >
                                Let's Connect
                            </motion.button>

                            <motion.button 
                                onClick={handleDefaultWork}
                                whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(34, 211, 238, 0.5)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md cursor-pointer transition-all duration-300 shadow-md"
                            >
                                Explore My Work
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
                
                {/* ডান পাশের ইমেজ কার্ড */}
                <div className="lg:col-span-5 flex justify-center items-center w-full relative perspective-[1200px]">
                    <motion.div 
                        className="relative w-full max-w-[320px] aspect-[4/5] bg-white/[0.02] border border-white/10 rounded-2xl p-3 backdrop-blur-2xl shadow-2xl preserve-3d cursor-grab active:cursor-grabbing"
                        style={{ rotateX: mouseRotateX, rotateY: mouseRotateY }}
                        animate={{ 
                            y: [0, -10, 0],
                            rotateX: [0, 2, -2, 0],
                            rotateY: [0, -2, 2, 0]
                        }}
                        transition={{ 
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                            rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 rounded-2xl pointer-events-none" />

                        <div className="w-full h-full rounded-xl overflow-hidden relative bg-indigo-950/40 group">
                            {profileImage && !imageError ? (
                                <img 
                                    src={profileImage} 
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center space-y-3 opacity-80">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 animate-pulse">
                                        ✦
                                    </div>
                                    <p className="text-[10px] tracking-widest uppercase font-mono text-cyan-300/50">Profile Ready</p>
                                </div>
                            )}

                            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-indigo-950 via-indigo-950/50 to-transparent pt-14">
                                <h3 className="text-base font-bold text-white tracking-wider font-mono">
                                    {data?.fullName || 'Creative Mind'}
                                </h3>
                                <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mt-1">
                                    ✦ Innovate • Design • Deliver
                                </p>
                            </div>
                        </div>

                        {/* আইকন সমূহ */}
                        <motion.div 
                            className="absolute -top-4 -left-4 w-11 h-11 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-xl shadow-lg transform translate-z-[50px]"
                            animate={{ rotate: [0, 360], y: [0, -6, 0] }}
                            transition={{ 
                                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <span className="text-sm text-cyan-300">✦</span>
                        </motion.div>

                        <motion.div 
                            className="absolute -bottom-4 -right-4 w-11 h-11 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-lg transform translate-z-[40px]"
                            animate={{ scale: [1, 1.08, 1], y: [0, 6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="text-sm text-pink-400">✨</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedBanner;