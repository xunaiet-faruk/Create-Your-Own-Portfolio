const Step2_SocialLinks = ({ formData, setFormData }) => {
    return (
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
    );
};

export default Step2_SocialLinks;