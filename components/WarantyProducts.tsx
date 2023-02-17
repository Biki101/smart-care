import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

// const SampleNextArrow = () => {
//     return (
//         <div className='bg-red-500'>
//             helo
//         </div>
//     )
// }
// const SamplePrevArrow = () => {
//     return (
//         <div className='bg-green-500'>
//             helo0
//         </div>
//     )
// }

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
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

const WarantyProducts = (props: Props) => {
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const warrantyProducts = allServices?.filter(
    (items: any) => items?.brand_name === "Warranty Products"
  );
  return (
    <div className="bg-white md:pt-[38px] pt-[40px] ">
      <div className="container mx-auto pl-[10px] sm:pl-[10px]">
        <div className="flex items-center justify-between pr-[10px]">
          <h1 className="text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
            Warranty Products
          </h1>
          <p className="sm:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer">
            View All
          </p>
        </div>
        <Slider {...settings} className="mt-[28.5px] ">
          {warrantyProducts?.map((items: any, index: any) => (
            <div className="cursor-pointer " key={index}>
              <div className="bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src={items?.image_url}
                  alt={items?.alt}
                  className="w-[122px] h-[76px] object-cover"
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

export default WarantyProducts;
