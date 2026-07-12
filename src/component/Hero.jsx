import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';

const PROFESSIONS = [
    { id: 'developer', label: 'Developer', icon: '💻', name: 'Rafi Ahmed', base: 'Dhaka, BD' },
    { id: 'designer', label: 'Designer', icon: '🎨', name: 'Nusrat Jahan', base: 'Chittagong, BD' },
    { id: 'marketer', label: 'Marketer', icon: '📊', name: 'Tanvir Hasan', base: 'Sylhet, BD' },
    { id: 'contentCreator', label: 'Content Creator', icon: '📹', name: 'Farhana Akter', base: 'Dhaka, BD' },
    { id: 'photographer', label: 'Photographer', icon: '📸', name: 'Imran Kabir', base: 'Khulna, BD' },
    { id: 'writer', label: 'Writer', icon: '✍️', name: 'Mim Rahman', base: 'Rajshahi, BD' },
];

const useTypewriter = (text, speed = 40, startDelay = 0) => {
    const [out, setOut] = useState('');
    useEffect(() => {
        setOut('');
        let i = 0;
        let interval;
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setOut(text.slice(0, i));
                if (i >= text.length) clearInterval(interval);
            }, speed);
        }, startDelay);
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, startDelay]);
    return out;
};

const CredentialCard = ({ profession, index }) => {
    const [stamped, setStamped] = useState(false);

    const name = useTypewriter(profession.name, 38, 500);
    const role = useTypewriter(`${profession.icon} ${profession.label}`, 38, 1500);
    const base = useTypewriter(profession.base, 38, 2500);

    useEffect(() => {
        const t = setTimeout(() => setStamped(true), 3200);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Card shadow twin, offset like a stacked deck */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-sm" />

            <div className="relative rounded-2xl p-8 sm:p-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                {/* Header row */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                    <span className="text-[11px] tracking-[0.25em] text-cyan-300 font-mono">
                        UNIVERSAL CREDENTIAL
                    </span>
                    <span className="text-[11px] tracking-[0.2em] text-purple-300 font-mono">
                        NO. {String(index + 1).padStart(3, '0')}
                    </span>
                </div>

                {/* Fields */}
                <div className="space-y-5 mb-8">
                    {[
                        { label: 'NAME', v: name },
                        { label: 'ROLE', v: role },
                        { label: 'BASED IN', v: base },
                    ].map((f) => (
                        <div key={f.label}>
                            <div className="text-[10px] tracking-[0.2em] mb-1 text-cyan-300/70 font-mono">
                                {f.label}
                            </div>
                            <div className="text-xl sm:text-2xl min-h-[2rem] text-white font-medium">
                                {f.v}
                                <span className="animate-pulse text-cyan-300">|</span>
                            </div>
                            <div className="mt-2 h-px bg-white/10" />
                        </div>
                    ))}
                </div>

                {/* Footer / seal */}
                <div className="flex items-end justify-between">
                    <div className="text-[10px] tracking-[0.2em] leading-relaxed text-white/40 font-mono">
                        ISSUED BY<br />PORTFOLIOGEN
                    </div>

                    <motion.div
                        initial={{ scale: 0, rotate: -30, opacity: 0 }}
                        animate={
                            stamped
                                ? { scale: 1, rotate: -12, opacity: 1 }
                                : { scale: 0, rotate: -30, opacity: 0 }
                        }
                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                        className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-purple-500/30"
                    >
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40" />
                        <span className="text-[9px] font-bold tracking-widest text-center leading-tight text-white font-mono">
                            LIVE<br />●<br />PUBLISHED
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % PROFESSIONS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden ">
            {/* Ambient glow shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute top-10 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, -20, 0] }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-cyan-500/10 rounded-full"
                />
            </div>

            {/* Dot-grid texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(103,232,249,0.3) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative z-10 container mx-auto px-6 lg:px-16 py-28 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Copy */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 mb-8"
                        >
                          
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] mb-8 font-bold text-white"
                        >
                            Turn your work
                            <br />
                            into a{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent">
                                credential.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="text-lg max-w-md mx-auto lg:mx-0 mb-10 text-white/70"
                        >
                            Fill in your details once. We typeset, design, and publish a
                            portfolio built around your work — whatever your profession.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                        >
                            <button className="group px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 bg-white text-purple-700 transition-all hover:shadow-2xl hover:scale-105">
                                Get Your Credential
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={13} />
                            </button>
                            <button className="px-8 py-3.5 rounded-full font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-105">
                                See Sample Portfolios
                            </button>
                        </motion.div>

                        {/* Profession badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
                        >
                            {PROFESSIONS.map((p, idx) => (
                                <motion.button
                                    key={p.id}
                                    onClick={() => setCurrent(idx)}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                        duration: 3 + idx * 0.3,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        delay: idx * 0.2,
                                    }}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                        current === idx
                                            ? 'bg-gradient-to-r from-cyan-500/30 to-purple-600/30 border-cyan-400/60 text-white'
                                            : 'border-white/15 text-white/60 hover:border-cyan-400/40'
                                    }`}
                                >
                                    {p.icon} {p.label}
                                </motion.button>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex gap-5 justify-center lg:justify-start"
                        >
                            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/60 hover:text-white transition-colors hover:scale-110 transform">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Credential card, cycling through professions */}
                    <div className="order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20, rotate: -2 }}
                                animate={{ opacity: 1, y: 0, rotate: -3 }}
                                exit={{ opacity: 0, y: -20, rotate: 2 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <CredentialCard profession={PROFESSIONS[current]} index={current} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;