import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Atom from "../../components/atoms/Atom"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codeAtom } from "./constants";

import atomic from "../../assets/atomic/atomic.svg";

const AtomPage = () => {
  useEffect(() => {
    document.title = "Atom page";
  }, []);

  return (
    <ComponentLayout
      name="Atoms"
      description="Atoms are the basic building blocks of all user interfaces. They are the smallest functional units that cannot be broken down further without losing their purpose. Examples include base HTML elements like labels, inputs, and buttons, as well as abstract elements like color palettes and fonts."
    >
      <MscComponentSnippet code={codeAtom}>
        <Atom />
      </MscComponentSnippet>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What is an Atom?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button. Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Like atoms in nature they’re fairly abstract and often not terribly useful on their own. However, they’re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Visual Representation</h3>
          <div className="border rounded-xl bg-gray-50 p-6 flex justify-center">
             <img 
               src={atomic}
               alt="Atoms Diagram" 
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
                Read more in <a href="https://atomicdesign.bradfrost.com/chapter-2/#atoms" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-900">Brad Frost's Atomic Design - Chapter 2</a>
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


export default AtomPage