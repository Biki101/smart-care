import React from "react";
import Link from "next/link";
type Props = {};

const Topbar = (props: Props) => {
  return (
    <div className="md:border-b-[1px] md:border-[#D9D9D9] sticky top-0 bg-white z-50">
      <div className="container mx-auto  md:flex md:items-center md:justify-between pt-[9px] pb-[10px] grid grid-cols-3">
        <Link href="/smart" className="hidden md:block">
          <div className="cursor-pointer ">
            <img
              src="/../assets/smart_care_logo.png"
              alt=""
              className="w-[250px] h-[40px]"
            />
          </div>
        </Link>

        <div className="inline-block sm:hidden pl-[17px]">
          <svg
            width="16"
            className="inline-block"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790175 1.13968 0 0.948912 0 0.75ZM0 5C0 4.80109 0.0790175 4.61032 0.21967 4.46967C0.360322 4.32902 0.551088 4.25 0.75 4.25H13.25C13.4489 4.25 13.6397 4.32902 13.7803 4.46967C13.921 4.61032 14 4.80109 14 5C14 5.19891 13.921 5.38968 13.7803 5.53033C13.6397 5.67098 13.4489 5.75 13.25 5.75H0.75C0.551088 5.75 0.360322 5.67098 0.21967 5.53033C0.0790175 5.38968 0 5.19891 0 5ZM0.75 8.5C0.551088 8.5 0.360322 8.57902 0.21967 8.71967C0.0790175 8.86032 0 9.05109 0 9.25C0 9.44891 0.0790175 9.63968 0.21967 9.78033C0.360322 9.92098 0.551088 10 0.75 10H15.25C15.4489 10 15.6397 9.92098 15.7803 9.78033C15.921 9.63968 16 9.44891 16 9.25C16 9.05109 15.921 8.86032 15.7803 8.71967C15.6397 8.57902 15.4489 8.5 15.25 8.5H0.75Z"
              fill="#414141"
            />
          </svg>
        </div>

        <div className=" items-center gap-[22px] hidden md:flex">
          <ul className=" items-center gap-[26px] hidden md:flex">
            <li>
              <Link
                href="/smart/allservices"
                className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                href="/smart/blogs"
                className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/smart/professionals"
                className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
              >
                Professionals
              </Link>
            </li>
            <li>
              <Link
                href="/smart/partpurja"
                className="text-[#505056] text-[15px] leading-[17.58px] tracking-[0.02em] font-normal cursor-pointer"
              >
                Part Purja
              </Link>
            </li>
          </ul>
          <Link href="/login">
            <button className=" hidden md:flex items-center bg-[#2591B2] gap-[8px] py-[8.5px] px-[13px]  rounded-[3px]">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.80267 0.0378123C5.56467 -0.196217 4.66667 0.697351 4.66667 1.58084V9.41916C4.66667 10.3026 5.56467 11.1962 6.80267 10.9622C9.77733 10.4001 12 8.16839 12 5.5C12 2.83161 9.77733 0.599932 6.80267 0.0378123ZM6.862 3.42453C6.98702 3.31956 7.15656 3.2606 7.33333 3.2606C7.51011 3.2606 7.67965 3.31956 7.80467 3.42453L9.80467 5.10417C9.92965 5.20916 9.99986 5.35154 9.99986 5.5C9.99986 5.64846 9.92965 5.79084 9.80467 5.89584L7.80467 7.57547C7.67893 7.67746 7.51053 7.73389 7.33573 7.73262C7.16093 7.73134 6.99373 7.67246 6.87012 7.56865C6.74652 7.46485 6.6764 7.32442 6.67488 7.17762C6.67337 7.03083 6.74056 6.8894 6.862 6.7838L7.724 6.05988H0.666667C0.489856 6.05988 0.320286 6.00089 0.195262 5.8959C0.0702379 5.7909 0 5.64849 0 5.5C0 5.35151 0.0702379 5.2091 0.195262 5.10411C0.320286 4.99911 0.489856 4.94012 0.666667 4.94012H7.724L6.862 4.2162C6.73702 4.1112 6.66681 3.96882 6.66681 3.82036C6.66681 3.6719 6.73702 3.52952 6.862 3.42453Z"
                  fill="#FDFEFF"
                />
              </svg>
              <p className="text-[#FDFEFF] text-[15px] leading-[18.23px] font-normal tracking-[0.02em]">
                Login
              </p>
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center sm:hidden">
          <p className="font-semibold text-[#414141] text-[14px] leading-[21px]">
            Kathmandu
          </p>
        </div>
        <div className="sm:hidden  flex justify-end pr-[27px]">
          {/* <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M15 14.1667V15H0V14.1667L1.66667 12.5V7.5C1.66667 4.91667 3.35833 2.64167 5.83333 1.90833V1.66667C5.83333 1.22464 6.00893 0.800716 6.32149 0.488155C6.63405 0.175595 7.05797 0 7.5 0C7.94203 0 8.36595 0.175595 8.67851 0.488155C8.99107 0.800716 9.16667 1.22464 9.16667 1.66667V1.90833C11.6417 2.64167 13.3333 4.91667 13.3333 7.5V12.5L15 14.1667ZM9.16667 15.8333C9.16667 16.2754 8.99107 16.6993 8.67851 17.0118C8.36595 17.3244 7.94203 17.5 7.5 17.5C7.05797 17.5 6.63405 17.3244 6.32149 17.0118C6.00893 16.6993 5.83333 16.2754 5.83333 15.8333" fill="#414141" />
                    </svg> */}
          <img src="/../assets/mblview/profile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
