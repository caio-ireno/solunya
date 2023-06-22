"use client";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Borcelle from "../../../public/Borcelle.png";
import OndasDeParto from "../../../public/ondasdeparto.png";
import Serene from "../../../public/serene.png";

export default function Jobs() {
  return (
    <main className=" w-full  mt-20">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex items-center justify-center rounded-xl w-full bg-BackgroundLightPink">
            <Image src={OndasDeParto} alt="ondas de parto imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center rounded-xl w-full w-full bg-[#FAF0F0]">
            <Image src={Borcelle} alt="Borcelle Brews imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center rounded-xl w-full bg-BackgroundCian">
            <Image src={Serene} alt="Serene imagem" />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
