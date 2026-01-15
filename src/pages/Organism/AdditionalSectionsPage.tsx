import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import AdditionalSections from "../../components/organisms/AdditionalSections";
import { codeAdditionalSections } from "./constants";

const AdditionalSectionsPage = () => {
  useEffect(() => {
    document.title = "Additional Sections";
  }, []);

  return (
    <ComponentLayout name="Additional Sections" description="">
      <MscComponentSnippet code={codeAdditionalSections}>
        <AdditionalSections />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default AdditionalSectionsPage;
