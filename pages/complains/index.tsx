import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Footer from '../../components/mblviewComponents/Footer';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <div><p className='text-[#2591B2] text-[12px] leading-[19px]'>Open</p></div>,
        children: <div className='px-[14px] shadow-sm' >

            <div className='border border-[#EDEDED] rounded-[5px]'>
                <div className='flex pl-[9px] pr-[13px] pt-[14px] justify-between pb-[6px] bg-[#2591B2]/[0.05]' >
                    <div>
                        <h2 className='text-[#2591B2] text-[26px] leading-[41.6px] font-medium font-poppins'>11:45</h2>
                        <p className='text-[#414141] text-[16px] leading-[25.6px] font-normal font-poppins'>January 5, 2023</p>
                    </div>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2C4 0.9 3.1 -1.35505e-07 2 -8.74228e-08C0.9 -3.93402e-08 -1.35505e-07 0.9 -8.74228e-08 2C-3.93402e-08 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 -3.97774e-07 8 -3.49691e-07C6.9 -3.01609e-07 6 0.9 6 2ZM12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.899999 15.1 -6.60042e-07 14 -6.11959e-07C12.9 -5.63877e-07 12 0.9 12 2Z" fill="#676767" />
                    </svg>
                </div >
                <div className='pt-[13px] pb-[9px] pl-[11px]'>
                    <p className='text-[#414141] text-[14px] leading-[22.4px] font-normal font-poppins'>Service name or something </p>
                </div>
            </div >
        </div >,
    },
    {
        key: '2',
        label: <div><p className='text-[#00] text-[12px] leading-[19px]'>Closed</p></div>,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: <div><p className='text-[#00] text-[12px] leading-[19px]'>Cancelled</p></div>,
        children: `Content of Tab Pane 3`,
    },
];
type Props = {}

const Index = (props: Props) => {

    const router = useRouter()
    const [home, setHome] = useState(false)
    const [service, setService] = useState(false)
    const homeclick = () => {
        setHome(!home)
        setService(false)
        router.push("/smart")
    }
    const serviceClick = () => {
        setService(!service)
        setHome(false)
        router.push("/service")
    }
    return (
        <div>
            <div>
                <div className='pl-[17px] flex items-center gap-[125px] pt-[11px]'>
                    <svg width="16" className='inline-block' height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790175 1.13968 0 0.948912 0 0.75ZM0 5C0 4.80109 0.0790175 4.61032 0.21967 4.46967C0.360322 4.32902 0.551088 4.25 0.75 4.25H13.25C13.4489 4.25 13.6397 4.32902 13.7803 4.46967C13.921 4.61032 14 4.80109 14 5C14 5.19891 13.921 5.38968 13.7803 5.53033C13.6397 5.67098 13.4489 5.75 13.25 5.75H0.75C0.551088 5.75 0.360322 5.67098 0.21967 5.53033C0.0790175 5.38968 0 5.19891 0 5ZM0.75 8.5C0.551088 8.5 0.360322 8.57902 0.21967 8.71967C0.0790175 8.86032 0 9.05109 0 9.25C0 9.44891 0.0790175 9.63968 0.21967 9.78033C0.360322 9.92098 0.551088 10 0.75 10H15.25C15.4489 10 15.6397 9.92098 15.7803 9.78033C15.921 9.63968 16 9.44891 16 9.25C16 9.05109 15.921 8.86032 15.7803 8.71967C15.6397 8.57902 15.4489 8.5 15.25 8.5H0.75Z" fill="black" />
                    </svg>
                    <p className='text-black text-[14px] leading-[21px] font-semibold' >Kathmandu</p>
                </div>
                <div className='h-[1px] w-full bg-[#F2F2F2] mt-[14px]' >
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="complain" />
            </div>
            {/* footer navbar */}
            {/* <Footer /> */}
        </div>
    )
}

export default Index