import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../pages/api/baseUrl";
import FormData from "form-data";
import { useSelector } from "react-redux";
const SubCategories = (props: any) => {
  // const [productCategory, setProductCategory] = useState([]);
  const { brandName, imageUrl, click } = props;
  // const allservices = useSelector(
  //   (state: any) => state.allServices.allServices
  // );
  // // console.log(allservices, "allservices from sub-category");
  // const service = allservices.find(
  //   (items: any, index: Number) => items?.brand_name === brandName
  // );
  // console.log(service, "subcategory");

  // const productId = service?.product_id;
  // console.log(productId, "id");

  // useEffect(() => {
  //   try {
  //     var data = new FormData();
  //     data.append("product_id", productId);
  //     var config = {
  //       method: "post",
  //       maxBodyLength: Infinity,
  //       url: "https://smartcare.com.np/multiservice/publicControl/GetProductcategiryByProduct",
  //       headers: {},
  //       data: data,
  //     };
  //     axios(config).then((response) => {
  //       console.log(response.data, "api response");
  //       let data = response.data;
  //       setProductCategory(data);
  //     });
  //   } catch (error: any) {
  //     console.log("Axios Error: " + error);
  //   }
  // }, []);
  // console.log(productCategory);
  // console.log(props);

  //  getSubCategories = () => {
  //   let data = new FormData();
  //   data.append("product_id", productId);
  //   var config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "https://smartcare.com.np/multiservice/publicControl/GetProductcategiryByProduct",
  //     headers: {},
  //     data: data,
  //   };
  //   axios(config).then((response) => {
  //     console.log(response.data, "api response");
  //     let data = response.data;
  //     return data;
  //   });
  // }
  return (
    <div
      className="flex items-center justify-center flex-col w-full cursor-pointer"
      onClick={click}
    >
      <img src={imageUrl} alt="error_loading" width={30.5} height={30.5} />
      <p className="mt-[22.97px] text-[#000000BF] text-[6.65px] md:text-[15px] leading-[17.58px] font-medium text-center">
        {brandName}
      </p>
    </div>
  );
};

export default SubCategories;

export const LowerSubCategories = (props: any) => {
  const { brandName, imageUrl, click } = props;
  return (
    <div
      className="flex items-center justify-center flex-col cursor-pointer"
      onClick={click}
    >
      <img src={imageUrl} alt="error_loading" width={30.5} height={30.5} />
      <p className="mt-[22.97px] text-[#000000BF] text-[6.65px] md:text-[15px] leading-[17.58px] font-medium text-center">
        {brandName}
      </p>
    </div>
  );
};
