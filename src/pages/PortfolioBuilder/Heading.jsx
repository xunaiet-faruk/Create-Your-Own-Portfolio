import { motion } from 'framer-motion';

const Heading = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Build Your Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Create Your
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Professional Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg">Fill in your details and get a stunning portfolio in minutes</p>
        </motion.div>
    );
};

export default Heading;