import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

function SampleNextArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[-38%] right-[2.5%] carousel_btn  items-center justify-center cursor-pointer hidden sm:flex"
    >
      <svg
        width="11.67"
        height="21.67"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.14279 21.8332C0.885348 21.8296 0.638509 21.7284 0.450732 21.5493C0.268338 21.3621 0.166016 21.1092 0.166016 20.8457C0.166016 20.5822 0.268338 20.3294 0.450732 20.1422L9.48393 10.9714L0.450732 1.80056C0.295844 1.6087 0.21669 1.36514 0.228666 1.11724C0.240642 0.869342 0.342893 0.634835 0.515529 0.459333C0.688165 0.283831 0.918842 0.179884 1.16269 0.167708C1.40654 0.155533 1.64613 0.236001 1.83485 0.393461L11.548 10.2678C11.7304 10.455 11.8327 10.7079 11.8327 10.9714C11.8327 11.2349 11.7304 11.4877 11.548 11.6749L1.83485 21.5493C1.64707 21.7284 1.40024 21.8296 1.14279 21.8332Z"
          fill="#ED1B26"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="carousel_btn hidden sm:flex items-center justify-center absolute z-20 top-[-38%] xl:right-[7%] md:right-[10%]  cursor-pointer"
    >
      <svg
        width="11.67"
        height="21.67"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8572 21.8332C11.1147 21.8296 11.3615 21.7284 11.5493 21.5493C11.7317 21.3621 11.834 21.1092 11.834 20.8457C11.834 20.5822 11.7317 20.3294 11.5493 20.1422L2.51607 10.9714L11.5493 1.80056C11.7042 1.6087 11.7833 1.36514 11.7713 1.11724C11.7594 0.869342 11.6571 0.634835 11.4845 0.459333C11.3118 0.283831 11.0812 0.179884 10.8373 0.167708C10.5935 0.155533 10.3539 0.236001 10.1651 0.393461L0.452033 10.2678C0.269638 10.455 0.167317 10.7079 0.167317 10.9714C0.167317 11.2349 0.269638 11.4877 0.452033 11.6749L10.1651 21.5493C10.3529 21.7284 10.5998 21.8296 10.8572 21.8332Z"
          fill="#ED1B26"
        />
      </svg>
      {/* <p className='bg-red-400'>hello</p> */}
    </div>
  );
}

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
type Props = {};

const ApplianceRepair = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state.allServices.allServices
  );
  const appllianceServices = allServices.filter(
    (items: any) => items?.brand_name === "Appliances Repair"
  );
  return (
    <div className="bg-[#FBFCFE] pt-[38px] pb-[42px]">
      <div className="container mx-auto pl-[10px] sm:pl-[0px]">
        <div className="flex items-center justify-between pr-[10px]">
          <h1 className="text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Appliance Repair
          </h1>
          <p className="sm:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          {appllianceServices.map((items: any, index: any) => (
            <div className="cursor-pointer " key={index}>
              <div className="bg-white transform hover:scale-[105%] transition-all duration-200 ease-in-out border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%] ">
                <img
                  src={items?.image_url}
                  alt={items?.alt}
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal">
                {items?.product_name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ApplianceRepair;
