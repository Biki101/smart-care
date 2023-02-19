import React from "react";
import Slider from "react-slick";

const PopularServicesSlide = (props) => {
  const { settings } = props;
  return (
    <div className="bg-[#FBFCFE] pt-[38px] pb-[52px] mt-[30px] w-[80rem] m-auto">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-between pr-[10px]">
          <h1 className="text-[#2591B2] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Popular Services Near you
          </h1>
          <p className="sm:hidden text-[#BB243F]/[0.5] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%] ">
              <img
                src="/../assets/microwave.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Microwave Oven
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/deepfridge.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Deep Fridge-VISI Cooler
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/geyser.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Geyser
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/refrigerator.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Refrigerator
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/chimney.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Chimney
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/chimney.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Chimney
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/homeheater.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Home Heater
            </p>
          </div>
          <div>
            <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
              <img
                src="/../assets/vaccumeCleaner.png"
                alt=""
                className="w-[122px] h-[72px] object-cover"
              />
            </div>
            <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
              Vacume Cleaner
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PopularServicesSlide;
