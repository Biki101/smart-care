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
  console.log(`selected ${value}`);
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
      <Topbar />
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
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#121212] text-[32px] leading-[37.5px] font-normal tracking-[0.01em]">
                Featured Products{" "}
              </h1>
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
              return (
                <div className="border border-[#EDEDED] rounded-[5px] cursor-pointer hover:shadow-lg">
                  <div className="h-[251px] flex items-center justify-center">
                    <img
                      src={items?.filename}
                      alt={items?.features}
                      className="w-full h-[251px] object-cover"
                    />
                  </div>
                  <div className="px-[10px] pt-[10px] pb-[17px]">
                    <div className="bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block">
                      <p className="text-[#1F3F98] text-[12px] leading-[14.58px] font-bold inline-block">
                        {items?.features}
                      </p>
                    </div>
                    <h2 className="text-[#121212] text-[14px] leading-[17.01px] font-bold max-w-257px mt-[9px] pb-[13px]">
                      {/* htmlString variable */}
                      {parse(items?.blog_name)}
                    </h2>
                    <p className="text-[#121212] text-[14px] leading-[17.01px] font-normal">
                      {`
                        Market Price: Rs. ${items?.market_rate}
                        `}
                    </p>
                    <div className="flex items-center justify-between mt-[18px]">
                      <p className="text-[#ED1B26] text-[20px] leading-[24.3px] tracking-[0.01em] font-medium">
                        {`Rs. ${items?.our_rate}`}
                      </p>
                      <p className="text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]">
                        View Details
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
