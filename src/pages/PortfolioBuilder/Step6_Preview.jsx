import { FaEnvelope, FaPhone, FaLink, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaGlobe, FaCheck } from 'react-icons/fa';

const Step6_Preview = ({ formData, profileImagePreview, setPreview, handleSubmit, loading, selectedTemplate }) => {
    return (
        <div>
            <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">Your Portfolio Preview</h3>
                <p className="text-gray-400">Review your information before submitting</p>
            </div>

            <div className="max-h-[600px] overflow-y-auto space-y-6 pr-2">
                <div className="bg-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                        {profileImagePreview && <img src={profileImagePreview} alt="Profile" className="w-24 h-24 rounded-full object-cover" />}
                        <div><h4 className="text-2xl font-bold text-white">{formData.fullName || "Not provided"}</h4><p className="text-cyan-400 text-lg">{formData.title || "Not provided"}</p></div>
                    </div>
                    <p className="text-gray-300 mt-4">{formData.description || "No description"}</p>
                    <div className="flex gap-3 mt-4 flex-wrap">{formData.skills.map((s, i) => (<span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{s}</span>))}</div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-3">Contact</h4>
                    <p><FaEnvelope className="inline mr-2 text-cyan-400" /> {formData.email}</p>
                    {formData.phone && <p><FaPhone className="inline mr-2 text-cyan-400" /> {formData.phone}</p>}
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-3">Projects ({formData.projects.length}/3)</h4>
                    {formData.projects.map((project, i) => (
                        <div key={i} className="mb-4 pb-4 border-b border-white/10">
                            <h5 className="text-white font-semibold">{project.title}</h5>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                            <a href={project.liveLink} target="_blank" className="text-cyan-400 text-sm">Live Demo →</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 justify-center mt-6">
                <button onClick={() => setPreview(false)} className="px-6 py-2 bg-white/10 text-white rounded-lg font-semibold">Edit</button>
                <button onClick={handleSubmit} disabled={loading} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold">
                    {loading ? 'Publishing...' : 'Publish Portfolio'}
                </button>
            </div>
        </div>
    );
};

export default Step6_Preview;