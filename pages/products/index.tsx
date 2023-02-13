import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import { Select } from 'antd';


type Props = {}
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const index = (props: Props) => {
    const [row, setRow] = useState(false)
    const [grid, setGrid] = useState(false)
    const [defaults, setDefaults] = useState('#2591B2');

    const rowView = () => {
        setRow(!row)
        setGrid(false)
    }
    const gridView = () => {
        setGrid(!grid)
        setRow(false)
    }

    return (
        <div>
            <Topbar />
            <div className='px-[14px]'>
                <div className=' flex items-center bg-[#FFAA45]/[0.2] rounded-[2px] w-full cursor-pointer pr-[10.5px] sm:hidden'>
                    <input type="text" placeholder='Search for a service' className='w-full outline-none pt-[13px] pb-[13px] pl-[17.99px] placeholder:text-[#495057D4] placeholder:text-[12px] leading-[18px] bg-transparent font-light tracking-[0.3px]' />
                    <div className=''>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.64648 16.646C10.4215 16.6456 12.1453 16.0514 13.5435 14.958L17.9395 19.354L19.3535 17.94L14.9575 13.544C16.0515 12.1457 16.6461 10.4214 16.6465 8.646C16.6465 4.235 13.0575 0.645996 8.64648 0.645996C4.23548 0.645996 0.646484 4.235 0.646484 8.646C0.646484 13.057 4.23548 16.646 8.64648 16.646ZM8.64648 2.646C11.9555 2.646 14.6465 5.337 14.6465 8.646C14.6465 11.955 11.9555 14.646 8.64648 14.646C5.33748 14.646 2.64648 11.955 2.64648 8.646C2.64648 5.337 5.33748 2.646 8.64648 2.646Z" fill="#676767" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-[30px] pl-[12px] pr-[14px] pb-[30px]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-[#232323] text-[16] leading-[18.75px] font-medium tracking-[0.02em]'>Our Products </h1>
                        {/* <p className='text-[#505056] text-[14px] mt-[12px] leading-[16.41px] font-normal tracking-[0.01em]'>Showing 1-20 of 200 Products</p> */}
                    </div>
                    <Select
                        defaultValue="Default Sorting"
                        style={{ width: 130 }}
                        onChange={handleChange}
                        className="product"

                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </div>
                {/* <div className='w-full h-[1px] bg-[#EDEDED] rounded-[5px] mt-[33px] mb-[47px]'>

                </div> */}
                {/* products */}
                <div className={row ? "grid grid-cols-1 gap-x-[12px] gap-y-[13px] mb-[72px] mt-[18px]" : "grid grid-cols-2 gap-x-[12px] gap-y-[13px] mb-[112px] mt-[18px]"}>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p1.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block ">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p2.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p3.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p4.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p5.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"} >
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p6.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p7.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p8.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>

                        </div>
                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p9.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>
                    <div className={row ? " flex border-[#EDEDED] rounded-[5px]" : "border border-[#EDEDED] rounded-[5px]"}>
                        <div className={row ? "h-[104px] flex items-center justify-center" : "h-[138px] flex items-center justify-center"}>
                            <img src="/../assets/partpurja/p10.png" alt="" className={row ? "w-[100px] h-[100%] object-cover" : "w-full h-[100%] object-cover"} />
                        </div>
                        <div className={row ? "px-[10px] pt-[0px] pb-[0px]" : "px-[10px] pt-[9px] pb-[17px]"}>
                            <div className={row ? "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[194px]" : "bg-[#1F3F981A] rounded-[37px] mt-[0px] pt-[2px] px-[10px]  flex items-center justify-start h-[20px] w-[134px]"}>
                                <p className="text-[#2591B2] text-[8px] leading-[9.72px] tracking-[0.01em] font-bold inline-block">WHIRLPOOL WM WATER SEAL</p>
                            </div>
                            <h2 className={row ? "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[8px]" : "text-[#232323] text-[11px] leading-[15.4px] tracking-[0.01em] font-bold max-w-257px mt-[9px] pb-[13px]"}>WM Whirlpool TL Water Seal whirlpool S107*25*50*</h2>
                            <p className='text-[#232323] text-[10px] leading-[12.15px] tracking-[0.01em] font-normal'>Market Price: Rs. 1200.00</p>
                            <div className='flex items-center justify-between mt-[6px]'>
                                <p className='text-[#1F3F98] text-[13px] leading-[15.8px] tracking-[0.01em] font-medium'>Rs. 900.00</p>
                                {/* <p className='text-[#505056] text-[14px] leading-[17.01px] font-normal tracking-[0.01em]'>View Details</p> */}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className=' bg-white shadow-lg fixed bottom-[81px] left-[50%] transform translate-x-[-50%] w-[114px] h-[46px] rounded-full flex justify-center items-center gap-[34px]'>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={gridView} >
                    <rect y="0.5" width="7.20339" height="6.48305" rx="0.648305" fill={grid ? "#2591B2" : "#D9D9D9"} />
                    <rect x="9.79663" y="0.5" width="7.20339" height="6.48305" rx="0.648305" fill={grid ? "#2591B2" : "#D9D9D9"} />
                    <rect y="9.25" width="7.20339" height="6.48305" rx="0.648305" fill={grid ? "#2591B2" : "#D9D9D9"} />
                    <rect x="9.79663" y="9.25" width="7.20339" height="6.48305" rx="0.648305" fill={grid ? "#2591B2" : "#D9D9D9"} />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={rowView}>
                    <rect y="0.5" width="15.6522" height="3.99998" rx="1" fill={row ? "#2591B2" : "#D9D9D9"} />
                    <rect y="5.99991" width="15.6522" height="3.99998" rx="1" fill={row ? "#2591B2" : "#D9D9D9"} />
                    <rect y="11.5" width="15.6522" height="3.99998" rx="1" fill={row ? "#2591B2" : "#D9D9D9"} />
                </svg>

            </div>

        </div>
    )
}

export default index 