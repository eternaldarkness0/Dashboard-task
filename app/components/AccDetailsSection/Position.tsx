import React from 'react'

const Position = () => {
  return (
    <div className="bg-[#243867] transition-all duration-300 hover:bg-blue-500/5 h-36 p-4 rounded-3xl">
        <div className="text-2xl font-light mb-2">Position</div>
            <div className='space-y-1'>
                <div className='flex items-center gap-3'>
                    <div className="w-[50%] bg-gray-700 rounded-full h-4">
                        <div className=" bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-4 rounded-r-full" style={{ width: '82%' }} />
                    </div>
                    <p className="text-sm whitespace-nowrap">Your Score: 82%</p>
                </div>

                <div className='flex items-center gap-3'>
                    <div className="w-[50%] bg-gray-700 rounded-full h-4">
                        <div className=" bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-4 rounded-r-full" style={{ width: '68%' }} />
                    </div>
                    <p className="text-sm whitespace-nowrap text-gray-400">Market Avg: 68%</p>
                </div>

                <div className='flex items-center gap-3'>
                    <div className="w-[50%] bg-gray-700 rounded-full h-4">
                        <div className=" bg-gradient-to-r from-blue-950/70 to bg-blue-500 h-4 rounded-r-full" style={{ width: '88%' }} />
                    </div>
                    <p className="text-sm whitespace-nowrap text-gray-400">Top competitor: 88%</p>
                </div>
        </div>
    </div>
  )
}

export default Position