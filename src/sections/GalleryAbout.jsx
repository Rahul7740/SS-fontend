// src/components/GalleryAbout.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const galleryImages = [
  "/assets/images/a.jpg",
  "/assets/images/b.jpg",
  "/assets/images/c.jpg",
  "/assets/images/d.jpg",
  "/assets/images/a.jpg",
];

const GalleryAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Section */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-red-600 mb-6">About Shri Shyam Stone</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Shri Shyam Stone is a trusted name in high-quality stone chaukhats. We specialize in
            designing and delivering handcrafted red stone, sandstone, and marble door frames that
            enhance the entrance of any home or temple.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            With nationwide delivery, custom sizes, and expert craftsmanship — our products are known
            for durability, beauty, and traditional Indian aesthetics.
          </p>
        </div>

        {/* Gallery Slider */}
        <div data-aos="fade-left">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-72 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GalleryAbout;
