import React from "react";

const Molecule: React.FC = () => {
  return (
    <div className="p-8 border rounded-lg bg-gray-50 flex flex-col items-center justify-center min-h-[200px] gap-4">
       <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Molecule Example: Search Form</h3>
       <form className="flex w-full max-w-sm items-end gap-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
         <div className="flex-1">
           <label className="block text-xs font-bold text-gray-700 mb-1">Search Site</label>
           <input type="text" placeholder="Enter keywords..." className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm" />
         </div>
         <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm font-bold hover:bg-blue-600 transition shadow-sm">Go</button>
       </form>
    </div>
  );
};

export default Molecule;
