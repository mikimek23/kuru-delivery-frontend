import React from 'react'
import { StatsCard } from '../../components/admin/StatsCard';
import { PaymentTable } from '../../components/admin/PaymentTable';
import { paymentData } from '../../data/mockdata';
import { RevenueChart } from '../../components/admin/RevenueChart';

const stats = [
  { label: "Total Payments", value: 14500 },
  { label: "Total Revenue", value: "$824,000" },
  { label: "Pending Payments", value:2800   },
  { label: "Refunded Payments", value: 500 },
  { label: "Failed Transactions", value: 1500},
  { label: "Today's Revenue", value: "$90,000" },
];
export const Payments = () => {
  return (
    <div className="ml-16 space-y-8">
      <StatsCard stats={stats}/>
      <PaymentTable paymentData={paymentData}/>
      
      <RevenueChart/>
    </div>
  )
}
