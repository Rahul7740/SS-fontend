// src/pages/Gallery.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/assets/images/a.jpg",
  "/assets/images/b.jpg",
  "/assets/images/c.jpg",
  "/assets/images/d.jpg",
  "/assets/images/a.jpg",
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-red-600 mb-10"
        >
          Our Gallery
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
