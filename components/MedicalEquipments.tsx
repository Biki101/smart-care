import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



// const SampleNextArrow = () => {
//     return (
//         <div className='bg-red-500'>
//             helo
//         </div>
//     )
// }
// const SamplePrevArrow = () => {
//     return (
//         <div className='bg-green-500'>
//             helo0
//         </div>
//     )
// }

const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
};
type Props = {}

const MedicalEquipments = (props: Props) => {
    return (
        <div className='bg-[#FBFCFE] pt-[43px] md:mt-[38px] pb-[44px]'>
            <div className='container mx-auto pl-[10px] sm:pl-[0px]'>
                <div className='flex items-center justify-between pr-[10px]'>
                    <h1 className='text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold'>Medical equipments</h1>
                    <p className='sm:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer'>View All</p>
                </div>
                <Slider {...settings} className="mt-[28.5px] ">
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/ultratransducer.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>Ultra Transducer</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/bloodpressure.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal' >Blood Pressure Monitors</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/bloodbank.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>Blood Bank</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/temperature.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal text-center'>Temperature Measurement Device</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]' >
                            <img src="/../assets/xray.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>XRay Machine</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/ultrasound.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>Ultrasound Machine</p>
                    </div>

                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/bloodbank.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>Blood Bank</p>
                    </div>
                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/ultrasonic.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>Ultrasonic Machines</p>
                    </div>

                    <div className='cursor-pointer '>
                        <div className='bg-white border border-[#EDEDED] transform hover:scale-[105%] transition-all duration-200 ease-in-out  rounded-[5px] mb-[27px] flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[162px] md:h-[106px] 2xl:w-[93%]'>
                            <img src="/../assets/.png" alt="" className='w-[80%]' />
                        </div>
                        <p className='text-center text-[#000000] text-[12px] md:text-[15px] leading-[21.09px] font-normal'>item name</p>
                    </div>



                </Slider>
            </div>
        </div>
    )
}

export default MedicalEquipments