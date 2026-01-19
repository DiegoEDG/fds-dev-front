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
    <ComponentLayout name="Services Designed">
      <MscComponentSnippet code={codeServicesDesigned} variant="transparent">
        <ServicesDesigned />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default ServicesDesignedPage;
