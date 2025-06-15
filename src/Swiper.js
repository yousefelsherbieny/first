import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../src/Images/sliders/slide1.jpg";
import slide2 from "../src/Images/sliders/slide2.jpg";
import slide3 from "../src/Images/sliders/slide3.jpg";
import slide4 from "../src/Images/sliders/slide4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={slide1} alt="Slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src={slide2} alt="Slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src={slide3} alt="Slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src={slide4} alt="Slide" />
          </div>
        </SwiperSlide>
        
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
}
