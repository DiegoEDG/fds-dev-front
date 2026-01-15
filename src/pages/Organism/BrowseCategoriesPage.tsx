import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import BrowseCategories from "../../components/organisms/BrowseCategories";
import { codeBrowseCategories } from "./constants";

const BrowseCategoriesPage = () => {
  useEffect(() => {
    document.title = "Browse Categories";
  }, []);

  return (
    <ComponentLayout name="Browse Categories" description="">
      <MscComponentSnippet code={codeBrowseCategories}>
        <BrowseCategories />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default BrowseCategoriesPage;
