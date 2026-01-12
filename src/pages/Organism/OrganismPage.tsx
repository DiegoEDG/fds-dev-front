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
    <ComponentLayout>
      <MscComponentSnippet code={codeOrganism}>
        <Organism />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default OrganismPage
