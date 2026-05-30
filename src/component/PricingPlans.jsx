import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaRocket, FaCrown } from 'react-icons/fa';

const PricingPlans = () => {
    const plans = [
        {
            id: 1,
            name: "Free Plan",
            price: "$0",
            period: "forever",
            icon: <FaStar className="text-3xl" />,
            description: "Perfect for getting started",
            features: [
                "1 Portfolio Website",
                "Basic Templates",
                "3 Projects Limit",
                "Basic Support",
                "Community Access"
            ],
            buttonText: "Get Started",
            buttonColor: "from-gray-600 to-gray-700",
            popular: false
        },
        {
            id: 2,
            name: "Pro Plan",
            price: "$12",
            period: "per month",
            icon: <FaRocket className="text-3xl" />,
            description: "Best for professionals",
            features: [
                "Unlimited Portfolios",
                "All Premium Templates",
                "Unlimited Projects",
                "Priority Support",
                "Custom Domain",
                "Analytics Dashboard",
                "SEO Tools"
            ],
            buttonText: "Start Pro",
            buttonColor: "from-cyan-500 to-purple-500",
            popular: true
        },
        {
            id: 3,
            name: "Business Plan",
            price: "$49",
            period: "per month",
            icon: <FaCrown className="text-3xl" />,
            description: "For agencies & teams",
            features: [
                "Everything in Pro",
                "Team Members (5)",
                "White Label",
                "API Access",
                "Dedicated Support",
                "Advanced Analytics",
                "Custom Development"
            ],
            buttonText: "Contact Sales",
            buttonColor: "from-purple-600 to-pink-600",
            popular: false
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
                        Pricing Plans
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Simple,
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {" "}Transparent Pricing
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-300 text-lg max-w-2xl mx-auto"
                >
                    Choose the perfect plan for your needs. No hidden fees.
                </motion.p>
            </motion.div>

            {/* Pricing Cards Grid */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full ${plan.popular
                                    ? 'bg-white/10 border-2 border-cyan-500/50 shadow-2xl'
                                    : 'bg-white/5 border border-white/10'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full font-semibold z-10">
                                    Most Popular 🔥
                                </div>
                            )}

                            {/* Card Content - flex column to push button down */}
                            <div className="p-8 flex flex-col h-full">
                                {/* Top Section */}
                                <div>
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="text-cyan-400">
                                            {plan.icon}
                                        </div>
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <FaCheck className="text-cyan-400 text-sm flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Button Section - pushes to bottom */}
                                <div className="mt-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPlans;