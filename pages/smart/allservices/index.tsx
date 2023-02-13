import React from 'react'
import BottomNavbar from '../../../components/BottomNavbar'
import Copyright from '../../../components/Copyright'
import Footerinfo from '../../../components/Footerinfo'
import Topbar from '../../../components/Topbar'
import Link from 'next/link'
//  import { Anchor, Row, Col } from 'antd';

type Props = {}

const Allservices = (props: Props) => {
    return (
        <div>
            <Topbar />
            <div className='bg-[#F5F5F5] pt-[20px] pb-[79px]'>
                <div className='container mx-auto flex gap-[26px] '>
                    <div className='bg-white basis-[20%] px-[16px] pt-[18px] pb-[100px] border-[#EDEDED] border rounded-[10px] '>
                        <div className='bg-[#1F3F98]/[0.1] rounded-[8px]  border-b-[1px] border-[#2591B2] group cursor-pointer transition-colors duration-300 ease-in-out '>
                            <p className='text-[#2591B2]  text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Appliance Repairs</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] hover:border-[#2591B2] mt-[8px] cursor-pointer group transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Popular Brands</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-[white] border-b-[1px] hover:border-[#2591B2] mt-[8px] cursor-pointer group transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Warranty Products</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] hover:border-[#2591B2] mt-[8px] cursor-pointer group transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Electrician & Plumbers</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056]  text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Air-Purifier/Humidifier</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointe transition-colors duration-300 ease-in-outr'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Mobiles & Tabs</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] hover:border-[#2591B2] border-[white] group mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>CCTV Repair Service</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Computer/Printer</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Medical Equipment</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Drone Repair</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] group hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Carpenter Service</p>
                        </div>
                        <div className='hover:bg-[#1F3F98]/[0.1] rounded-[8px] border-b-[1px] border-[white] hover:border-[#2591B2] mt-[8px] cursor-pointer transition-colors duration-300 ease-in-out'>
                            <p className='group-hover:text-[#2591B2] text-[#505056] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] pt-[13px] pb-[14px] pl-[22px] pr-[23px]'>Cleaning & Pest Control</p>
                        </div>
                    </div>
                    <div className=' basis-[80%]'>
                        <div className='bg-white pt-[30px] pl-[30px] pr-[130px] pb-[31px] border border-[#EDEDED;] rounded-[5px]'>
                            <h1 className='text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em]'>Appliance Repair</h1>
                            <div className='grid grid-cols-4 mt-[28px]'>
                                <div className='flex w-full items-center justify-center flex-col cursor-pointer'>
                                    <div>
                                        <img src="/../assets/allservice/washingmachine.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>Washing Machine</p>
                                </div>
                                <div className='flex w-full items-center justify-center flex-col cursor-pointer'>
                                    <div>
                                        <img src="/../assets/allservice/ledTV.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>LCD-LED TV</p>
                                </div>
                                <div className='flex w-full items-center justify-center flex-col cursor-pointer'>
                                    <div>
                                        <img src="/../assets/allservice/refrigerator.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>Refrigerator</p>
                                </div>
                                <Link href="/smart/allservices/servicedetails">
                                    <div className='flex w-full items-center justify-center flex-col cursor-pointer'>
                                        <div>
                                            <img src="/../assets/allservice/microwaveowen.png" alt="" />
                                        </div>
                                        <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>Microwave Oven</p>
                                    </div>
                                </Link>
                            </div>


                            <h2 className='mt-[50px] text-[#121212] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] '>All Appliance Repair Services</h2>
                            <div className='grid grid-cols-4 mt-[25px] gap-[18px]'>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Vaccum Cleaner</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Chimney</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Gesyser</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Air-Conditioner</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>RO-Water Purifier</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Deep Fridge-VISI Cooler</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Cooking Range</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Mixer Grinder</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Home Theater</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-white pt-[30px] pl-[30px] pr-[130px] pb-[31px] border border-[#EDEDED;] rounded-[5px] mt-[30px]'>
                            <h1 className='text-[#2591B2] text-[18px] leading-[22px] font-bold tracking-[0.02em]'>Popular Brands</h1>
                            <div className='grid grid-cols-4 mt-[28px]'>
                                <div className='flex w-full items-center justify-center flex-col'>
                                    <div>
                                        <img src="/../assets/allservice/samsung.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>Samsung</p>
                                </div>
                                <div className='flex w-full items-center justify-center flex-col'>
                                    <div>
                                        <img src="/../assets/allservice/lg.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>LG</p>
                                </div>
                                <div className='flex w-full items-center justify-center flex-col'>
                                    <div>
                                        <img src="/../assets/allservice/ifb.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>IFB</p>
                                </div>
                                <div className='flex w-full items-center justify-center flex-col'>
                                    <div>
                                        <img src="/../assets/allservice/isensse.png" alt="" />
                                    </div>
                                    <p className='text-[#505056] text-[13px] font-normal leading-[15.23px] mt-[10px]'>Hisense</p>
                                </div>
                            </div>


                            <h2 className='mt-[50px] text-[#121212] text-[16px] leading-[18.75px] font-normal tracking-[0.02em] '>All Popular Brand Services</h2>
                            <div className='grid grid-cols-4 mt-[25px] gap-[18px]'>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>TCL</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>ELBA</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>DAIKIN</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>SONY</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Skyworth</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Electrolux</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>Videocon</p>
                                </div>
                                <div>
                                    <p className='text-[#505056] text-[15px] leading-[18px] font-normal tracking-[0.02em] cursor-pointer'>MI TV</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto fixed top-[40%]'>
                {/* <Row>
                    <Col span={8}>
                        <Anchor
                            items={[
                                {
                                    key: 'part-1',
                                    href: '#part-1',
                                    title: 'Part 1',
                                },
                                {
                                    key: 'part-2',
                                    href: '#part-2',
                                    title: 'Part 2',
                                },
                                {
                                    key: 'part-3',
                                    href: '#part-3',
                                    title: 'Part 3',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={16}>
                        <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
                        <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
                        <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
                    </Col>

                </Row> */}
            </div>
            <BottomNavbar />
            <Footerinfo />
            <Copyright />
        </div>
    )
}

export default Allservices