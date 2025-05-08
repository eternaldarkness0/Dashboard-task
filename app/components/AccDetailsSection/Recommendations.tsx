import { recommendations } from '@/data'
import React from 'react'
import { LuRocket } from 'react-icons/lu'

const Recommendations = () => {
  return (
    <div className="bg-[#243867] transition-all duration-300 hover:bg-blue-500/25 rounded-3xl p-6 pb-2">
        <div className="flex items-center text-2xl text-green-400 gap-3 mb-6">
            <LuRocket className='hidden sm:flex'/>
            <h2>AI-Powered Recommendations</h2>
        </div>

        {recommendations.map((rec, i) => (
            <div key={i} className="mb-6">
            <h3 className="text-lg 2xl:text-xl font-semibold mb-1">{rec.title}</h3>
            <div className="flex items-center justify-between">
                <p className="text-sm 2xl:text-lg text-gray-400 mb-3 w-[80%]">{rec.desc}</p>
                <button className="transition-all duration-300 hover:bg-green-500 hover:text-white bg-green-400 hidden sm:block text-black px-4 lg:px-10 2xl:px-16 py-4 rounded-full text-xl">
                Apply
                </button>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Recommendations