"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "./styles.css";

type SliderComponentProps = {
  images: string[];
};

export const SliderComponent = ({ images }: SliderComponentProps) => {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index} className="mySwiper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt="image"
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
