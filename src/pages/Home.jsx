import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components (assume already created)
import HeroSection from "../sections/HeroSection";
import Features from "../sections/Features";
import GalleryAbout from "../sections/GalleryAbout";
import ProductShowcase from "../sections/ProductShowcase";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <div data-aos="fade-up">
        <HeroSection />
      </div>

      {/* Features Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Features />
      </div>

      {/* Products Preview */}
      <div data-aos="fade-up" data-aos-delay="300">
        <ProductShowcase />
      </div>

      {/* About + Gallery Combined Section */}
      <div data-aos="fade-up" data-aos-delay="400">
        <GalleryAbout />
      </div>
    </main>
  );
};

export default Home;
