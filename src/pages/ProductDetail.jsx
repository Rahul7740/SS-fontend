import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const product = {
  name: "Red Stone Chaukhat",
  description:
    "Hand-carved red sandstone frame with a rustic finish. Perfect for traditional entrances and temples.",
  basePrice: 2500, // per square ft
  images: [
    "/assets/images/a.jpg",
    "/assets/images/b.jpg",
    "/assets/images/c.jpg",
  ],
};

const ProductDetail = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const navigate = useNavigate();

  const calculatePrice = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!l || !w) return 0;
    const area = l * w;
    return area * product.basePrice;
  };

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 px-4 py-20 text-gray-800 dark:text-gray-100">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* Gallery */}
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-xl overflow-hidden shadow-md"
      >
        {product.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Slide ${i}`} className="w-full h-72 sm:h-80 md:h-96 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Info */}
    <div className="w-full">
      <h2 className="text-3xl font-bold text-red-600 mb-4">{product.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>

      {/* Size calculator */}
      <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow mb-6">
        <h3 className="font-semibold text-lg mb-2">Size Calculator</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <input
            type="number"
            placeholder="Length (ft)"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 rounded border dark:bg-neutral-700"
          />
          <input
            type="number"
            placeholder="Width (ft)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 rounded border dark:bg-neutral-700"
          />
        </div>
        <p className="text-red-600 font-bold">
          Estimated Price: ₹{calculatePrice().toFixed(0)}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={() => navigate("/contact")}
          className="w-full sm:w-auto px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 flex items-center justify-center gap-2"
        >
          <FiPhoneCall size={18} /> Contact Us
        </button>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 flex items-center justify-center gap-2"
        >
          <FiMessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProductDetail;
