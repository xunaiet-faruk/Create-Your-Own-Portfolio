import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rakib Hossain",
            role: "Software Developer",
            company: "Google",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            review: "This platform helped me create my portfolio in just 10 minutes! The templates are amazing and very professional. Got my dream job thanks to this.",
            rating: 5,
            date: "2 months ago"
        },
        {
            id: 2,
            name: "Sumaiya Akter",
            role: "UI/UX Designer",
            company: "Freelancer",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            review: "Best portfolio generator I've ever used. So easy to customize and looks great on all devices. My clients love it!",
            rating: 5,
            date: "1 month ago"
        },
        {
            id: 3,
            name: "Mehedi Hasan",
            role: "Digital Marketer",
            company: "Marketing Pro",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            review: "Amazing experience! The SEO features helped me rank higher. Got 3 new clients within a week of creating my portfolio.",
            rating: 4,
            date: "3 weeks ago"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                        Testimonials
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    What Our
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {" "}Users Say
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 text-lg max-w-2xl mx-auto"
                >
                    Join thousands of satisfied users who built their dream portfolio
                </motion.p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <FaQuoteLeft className="text-cyan-400 text-2xl opacity-50" />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                "{testimonial.review}"
                            </p>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-sm ${i < testimonial.rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="text-white font-semibold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        {testimonial.date}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

             
            </div>
        </section>
    );
};

export default Testimonials;