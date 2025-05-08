import React from 'react'
import MarketIntelligence from './MarketIntelligence'

const QuickActions = () => {
  return (
    <div className='w-[90%] lg:w-[65%] xl:w-[17.5%] flex flex-col gap-4 justify-center mx-auto items-center'>
        <div className='w-full h-1/2 bg-[#1e2f58] border border-[#3e4148] rounded-3xl p-5 transition-all duration-300 hover:border-blue-500'>
            <h3 className='text-2xl'>Quick actions</h3>

            <div className='flex flex-col items-center mt-4 space-y-5 2xl:space-y-1'>
                <button className='bg-blue-500 w-full py-2 rounded-full transition-all duration-300 hover:bg-blue-600'>New Submission</button>
                <button className='bg-blue-500 w-full py-2 rounded-full transition-all duration-300 hover:bg-blue-600'>Quote Builder</button>
                <button className='bg-blue-500 w-full py-2 rounded-full transition-all duration-300 hover:bg-blue-600'>Risks Models</button>
                <button className='bg-blue-500 w-full py-2 rounded-full transition-all duration-300 hover:bg-blue-600'>Documents Upload</button>
            </div>
        </div>

        <MarketIntelligence />

    </div>
  )
}

export default QuickActions