import React from 'react'

type Props = {}

const BottomNavbar = (props: Props) => {
    return (
        <div className='bg-[#00071B] hidden md:block'>
            <div>
                <nav className=' flex items-center xl:gap-[61px] text-white container mx-auto pt-[20px] md:gap-[41px] pb-[20px] xl:pl-[230px] md:pl-[45px]'>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>Home</a>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>Contact US</a>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>Featured Products</a>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>About</a>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>Privacy Policy</a>
                    <a href="" className='text-[14px] leading-[16.41px] font-medium'>Terms & Conditions</a>
                </nav>
            </div>
        </div>
    )
}

export default BottomNavbar