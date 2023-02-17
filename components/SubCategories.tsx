import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../pages/api/baseUrl";
import FormData from "form-data";
import { useSelector } from "react-redux";

const SubCategories = (props: any) => {
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

export default SubCategories;
