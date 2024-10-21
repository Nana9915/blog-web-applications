"use client";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel = () => {
  return (
    <div className="container mb-[100px]">
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
