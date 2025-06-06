// src/pages/Pricing.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    name: "Basic",
    price: "₹2,499",
    features: [
      "Red Stone Chaukhat",
      "Standard Size",
      "5–7 Days Delivery",
      "No Customization",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    features: [
      "Sandstone Finish",
      "Any Door Size",
      "Customization Available",
      "Free Installation Guide",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹7,999",
    features: [
      "Premium Red/White Stone",
      "Full Frame & Design Work",
      "Pan India Delivery",
      "Priority Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-red-600 mb-12">
          Our Pricing Plans
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
              className={`rounded-2xl shadow-lg p-8 transition transform hover:scale-105 ${
                plan.popular ? "bg-red-600 text-white" : "bg-gray-50 dark:bg-neutral-800"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((item, i) => (
                  <li key={i} className="text-base">
                    ✅ {item}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-2 rounded-xl font-semibold ${
                  plan.popular
                    ? "bg-white text-red-600 hover:bg-gray-100"
                    : "bg-red-600 text-white hover:bg-red-700"
                } transition`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
