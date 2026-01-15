import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import CategoryTags from "../../components/organisms/CategoryTags";
import { codeCategoryTags } from "./constants";

const CategoryTagsPage = () => {
  useEffect(() => {
    document.title = "Category Tags";
  }, []);

  return (
    <ComponentLayout name="Category Tags" description="">
      <MscComponentSnippet code={codeCategoryTags}>
        <CategoryTags />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default CategoryTagsPage;
