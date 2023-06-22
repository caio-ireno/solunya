"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

interface carouselProps {
  ArrayCarousel: {
    id: number;
    ImgName: StaticImageData;
    name: string;
    description: string;
    url: string;
  }[];
}

export function Carousel(props: carouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const newSlide =
      currentSlide === props.ArrayCarousel.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide =
      currentSlide === 0 ? props.ArrayCarousel.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="w-full flex flex-col rounded-md justify-center gap-10">
      <div className=" w-full flex flex-row">
        <AiOutlineCaretLeft
          color="#FFB733"
          onClick={handlePrevSlide}
          className=" left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
        <div className="w-full h-full flex overflow-hidden  m-auto ">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 w-full h-full"
          >
            {props.ArrayCarousel.map((array, index) => {
              if (index === currentSlide) {
                return (
                  <a
                    href={array.url}
                    key={array.id}
                    className="animate-fadeIn w-full h-full flex md:flex-row flex-col gap-5 items-center justify-center"
                  >
                    <Image
                      className="rounded-full lg:w-[150px] w-[100px]"
                      src={array.ImgName}
                      alt="Imagem de descrição da empresa"
                    />
                    <div className="flex flex-col basis-2/3 gap-5 ">
                      <h1 className="lg:text-4xl text-2xl font-bold text-TextColorLight">
                        {array.name}
                      </h1>
                      <p className="lg:text-2xl  text-xl text-TextColorLight text-justify">
                        {array.description}
                      </p>
                    </div>
                  </a>
                );
              }
            })}
          </Swipe>
        </div>
        <AiOutlineCaretRight
          color="#FFB733"
          onClick={handleNextSlide}
          className=" right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
      </div>

      {/* <div className="relative flex justify-center p-2">
        {props.ArrayCarousel.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "lg:h-4 lg:w-4 h-3 w-3 bg-BackgroundOrange rounded-full mx-2 mb-2 cursor-pointer"
                  : "lg:h-4 lg:w-4 h-3 w-3 bg-BackgroundWhite  rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
}
