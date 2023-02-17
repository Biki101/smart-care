import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ModalSubList = (props: any) => {
  const [subList, setSubList] = useState([]);

  //product id
  const { id } = props;
  console.log(id);

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
        let data = response.data;
        console.log(data);
        setSubList(data);
      });
    } catch (error: any) {
      console.log("Axios Error: " + error);
    }
  }, [id]);

  console.log(subList);

  // random colors for images
  // const [bgColor, setBgColor] = useState("");
  // const colors = [
  //   "bg-red-500",
  //   "bg-blue-500",
  //   "bg-green-500",
  //   "bg-yellow-500",
  //   "bg-purple-500",
  // ];
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // setTimeout(()=>{

  // },10)

  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {subList.map((items: any, index: any) => {
        console.log(items);
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-5"
          >
            <div
              className={`border-2 border-bla
          h-20 w-20 justify-center items-center`}
            ></div>
            <span className="mt-2 w-20 h-20 line-clamp-2 text-[12px]">
              {items?.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ModalSubList;
