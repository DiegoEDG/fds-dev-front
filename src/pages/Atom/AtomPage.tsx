import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Atom from "../../components/atoms/Atom"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codeAtom } from "./constants";

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
    </ComponentLayout>
  );
};


export default AtomPage