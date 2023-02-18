import React, { useEffect, useState } from "react";
import { Select } from "antd";
import Topbar from "../../components/Topbar";
import BottomNavbar from "../../components/BottomNavbar";
import Footerinfo from "../../components/Footerinfo";
import Copyright from "../../components/Copyright";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import parse from "html-react-parser";
// import { Rate } from 'antd';

const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
};
type Props = {};

const Partpurja = (props: Props) => {
  const [allParts, setAllParts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/multiservice/publiccontrol/publicmasterconfig/getfeaturedDetails`
      )
      .then((response) => setAllParts(response.data));
  }, []);
  console.log(allParts);
  return (
    <div>
      <div className="w-[80rem] m-auto">
        <Topbar />
      </div>
      <div>
        <div className=" relative mb-[39px]">
          <div className=" flex items-center justify-center mt-[0px]">
            <img
              src="/../assets/partpurja/banner.jpg"
              className="w-full object-cover h-[222px]"
              alt=""
            />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col">
            <h1 className="text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title">
              Part Purja
            </h1>
            <p className="text-[18px] leading-[27px] font-normal text-[#F9F9F9] tracking-[0.02em] professional_title">
              Home &gt; Part Purja
            </p>
          </div>
        </div>
        <div className="container mx-auto w-[80rem]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#121212] text-[32px] leading-[37.5px] font-normal tracking-[0.01em]">
                Featured Products{" "}
              </h2>
              <p className="text-[#505056] text-[14px] mt-[12px] leading-[16.41px] font-normal tracking-[0.01em]">
                Showing 1-20 of 200 Products
              </p>
            </div>
            <Select
              defaultValue="Default Sorting"
              style={{ width: 210 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-full h-[1px] bg-[#EDEDED] rounded-[5px] mt-[33px] mb-[47px]"></div>
          {/* products */}
          <div className="grid grid-cols-5 gap-x-[22px] gap-y-[47px] mb-[72px]">
            {allParts.map((items: any, index: any) => {
              // console.log(items, "part purja product");
              return (
                <div
                  key={index}
                  className="border border-[#EDEDED] rounded-[5px] cursor-pointer hover:shadow-lg hover:border-2 hover:border-red-300 flex-col justify-between items-center w-[250px]"
                >
                  <div className="flex items-center justify-center px-2 pt-2">
                    <img
                      src={items?.filename}
                      alt={items?.features}
                      className="w-full h-[150px] overflow-hidden  rounded-t-[5px]"
                    />
                  </div>
                  <div className="px-[17px] flex flex-col justify-between items-start p-5">
                    <div className="bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block] w-full text-center">
                      <p className="text-[#1F3F98] text-[12px] leading-[14.58px] font-bold inline-block p-2 whitespace-nowrap w-full">
                        {items?.features}
                      </p>
                    </div>
                    <h2 className="text-[#121212] text-justify leading-[17.01px] font-bold max-w-257px mt-[15px] pb-[13px] h-[51px] text-[12px]">
                      {/* htmlString variable */}
                      {parse(items?.blog_name)}
                    </h2>

                    <div className="flex items-center justify-between mt-[18px] w-full">
                      <p className="text-[#ED1B26] text-[14px] leading-[24.3px] tracking-[0.01em] font-medium">
                        {`Rs. ${items?.our_rate}`}
                      </p>
                      <p className="text-[#505056] text-[10px] leading-[17.01px] font-normal tracking-[0.01em] line-through">
                        {`Rs. ${items?.market_rate}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </div>
  );
};

export default Partpurja;
