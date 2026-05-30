import FeaturesSection from "../../component/FeaturesSection";
import Hero from "../../component/Hero";
import PricingPlans from "../../component/PricingPlans";
import TemplatesGallery from "../../component/TemplatesGallery";

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturesSection/>
            <TemplatesGallery/>
            <PricingPlans/>
        </div>
    );
};

export default Home;