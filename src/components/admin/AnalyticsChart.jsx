// src/components/admin/AnalyticsChart.jsx
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const sampleData = [
  { name: "Mon", packages: 20, revenue: 300 },
  { name: "Tue", packages: 35, revenue: 450 },
  { name: "Wed", packages: 28, revenue: 380 },
  { name: "Thu", packages: 45, revenue: 520 },
  { name: "Fri", packages: 50, revenue: 600 },
  { name: "Sat", packages: 32, revenue: 410 },
  { name: "Sun", packages: 22, revenue: 310 },
];

export const AnalyticsChart=()=> {
  return (
    <div className="bg-white p-5 shadow-sm rounded-xl border border-gray-100 w-full h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Weekly Performance</h2>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* Bar */}
          <Bar dataKey="packages" fill="#3b82f6" radius={[4, 4, 0, 0]} />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
