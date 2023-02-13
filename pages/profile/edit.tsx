import Link from 'next/link'
import React from 'react'

type Props = {}

const edit = (props: Props) => {
    return (
        <div className='pb-[120px]'>
            <div className='flex items-center justify-between pl-[25px] pr-[16px] pt-[11px]'>
                <Link href="/profile">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 10.59L2.83 6L7.41 1.41L6 -2.62268e-07L-2.62268e-07 6L6 12L7.41 10.59Z" fill="#676767" />
                    </svg>
                </Link>
                <h2 className='text-[#414141] text-[14px] leading-[21px] font-normal font-poppins'>Edit Profile</h2>
                <p className='text-[#2591B2] text-[14px] leading-[21px] font-normal font-poppins'>Save</p>
            </div>
            <div className='h-[1px] w-full bg-[#F2F2F2] mt-[14px]' >
            </div>
            <div className='flex items-center justify-center pt-[26.26px]'>
                <img src="/../assets/mblview/profile/editprofile.png" alt="" />
            </div>
            <div className='pt-[34.26px] pl-[16px]'>
                <p className='text-[#999999] text-[14px] leading-[22.4px] font-medium font-poppins'>Personal Details</p>
            </div>
            <form action="" className='px-[16px] mt-[17px] space-y-[18px]'>

                <div>
                    <p className='text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins'>Full Name *</p>
                    <input type="text" placeholder='Enter your name' className='border bg-[#F9F9F9] border-[#EDEDED] w-full h-[48px] mt-[5px] outline-none pl-[12px] text-[14px]' />
                </div>
                <div>
                    <p className='text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins'>Primary Contact Number *</p>
                    <input type="text" placeholder='Enter your number' className='border bg-[#F9F9F9] border-[#EDEDED] w-full h-[48px] mt-[5px] text-[14px] outline-none pl-[12px]' />
                </div>
                <div>
                    <p className='text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins'>Address</p>
                    <input type="text" placeholder='Address' className='border bg-[#F9F9F9] border-[#EDEDED]text-[14px] w-full h-[48px] mt-[5px] outline-none pl-[12px]' />
                </div>
                <div>
                    <p className='text-[#414141] text-[13px] leading-[20.8px] font-normal font-poppins'>Email</p>
                    <input type="text" placeholder='Email' className='border bg-[#F9F9F9] border-[#EDEDED] placeholder:text-[14 px] w-full h-[48px] mt-[5px] outline-none pl-[12px]' />
                </div>
            </form>
        </div>
    )
}

export default edit