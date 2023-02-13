import React from 'react'
import CountUp, { useCountUp } from 'react-countup';


type Props = {}

const Number = (props: Props) => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });
    return (
        <div className='md:mt-[92px] mt-[50px] bg-[#2591B2]'>
            <div className='container mx-auto grid md:grid-cols-4 grid-cols-2 text-white pt-[65px] pb-[75px] md:gap-[30px]'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className=' text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out'>  <CountUp end={15324} duration={3} enableScrollSpy  />+</h1>

                    <p className=' text-[18px]  md:text-[22px] leading-[33px] font-normal'>Complaints</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className=' text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out'><CountUp end={9000} duration={3.1} enableScrollSpy /> +</h1>
                    <p className=' text-[18px]  md:text-[22px] leading-[33px] font-normal'>Customers</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className=' text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out' ><CountUp end={125} duration={3}  enableScrollSpy/>+</h1>
                    <p className=' text-[18px]  md:text-[22px] leading-[33px] font-normal'>Technicians</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className=' text-[37px]  md:text-[52px] leading-[78px] font-medium cursor-pointer transform hover:scale-105 transition duration-300 ease-out'><CountUp end={12} duration={1.1} enableScrollSpy />+</h1>
                    <p className=' text-[18px]  md:text-[22px] leading-[33px] font-normal'>Service Providers</p>
                </div>
            </div>

        </div>
    )
}

export default Number