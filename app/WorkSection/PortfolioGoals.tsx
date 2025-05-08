import { DataProps } from '@/data'
import React from 'react'
import { TiArrowSortedUp } from 'react-icons/ti'

const PortfolioGoals = ( {data}: {data: DataProps} ) => {
  return (
    <div className='w-[90%] lg:w-[65%] xl:w-[17.5%] bg-[#1e2f58] border border-[#3e4148] rounded-3xl p-5 transition-all duration-300 hover:border-blue-500 mx-auto'>
        <h2 className='text-2xl'>Portfolio goals</h2>

        <div>
            <h3 className="text-xs text-gray-400 mb-5 mt-5">PORTFOLIO LOSS RATIO TARGET</h3>

            <div className="relative h-6 w-full bg-gray-700 rounded-full overflow-hidden">

                <div
                className="absolute left-0 top-0 h-full bg-green-400"
                style={{ width: "35%" }}></div>

                <div
                className="absolute left-[35%] top-0 h-full bg-yellow-300"
                style={{ width: "30%" }}></div>

                <div
                className="absolute right-0 top-0 h-full bg-red-500 rounded-r-full"
                style={{ width: "35%" }}></div>

                <span className="absolute text-white text-sm left-1/3 top-1/2 -translate-y-1/2">
                    {data.portfolioLossRatio.value.toFixed(1)}%
                </span>

            </div>

            <div className="relative mt-2 text-sm">
                <span className="text-green-400 absolute left-5 text-sm">
                    {data.portfolioLossRatio.difference}% (GOOD)
                </span>

                <span className='absolute left-1/4 -top-4 text-green-400 text-2xl'><TiArrowSortedUp /></span>
            </div>

        </div>

        <div>
            <h3 className="text-xs text-gray-400 mb-5 mt-15">RENEWAL RETENTION</h3>

            <div className="relative h-6 w-full bg-gray-700 rounded-full overflow-hidden">

                <div
                className="absolute left-0 top-0 h-full bg-red-500"
                style={{ width: "20%" }}></div>

                <div
                className="absolute left-[20%] top-0 h-full bg-yellow-300"
                style={{ width: "30%" }}></div>

                <div
                className="absolute left-[50%] top-0 h-full bg-green-400"
                style={{ width: "20%" }}></div>

                <div
                className="absolute right-0 top-0 h-full bg-yellow-300"
                style={{ width: "30%" }}></div>

                <span className="absolute text-white text-sm right-1/3 top-1/2 -translate-y-1/2">
                    {data.renewalRetention.value}%
                </span>

            </div>

            <div className="relative mt-2 text-sm">
                <span className="text-green-400 absolute right-13 text-sm">
                    ON TARGET
                </span>

                <span className='absolute right-1/3 -top-4 text-green-400 text-2xl'><TiArrowSortedUp /></span>
            </div>

        </div>

        <div className='mt-15'>
            <h3 className="text-xs text-gray-400 mb-1">NEW BUSINESS TARGET</h3>

            <div className='flex items-center gap-2'>
                <div className="relative h-6 w-full rounded-r-full bg-[#314169]">
                    <div
                        className="absolute top-0 left-0 h-6 bg-gradient-to-r from-blue-800/10 to-blue-500 rounded-r-full"
                        style={{
                        width: `${(data.newBusinessTarget.current / data.newBusinessTarget.target) * 100}%`,
                        }}>  
                    </div>
                    <span className="text-white text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">${data.newBusinessTarget.current}M</span>

                </div>
                <span className="text-white text-sm">${data.newBusinessTarget.target}M</span>
            </div>

            <div className='relative h-4 mt-1'>
                    <span className='absolute left-25 text-xs text-gray-400'>67%</span>
            </div>
            
        </div>

        <div className='mt-15'>
            <h3 className="text-xs text-gray-400 mb-1">ANNUAL GWP TARGET</h3>

            <div className='flex items-center gap-2'>
                <div className="relative h-6 w-full rounded-r-full bg-[#314169]">
                    <div
                        className="absolute top-0 left-0 h-6 bg-gradient-to-r from-blue-800/10 to-blue-500 rounded-r-full"
                        style={{
                        width: `${(data.annualGwpTarget.current / data.annualGwpTarget.target) * 100}%`,
                        }}>  
                    </div>
                    <span className="text-white text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">${data.annualGwpTarget.current}M</span>

                </div>
                <span className="text-white text-sm">${data.annualGwpTarget.target}M</span>
            </div>

            <div className='relative h-4 mt-1'>
                    <span className='absolute left-25 text-xs text-gray-400'>68%</span>
            </div>
            
        </div>


    </div>
    )
}

export default PortfolioGoals