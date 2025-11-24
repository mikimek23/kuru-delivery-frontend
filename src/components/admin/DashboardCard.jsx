// src/components/admin/DashboardCard.jsx
import React from "react";

export const DashboardCard=({ title, value, icon: Icon, trend })=> {
  return (
    <div className="p-5 bg-white shadow-sm rounded-xl border border-gray-100 flex items-center gap-4">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {Icon && <Icon size={24} />}
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>

        {trend && (
          <p
            className={`text-xs mt-1 ${
              trend > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend > 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
          </p>
        )}
      </div>
    </div>
  );
}

