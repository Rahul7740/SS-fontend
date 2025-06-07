// src/components/ProductShowcase.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    name: "Red Stone Chaukhat",
    image: "/assets/images/b.jpg",
    description: "Premium red sandstone door frame for traditional entrances.",
    price: "₹3,200/meter",
  },
  {
    name: "Marble Temple Frame",
    image: "/assets/images/a.jpg",
    description: "White marble design for mandir or spiritual gateways.",
    price: "₹5,500/meter",
  },
  {
    name: "Sandstone Chaukhat",
    image: "/assets/images/c.jpg",
    description: "Classic yellow sandstone chaukhat with carving options.",
    price: "₹2,800/meter",
  },
];

const ProductShowcase = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="products" className="bg-gray-50 dark:bg-neutral-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-12 text-red-600">
          Our Products
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="text-red-600 font-bold text-lg">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
