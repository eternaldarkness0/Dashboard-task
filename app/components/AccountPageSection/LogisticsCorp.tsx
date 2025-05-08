import React from 'react'
import logo from '@/image/logo.png'
import Image from 'next/image'
import { FaArrowRightLong, FaExclamation } from 'react-icons/fa6'
import Link from 'next/link'

const LogisticsCorp = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto text-white overflow-hidden'>
        <p className='whitespace-normal xl:whitespace-nowrap  mt-5'>Dashboards // Accounts // <span className='text-blue-500'>Maritime Logistics Corp</span></p>

        <div className='mt-4 flex items-center justify-center lg:justify-between flex-wrap gap-10'>
            <div className='flex items-center gap-5'>
                <Image src={logo} alt='logo-image' height={100} width={100} className='w-[100px] h-[100px]'/>

                <div>
                    <h3 className='text-4xl font-extralight mb-2'>Maritime Logistics Corp</h3>

                    <div className='flex mt-3'>
                        <p className='pr-3 whitespace-normal xl:whitespace-nowrap'>425 Harbor Boulevard, Suite 300 <br />Seattle, WA 98104</p>

                        <div className='hidden lg:flex items-center gap-7'>
                            <div className='border-l-1 border-l-gray-400 pl-2 text-sm whitespace-nowrap'>
                                <p className='text-gray-400'>EXISTING ACCOUNT</p>
                                <span>54384</span>
                            </div>

                            <div className='border-l-1 border-l-gray-400 pl-2 text-sm whitespace-nowrap'>
                                <p className='text-gray-400'>BROKER</p>
                                <span>Marsh McLennan</span>
                            </div>

                            <div className='border-l-1 border-l-gray-400 pl-2 text-sm whitespace-nowrap'>
                                <p className='text-gray-400'>UNDERWRITER</p>
                                <span>Kate Johnson</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            <div className='border border-yellow-300 transition-all duration-300 hover:border-yellow-500 rounded-3xl p-4'>
                <div className='flex items-center gap-4'>
                    <FaExclamation className='w-7 h-7 p-1 border-2 border-yellow-300 rounded-full text-yellow-300'/>
                    <p className='text-yellow-300 text-2xl font-light'>Needs Attention</p>
                </div>

                <div className='flex flex-col items-start lg:flex-row lg:items-center mt-4 gap-6 whitespace-nowrap'>
                    <div>
                        <h3 className='text-lg font-light'>Marine Survey Requuired</h3>
                        <p className='text-gray-400 text-sm'>Scheduled for 06/12/2025</p>

                        <Link href='/accounts' className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 text-lg'>
                            <p>Review details link</p>
                            <FaArrowRightLong />
                        </Link>
                    </div>

                    <div>
                        <h3 className='text-lg font-light'>Loss Control Complete</h3>
                        <p className='text-gray-400 text-sm'>Loss inspection 02/15/2025</p>

                        <Link href='/accounts' className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 text-lg'>
                            <p>View report</p>
                            <FaArrowRightLong />
                        </Link>
                    </div>

                    <div>
                        <h3 className='text-lg font-light'>Claims Review Requuired</h3>
                        <p className='text-gray-400 text-sm'>3 open claims // $245.000TTL</p>

                        <Link href='/accounts'  className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 text-lg'>
                            <p>View claims</p>
                            <FaArrowRightLong />
                        </Link>
                    </div>
                    
                </div>
            </div>


        </div>
    </div>
  )
}

export default LogisticsCorp
