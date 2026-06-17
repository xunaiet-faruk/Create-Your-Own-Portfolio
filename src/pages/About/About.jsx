import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const missionStats = [
    { number: "10k+", label: "Portfolios Created" },
    { number: "05 Mins", label: "Average Setup Time" },
    { number: "15+", label: "Creative Professions" },
  ];

  // নতুন যুক্ত করা অতিরিক্ত ডেটা (সব ধরনের ইউজারের সুবিধার জন্য)
  const features = [
    {
      title: "No-Code Required",
      desc: "Completely visual creation process designed for designers, marketers, and writers alike."
    },
    {
      title: "Interactive Layouts",
      desc: "Stand out with premium, 3D fluid animations that work flawlessly out of the box."
    },
    {
      title: "Instant Deployment",
      desc: "Get your custom personal domain live on the cloud with just one single click."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-28 relative block bg-transparent overflow-hidden">
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* মেইন টপ সেকশন গ্রিড */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ perspective: 1200 }}
          className="lg:col-span-6 w-full hidden sm:block"
        >
          <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative group overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
            
            <div className="flex items-center gap-2 pb-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="text-[11px] font-mono text-white/30 ml-2 tracking-widest">WORKSPACE_INITIALIZATION</span>
            </div>

            <div className="pt-4 font-mono text-xs sm:text-sm space-y-3 text-white/70">
              <p className="text-cyan-400"><span className="text-purple-400">⚡ launch</span> workspace --all-professions</p>
              <p className="text-white/40">Fetching interactive layers and adaptive multi-purpose layouts</p>
              <p className="text-green-400">✔ Universal canvas and modular elements loaded successfully</p>
              <p className="text-white/40">Optimizing core viewport responsiveness and animation pipelines</p>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-4 space-y-2">
                <p className="text-yellow-400 font-bold">SUPPORTED_WORKSPACES:</p>
                <p className="text-white/60">⚙ Designers + Visual Artists Layout Engine Active</p>
                <p className="text-white/60">⚙ Marketers + Creators Copywriting Framework Ready</p>
                <p className="text-white/60">⚙ Developers + Tech Professionals Architecture Live</p>
              </div>

              <div className="flex gap-2 text-[11px] pt-2 text-white/30">
                <span>Memory: Stable</span>
                <span>•</span>
                <span>FPS: 60/s</span>
                <span>•</span>
                <span>Status: Fully Loaded</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
              WHO WE ARE & <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                WHAT WE SOLVE
              </span>
            </h2>
            <div className="w-32 h-[3px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
          </div>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Building a striking, professional portfolio is no longer reserved for tech experts. Whether you are a visual designer, digital marketer, copywriter, or developer, your unique talent deserves a highly optimized global showcase.
            </p>
            <p>
              Our platform functions as an advanced interactive engine designed to render jaw-dropping 3D layouts in real-time. We completely eliminate technical barriers, allowing any digital creator to spin up production-ready web spaces within minutes.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Mission</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                To democratize premium web presence by providing creators across all domains with high-end, smooth, and autonomous portfolio environments—making sure your absolute first impression is unforgettable.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {missionStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-white/30">
            <span>BUILD: PRODUCTION_STABLE</span>
            <span>DEPLOYMENT: CLOUD_OPTIMIZED</span>
          </div>

        </motion.div>

      </div>

      {/* নতুন ৩-কলাম ডাটা গ্রিড (যা মূল ডিজাইনের সাথে পারফেক্ট ম্যাচ করবে) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/5">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300"
          >
            <div className="text-sm font-mono text-cyan-400 mb-2">0{index + 1}.</div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{feat.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;