import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ModalSubList = (props: any) => {
  const [subList, setSubList] = useState([]);
  const { image_url, alt, slug, product_name, id } = props;
  useEffect(() => {
    try {
      var data = new FormData();
      data.append("product_id", id);
      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://smartcare.com.np/multiservice/publicControl/GetProductcategiryByProduct",
        headers: {},
        data: data,
      };
      axios(config).then((response) => {
        console.log(response.data, "api response");
        let data = response.data;
        setSubList(data);
      });
    } catch (error: any) {
      console.log("Axios Error: " + error);
    }
  }, []);
  console.log(subList, "sublist");
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-start items-center gap-5 w-full ">
        <div className="border-2 border-[#2e617e] w-16 h-16 bg-white flex justify-center items-center rounded-full overflow-hidden">
          <img src={image_url} alt={alt} className="w-10 rounded-full" />
        </div>
        <div className="text-[#505056] text-[16px] leading-[21.87px] tracking-[0.02em] font-normal cursor-pointer hover:text-[#000] transform hover:scale-[102%] transition duration-200 ease-out hover:underline">
          {/* items-end */}
          <Link
            href={`/smart/allservices/${slug}`}
            className="hover:text-[#2e617e]"
          >
            {product_name}
          </Link>
        </div>
      </div>
      <ul className="w-[200px] list-disc self-end">
        {subList.length
          ? subList.map((items: any, index: any) => (
              <li className="text-[#505056] text-[13px] leading-[21.87px] tracking-[0.02em] font-normal cursor-pointer hover:text-[#2e617e] transform hover:scale-[102%] transition duration-200 ease-out hover:underline my-2">
                {items?.text}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default ModalSubList;
