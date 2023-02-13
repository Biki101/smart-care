import React from 'react'

type Props = {}

const DownloadOurApp = (props: Props) => {
    return (
        <div className='bg-[#FBFCFE] pb-[40px] sm:pb-0'>
            < div className='container mx-auto pt-[38px] pb-[56px] px-[10px]' >
                <div className=' items-center gap-[20px] justify-between flex flex-col md:flex-row'>
                    <div className='w-full'>
                        <h1 className='md:text-[32px] text-[17px] leading-[48px] font-semibold md:mb-[36px] mb-[0px]'>Download our App</h1>
                        <p className='text-[#000000CC] md:text-[16px] text-[10px] leading-[24px] font-normal md:mb-[34px] mb-[15px]'>Enter mobile number to get APP download Link</p>
                    </div>
                    <div className=' flex items-center mb-[22px] w-full'>
                        <input type="text" placeholder='Type your mobile number' className='border md:h-[56px] h-[40px] pl-[24px] md:w-[570px] w-full  input_btn outline-none text-[12px] md:text-[16px] ' />
                        <button className='bg-[#2591B2] rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] md:text-[16px] leading-[25.2px] font-normal md:pt-[16px] md:pb-[15px] md:pl-[35px] md:pr-[36px] h-[40px] md:h-[56px] px-[15px] sm:px-0 tracking-[0.1em] text-[12px]'>SEND</button>
                    </div>
                    <div className=' items-center gap-[17px] hidden'>
                        <img src="/../assets/googleplay.png" alt="" className='cursor-pointer' />
                        <img src="/../assets/appstore.png" alt="" className='mt-[-9px] cursor-pointer' />
                    </div>

                </div>
            </ div>
        </div >
    )
}

export default DownloadOurApp