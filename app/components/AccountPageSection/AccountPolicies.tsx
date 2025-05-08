import { policies } from "@/data";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function PoliciesTable() {
    return (
        <div className="overflow-hidden w-[90%] md:w-[80%] mx-auto text-white">
            <h2 className="text-3xl font-medium mb-7 mt-8">Policies</h2>

            <div className="text-white p-3 pr-8 bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 border border-[#3e4148] rounded-3xl">
                <div className="bg-[#1e2f58] rounded-lg p-4">
                    <div className="mb-4 flex flex-col md:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent py-2 md:py-0 text-sm rounded-full px-3 outline-none border border-[#3e4148] placeholder-gray-400 text-white"
                        />
                        <button className="px-7 py-2 transition-all duration-300 hover:text-white hover:bg-blue-500 md:py-0 bg-transparent text-blue-500 border border-blue-500 rounded-full">
                            Filter
                        </button>
                        <button className="px-7 py-2 transition-all duration-300 hover:text-white hover:bg-blue-500 md:py-0 bg-transparent text-blue-500 border border-blue-500 rounded-full">
                            Group
                        </button>
                    </div>
                    <div className="overflow-x-scroll no-scrollbar">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-gray-400 text-xs bg-[#2c3a71] text-left">
                                <th className="p-2">Line</th>
                                <th className="p-2">Eff. Date</th>
                                <th className="p-2">Exp. Date</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Expiring Tech</th>
                                <th className="p-2">Expiring Premium</th>
                                <th className="p-2">Renewal To Tech</th>
                                <th className="p-2 hidden xl:table-cell">Renewal Tech</th>
                                <th className="p-2">Renewal Premium</th>
                                <th className="p-2">Rate Change</th>
                                <th className="p-2">Loss Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                        {policies.map((policy) => (
                            <tr key={policy.id} className="border-t border-gray-700 hover:bg-gray-800/20 even:bg-[#293461] text-left">
                            <td className="p-2">
                                <div className="flex items-start gap-2">
                                <div className={`hidden xl:table-cell w-3 h-3 p-2 rounded-full ${policy.iconColor}`}></div>
                                <div>
                                    <div className="font-semibold">{policy.line}</div>
                                    <div className="text-xs text-gray-400">{policy.id}</div>
                                </div>
                                </div>
                            </td>
                            <td className="p-2">{policy.effDate}</td>
                            <td className="p-2">{policy.expDate}</td>
                            <td className="p-2">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${policy.statusDot}`}></div>
                                    <span>{policy.status}</span>
                                </div>
                            </td>
                            <td className="p-2">{policy.expiringTech}</td>
                            <td className="p-2">{policy.expiringPremium}</td>
                            <td className="p-2">{policy.renewalToTech}</td>
                            <td className="p-2 hidden xl:table-cell">{policy.renewalTech}</td>
                            <td className="p-2 font-bold">{policy.renewalPremium}</td>
                            <td className={`p-2 ${policy.rateClass}`}>{policy.rateChange}</td>
                            <td className="p-2">
                                <div className="flex justify-between items-center gap-2">
                                <span
                                    className={`text-xs px-3 py-1 rounded-full ${policy.lossColor} text-${policy.textColor} font-semibold`}>
                                    {policy.lossRatio}
                                </span>
                                <span className='p-1 hidden 2xl:block border rounded-full'><BsThreeDotsVertical /></span>
                                </div>
                            </td>
                            </tr>
                        ))}
                        <tr className="border-t border-b border-gray-600 font-semibold">
                            <td className="p-2"></td>
                            <td className="p-2"></td>
                            <td className="p-2"></td>
                            <td className="p-2">TOTAL (4)</td>
                            <td className="p-2">$992,500</td>
                            <td className="p-2">$1,020,000</td>
                            <td className="p-2">$1,121,000</td>
                            <td className="p-2 hidden xl:table-cell">$1,137,500</td>
                            <td className="p-2">$1,150,000</td>
                            <td className="p-2">6.9%</td>
                            <td className="p-2">
                            <span className="text-xs px-1.5 py-1 rounded-full bg-yellow-300 text-black font-semibold">
                                58.3%
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
        </div>
        </div>
        
);
}
