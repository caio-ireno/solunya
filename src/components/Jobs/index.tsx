"use client";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useState } from "react";
// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Borcelle from "../../../public/Borcelle.png";
import OndasDeParto from "../../../public/ondasdeparto.png";
import Serene from "../../../public/serene.png";

export default function Jobs() {
  const [over, setOver] = useState(false);
  console.log(over);
  return (
    <main className=" w-full lg:h-[400px] h-[200px]  mt-20">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide onMouseOver={() => setOver(!over)}>
          <div onMouseOver={() => setOver(!over)} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-BackgroundCian">
                <Image src={OndasDeParto} alt="ondas de parto imagem" />
              </div>
              <div className="flip-card-back bg-BackgroundCian">
                <h3>Whoaaa!!!</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-BackgroundPink">
                <Image src={Borcelle} alt="ondas de parto imagem" />
              </div>
              <div className="flip-card-back bg-BackgroundPink">
                <h3>Whoaaa!!!</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-BackgroundLightPink">
                <Image src={Serene} alt="ondas de parto imagem" />
              </div>
              <div className="flip-card-back bg-BackgroundLightPink">
                <h3>Whoaaa!!!</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
