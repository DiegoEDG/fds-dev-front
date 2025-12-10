import React, { useEffect, useState } from "react";
import { data } from "./data";
interface Module {
  name: string;
  icon: string;
  description: string;
  objective: string;
  technologies: string[];
  status: string;
}

const FuelModules: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    setModules(data);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 mb-10">
      <h1 className="text-4xl font-bold mb-8 ">Fuel Design System Ecosystem</h1>

      {/* <picture>
        <source srcSet={ecosystemMobile} media="(max-width: 640px)" />
        <img
          src={ecosystem}
          alt="Ecosystem diagram"
          className="w-full max-w-[800px] mx-auto my-10"
        />
      </picture> */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 transition"
          >
            <div className="text-4xl mb-3">
              <img src={mod.icon} alt={mod.name} />
            </div>
            <h2 className="text-xl font-semibold mb-2 ">
              {mod.name}
              <span
                key={mod.status}
                className="text-sm bg-blue-50 px-3 py-1 rounded-full text-blue-700"
              >
                {mod.status}
              </span>
            </h2>
            <p className="text-gray-700 mb-3">{mod.description}</p>
            <p className="text-sm text-gray-500 mb-3">
              <span className="text-blue-600 font-medium">Objective:</span>{" "}
              {mod.objective}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {mod.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-blue-50 px-3 py-1 rounded-full text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition my-4">
              Go to {mod.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelModules;
