import { Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import PortfolioBuilder from "../pages/PortfolioBuilder/PortfolioBuilder";
import PortfolioView from "../pages/PortfolioView/PortfolioView";

// টেম্পোরারি কম্পোনেন্ট (পরে বাদ দিতে হবে)
const About = () => <div className="text-white text-center py-20">About Page - Coming Soon</div>;
const Projects = () => <div className="text-white text-center py-20">Projects Page - Coming Soon</div>;
const Contact = () => <div className="text-white text-center py-20">Contact Page - Coming Soon</div>;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
            <Route path="/portfolio/:portfolioId" element={<PortfolioView />} />
        </Routes>
    );
};

export default AppRoutes;