import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import carouselImg1 from "../assets/imgs/heroCarousel1.jpg";
import carouselImg2 from "../assets/imgs/heroCarousel2.jpg";
import carouselImg3 from "../assets/imgs/heroCarousel3.jpg";

const Carousel = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[800px]"
        preloadImages={true}
        lazy={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide className="h-full">
          <img
            src={carouselImg1}
            alt="Slide 1"
            className="h-full w-full object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img
            src={carouselImg2}
            alt="Slide 2"
            className="h-full w-full object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img
            src={carouselImg3}
            alt="Slide 3"
            className="h-full w-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
