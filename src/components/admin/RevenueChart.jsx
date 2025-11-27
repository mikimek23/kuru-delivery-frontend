
import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { revenueData } from "../../data/revenueData";

export const RevenueChart = () => {
  const [view, setView] = useState("daily");

  const chartData = revenueData[view];

  return (
    <div className="bg-white p-5 shadow-sm rounded-xl border border-gray-100 w-full h-[380px]">

      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Revenue Overview</h2>

        <div className="flex gap-2">
          {["daily", "weekly", "monthly"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1 rounded-lg text-sm 
                ${view === v ? "bg-orange-600 text-white" : "bg-gray-200"}
              `}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ffa500"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};
