import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import BestSellers from "../../components/organisms/BestSellers";
import { codeBestSellers } from "./constants";

const BestSellersPage = () => {
  useEffect(() => {
    document.title = "Best Sellers";
  }, []);

  return (
    <ComponentLayout name="Best Sellers" description="">
      <MscComponentSnippet code={codeBestSellers} variant="transparent">
        <BestSellers />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default BestSellersPage;
