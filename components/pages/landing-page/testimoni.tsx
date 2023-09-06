import Image from "next/image";
import React from "react";
import userIcon from "@/assets/images/Ellipse 1.png";
import { Quotes } from "@/assets/icons";
import CarouselTestimoni from "@/components/molecules/testimoni_carousel";

const TestimoniSection = () => {
  return (
    <section
      id="testi"
      className="flex flex-col items-center gap-3 px-6 py-13 lg:px-16 lg:py-20"
    >
      {/* <div className="text-center flex flex-col gap-13">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          what our clients say
        </h1>
        <div className="relative text-center md:max-w-2xl">
          <div className="hidden md:block absolute -top-16 -left-16">
            <Quotes />
          </div>
          We are very happy to work with Creatif Studio. Their service was very
          professional, and they always maintained good communication throughout
          the project. The end result far exceeded our expectations, and we are
          very satisfied with the quality of their work
        </div>
      </div> */}
      <CarouselTestimoni />
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative ">
          <Image src={userIcon} alt={"gambar"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative">
          <Image src={userIcon} alt={"gambar"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative">
          <Image src={userIcon} alt={"gambar"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative">
          <Image src={userIcon} alt={"gambar"} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TestimoniSection;
