// frontend/src/pages/Dashboard/Analytics.jsx
import React from 'react';
import { FiEye, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const Analytics = () => {
    return (
        <div>
            <h2 className="text-white font-semibold text-lg mb-6">Analytics Overview</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                        <FiEye className="text-cyan-400 text-2xl" />
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Total Views</p>
                            <p className="text-2xl font-bold text-white">2,847</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                        <FiUsers className="text-purple-400 text-2xl" />
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Unique Visitors</p>
                            <p className="text-2xl font-bold text-white">1,234</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                        <FiTrendingUp className="text-emerald-400 text-2xl" />
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Growth Rate</p>
                            <p className="text-2xl font-bold text-emerald-400">+24%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                        <FiAward className="text-yellow-400 text-2xl" />
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-wider">Avg. Time</p>
                            <p className="text-2xl font-bold text-white">4m 32s</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder for Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-64 flex items-center justify-center">
                    <p className="text-white/30">Views Chart (Coming Soon)</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-64 flex items-center justify-center">
                    <p className="text-white/30">Traffic Sources (Coming Soon)</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;