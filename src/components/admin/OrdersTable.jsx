// src/components/admin/OrdersTable.jsx
import React from "react";

export const OrdersTable=({ orders = []})=> {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-600 text-sm">
          <tr>
            <th className="px-5 py-3">Order ID</th>
            <th className="px-5 py-3">Customer Name</th>
            <th className="px-5 py-3">Phone Number</th>
            <th className="px-5 py-3">Address</th>
            <th className="px-5 py-3">Status</th>
            <th className="px-5 py-3">Payment Status</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {orders.map((order) => (
            <tr key={order.id} className="border-b last:border-none">
              <td className="px-5 py-3">{order.id}</td>
              <td className="px-5 py-3">{order.customer}</td>
              <td className="px-5 py-3">{order.phone}</td>
              <td className="px-5 py-3">{order.address}</td>
              <td className="px-5 py-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-5 py-3">{order.paymentStatus}</td>
              <td className="px-5 py-3">{order.date}</td>
              <td className="flex items-center gap-3 py-2">

  <button className="px-3 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
    View
  </button>

  <button className="px-3 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition">
    Update
  </button>

  <button className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
    Delete
  </button>

</td>

            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
