import { workQueueData } from '@/data'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import data from "@/mock-data.json"
import PortfolioGoals from './PortfolioGoals'
import QuickActions from './QuickActions'



const WorkQueue = () => {
  return (
    <div className='overflow-hidden'>
        <div className='w-[90%] md:w-[80%] mx-auto text-white flex flex-col xl:flex-row gap-4'>

            <div className='w-[90%] lg:w-[65%] bg-[#1e2f58] border border-[#3e4148] rounded-3xl p-5 transition-all duration-300 hover:border-blue-500 mx-auto'>
                <h1 className='text-white text-3xl'>Work Queue</h1>


                <div className='flex flex-col xl:flex-row gap-4 mt-4 mb-10 md:mb-0'>
                    <div className='flex items-center gap-1 py-2 px-6 rounded-full transition-all duration-300 hover:text-white bg-blue-500 hover:bg-black cursor-pointer whitespace-nowrap'>
                        <p>Assigned to me</p>
                        <span>(12)</span>
                    </div>

                    <div className='flex items-center gap-1 py-2 px-6 bg-black rounded-full transition-all duration-300 hover:text-white hover:bg-blue-500 cursor-pointer whitespace-nowrap'>
                        <p>Pending Review</p>
                        <span>(8)</span>
                    </div>

                    <div className='flex items-center gap-1 py-2 px-6 bg-black rounded-full transition-all duration-300 hover:text-white hover:bg-blue-500 cursor-pointer whitespace-nowrap'>
                        <p>Referrals</p>
                        <span>(3)</span>
                    </div>
                </div>

            <div className='overflow-x-scroll no-scrollbar'>
                <table className="min-w-full text-sm text-left text-white mt-4">
                        <thead className=" text-gray-400 text-xs">
                            <tr className='bg-[#2c3a71]'>
                                <th className="px-4 py-2">ORIGINATOR</th>
                                <th className="px-4 py-2 hidden md:table-cell">CLIENT/LINE</th>
                                <th className="px-4 py-2 hidden md:table-cell">TYPE</th>
                                <th className="px-4 py-2">STATUS</th>
                                <th className="px-4 py-2 hidden md:table-cell">CREATED</th>
                            </tr>
                        </thead> 
                        
                        <tbody>
                            {workQueueData.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-800/30 even:bg-[#293461]">
                                <td className="px-4 py-3 md:flex items-center gap-2 hidden">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold">
                                        {item.originator.initials}
                                    </div>
                                    {item.originator.name}
                                </td>

                                <td className="px-4 py-3">
                                    <p>{item.client}</p>
                                    <span className="text-gray-400 text-xs">{item.line}</span>
                                </td>

                                <td className="px-4 py-3 hidden md:table-cell">{item.type}</td>

                                <td className="px-4 py-3">
                                <span
                                    className={`flex items-center gap-1
                                    ${item.status === "New" ? "text-blue-400" : item.status === "Pending Review" ? "text-yellow-400" : "text-green-400" }`}>

                                    <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                                    <p className='text-white'>{item.status}</p>
                                </span>
                                </td>

                                <td className="px-4 py-3 md:flex items-center gap-4 hidden">
                                    <p>{item.created}</p>
                                    <span className='p-1 border rounded-full'><BsThreeDotsVertical /></span>
                                </td>
                            </tr>
                            ))}
                        </tbody>        
                </table>
            </div>

            </div>

            <PortfolioGoals data={data}/>
            <QuickActions />
            

        </div>
    </div>
  )
}

export default WorkQueue