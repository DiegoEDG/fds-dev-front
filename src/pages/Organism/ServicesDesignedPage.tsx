import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ServicesDesigned from "../../components/organisms/ServicesDesigned";
import { codeServicesDesigned } from "./constants";

const ServicesDesignedPage = () => {
  useEffect(() => {
    document.title = "Services Designed";
  }, []);

  return (
    <ComponentLayout name="Services Designed" description="">
      <MscComponentSnippet code={codeServicesDesigned}>
        <ServicesDesigned />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default ServicesDesignedPage;
