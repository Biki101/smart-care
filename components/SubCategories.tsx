import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../pages/api/baseUrl";

const SubCategories = (props: any) => {
  // const [productCategory, setProductCategory] = useState([]);
  // useEffect(() => {
  //   try {
  //     axios
  //       .post(
  //         `${baseUrl}/multiservice/publicControl/GetProductcategiryByProduct`
  //       )
  //       .then((response) => console.log(response.data));
  //   } catch (error: any) {
  //     console.log("Axios Error: " + error);
  //   }
  // }, []);
  const { brandName, imageUrl, click } = props;
  console.log(props);
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
