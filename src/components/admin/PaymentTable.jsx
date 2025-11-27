import React from 'react'

export const PaymentTable = ({paymentData}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">Transaction ID</th>
            <th className="p-3">Customer Name</th>
            <th className="p-3">Order ID</th>
            <th className="p-3">Amount Paid</th>
            <th className="p-3">Payment Method</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paymentData.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.transactionId}</td>
              <td className="p-3">{user.customerName}</td>
              <td className="p-3">{user.orderId}</td>
              <td className="p-3">{user.amountPaid}</td>

              
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.paymentMethod === "Card"
                      ? "bg-blue-100 text-blue-700"
                      : user.paymentMethod === "Cash"
                      ? "bg-purple-100 text-purple-700"
                      : user.paymentMethod === "Wallet"
                      ?"bg-green-100 text-green-700"
                      :user.paymentMethod === "Wallet"
                      ?"bg-red-100 text-red-700"
                      :user.paymentMethod === "Wallet"
                      ?"bg-pink-100 text-pink-700"
                      :"bg-orange-100 text-orange-700"
                  }`}
                >
                  {user.paymentMethod}
                </span>
              </td>

              
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === "Success"
                      ? "bg-blue-100 text-blue-700"
                      : user.status === "Failed"
                      ? "bg-purple-100 text-purple-700"
                      : user.status === "Refunded"
                      ?"bg-green-100 text-green-700"
                      :"bg-orange-100 text-orange-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3">{user.date}</td>

              
              <td className="p-3 text-center space-x-2">
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                  View Receipt
                </button>
                <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                  Refund
                </button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
