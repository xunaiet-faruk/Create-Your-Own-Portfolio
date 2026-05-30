import FeaturesSection from "../../component/FeaturesSection";
import Hero from "../../component/Hero";
import PricingPlans from "../../component/PricingPlans";
import TemplatesGallery from "../../component/TemplatesGallery";
import Testimonials from "../../component/Testimonials";

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturesSection/>
            <TemplatesGallery/>
            <PricingPlans/>
            <Testimonials/>
        </div>
    );
};

export default Home;