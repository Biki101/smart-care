import React from 'react'
import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='w-full mt-[0px] relative  px-[14px] sm:px-0'>
            <div className=' flex items-center bg-[#FFAA45]/[0.2] rounded-[2px] w-full cursor-pointer pr-[10.5px] sm:hidden'>
                <input type="text" placeholder='Search for a service' className='w-full outline-none pt-[13px] pb-[13px] pl-[17.99px] placeholder:text-[#495057D4] placeholder:text-[12px] leading-[18px] bg-transparent font-light tracking-[0.3px]' />
                <div className=''>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64648 16.646C10.4215 16.6456 12.1453 16.0514 13.5435 14.958L17.9395 19.354L19.3535 17.94L14.9575 13.544C16.0515 12.1457 16.6461 10.4214 16.6465 8.646C16.6465 4.235 13.0575 0.645996 8.64648 0.645996C4.23548 0.645996 0.646484 4.235 0.646484 8.646C0.646484 13.057 4.23548 16.646 8.64648 16.646ZM8.64648 2.646C11.9555 2.646 14.6465 5.337 14.6465 8.646C14.6465 11.955 11.9555 14.646 8.64648 14.646C5.33748 14.646 2.64648 11.955 2.64648 8.646C2.64648 5.337 5.33748 2.646 8.64648 2.646Z" fill="#676767" />
                    </svg>
                </div>
            </div>
            {/* line */}
            {/* <div className='h-[1px] w-full bg-[#F2F2F2] mt-[14px] sm:hidden' >
            </div> */}
            <Slider {...settings} className="mt-[13px] carousel">
                <div>
                    <img src="/../assets/banner.jpg" alt="" className='w-full rounded-[5px]' />
                </div>
                <div>
                    <img src="/../assets/banner.jpg" alt="" className='w-full rounded-[5px]' />
                </div>
                <div>
                    <img src="/../assets/banner.jpg" alt="" className='w-full rounded-[5px]' />
                </div>
                <div>
                    <img src="/../assets/banner.jpg" alt="" className='w-full rounded-[5px]' />
                </div>
                <div>
                    <img src="/../assets/banner.jpg" alt="" className='w-full rounded-[5px]' />
                </div>

            </Slider>
            <img src="/../assets/banner.jpg" className='w-full hidden md:block h-[389px] object-cover' alt="" />
            <div className='absolute left-[50%] translate-x-[-50%] bottom-0 bg-[#fff]/[0.85] pb-[27px] hidden md:block'>
                <h2 className='text-[#2591B2] xl:text-[52px] md:text-[45px] leading-[60.94px] font-medium text-center xl:mb-[19px] md:mb-[7px] whitespace-pre xl:pt-[32px] pl-[124.5px] pr-[125.5px]'>Repair Services on Demand</h2>
                <p className='text-[#505056] text-[20px] leading-[23.44px] font-medium text-center'>One-stop solution for your services. Order any service, anytime.</p>
                <div className='flex items-center pl-[31px] w-full gap-[10px] pr-[32px] xl:mt-[26px] md:mt-[18px]' >
                    <div className='flex items-center bg-white rounded-[6px] gap-[14px] py-[21px] pl-[23px] pr-[22.43px]'>
                        <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 28C8.60539 26.3244 6.84927 24.4875 5.24999 22.5084C2.84999 19.5363 1.31834e-06 15.1101 1.31834e-06 10.8922C-0.00103953 8.73814 0.614262 6.63215 1.76804 4.84078C2.92181 3.04941 4.5622 1.65318 6.48159 0.828806C8.40098 0.00442736 10.5131 -0.211048 12.5506 0.209651C14.5882 0.630349 16.4596 1.66831 17.928 3.19217C18.9056 4.20131 19.6805 5.40146 20.2078 6.72317C20.7351 8.04489 21.0043 9.46191 20.9999 10.8922C20.9999 15.1101 18.15 19.5363 15.75 22.5084C14.1507 24.4875 12.3946 26.3244 10.5 28ZM10.5 6.22647C9.3065 6.22647 8.16191 6.71804 7.318 7.59304C6.47409 8.46804 5.99999 9.65479 5.99999 10.8922C5.99999 12.1297 6.47409 13.3164 7.318 14.1914C8.16191 15.0664 9.3065 15.558 10.5 15.558C11.6934 15.558 12.838 15.0664 13.6819 14.1914C14.5259 13.3164 15 12.1297 15 10.8922C15 9.65479 14.5259 8.46804 13.6819 7.59304C12.838 6.71804 11.6934 6.22647 10.5 6.22647Z" fill="#2591B2" />
                        </svg>
                        <p className='text-[#000000E5] text-[16px] leading-[18.75px] font-semibold'>Kathmandu</p>
                    </div>
                    <div className=' flex items-center bg-white w-full pr-[7px] cursor-pointer rounded-[5px]'>
                        <input type="text" placeholder='Find your service here eg. AC, Car, Facial...' className='w-full outline-none pt-[23px] pb-[25px] pl-[17.99px] placeholder:text-[#495057D4] placeholder:text-[16px] leading-[18.75px]' />
                        <div className='bg-[#2591B2] p-[18.65px] rounded-[5px]'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.64648 16.646C10.4215 16.6456 12.1453 16.0514 13.5435 14.958L17.9395 19.354L19.3535 17.94L14.9575 13.544C16.0515 12.1457 16.6461 10.4214 16.6465 8.646C16.6465 4.235 13.0575 0.645996 8.64648 0.645996C4.23548 0.645996 0.646484 4.235 0.646484 8.646C0.646484 13.057 4.23548 16.646 8.64648 16.646ZM8.64648 2.646C11.9555 2.646 14.6465 5.337 14.6465 8.646C14.6465 11.955 11.9555 14.646 8.64648 14.646C5.33748 14.646 2.64648 11.955 2.64648 8.646C2.64648 5.337 5.33748 2.646 8.64648 2.646Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner