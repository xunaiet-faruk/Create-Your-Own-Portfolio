import React, { useState } from 'react';
import { FaPlus, FaTrash, FaImage, FaUpload, FaSpinner } from 'react-icons/fa';
import Swal from 'sweetalert2';

const IMGBB_API_KEY = "6bb83104364a756c7ef713ea4d6873a3";

const Step5_Projects = ({ formData, setFormData, currentProject, setCurrentProject, errors }) => {

    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    // ইমেজ আপলোড ফাংশন (ImgBB তে)
    const uploadImageToImgBB = async (file) => {
        setUploading(true);
        setUploadProgress(0);
        
        const formDataImg = new FormData();
        formDataImg.append('image', file);
        
        // সিমুলেটেড প্রোগ্রেস (কারণ ImgBB প্রোগ্রেস দেয় না)
        const progressInterval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + 10;
            });
        }, 200);
        
        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: 'POST',
                body: formDataImg
            });
            
            const data = await response.json();
            clearInterval(progressInterval);
            setUploadProgress(100);
            
            if (data.success) {
                setTimeout(() => setUploading(false), 500);
                return data.data.url;
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            clearInterval(progressInterval);
            setUploading(false);
            Swal.fire({
                title: 'Upload Failed!',
                text: 'Could not upload image. Please try again.',
                icon: 'error',
                background: '#1a1a2e',
                color: '#fff'
            });
            return null;
        }
    };

    // ইমেজ হ্যান্ডেল করার ফাংশন
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        // ফাইল ভ্যালিডেশন
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            Swal.fire({
                title: 'Invalid File Type!',
                text: 'Please upload JPG, PNG, or WEBP image',
                icon: 'warning',
                background: '#1a1a2e',
                color: '#fff'
            });
            return;
        }
        
        // ফাইল সাইজ ভ্যালিডেশন (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            Swal.fire({
                title: 'File Too Large!',
                text: 'Please upload image less than 5MB',
                icon: 'warning',
                background: '#1a1a2e',
                color: '#fff'
            });
            return;
        }
        
        const imageUrl = await uploadImageToImgBB(file);
        if (imageUrl) {
            setCurrentProject({ ...currentProject, imageUrl });
            Swal.fire({
                title: 'Uploaded!',
                text: 'Project image uploaded successfully',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                background: '#1a1a2e',
                color: '#fff'
            });
        }
    };

    // ইমেজ রিমুভ করা
    const removeImage = () => {
        setCurrentProject({ ...currentProject, imageUrl: '' });
    };

    const addTechnology = () => {
        if (currentProject.techInput && !currentProject.technologies.includes(currentProject.techInput)) {
            setCurrentProject({ 
                ...currentProject, 
                technologies: [...currentProject.technologies, currentProject.techInput], 
                techInput: '' 
            });
        }
    };

    const addFeature = () => {
        if (currentProject.featureInput && !currentProject.features.includes(currentProject.featureInput)) {
            setCurrentProject({ 
                ...currentProject, 
                features: [...currentProject.features, currentProject.featureInput], 
                featureInput: '' 
            });
        }
    };

    const addProject = () => {
        if (!currentProject.title || !currentProject.description || !currentProject.liveLink) {
            Swal.fire({ 
                title: 'Missing Information!', 
                text: 'Please fill Title, Description, and Live Link', 
                icon: 'warning', 
                background: '#1a1a2e', 
                color: '#fff' 
            });
            return;
        }
        
        if (!currentProject.imageUrl) {
            Swal.fire({ 
                title: 'Image Required!', 
                text: 'Please upload a project image', 
                icon: 'warning', 
                background: '#1a1a2e', 
                color: '#fff' 
            });
            return;
        }
        
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
        
        Swal.fire({ 
            title: 'Project Added!', 
            icon: 'success', 
            timer: 1500, 
            showConfirmButton: false, 
            background: '#1a1a2e', 
            color: '#fff' 
        });
    };

    const removeProject = (index) => {
        Swal.fire({
            title: 'Remove Project?',
            text: 'This action cannot be undone',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, remove it',
            background: '#1a1a2e',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                const updated = formData.projects.filter((_, i) => i !== index);
                setFormData({ ...formData, projects: updated });
                Swal.fire({ title: 'Removed!', icon: 'success', timer: 1500, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
            }
        });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Projects (Minimum 3 Required)</h3>
            {errors.projects && <p className="text-red-400 text-center">{errors.projects}</p>}
            
            {/* প্রগ্রেস ইন্ডিকেটর */}
            <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Added: {formData.projects.length}/3 projects</p>
                <div className="flex gap-1">
                    {[1, 2, 3].map((num) => (
                        <div 
                            key={num}
                            className={`w-8 h-1 rounded-full transition-all duration-300 ${
                                formData.projects.length >= num ? 'bg-cyan-400' : 'bg-gray-700'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* অ্যাড প্রজেক্ট ফর্ম */}
            <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 space-y-4">
                
                {/* ইমেজ আপলোড সেকশন */}
                <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                        <FaImage className="text-cyan-400" /> Project Image * (Required)
                    </label>
                    
                    {currentProject.imageUrl ? (
                        <div className="relative group">
                            <img 
                                src={currentProject.imageUrl} 
                                alt="Project preview" 
                                className="w-full h-48 object-cover rounded-xl bg-gray-800/50 border border-white/10"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="px-4 py-2 bg-red-500/80 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition-colors"
                                >
                                    Remove Image
                                </button>
                                <label className="px-4 py-2 bg-cyan-500/80 text-white rounded-lg text-sm font-medium hover:bg-cyan-500 transition-colors cursor-pointer">
                                    Change
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                </label>
                            </div>
                        </div>
                    ) : (
                        <label className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                            uploading ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-600 hover:border-cyan-500 bg-gray-800/30'
                        }`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {uploading ? (
                                    <>
                                        <FaSpinner className="w-8 h-8 text-cyan-400 animate-spin mb-2" />
                                        <p className="text-sm text-cyan-400">Uploading... {uploadProgress}%</p>
                                        <div className="w-48 h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                                                style={{ width: `${uploadProgress}%` }}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <FaUpload className="w-8 h-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-400">Click to upload project image</p>
                                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                                    </>
                                )}
                            </div>
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                        </label>
                    )}
                </div>
                
                {/* প্রজেক্ট ইনফো ইনপুট */}
                <input 
                    type="text" 
                    placeholder="Project Title *" 
                    value={currentProject.title} 
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                />
                
                <textarea 
                    placeholder="Project Description *" 
                    value={currentProject.description} 
                    onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                    rows="3" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="url" 
                        placeholder="Live Link *" 
                        value={currentProject.liveLink} 
                        onChange={(e) => setCurrentProject({ ...currentProject, liveLink: e.target.value })} 
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                    />
                    <input 
                        type="url" 
                        placeholder="GitHub Link" 
                        value={currentProject.githubLink} 
                        onChange={(e) => setCurrentProject({ ...currentProject, githubLink: e.target.value })} 
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                    />
                </div>

                {/* টেকনোলজি */}
                <div>
                    <label className="text-gray-300 text-sm">Technologies</label>
                    <div className="flex gap-2 mt-1">
                        <input 
                            type="text" 
                            value={currentProject.techInput} 
                            onChange={(e) => setCurrentProject({ ...currentProject, techInput: e.target.value })} 
                            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                        />
                        <button 
                            type="button" 
                            onClick={addTechnology} 
                            className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all"
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {currentProject.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-1">
                                {tech}
                                <button onClick={() => setCurrentProject({ ...currentProject, technologies: currentProject.technologies.filter(t => t !== tech) })} className="hover:text-red-400">×</button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* ফিচার */}
                <div>
                    <label className="text-gray-300 text-sm">Key Features</label>
                    <div className="flex gap-2 mt-1">
                        <input 
                            type="text" 
                            value={currentProject.featureInput} 
                            onChange={(e) => setCurrentProject({ ...currentProject, featureInput: e.target.value })} 
                            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                        />
                        <button 
                            type="button" 
                            onClick={addFeature} 
                            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all"
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {currentProject.features.map((feature, i) => (
                            <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-1">
                                {feature}
                                <button onClick={() => setCurrentProject({ ...currentProject, features: currentProject.features.filter(f => f !== feature) })} className="hover:text-red-400">×</button>
                            </span>
                        ))}
                    </div>
                </div>

                <button 
                    type="button" 
                    onClick={addProject} 
                    disabled={uploading}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-500/30 hover:to-emerald-500/30 transition-all disabled:opacity-50"
                >
                    <FaPlus /> Add Project
                </button>
            </div>

            {/* প্রজেক্ট লিস্ট */}
            <div className="space-y-2">
                <h4 className="text-white font-medium">Added Projects ({formData.projects.length}/3)</h4>
                {formData.projects.length === 0 && (
                    <p className="text-gray-500 text-sm text-center py-8">No projects added yet</p>
                )}
                {formData.projects.map((project, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all">
                        <div className="flex gap-4">
                            {project.imageUrl && (
                                <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                            )}
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-white font-semibold">{project.title}</h4>
                                        <p className="text-gray-400 text-xs line-clamp-2">{project.description?.substring(0, 80)}...</p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {project.technologies?.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-[10px] px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">#{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={() => removeProject(idx)} className="text-red-400 hover:text-red-300 transition-colors p-1">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step5_Projects;