import React, { useState } from 'react'
import { Select } from 'antd';
import { Rate } from 'antd';
import Topbar from '../../components/Topbar';
import BottomNavbar from '../../components/BottomNavbar';
import Footerinfo from '../../components/Footerinfo';
import Copyright from '../../components/Copyright';
import DownloadOurApp from '../../components/DownloadOurApp';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

type Props = {}

const professionals = (props: Props) => {
    const [value, setValue] = useState(3);
    return (
        <div>
            <Topbar />
            <div>
                <div className='mt-[0px] relative'>
                    <img src="/../assets/professionals/profesionalBanner.jpg" alt="" className='w-full h-[222px] object-cover' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[#F9F9F9] flex items-center justify-center flex-col'>
                        <h1 className='text-[35px] leading-[52.5px] font-bold tracking-[0.02em] mb-[11px] professional_title'>Professional</h1>
                        <p className='text-[18px] leading-[27px] font-normal text-[#F9F9F9]tracking-[0.02em] professional_title'>Home  &gt;  Professionals</p>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] pb-[35px]'>
                    <div className='mx-auto container'>
                        <div className='pt-[18px]'>
                            <h2 className='text-[#2591B2] leading-[15.23px] tracking-[0.02em] font-bold'>Service Location</h2>
                            <div className='flex items-center gap-[20px] mt-[14px]'>
                                <div className='border border-[#EDEDED] rounded-[2px] flex items-center gap-[19px] h-[51px] basis-[62%] pl-[23px] cursor-pointer'>
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M6 0C8.4825 0 10.5 2.02667 10.5 4.53333C10.5 7.93143 6 12.9524 6 12.9524C6 12.9524 1.5 7.93143 1.5 4.53333C1.5 2.02667 3.5175 0 6 0ZM6 3.04762C5.60218 3.04762 5.22064 3.20816 4.93934 3.49393C4.65804 3.7797 4.5 4.16729 4.5 4.57143C4.5 4.97557 4.65804 5.36315 4.93934 5.64892C5.22064 5.93469 5.60218 6.09524 6 6.09524C6.39782 6.09524 6.77936 5.93469 7.06066 5.64892C7.34196 5.36315 7.5 4.97557 7.5 4.57143C7.5 4.16729 7.34196 3.7797 7.06066 3.49393C6.77936 3.20816 6.39782 3.04762 6 3.04762ZM12 12.9524C12 14.6362 9.315 16 6 16C2.685 16 0 14.6362 0 12.9524C0 11.9695 0.915 11.0933 2.3325 10.5371L2.8125 11.2305C2.0025 11.5733 1.5 12.0457 1.5 12.5714C1.5 13.6229 3.5175 14.4762 6 14.4762C8.4825 14.4762 10.5 13.6229 10.5 12.5714C10.5 12.0457 9.9975 11.5733 9.1875 11.2305L9.6675 10.5371C11.085 11.0933 12 11.9695 12 12.9524Z" fill="#505056" />
                                    </svg>
                                    <p className='text-[#505056] text-[14px] leading-[17.01px]  font-normal tracking-[0.02em]'>Location</p>
                                </div>
                                <div className='border border-[#EDEDED] rounded-[2px] flex items-center gap-[19px] h-[51px] basis-[24%] pl-[23px] cursor-pointer'>
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M6 0C8.4825 0 10.5 2.02667 10.5 4.53333C10.5 7.93143 6 12.9524 6 12.9524C6 12.9524 1.5 7.93143 1.5 4.53333C1.5 2.02667 3.5175 0 6 0ZM6 3.04762C5.60218 3.04762 5.22064 3.20816 4.93934 3.49393C4.65804 3.7797 4.5 4.16729 4.5 4.57143C4.5 4.97557 4.65804 5.36315 4.93934 5.64892C5.22064 5.93469 5.60218 6.09524 6 6.09524C6.39782 6.09524 6.77936 5.93469 7.06066 5.64892C7.34196 5.36315 7.5 4.97557 7.5 4.57143C7.5 4.16729 7.34196 3.7797 7.06066 3.49393C6.77936 3.20816 6.39782 3.04762 6 3.04762ZM12 12.9524C12 14.6362 9.315 16 6 16C2.685 16 0 14.6362 0 12.9524C0 11.9695 0.915 11.0933 2.3325 10.5371L2.8125 11.2305C2.0025 11.5733 1.5 12.0457 1.5 12.5714C1.5 13.6229 3.5175 14.4762 6 14.4762C8.4825 14.4762 10.5 13.6229 10.5 12.5714C10.5 12.0457 9.9975 11.5733 9.1875 11.2305L9.6675 10.5371C11.085 11.0933 12 11.9695 12 12.9524Z" fill="#505056" />
                                    </svg>
                                    <p className='text-[#505056] text-[14px] leading-[17.01px]  font-normal tracking-[0.02em]'>Location</p>
                                </div>
                                <div className='border border-[#EDEDED] rounded-[2px] flex items-center gap-[19px] h-[51px] basis-[24%] pl-[23px] cursor-pointer'>
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M6 0C8.4825 0 10.5 2.02667 10.5 4.53333C10.5 7.93143 6 12.9524 6 12.9524C6 12.9524 1.5 7.93143 1.5 4.53333C1.5 2.02667 3.5175 0 6 0ZM6 3.04762C5.60218 3.04762 5.22064 3.20816 4.93934 3.49393C4.65804 3.7797 4.5 4.16729 4.5 4.57143C4.5 4.97557 4.65804 5.36315 4.93934 5.64892C5.22064 5.93469 5.60218 6.09524 6 6.09524C6.39782 6.09524 6.77936 5.93469 7.06066 5.64892C7.34196 5.36315 7.5 4.97557 7.5 4.57143C7.5 4.16729 7.34196 3.7797 7.06066 3.49393C6.77936 3.20816 6.39782 3.04762 6 3.04762ZM12 12.9524C12 14.6362 9.315 16 6 16C2.685 16 0 14.6362 0 12.9524C0 11.9695 0.915 11.0933 2.3325 10.5371L2.8125 11.2305C2.0025 11.5733 1.5 12.0457 1.5 12.5714C1.5 13.6229 3.5175 14.4762 6 14.4762C8.4825 14.4762 10.5 13.6229 10.5 12.5714C10.5 12.0457 9.9975 11.5733 9.1875 11.2305L9.6675 10.5371C11.085 11.0933 12 11.9695 12 12.9524Z" fill="#505056" />
                                    </svg>
                                    <p className='text-[#505056] text-[14px] leading-[17.01px]  font-normal tracking-[0.02em]'>Location</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[14px] '>
                            <h2 className='text-[#2591B2] leading-[15.23px] tracking-[0.02em] font-bold'>Services</h2>
                            <div className='grid grid-cols-5 pl-[27px] gap-y-[18px] pt-[18px]'>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px]  ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>All Services</p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Appliance Repairs</p>
                                </div>
                                <div className='flex  gap-[6px] items-center'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal mb-[0px]'>Washing Machine
                                        Repairs</p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Pest Control
                                    </p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Cleaning services
                                    </p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Ac Repairs
                                    </p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Pest Control
                                    </p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Cleaning services
                                    </p>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input type="checkbox" className='h-[13px] w-[13px] ' />
                                    <p className='text-[#505056] text-[14px] leading-[16.41px] font-normal '>Mobile Repairs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[296px] h-[41px] flex items-center justify-center bg-[#2591B2] mt-[29px] mx-auto cursor-pointer' >
                            <p className='text-[13px] leading-[15.23px] font-bold tracking-[0.02em] text-white'>APPLY FILTERS</p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto container'>
                    <div className=' mt-[39px] pb-[39px]'>
                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='text-[#121212] text-[32px] leading-[37.5px] font-normal tracking-[0.01em]'>Our Professionals </h1>
                                    <p className='text-[#505056] text-[14px] mt-[12px] leading-[16.41px] font-normal tracking-[0.01em]'>Showing 1-20 of  50</p>
                                </div>
                                <div className='flex items-center gap-[17px] pt-[29px]'>
                                    <Select
                                        defaultValue="Default Sorting"
                                        style={{ width: 210 }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                    />
                                    <svg className='cursor-pointer' width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="11.1111" height="10" rx="1" fill="#D9D9D9" />
                                        <rect x="15.1113" y="0.5" width="11.1111" height="10" rx="1" fill="#D9D9D9" />
                                        <rect y="14.5" width="11.1111" height="10" rx="1" fill="#D9D9D9" />
                                        <rect x="15.1113" y="14.5" width="11.1111" height="10" rx="1" fill="#D9D9D9" />
                                    </svg>
                                    <svg className='cursor-pointer' width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.222656" width="24" height="6.13331" rx="1" fill="#2591B2" />
                                        <rect x="0.222656" y="8.43311" width="24" height="6.13331" rx="1" fill="#2591B2" />
                                        <rect x="0.222656" y="16.8667" width="24" height="6.13331" rx="1" fill="#2591B2" />
                                    </svg>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-[31px] gap-y-[44px] mt-[33px]'>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p1.png" className='w-full' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p3.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p6.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p4.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p5.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p5.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p5.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[3px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                                <div className='border border-[#EDEDED]  flex  rounded-[5px] gap-[36px] relative'>
                                    <div>
                                        <img src="/../assets/professionals/p5.png" className='w-full h-[100%]' alt="" />
                                    </div>
                                    <div className='pt-[11px]'>
                                        <h1 className='text-[#2591B2] text-[22px] leading-[25.78px] font-bold'>Smart Service Center, Pokhara </h1>
                                        <div className='mt-[8px]'>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>Kumaripati, Lalitpur</p>
                                            <p className='text-[#505056] text-[16px] leading-[19px] font-normal'>smartcare@gmail.com</p>
                                        </div>
                                        <div className='mt-[17px] flex  gap-[5px]'>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[32px]'>Kent</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[32px]'>Bravos</button>
                                            <button className='bg-[#1F3F981A] text-[#2591B2] text-[12px] leading-[14px] font-normal py-[2px] px-[9px] rounded-[32px]'>Haier</button>
                                        </div>
                                        <div className='mt-[26px] flex gap-[13.6px]'>
                                            <button className='bg-[#2591B2] rounded-[4.08px] text-[#FFFFFF] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Book Now</button>
                                            <button className='bg-[#ED1B261A] rounded-[4.08px] text-[#505056] text-[16px] leading-[19px] font-normal py-[6.8px] px-[17.9px]'>Profile</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <DownloadOurApp />
            <BottomNavbar />
            <Footerinfo />
            <Copyright />
        </div>
    )
}

export default professionals