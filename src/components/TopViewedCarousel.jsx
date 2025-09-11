import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import carouselImg1 from "../assets/imgs/heroCarousel1.jpg";
import carouselImg2 from "../assets/imgs/heroCarousel2.jpg";
import carouselImg3 from "../assets/imgs/heroCarousel3.jpg";

const slidesData = [
  { src: carouselImg1, alt: "Slide 1" },
  { src: carouselImg2, alt: "Slide 2" },
  { src: carouselImg3, alt: "Slide 3" },
  { src: carouselImg1, alt: "Slide 1" },
  { src: carouselImg2, alt: "Slide 2" },
  { src: carouselImg3, alt: "Slide 3" },
  { src: carouselImg1, alt: "Slide 1" },
  { src: carouselImg2, alt: "Slide 2" },
  { src: carouselImg3, alt: "Slide 3" },
  { src: carouselImg1, alt: "Slide 1" },
  { src: carouselImg2, alt: "Slide 2" },
  { src: carouselImg3, alt: "Slide 3" },
];

const TopViewedCarousel = () => {
  return (
    <div className="w-full mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          640: { spaceBetween: 15 },
          768: { spaceBetween: 20 },
          1024: { spaceBetween: 25 },
          1280: { spaceBetween: 30 },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] lg:!w-[200px] lg:!h-[200px] xl:!w-[250px] xl:!h-[250px] overflow-hidden rounded-full"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-blue-400 text-white p-1 md:p-2 rounded-full hover:bg-black transition">
        <GrFormPrevious />
      </button>
      <button className="custom-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-blue-400 text-white p-1 md:p-2 rounded-full hover:bg-black transition">
        <GrFormNext />
      </button>
    </div>
  );
};

export default TopViewedCarousel;
