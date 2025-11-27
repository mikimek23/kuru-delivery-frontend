export const StatsCard=({ stats })=> {
  return (
   <section>
           <h2 className="text-xl font-semibold mb-4">Overview</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
             {stats.map((item, index) => (
               <div
                 key={index}
                 className="bg-white p-4 shadow-sm border rounded-xl"
               >
                 <p className="text-gray-500 text-sm">{item.label}</p>
                 <p className="text-xl font-bold mt-1">{item.value}</p>
               </div>
             ))}
           </div>
         </section>
  );
}
