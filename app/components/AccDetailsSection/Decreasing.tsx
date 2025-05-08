import { decreasing } from '@/data'
import React from 'react'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Decreasing = () => {
  return (
    <div className="bg-[#243867] transition-all duration-300 hover:bg-blue-500/25 w-full xl:w-[50%] h-[355px] p-4 rounded-3xl pl-5">
        <div className="flex items-center gap-2 mb-3 sm:mb-7">
            <IoArrowDownCircleOutline className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-light">Decreasing Winnability</h2>
        </div>

        {decreasing.map((item, i) => (
        <div key={i} className="mb-4">
        <div className="flex items-center gap-2">
            <div className="text-sm border rounded-full w-10 h-10 flex items-center justify-center border-yellow-400 text-yellow-400">
            {i + 1}
            </div>

            <div className="flex flex-col w-[40%] relative whitespace-nowrap">
            <span className="text-sm sm:text-lg text-white mb-1">{item.label}</span>

            <div className="relative">
                <div
                className="h-4 bg-gradient-to-r from-yellow-400/0 to-yellow-400 rounded-r-full"
                style={{ width: `${Math.abs(item.line)}%` }}></div>

                <span
                className="absolute top-1/2 -translate-y-1/2 text-xs text-white"
                style={{ left: `calc(${Math.abs(item.line)}% + 6px)` }}>
                {item.value > 0 ? `-${item.value}%` : `${item.value}%`}
                </span>
            </div>
            </div>
        </div>
        </div>
        ))}
    </div>
  )
}

export default Decreasing