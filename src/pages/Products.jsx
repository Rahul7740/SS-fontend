// src/pages/Products.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const productData = [
  {
    name: "Red Stone Chaukhat",
    price: "₹2,499",
    image: "/assets/images/a.jpg",
  },
  {
    name: "Sandstone Frame",
    price: "₹4,199",
    image: "/assets/images/b.jpg",
  },
  {
    name: "White Marble Frame",
    price: "₹6,999",
    image: "/assets/images/c.jpg",
  },
  {
    name: "Designer Border Frame",
    price: "₹5,499",
    image: "/assets/images/d.jpg",
  },
  {
    name: "Premium Chisel Stone",
    price: "₹7,299",
    image: "/assets/images/e.jpg",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen px-4 py-20 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-red-600">
          Our Products
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-gray-600 dark:text-gray-400"
        >
          High-quality stone chaukhat frames for every need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productData.map((product, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-neutral-800 shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-red-600 font-bold text-lg">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
