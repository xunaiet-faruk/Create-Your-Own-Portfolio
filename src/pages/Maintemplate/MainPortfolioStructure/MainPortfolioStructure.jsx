import React from 'react';
import ModernDarkNavbar from '../../ComponentDesign/Moderdark/ModernDarkNavbar';
import ModernDarkBanner from '../../ComponentDesign/Moderdark/ModernDarkBanner';
import ModernDarkAbout from '../../ComponentDesign/Moderdark/ModernDarkAbout';
import ModernDarkSkills from '../../ComponentDesign/Moderdark/ModernDarkSkills';
import ModernDarkExperience from '../../ComponentDesign/Moderdark/ModernDarkExperience';
import ModernDarkProjects from '../../ComponentDesign/Moderdark/ModernDarkProjects';
import ModernDarkContact from '../../ComponentDesign/Moderdark/ModernDarkContact';
import ModernDarkFooter from '../../ComponentDesign/Moderdark/ModernDarkFooter';
import CleanWhiteNavbar from '../../ComponentDesign/CleanWhite/CleanWhiteNav';
import CleanWhiteBanner from '../../ComponentDesign/CleanWhite/ClearwhiteBanner';
import CleanWhiteAbout from '../../ComponentDesign/CleanWhite/ClearWhiteAbout';
import CleanWhiteSkills from '../../ComponentDesign/CleanWhite/ClearWhiteSkills';
import CleanWhiteExperience from '../../ComponentDesign/CleanWhite/ClearWhiteExperiance';
import CleanWhiteProjects from '../../ComponentDesign/CleanWhite/CleanWhiteProject';
import CleanWhiteContact from '../../ComponentDesign/CleanWhite/CleanWhiteContact';
import CleanWhiteFooter from '../../ComponentDesign/CleanWhite/CleanWhiteFooter';

const MainPortfolioStructure = ({ data, selectedTemplate }) => {
    
    const renderNavbar = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkNavbar data={data}/>;
            case 'clean-white': 
                return <CleanWhiteNavbar data={data}/>;
            case 'animated': 
                return <ModernDarkNavbar data={data}/>;
            case 'cyberpunk': 
                return <ModernDarkNavbar data={data}/>;
            default: 
                return <ModernDarkNavbar data={data}/>;
        }
    };

    const renderBanner = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkBanner data={data}/>;
            case 'clean-white': 
                return <CleanWhiteBanner data={data}/>;
            case 'animated': 
                return <ModernDarkBanner data={data}/>;
            case 'cyberpunk': 
                return <ModernDarkBanner data={data}/>;
            default: 
                return <ModernDarkBanner data={data}/>;
        }
    };

    const renderAbout = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkAbout data={data} />;
            case 'clean-white': 
                return <CleanWhiteAbout data={data} />;
            case 'animated': 
                return <ModernDarkAbout data={data} />;
            case 'cyberpunk': 
                return <ModernDarkAbout data={data} />;
            default: 
                return <ModernDarkAbout data={data} />;
        }
    };

    const renderSkills = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkSkills data={data} />;
            case 'clean-white': 
                return <CleanWhiteSkills data={data} />;
            case 'animated': 
                return <ModernDarkSkills data={data} />;
            case 'cyberpunk': 
                return <ModernDarkSkills data={data} />;
            default: 
                return <ModernDarkSkills data={data} />;
        }
    };

    const renderExperience = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkExperience data={data} />;
            case 'clean-white': 
                return <CleanWhiteExperience data={data} />;
            case 'animated': 
                return <ModernDarkExperience data={data} />;
            case 'cyberpunk': 
                return <ModernDarkExperience data={data} />;
            default: 
                return <ModernDarkExperience data={data} />;
        }
    };

    const renderProjects = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkProjects data={data} />;
            case 'clean-white': 
                return <CleanWhiteProjects data={data} />;
            case 'animated': 
                return <ModernDarkProjects data={data} />;
            case 'cyberpunk': 
                return <ModernDarkProjects data={data} />;
            default: 
                return <ModernDarkProjects data={data} />; 
        }
    };

    const renderContact = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkContact data={data}/>;
            case 'clean-white': 
                return <CleanWhiteContact data={data}/>;
            case 'animated': 
                return <ModernDarkContact data={data}/>;
            case 'cyberpunk': 
                return <ModernDarkContact data={data}/>;
            default: 
                return <ModernDarkContact data={data}/>;
        }
    };

    const renderFooter = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
                return <ModernDarkFooter data={data}/>;
            case 'clean-white': 
                return <CleanWhiteFooter data={data}/>;
            case 'animated': 
                return <ModernDarkFooter data={data}/>;
            case 'cyberpunk': 
                return <ModernDarkFooter data={data}/>;
            default: 
                return <ModernDarkFooter data={data}/>;
        }
    };

    // ========================================================
    // ২. মেইন রেসপন্সিভ লেআউট স্ট্রাকচার (The Skeleton)
    // ========================================================
    return (
        <div className="w-full flex flex-col justify-between bg-gray-900">
            
            {/* ১. নেভবার ফিক্সড বা নরমাল লেআউট */}
            <nav className="w-full z-50">
                {renderNavbar()}
            </nav>

            {/* পোর্টফোলিওর মেইন বডি কন্টেন্ট */}
            <main className="w-full flex-grow">
                
                {/* ২. ব্যানার / হিরো সেকশন (Full Width) */}
                <section id="hero" className="w-full">
                    {renderBanner()}
                </section>

                {/* কন্টেইনার জোনিং: ভেতরের সেকশনগুলোকে দুই পাশে মার্জিন দিয়ে এলাইন রাখার জন্য */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24 my-16">
                    
                    {/* ৩. এবাউট সেকশন */}
                    <section id="about" className="w-full">
                        {renderAbout()}
                    </section>

                    {/* 🆕 ৪. স্কিলস সেকশন (নতুন যোগ করা হয়েছে) */}
                    <section id="skills" className="w-full">
                        {renderSkills()}
                    </section>

                    {/* 🆕 ৫. এক্সপেরিয়েন্স সেকশন (নতুন যোগ করা হয়েছে) */}
                    <section id="experience" className="w-full">
                        {renderExperience()}
                    </section>

                    {/* ৬. প্রজেক্ট সেকশন */}
                    <section id="projects" className="w-full">
                        {renderProjects()}
                    </section>

                    {/* ৭. কন্টাক্ট সেকশন */}
                    <section id="contact" className="w-full">
                        {renderContact()}
                    </section>

                </div>
            </main>

            <div className="w-full mt-auto">
                {renderFooter()}
            </div>

        </div>
    );
};

export default MainPortfolioStructure;