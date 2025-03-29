import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/1200x500?text=Slide+1",
    title: "Welcome to Our Website",
    description: "Explore our amazing services and products!",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1200x500?text=Slide+2",
    title: "Quality and Reliability",
    description: "We provide top-notch solutions tailored for you.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1200x500?text=Slide+3",
    title: "Get Started Today",
    description: "Join us and take your business to the next level.",
  },
];

const BannerSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-64 md:h-80 lg:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
