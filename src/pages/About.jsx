// src/pages/About.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const owners = [
  {
    name: "Rajesh Verma",
    role: "Founder & CEO",
    phone: "+91 98765 43210",
    email: "rajesh@shrimarbles.com",
    image: "/assets/images/c.jpg",
  },
  {
    name: "Amit Sharma",
    role: "Co-Founder",
    phone: "+91 91234 56789",
    email: "amit@shrimarbles.com",
    image: "/assets/images/a.jpg",
  },
];

const workers = [
  { name: "Ramu Bhai", image: "/assets/images/a.jpg" },
  { name: "Shyam Lal", image: "/assets/images/e.jpg" },
  { name: "Govind", image: "/assets/images/f.jpg" },
  { name: "Kalu Ram", image: "/assets/images/h.jpg" },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-red-600"
        >
          About Shri Shyam Stone
        </h2>

        {/* Company Info */}
        <div
          data-aos="fade-up"
          className="bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow-md p-6 md:p-10"
        >
          <p className="text-lg leading-relaxed mb-6">
            Shri Shyam Stone is a premium manufacturer of stone chaukhats (door frames) known for durability and elegance. We deliver high-quality red stone, sandstone, and marble frames across India.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            Based in Punjab, we’ve served homes, temples, and commercial spaces for 10+ years with our skilled artisans and custom stone crafting.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Custom-made stone frames</li>
            <li>Nationwide delivery</li>
            <li>Red, white, and sandstone options</li>
            <li>Mandir and haveli ready designs</li>
          </ul>
        </div>

        {/* Owners Section */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 text-center text-red-600">
            Our Founders
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {owners.map((owner, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white dark:bg-neutral-800 rounded-xl p-6 shadow"
              >
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h4 className="text-xl font-semibold">{owner.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                  {owner.role}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p className="flex items-center gap-2 justify-center">
                    <FaPhoneAlt className="text-red-600" /> {owner.phone}
                  </p>
                  <p className="flex items-center gap-2 justify-center">
                    <FaEnvelope className="text-red-600" /> {owner.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workers Section */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 text-center text-red-600">
            Our Skilled Workers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {workers.map((worker, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
                />
                <p className="text-sm font-medium">{worker.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
