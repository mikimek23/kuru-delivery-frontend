import React from 'react'

export const UserTable = ({ users = [] }) => {
  const usersArray = Array.isArray(users) ? users : (users && typeof users === 'object' ? Object.values(users) : []);
  
  return (
    
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {usersArray.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>

              
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.role === "Driver"
                      ? "bg-blue-100 text-blue-700"
                      : user.role === "Admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              
              <td className="p-3 text-center space-x-2">
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                  View
                </button>
                <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                  Update
                </button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
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
