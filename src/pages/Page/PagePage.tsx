import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout"
import Page from "../../components/pages/Page"
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet"
import { codePage } from "./constants";

const PagePage = () => {
  useEffect(() => {
    document.title = "Page page";
  }, []);

  return (
    <ComponentLayout>
      <MscComponentSnippet code={codePage}>
        <Page />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default PagePage
