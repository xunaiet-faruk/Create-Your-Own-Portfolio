// frontend/src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
    FiHome, FiGrid, FiBarChart2, FiSettings, 
    FiLogOut, FiUser, FiChevronLeft, FiChevronRight,
    FiPlus
} from 'react-icons/fi';

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { path: '/dashboard', icon: <FiHome />, label: 'Overview' },
        { path: '/dashboard/portfolios', icon: <FiGrid />, label: 'My Portfolios' },
        { path: '/dashboard/analytics', icon: <FiBarChart2 />, label: 'Analytics' },
        { path: '/dashboard/settings', icon: <FiSettings />, label: 'Settings' },
    ];

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            
            {/* Sidebar */}
            <aside className={`relative bg-white/5 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} flex-shrink-0`}>
                
                {/* Logo */}
                <div className={`flex items-center ${collapsed ? 'justify-center' : 'px-6'} h-20 border-b border-white/10`}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            P
                        </div>
                       <Link to={"/"}>
                        {!collapsed && <span className="text-white font-bold text-lg">Dashboard</span>}</Link>
                    </div>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
                >
                    {collapsed ? <FiChevronRight size={12} /> : <FiChevronLeft size={12} />}
                </button>

                {/* Menu Items */}
                <nav className="p-4 space-y-1">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/dashboard'}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                    isActive
                                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30'
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                } ${collapsed ? 'justify-center' : ''}`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* User Profile */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 ${collapsed ? 'text-center' : ''}`}>
                    <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                            U
                        </div>
                        {!collapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">User Name</p>
                                <p className="text-white/30 text-xs truncate">user@email.com</p>
                            </div>
                        )}
                        {!collapsed && (
                            <button 
                                onClick={() => navigate('/')}
                                className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                            >
                                <FiLogOut size={18} />
                            </button>
                        )}
                    </div>
                    {collapsed && (
                        <button 
                            onClick={() => navigate('/')}
                            className="mt-3 p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                        >
                            <FiLogOut size={18} />
                        </button>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Top Bar */}
                <div className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-white font-semibold text-lg">Welcome back, User! 👋</h1>
                        <button 
                            onClick={() => navigate('/portfolio-builder')}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                            <FiPlus size={16} />
                            New Portfolio
                        </button>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;