import React from 'react'

const MarketIntelligence = () => {
  return (
    <div className='w-full xl:w-fit h-1/2 bg-[#1e2f58] border border-[#3e4148] rounded-3xl p-5 transition-all duration-300 hover:border-blue-500'>
        <h3 className='text-2xl'>Market intelligence</h3>

        <ul className='space-y-4'>
            <li className='flex gap-2 mt-4'>
                <span className='w-4 h-4 shrink-0 rounded-full bg-red-500'></span>
                <p className='text-sm'>Rate hardening in Cyber market - +15% YoY</p>
            </li>

            <li className='flex gap-2 mt-4'>
                <span className='w-4 h-4 shrink-0 rounded-full bg-yellow-300'></span>
                <p className='text-sm'>New capacity entering Marine market</p>
            </li>

            <li className='flex gap-2 mt-4'>
                <span className='w-4 h-4 shrink-0 rounded-full bg-blue-600'></span>
                <p className='text-sm'>Environmental regulatory changes in CA</p>
            </li>
        </ul>
    </div>
  )
}

export default MarketIntelligence