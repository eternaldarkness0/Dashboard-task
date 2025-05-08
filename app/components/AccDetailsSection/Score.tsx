import React from 'react'

const Score = () => {
  return (
    <div className="bg-[#243867] transition-all duration-300 hover:bg-blue-500/25 flex flex-col gap-2 h-36 p-6 rounded-3xl">
        <div className="text-2xl font-light">Overall Score</div>
        <div className='flex items-center gap-2'>
            <div className="text-3xl xl:text-5xl font-light">82%</div>
            <div className="flex items-center space-x-1 border border-blue-500 py-2 px-3 rounded-full">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-2.5 h-2.5 hidden md:flex xl:hidden 2xl:flex rounded-full bg-blue-500"></div>
            ))}
            <span className="text-sm ml-2 text-blue-500">Very Strong</span>
            </div>
        </div>
    </div>
  )
}

export default Score