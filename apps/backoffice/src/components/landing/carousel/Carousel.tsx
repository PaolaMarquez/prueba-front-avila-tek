"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import { createRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@avila-tek/ui/button";

interface CustomArrowProps {
  onClick: () => void;
  position: string;
}

export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselRef = createRef<Carousel>();

  const CustomArrow = ({ onClick, position }: CustomArrowProps) => (
    <button
      onClick={() => onClick()}
      className={`bg-white hover:bg-gray-200 rounded-full absolute bottom-0 left-0 transform -translate-y-full border p-4 text-lg cursor-pointer ${position === "right" ? "ml-16" : ""}`}
    >
      {position === "left" ? (
        <ArrowLeftIcon className="text-gray-600 w-5 h-5 rounded-full" />
      ) : (
        <ArrowRightIcon className="text-gray-600 w-5 h-5 rounded-full" />
      )}
    </button>
  );
  return (
    <div className="mx-10 lg:ml-28 my-10">
      <div className="mb-14 text-center grid lg:text-left lg:flex lg:justify-between">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't just take our word for it
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from some of our amazing customers who are automating their
            finances.
          </p>
        </div>
        <div className="mt-10 lg:mr-24 flex items-center justify-center gap-x-6 lg:justify-start">
          <Button
            className="bg-white hover:bg-gray-200 text-gray-500 border "
            children={<p>Our Customers</p>}
          />
          <Button
            className="bg-purpleButton hover:bg-purple text-white"
            children={<p>Create account</p>}
          />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        className="pb-32"
        infinite={true}
        ref={carouselRef}
        customLeftArrow={
          <CustomArrow
            onClick={() => (Carousel as any).goToPrev()}
            position={"left"}
          />
        }
        customRightArrow={
          <CustomArrow
            onClick={() => (Carousel as any).goToNext()}
            position={"right"}
          />
        }
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel>
    </div>
  );
}
