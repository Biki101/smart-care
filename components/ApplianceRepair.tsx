import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const OurClients = (props: Props) => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://smartcare.com.np/multiservice/masterconfig/publicmasterconfig/getConfigList"
      )
      .then((res) => {
        setClients(res.data.brands);
        // console.log(clients);
      });
  }, []);
  return (
    <div className="container mx-auto pt-[80px] md:pb-[133px] pb-[60px] px-[15px] sm:px-0">
      <h2 className="text-[#232323] md:text-[32px]  text-[17px] leading-[38.88px] font-bold text-center">
        Our Clients
      </h2>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-y-[20px] md:gap-y-[0px] mt-[79px] gap-x-[10px]">
        {clients
          .filter((item, index) => index < 6)
          .map((item: any, index) => (
            <div
              className="flex items-center justify-center border sm:border-0 w-32"
              key={index}
            >
              <img src={item?.image_url} alt="error_loading" />
            </div>
          ))}
      </div>
      <div className="md:flex md:items-center md:gap-[56px] gap-x-[10px] md:justify-center grid grid-cols-2 md:mt-[88.75px] mt-[20px]">
        {clients
          .filter((item: any, index) => index > 5 && index < 8)
          .map((item: any, index) => {
            // console.log(item);
            return (
              <div
                className="flex items-center justify-center border sm:border-0 w-32"
                key={index}
              >
                <img src={item?.image_url} alt="error_loading" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OurClients;
