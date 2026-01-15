import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Molecule from "../../components/molecules/Molecule"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codeMolecule } from "./constants";

const MoleculePage = () => {
  useEffect(() => {
    document.title = "Molecule page";
  }, []);

  return (
    <ComponentLayout
      name="Molecules"
      description="Molecules are groups of atoms bonded together to take on new properties and serve as the smallest fundamental units of a compound. These particles are somewhat functional on their own. Examples include a form label, search input, and button combined to create a search form molecule."
    >
      <MscComponentSnippet code={codeMolecule}>
        <Molecule />
      </MscComponentSnippet>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What is a Molecule?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Molecules are groups of atoms bonded together to take on new properties and serve as the smallest fundamental units of a compound. These particles are somewhat functional on their own.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
             For example, a form label, search input, and button are all atoms, but when you combine them together, they form a search form molecule.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
             Building up from atoms to molecules encourages a “do one thing and do it well” mentality. While molecules can be complex, as a general rule they are relatively simple combinations of atoms built for reuse.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Visual Representation</h3>
          <div className="border rounded-xl bg-gray-50 p-6 flex justify-center">
             <img 
               src="https://atomicdesign.bradfrost.com/images/content/atomic-design-molecules.png" 
               alt="Molecules Diagram by Brad Frost" 
               className="max-w-full h-auto shadow-sm rounded"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Resources & References</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-700">
                Read more in <a href="https://atomicdesign.bradfrost.com/chapter-2/#molecules" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-900">Brad Frost's Atomic Design - Chapter 2</a>
              </p>
            </div>
            
            <div className="w-full max-w-3xl aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Yi-A20x2dcA" 
                title="Atomic Design - Brad Frost" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default MoleculePage
