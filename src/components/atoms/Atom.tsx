import React from "react";


const Atom: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-start p-6 border rounded-lg bg-gray-50 max-w-2xl mx-auto">
       <h3 className="text-lg font-semibold text-gray-800 mb-2">Atom Examples</h3>
       <div className="flex flex-wrap gap-4 items-center">
          <label className="text-sm font-bold text-gray-700">Label</label>
          <input type="text" placeholder="Input" className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow-sm">Button</button>
       </div>
    </div>
  );
};

export default Atom;
