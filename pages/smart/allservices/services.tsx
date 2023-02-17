import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Services = (props: any) => {
  const title = props.service;
  const allServices = useSelector(
    (state: any) => state?.allServices?.allServices
  );
  const services = allServices.filter(
    (item: any, index: any) => item?.brand_name === title
  );
  const popularServices = allServices.filter(
    (item: any, index: any) => item?.brand_name === "Popular Brands"
  );
  return (
    <div className=" basis-[80%]">
      <div className="bg-white pt-[30px] pl-[30px] pr-[130px] pb-[31px] border border-[#EDEDED;] rounded-[5px]">
        <h1 className="text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em]">
          {title}
        </h1>
        <div className="grid grid-cols-4 mt-[28px]">
          {services.map((items: any, index: any) => (
            <Link href="/smart/allservices/servicedetails" key={index}>
              <div className="flex w-full items-center justify-between flex-col cursor-pointer">
                <div className="">
                  <img
                    src={items?.image_url}
                    alt={items?.alt}
                    className="w-20"
                  />
                </div>
                <p className="text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px] h-1/4">
                  {items?.product_name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="mt-[50px] text-[#121212] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] ">
          {`All ${title} Services`}
        </h2>
        <div className="grid grid-cols-4 mt-[25px] gap-[18px]">
          {services.map((items: any, index: any) => (
            <div>
              <p
                className="text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer"
                key={index}
              >
                {items?.product_name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white pt-[30px] pl-[30px] pr-[130px] pb-[31px] border border-[#EDEDED;] rounded-[5px] mt-[30px]">
        <h1 className="text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em]">
          Popular Brands
        </h1>
        <div className="grid grid-cols-4 mt-[28px]">
          {popularServices
            .filter((item: any, index: any) => index < 4)
            .map((items: any, index: any) => (
              <div
                className="flex w-full items-center justify-center flex-col"
                key={index}
              >
                <div>
                  <img
                    src={items?.image_url}
                    alt={items?.alt}
                    className="w-24"
                  />
                </div>
                <p className="text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]">
                  {items?.product_name}
                </p>
              </div>
            ))}
        </div>

        <h2 className="mt-[50px] text-[#121212] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] ">
          All Popular Brand Services
        </h2>
        <div className="grid grid-cols-4 mt-[25px] gap-[18px]">
          {popularServices.map((items: any, index: any) => (
            <div key={index}>
              <p className="text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer">
                {items?.product_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
