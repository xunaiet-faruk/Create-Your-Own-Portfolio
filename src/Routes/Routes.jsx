import { Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import PortfolioBuilder from "../pages/PortfolioBuilder/PortfolioBuilder";
import PortfolioView from "../pages/PortfolioView/PortfolioView";
import About from "../pages/About/About";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyPortfolios from "../Dashboard/DashboardUserDetails/MyPortfolios";
import Analytics from "../Dashboard/DashboardUserDetails/Analytics";
import DashboardHome from "../Dashboard/DashboardHome";
import Settings from "../Dashboard/DashboardUserDetails/Settings";

// টেম্পোরারি কম্পোনেন্ট
const Projects = () => <div className="text-white text-center py-20">Projects Page - Coming Soon</div>;
const Contact = () => <div className="text-white text-center py-20">Contact Page - Coming Soon</div>;

const AppRoutes = () => {
    return (
     <Routes>
            {/* Normal Pages - Navbar + Footer দেখাবে */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
            <Route path="/portfolio/:portfolioId" element={<PortfolioView />} />

            {/* Dashboard - Navbar + Footer দেখাবে না */}
            <Route path="/Mydashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="portfolios" element={<MyPortfolios />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;