"use client"
import React, { useState } from 'react'


const SideBar = () => {

const [openSupport, setOpenSupport] = useState(false);

  return (
    <div className="w-72 bg-[#1e2f58] border border-[#3e4148] rounded-l-3xl p-6 space-y-6">

            <div className={`transition-all duration-500 overflow-hidden ${openSupport ? "bg-[#243867] rounded-xl" : ""}`}>
                <h2
                    className="text-lg mt-5 pl-5 font-semibold mb-2 cursor-pointer flex justify-between items-center"
                    onClick={() => setOpenSupport(!openSupport)}>
                    DECISION SUPPORT
                    <span className="text-xl font-light border rounded-lg py-1 px-2">
                    {openSupport ? '-' : '4'}
                    </span>
                </h2>

                <div
                className={`transition-all duration-500 overflow-hidden ${openSupport ? "max-h-[500px]" : "max-h-0"}`}>
                    <ul className="space-y-2 text-sm pl-7 pb-5">
                        <li className="text-blue-500 font-semibold">Winnability</li>
                        <li className="text-white">Exposure Review & Suggested Coverage</li>
                        <li className="text-white">Portfolio Strategy Alignment</li>
                        <li className="text-white">Broker Analytics</li>
                    </ul>
                </div>
            </div>


                <div className='pl-5 flex items-center justify-between'>
                    <h2 className="text-lg font-semibold">RISK ASSESSMENT</h2>
                    <p className="text-xl font-light bg-[#293a57] rounded-lg py-1 px-2">6</p>
                </div>
                
                <div className='pl-5 flex items-center justify-between'>
                    <h2 className="text-lg font-semibold">DOCUMENTS AND COMPLIANCE</h2>
                    <p className="text-xl font-light bg-[#293a57] rounded-lg px-2 py-1">2</p>
                </div>

            </div>
  )
}

export default SideBar