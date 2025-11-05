import React from 'react';
import { useUser } from '../hooks/useUser'; // Import your custom hook

/**
 * A simple component that displays the user's status and a Log Out button.
 * This demonstrates how easy it is to interact with the global auth state
 * now that the useUser hook is finalized.
 */
const UserProfile = () => {
  // Use the custom hook to access the global state and functions
  const { user, removeUser } = useUser();

  if (!user) {
    // If no user is logged in, show a link to the sign-in page
    return (
      <div className="p-4 text-center bg-gray-100 rounded-lg">
        <p className="text-gray-600">You are currently logged out.</p>
        <a href="/signin" className="text-blue-600 hover:underline">
          Go to Sign In
        </a>
      </div>
    );
  }

  // If a user is logged in, display their info and a log out button
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Welcome Back!</h2>
      <p className="text-gray-700">
        You are logged in as: <span className="font-medium text-indigo-600">{user.name || user.email || 'User'}</span>
      </p>
      <button
        onClick={removeUser}
        className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;
