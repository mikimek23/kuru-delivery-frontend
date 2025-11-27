
export const TopCustomers=({topCustomers})=>{
    return(
        <div className="bg-white p-5 border shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Top Customers</h2>
          <table className="w-full text-sm">
            <tbody>
              {topCustomers.map((c, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2">{c.name}</td>
                  <td className="text-center">{c.orders} orders</td>
                  <td className="text-right font-medium">{c.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}
export const TopLocations=({topLocations})=>{
    return(
         <div className="bg-white p-5 border shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Top Delivered Locations</h2>
          <ul className="space-y-2 text-sm">
            {topLocations.map((loc, i) => (
              <li key={i} className="flex justify-between border-b py-2 last:border-none">
                <span>{loc.name}</span>
                <span className="font-medium">{loc.count}</span>
              </li>
            ))}
          </ul>
        </div>

    )
}
export const TopServices=({popularServices})=>{
    return(
        <section className="bg-white p-5 border shadow-sm rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Most Popular Services</h2>
        <ul className="space-y-2 text-sm">
          {popularServices.map((s, i) => (
            <li key={i} className="flex justify-between border-b py-2 last:border-none">
              <span>{s.name}</span>
              <span className="font-medium">{s.count}</span>
            </li>
          ))}
        </ul>
      </section>
    )
}

        
      

