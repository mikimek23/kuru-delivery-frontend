export const AnalyticsFilterBar=()=> {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      
      <select className="p-2 border rounded-lg text-sm">
        <option>Timeframe: All-time</option>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
      </select>

      <select className="p-2 border rounded-lg text-sm">
        <option>People: All</option>
        <option>Admins</option>
        <option>Customers</option>
        <option>Drivers</option>
      </select>

      <select className="p-2 border rounded-lg text-sm">
        <option>Topic: All</option>
        <option>Food Safety</option>
        <option>Cyber Security</option>
      </select>

    </div>
  );
}
