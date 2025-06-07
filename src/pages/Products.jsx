import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const productData = {
  frames: [
    {
      id: 1,
      name: "Red Stone Chaukhat",
      price: "₹2,499",
      image: "/assets/images/a.jpg",
    },
    {
      id: 2,
      name: "Sandstone Frame",
      price: "₹4,199",
      image: "/assets/images/b.jpg",
    },
    {
      id: 3,
      name: "White Marble Frame",
      price: "₹6,999",
      image: "/assets/images/c.jpg",
    },
  ],
  jali: [
    {
      id: 4,
      name: "Square Pattern Jali",
      price: "₹1,999",
      image: "/assets/images/c.jpg",
    },
    {
      id: 5,
      name: "Flower Design Jali",
      price: "₹2,499",
      image: "/assets/images/a.jpg",
    },
  ],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("frames");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const tabs = [
    { id: "frames", label: "Stone Door Frames" },
    { id: "jali", label: "Cement Jali Designs" },
  ];

  const productsToShow = productData[activeTab];

  return (
    <section className="min-h-screen px-4 py-20 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-red-600">
          Our Products
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 text-gray-600 dark:text-gray-400"
        >
          High-quality handcrafted stone and cement pieces for your space.
        </p>
      </div>

      {/* Tabs */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex justify-center gap-4 mb-12 backdrop-blur-md bg-white/70 dark:bg-neutral-800/40 px-6 py-4 rounded-[30px] shadow-md border border-gray-200 dark:border-neutral-700 w-fit mx-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? "bg-red-600 text-white shadow-md"
                : "text-gray-800 dark:text-gray-200 hover:text-red-600 hover:bg-red-100/50 dark:hover:bg-red-900/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productsToShow.map((product, idx) => (
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
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                onClick={() => navigate(`/product/${product.id}`)}
              >
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
