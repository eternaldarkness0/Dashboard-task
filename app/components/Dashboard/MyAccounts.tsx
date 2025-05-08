import React from 'react'
import { DataAcc, dataAccounts } from '@/data';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MyAccounts = () => {
    const getLossColor = (loss: string) => {
        const value = parseInt(loss);
        if (value < 35) return 'bg-green-400';
        if (value < 60) return 'bg-yellow-400';
        return 'bg-red-500';
    };

return (
<div className='overflow-hidden'>
    <div className='w-[90%] md:w-[80%] mx-auto text-white'>
        <div className='w-[90%] lg:w-full mx-auto bg-[#1e2f58] border border-[#3e4148] rounded-3xl p-5 mt-8 transition-all duration-300 hover:border-blue-500'>
            <div className='flex flex-col xl:flex-row items-center gap-2 mb-5'>


                <div className='flex items-center gap-5'>
                    <h2 className='text-2xl'>My accounts</h2>

                    <input type="text" placeholder='Search' className='w-[250px] h-[30px] bg-[#24345b] px-4 rounded-full placeholder:text-lg placeholder:text-gray-400/60 outline-none'/>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='px-7 bg-transparent text-blue-500 border border-blue-500 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-500'>Filter</button>

                    <button className='px-7 bg-transparent text-blue-500 border border-blue-500 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-500'>Sort</button>

                    <button className='px-7 bg-transparent text-blue-500 border border-blue-500 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-500'>Group</button>

                    <button className='px-7 bg-blue-500 text-white rounded-full transition-all duration-300 hover:bg-black'>+ New</button>
                </div>
                
            </div>

    <div className='overflow-x-scroll no-scrollbar'>
        <table className='w-full text-sm text-left'>
            <thead className='text-gray-400 text-xs bg-[#2c3a71]'>
                <tr>
                    <th className='py-2 px-4'>ACCOUNT NAME/TYPE</th>
                    <th className='hidden 2xl:table-cell'>LINE</th>
                    <th className='hidden 2xl:table-cell'>BROKER</th>
                    <th className='px-2'>RENEWAL DATE</th>
                    <th className='text-right px-2'>PREMIUM</th>
                    <th className='text-right px-2 hidden xl:table-cell'>RATED PREMIUM</th>
                    <th className='text-right 2xl:text-center'>LOSS RATIO</th>
                    <th className='text-center pl-3'>APPETITE</th>
                    <th className='text-center'>STATUS</th>
                    <th className='text-center'>TRIAGE</th>
                    <th className='pl-5'>WINNABILITY</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dataAccounts.map((item: DataAcc, index: number) => (
                    <tr key={index} className='border-gray-700 hover:bg-gray-800/20 even:bg-[#293461]'>
                        <td className='py-3 px-4'>
                            <p className='font-medium'>{item.name}</p>
                            <p className='text-xs text-gray-400'>{item.type}</p>
                        </td>
                        <td className='pr-2'>{item.line}</td>
                        <td className='pr-4 2xl:pr-0 hidden 2xl:table-cell'>{item.broker}</td>
                        <td className='pl-2'>{item.renewal}</td>
                        <td className='text-blue-400 font-bold text-right hidden xl:table-cell'>{item.premium}</td>
                        <td className='text-gray-200 text-right pl-3'>{item.rated}</td>
                        <td className='text-center pl-2 2xl:pl-0'>
                            <span className={`text-white text-xs px-3 py-1 rounded-full ${getLossColor(item.loss)}`}>
                                {item.loss}
                            </span>
                        </td>
                        <td className='text-center px-3 2xl:px-0'>
                            <span className='bg-[#324070] text-white text-xs px-4 py-1 rounded-full inline-block transition-all duration-300 hover:bg-gray-500 cursor-pointer'>
                                {item.appetite}
                            </span>
                        </td>
                        <td>
                            <span className='flex items-center gap-1'>
                                <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-400' : 'bg-blue-400'} inline-block`}></span>
                                <p className='text-white text-sm cursor-pointer'>{item.status}</p>
                            </span>
                        </td>
                        <td className='text-center pl-2'>
                            <span className='inline-block border border-blue-500 text-blue-400 font-semibold text-xs px-3 py-1 rounded-full'>
                                {item.triage}
                            </span>
                        </td>
                        <td className='pl-0 xl:pl-5'>
                            <div className='flex items-center border-0 xl:border border-blue-500 rounded-full px-2 w-fit'>
                                <div className='flex gap-[3px]'>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}
                                            className={`w-2.5 h-2.5 rounded-full ${i < item.winDots ? 'bg-blue-500' : 'bg-[#203059]'}`}
                                        ></span>
                                    ))}
                                </div>
                                <div>
                                    <p className='text-blue-500 hidden xl:table-cell cursor-pointer'>{item.win}</p>
                                </div>
                            </div>
                        </td>

                        <td className="py-7 pl-4 2xl:pl-0 2xl:flex items-center gap-4 hidden">
                            <span className='p-1 border rounded-full'><BsThreeDotsVertical /></span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    
        </div>
    </div>
</div>
);
}

export default MyAccounts;
