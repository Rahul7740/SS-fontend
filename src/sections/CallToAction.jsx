// src/components/CallToAction.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CallToAction = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="bg-red-600 text-white py-16 px-4 rounded-3xl shadow-xl mx-4 md:mx-20 mt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Beautify Your Home Entrance?
        </h2>
        <p className="mb-8 text-lg">
          Explore our premium stone chaukhat frames and get doorstep delivery across India.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
