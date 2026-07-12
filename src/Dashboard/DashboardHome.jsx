// frontend/src/pages/Dashboard/DashboardHome.jsx
import React from 'react';
import { FiEye, FiGrid, FiAward, FiTrendingUp } from 'react-icons/fi';

const DashboardHome = () => {
    // Mock Data - পরে API থেকে আসবে
    const stats = [
        { icon: <FiGrid className="text-cyan-400" />, label: 'Total Portfolios', value: '12', color: 'from-cyan-500/20' },
        { icon: <FiEye className="text-purple-400" />, label: 'Total Views', value: '2.4K', color: 'from-purple-500/20' },
        { icon: <FiAward className="text-yellow-400" />, label: 'Templates Used', value: '6', color: 'from-yellow-500/20' },
        { icon: <FiTrendingUp className="text-emerald-400" />, label: 'Growth', value: '+24%', color: 'from-emerald-500/20' },
    ];

    const recentPortfolios = [
        { id: 1, name: 'Developer Portfolio', views: 245, date: 'Jan 15, 2024' },
        { id: 2, name: 'Designer Portfolio', views: 189, date: 'Jan 20, 2024' },
        { id: 3, name: 'Photography Portfolio', views: 432, date: 'Feb 1, 2024' },
    ];

    return (
        <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className={`bg-gradient-to-br ${stat.color} to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-5`}>
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">{stat.icon}</div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Portfolios */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <h2 className="text-white font-semibold text-lg mb-4">Recent Portfolios</h2>
                <div className="space-y-3">
                    {recentPortfolios.map((portfolio) => (
                        <div key={portfolio.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                            <div>
                                <p className="text-white font-medium">{portfolio.name}</p>
                                <p className="text-white/30 text-sm">{portfolio.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-white/40 text-sm">{portfolio.views} views</span>
                                <button className="px-4 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/30 transition-colors">
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;