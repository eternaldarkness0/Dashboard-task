"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineHome } from 'react-icons/ai'
import { BiCoinStack } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { IoKeyOutline } from 'react-icons/io5'
import { LuGoal, LuUsersRound } from 'react-icons/lu'
import { SiAwsorganizations } from 'react-icons/si'

interface Item {
    icon: React.ReactNode;
    name: string;
    href?: string;
};

const items: Item[] = [
    {icon: <AiOutlineHome className='text-3xl' />, name: 'Dashboard', href: '/'},
    {icon: <BiCoinStack className='text-3xl' />, name: 'Accounts', href: '/accounts'},
    {icon: <LuUsersRound className='text-3xl' />, name: 'Brokers'},
    {icon: <GoFileSymlinkFile className='text-3xl' />, name: 'Submissions'},
    {icon: <SiAwsorganizations className='text-3xl' />, name: 'Organizations'},
    {icon: <LuGoal className='text-3xl' />, name: 'Goals & Rules'},
    {icon: <IoKeyOutline className='text-3xl' />, name: 'Admin'},
]

const Panel = () => {

    const pathname = usePathname();


  return (
    <div className='pt-[1rem] pb-[1rem] text-blue-500 w-[90%] md:w-[80%] mx-auto gap-2 overflow-x-scroll no-scrollbar'>

        <div className='flex flex-row w-max gap-3'>
        {items.map((item, index) => {
        const isActive = item.href && pathname === item.href
        return (
            <Link
                key={index}
                href={item.href || '/'}
                className={`group whitespace-nowrap shrink-0 flex items-center gap-3 text-xl border rounded-full px-4 py-3 transition-all duration-300 ${isActive ? 'bg-blue-500 text-white border-blue-500' : 'border-[#313b54] hover:bg-blue-500 hover:text-white'}
                `}>
                <span className={`${isActive ? 'text-white' : 'text-blue-500 group-hover:text-white'}`}>
                {item.icon}
                </span>
                <p className={`${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{item.name}</p>
            </Link>
            )
        })}
        </div>
        

    </div>
  )
}

export default Panel