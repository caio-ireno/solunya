import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ArcticBrews from "../../../public/ArcticBrews.png";
import OndasDeParto from "../../../public/ondasDeParto.png";
import Serene from "../../../public/serene.png";

export default function Jobs() {
  return (
    <main className="flex justify-center items-center w-full h-[400px]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-[300px] block"
            src={OndasDeParto}
            alt="ondas de parto imagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[300px] block"
            src={ArcticBrews}
            alt="Arctic Brews imagem"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-[300px] block" src={Serene} alt="Serene imagem" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
