import React from 'react'
import { OrdersTable } from '../../components/admin/OrdersTable';
import { orders } from '../../data/mockdata';


export const Orders = () => {
  
  return (
    <div className='W-fit ml-16'>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
        <p className="text-gray-500 text-sm">Manage and track customer orders.</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-xl font-bold">320</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-xl font-bold">45</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Delivered</p>
          <h2 className="text-xl font-bold">260</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Cancelled</p>
          <h2 className="text-xl font-bold">15</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search Order ID"
          className="border px-3 py-2 rounded-md w-full md:w-1/3"
        />

        <select className="border px-3 py-2 rounded-md w-full md:w-1/4">
          <option>Status – All</option>
          <option>Pending</option>
          <option>In Transit</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <select className="border px-3 py-2 rounded-md w-full md:w-1/4">
          <option>Sort – Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Orders Table */}
      <OrdersTable orders={orders} />
    </div>
  );
}
