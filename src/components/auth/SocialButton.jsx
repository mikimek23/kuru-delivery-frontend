import React from 'react'

export const SocialButton =({ icon, text }) => (
  <button
    type="button"
    className="flex-1 flex items-center justify-center py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 font-medium hover:bg-orange-500 transition-colors hover:text-white"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </button>
);
