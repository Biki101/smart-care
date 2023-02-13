import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const index = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='flex items-center justify-center h-screen px-[25px] w-full '>
            <form className='w-full'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/assets/mblview/login/logo.png" alt="" />
                    <p className='text-[#666666] text-[13px] leading-[19.5px] font-light mt-[12px] font-poppins '>Sign in to use our services</p>
                </div>
                <div>
                    <input type="email" required placeholder='Email address' className='border w-full border-[#D9D9D9] pt-[15px] pl-[20px] pb-[18px] mt-[44px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:text-[10px] placeholder:font-normal placeholder:leading-[15px] font-poppins outline-none rounded-[2px]' />
                    <div className='  mt-[24px] w-full border border-[#D9D9D9] flex items-center pr-[22.42px]'>
                        <input type={showPassword ? 'text' : 'password'} required placeholder='Password' className=' w-full  pt-[15px] pl-[20px] pb-[18px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:text-[10px] placeholder:font-normal placeholder:leading-[15px] font-poppins outline-none rounded-[2px]' />
                        <svg className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79167 4.25C7.74729 4.25 7.7251 4.30368 7.75653 4.33501L9.8364 6.40832C9.86606 6.43789 9.91667 6.41688 9.91667 6.375V6.375C9.91667 5.81141 9.69278 5.27091 9.29427 4.8724C8.89575 4.47388 8.35525 4.25 7.79167 4.25V4.25ZM4.62542 4.81667L5.39454 5.58579C5.59887 5.79012 5.66667 6.08604 5.66667 6.375V6.375C5.66667 6.93858 5.89055 7.47909 6.28906 7.8776C6.68758 8.27612 7.22808 8.5 7.79167 8.5C7.79871 8.5 7.80576 8.49996 7.81281 8.49987C8.08858 8.49649 8.37088 8.56213 8.5659 8.75715V8.75715C8.95063 9.14188 8.83572 9.79512 8.29795 9.87784C8.13282 9.90324 7.96392 9.91667 7.79167 9.91667C6.85236 9.91667 5.95152 9.54353 5.28733 8.87934C4.62314 8.21514 4.25 7.31431 4.25 6.375C4.25 5.81542 4.39167 5.29125 4.62542 4.81667M0.708333 0.899583L2.32333 2.51458V2.51458C2.49295 2.6842 2.47584 2.96334 2.29529 3.12127C1.48421 3.83074 0.810173 4.68572 0.319228 5.65913C0.0922463 6.10917 0.0934044 6.64048 0.321298 7.09006C1.70356 9.81693 4.52808 11.6875 7.79167 11.6875C8.73876 11.6875 9.64896 11.5294 10.495 11.2404C10.7399 11.1567 11.0136 11.2091 11.1987 11.39V11.39L12.8173 13.0085C13.0657 13.257 13.4685 13.257 13.7169 13.0085V13.0085C13.9653 12.7601 13.9653 12.3574 13.7169 12.109L1.60792 0M7.79167 2.83333C8.73097 2.83333 9.63181 3.20647 10.296 3.87066C10.9602 4.53485 11.3333 5.43569 11.3333 6.375C11.3333 6.40326 11.333 6.43147 11.3323 6.45962C11.3133 7.20907 11.4235 8.00933 11.9536 8.53944V8.53944C12.6333 9.21915 13.7391 9.27973 14.3383 8.52811C14.692 8.08443 15.0024 7.60314 15.2615 7.09236C15.4901 6.64149 15.4896 6.10856 15.2609 5.65773C13.8782 2.93206 11.0544 1.0625 7.79167 1.0625C7.33295 1.0625 6.88333 1.10039 6.44421 1.17267C5.74124 1.28837 5.54422 2.13882 6.05031 2.64025V2.64025C6.32115 2.90859 6.72218 2.98063 7.0957 2.90419C7.32001 2.85828 7.552 2.83333 7.79167 2.83333Z" fill="#E2E2E2" />
                        </svg>

                    </div>
                    <p className='text-[#666666] text-[13px] leading-[10.72px] font-light mt-[20px] font-poppins'>Forgot Password ?</p>
                </div>
                <button type='submit' className='bg-[#2591B2] text-white text-[15px] leading-[18.23px] font-normal w-full rounded-[5px] py-[15px] mt-[44px]'>Sign in</button>
                <div className='flex justify-center items-center '>
                    <p className='or text-[#666666] text-[13px] leading-[10.72px] font-normal mt-[29px]'>OR</p>
                </div>
                <div className='flex items-center gap-[20px] mt-[29px] justify-center'>
                    <Link href="google.com"> <img src="/../assets/mblview/login/google.png" alt="" /></Link>
                    <Link href="facebook.com"> <img src="/../assets/mblview/login/facebook.png" alt="" /></Link>
                    <Link href="instagram.com"><img src="/../assets/mblview/login/instagram.png" alt="" /></Link>
                </div>
                <div className='flex items-center justify-center mt-[57px]'>
                    <p className='text-[13px] text-[#666666] leading-[10.72px] font-normal'>Need an account ?  <span className='text-[13px] text-[#BB243F] leading-[10.72px] font-bold underline decoration-[#BB243F]/[0.3]'>SIGNUP</span></p>
                </div>


            </form>
        </div>
    )
}

export default index