// frontend/src/pages/Dashboard/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
    const [formData, setFormData] = useState({
        name: 'User Name',
        email: 'user@email.com',
        notifications: true,
        theme: 'dark'
    });

    return (
        <div>
            <h2 className="text-white font-semibold text-lg mb-6">Settings</h2>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 max-w-2xl">
                <div className="space-y-6">
                    {/* Profile */}
                    <div>
                        <label className="block text-white/60 text-sm font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white/60 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                        />
                    </div>

                    {/* Notifications */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div>
                            <p className="text-white font-medium">Notifications</p>
                            <p className="text-white/30 text-sm">Receive email notifications</p>
                        </div>
                        <button 
                            onClick={() => setFormData({...formData, notifications: !formData.notifications})}
                            className={`w-12 h-6 rounded-full transition-colors duration-300 ${formData.notifications ? 'bg-cyan-500' : 'bg-white/20'}`}
                        >
                            <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${formData.notifications ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                        </button>
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;