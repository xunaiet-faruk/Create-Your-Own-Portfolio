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

    return (
        <div className="w-full">
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
