

import { OrdersOverAll, OverYearRevanue, StatusOverAll } from "../../components/admin/AnalyticsChart";
import { StatsCard } from "../../components/admin/StatsCard";
import { TopCustomers, TopLocations, TopServices } from "../../components/admin/Leaderboard";
import { AnalyticsFilterBar } from "../../components/admin/AnalyticsFilterBar";



const stats = [
  { label: "Total Orders", value: 1450 },
  { label: "Total Revenue", value: "$82,400" },
  { label: "Active Users", value: 320 },
  { label: "Completed Deliveries", value: 1080 },
  { label: "Pending Deliveries", value: 280 },
  { label: "Cancelled Orders", value: 90 },
];

const ordersOverTime = [
  { date: "Mon", orders: 120 },
  { date: "Tue", orders: 180 },
  { date: "Wed", orders: 150 },
  { date: "Thu", orders: 200 },
  { date: "Fri", orders: 260 },
  { date: "Sat", orders: 220 },
  { date: "Sun", orders: 170 },
];

const revenueBreakdown = [
  { month: "Jan", revenue: 6500 },
  { month: "Feb", revenue: 7200 },
  { month: "Mar", revenue: 8100 },
  { month: "Apr", revenue: 9000 },
  { month: "May", revenue: 8800 },
  { month: "Jun", revenue: 9600 },
];

const topCustomers = [
  { name: "John Doe", orders: 52, spent: "$1,240" },
  { name: "Sarah Smith", orders: 48, spent: "$1,120" },
  { name: "Mark Johnson", orders: 45, spent: "$1,080" },
];

const topLocations = [
  { name: "Addis Ababa", count: 320 },
  { name: "Hawassa", count: 290 },
  { name: "Adama", count: 240 },
];

const popularServices = [
  { name: "Express Delivery", count: 460 },
  { name: "Standard Delivery", count: 380 },
  { name: "Bulk Shipping", count: 260 },
];

const orderStatusPie = [
  { name: "Completed", value: 1080 },
  { name: "Pending", value: 280 },
  { name: "Cancelled", value: 90 },
];

const PIE_COLORS = ["#22c55e", "#eab308", "#ef4444"];



export const Analytics=()=> {
  return (
    <div className="space-y-8 ml-16">
      <AnalyticsFilterBar/>
   
      <StatsCard stats={stats}/>
      
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
       
        <OrdersOverAll ordersOverTime={ordersOverTime}/>

        
        <OverYearRevanue revenueBreakdown={revenueBreakdown}/>
        </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

       <StatusOverAll orderStatusPie={orderStatusPie} PIE_COLORS={PIE_COLORS}/>
        
        <TopCustomers topCustomers={topCustomers}/>

        
        <TopLocations topLocations={topLocations}/>
      </section>

      
      <TopServices popularServices={popularServices}/>
    </div>
  );
}
