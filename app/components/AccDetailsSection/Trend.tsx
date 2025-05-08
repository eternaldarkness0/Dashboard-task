"use client"
import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import trendData from '@/mock-data-trend.json'

interface TrendData {
    name: string;
    value: number;
};

const Trend = () => {
  return (
    <div className="bg-[#243867] transition-all duration-300 hover:bg-blue-500/25 h-36 p-4 rounded-3xl">
        <div className="text-2xl font-light text-white mb-1">Historical trend</div>
            <ResponsiveContainer width="100%" height={100}>
                <LineChart
                data={trendData as TrendData[]}
                margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#fff' }} />
                <YAxis hide />
                <Tooltip content={() => null} />
                <Line
                    type="linear"
                    dataKey="value"
                    stroke="#3b82f6"
                    dot={false}
                    activeDot={false}
                    strokeWidth={3}
                />
                </LineChart>
            </ResponsiveContainer>
    </div>
  )
}

export default Trend