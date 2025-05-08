import Link from 'next/link';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';

interface DataDocs {
    title: string;
}

const docs: DataDocs[] = [
    { title: 'KYC verification' },
    { title: 'Required Documentation' },
    { title: 'Regulatory approval' },
    { title: 'Financial Verification' },
];

const Documentation = () => {
  return (
    <div className='w-full xl:w-[45%]'>

        <div className="flex items-center gap-4 mb-4 mt-6">
            <h2 className="text-white text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl font-medium">Compliance & Documentation</h2>
            <Link href="/accounts" className="text-sm flex mt-2 transition-all duration-300 hover:gap-3 items-center gap-2 text-blue-500 h-fit">
                See history <FaArrowRightLong />
            </Link>
        </div>

        <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500  border border-[#3e4148] p-6 rounded-3xl h-56 xl:h-32 text-white w-full">
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {docs.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <BiCheckCircle className="text-green-400 w-5 h-5" />
                        <span className="textsm">{doc.title}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Documentation;
