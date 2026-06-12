import React from 'react';
import ModernDarkNavbar from '../../ComponentDesign/Moderdark/ModernDarkNavbar';
import ModernDarkBanner from '../../ComponentDesign/Moderdark/ModernDarkBanner';
import ModernDarkAbout from '../../ComponentDesign/Moderdark/ModernDarkAbout';
import ModernDarkSkills from '../../ComponentDesign/Moderdark/ModernDarkSkills';
import ModernDarkExperience from '../../ComponentDesign/Moderdark/ModernDarkExperience';
import ModernDarkProjects from '../../ComponentDesign/Moderdark/ModernDarkProjects';
import ModernDarkContact from '../../ComponentDesign/Moderdark/ModernDarkContact';
import ModernDarkFooter from '../../ComponentDesign/Moderdark/ModernDarkFooter';

const MainPortfolioStructure = ({ data, selectedTemplate }) => {
    
    const renderNavbar = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkNavbar data={data}/>;
        }
    };

    const renderBanner = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkBanner data={data}/>;
        }
    };

    const renderAbout = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkAbout data={data} />;
        }
    };

    const renderSkills = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkSkills data={data} />;
        }
    };

    const renderExperience = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkExperience data={data} />;
        }
    };

    const renderProjects = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkProjects data={data} />; 
        }
    };

    const renderContact = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
            default: 
                return <ModernDarkContact data={data}/>;
        }
    };

    const renderFooter = () => {
        switch (selectedTemplate) {
            case 'modern-dark': 
            case 'clean-white': 
            case 'animated': 
            case 'cyberpunk': 
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

            {/* ৮. ফুটার সেকশন (Full Width) */}
            <footer className="w-full mt-auto">
                {renderFooter()}
            </footer>

        </div>
    );
};

export default MainPortfolioStructure;