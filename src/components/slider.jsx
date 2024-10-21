"use client";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"cursor-pointer hover:opacity-50 absolute -bottom-10 right-12 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
      } onClick={onClick}>
      <svg
        width="9"
        height="17"
        viewBox="0 0 9 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 16L1 8.5L8.5 1"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "cursor-pointer hover:opacity-50 absolute -bottom-10 right-0 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
      }
      onClick={onClick}
    >
      <svg
        width="9"
        height="17"
        viewBox="0 0 9 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L8.5 8.5L1 16"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}



export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mb-[100px] relative">
      <Slider {...settings}>
        <div>
          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/image.jpeg"
              width={1216}
              height={600}
              className=" h-full w-full object-cover"
              alt=""
            />
            <div className="bg-[#141624]/40 absolute inset-0" />
            <div className="p-10 bg-[#FFFFFF] border-collapse border-solid border-[#E8E8EA] border w-[598px] rounded-[12px] shadow-[0px_12px_24px_-6px_#181A2A1F] absolute left-3 bottom-3">
              <div className="bg-[#4B6BFB] inline-block rounded-[6px] px-[10px] py-[4px] font-medium text-[#FFFFFF] text-[14px] leading-[20px] mb-4">
                Technology
              </div>
              <div className="text-[#181A2A] font-semibold text-[36px] leading-10 mb-6">
                <p>
                  Grid system for better <br /> Design User Interface
                </p>
              </div>
              <div className="font-normal text-base text-[#97989F]">
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/image.jpeg"
              width={1216}
              height={600}
              className=" h-full w-full object-cover"
              alt=""
            />
            <div className="bg-[#141624]/40 absolute inset-0" />
            <div className="p-10 bg-[#FFFFFF] border-collapse border-solid border-[#E8E8EA] border w-[598px] rounded-[12px] shadow-[0px_12px_24px_-6px_#181A2A1F] absolute left-3 bottom-3">
              <div className="bg-[#4B6BFB] inline-block rounded-[6px] px-[10px] py-[4px] font-medium text-[#FFFFFF] text-[14px] leading-[20px] mb-4">
                Technology
              </div>
              <div className="text-[#181A2A] font-semibold text-[36px] leading-10 mb-6">
                <p>
                  Grid system for better <br /> Design User Interface
                </p>
              </div>
              <div className="font-normal text-base text-[#97989F]">
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
