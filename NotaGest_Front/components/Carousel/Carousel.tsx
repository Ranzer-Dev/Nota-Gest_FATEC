// src/components/Carousel.tsx
"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import Banner_1 from "../../assets/1.png";
import Banner_2 from "../../assets/2.png";
import Banner_3 from "../../assets/3.png";
import Banner_4 from "../../assets/4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="Banner">
          <Image src={Banner_1} alt="Banner 1" className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src={Banner_2} alt="Banner 2" className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src={Banner_3} alt="Banner 3" className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src={Banner_4} alt="Banner 4" className="w-full h-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
