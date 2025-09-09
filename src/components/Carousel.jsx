import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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
        className="h-[300px] md:h-[400px] lg:h-[500px]  xl:h-[800px]"
      >
        <SwiperSlide className="h-full">
          <div
            style={{ backgroundImage: `url(${carouselImg1})` }}
            className="h-full w-full bg-cover bg-center"
          ></div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div
            style={{ backgroundImage: `url(${carouselImg2})` }}
            className="h-full w-full bg-cover bg-center"
          ></div>
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <div
            style={{ backgroundImage: `url(${carouselImg3})` }}
            className="h-full w-full bg-cover bg-center"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
