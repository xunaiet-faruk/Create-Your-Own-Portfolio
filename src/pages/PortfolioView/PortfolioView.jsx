import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Useaxios from '../../Hooks/Useaxios';
import MainPortfolioStructure from '../Maintemplate/MainPortfolioStructure/MainPortfolioStructure';
import { Oval } from 'react-loader-spinner';

const PortfolioView = () => {
    const { portfolioId } = useParams();
    const axios = Useaxios();
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const templateBackground = {
        'modern-dark': 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white',
        'clean-white': 'bg-gray-50 text-gray-900',
        'animated': 'bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white',
        'minimal': 'bg-gray-50 text-gray-900',
        'glassmorphism': 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 text-white',
        'cyberpunk': 'bg-gradient-to-br from-[#0A1515] via-[#220d2f] to-[#0f1833] text-cyan-300'
    };

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/portfolio/${portfolioId}`);
                
                if (response.data.success) {
                    setPortfolioData(response.data.data);
                    setError(null);
                } else {
                    setError('Portfolio not found');
                }
            } catch (err) {
                console.error('Error fetching portfolio:', err);
                setError(err.response?.data?.message || 'Failed to load portfolio');
            } finally {
                setLoading(false);
            }
        };

        if (portfolioId) {
            fetchPortfolio();
        }
    }, [portfolioId, axios]);

    if (loading) {
        return (
            <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                <Oval
                    height={80}
                    width={80}
                    color="#00d4ff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#6366f1"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">❌ {error}</h2>
                    <p className="text-gray-400 mb-6">The portfolio you're looking for doesn't exist.</p>
                    <a href="/" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg">
                        Go Home
                    </a>
                </div>
            </div>
        );
    }

    const pageBackgroundClass = portfolioData
        ? templateBackground[portfolioData.selectedTemplate] || templateBackground['modern-dark']
        : templateBackground['modern-dark'];

    return (
        <div className={`w-full min-h-screen ${pageBackgroundClass}`}>
            {portfolioData && (
                <MainPortfolioStructure 
                    data={portfolioData} 
                    selectedTemplate={portfolioData.selectedTemplate || 'modern-dark'}
                />
            )}
        </div>
    );
};

export default PortfolioView;
