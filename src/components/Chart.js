import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const Chart = ({ title, data, dataKey, grid, className }) => {
    return (
        <div className={`p-4 shadow-lg rounded-lg bg-white ${className}`}>
            <div className="font-bold text-lg">{title}</div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart