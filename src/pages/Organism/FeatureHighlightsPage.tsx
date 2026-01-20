import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import FeatureHighlights from "../../components/organisms/FeatureHighlights";
import { codeFeatureHighlights } from "./constants";

const FeatureHighlightsPage = () => {
  useEffect(() => {
    document.title = "Feature Highlights";
  }, []);

  return (
    <ComponentLayout name="Feature Highlights" description="">
      <MscComponentSnippet code={codeFeatureHighlights} variant="transparent">
        <FeatureHighlights />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default FeatureHighlightsPage;
