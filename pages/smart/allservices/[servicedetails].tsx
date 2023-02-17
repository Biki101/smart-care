import React, { useEffect, useState } from "react";
import BottomNavbar from "../../../components/BottomNavbar";
import Copyright from "../../../components/Copyright";
import Footerinfo from "../../../components/Footerinfo";
import Topbar from "../../../components/Topbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp, { useCountUp } from "react-countup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

function SampleNextArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[-38%] right-[2.5%] carousel_btn  items-center justify-center cursor-pointer hidden sm:flex"
    >
      <svg
        width="11.67"
        height="21.67"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.14279 21.8332C0.885348 21.8296 0.638509 21.7284 0.450732 21.5493C0.268338 21.3621 0.166016 21.1092 0.166016 20.8457C0.166016 20.5822 0.268338 20.3294 0.450732 20.1422L9.48393 10.9714L0.450732 1.80056C0.295844 1.6087 0.21669 1.36514 0.228666 1.11724C0.240642 0.869342 0.342893 0.634835 0.515529 0.459333C0.688165 0.283831 0.918842 0.179884 1.16269 0.167708C1.40654 0.155533 1.64613 0.236001 1.83485 0.393461L11.548 10.2678C11.7304 10.455 11.8327 10.7079 11.8327 10.9714C11.8327 11.2349 11.7304 11.4877 11.548 11.6749L1.83485 21.5493C1.64707 21.7284 1.40024 21.8296 1.14279 21.8332Z"
          fill="#ED1B26"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="carousel_btn hidden sm:flex items-center justify-center absolute z-20 top-[-38%] xl:right-[7%] md:right-[10%]  cursor-pointer"
    >
      <svg
        width="11.67"
        height="21.67"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8572 21.8332C11.1147 21.8296 11.3615 21.7284 11.5493 21.5493C11.7317 21.3621 11.834 21.1092 11.834 20.8457C11.834 20.5822 11.7317 20.3294 11.5493 20.1422L2.51607 10.9714L11.5493 1.80056C11.7042 1.6087 11.7833 1.36514 11.7713 1.11724C11.7594 0.869342 11.6571 0.634835 11.4845 0.459333C11.3118 0.283831 11.0812 0.179884 10.8373 0.167708C10.5935 0.155533 10.3539 0.236001 10.1651 0.393461L0.452033 10.2678C0.269638 10.455 0.167317 10.7079 0.167317 10.9714C0.167317 11.2349 0.269638 11.4877 0.452033 11.6749L10.1651 21.5493C10.3529 21.7284 10.5998 21.8296 10.8572 21.8332Z"
          fill="#ED1B26"
        />
      </svg>
      {/* <p className='bg-red-400'>hello</p> */}
    </div>
  );
}

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};

type Props = {};

const servicedetails = (props: Props, context: any) => {
  const [productUrl, setProductUrl] = useState("");
  const [productDescription, setproductDescription] = useState(undefined);
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  // https://smartcare.com.np/multiservice/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/part-purja/Whirlpool-Washing-Machine-Water-Seal
  // const router = useRouter();
  // useEffect(() => {
  //   if (router?.query) {
  //     let id: any = router?.query.servicedetails;
  //     let productId = "";
  //     allServices?.map((items: any, index: any) => {
  //       if (items?.url_product_name === id) {
  //         productId = items?.product_id;
  //         return;
  //       }
  //     });
  //     setPostId(productId);
  //   }
  // }, [router.query]);

  const router = useRouter();

  useEffect(() => {
    const url: any = router?.query.servicedetails;
    setProductUrl(url);
    try {
      let data = new FormData();

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://smartcare.com.np/multiservice/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/service/${productUrl}`,
        // headers: {
        //   ...data.getHeaders()
        // },
        data: data,
      };

      axios(config).then((response) => {
        console.log(response.data.brands);
        const description = response.data.brands;
        setproductDescription(description);
      });
    } catch {
      (error: any) => console.log("Axios Error: ", error);
    }
  }, [productUrl]);
  console.log(productDescription, "product description");
  return (
    <>
      <Topbar />
      <div>
        <div className="serivedetail relative mb-[37px]">
          <img
            src="/../assets/servicedetails/banner.jpg"
            className="w-full h-[332px] object-cover"
            alt=""
          />

          <div className="absolute top-[57px]   text-white product_detail">
            <p className="text-[14px] leading-[17.01px] font-normal tracking-[0.02em]">
              appliance Repairs &gt; Microwave Ovens
            </p>
            <h1 className="text-[38px] leading-[46.17px] font-bold tracking-[0.02em] max-w-[804px] mt-[10px]">
              Best Microwave Oven Repair in Kathmandu SMART CARE{" "}
              <span className="bg-[#1F3F98] rounded-[60px] text-[29.75px] leading-[44.63px] font-bold tracking-[0.02em] text-[#F9F9F9] px-[20px]">
                4.5
              </span>
            </h1>
            <div className="mt-[8.97px]">
              <p className="text-[16px] leading-[33.04px] font-medium tracking-[0.02em]">
                100 Days Warranty on Repair
              </p>
              <p className="text-[16px] leading-[33.04px] font-medium tracking-[0.02em]">
                Doorstep Repair within 3 Hours
              </p>
              <p className="text-[16px] leading-[33.04px] font-medium tracking-[0.02em]">
                Experienced, Reliable, and Fully Trained Technician
              </p>
              <p className="text-[16px] leading-[33.04px] font-medium tracking-[0.02em]">
                100% Genuine Spare Parts with Genuine Rate
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-[80rem] m-auto">
          <div className="flex gap-[45px]">
            <div className="basis-[70%]  ">
              <h1 className="text-[23px] text-[#505056] leading-[32.89px] font-bold tracking-[0.01em]">
                {" "}
                Microwave Oven Repair and Services - Smart Care
              </h1>
              <p className="mt-[30px] text-[16px] text-[#000000d8] ">
                In the present era, almost every house has a microwave.
                Microwave Oven not only provides a different way of cooking, but
                it also brings out people's inner chefs. It uses microwave
                radiation to cause atomic movement in water, fat, sugar
                molecules, etc. to cook the food. That’s why it is faster than
                normal cooking. But Servicing and repairing a microwave oven
                might be a headache, especially if you work on a busy schedule.
                Finding microwave repair experts is indeed difficult and
                time-consuming. We don't want you or your everyday routines to
                suffer because of a faulty microwave.
              </p>
              <p className="text-[16px] text-[#000000d8] mt-[20px]">
                Thus, we at Smart Care Service are here to provide microwave
                repair and services that you can order online at any time and
                from anywhere.
              </p>
              <div className="mt-[20px]">
                <h2 className="text-[16px] text-[#505056] leading-[32.89px] font-bold tracking-[0.01em]">
                  {" "}
                  Types Of Microwave Oven We Repair
                </h2>
                <p className="text-[16px] text-[#000000d8]">
                  We offer Microwave Oven Repair and Services for the following
                  types:
                </p>
                <ul>
                  <li className="text-[16px] text-[#000000d8]">
                    {" "}
                    - Grill Microwave Oven
                  </li>
                  <li className="text-[16px] text-[#000000d8]">
                    {" "}
                    - Convection Microwave Oven
                  </li>
                </ul>
              </div>
              <div className="pt-[20px]">
                <h2 className="text-[#2591B2] text-[23px] leading-[22.88px] tracking-[0.01em] font-bold">
                  Our Services
                </h2>
                <p className="mt-[15px] text-[15px] text-[#505056]">
                  {" "}
                  Our Microwave Oven Repair and Services Include:
                </p>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Dead/No On
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    {" "}
                    If your microwave oven does not turn on, it could be due to
                    a connection fault, which you can resolve by simply
                    disconnecting and replugging. If this does not fix your
                    issue then something serious has happened as the fuse has
                    blown. You can reach out to Smartcare Repair and Services
                    for assistance.{" "}
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Keys not Working:
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    The unresponsiveness of the keys(button) can be due to a
                    variety of reasons ranging from loose panel connection to
                    damaged switch membrane and control board. If you observe
                    these kinds of problems, you can contact us at Smart Care
                    Repair and Services to solve the problem for you.
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Visible sparks inside Microwave oven:
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    {" "}
                    If you can see visible sparks inside the microwave oven
                    during its operation, you have to cut its power off
                    immediately. The cause of visible sparks can be due to
                    waveguide cover damage, burned diode out, or other issues.
                    These kinds of issues should be handled by only
                    professionals. Smartcare Repair And Services have
                    experienced technicians to solve such problems for you.
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Less/No Heating{" "}
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    The microwave oven seems operating but is not producing
                    enough heat to warm up food. This might be because of damage
                    to the heating component. You can call Smartcare Repair and
                    Services to fix such issues.
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Switching on/off by itself:
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    {" "}
                    Sometimes microwave oven operates independently by switching
                    the on/off button by itself. This is caused by various
                    reasons like a defect in the diode (Triac), improper
                    functioning of the control panel, or if the switch gets
                    stuck. You can give us a call at Smartcare Repair and
                    services to fix your problem for you.
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Other repairs:
                  </h2>
                  <p className="text-[16px] text-[#000000d8]">
                    If you are observing other problems that are not mentioned
                    above like, microwave door not opening, microwave oven
                    suddenly stops while heating, or any other issue, you can
                    contact Smartcare Repair and Services to solve it for you.
                  </p>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
                    Popular Brands Microwave Oven We Repair{" "}
                  </h2>
                  <ul className="text-[16px] text-[#000000d8]">
                    <li className="text-[16px] text-[#000000d8]">- LG </li>
                    <li className="text-[16px] text-[#000000d8]">- SAMSUNG</li>
                    <li className="text-[16px] text-[#000000d8]">
                      - WHIRLPOOL
                    </li>
                    <li className="text-[16px] text-[#000000d8]">- IFB </li>
                    <li className="text-[16px] text-[#000000d8]">
                      - ELECTROLUX
                    </li>
                    <li className="text-[16px] text-[#000000d8]">
                      {" "}
                      - SKYWORTH
                    </li>
                    <li className="text-[16px] text-[#000000d8]">- HISENSE</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="basis-[30%] ">
              <div className="selectProduct_category  pt-[39px]">
                <h1 className="text-white text-[24px] leading-[34.32px] font-bold tracking-[0.01em] text-center ">
                  Select Product Category
                </h1>
                <div className="w-[283px] h-[54px] bg-white mt-[50px] ml-[31px] flex items-center justify-between pr-[15.42px] pl-[19.96px]">
                  <p className="text-[#232323] text-[18px] leading-[25.74px] font-normal">
                    MWO Convection
                  </p>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13672 1L6.57903 7L1.13672 13"
                      stroke="#121212"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="w-[283px] h-[54px] bg-white mt-[18px] ml-[31px] flex justify-between items-center pl-[19.96px] pr-[15.42px]">
                  <p className="text-[#232323] text-[18px] leading-[25.74px] font-normal">
                    MWO Grill
                  </p>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.13672 1L6.57903 7L1.13672 13"
                      stroke="#121212"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFCFE] pt-[38px] pb-[52px] mt-[30px] w-[80rem] m-auto">
        <div className="container mx-auto pl-[10px] sm:pl-[0px]">
          <div className="flex items-center justify-between pr-[10px]">
            <h1 className="text-[#2591B2] md:text-[20px] text-[17px] leading-[38.88px] font-bold">
              Popular Services Near you
            </h1>
            <p className="sm:hidden text-[#BB243F]/[0.5] text-[12px] leading-[18px] font-normal cursor-pointer">
              View All
            </p>
          </div>
          <Slider {...settings} className="mt-[28.5px] ">
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%] ">
                <img
                  src="/../assets/microwave.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Microwave Oven
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/deepfridge.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Deep Fridge-VISI Cooler
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/geyser.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Geyser
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/refrigerator.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Refrigerator
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/chimney.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Chimney
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/chimney.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Chimney
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/homeheater.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Home Heater
              </p>
            </div>
            <div>
              <div className="bg-white border border-[#EDEDED] rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]">
                <img
                  src="/../assets/vaccumeCleaner.png"
                  alt=""
                  className="w-[122px] h-[72px] object-cover"
                />
              </div>
              <p className="text-center text-[#000000] text-[10px] md:text-[15px] leading-[21.09px] font-normal">
                Vacume Cleaner
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex w-full">
        <div className="basis-[25%] bg-[#2591B2]">
          <div className="container mx-auto grid md:grid-cols-1 grid-cols-1 text-white pt-[65px] pb-[75px] md:gap-[86px]">
            <div className="flex items-center justify-center flex-col">
              <h1 className=" text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
                {" "}
                <CountUp end={15324} duration={3} enableScrollSpy />+
              </h1>

              <p className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
                Complaints
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className=" text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
                <CountUp end={9000} duration={3.1} enableScrollSpy /> +
              </h1>
              <p className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
                Customers
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className=" text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out">
                <CountUp end={125} duration={3} enableScrollSpy />+
              </h1>
              <p className=" text-[18px]  md:text-[22px] leading-[33px] font-normal">
                Technicians
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[75%] flex justify-center items-center pl-[101px] pr-[100px] py-[50px] shadow-lg">
          <div>
            <h2 className="text-[#2591B2] text-[23px] leading-[32.89px] font-semibold tracking-[0.01em] text-center">
              Why Choose Smart Care
            </h2>
            <p className="text-[#505056] text-[15px] leading-[24px] font-normal tracking-[0.01em] mt-[17px] text-center">
              Smart Care Service Group recognizes the problems that a broken
              microwave oven can create, as well as the need of getting it back
              in running condition. That's why, we provide quick, reliable, and
              long-lasting Microwave oven Repair and Services.
            </p>
            <div className="bg-[#EDEDED] w-full h-[1px] my-[32px]"></div>
            <div className="space-y-[36px]">
              <div className="flex items-center gap-[31px]">
                <div>
                  <svg
                    width="48"
                    height="40"
                    viewBox="0 0 48 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4394 0.608925C13.0017 1.28214 10.7163 3.05786 9.82331 5.78974C9.58325 6.50198 9.56404 6.69712 9.56404 8.03378C9.57365 9.17532 9.61205 9.6534 9.76569 10.1998L9.94814 10.912H9.50643C8.74783 10.912 8.32533 11.4194 8.33493 12.3463C8.33493 12.8048 8.58459 14.0927 8.9975 15.7709C9.18955 16.5807 9.61205 17.0587 10.1114 17.0587C10.3995 17.0587 10.4667 17.0978 10.5051 17.2734C10.966 19.9175 11.2733 20.4834 13.2226 22.142L13.6163 22.4835L13.5203 23.2835C13.4722 23.7323 13.357 24.386 13.2706 24.747L13.1073 25.4007L8.87267 26.8252C5.99193 27.7911 4.38832 28.3863 3.84098 28.679C2.40061 29.4498 1.00826 31.0206 0.480123 32.4548C0.0960245 33.4793 0 34.3184 0 36.5039C0 38.3869 0.0192049 38.6016 0.192049 38.8845C0.58575 39.548 -0.893028 39.4992 18.5807 39.4992C34.7417 39.4992 36.2397 39.4894 36.4893 39.3431C36.8542 39.1187 37.0655 38.7187 37.0655 38.2308C37.0655 37.7235 36.9982 37.704 38.6499 38.7284C39.3412 39.148 39.975 39.4992 40.0614 39.4992C40.2055 39.4992 42.9134 37.8601 44.0945 37.0503C45.6885 35.9673 46.8696 34.6989 47.4361 33.4891C47.9835 32.3475 48.0219 31.889 47.9931 27.6838L47.9643 23.8885L47.6762 23.6055C47.4361 23.3616 46.7639 23.0982 43.8448 22.0835C41.8955 21.4102 40.2055 20.8639 40.0902 20.8639C39.7542 20.8639 32.7348 23.2835 32.5235 23.4689C32.1298 23.8299 32.0722 24.1812 32.0722 26.191C32.0722 27.6741 32.0434 28.0936 31.957 28.0643C31.8897 28.0351 30.0749 27.4301 27.9239 26.7179C23.4396 25.2251 23.9389 25.5471 23.67 23.947C23.43 22.4932 23.4012 22.5615 24.3998 21.6834C25.7538 20.4834 26.2531 19.5565 26.522 17.771L26.618 17.0587H26.9349C27.3478 17.0587 27.7799 16.6978 27.9815 16.1709C28.1256 15.8196 28.308 14.9806 28.7305 12.8536C28.8746 12.1218 28.7689 11.634 28.3752 11.234C28.116 10.9706 27.9815 10.912 27.6647 10.912C27.4438 10.912 27.271 10.8827 27.271 10.8437C27.271 10.8144 27.4438 10.2486 27.6551 9.59486C28.817 5.94585 28.4521 3.56521 26.5796 2.70662C26.1283 2.50173 25.9266 2.47246 24.7263 2.4627L23.382 2.45294L22.9211 2.00414C22.3929 1.46751 21.6055 1.04798 20.6261 0.755276C19.7138 0.491844 17.4765 0.413788 16.4394 0.608925ZM19.9539 1.60411C20.9333 1.79924 21.8456 2.2383 22.3065 2.73589C22.6138 3.06762 22.6714 3.1847 22.633 3.43837C22.6042 3.60424 22.4793 4.4921 22.3641 5.40923L22.1529 7.08738L21.4231 7.24349C21.0198 7.3313 19.8291 7.4679 18.7728 7.54595C16.1801 7.74108 15.2967 7.9167 14.1924 8.48259C13.8851 8.6387 13.6355 8.74603 13.6355 8.71675C13.6355 8.68748 13.7219 8.49235 13.8275 8.2777C14.0676 7.79962 14.0676 7.67279 13.8275 7.44838C13.6451 7.28252 13.5875 7.28252 13.2706 7.3996C12.3392 7.73133 11.4461 8.54113 10.9852 9.46802L10.7259 9.98513L10.6395 9.69243C10.5915 9.52656 10.5243 8.94116 10.4955 8.37527C10.3995 6.40442 10.87 5.13604 12.1951 3.78961C13.0593 2.90175 13.9332 2.35538 15.1431 1.94559C16.5642 1.45776 18.5711 1.32116 19.9539 1.60411ZM26.0322 3.5457C27.511 4.08231 27.7607 5.94585 26.7812 9.17532C26.6276 9.70218 26.474 10.1315 26.4548 10.1315C26.4356 10.1315 26.2819 9.85829 26.1187 9.51681C25.9554 9.18508 25.725 8.81432 25.6097 8.68748C25.3217 8.36551 24.9568 8.43381 24.7743 8.83384C24.6975 9.00946 24.6111 9.15581 24.5823 9.15581C24.5535 9.15581 24.4478 8.95092 24.3518 8.69724C24.2462 8.44357 23.9293 7.99476 23.6412 7.6923L23.1227 7.15568L23.3436 5.36044C23.5356 3.76034 23.5836 3.56521 23.7565 3.49691C24.1022 3.35056 25.5809 3.38959 26.0322 3.5457ZM22.9691 8.346C23.2955 8.68748 23.6604 9.44851 23.8045 10.0827C23.8717 10.3461 23.9677 10.6193 24.0253 10.6876C24.2078 10.912 24.5247 10.8144 24.928 10.4144L25.3313 10.0046L25.5425 10.6779C25.7346 11.3023 25.7538 11.5364 25.7442 13.6927C25.725 17.2344 25.5137 18.7369 24.9184 19.6833C24.4959 20.3565 22.7002 21.9469 21.2406 22.942L20.4532 23.4787H18.6096C16.4298 23.4689 16.5834 23.5275 14.9126 22.2396C12.608 20.4736 12.0127 19.7614 11.667 18.3759C11.3309 17.0197 11.2061 11.9365 11.4749 10.8632C11.6286 10.2778 12.0319 9.429 12.2527 9.24362C12.3584 9.15581 12.368 9.23386 12.3199 9.62413C12.2431 10.2876 12.3392 10.5998 12.6272 10.6779C12.8289 10.7266 12.9729 10.6388 13.4434 10.19C14.1252 9.55583 15.1143 9.04848 16.1129 8.82408C16.497 8.73627 17.7261 8.59967 18.8496 8.51186C19.9635 8.43381 21.1254 8.30697 21.4135 8.23868C22.3065 8.01427 22.681 8.04354 22.9691 8.346ZM10.0442 12.0438L10.3706 12.1999L10.3899 13.8976C10.3995 14.8342 10.4091 15.6928 10.4091 15.8099C10.4187 16.1221 10.1402 16.1416 10.0058 15.8489C9.94814 15.7123 9.82331 15.2147 9.73689 14.7464C9.65047 14.2781 9.49683 13.5268 9.4008 13.078C9.29517 12.6292 9.23756 12.1804 9.26637 12.0731C9.34319 11.8487 9.61205 11.8389 10.0442 12.0438ZM27.8279 12.1901C27.8471 12.3267 27.7511 12.9219 27.6263 13.5073C27.4918 14.0927 27.3382 14.844 27.271 15.1757C27.1365 15.8489 26.9733 16.1514 26.81 16.0441C26.7236 15.9953 26.6948 15.4099 26.6948 14.122V12.278L27.0117 12.0828C27.4342 11.8096 27.7895 11.8584 27.8279 12.1901ZM43.2687 22.9225C44.9971 23.5177 46.5623 24.0641 46.7351 24.1324L47.052 24.269V27.8204C47.052 29.7718 47.0136 31.6158 46.956 31.8987C46.7735 32.8841 46.2454 33.8013 45.2852 34.7769C44.3729 35.6941 43.5951 36.2697 41.3674 37.6357L40.0422 38.4455L38.4386 37.4503C37.5456 36.9039 36.4893 36.2112 36.0668 35.9087C35.1066 35.2062 34.0311 34.0452 33.6278 33.2744C33.0901 32.25 33.0324 31.7621 33.0324 27.8107V24.2787L33.2533 24.1812C33.5894 24.025 39.8886 21.8591 40.0038 21.8493C40.0614 21.8395 41.5306 22.3274 43.2687 22.9225ZM15.1719 23.6543C15.4119 23.8299 15.8248 24.0836 16.0841 24.2104C16.545 24.4446 16.6314 24.4543 18.5327 24.4543C20.7605 24.4543 20.7893 24.4446 21.9128 23.664C22.537 23.225 22.5658 23.2152 22.6042 23.4299C22.6234 23.547 22.7194 24.0348 22.8058 24.5226C22.9018 25.0007 22.9979 25.4886 23.0171 25.6056C23.1227 26.074 21.4231 27.6838 20.2516 28.2302C18.3887 29.0888 16.545 28.5424 14.7014 26.5618C14.1444 25.9666 14.01 25.7813 14.0676 25.6154C14.0964 25.4983 14.2212 24.9129 14.3365 24.308C14.4613 23.6153 14.5765 23.2445 14.6341 23.2835C14.6918 23.3128 14.9318 23.4787 15.1719 23.6543ZM24.4382 27.6253L25.0912 28.4839L23.8045 30.4352C23.1035 31.4987 22.5081 32.3768 22.4697 32.3768C22.4409 32.3768 21.7784 31.7231 21.0006 30.9328L19.5794 29.4888L19.9923 29.362C20.991 29.0498 22.4313 28.0643 23.2091 27.1472C23.4588 26.8545 23.6893 26.6496 23.7181 26.6886C23.7565 26.7374 24.0733 27.157 24.4382 27.6253ZM14.1636 27.4106C14.9702 28.2399 15.9209 28.9034 16.8139 29.2546L17.4669 29.5083L16.0457 30.9523L14.6245 32.3963L13.7123 31.0401C13.213 30.2986 12.6272 29.4205 12.4064 29.0985L12.0127 28.4936L12.6944 27.6058C13.0689 27.1179 13.405 26.7179 13.4338 26.7179C13.4722 26.7179 13.7987 27.0301 14.1636 27.4106ZM12.0031 26.8643C12.0031 26.8935 11.158 28.0155 10.1306 29.3522C8.16208 31.928 7.98924 32.2304 8.11407 33.0012C8.14288 33.2354 8.72863 34.455 9.50643 35.938L10.8316 38.4747L6.02074 38.504C3.37046 38.5138 1.14269 38.504 1.07547 38.4747C0.989053 38.4455 0.960245 37.9381 0.960245 36.4063C0.960245 34.0647 1.06587 33.4208 1.59401 32.2987C2.04532 31.3426 3.17841 30.1523 4.17707 29.5864C4.60918 29.3425 6.12636 28.7766 8.35413 28.0253C12.0031 26.7862 12.0031 26.7862 12.0031 26.8643ZM28.6153 27.9668L32.0242 29.1181L32.0818 30.523C32.149 32.1134 32.2834 32.7476 32.8212 33.7915C33.2437 34.6208 34.3672 35.8307 35.385 36.5819L36.1052 37.1088L36.0764 37.7918L36.0572 38.4747L31.1888 38.504C28.5001 38.5138 26.3107 38.4943 26.3107 38.465C26.3107 38.4357 26.762 37.5381 27.3094 36.4844C29.009 33.2451 28.9994 33.2549 28.9994 32.7183C28.9994 32.4353 28.9226 32.0743 28.8266 31.889C28.7305 31.7036 27.9623 30.6499 27.1173 29.5473C25.1008 26.913 25.024 26.8155 25.12 26.8252C25.168 26.8252 26.7428 27.3423 28.6153 27.9668ZM12.8673 31.528C14.4805 33.9281 14.4901 33.9281 15.2199 33.2451C15.4599 33.0207 15.6712 32.8549 15.6904 32.8744C15.7096 32.8939 15.8729 33.1378 16.0553 33.4208L16.3818 33.9281L16.1705 36.0551C16.0457 37.2259 15.9497 38.2601 15.9497 38.3479C15.9401 38.5138 15.7768 38.5235 13.9332 38.5235H11.9358L10.5147 35.8112C9.4008 33.694 9.09352 33.0207 9.08392 32.7183C9.07432 32.3573 9.17034 32.1914 10.217 30.8352C10.8412 30.0157 11.3789 29.3717 11.4173 29.401C11.4461 29.4303 12.0991 30.3864 12.8673 31.528ZM26.7428 30.6303C27.9527 32.2207 28.0392 32.3573 28.0392 32.7183C28.0392 32.9037 27.5302 33.9769 26.618 35.7429L25.1968 38.4747L23.1803 38.504L21.1638 38.5235L20.9429 36.2307L20.7221 33.9281L21.0774 33.3915C21.279 33.0988 21.4615 32.8646 21.4999 32.8646C21.5383 32.8646 21.74 33.0403 21.9416 33.2549C22.6234 33.9671 22.6426 33.9574 24.2558 31.4987C25.0336 30.3181 25.6962 29.3522 25.725 29.3522C25.7538 29.362 26.2147 29.9279 26.7428 30.6303ZM20.7413 32.1134C20.7413 32.1524 20.5589 32.4548 20.338 32.7671L19.9347 33.3525H18.5423H17.1404L16.7371 32.7378L16.3434 32.1329L17.4573 30.9913L18.5807 29.84L19.6562 30.9328C20.2516 31.5377 20.7413 32.0646 20.7413 32.1134ZM19.8195 34.7379C19.9155 35.4209 20.1651 38.0454 20.1651 38.2894V38.5235H18.5327C17.6397 38.5235 16.9003 38.5138 16.9003 38.4943C16.9003 38.4747 16.9867 37.6162 17.0924 36.5722C17.198 35.5282 17.2844 34.6013 17.2844 34.5038C17.2844 34.3477 17.3996 34.3281 18.5231 34.3281H19.7715L19.8195 34.7379Z"
                      fill="#2591B2"
                    />
                  </svg>
                </div>
                <div className="pt-[20px]">
                  <h2 className="text-[#2591B2] text-[16px] leading-[22.88px] font-bold tracking-[0.01em]">
                    Validated Professionas
                  </h2>
                  <p className="text-[#505056] text-[15px] leading-[24px] font-normal tracking-[0.01em] mt-[6px]">
                    Smart Care Service supports online payments using eSewa,
                    Khalti, and other similar services to eliminate the risk of
                    fraud and unnecessary trouble.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[31px]">
                <div>
                  <svg
                    width="44"
                    height="48"
                    viewBox="0 0 44 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.109 0.711571C32.7728 1.31293 30.9017 3.06232 30.2484 5.24907L30.1156 5.68642L22.0442 5.74109C14.4489 5.79576 13.9507 5.80669 13.5853 6.0035C13.0428 6.28778 12.3895 6.92194 12.1127 7.43582C11.8802 7.86224 11.8692 7.98251 11.836 12.7605L11.8027 17.6589H7.52901C3.34385 17.6589 3.25528 17.6589 2.83455 17.8994C2.55775 18.0525 2.32525 18.304 2.18131 18.5992C1.95987 19.0365 1.95987 19.2224 1.98202 24.9079C2.01523 30.6263 2.01523 30.7684 2.24774 31.0636C2.36953 31.2276 2.61311 31.4682 2.77919 31.5884C3.07813 31.818 3.15563 31.818 13.6739 31.818H24.2696L24.6129 31.5775C24.8011 31.4463 25.0557 31.1948 25.1664 31.0308C25.3657 30.7356 25.3768 30.4185 25.3768 24.7439C25.3768 18.8506 25.3768 18.7632 25.1443 18.457C25.0225 18.293 24.7457 18.0415 24.5464 17.8994L24.1811 17.6589H18.7116H13.2421L13.2753 13.0339C13.3085 8.61666 13.3196 8.39799 13.5299 8.03717C13.6628 7.82943 13.9285 7.56702 14.1389 7.43582C14.5153 7.21714 14.6814 7.21714 22.2213 7.21714H29.9163L29.9938 7.8841C30.0934 8.81347 30.2706 9.39296 30.6913 10.2239C31.5992 12.0171 33.3375 13.34 35.264 13.7337L35.9504 13.8758V26.5917V39.3077L24.635 39.2858L13.3085 39.253L13.2753 36.5305C13.2531 34.1797 13.2199 33.7752 13.0649 33.6002C12.8324 33.3378 12.312 33.3488 12.0352 33.6221C11.8249 33.8299 11.8138 33.9829 11.8138 39.3951C11.8138 45.8132 11.7917 45.6383 12.7549 46.6005C13.7403 47.5736 13.0206 47.5189 24.8896 47.4861L35.2307 47.4533L35.7954 47.1581C36.4154 46.841 36.8251 46.4146 37.2015 45.7148L37.4451 45.2665L37.4783 29.5766L37.5005 13.8867L38.1758 13.7555C41.1431 13.1979 43.4682 10.3879 43.5014 7.32648C43.5125 6.10191 43.3575 5.39121 42.8149 4.26504C41.442 1.4332 38.1537 -0.0865898 35.109 0.711571ZM38.6409 2.3407C40.4899 3.05139 41.8074 4.80079 42.0067 6.7798C42.2392 9.22895 40.3902 11.7328 37.9433 12.2904C34.9872 12.9683 31.9867 10.9455 31.5217 7.97157C31.1342 5.48962 32.6953 3.02953 35.1754 2.22043C36.039 1.93615 37.744 2.00175 38.6409 2.3407ZM23.8821 20.283V21.3763H13.696H3.50993V20.283V19.1896H13.696H23.8821V20.283ZM23.8821 23.6177V24.3284H13.696H3.50993V23.6177V22.9071H13.696H23.8821V23.6177ZM23.8821 28.1006V30.342H13.696H3.50993V28.1006V25.8592H13.696H23.8821V28.1006ZM35.9504 42.8174C35.9504 45.0369 35.8729 45.3649 35.2307 45.7586C34.8764 45.9772 34.7104 45.9772 24.6461 45.9772C14.6925 45.9772 14.4046 45.9663 14.0614 45.7586C13.3971 45.3649 13.3196 45.0588 13.2753 42.8283L13.231 40.8384H24.5907H35.9504V42.8174Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M38.5828 4.3415C38.4832 4.41804 37.841 5.33647 37.1435 6.36424L35.8813 8.25578L35.4938 7.86216C34.8184 7.16241 34.4087 7.064 33.9327 7.46855C33.5119 7.81843 33.678 8.22298 34.6302 9.18515C35.5491 10.1254 35.9034 10.3113 36.2799 10.1145C36.6453 9.91771 39.7122 5.30367 39.7122 4.95379C39.7122 4.3743 39.0146 4.00256 38.5828 4.3415Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M5.25606 27.576C4.94604 27.9259 4.9239 28.2102 5.17855 28.5163L5.39999 28.8115H8.00187C10.4487 28.8115 10.6038 28.8006 10.8141 28.5928C10.9359 28.4726 11.0356 28.2539 11.0356 28.1008C11.0356 27.9478 10.9359 27.7291 10.8141 27.6088C10.6038 27.4011 10.4487 27.3901 8.01294 27.3901C5.68786 27.3901 5.41106 27.412 5.25606 27.576Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M12.0343 27.6088C11.7685 27.8712 11.7464 28.232 11.99 28.571C12.145 28.8006 12.2336 28.8115 13.6507 28.8115C14.9904 28.8115 15.1565 28.7897 15.3558 28.5928C15.4776 28.4726 15.5772 28.2539 15.5772 28.1008C15.5772 27.9478 15.4776 27.7291 15.3558 27.6088C15.1565 27.412 14.9904 27.3901 13.695 27.3901C12.3996 27.3901 12.2335 27.412 12.0343 27.6088Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M23.7347 41.6255C22.4061 41.9754 21.9521 43.7467 22.9375 44.7198C24.2551 46.0209 26.4694 44.7963 26.0708 42.9813C25.8383 41.9426 24.8086 41.3413 23.7347 41.6255Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M8.2351 5.93794C8.06902 6.11288 8.04688 6.45182 8.04688 8.33243C8.04688 10.3661 8.05795 10.5301 8.26831 10.716C8.37903 10.8144 8.61154 10.9019 8.76654 10.9019C8.92155 10.9019 9.15406 10.8144 9.26478 10.716C9.47514 10.5301 9.48621 10.3661 9.48621 8.31056C9.48621 6.30969 9.46407 6.09101 9.28692 5.92701C9.01012 5.68646 8.45653 5.6974 8.2351 5.93794Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M2.64592 7.66563C2.47985 7.77497 2.40234 7.93897 2.40234 8.19045C2.40234 8.49659 2.60164 8.7262 3.98562 10.0929C4.93779 11.0223 5.65746 11.6455 5.79033 11.6455C6.19998 11.6455 6.49892 11.3394 6.49892 10.902C6.49892 10.5412 6.37713 10.3881 4.97101 8.99954C3.36559 7.41415 3.1663 7.30481 2.64592 7.66563Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M16.14 9.61162C15.6085 9.90683 15.4424 10.5301 15.7414 11.0986C16.2618 12.0936 17.7897 11.6781 17.7897 10.5519C17.7897 9.69909 16.9039 9.19614 16.14 9.61162Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M19.0302 9.73191C18.6427 10.049 18.5098 10.4973 18.6648 10.9018C19.0523 11.9077 20.4031 11.9077 20.7906 10.9018C21.0453 10.2567 20.4585 9.45857 19.7277 9.45857C19.4952 9.45857 19.2406 9.55697 19.0302 9.73191Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M21.9874 9.77584C21.301 10.4537 21.766 11.6455 22.7182 11.6455C22.9396 11.6455 23.2164 11.5908 23.3382 11.5362C23.5818 11.405 23.8807 10.8692 23.8807 10.5631C23.8807 9.6009 22.6739 9.09795 21.9874 9.77584Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M0.817521 13.2966C0.341432 13.5699 0.418935 14.4118 0.928239 14.6086C1.07217 14.6633 2.07971 14.707 3.16475 14.707C4.9916 14.707 5.15768 14.6852 5.43448 14.4774C5.78878 14.2041 5.82199 13.7121 5.50091 13.395C5.29054 13.1872 5.13554 13.1763 3.15368 13.1763C1.85827 13.1763 0.939311 13.231 0.817521 13.2966Z"
                      fill="#2591B2"
                    />
                  </svg>
                </div>
                <div className="pt-[20px]">
                  <h2 className="text-[#2591B2] text-[16px] leading-[22.88px] font-bold tracking-[0.01em]">
                    Online Payment
                  </h2>
                  <p className="text-[#505056] text-[15px] leading-[24px] font-normal tracking-[0.01em] mt-[6px]">
                    Smart Care Service supports online payments using eSewa,
                    Khalti, and other similar services to eliminate the risk of
                    fraud and unnecessary trouble.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[31px]">
                <div>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16.1058V32.2027L5.39373 37.5743L10.7784 42.9369H20.1498H29.5212L32.209 44.464L34.8969 46L38.0808 44.1855C41.842 42.0476 42.311 41.7333 43.2671 40.7541C44.3314 39.6583 44.9718 38.6432 45.4859 37.215C45.991 35.8227 46 35.661 46 28.6456V22.1871H44.2051C42.2659 22.1871 41.3549 22.0793 40.2725 21.711C38.2882 21.0373 36.6286 19.7528 35.42 17.9473C35.1584 17.561 34.9329 17.2556 34.9059 17.2466C34.8788 17.2466 34.5902 17.6149 34.2745 18.073C32.8314 20.1121 31.1357 21.2978 28.7725 21.9356C28.2043 22.0883 27.7353 22.1242 25.9133 22.1601L23.7216 22.205V28.2863C23.7216 32.1578 23.7576 34.655 23.8208 35.167C24.0824 37.2958 25.0204 39.2451 26.5086 40.7811L27.122 41.4099H19.4643H11.8157L11.8337 39.9547L11.8608 38.4905L16.7133 38.4636L21.5569 38.4456L21.5388 31.8164L21.5118 25.1963L13.7369 25.1693L5.95294 25.1513V28.1156V31.0799H3.69804H1.44314L1.46118 16.2765L1.48824 1.48214H17.8137H34.1392L34.1663 8.14724L34.1843 14.8213H34.9059H35.6274V7.41066V3.8147e-06H17.8137H0V16.1058ZM37.2149 21.8457C39.0549 23.0584 40.7416 23.5704 43.2671 23.6872L44.5659 23.7411L44.5388 29.5438C44.5027 35.1849 44.5027 35.3646 44.3043 36.0473C43.8804 37.5653 43.0145 39.0115 41.9322 40.0086C41.1925 40.6913 41.0212 40.7991 37.7651 42.6585L34.8969 44.2933L31.9024 42.5866C28.5922 40.7003 28.52 40.6553 27.6992 39.8559C26.662 38.8409 26.0035 37.754 25.5525 36.3167L25.3 35.5263L25.2729 29.6337L25.2459 23.7411L26.4906 23.6872C28.0239 23.6153 29.0431 23.4446 30.0894 23.0764C31.6769 22.5284 33.3094 21.4774 34.3376 20.3546L34.8608 19.7797L35.7267 20.6061C36.1957 21.0642 36.8722 21.6212 37.2149 21.8457ZM20.0235 31.8434V37.0084L15.9467 36.9904L11.8608 36.9635L11.8337 34.0172L11.8157 31.0799H9.60588H7.39608V28.8791V26.6784H13.7098H20.0235V31.8434ZM10.3725 36.4425V40.3769L6.49412 36.5144C4.35647 34.3945 2.61569 32.6249 2.61569 32.5889C2.61569 32.544 4.35647 32.5171 6.49412 32.5171H10.3725V36.4425Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M36.0796 30.3163L31.164 35.2118L29.9463 33.9992L28.7287 32.7865L28.2055 33.3075L27.6914 33.8195L29.4322 35.5532L31.164 37.2778L36.6208 31.8433L42.0777 26.4089L41.5816 25.9148C41.311 25.6453 41.0675 25.4208 41.0404 25.4208C41.0134 25.4208 38.7855 27.6215 36.0796 30.3163Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M41.5625 32.3554C41.5354 35.0412 41.5264 35.0861 41.2919 35.7418C40.9041 36.7928 40.1645 37.7719 39.3076 38.3378L38.9648 38.5623L39.3076 39.1732C39.488 39.5145 39.6864 39.793 39.7405 39.793C39.948 39.793 41.0845 38.8408 41.5084 38.3108C42.0856 37.6012 42.6268 36.5323 42.8433 35.6969C43.0056 35.0861 43.0237 34.6908 43.0237 32.3194V29.6426H42.3111H41.5986L41.5625 32.3554Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M8.85909 28.8521L8.88615 29.5977H13.7116H18.5371L18.5642 28.8521L18.5912 28.1155H13.7116H8.83203L8.85909 28.8521Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M13.3477 31.7985V32.5171H15.9633H18.579V31.7985V31.0799H15.9633H13.3477V31.7985Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M13.3477 34.7628V35.4814H15.9633H18.579V34.7628V34.0442H15.9633H13.3477V34.7628Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 5.16498V7.36572H17.8121H31.2062V5.16498V2.96424H17.8121H4.41797V5.16498ZM29.6729 5.16498V5.9285H17.8121H5.9513V5.16498V4.40146H17.8121H29.6729V5.16498Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 11.0934V11.8569H16.3239H28.2388L28.2117 11.1114L28.1846 10.3748L16.3058 10.3479L4.41797 10.3299V11.0934Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M29.6758 11.0937V11.8662L30.4244 11.8393L31.164 11.8123V11.0937V10.3751L30.4244 10.3481L29.6758 10.3212V11.0937Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 14.0578V14.8213H16.3239H28.2388L28.2117 14.0757L28.1846 13.3392L16.3058 13.3122L4.41797 13.2942V14.0578Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M29.6758 14.0576V14.8301L30.4244 14.8031L31.164 14.7762V14.0576V13.339L30.4244 13.312L29.6758 13.2851V14.0576Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 17.0221V17.7856L16.3058 17.7677L28.1846 17.7407L28.2117 16.9952L28.2388 16.2586H16.3239H4.41797V17.0221Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M29.6758 17.0219V17.7944L30.4244 17.7675L31.164 17.7405V17.0219V16.3033L30.4244 16.2764L29.6758 16.2494V17.0219Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 19.9865V20.75L11.4803 20.732L18.5337 20.7051V19.9865V19.2679L11.4803 19.2409L4.41797 19.223V19.9865Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M20.0234 19.9863V20.7588L20.7721 20.7318L21.5117 20.7049V19.9863V19.2677L20.7721 19.2407L20.0234 19.2138V19.9863Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M4.41797 22.9503V23.7139L11.4803 23.6959L18.5337 23.669V22.9503V22.2317L11.4803 22.2048L4.41797 22.1868V22.9503Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M20.0234 22.9506V23.7231L20.7721 23.6962L21.5117 23.6692V22.9506V22.232L20.7721 22.2051L20.0234 22.1781V22.9506Z"
                      fill="#2591B2"
                    />
                  </svg>
                </div>
                <div className="pt-[20px]">
                  <h2 className="text-[#2591B2] text-[16px] leading-[22.88px] font-bold tracking-[0.01em]">
                    Warranty on Service
                  </h2>
                  <p className="text-[#505056] text-[15px] leading-[24px] font-normal tracking-[0.01em] mt-[6px]">
                    {" "}
                    Smart Care offers a 30-day warranty on spare parts and a
                    100-day service warranty on washing machine repairs since we
                    take full responsibility for our work.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[31px]">
                <div>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1992 0.0919189C14.5424 0.217842 13.5619 0.739529 12.9412 1.29719C12.1495 2.00776 11.5738 2.25961 10.7551 2.25961C9.93651 2.25961 8.89298 1.93581 8.04736 1.42312C7.01282 0.80249 6.47306 0.58662 5.91531 0.577625C5.25861 0.577625 4.77283 0.883442 4.47596 1.49507C3.83725 2.79029 4.6109 5.31777 6.74294 8.85264C7.12977 9.49125 7.66953 10.3457 7.93941 10.7415L8.43418 11.4611L7.86744 11.524C6.34712 11.6769 5.29459 12.8912 5.40254 14.3753C5.45652 15.1039 5.7174 15.6435 6.25716 16.1562L6.66198 16.534L5.82535 17.4874C4.56592 18.9176 4.03516 19.6551 4.03516 19.9699C4.03516 20.5456 4.8358 20.9054 5.2676 20.5186C5.36656 20.4377 5.79837 19.934 6.23017 19.4033C6.65298 18.8726 7.33668 18.0991 7.7325 17.6763L8.46117 16.9118L16.6115 16.8848L24.7709 16.8578L25.2207 16.6509C26.588 16.0213 27.2088 14.4383 26.597 13.1161C26.1562 12.1626 25.3736 11.614 24.3211 11.524L23.7633 11.4881L24.3211 10.6605C24.6269 10.2108 25.1847 9.33835 25.5535 8.71772C28.2433 4.24741 28.6931 1.36915 26.8309 0.658577C26.3002 0.460697 25.8144 0.541647 24.9868 0.982382C23.0616 2.01676 22.333 2.2776 21.3974 2.26861C20.6417 2.25961 20.012 1.97179 19.2383 1.29719C17.9969 0.190859 16.6745 -0.195908 15.1992 0.0919189ZM17.2682 1.7739C17.4931 1.87284 17.9609 2.20564 18.3028 2.51146C20.048 4.06752 22.135 4.22943 24.456 2.98817C26.3002 1.99877 26.3362 1.98977 26.4711 2.34956C26.597 2.70035 26.2822 3.86964 25.7424 5.08391C25.1397 6.4331 24.2941 7.89921 22.9897 9.86003L21.9011 11.506H20.9296H19.958V9.51824C19.958 7.51245 19.922 7.27859 19.6072 7.03573C19.3643 6.84685 18.8965 6.90082 18.6536 7.14367L18.4287 7.35954V9.43729V11.506H16.1437H13.8498L13.8228 9.42829L13.7958 7.35054L13.5439 7.13467C13.238 6.87383 12.8602 6.85584 12.5453 7.10769L12.3114 7.28758V9.40131V11.506H11.3219H10.3413L9.70261 10.5796C8.09234 8.26799 6.47306 5.37174 6.02326 3.99557C5.78937 3.276 5.69941 2.62839 5.78037 2.30458C5.82535 2.09771 5.86134 2.07972 6.11322 2.15168C6.25716 2.19665 6.57202 2.34056 6.80591 2.47548C7.03981 2.6104 7.43563 2.83527 7.67852 2.97018C8.25426 3.30298 9.36976 3.66277 10.1704 3.7707C11.4388 3.95059 12.7612 3.51885 13.8228 2.57442C14.7224 1.76491 15.3521 1.50407 16.2697 1.55803C16.5935 1.58502 17.0433 1.67496 17.2682 1.7739ZM24.8608 13.305C24.9958 13.4309 25.1667 13.6647 25.2386 13.8266C25.4905 14.4293 25.0227 15.2028 24.3391 15.3287C24.1771 15.3557 20.3718 15.3737 15.8649 15.3557C7.99338 15.3287 7.66953 15.3197 7.42664 15.1578C6.72495 14.6811 6.76093 13.6557 7.48061 13.215C7.75949 13.0351 7.9574 13.0351 16.1977 13.0531L24.6179 13.0801L24.8608 13.305Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M26.2344 19.2771C25.4788 19.484 24.858 20.1136 24.6331 20.9051C24.5612 21.166 24.5432 24.449 24.5612 32.8229L24.5882 44.381L24.7861 44.7408C25.011 45.1635 25.4518 45.5952 25.8926 45.8291C26.1894 45.991 26.6033 46 35.2934 46C43.9835 46 44.3973 45.991 44.6941 45.8291C45.1349 45.5952 45.5758 45.1635 45.8006 44.7408L45.9986 44.381V32.5981V20.8152L45.8006 20.4464C45.5758 20.0147 45.072 19.5469 44.6132 19.3401C44.3253 19.2141 43.3987 19.1962 35.4733 19.1782C28.5734 19.1692 26.5673 19.1872 26.2344 19.2771ZM44.2983 20.9771L44.5142 21.2289V32.6071V43.9942L44.2533 44.2551L43.9925 44.5159H35.2934H26.5943L26.3334 44.2551L26.0725 43.9942V32.697C26.0725 25.4474 26.1085 21.3279 26.1625 21.175C26.3514 20.6713 26.0815 20.6803 35.4553 20.7072L44.0824 20.7252L44.2983 20.9771Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M29.2209 23.2167C28.96 23.3516 28.7441 23.5495 28.6092 23.7834C28.4113 24.1341 28.4113 24.2061 28.4292 26.1759L28.4562 28.2087L28.6991 28.5235C29.1939 29.1711 28.897 29.1441 35.4191 29.1171C41.1585 29.0902 41.2665 29.0902 41.5094 28.9013C41.6443 28.8023 41.8422 28.6044 41.9412 28.4695C42.1211 28.2357 42.1301 28.1007 42.1301 26.095C42.1301 23.9902 42.1301 23.9632 41.9142 23.6574C41.7972 23.4955 41.5364 23.2797 41.3295 23.1897C40.9786 23.0368 40.6278 23.0188 35.2932 23.0188H29.6167L29.2209 23.2167ZM40.6458 26.077V27.606H35.2932H29.9406V26.077V24.5479H35.2932H40.6458V26.077Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M28.6373 31.6986C28.2145 32.1123 28.4124 32.8139 28.9791 32.9668C29.105 32.9938 29.7976 33.0028 30.5261 32.9848C31.7854 32.9578 31.8573 32.9488 32.0192 32.7419C32.2621 32.4451 32.2441 31.9684 31.9653 31.6986C31.7494 31.4827 31.7224 31.4737 30.3013 31.4737C28.8801 31.4737 28.8531 31.4827 28.6373 31.6986Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M34.046 31.6717C33.7042 31.9865 33.6953 32.4453 34.037 32.7781C34.2439 32.9939 34.2889 33.0029 35.6111 33.0029C36.9783 33.0029 37.2391 32.949 37.473 32.6521C37.6619 32.4093 37.6079 31.9416 37.365 31.6987C37.1492 31.4828 37.1132 31.4739 35.71 31.4739C34.3429 31.4739 34.2619 31.4828 34.046 31.6717Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M39.378 31.7347C39.2251 31.8966 39.1172 32.0945 39.1172 32.2384C39.1172 32.3823 39.2251 32.5802 39.378 32.7421L39.6389 33.0029H41.051H42.4632L42.724 32.7421C42.8769 32.5802 42.9849 32.3823 42.9849 32.2384C42.9849 32.0945 42.8769 31.8966 42.724 31.7347L42.4632 31.4739H41.051H39.6389L39.378 31.7347Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M28.6389 34.7568C28.486 34.9007 28.4141 35.0716 28.4141 35.2965C28.4141 35.5214 28.486 35.6923 28.6389 35.8362C28.8548 36.052 28.8818 36.061 30.3029 36.061C31.7241 36.061 31.7511 36.052 31.9669 35.8362C32.1198 35.6923 32.1918 35.5214 32.1918 35.2965C32.1918 35.0716 32.1198 34.9007 31.9669 34.7568C31.7511 34.541 31.7241 34.532 30.3029 34.532C28.8818 34.532 28.8548 34.541 28.6389 34.7568Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M34.037 34.7568C33.6953 35.0896 33.7042 35.5483 34.046 35.8542C34.2619 36.052 34.3429 36.061 35.6921 36.061C37.1132 36.061 37.1132 36.061 37.356 35.8272C37.6079 35.5663 37.6709 35.1346 37.473 34.8827C37.2391 34.5859 36.9783 34.532 35.6111 34.532C34.2889 34.532 34.2439 34.541 34.037 34.7568Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M39.378 34.7928C39.2251 34.9547 39.1172 35.1526 39.1172 35.2965C39.1172 35.4404 39.2251 35.6383 39.378 35.8002L39.6389 36.061H41.051H42.4632L42.724 35.8002C42.8769 35.6383 42.9849 35.4404 42.9849 35.2965C42.9849 35.1526 42.8769 34.9547 42.724 34.7928L42.4632 34.532H41.051H39.6389L39.378 34.7928Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M28.8186 37.698C28.3599 37.9588 28.2699 38.5345 28.6387 38.8943C28.8546 39.1101 28.8816 39.1191 30.3027 39.1191C31.7239 39.1191 31.7508 39.1101 31.9667 38.8943C32.3355 38.5345 32.2635 37.9498 31.8228 37.725C31.508 37.5541 29.0974 37.5361 28.8186 37.698Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M34.1881 37.68C33.9452 37.7789 33.7293 38.2377 33.7923 38.5435C33.8103 38.6604 33.9362 38.8403 34.0621 38.9392C34.26 39.1012 34.4219 39.1191 35.7171 39.1191C37.1113 39.1191 37.1473 39.1101 37.3632 38.8943C37.678 38.5885 37.66 38.1927 37.3272 37.8509L37.0663 37.5901L35.7261 37.5991C34.9976 37.5991 34.305 37.635 34.1881 37.68Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M39.4431 37.7879C39.0833 38.1028 39.0563 38.4895 39.3441 38.8313L39.587 39.1191H41.0351C42.5552 39.1101 42.6721 39.0832 42.879 38.6964C43.0499 38.3816 43.0049 38.1297 42.7261 37.8509L42.4652 37.5901H41.0621C39.7489 37.5901 39.6589 37.5991 39.4431 37.7879Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M28.6899 40.882C28.3301 41.1788 28.3032 41.6286 28.636 41.9524C28.8518 42.1683 28.8878 42.1772 30.282 42.1772C31.5952 42.1772 31.7391 42.1593 31.955 41.9884C32.1259 41.8534 32.1888 41.7185 32.1888 41.5027C32.1888 40.7561 31.955 40.6482 30.264 40.6482C28.9957 40.6482 28.9598 40.6572 28.6899 40.882Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M34.1525 40.7831C33.7388 41.0169 33.6758 41.6016 34.0176 41.9704C34.1975 42.1683 34.2604 42.1772 35.6726 42.1772C37.1207 42.1772 37.1477 42.1772 37.3636 41.9524C37.6514 41.6735 37.6514 41.2778 37.3726 40.945L37.1567 40.6931L35.7715 40.6752C34.6742 40.6572 34.3414 40.6752 34.1525 40.7831Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M39.5668 40.7651C39.0901 41.008 39.0091 41.6286 39.4049 41.9974C39.5848 42.1593 39.7197 42.1772 41.0689 42.1772C42.4091 42.1772 42.553 42.1593 42.7149 41.9974C43.1017 41.6106 43.0207 41.008 42.535 40.7651C42.2292 40.6122 39.8726 40.6122 39.5668 40.7651Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M15.6283 20.1315C15.4483 20.2754 15.4034 20.4104 15.3674 20.9231C15.3224 21.5257 15.3224 21.5347 15.0525 21.5617C14.027 21.6696 12.5876 22.2902 11.715 23.0098C11.0943 23.5135 10.4286 24.4489 10.1947 25.1325C9.2861 27.8399 11.3192 30.6372 14.6927 31.3208L15.3224 31.4467L15.3494 34.8736C15.3674 37.644 15.3494 38.3096 15.2504 38.3096C14.9626 38.3096 14.063 38.0217 13.5502 37.7609C12.8305 37.4011 12.0209 36.6186 11.778 36.0699C11.679 35.8361 11.5531 35.3863 11.5081 35.0625C11.4002 34.3969 11.2022 34.1721 10.7165 34.1721C10.0328 34.1721 9.80786 34.7927 10.1047 35.908C10.3206 36.7445 10.6715 37.3202 11.4002 38.0487C11.9579 38.6064 12.2458 38.8133 12.9385 39.1461C13.7481 39.5328 14.7377 39.8387 15.1695 39.8387C15.3494 39.8387 15.3674 39.8836 15.3674 40.4053C15.3674 40.855 15.4034 41.0169 15.5473 41.1698C15.7902 41.4307 16.114 41.5026 16.4109 41.3497C16.7438 41.1968 16.8967 40.882 16.8967 40.3334V39.8836L17.5984 39.7307C19.6045 39.317 21.3137 38.0217 21.9434 36.4477C22.1233 36.007 22.1593 35.7641 22.1593 34.8826V33.8393L21.7815 33.0747C21.1698 31.8425 20.0003 30.8621 18.5339 30.3494C18.1741 30.2234 17.6703 30.0885 17.4095 30.0526L16.9417 29.9896L16.9147 26.5447C16.8877 22.5691 16.7707 22.9378 17.9492 23.3336C19.5415 23.8733 20.4951 24.8807 20.684 26.2478C20.7829 26.9944 21.0618 27.2912 21.5656 27.2103C22.0964 27.1293 22.2313 26.8775 22.1863 26.059C22.0874 24.395 20.711 22.7669 18.7409 21.9844C18.399 21.8495 17.8413 21.6876 17.5174 21.6336L16.9147 21.5437L16.8787 20.968C16.8427 20.4733 16.8067 20.3564 16.5908 20.1765C16.294 19.9157 15.9161 19.8977 15.6283 20.1315ZM15.3674 26.4817C15.3674 30.3764 15.4933 30.0076 14.3148 29.6298C13.4962 29.378 12.6056 28.7933 12.1648 28.2356C10.7524 26.4457 11.724 24.1881 14.2879 23.3156C14.6117 23.2077 14.9805 23.1087 15.1245 23.1087H15.3674V26.4817ZM17.9132 31.7525C19.1007 32.1483 20.0453 32.9218 20.4501 33.8303C20.666 34.316 20.693 34.4599 20.657 35.0625C20.63 35.4673 20.549 35.872 20.4501 36.0609C19.8923 37.1493 18.6869 37.9678 17.1936 38.2646L16.8967 38.3276V34.9456V31.5636H17.1216C17.2475 31.5636 17.6074 31.6446 17.9132 31.7525Z"
                      fill="#2591B2"
                    />
                    <path
                      d="M1.92877 23.3067C1.62291 23.5855 0.939213 25.3754 0.561383 26.8415C0.120581 28.5955 -0.0503427 30.2685 0.012629 32.1933C0.192548 37.4372 1.93777 41.1069 5.34724 43.3736C6.93053 44.4259 8.67574 45.1185 10.8168 45.5503C12.661 45.919 13.6505 46 16.2234 46C18.8232 45.991 19.9027 45.8921 21.7469 45.4693C22.5115 45.2984 22.7274 45.2085 22.8984 45.0196C23.1862 44.6868 23.1592 44.381 22.8354 44.0482C22.5205 43.7424 22.6375 43.7334 20.7663 44.0931C17.5278 44.7048 13.3087 44.6238 10.34 43.8773C6.84956 43.0048 4.3217 41.1159 2.91833 38.3276C1.39801 35.2965 1.09214 30.4484 2.18965 26.6707C2.3156 26.2299 2.60347 25.4204 2.82837 24.8807C3.08925 24.2331 3.2062 23.8284 3.17021 23.7024C3.07126 23.3606 2.76539 23.1088 2.45054 23.1088C2.27062 23.1088 2.06371 23.1897 1.92877 23.3067Z"
                      fill="#2591B2"
                    />
                  </svg>
                </div>
                <div className="pt-[20px]">
                  <h2 className="text-[#2591B2] text-[16px] leading-[22.88px] font-bold tracking-[0.01em]">
                    Budget-Friendly
                  </h2>
                  <p className="text-[#505056] text-[15px] leading-[24px] font-normal tracking-[0.01em] mt-[6px]">
                    The Technician can be booked for the same or less than any
                    other local technician near you. We understand what is
                    important to you and we believe in shaping the right
                    solution based on your needs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto pt-[101px] pb-[111px]">
          <h1 className="text-[#2591B2] text-[23px] leading-[32.89px] font-semibold tracking-[0.01em] text-center">
            FAQ On Washing Machine Repair And Services
          </h1>
          <div className="pl-[274px] pr-[270px] mt-[40px]">
            <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
              <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
                What brands of microwave ovens do you repair?
              </p>
            </div>
            <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
              Smart Care Technicians can work with any brand of microwave.
              However, LG, Samsung, Whirlpool, IFB, ELECTROLUX, Skyworth, and
              Hisense are the popular brands that Smart Care normally deals
              with.
            </p>
          </div>
          <div className="pl-[274px] pr-[270px] mt-[55px]">
            <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
              <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
                Should I trust Smart Care Microwave oven Repair and Services
                technician?
              </p>
            </div>
            <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
              All Microwave Repair and Services on Smart Care are experienced
              and background checked. Our main concern is our client’s safety.
              So, You do not have to worry about it.
            </p>
          </div>
          <div className="pl-[274px] pr-[270px] mt-[55px]">
            <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
              <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
                What are the services Smart Care provides in Microwave repair?
              </p>
            </div>
            <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
              Microwave Repair and Services Provided by Smart Care include
              diagnosis of the fault in the microwave, repair it, and replacing
              the genuine parts if needed.
            </p>
          </div>
          <div className="pl-[274px] pr-[270px] mt-[55px]">
            <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
              <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
                How much will it cost me to get my microwave Oven repaired?
              </p>
            </div>
            <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
              The cost of the Microwave Repair and Services cannot be fixed
              before a diagnosis of the fault in the microwave. After analyzing
              the problem, adding service charge, and spare parts cost if needed
              to be replaced, we can decide the cost.
            </p>
          </div>
          <div className="pl-[274px] pr-[270px] mt-[55px]">
            <div className="bg-[#2591B21A] py-[12px] pl-[16px]">
              <p className="text-[#505056] text-[16px] leading-[22.88px] font-normal tracking-[0.01em]">
                Why should I keep my microwave clean?
              </p>
            </div>
            <p className="text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[12px]">
              The remaining food or grease on the bottom of your microwave, as
              well as moisture from the steam in the air, can combine with filth
              and oil to produce a bacteria-friendly environment.
            </p>
          </div>
        </div>
      </div>
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </>
  );
};

export default servicedetails;
