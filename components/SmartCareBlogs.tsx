import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
type Props = {}
const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
};
const SmartCareBlogs = (props: Props) => {
    return (
        <div className='bg-[#fff]'>
            <div className='container mx-auto pt-[50px] pb-[80px]'>
                <h1 className='text-[#232323] md:text-[32px]  text-[17px] leading-[38.88px] font-bold text-center'>SmartCare Blogs</h1>
                {/* <div className='grid grid-cols-4 mt-[60px] gap-[40px]'>
                    <div className='bg-white border cursor-pointer hover:shadow-lg'>
                        <div>
                            <img src="/../assets/blogs/blog1.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg'>
                        <div>
                            <img src="/../assets/blogs/blog2.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg'>
                        <div>
                            <img src="/../assets/blogs/blog3.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg'>
                        <div>
                            <img src="/../assets/blogs/blog4.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>

                </div> */}
                <Slider {...settings} className="xl:mt-[60px] mt-[40px] mx-[15px] sm:mx-0">
                    <div className='bg-white border cursor-pointer hover:shadow-lg blogs rounded-[3px]'>
                        <div>
                            <img src="/../assets/blogs/blog1.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg blogs rounded-[3px]'>
                        <div>
                            <img src="/../assets/blogs/blog2.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg blogs rounded-[3px]'>
                        <div>
                            <img src="/../assets/blogs/blog3.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg blogs rounded-[3px]'>
                        <div>
                            <img src="/../assets/blogs/blog4.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border cursor-pointer hover:shadow-lg blogs rounded-[3px]'>
                        <div>
                            <img src="/../assets/blogs/blog2.png" className='w-full' alt="" />
                        </div>
                        <div className='pl-[12px] pb-[24px] pr-[12px]'>
                            <p className='text-[#505056] text-[12px] leading-[14.06px] font-bold font-Roboto mt-[24px]'>JANUARY 30, 2023</p>
                            <h2 className='text-[#232323] text-[18px] leading-[21.09px] font-medium tracking-[0.02em] mt-[14px]' >Tips To Better Care Of LED TV</h2>
                            <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal tracking-[0.01em] mt-[14px]'>Every electronic equipments comes with an owner's manual. This manual provides the
                                user with sufficient information about how to use and maintain it. </p>
                            <div className='mt-[23px]'>
                                <p className='text-[#232323] text-[16px] leading-[25.6px] font-semibold font-Roboto flex items-center gap-[7px]'>Read More<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>




                </Slider>
            </div>
        </div>
    )
}

export default SmartCareBlogs