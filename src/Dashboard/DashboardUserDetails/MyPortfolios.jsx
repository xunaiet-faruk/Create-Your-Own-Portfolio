// frontend/src/pages/Dashboard/MyPortfolios.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEdit2, FiTrash2, FiShare2, FiPlus, FiSearch } from 'react-icons/fi';

const MyPortfolios = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const portfolios = [
        { id: 1, name: 'Developer Portfolio', role: 'Full Stack Developer', template: 'Modern Dark', views: 245, status: 'Published', date: 'Jan 15, 2024' },
        { id: 2, name: 'Designer Portfolio', role: 'UI/UX Designer', template: 'Glassmorphism', views: 189, status: 'Draft', date: 'Jan 20, 2024' },
        { id: 3, name: 'Photography Portfolio', role: 'Photographer', template: 'Clean White', views: 432, status: 'Published', date: 'Feb 1, 2024' },
    ];

    const filtered = portfolios.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-white font-semibold text-lg">My Portfolios</h2>
                <Link to="/portfolio-builder" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    <FiPlus size={16} />
                    Create New
                </Link>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    type="text"
                    placeholder="Search portfolios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
            </div>

            {/* Portfolios Table */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider">Name</th>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider hidden md:table-cell">Role</th>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider hidden lg:table-cell">Template</th>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider hidden sm:table-cell">Status</th>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider hidden md:table-cell">Views</th>
                                <th className="text-left px-6 py-3 text-white/40 text-xs uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((p) => (
                                <tr key={p.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-white font-medium">{p.name}</p>
                                            <p className="text-white/30 text-sm md:hidden">{p.role}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-white/60 text-sm hidden md:table-cell">{p.role}</td>
                                    <td className="px-6 py-4 text-white/60 text-sm hidden lg:table-cell">{p.template}</td>
                                    <td className="px-6 py-4 hidden sm:table-cell">
                                        <span className={`px-2.5 py-1 rounded-full text-xs ${p.status === 'Published' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-white/60 text-sm hidden md:table-cell">{p.views}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <Link to={`/portfolio/${p.id}`} className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors" title="View">
                                                <FiEye size={16} />
                                            </Link>
                                            <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-cyan-400 transition-colors" title="Edit">
                                                <FiEdit2 size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-red-400 transition-colors" title="Delete">
                                                <FiTrash2 size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-purple-400 transition-colors" title="Share">
                                                <FiShare2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filtered.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white/30">No portfolios found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPortfolios;