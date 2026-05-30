import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaUser, FaBriefcase, FaCode, FaEnvelope,
    FaPhone, FaGithub, FaLinkedin, FaArrowRight, FaCheck,
    FaEye, FaDownload, FaLink, FaFacebook, FaTwitter,
    FaGlobe, FaTimes, FaUpload, FaPlus, FaTrash
} from 'react-icons/fa';

const PortfolioBuilder = () => {
    const [step, setStep] = useState(1);
    const [preview, setPreview] = useState(false);
    const [currentSkill, setCurrentSkill] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState('');

    // Form Data State
    const [formData, setFormData] = useState({
        fullName: '',
        title: '',
        email: '',
        phone: '',
        description: '',
        resumeLink: '',
        location: '',
        github: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        website: '',
        skills: [],
        experiences: [],
        projects: []
    });

    // Experience State
    const [currentExp, setCurrentExp] = useState({
        title: '',
        company: '',
        period: '',
        description: ''
    });

    // Project State
    const [currentProject, setCurrentProject] = useState({
        title: '',
        description: '',
        technologies: [],
        techInput: '',
        features: [],
        featureInput: '',
        liveLink: '',
        githubLink: '',
        imageUrl: ''
    });

    const [errors, setErrors] = useState({});

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(file);
                setProfileImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setProfileImage(null);
        setProfileImagePreview('');
    };

    // Validate current step
    const validateStep = () => {
        let newErrors = {};

        if (step === 1) {
            if (!formData.fullName) newErrors.fullName = 'Name is required';
            if (!formData.title) newErrors.title = 'Title is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.description) newErrors.description = 'Description is required';
        }

        if (step === 5) {
            if (formData.projects.length < 3) {
                newErrors.projects = 'Minimum 3 projects required';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Add Experience
    const addExperience = () => {
        if (currentExp.title && currentExp.company && currentExp.period) {
            setFormData({
                ...formData,
                experiences: [...formData.experiences, currentExp]
            });
            setCurrentExp({ title: '', company: '', period: '', description: '' });
        }
    };

    const removeExperience = (index) => {
        const updated = formData.experiences.filter((_, i) => i !== index);
        setFormData({ ...formData, experiences: updated });
    };

    // Add Project
    const addProject = () => {
        if (currentProject.title && currentProject.description && currentProject.liveLink) {
            setFormData({
                ...formData,
                projects: [...formData.projects, { ...currentProject }]
            });
            setCurrentProject({
                title: '',
                description: '',
                technologies: [],
                techInput: '',
                features: [],
                featureInput: '',
                liveLink: '',
                githubLink: '',
                imageUrl: ''
            });
        }
    };

    const removeProject = (index) => {
        const updated = formData.projects.filter((_, i) => i !== index);
        setFormData({ ...formData, projects: updated });
    };

    // Add technology to current project
    const addTechnology = () => {
        if (currentProject.techInput && !currentProject.technologies.includes(currentProject.techInput)) {
            setCurrentProject({
                ...currentProject,
                technologies: [...currentProject.technologies, currentProject.techInput],
                techInput: ''
            });
        }
    };

    const removeTechnology = (tech) => {
        setCurrentProject({
            ...currentProject,
            technologies: currentProject.technologies.filter(t => t !== tech)
        });
    };

    // Add feature to current project
    const addFeature = () => {
        if (currentProject.featureInput && !currentProject.features.includes(currentProject.featureInput)) {
            setCurrentProject({
                ...currentProject,
                features: [...currentProject.features, currentProject.featureInput],
                featureInput: ''
            });
        }
    };

    const removeFeature = (feature) => {
        setCurrentProject({
            ...currentProject,
            features: currentProject.features.filter(f => f !== feature)
        });
    };

    // Add Skill
    const addSkill = () => {
        if (currentSkill && !formData.skills.includes(currentSkill)) {
            setFormData({ ...formData, skills: [...formData.skills, currentSkill] });
            setCurrentSkill('');
        }
    };

    const removeSkill = (skill) => {
        setFormData({ ...formData, skills: formData.skills.filter(s => s !== skill) });
    };

    const steps = [
        { id: 1, name: 'Personal', icon: <FaUser /> },
        { id: 2, name: 'Social', icon: <FaLink /> },
        { id: 3, name: 'Skills', icon: <FaCode /> },
        { id: 4, name: 'Experience', icon: <FaBriefcase /> },
        { id: 5, name: 'Projects', icon: <FaCode /> },
        { id: 6, name: 'Preview', icon: <FaEye /> }
    ];

    const handleNext = () => {
        if (validateStep()) {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            setPreview(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Validate URL
    const isValidUrl = (url) => {
        return url.startsWith('http://') || url.startsWith('https://');
    };

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
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

                {/* Progress Steps */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {steps.map((s) => (
                        <button key={s.id} onClick={() => setStep(s.id)} className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${step === s.id ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                            {s.icon} <span className="hidden sm:inline">{s.name}</span>
                        </button>
                    ))}
                </div>

                {/* Form Content */}
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                    {!preview ? (
                        <form>
                            {/* Step 1: Personal Info */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>

                                    {/* Profile Image */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
                                                {profileImagePreview ? (
                                                    <img src={profileImagePreview} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                                                        <FaUser className="text-4xl text-gray-400" />
                                                    </div>
                                                )}
                                            </div>
                                            <label className="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full cursor-pointer hover:scale-110 transition-transform">
                                                <FaUpload className="text-white text-sm" />
                                                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                            </label>
                                            {profileImagePreview && (
                                                <button onClick={removeImage} type="button" className="absolute top-0 right-0 p-1 bg-red-500 rounded-full hover:scale-110">
                                                    <FaTimes className="text-white text-xs" />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 mb-2">Full Name *</label>
                                            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                                            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Professional Title *</label>
                                            <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                                            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Email *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Phone</label>
                                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Location</label>
                                            <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Resume Link</label>
                                            <input type="url" value={formData.resumeLink} onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="https://..." />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-300 mb-2">Bio / Description *</label>
                                            <textarea required rows="4" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                                            {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Social Links */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Social Media Links</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 mb-2">GitHub</label>
                                            <input type="url" value={formData.github} onChange={(e) => setFormData({ ...formData, github: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="https://github.com/username" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">LinkedIn</label>
                                            <input type="url" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="https://linkedin.com/in/username" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Facebook</label>
                                            <input type="url" value={formData.facebook} onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2">Twitter</label>
                                            <input type="url" value={formData.twitter} onChange={(e) => setFormData({ ...formData, twitter: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-300 mb-2">Website</label>
                                            <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="https://yourwebsite.com" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Skills */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
                                    <div>
                                        <div className="flex gap-2 mb-4">
                                            <input type="text" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addSkill()} className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="e.g., React, JavaScript" />
                                            <button type="button" onClick={addSkill} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold">Add</button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.skills.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-2">
                                                    {skill}
                                                    <button type="button" onClick={() => removeSkill(skill)} className="hover:text-white">×</button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Experience */}
                            {step === 4 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Work Experience (Optional)</h3>
                                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
                                        <input type="text" placeholder="Job Title" value={currentExp.title} onChange={(e) => setCurrentExp({ ...currentExp, title: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        <input type="text" placeholder="Company" value={currentExp.company} onChange={(e) => setCurrentExp({ ...currentExp, company: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        <input type="text" placeholder="Period (e.g., 2022-2024)" value={currentExp.period} onChange={(e) => setCurrentExp({ ...currentExp, period: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        <textarea placeholder="Description" value={currentExp.description} onChange={(e) => setCurrentExp({ ...currentExp, description: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" rows="2" />
                                        <button type="button" onClick={addExperience} className="md:col-span-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-semibold flex items-center justify-center gap-2"><FaPlus /> Add Experience</button>
                                    </div>
                                    <div>
                                        {formData.experiences.map((exp, idx) => (
                                            <div key={idx} className="p-4 bg-white/5 rounded-lg mb-2 flex justify-between items-center">
                                                <div><h4 className="text-white font-semibold">{exp.title}</h4><p className="text-gray-400 text-sm">{exp.company} | {exp.period}</p></div>
                                                <button onClick={() => removeExperience(idx)} className="text-red-400"><FaTrash /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Projects - Minimum 3 required */}
                            {step === 5 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white mb-6">Projects (Minimum 3 Required)</h3>
                                    {errors.projects && <p className="text-red-400 text-center">{errors.projects}</p>}
                                    <p className="text-gray-400 text-sm">Added: {formData.projects.length}/3 projects</p>

                                    {/* Add Project Form */}
                                    <div className="p-4 bg-white/5 rounded-lg space-y-4">
                                        <input type="text" placeholder="Project Title *" value={currentProject.title} onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        <textarea placeholder="Project Description *" value={currentProject.description} onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" rows="3" />
                                        <input type="url" placeholder="Live Link (https://...) *" value={currentProject.liveLink} onChange={(e) => setCurrentProject({ ...currentProject, liveLink: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                                        <input type="url" placeholder="GitHub Link" value={currentProject.githubLink} onChange={(e) => setCurrentProject({ ...currentProject, githubLink: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />

                                        {/* Technologies */}
                                        <div><label className="text-gray-300 text-sm">Technologies Used</label><div className="flex gap-2 mt-1"><input type="text" value={currentProject.techInput} onChange={(e) => setCurrentProject({ ...currentProject, techInput: e.target.value })} className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" /><button type="button" onClick={addTechnology} className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg">Add</button></div><div className="flex flex-wrap gap-2 mt-2">{currentProject.technologies.map((tech, i) => (<span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-2">{tech}<button onClick={() => removeTechnology(tech)}>×</button></span>))}</div></div>

                                        {/* Features */}
                                        <div><label className="text-gray-300 text-sm">Main Features</label><div className="flex gap-2 mt-1"><input type="text" value={currentProject.featureInput} onChange={(e) => setCurrentProject({ ...currentProject, featureInput: e.target.value })} className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" /><button type="button" onClick={addFeature} className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">Add</button></div><div className="flex flex-wrap gap-2 mt-2">{currentProject.features.map((feature, i) => (<span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-2">{feature}<button onClick={() => removeFeature(feature)}>×</button></span>))}</div></div>

                                        <button type="button" onClick={addProject} className="w-full px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-semibold flex items-center justify-center gap-2"><FaPlus /> Add Project</button>
                                    </div>

                                    {/* Added Projects List */}
                                    <div>
                                        {formData.projects.map((project, idx) => (
                                            <div key={idx} className="p-4 bg-white/5 rounded-lg mb-2">
                                                <div className="flex justify-between items-start"><div><h4 className="text-white font-semibold">{project.title}</h4><p className="text-gray-400 text-sm">{project.description.substring(0, 100)}...</p><div className="flex gap-2 mt-2 flex-wrap">{project.technologies.map((t, i) => (<span key={i} className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">{t}</span>))}</div></div><button onClick={() => removeProject(idx)} className="text-red-400"><FaTrash /></button></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                                <button type="button" onClick={() => setStep(step - 1)} className={`px-6 py-2 rounded-lg font-semibold ${step === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`} disabled={step === 1}>Previous</button>
                                {step < 6 ? (
                                    <button type="button" onClick={handleNext} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600">Next</button>
                                ) : (
                                    <button type="button" onClick={handleSubmit} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold flex items-center gap-2">Generate Portfolio <FaArrowRight /></button>
                                )}
                            </div>
                        </form>
                    ) : (
                        // Preview Section - Shows all user data
                        <div>
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-4">Your Portfolio Preview</h3>
                                <p className="text-gray-400">Review your information before submitting</p>
                            </div>

                            {/* Complete Preview Card */}
                            <div className="max-h-[600px] overflow-y-auto space-y-6 pr-2">
                                {/* Profile Section */}
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-4">
                                        {profileImagePreview && <img src={profileImagePreview} alt="Profile" className="w-24 h-24 rounded-full object-cover" />}
                                        <div><h4 className="text-2xl font-bold text-white">{formData.fullName || "Not provided"}</h4><p className="text-cyan-400 text-lg">{formData.title || "Not provided"}</p><p className="text-gray-400">{formData.location || "Location not provided"}</p></div>
                                    </div>
                                    <p className="text-gray-300 mt-4">{formData.description || "No description provided"}</p>
                                    <div className="flex gap-3 mt-4 flex-wrap">{formData.skills.map((s, i) => (<span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{s}</span>))}</div>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <h4 className="text-xl font-bold text-white mb-3">Contact Information</h4>
                                    <p><FaEnvelope className="inline mr-2 text-cyan-400" /> {formData.email || "Not provided"}</p>
                                    {formData.phone && <p className="mt-2"><FaPhone className="inline mr-2 text-cyan-400" /> {formData.phone}</p>}
                                    {formData.resumeLink && <p className="mt-2"><FaLink className="inline mr-2 text-cyan-400" /> <a href={formData.resumeLink} target="_blank" className="text-cyan-400 hover:underline">Resume Link</a></p>}
                                </div>

                                {/* Social Links */}
                                {(formData.github || formData.linkedin || formData.facebook || formData.twitter || formData.website) && (<div className="bg-white/10 rounded-2xl p-6"><h4 className="text-xl font-bold text-white mb-3">Social Links</h4><div className="flex gap-4 flex-wrap">{formData.github && <a href={formData.github} target="_blank" className="text-gray-300 hover:text-white"><FaGithub size={24} /></a>}{formData.linkedin && <a href={formData.linkedin} target="_blank" className="text-gray-300 hover:text-white"><FaLinkedin size={24} /></a>}{formData.facebook && <a href={formData.facebook} target="_blank" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>}{formData.twitter && <a href={formData.twitter} target="_blank" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>}{formData.website && <a href={formData.website} target="_blank" className="text-gray-300 hover:text-white"><FaGlobe size={24} /></a>}</div></div>)}

                                {/* Experience */}
                                {formData.experiences.length > 0 && (<div className="bg-white/10 rounded-2xl p-6"><h4 className="text-xl font-bold text-white mb-3">Work Experience</h4>{formData.experiences.map((exp, i) => (<div key={i} className="mb-4 pb-4 border-b border-white/10 last:border-0"><h5 className="text-white font-semibold">{exp.title}</h5><p className="text-cyan-400 text-sm">{exp.company} | {exp.period}</p><p className="text-gray-400 text-sm mt-1">{exp.description}</p></div>))}</div>)}

                                {/* Projects */}
                                <div className="bg-white/10 rounded-2xl p-6">
                                    <h4 className="text-xl font-bold text-white mb-3">Projects ({formData.projects.length}/3)</h4>
                                    {formData.projects.map((project, i) => (<div key={i} className="mb-4 pb-4 border-b border-white/10 last:border-0"><h5 className="text-white font-semibold">{project.title}</h5><p className="text-gray-300 text-sm mt-1">{project.description}</p><div className="flex gap-2 mt-2 flex-wrap">{project.technologies.map((t, idx) => (<span key={idx} className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">{t}</span>))}</div><div className="flex gap-3 mt-2">{project.liveLink && <a href={project.liveLink} target="_blank" className="text-cyan-400 text-sm hover:underline">Live Demo →</a>}{project.githubLink && <a href={project.githubLink} target="_blank" className="text-gray-400 text-sm hover:underline">GitHub →</a>}</div></div>))}
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center mt-6">
                                <button onClick={() => setPreview(false)} className="px-6 py-2 bg-white/10 text-white rounded-lg font-semibold">Edit</button>
                                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold flex items-center gap-2"><FaDownload /> Submit & Download</button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioBuilder;