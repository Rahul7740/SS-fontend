// src/components/HeroSection.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat dark:bg-neutral-950"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>

      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Welcome to <span className="text-red-500">Shri Shyam Stone</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8"
        >
          Premium handcrafted stone chaukhats for doors and temples. Custom sizes and designs available.
        </p>

        <a
          data-aos="zoom-in"
          data-aos-delay="500"
          href="/products"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          View Products
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
