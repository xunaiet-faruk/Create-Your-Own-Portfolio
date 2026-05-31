import { motion } from 'framer-motion';
import { useState } from 'react';

const templates = [
    {
        id: 'modern-dark',
        name: 'Modern Dark',
        icon: '🌙',
        description: 'Dark theme with neon cyan accents',
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
        accentColor: 'cyan',
        previewBg: 'bg-gradient-to-br from-gray-900 to-gray-800'
    },
    {
        id: 'clean-white',
        name: 'Clean White',
        icon: '☀️',
        description: 'Minimalist white design with soft shadows',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        accentColor: 'blue',
        previewBg: 'bg-white'
    },
    {
        id: 'animated',
        name: 'Animated',
        icon: '✨',
        description: 'Smooth animations and hover effects',
        bgColor: 'bg-gradient-to-r from-purple-900 to-indigo-900',
        textColor: 'text-white',
        accentColor: 'purple',
        previewBg: 'bg-gradient-to-br from-purple-900 to-indigo-900'
    },
    {
        id: 'minimal',
        name: 'Minimalist',
        icon: '📝',
        description: 'Clean, simple, and professional',
        bgColor: 'bg-gray-50',
        textColor: 'text-gray-800',
        accentColor: 'gray',
        previewBg: 'bg-gray-50'
    },
    {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        icon: '🥛',
        description: 'Modern glass effect with blur',
        bgColor: 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20',
        textColor: 'text-white',
        accentColor: 'cyan',
        previewBg: 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
    },
    {
        id: 'cyberpunk',
        name: 'Cyberpunk',
        icon: '🔥',
        description: 'Neon borders, glitch effects, futuristic',
        bgColor: 'bg-black',
        textColor: 'text-cyan-400',
        accentColor: 'cyan',
        previewBg: 'bg-black'
    }
];

const Step6_TemplateSelector = ({ selectedTemplate, setSelectedTemplate, onNext, onBack }) => {
    const [hoveredTemplate, setHoveredTemplate] = useState(null);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-3">Choose Your Style</h3>
                <p className="text-gray-300">Select a template that matches your personality</p>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                    <motion.div
                        key={template.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTemplate(template.id)}
                        onMouseEnter={() => setHoveredTemplate(template.id)}
                        onMouseLeave={() => setHoveredTemplate(null)}
                        className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border-2 
                            ${selectedTemplate === template.id
                                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                                : 'border-white/10 hover:border-white/20'
                            }`}
                    >
                        {/* Preview Area */}
                        <div className={`h-48 ${template.previewBg} relative flex items-center justify-center`}>
                            {/* Preview Content */}
                            <div className="text-center">
                                <div className="text-6xl mb-2">{template.icon}</div>
                                <div className={`text-sm font-medium ${template.textColor} opacity-80`}>
                                    {template.name}
                                </div>
                            </div>

                            {/* Selected Badge */}
                            {selectedTemplate === template.id && (
                                <div className="absolute top-3 right-3 bg-cyan-500 rounded-full p-1">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Info Area */}
                        <div className={`p-4 ${template.bgColor}`}>
                            <h4 className={`font-bold text-lg ${template.textColor}`}>
                                {template.name}
                            </h4>
                            <p className={`text-sm ${template.textColor} opacity-70 mt-1`}>
                                {template.description}
                            </p>

                            {/* Features */}
                            <div className="flex gap-2 mt-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${template.accentColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                                        template.accentColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                            template.accentColor === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                                                'bg-gray-500/20 text-gray-400'
                                    }`}>
                                    Responsive
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${template.accentColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                                        template.accentColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                            template.accentColor === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                                                'bg-gray-500/20 text-gray-400'
                                    }`}>
                                    Modern
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-white/10">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
                >
                    ← Previous
                </button>
                <button
                    type="button"
                    onClick={onNext}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition flex items-center gap-2"
                >
                    Continue →
                </button>
            </div>
        </div>
    );
};

export default Step6_TemplateSelector;