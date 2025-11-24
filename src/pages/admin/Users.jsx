
import React from "react";

//import { mockUsers } from "../../data/mockdata";
import { UserTable } from "../../components/admin/UserTable";
export const Users = () => {
//   const mockUsers= [
//   {
//     id: "U001",
//     name: "Samuel Tesfaye",
//     email: "samuel@example.com",
//     phone: "+251912345678",
//     role: "Customer",
//     status: "Active",
//   },
//   {
//     id: "U002",
//     name: "Miki Alemu",
//     email: "miki@example.com",
//     phone: "+251987654321",
//     role: "Driver",
//     status: "Active",
//   },
//   {
//     id: "U003",
//     name: "Lily Daniel",
//     email: "lily@example.com",
//     phone: "+251934567890",
//     role: "Customer",
//     status: "Disabled",
//   },
//   {
//     id: "U004",
//     name: "Admin User",
//     email: "admin@example.com",
//     phone: "+251900112233",
//     role: "Admin",
//     status: "Active",
//   },
// ]

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-500 text-sm">Manage customer and driver accounts</p>
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-between">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full md:w-72 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          
        />

        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
          Add User
        </button>
      </div>

      {/* Users Table */}
      <UserTable/>
    </div>
  );
}

