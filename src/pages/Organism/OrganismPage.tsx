import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Organism from "../../components/organisms/Organism"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codeOrganism } from "./constants";

const OrganismPage = () => {
  useEffect(() => {
    document.title = "Organism page";
  }, []);

  return (
    <ComponentLayout
      name="Organisms"
      description="Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Organisms can consist of similar and/or different molecule types. Examples include a masthead (header), a product grid, or a user profile widget."
    >
      <MscComponentSnippet code={codeOrganism}>
        <Organism />
      </MscComponentSnippet>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What is an Organism?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
             We’re starting to get increasingly concrete. A client might not be terribly interested in the molecules of a design system, but with organisms we can see the final interface beginning to take shape.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
             Examples include:
             <ul className="list-disc ml-6 mt-2 space-y-1">
               <li><strong>The Masthead:</strong> Comprised of a logo, primary navigation, search form, and list of social media links.</li>
               <li><strong>Product Grid:</strong> Comprised of a repeating list of product molecules.</li>
             </ul>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Visual Representation</h3>
          <div className="border rounded-xl bg-gray-50 p-6 flex justify-center">
             <img 
               src="https://atomicdesign.bradfrost.com/images/content/atomic-design-organisms.png" 
               alt="Organisms Diagram by Brad Frost" 
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
                Read more in <a href="https://atomicdesign.bradfrost.com/chapter-2/#organisms" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-900">Brad Frost's Atomic Design - Chapter 2</a>
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

export default OrganismPage
