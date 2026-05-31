import { FaUser, FaTimes, FaUpload } from 'react-icons/fa';

const Step1_PersonalInfo = ({ formData, setFormData, errors, profileImagePreview, handleImageUpload, removeImage }) => {
    return (
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
                    <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Professional Title *</label>
                    <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                    {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
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
                    <textarea rows="4" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500" />
                    {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                </div>
            </div>
        </div>
    );
};

export default Step1_PersonalInfo;