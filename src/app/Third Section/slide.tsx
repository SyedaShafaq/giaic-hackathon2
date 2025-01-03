"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const CarouselSlider = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-background p-8">
      {/* Swiper Slider */}
      <div className="w-[900px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="rounded-lg"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/images/carousel1.png"
                alt="Room 1"
                className="w-[500px] h-screen rounded-lg"
                width={400}
                height={400}
              />
              <div className="absolute bottom-4 px-2 left-4 text-primary bg-white">
                <h3 className="text-2xl font-bold">Inner Peace</h3>
                <span className="text-lg">01 — Bed Room</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/images/carousel2.png"
                alt="Room 2"
                className="w-[500px] h-screen rounded-lg"
                width={400}
                height={400}
              />
              <div className="absolute bottom-4 px-2 left-4 text-primary bg-white">
                <h3 className="text-2xl font-bold">Cozy Corner</h3>
                <span className="text-lg">02 — Living Room</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/images/carousel3.png"
                alt="Room 3"
                className="w-[500px] h-screen rounded-lg"
                width={400}
                height={400}
              />
              <div className="absolute bottom-4 px-2 left-4 text-primary bg-white">
                <h3 className="text-2xl font-bold">Bright Spaces</h3>
                <span className="text-lg">03 — Dining Area</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselSlider;
