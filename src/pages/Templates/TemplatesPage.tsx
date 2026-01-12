import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Templates from "../../components/templates/Templates"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codeTemplates } from "./constants";

const TemplatesPage = () => {
  useEffect(() => {
    document.title = "Templates page";
  }, []);

  return (
    <ComponentLayout>
      <MscComponentSnippet code={codeTemplates}>
        <Templates />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default TemplatesPage
