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
    <ComponentLayout>
      <MscComponentSnippet code={codeMolecule}>
        <Molecule />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MoleculePage
