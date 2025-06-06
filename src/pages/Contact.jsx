// src/pages/Contact.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Address and Map */}
        <div data-aos="fade-left" className="space-y-6">
          <h3 className="text-2xl font-semibold text-red-500">Shri Shyam Stone</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Near Main Market, <br />
            Gurdaspur, Punjab – 143521 <br />
            India
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            Phone: +91-98765-43210 <br />
            Email: shyamstone@gmail.com
          </p>

          {/* Map Placeholder */}
          <div className="h-64 bg-gray-200 dark:bg-neutral-700 rounded-xl shadow-inner flex items-center justify-center text-gray-500 dark:text-gray-300">
            Google Map Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
