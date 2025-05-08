"use client"
import React from 'react'
import Score from '../AccDetailsSection/Score';
import Trend from '../AccDetailsSection/Trend';
import Position from '../AccDetailsSection/Position';
import Increasing from '../AccDetailsSection/Increasing';
import Decreasing from '../AccDetailsSection/Decreasing';
import Recommendations from '../AccDetailsSection/Recommendations';
import SideBar from '../AccDetailsSection/Sidebar';



const AccountDetails = () => {

    return (

    <div className="w-[90%] md:w-[80%] mt-16 mx-auto text-white ">

    <h1 className='text-3xl mb-6'>Account Details</h1>

        <div className='flex transition-all duration-300 hover:border-blue-500 border rounded-3xl border-[#3e4148] flex-col sm:flex-row'>

            <div className='hidden md:flex'>
                <SideBar />
            </div>

            

            <div className="flex-1 p-8 space-y-6 bg-[#1e2f58] border border-[#3e4148] rounded-r-3xl">
                <h1 className="text-5xl font-semibold">Winnability</h1>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <Score />
                    <Trend />
                    <Position />
                </div>

                <div className="flex flex-col xl:flex-row items-center gap-6">
                    <Increasing />
                    <Decreasing />
                </div>

                <Recommendations />

            </div>
        </div>

    </div>
);
}

export default AccountDetails