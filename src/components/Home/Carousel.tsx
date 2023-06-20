"use client";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

interface carouselProps {
  ArrayCarousel: { id: number; name: string; description: string }[];
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
  console.log(currentSlide);

  return (
    <div className="relative bg-BackgroundWhite w-1/2 h-[220px]  rounded-md">
      <AiOutlineCaretLeft
        color="#FFB733"
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-1/2 h-full flex overflow-hidden relative m-auto ">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {props.ArrayCarousel.map((array, index) => {
            if (index === currentSlide) {
              return (
                <div
                  key={array.id}
                  className="animate-fadeIn h-full flex items-center justify-center"
                >
                  <h1 className="text-4xl text-TextColorDark">{array.name}</h1>
                  <p className="text-4xl text-TextColorDark">
                    {array.description}
                  </p>
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineCaretRight
        color="#FFB733"
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {props.ArrayCarousel.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-BackgroundOrange rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-BackgroundWhite  rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
