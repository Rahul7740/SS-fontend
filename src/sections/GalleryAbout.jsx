import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Add Autoplay
import "swiper/css";
import "swiper/css/pagination";

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
    <section className="w-full bg-white dark:bg-neutral-900 text-gray-800 dark:text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1270px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* About Section */}
        <div data-aos="fade-right" className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 text-balance">
            About Shri Shyam Stone
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Shri Shyam Stone is a trusted name in high-quality stone chaukhats. We specialize in
            designing and delivering handcrafted red stone, sandstone, and marble door frames that
            enhance the entrance of any home or temple.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300">
            With nationwide delivery, custom sizes, and expert craftsmanship — our products are known
            for durability, beauty, and traditional Indian aesthetics.
          </p>
        </div>

        {/* Gallery Slider */}
        <div data-aos="fade-right" className="order-1 md:order-2">
          <Swiper
            modules={[Pagination, Autoplay]} // ✅ Include Autoplay here
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Configure autoplay
            className="rounded-2xl overflow-hidden shadow-md sm:shadow-xl"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
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
