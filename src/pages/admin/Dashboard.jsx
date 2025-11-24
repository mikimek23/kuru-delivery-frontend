import React from "react";
import {DashboardCard} from "../../components/admin/DashboardCard";
import {OrdersTable} from "../../components/admin/OrdersTable";
import {AnalyticsChart} from "../../components/admin/AnalyticsChart";

import { Package, DollarSign, Users, Activity } from "lucide-react";
import { orders } from "../../data/mockdata";


export const Dashboard=()=> {

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Packages"
          value="4,321"
          trend={12}
          icon={Package}
        />

        <DashboardCard
          title="Total Revenue"
          value="$12,450"
          trend={8}
          icon={DollarSign}
        />

        <DashboardCard
          title="Active Users"
          value="1,024"
          trend={5}
          icon={Users}
        />

        <DashboardCard
          title="Delivery Success"
          value="92%"
          trend={3}
          icon={Activity}
        />
      </div>

      {/* Analytics Chart */}
      <AnalyticsChart />

      {/* Latest Orders */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Recent Orders</h2>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
}

