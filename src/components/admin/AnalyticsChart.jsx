import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const OrdersOverAll=({ordersOverTime})=>{
  return(
<div className="bg-white p-5 border shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Orders Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={ordersOverTime}>
              <defs>
                <linearGradient id="orders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#ffa500" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffa500" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#ffa500"
                fill="url(#orders)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        )
}

export const OverYearRevanue=({revenueBreakdown})=>{
  return(
    <section className="grid grid-cols-1  gap-6">
    <div className="bg-white p-5 border shadow-sm rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#f97316" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
    
          </section>
  )
}
export const StatusOverAll=({orderStatusPie,PIE_COLORS})=>{
  return(
     <div className="bg-white p-5 border shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Order Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={orderStatusPie}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
              >
                {orderStatusPie.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

  )
}
