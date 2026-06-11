import React from 'react';
import { motion } from 'framer-motion';

const ModernDarkAbout = ({ data }) => {
    return (
        <div className="w-full text-white py-12">
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* সেকশন টাইটেল */}
                <div className="md:col-span-4 space-y-2">
                    <h2 className="text-3xl font-black tracking-tight">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                </div>

                {/* পিওর বায়ো/ডেসক্রিপশন টেক্সট */}
                <div className="md:col-span-8 text-gray-400 text-lg leading-relaxed space-y-4 text-justify md:text-left">
                    <p>
                        {data?.aboutMe || data?.description || "I'm a passionate developer who loves building innovative and user-friendly digital experiences. With a strong foundation in modern technologies, I focus on writing clean, efficient, and maintainable code."}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ModernDarkAbout;