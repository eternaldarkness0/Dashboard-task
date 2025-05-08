import React from 'react';
import { GoPaperclip } from 'react-icons/go';

const Communication = () => {
return (
    <div className="w-[90%] md:w-[80%] mx-auto text-white">
        <h2 className="text-3xl mb-6 font-medium mt-9">Communication</h2>

        <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] rounded-3xl text-white p-6">
            <div className="rounded-3xl bg-[#1e2f58]">
                <div className="flex flex-col md:flex-row gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent py-2 md:py-0 text-sm rounded-full px-3 outline-none border border-[#3e4148] placeholder-gray-400 text-white"
                    />
                    <button className="transition-all duration-300 hover:text-white hover:bg-blue-500 px-7 py-2 md:py-0 bg-transparent text-blue-500 border border-blue-500 rounded-full">
                        Filter
                    </button>
                    <button className="transition-all duration-300 hover:text-white hover:bg-blue-500 px-7 py-2 md:py-0 bg-transparent text-blue-500 border border-blue-500 rounded-full">
                        Group
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-3">

                    <div className='flex flex-col gap-2 flex-1/2'>
                        <div className="bg-[#243867] transition-all duration-300 hover:border-blue-500 rounded-3xl p-4 border-2 border-blue-800 flex flex-col gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="transition-all duration-300 hover:bg-blue-500 text-xs font-semibold px-3 py-1 rounded-3xl bg-blue-600 text-white">
                                    NEW
                                </span>
                                <h2 className="text-lg font-medium">Policy Renewal - Auto Insurance 5/15/25</h2>
                            </div>
                            <p className="text-sm text-gray-400">Michael Roberts // Apr 5</p>
                            <p className="text-sm text-white">
                                Hello Arthur, I&apos;m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I&apos;ve attached the current policy details and premium breakdown for your reference.
                            </p>
                            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-green-700 text-white rounded-full w-fit">
                                <div className="flex items-center gap-2">
                                    <GoPaperclip /> 3
                                </div>
                                attachments
                            </span>
                            <button className="transition-all duration-300 hover:bg-blue-400 w-fit bg-blue-500 text-white px-8 py-2 rounded-full text-sm">
                                Reply
                            </button>
                        </div>      

                        <div className="bg-[#243867] transition-all duration-300 hover:border-blue-500 rounded-3xl p-4 border-2 border-blue-800 flex flex-col gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="transition-all duration-300 hover:bg-blue-500 text-xs font-semibold px-3 py-1 rounded-3xl bg-blue-600 text-white">
                                    NEW
                                </span>
                                <h2 className="text-lg font-medium">New Quote Request - Workers Comp Insurance</h2>
                            </div>
                            <p className="text-sm text-gray-400">Sarah Chen // Apr 5</p>
                            <p className="text-sm text-white">
                                Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I&apos;ve completed the initial risk assessment based...
                            </p>
                            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-green-700 text-white rounded-full w-fit">
                                <div className="flex items-center gap-2">
                                    <GoPaperclip /> 3
                                </div>
                                attachments
                            </span>
                            <button className="transition-all duration-300 hover:bg-blue-400 w-fit bg-blue-500 text-white px-8 py-2 rounded-full text-sm">
                                Reply
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 flex-1/2'>
                        <div className="bg-[#243867] transition-all duration-300 hover:bg-black/10 rounded-3xl p-4 border-none flex flex-col gap-2 h-fit">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="transition-all duration-300 hover:bg-blue-500 text-xs font-semibold px-3 py-1 rounded-3xl bg-blue-700 text-white">
                                    Responded
                                </span>
                                <h2 className="text-lg font-medium">Fwd: New Submission - BPM Real Estate - EFF 4/1/24</h2>
                            </div>
                            <p className="text-sm text-gray-400">Joshua Dunmire // Mar 25</p>
                            <p className="text-sm text-white">
                                Arthur, attached please find our submission for the above mentioned applicant. We have...
                            </p>
                        </div>

                        <div className="bg-[#243867] transition-all duration-300 hover:bg-black/10 rounded-3xl p-4 border-none flex flex-col gap-2 h-fit">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-lg font-medium">New Business: BPM Real Estate Group, LLC</h2>
                            </div>
                            <p className="text-sm text-gray-400">Isabel Kreller // Feb 28</p>
                            <p className="text-sm text-white">
                                Hello Arthur, I am pleased to present you with a submission on this client&apos;s upcoming business...
                            </p>
                            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-green-700 text-white rounded-full w-fit">
                                <div className="flex items-center gap-2">
                                    <GoPaperclip /> 5
                                </div>
                                attachments
                            </span>
                            <button className="transition-all duration-300 hover:bg-blue-400 w-fit bg-blue-500 text-white px-8 py-2 rounded-full text-sm">
                                Reply
                            </button>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
    </div>
);
};

export default Communication;
