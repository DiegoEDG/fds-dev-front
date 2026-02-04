import React, { useEffect, useState } from 'react';
import { data } from './data';
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
      <small className="text-sm text-primary-blue block font-bold">Fuel Docs</small>
      <h1 className="font-bold text-3xl mb-3 flex items-center gap-2">Fuel Design Ecosystem</h1>

      {/* About the Ecosystem */}
      <section id="about" className="prose max-w-none mb-10">
        <h2 className="text-2xl font-semibold mb-3">About the Ecosystem</h2>
        <p>
          Our technology ecosystem is designed as a structured, scalable foundation that unifies our
          development workflow through specialized layers—each focused on data, components,
          automation, and operational efficiency. This ecosystem enables us to accelerate product
          delivery, ensure consistency across projects, and support a long-term vision of
          maintainable, future-proof software. By proposing this layered architecture, we align our
          internal processes with modern engineering standards while empowering every team to build
          faster, smarter, and with greater reliability.
        </p>
      </section>

      {/* Starting from the core */}
      <section id="core" className="prose max-w-none mb-10">
        <h2 className="text-2xl font-semibold mb-3">Starting from the core</h2>
        <p>
          UX/UI design is the heart of our ecosystem because every layer, tool, and technology
          ultimately exists to serve the user experience. By grounding the entire architecture in
          thoughtful, consistent design, we ensure that what we build is not only functional, but
          intuitive, scalable, and aligned with real human needs. This core foundation allows every
          product, component, and workflow to deliver clarity, coherence, and long-term value.
        </p>
      </section>

      {/* Fuel Design System */}
      <section id="design-system" className="prose max-w-none mb-10">
        <h2 className="text-2xl font-semibold mb-3">Fuel Design System</h2>
        <p>
          Fuel Design System establishes a unified visual and interaction language powered entirely
          through Figma and its advanced ecosystem of tools. Using components, variants, tokens,
          auto-layout, design libraries, and interactive prototyping, we ensure pixel-perfect
          consistency across every product.
        </p>
        <p>
          Our methodology follows atomic design principles, scalable component architecture, strict
          naming conventions, and continuous iteration using Figma’s collaborative workflows. This
          foundation allows designers and developers to work in sync, accelerating delivery while
          maintaining precision, coherence, and long-term maintainability.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
              <span className="text-blue-600 font-medium">Objective:</span> {mod.objective}
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
