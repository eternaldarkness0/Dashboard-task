import React from 'react';
import { CiUmbrella } from 'react-icons/ci';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { LuShieldCheck, LuShip } from 'react-icons/lu';
import { RiShieldUserLine } from 'react-icons/ri';

function Policies() {
return (
    <div className="py-4 w-[90%] md:w-[80%] mx-auto mt-8 xl:mt-15">
        <h2 className="text-white text-3xl font-medium mb-4">Policies</h2>

        <div className="flex transition-all duration-300 hover:border-blue-500 justify-center flex-wrap 2xl:flex-nowrap gap-4 p-4 px-10 bg-[#1e2f58] border border-[#3e4148] rounded-3xl">

            <div className="w-[20%] transition-all duration-300 hover:bg-[#37436c] h-[135px] flex justify-center flex-col items-start bg-[#2e395e] text-white rounded-3xl px-4 py-3 min-w-[250px] xl:min-w-[200px]">
                <div className='flex items-center gap-2'>
                    <LuShip className="text-blue-500 text-2xl" />
                    <p className="font-light text-xl">Marine Cargo</p>
                </div>
                <div className='mt-1'>
                    <p className="text-lg text-gray-400">Premium: $625,000</p>
                    <p className="text-lg text-gray-400">Eff.Date: 6/30/2026</p>
                </div>
            </div>


            <div className="w-[20%] transition-all duration-300 hover:bg-[#37436c] flex flex-col justify-center  items-start bg-[#2e395e] text-white rounded-3xl px-4 py-3 min-w-[250px] xl:min-w-[200px]">
                <div className='flex items-center gap-2'>
                    <LuShieldCheck className="text-green-400 text-2xl" />
                    <p className="font-light text-xl">General Liability</p>
                </div>  
                <div className='mt-1'>
                    <p className="text-lg text-gray-400">Premium: $175,000</p>
                    <p className="text-lg text-gray-400">Eff.Date: 6/30/2026</p>
                </div>
            </div>


            <div className="flex transition-all duration-300 hover:bg-[#37436c] flex-col justify-center  items-start bg-[#2e395e] text-white rounded-3xl px-4 py-3 min-w-[250px] xl:min-w-[200px] w-[20%]">
                <div className='flex items-center gap-2'>
                    <RiShieldUserLine className="text-purple-600 text-2xl" />
                    <p className="font-light text-xl">Workers Comp</p>
                </div>
                <div className='mt-1'>
                    <p className="text-lg text-gray-400">Premium: $75,000</p>
                    <p className="text-lg text-gray-400">Eff.Date: ---</p>
                </div>
            </div>


            <div className="flex  transition-all duration-300 hover:bg-[#37436c] flex-col justify-center  items-start bg-[#2e395e] text-white rounded-3xl px-4 py-3 min-w-[250px] xl:min-w-[200px] w-[20%]">
                <div className='flex items-center gap-2'>
                    <HiOutlineBuildingOffice2 className="text-yellow-400 text-2xl" />
                    <p className="font-light text-xl">Prorerty</p>
                </div>
                <div className='mt-1'>
                    <p className="text-lg text-gray-400">Premium: $64,829.83</p>
                    <p className="text-lg text-gray-400">Eff.Date: ---</p>
                </div>
            </div>


            <div className="flex transition-all duration-300 hover:bg-[#37436c] flex-col justify-center  items-start bg-[#2e395e] text-white rounded-xl px-4 py-3 min-w-[250px] xl:min-w-[200px] w-[20%]">
                <div className='flex items-center gap-2'>
                    <CiUmbrella className="text-red-400 text-2xl" />
                    <div className="font-light text-xl">Umbrella</div>
                </div>
                <div className='mt-1'>
                    <div className="text-lg text-gray-400">Premium: $275,000</div>
                    <div className="text-lg text-gray-400">Eff.Date: 13/03/2026</div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Policies;
