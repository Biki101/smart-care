import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ModalSubList = (props: any) => {
  const [subList, setSubList] = useState([]);
  const { id, brandName } = props;
  // useEffect(() => {
  //   try {
  //     var data = new FormData();
  //     data.append("product_id", id);
  //     var config = {
  //       method: "post",
  //       maxBodyLength: Infinity,
  //       url: "https://smartcare.com.np/multiservice/publicControl/GetProductcategiryByProduct",
  //       headers: {},
  //       data: data,
  //     };
  //     axios(config).then((response) => {
  //       let data = response.data;
  //       console.log(data);
  //       setSubList(data);
  //     });
  //   } catch (error: any) {
  //     console.log("Axios Error: " + error);
  //   }
  // }, []);
  return (
    <div className="">
      {/* <h2>{brandName}</h2>
      {subList?.map((items: any, index: any) => (
        <div>
          <span></span>
          <title>{items?.text}</title>
        </div>
      ))} */}
    </div>
  );
};

export default ModalSubList;
