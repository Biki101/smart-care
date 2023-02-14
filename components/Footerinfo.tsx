import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

type Props = {}



const Footerinfo = (props: Props) => {

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
        <>
            <div className='bg-[#001140] pb-[38px] hidden sm:block'>
                <div className='container mx-auto pt-[36px] px-[10px] sm:px-0'>
                    <h1 className='text-[#FFFFFF] text-[16px] leading-[18.75px] font-semibold'>We Are Available In</h1>
                    <div className='grid md:grid-cols-8 grid-cols-3 md:text-[14px] text-[13px] leading-[16.41px] font-normal text-white opacity-[0.7] gap-y-[20px] md:mt-[20px] mt-[30px]  pb-[50px] '>
                        <div>
                            <p className='opacity-[0.7]'>Pokhara</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Butwal</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>kathmandu</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Chitwan</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Bhairawa</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Kavre</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Lalitpur</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Lumbini</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Mustang</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Ilam</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Jhapa</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Dharan</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Manang</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Hetauda</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Sindhupalchowk</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Dhangadi</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Lorem</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Ipsum</p>
                        </div>
                        <div>
                            <p className='opacity-[0.7]'>Dolor</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FBFCFE]/[0.23] w-[95%] mx-auto h-[1px]'>

                </div>
                <div className='grid md:grid-cols-3 grid-cols-2  container mx-auto mt-[24px]'>
                    <div className='md:flex-row flex flex-col items-center md:gap-[21px]  px-[10px]'>
                        <div className='cursor-pointer'>
                            <img src="/../assets/bottom_logo.png" alt="" />
                        </div>
                        <div className=' mt-[20px] md:mt-0'>
                            <h2 className='text-[#FFFFFF] text-[14px] leading-[16.41px] font-bold  mb-[8px]'>Contact us</h2>
                            <p className='text-white text-[13px] leading-[15.23px] font-light mb-[8px]'>Smart Care Service and Solution Pvt. Ltd.</p>
                            <p className='text-white text-[13px] leading-[15.23px] font-light'>Kumaripati, Lalitpur, Near Bluebird College, Nepal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[8px] justify-center'>
                        <svg className='cursor-pointer ' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM17 11H14V8.899C14 8.402 14.402 8 14.9 8H17V5H14.904C13.791 5 12.862 5.41 12.118 6.233C11.374 7.054 11 8.556 11 9.745V11H8V14H11V21H14V14H17V11Z" fill="white" />
                        </svg>
                        <svg className='cursor-pointer' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM12.5 10C11.837 10 11.2011 10.2634 10.7322 10.7322C10.2634 11.2011 10 11.837 10 12.5C10 13.163 10.2634 13.7989 10.7322 14.2678C11.2011 14.7366 11.837 15 12.5 15C13.163 15 13.7989 14.7366 14.2678 14.2678C14.7366 13.7989 15 13.163 15 12.5C15 11.837 14.7366 11.2011 14.2678 10.7322C13.7989 10.2634 13.163 10 12.5 10ZM6.31802 6.31802C7.16193 5.47411 8.30653 5 9.5 5H15.5C16.6935 5 17.8381 5.47411 18.682 6.31802C19.5259 7.16193 20 8.30653 20 9.5V15.5C20 16.6935 19.5259 17.8381 18.682 18.682C17.8381 19.5259 16.6935 20 15.5 20H9.5C8.30653 20 7.16193 19.5259 6.31802 18.682C5.47411 17.8381 5 16.6935 5 15.5V9.5C5 8.30653 5.47411 7.16193 6.31802 6.31802ZM10.0251 10.0251C9.36875 10.6815 9 11.5717 9 12.5C9 13.4283 9.36875 14.3185 10.0251 14.9749C10.6815 15.6313 11.5717 16 12.5 16C13.4283 16 14.3185 15.6313 14.9749 14.9749C15.6313 14.3185 16 13.4283 16 12.5C16 11.5717 15.6313 10.6815 14.9749 10.0251C14.3185 9.36875 13.4283 9 12.5 9C11.5717 9 10.6815 9.36875 10.0251 10.0251ZM17 9H16V8H17V9Z" fill="white" />
                        </svg>
                        <svg className='cursor-pointer' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM13.14 7H13.051V7.001H12.858C11.9058 7.00437 10.9537 7.02137 10.002 7.052L9.831 7.059L9.745 7.062L9.573 7.068L9.403 7.075C8.293 7.125 7.236 7.205 6.749 7.335C6.40937 7.42689 6.09986 7.60645 5.85151 7.85568C5.60316 8.10491 5.42469 8.41505 5.334 8.755C5.233 9.134 5.162 9.638 5.114 10.157L5.104 10.261L5.082 10.521L5.074 10.625L5.071 10.677L5.064 10.78C5.01 11.6 5.002 12.343 5 12.558V12.681C5.0053 13.3604 5.03265 14.0394 5.082 14.717L5.09 14.821L5.098 14.926C5.148 15.498 5.222 16.067 5.333 16.484C5.42385 16.8238 5.60238 17.1337 5.85072 17.3827C6.09907 17.6318 6.40849 17.8112 6.748 17.903C7.235 18.035 8.292 18.114 9.402 18.163L9.573 18.17L9.744 18.177L9.831 18.181L10.001 18.187C11.341 18.233 12.619 18.239 12.928 18.239H13.07C13.681 18.238 18.09 18.216 19.25 17.904C19.5896 17.8121 19.8991 17.6325 20.1475 17.3833C20.3958 17.1341 20.5743 16.824 20.665 16.484C20.776 16.066 20.85 15.498 20.9 14.926L20.909 14.822L20.917 14.717C20.989 13.765 20.998 12.851 20.999 12.657V12.582C20.998 12.395 20.99 11.539 20.925 10.625L20.917 10.521L20.895 10.261L20.885 10.157C20.837 9.638 20.766 9.135 20.665 8.755C20.574 8.41518 20.3955 8.10519 20.1472 7.85601C19.8989 7.60682 19.5895 7.42717 19.25 7.335C18.127 7.033 13.962 7.003 13.14 7ZM11.4 15.028V10.21L15.557 12.62L11.4 15.028Z" fill="white" />
                        </svg>
                        <svg className='cursor-pointer' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM18.2361 8.89882C18.8528 8.82118 19.4479 8.65882 20 8.41177C19.5841 9.02588 19.0679 9.56235 18.4656 9.98588C18.4728 10.12 18.4728 10.2471 18.4728 10.3812C18.4728 14.3835 15.3681 19 9.71797 19C7.98279 19 6.36233 18.4988 5 17.6376C5.24379 17.6659 5.48757 17.68 5.73136 17.68C7.11807 17.6866 8.4658 17.2285 9.55306 16.3812C8.91165 16.3697 8.29003 16.1606 7.77559 15.7832C7.26114 15.4059 6.87974 14.8794 6.68499 14.2776C7.14395 14.3667 7.61763 14.3498 8.06883 14.2282C6.66348 13.9529 5.60229 12.7247 5.60229 11.2565V11.2353C6.01816 11.4471 6.4914 11.5882 7.00048 11.5882C6.16874 11.0588 5.63098 10.1271 5.63098 9.07529C5.63098 8.52471 5.78155 8.00235 6.04685 7.55765C7.55975 9.38588 9.8327 10.5929 12.3853 10.72C12.3351 10.5012 12.3064 10.2682 12.3064 10.0282C12.3064 8.35529 13.6831 7 15.3681 7C16.2715 7 17.0674 7.35294 17.6338 7.96C18.3294 7.81882 18.989 7.57176 19.5841 7.21882C19.3547 7.93176 18.8671 8.52471 18.2361 8.89882Z" fill="white" />
                        </svg>

                    </div>
                    <div className=' items-end justify-center md:flex-col pr-[125px] xl:pr-[90px]  hidden md:flex'>
                        <img src="/../assets/googleplay.png" alt="" className='cursor-pointer' />
                        <img src="/../assets/appstore.png" alt="" className='cursor-pointer mr-[5px]' />
                    </div>
                </div>
            </div>
            {/* footer navbar */}
            {/* <div className='grid grid-cols-4 w-full fixed left-0 bottom-0 bg-white  shadow-xl sm:hidden '>

            
                <div className='flex items-center justify-center flex-col py-[16px]' onClick={homeclick}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M18 18.3663C18 18.6316 17.8946 18.8859 17.7071 19.0735C17.5196 19.261 17.2652 19.3663 17 19.3663H1C0.734784 19.3663 0.48043 19.261 0.292893 19.0735C0.105357 18.8859 2.4071e-07 18.6316 2.4071e-07 18.3663V7.85635C-0.000105484 7.70396 0.0346172 7.55356 0.101516 7.41665C0.168415 7.27973 0.26572 7.15991 0.386 7.06635L8.386 0.844346C8.56154 0.707791 8.7776 0.633652 9 0.633652C9.2224 0.633652 9.43846 0.707791 9.614 0.844346L17.614 7.06635C17.7343 7.15991 17.8316 7.27973 17.8985 7.41665C17.9654 7.55356 18.0001 7.70396 18 7.85635V18.3663ZM16 17.3663V8.34435L9 2.90035L2 8.34435V17.3663H16ZM4 13.3663H14V15.3663H4V13.3663Z" fill={home ? "#2591B2" : "black"} />
                    </svg>
                    <p className={home ? "mt-[5px] text-[#2591B2] homes text-[12px] leading-[14.06px] font-medium" : "mt-[5px] text-[#000000] text-[12px] leading-[14.06px] font-normal"}>Home</p>
                </div>
          
               
                <div className='flex items-center justify-center flex-col py-[16px]' onClick={serviceClick}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.38467 8.99513C9.38467 8.30721 9.14429 7.71988 8.66352 7.23315C8.18275 6.74641 7.60262 6.50304 6.92313 6.50304C6.24365 6.50304 5.66352 6.74641 5.18275 7.23315C4.70198 7.71988 4.46159 8.30721 4.46159 8.99513C4.46159 9.68305 4.70198 10.2704 5.18275 10.7571C5.66352 11.2439 6.24365 11.4872 6.92313 11.4872C7.60262 11.4872 8.18275 11.2439 8.66352 10.7571C9.14429 10.2704 9.38467 9.68305 9.38467 8.99513ZM16.7693 13.9793C16.7693 13.6418 16.6475 13.3498 16.4039 13.1032C16.1603 12.8566 15.8718 12.7333 15.5385 12.7333C15.2052 12.7333 14.9167 12.8566 14.6731 13.1032C14.4295 13.3498 14.3077 13.6418 14.3077 13.9793C14.3077 14.3233 14.4279 14.6169 14.6683 14.8603C14.9087 15.1037 15.1988 15.2254 15.5385 15.2254C15.8783 15.2254 16.1683 15.1037 16.4087 14.8603C16.6491 14.6169 16.7693 14.3233 16.7693 13.9793ZM16.7693 4.01095C16.7693 3.67348 16.6475 3.38144 16.4039 3.13483C16.1603 2.88821 15.8718 2.76491 15.5385 2.76491C15.2052 2.76491 14.9167 2.88821 14.6731 3.13483C14.4295 3.38144 14.3077 3.67348 14.3077 4.01095C14.3077 4.35491 14.4279 4.64858 14.6683 4.89194C14.9087 5.13531 15.1988 5.257 15.5385 5.257C15.8783 5.257 16.1683 5.13531 16.4087 4.89194C16.6491 4.64858 16.7693 4.35491 16.7693 4.01095ZM13.077 8.10927V9.9102C13.077 9.9751 13.0545 10.0384 13.0097 10.1C12.9648 10.1617 12.9135 10.1957 12.8558 10.2022L11.3654 10.4359C11.2949 10.663 11.1924 10.9096 11.0577 11.1757C11.2757 11.4872 11.5642 11.8604 11.9231 12.2952C11.968 12.3666 11.9904 12.4315 11.9904 12.4899C11.9904 12.5678 11.968 12.6294 11.9231 12.6749C11.7757 12.8696 11.5113 13.16 11.1299 13.5461C10.7485 13.9323 10.4969 14.1253 10.3751 14.1253C10.3045 14.1253 10.2372 14.1026 10.1731 14.0572L9.06736 13.1811C8.83018 13.3044 8.58339 13.405 8.32698 13.4828C8.25647 14.1837 8.18275 14.6867 8.10582 14.9917C8.06095 15.1475 7.9648 15.2254 7.81736 15.2254H6.0289C5.95839 15.2254 5.89429 15.201 5.83659 15.1523C5.7789 15.1037 5.74685 15.0469 5.74044 14.982L5.51929 13.4926C5.30134 13.4277 5.06095 13.3271 4.79813 13.1908L3.66352 14.0572C3.61865 14.1026 3.55454 14.1253 3.47121 14.1253C3.4007 14.1253 3.33339 14.0994 3.26929 14.0475C2.34621 13.1843 1.88467 12.6651 1.88467 12.4899C1.88467 12.4315 1.90711 12.3698 1.95198 12.3049C2.01608 12.2141 2.14749 12.0421 2.34621 11.789C2.54493 11.5359 2.69557 11.338 2.79813 11.1952C2.6507 10.9096 2.53852 10.6435 2.46159 10.3969L1.00006 10.1633C0.935954 10.1568 0.881467 10.126 0.836595 10.0708C0.791723 10.0157 0.769287 9.95238 0.769287 9.88099V8.08007C0.769287 8.01517 0.791723 7.95189 0.836595 7.89024C0.881467 7.82859 0.932749 7.79452 0.990441 7.78803L2.48083 7.55439C2.55134 7.32725 2.6539 7.08064 2.78852 6.81455C2.57057 6.50304 2.28211 6.12988 1.92313 5.69506C1.87826 5.62367 1.85583 5.55877 1.85583 5.50037C1.85583 5.42249 1.87826 5.35759 1.92313 5.30567C2.06416 5.11098 2.32698 4.82218 2.71159 4.43928C3.09621 4.05638 3.34941 3.86493 3.47121 3.86493C3.54172 3.86493 3.60903 3.88765 3.67313 3.93307L4.7789 4.8092C4.99685 4.69238 5.24365 4.58855 5.51929 4.49769C5.5898 3.79679 5.66352 3.29707 5.74044 2.99854C5.78531 2.84278 5.88147 2.76491 6.0289 2.76491H7.81736C7.88788 2.76491 7.95198 2.78924 8.00967 2.83792C8.06736 2.88659 8.09941 2.94338 8.10582 3.00827L8.32698 4.49769C8.54493 4.56259 8.78531 4.66318 9.04813 4.79946L10.1827 3.93307C10.234 3.88765 10.2981 3.86493 10.3751 3.86493C10.4456 3.86493 10.5129 3.89089 10.577 3.94281C11.5001 4.80595 11.9616 5.32514 11.9616 5.50037C11.9616 5.55228 11.9392 5.61394 11.8943 5.68533C11.8174 5.78916 11.6827 5.96439 11.4904 6.211C11.2981 6.45761 11.1539 6.65231 11.0577 6.79508C11.2052 7.1066 11.3142 7.37268 11.3847 7.59333L12.8462 7.81723C12.9103 7.83021 12.9648 7.86428 13.0097 7.91945C13.0545 7.97461 13.077 8.03788 13.077 8.10927ZM19.2308 13.2979V14.6607C19.2308 14.7646 18.7533 14.8652 17.7981 14.9625C17.7212 15.1377 17.6251 15.3065 17.5097 15.4687C17.8366 16.2021 18.0001 16.6499 18.0001 16.8121C18.0001 16.8381 17.9872 16.8608 17.9616 16.8803C17.1795 17.341 16.7821 17.5714 16.7693 17.5714C16.718 17.5714 16.5706 17.4189 16.327 17.1139C16.0834 16.8089 15.9167 16.5882 15.827 16.4519C15.6988 16.4649 15.6026 16.4714 15.5385 16.4714C15.4744 16.4714 15.3783 16.4649 15.2501 16.4519C15.1603 16.5882 14.9936 16.8089 14.7501 17.1139C14.5065 17.4189 14.359 17.5714 14.3077 17.5714C14.2949 17.5714 13.8975 17.341 13.1154 16.8803C13.0898 16.8608 13.077 16.8381 13.077 16.8121C13.077 16.6499 13.2404 16.2021 13.5674 15.4687C13.452 15.3065 13.3558 15.1377 13.2789 14.9625C12.3238 14.8652 11.8462 14.7646 11.8462 14.6607V13.2979C11.8462 13.194 12.3238 13.0935 13.2789 12.9961C13.3622 12.8079 13.4584 12.6392 13.5674 12.4899C13.2404 11.7566 13.077 11.3088 13.077 11.1465C13.077 11.1205 13.0898 11.0978 13.1154 11.0784C13.1411 11.0654 13.2533 11.0005 13.452 10.8837C13.6507 10.7669 13.8398 10.6565 14.0193 10.5527C14.1988 10.4489 14.2949 10.3969 14.3077 10.3969C14.359 10.3969 14.5065 10.5478 14.7501 10.8496C14.9936 11.1514 15.1603 11.3704 15.2501 11.5067C15.3783 11.4937 15.4744 11.4872 15.5385 11.4872C15.6026 11.4872 15.6988 11.4937 15.827 11.5067C16.1539 11.0459 16.4488 10.6825 16.7116 10.4164L16.7693 10.3969C16.7949 10.3969 17.1924 10.6241 17.9616 11.0784C17.9872 11.0978 18.0001 11.1205 18.0001 11.1465C18.0001 11.3088 17.8366 11.7566 17.5097 12.4899C17.6186 12.6392 17.7148 12.8079 17.7981 12.9961C18.7533 13.0935 19.2308 13.194 19.2308 13.2979ZM19.2308 3.32952V4.69238C19.2308 4.79622 18.7533 4.89681 17.7981 4.99416C17.7212 5.16938 17.6251 5.33812 17.5097 5.50037C17.8366 6.23371 18.0001 6.68151 18.0001 6.84376C18.0001 6.86972 17.9872 6.89243 17.9616 6.9119C17.1795 7.37268 16.7821 7.60307 16.7693 7.60307C16.718 7.60307 16.5706 7.45056 16.327 7.14553C16.0834 6.84051 15.9167 6.61986 15.827 6.48357C15.6988 6.49655 15.6026 6.50304 15.5385 6.50304C15.4744 6.50304 15.3783 6.49655 15.2501 6.48357C15.1603 6.61986 14.9936 6.84051 14.7501 7.14553C14.5065 7.45056 14.359 7.60307 14.3077 7.60307C14.2949 7.60307 13.8975 7.37268 13.1154 6.9119C13.0898 6.89243 13.077 6.86972 13.077 6.84376C13.077 6.68151 13.2404 6.23371 13.5674 5.50037C13.452 5.33812 13.3558 5.16938 13.2789 4.99416C12.3238 4.89681 11.8462 4.79622 11.8462 4.69238V3.32952C11.8462 3.22568 12.3238 3.12509 13.2789 3.02774C13.3622 2.83954 13.4584 2.6708 13.5674 2.52154C13.2404 1.78819 13.077 1.34039 13.077 1.17815C13.077 1.15219 13.0898 1.12947 13.1154 1.11C13.1411 1.09702 13.2533 1.03212 13.452 0.915308C13.6507 0.798491 13.8398 0.688164 14.0193 0.584327C14.1988 0.48049 14.2949 0.428572 14.3077 0.428572C14.359 0.428572 14.5065 0.57946 14.7501 0.881237C14.9936 1.18301 15.1603 1.40204 15.2501 1.53833C15.3783 1.52535 15.4744 1.51886 15.5385 1.51886C15.6026 1.51886 15.6988 1.52535 15.827 1.53833C16.1539 1.07755 16.4488 0.714124 16.7116 0.448041L16.7693 0.428572C16.7949 0.428572 17.1924 0.655715 17.9616 1.11C17.9872 1.12947 18.0001 1.15219 18.0001 1.17815C18.0001 1.34039 17.8366 1.78819 17.5097 2.52154C17.6186 2.6708 17.7148 2.83954 17.7981 3.02774C18.7533 3.12509 19.2308 3.22568 19.2308 3.32952Z" fill={service ? "#2591B2" : "black"} />
                    </svg>
                    <p className={service ? "mt-[5px] hover:text-[#2591B2] text-[12px] leading-[14.06px] font-medium" : "mt-[5px] text-[#000] text-[12px] font-normal leading-[14.06px]"}>Services</p>
                </div>

                <a href="/complains">
                    <div className='flex items-center justify-center flex-col py-[16px]'>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M20.3077 0H1.69231C1.24348 0 0.813035 0.153246 0.495665 0.426026C0.178296 0.698807 0 1.06878 0 1.45455V14.5455C0 14.9312 0.178296 15.3012 0.495665 15.574C0.813035 15.8468 1.24348 16 1.69231 16H20.3077C20.7565 16 21.187 15.8468 21.5043 15.574C21.8217 15.3012 22 14.9312 22 14.5455V1.45455C22 1.06878 21.8217 0.698807 21.5043 0.426026C21.187 0.153246 20.7565 0 20.3077 0ZM20.3077 14.5455H1.69231V1.45455H20.3077V14.5455ZM16.0769 4.36364C16.0769 5.52095 15.542 6.63085 14.5899 7.44919C13.6378 8.26753 12.3465 8.72727 11 8.72727C9.65352 8.72727 8.36218 8.26753 7.41007 7.44919C6.45797 6.63085 5.92308 5.52095 5.92308 4.36364C5.92308 4.17075 6.01223 3.98577 6.17091 3.84938C6.32959 3.71299 6.54482 3.63636 6.76923 3.63636C6.99364 3.63636 7.20887 3.71299 7.36755 3.84938C7.52624 3.98577 7.61538 4.17075 7.61538 4.36364C7.61538 5.13518 7.97198 5.87511 8.60672 6.42067C9.24145 6.96624 10.1023 7.27273 11 7.27273C11.8977 7.27273 12.7585 6.96624 13.3933 6.42067C14.028 5.87511 14.3846 5.13518 14.3846 4.36364C14.3846 4.17075 14.4738 3.98577 14.6324 3.84938C14.7911 3.71299 15.0064 3.63636 15.2308 3.63636C15.4552 3.63636 15.6704 3.71299 15.8291 3.84938C15.9878 3.98577 16.0769 4.17075 16.0769 4.36364Z" fill="black" />
                        </svg>
                        <p className='mt-[5px] hover:text-[#2591B2] text-[12px] leading-[14.06px]'>Complains</p>
                    </div>
                </a>
                <a href="/profile">
                    <div className='flex items-center justify-center flex-col py-[16px]'>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M6.7678 6.47528L5.47517 7.57988L5.24447 7.77703L5.31286 8.07268L5.69525 9.72579L4.25981 8.8528L4.0026 8.69638L3.74402 8.8505L2.26573 9.73156L2.66597 8.0776L2.7378 7.78079L2.50654 7.58135L1.22396 6.47528L2.91339 6.32811L3.2118 6.30212L3.32966 6.02675L3.99589 4.47025L4.64908 6.02379L4.76611 6.30212L5.06691 6.32814L6.7678 6.47528ZM6.5 14C6.5 13.5156 6.73769 13.0557 7.21382 12.6159C7.69353 12.1727 8.38188 11.7839 9.18439 11.463C10.7902 10.8209 12.727 10.5 14 10.5C15.273 10.5 17.2098 10.8209 18.8156 11.463C19.6181 11.7839 20.3065 12.1727 20.7862 12.6159C21.2623 13.0557 21.5 13.5156 21.5 14V15.5H6.5V14ZM16.4749 6.47487C15.8185 7.13125 14.9283 7.5 14 7.5C13.0717 7.5 12.1815 7.13125 11.5251 6.47487C10.8687 5.8185 10.5 4.92826 10.5 4C10.5 3.07174 10.8687 2.1815 11.5251 1.52513C12.1815 0.868749 13.0717 0.5 14 0.5C14.9283 0.5 15.8185 0.868749 16.4749 1.52513C17.1313 2.1815 17.5 3.07174 17.5 4C17.5 4.92826 17.1313 5.8185 16.4749 6.47487Z" stroke="black" />
                        </svg>
                        <p className='mt-[5px] hover:text-[#2591B2] text-[12px] leading-[14.06px]'>Profile</p>
                    </div>
                </a>
            </div> */}
        </>
    )
}

export default Footerinfo