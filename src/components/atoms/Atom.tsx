import React from "react";
import MscButton from "../MscButton";
import MscInput from "../MscInput";

const Atom: React.FC = () => {
  return (
   <>
     <div className="flex flex-wrap gap-8 items-end w-full">
          {/* Label Atom */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Form Label</label>
          </div>

          {/* Input Atom */}
          <div className="flex flex-col gap-2 min-w-[200px]">
             <MscInput label="Email Address" />
          </div>

          {/* Button Atom */}
          <div className="flex flex-col gap-2">
             <MscButton label="Primary Button" />
          </div>
       </div>
   </>
  );
};

export default Atom;
