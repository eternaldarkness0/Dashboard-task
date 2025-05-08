import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Metrics = () => {
  return (
    <div className="w-[90%] md:w-[80%] text-white mx-auto mt-8 xl:mt-0">
        <h3 className="text-3xl font-medium text-start mb-6 mt-4">Performance Metrics</h3>
        
        <div className="flex justify-center 2xl:justify-start flex-wrap 2xl:flex-nowrap gap-6">

            <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] px-6 pt-8 pb-2 md:w-full lg:w-[30%] 2xl:w-[22%] rounded-3xl space-y-3 min-w-[280px] lg:min-w-[250px]">
                <div className='flex items-center gap-4'>
                    <p className="text-2xl font-light">Winnability</p>
                    <div className="xl:flex hidden space-x-1">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="w-2 h-2 bg-blue-500 rounded-full" />
                    ))}
                    </div>
                </div>
                <h3 className="text-5xl font-light">Very Strong</h3>
                <Link href='/accounts'  className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 mt-25'>
                    <p className="text-blue-500 text-sm">See all factors</p>
                    <FaArrowRightLong />
                </Link>
                
            </div>

            <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] md:w-full lg:w-[30%] 2xl:w-[22%] p-6 pb-2 rounded-3xl space-y-3 min-w-[280px] lg:min-w-[250px]">
                <p className="text-2xl font-light">Loss Ratio</p>    
                <h3 className="text-5xl font-light">25% <span className='text-xl font-light text-gray-400'>vs 42% target</span></h3>
                
                <Link href='/accounts' className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 mt-27'>
                    <p className="text-blue-500 text-sm">View history</p>
                    <FaArrowRightLong />
                </Link>
            </div>


            <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] md:w-full lg:w-[30%] 2xl:w-[22%] p-6 rounded-3xl space-y-0 2xl:space-y-3 min-w-[280px] lg:min-w-[250px]">
                <p className="text-2xl font-light">Premium Growth</p>
                <h3 className="text-5xl font-light">12.4% <span className='text-xl font-light text-gray-400'>YoY increase</span></h3>

                <p className="text-gray-400 text-xl font-light ">$123M vs $150M Target</p>

                <Link href='/accounts' className='flex transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 mt-17'>
                    <p className="text-blue-500 text-sm">View trend</p>
                    <FaArrowRightLong />
                </Link>
                
            </div>

            <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] h-[80%] min-w-[280px] w-full lg:w-[42%] xl:w-[34%] p-6 rounded-3xl space-y-4 pr-0">
                <p className="text-2xl font-light">Exposure Distribution</p>

                <div className="space-y-2">
                    <div className='flex items-center gap-3'>
                        <div className="w-[65%] bg-gray-700 rounded-full h-5">
                            <div className=" bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-5 rounded-r-full" style={{ width: '71.4%' }} />
                        </div>
                        <p className="text-sm mt-1">Marine Cargo: <strong>71.4%</strong></p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className="w-[65%] bg-gray-700 rounded-full h-5">
                            <div className="bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-5 rounded-r-full" style={{ width: '50%' }} />
                        </div>
                        <p className="text-sm mt-1">General Liability: <strong>20%</strong></p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className="w-[65%] bg-gray-700 rounded-full h-5">
                            <div className="bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-5 rounded-r-full" style={{ width: '40%' }} />
                        </div>
                        <p className="text-sm mt-1">Workers Comp: <strong>8.6%</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Metrics