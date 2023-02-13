import Link from 'next/link'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
    return (
        <div className='sm:hidden'>
            <div className='flex items-center justify-between px-[10px] pt-[30px]'>
                <h1 className='text-[#232323] md:text-[20px] text-[17px] leading-[38.88px] font-bold'>View Our Products</h1>
                <Link href="/products">   <p className='sm:hidden text-[#2591B2] text-[12px] leading-[18px] font-normal cursor-pointer'>View All</p></Link>

            </div>
            <div className='grid grid-cols-1 gap-x-[12px] gap-y-[13px] mb-[32px] mt-[28px] px-[10px]'>
                <div className='border flex border-[#EDEDED] rounded-[5px]'>
                    <div className='h-[91px] flex items-center justify-center'>
                        <img src="/../assets/partpurja/p1.png" alt="" className='w-full h-[91px] object-cover' />
                    </div>
                    <div className='px-[10px] pt-[5px] p-[8px]'>
                        {/* <div className='bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block'>
                            <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                        </div> */}
                        <h2 className='text-[#232323] text-[12px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]'>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                        <p className='text-[#232323] text-[11px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                            {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                        </div>
                    </div>

                </div>
                <div className='border flex  border-[#EDEDED] rounded-[5px]'>
                    <div className='h-[91px] flex items-center justify-center'>
                        <img src="/../assets/partpurja/p2.png" alt="" className='w-full h-[91px] object-cover' />
                    </div>
                    <div className='px-[10px] pt-[5px] p-[8px]'>
                        {/* <div className='bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block'>
                            <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                        </div> */}
                        <h2 className='text-[#232323] text-[12px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]'>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                        <p className='text-[#232323] text-[11px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                            {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                        </div>
                    </div>

                </div>
                <div className='border flex border-[#EDEDED] rounded-[5px]'>
                    <div className='h-[91px] flex items-center justify-center'>
                        <img src="/../assets/partpurja/p10.png" alt="" className='w-full h-[91px] object-cover' />
                    </div>
                    <div className='px-[10px] pt-[5 px] p-[8px]'>
                        {/* <div className='bg-[#1F3F981A] rounded-[37px] mt-[8px] py-[5px] px-[10px] inline-block'>
                            <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                        </div> */}
                        <h2 className='text-[#232323] text-[12px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]'>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                        <p className='text-[#232323] text-[11px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                        <div className='flex items-center justify-between mt-[6px]'>
                            <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                            {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                        </div>
                    </div>

                </div>



            </div>
            {/* <div className='flex fixed left-[50%]   transform translate-x-[-50%] bg-red-500'>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="7.20339" height="6.48305" rx="0.648305" fill="#2591B2" />
                    <rect x="9.79663" y="0.5" width="7.20339" height="6.48305" rx="0.648305" fill="#2591B2" />
                    <rect y="9.25" width="7.20339" height="6.48305" rx="0.648305" fill="#2591B2" />
                    <rect x="9.79663" y="9.25" width="7.20339" height="6.48305" rx="0.648305" fill="#2591B2" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="15.6522" height="3.99998" rx="1" fill="#D9D9D9" />
                    <rect y="5.99991" width="15.6522" height="3.99998" rx="1" fill="#D9D9D9" />
                    <rect y="11.5" width="15.6522" height="3.99998" rx="1" fill="#D9D9D9" />
                </svg>

            </div> */}
        </div>
    )
}

export default Products