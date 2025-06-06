// src/pages/About.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-red-600 mb-10"
        >
          About Shri Shyam Stone
        </h2>

        <div
          data-aos="fade-up"
          className="bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow-md p-6 md:p-10"
        >
          <p className="text-lg leading-relaxed mb-6">
            Shri Shyam Stone is a premium manufacturer and supplier of stone
            chaugaths (stone doorframes) used around door frames to give homes
            and commercial spaces a rich and traditional look. We believe in
            combining craftsmanship with durability to deliver products that
            last for decades.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Based in Punjab, we offer nationwide delivery and have been
            supplying stone architecture for more than 10 years. Our frames are
            widely used in mandirs, haveli entrances, and designer homes.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom size chaukhat options</li>
            <li>Red stone, white stone & sandstone frames</li>
            <li>Hand-finished detailing</li>
            <li>Affordable pricing for large projects</li>
            <li>On-site delivery across India</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
