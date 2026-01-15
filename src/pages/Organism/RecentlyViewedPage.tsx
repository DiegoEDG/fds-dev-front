import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import RecentlyViewed from "../../components/organisms/RecentlyViewed";
import { codeRecentlyViewed } from "./constants";

const RecentlyViewedPage = () => {
  useEffect(() => {
    document.title = "Recently Viewed";
  }, []);

  return (
    <ComponentLayout name="Recently Viewed" description="">
      <MscComponentSnippet code={codeRecentlyViewed}>
        <RecentlyViewed />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default RecentlyViewedPage;
