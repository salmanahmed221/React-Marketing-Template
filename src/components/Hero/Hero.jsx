import { Navigation, Autoplay, A11y, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SliderData } from "./sliderData/sliderData";

function Hero() {
  return (
    <section>
      <Swiper
        modules={[Navigation, Autoplay, A11y, Parallax]}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        loop={true}
        breakpoints={{
          320: {
            speed: 1500,
          },
          768: {
            speed: 1700,
          },
          1024: { speed: 2500 },
        }}
      >
        {/* Slides */}
        {SliderData.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="relative md:h-auto md:w-auto  flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Slider Images */}
                <img
                  src={elem.image}
                  alt={"background-img"}
                  // loading="eager" //Pre-loaded image
                  className="z-1 object-cover h-screen w-screen"
                  width={2000}
                  height={2000}
                  priority
                />
              </div>
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black opacity-30" />
              <div className="absolute md:right-48 md:top-48 top-14">
                <div>
                  <h1 className="md:text-8xl text-5xl font-bold ">
                    <div className="bg-[#dd1313] text-black py-2 w-[80%]">
                      {elem.h1}
                    </div>
                    <div className="bg-white text-black py-3 md:ml-5 ml-3 pr-10">
                      {elem.h2}
                    </div>
                  </h1>
                  <button className="bg-[#dd1313] rounded-md ml-4 md:mt-10 mt-5 text-black font-bold md:text-xl md:p-4 p-3 shadow-lg hover:text-[#dd1313] hover:bg-black shadow-[#3c3c3c]">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
