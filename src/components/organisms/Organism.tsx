import React from "react";

const Organism: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto border rounded-lg overflow-hidden shadow-sm bg-gray-50 my-4">
       <div className="p-2 bg-gray-200 text-xs text-center text-gray-500 font-mono tracking-wider uppercase border-b border-gray-300">Organism Example: Header</div>
       <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center w-full shadow-sm">
         <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
           <span className="text-2xl">❖</span> Brand
         </div>
         <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
           <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
           <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
           <a href="#products" className="hover:text-blue-500 transition-colors">Products</a>
           <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
         </nav>
         <div className="flex gap-2">
           <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none w-48 transition-all" />
           <button className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600 transition shadow-sm font-medium">Search</button>
         </div>
       </header>
       <div className="p-12 text-center text-gray-400 bg-gray-100/50 min-h-[200px] flex items-center justify-center">
         Page Content Placeholder
       </div>
    </div>
  );
};

export default Organism;
