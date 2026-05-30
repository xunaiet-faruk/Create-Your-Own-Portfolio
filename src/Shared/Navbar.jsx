import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Navigation links data
    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/portfolio-builder', name: 'PortfolioBuilder' },
        { path: '/projects', name: 'Projects' },
        { path: '/contact', name: 'Contact' },
    ];

    return (
        <nav className=" sticky top-0 py-2 z-50 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand - Left Side */}
                    <div className="flex-shrink-0">
                        <img className='lg:w-16 md:w-12 w-10' src="./images/Logo.png" alt="" />
                    </div>

                    {/* Desktop Menu - Center (hidden on mobile, visible on md and up) */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-4 py-2  rounded-lg md:text-sm lg:text-md font-medium transition-all duration-200 ${isActive
                                            ? 'bg-gradient-to-r from-cyan-500  to-purple-700 bg-clip-text text-transparent font-bold'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Login Button - Right Side (Desktop) */}
                    <div className="hidden md:block">
                        <button className="lg:px-5 md:px-3 px-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                            Login 🔐
                        </button>
                    </div>

                    {/* Mobile Menu Button - Right Side */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-200"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - visible when menu is open */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-purple-500/20">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive
                                    ? 'bg-gradient-to-r from-cyan-500  to-purple-700 bg-clip-text text-transparent font-bold'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`
                            }
                            onClick={closeMenu}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    {/* Login Button in Mobile Menu */}
                    <button className="w-full mt-3 px-4 py-2 rounded-lg border-b border-cyan-600 rounded-full text-white transition-all duration-300">
                        Login 🔐
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;