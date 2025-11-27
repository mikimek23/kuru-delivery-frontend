
import React from "react";


import { UserTable } from "../../components/admin/UserTable";
import { mockUsers } from "../../data/mockdata";
export const Users = () => {
  return (
    <div className="space-y-6 ml-16">
     
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-500 text-sm">Manage customer and driver accounts</p>
      </div>

      
      <div className="w-full flex justify-between">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full md:w-72 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
          
        />

        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700">
          Add User
        </button>
      </div>

      
      <UserTable users={mockUsers}/>
    </div>
  );
}

