import Link from 'next/link'
import React from 'react'
import BottomNavbar from '../../../components/BottomNavbar'
import Copyright from '../../../components/Copyright'
import Footerinfo from '../../../components/Footerinfo'
import Topbar from '../../../components/Topbar'

type Props = {}

const Blog = (props: Props) => {
    return (
        <div className='bg-[#F9F9F9]'>
            <Topbar />
            <div className=' relative mb-[60px]'>
                <div className=' flex items-center justify-center mt-[0px]'>
                    <img src="/../assets/partpurja/banner.jpg" className='w-full object-cover h-[222px]' alt="" />
                </div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col'>
                    <h1 className='text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title'>Blog</h1>
                    <p className='text-[18px] leading-[27px] font-normal text-[#F9F9F9] tracking-[0.02em] professional_title'>Home  <span className='mx-[10px]'>&gt;</span> Blog</p>
                </div>
            </div>
            <div className='container mx-auto mb-[120px]'>
                <div className='flex gap-[40px]'>
                    <div className='basis-[70%]  '>

                        <div className='grid grid-cols-1 gap-[42px]  '>
                            <Link href="/smart/blogs/posts">
                                <div className='bg-white rounded-[5px] pt-[39px] px-[35px] pb-[22px]'>
                                    <p className='text-[#505056] text-[12px] leading-[14.06px] font-normal tracking-[0.055em] font-Roboto mb-[12px]'>JANUARY 30, 2023</p>
                                    <h1 className='text-[#232323] text-[28px] leading-[32.81px] font-medium font-Roboto tracking-[0.02em] mb-[24px]'>Tips To Better Care Of LED TV</h1>
                                    <img src="/../assets/blogs/blog1.jpg" alt="" className='w-full' />
                                    <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal font-Roboto tracking-[0.01em] max-w-[731px] mt-[23px] mb-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eveniet reprehenderit voluptas delectus reiciendis pariatur, totam id quae tempore fugiat tenetur asperiores saepe velit nisi voluptates molestiae quia ....</p>
                                    <div className='flex items-center gap-[7px] cursor-pointer'>
                                        <p className='text-[#232323] text-[16px] leading-[25.6px] font-medium tracking-[0.02em]'>Read More </p><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/smart/blogs/posts">
                                <div className='bg-white rounded-[5px] pt-[39px] px-[35px] pb-[22px] '>
                                    <p className='text-[#505056] text-[12px] leading-[14.06px] font-normal tracking-[0.055em] font-Roboto mb-[12px]'>JANUARY 30, 2023</p>
                                    <h1 className='text-[#232323] text-[28px] leading-[32.81px] font-medium font-Roboto tracking-[0.02em] mb-[24px]'>Tips To Better Care Of LED TV</h1>
                                    <img src="/../assets/blogs/blog1.jpg" alt="" className='w-full' />
                                    <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal font-Roboto tracking-[0.01em] max-w-[731px] mt-[23px] mb-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eveniet reprehenderit voluptas delectus reiciendis pariatur, totam id quae tempore fugiat tenetur asperiores saepe velit nisi voluptates molestiae quia ....</p>
                                    <div className='flex items-center gap-[7px] cursor-pointer'>
                                        <p className='text-[#232323] text-[16px] leading-[25.6px] font-medium tracking-[0.02em]'>Read More </p><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/smart/blogs/posts">
                                <div className='bg-white rounded-[5px] pt-[39px] px-[35px] pb-[22px] '>
                                    <p className='text-[#505056] text-[12px] leading-[14.06px] font-normal tracking-[0.055em] font-Roboto mb-[12px]'>JANUARY 30, 2023</p>
                                    <h1 className='text-[#232323] text-[28px] leading-[32.81px] font-medium font-Roboto tracking-[0.02em] mb-[24px]'>Tips To Better Care Of LED TV</h1>
                                    <img src="/../assets/blogs/blog1.jpg" alt="" className='w-full' />
                                    <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal font-Roboto tracking-[0.01em] max-w-[731px] mt-[23px] mb-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eveniet reprehenderit voluptas delectus reiciendis pariatur, totam id quae tempore fugiat tenetur asperiores saepe velit nisi voluptates molestiae quia ....</p>
                                    <div className='flex items-center gap-[7px] cursor-pointer'>
                                        <p className='text-[#232323] text-[16px] leading-[25.6px] font-medium tracking-[0.02em]'>Read More </p><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.3 11.275C9.1 11.075 9.004 10.8334 9.012 10.55C9.02067 10.2667 9.125 10.025 9.325 9.82505L12.15 7.00005H1C0.716667 7.00005 0.479 6.90405 0.287 6.71205C0.0956668 6.52072 0 6.28338 0 6.00005C0 5.71672 0.0956668 5.47905 0.287 5.28705C0.479 5.09572 0.716667 5.00005 1 5.00005H12.15L9.3 2.15005C9.1 1.95005 9 1.71238 9 1.43705C9 1.16238 9.1 0.925049 9.3 0.725049C9.5 0.525049 9.73767 0.425049 10.013 0.425049C10.2877 0.425049 10.525 0.525049 10.725 0.725049L15.3 5.30005C15.4 5.40005 15.471 5.50838 15.513 5.62505C15.5543 5.74172 15.575 5.86672 15.575 6.00005C15.575 6.13338 15.5543 6.25838 15.513 6.37505C15.471 6.49172 15.4 6.60005 15.3 6.70005L10.7 11.3C10.5167 11.4834 10.2877 11.575 10.013 11.575C9.73767 11.575 9.5 11.475 9.3 11.275Z" fill="#232323" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className='basis-[30%]  '>
                        <div className='pl-[28px] pt-[20px] rounded-[5px] bg-white pb-[55px] pr-[21px]'>
                            <h2 className='text-[#000000] text-[22px] leading-[35.2px] font-medium tracking-[0.02em] font-Roboto'>Categories</h2>
                            <div className='border-b-[1px] border-[#D9D9D9] mt-[14px] flex items-center justify-between'>
                                <p className='text-[#000000] text-[14px] leading-[22.4px] font-normal font-Roboto py-[15px]'>Washing Machine</p> <div className='h-[25px] w-[34px] bg-[#F3F5F7] rounded-[8px] flex items-center justify-center cursor-pointer'><p className='text-black text-[12px] leading-[19.2px] tracking-[0.02em] font-normal font-Roboto'>10</p></div>
                            </div>
                            <div className='border-b-[1px] border-[#D9D9D9] flex items-center justify-between'>
                                <p className='text-[#000000] text-[14px] leading-[22.4px] font-normal font-Roboto py-[15px]'>Ac Repairs</p><div className='h-[25px] w-[34px] bg-[#F3F5F7] rounded-[8px] flex items-center justify-center cursor-pointer'><p className='text-black text-[12px] leading-[19.2px] tracking-[0.02em] font-normal font-Roboto'>3</p></div>
                            </div>
                            <div className='border-b-[1px] border-[#D9D9D9] flex items-center justify-between'>
                                <p className='text-[#000000] text-[14px] leading-[22.4px] font-normal font-Roboto py-[15px]'>Lorem Ipsum</p><div className='h-[25px] w-[34px] bg-[#F3F5F7] rounded-[8px] flex items-center justify-center cursor-pointer'><p className='text-black text-[12px] leading-[19.2px] tracking-[0.02em] font-normal font-Roboto'>3</p></div>
                            </div>
                            <div className='border-b-[1px] border-[#D9D9D9] flex items-center justify-between'>
                                <p className='text-[#000000] text-[14px] leading-[22.4px] font-normal font-Roboto py-[15px]'>Dolor sit Amet</p><div className='h-[25px] w-[34px] bg-[#F3F5F7] rounded-[8px] flex items-center justify-center cursor-pointer'><p className='text-black text-[12px] leading-[19.2px] tracking-[0.02em] font-normal font-Roboto'>3</p></div>
                            </div>
                        </div>
                        {/* popular posts */}
                        <div className='mt-[29px] rounded-[5px] bg-white pt-[20px] pl-[23px] pr-[16px]'>
                            <h2 className='text-[#000000] text-[22px] leading-[35.2px] font-medium tracking-[0.02em] font-Roboto'>Popular Posts</h2>
                            <div className='flex gap-[15px] items-center border-b-[1px] border-[#EDEDED] pb-[22px] mt-[38px]'>
                                <div >
                                    <img src="/../assets/blogs/post1.png" alt="" />
                                </div>
                                <div className='pt-[7px]'>
                                    <h2 className='text-[#232323] text-[16px] leading-[18.75px] tracking-[0.02em] font-medium font-Roboto w-[221px]'>Owner's Manual title here with text more than 2 lines </h2>
                                    <p className='text-[#505056] text-[13px] leading-[15.23px] font-light  tracking-[0.055em] mt-[28px]'>JANUARY 30, 2023</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center border-b-[1px] border-[#EDEDED] pb-[22px] mt-[22px]'>
                                <div >
                                    <img src="/../assets/blogs/post2.png" alt="" />
                                </div>
                                <div className='pt-[7px]'>
                                    <h2 className='text-[#232323] text-[16px] leading-[18.75px] tracking-[0.02em] font-medium font-Roboto w-[221px]'>Owner's Manual title here with text more than 2 lines </h2>
                                    <p className='text-[#505056] text-[13px] leading-[15.23px] font-light  tracking-[0.055em] mt-[28px]'>JANUARY 30, 2023</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center border-b-[1px] border-[#EDEDED] pb-[22px] mt-[22px]'>
                                <div >
                                    <img src="/../assets/blogs/post3.png" alt="" />
                                </div>
                                <div className='pt-[7px]'>
                                    <h2 className='text-[#232323] text-[16px] leading-[18.75px] tracking-[0.02em] font-medium font-Roboto w-[221px]'>Owner's Manual title here with text more than 2 lines </h2>
                                    <p className='text-[#505056] text-[13px] leading-[15.23px] font-light  tracking-[0.055em] mt-[28px]'>JANUARY 30, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavbar />
            <Footerinfo />
            <Copyright />
        </div>
    )
}

export default Blog