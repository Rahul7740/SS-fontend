// src/components/Features.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Truck, Hammer } from "lucide-react";

const features = [
  {
    title: "Durable Stone Material",
    description:
      "Premium-grade red, sandstone, and marble options for long-lasting strength and aesthetics.",
    icon: <ShieldCheck size={36} className="text-red-600" />,
  },
  {
    title: "Pan India Delivery",
    description:
      "We deliver across all states with proper packaging and size customization on request.",
    icon: <Truck size={36} className="text-red-600" />,
  },
  {
    title: "Custom Cutting & Design",
    description:
      "Chaukhat sizes available for all types of doors and designs — fully handcrafted by experts.",
    icon: <Hammer size={36} className="text-red-600" />,
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="px-4 py-20 bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-12 text-red-600">
          Why Choose Shri Shyam Stone?
        </h2>

        <div className="grid gap-10 md:grid-cols-3 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
