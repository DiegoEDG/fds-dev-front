import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import MscInfo from "../../components/organisms/MscInfo";

const codeSnippet = `
<article className="bg-white rounded p-6 mb-6">
  <h3 className="text-xl mb-4 font-bold">MSC Industrial Supply Co.</h3>
  <p className="text-sm mb-4 text-monochromes-grey">
    MSC Industrial Supply, Inc. is a leading North American distributor of
    metalworking and <a href="#" className="text-black underline">maintenance</a>, repair and
    operations <a href="#" className="text-black underline">(MRO) products</a> and services. With over
    75 years of experience, MSC is dedicated to helping customers drive greater
    productivity, profitability and growth. MSC features over 1.5 million products
    ready-to-ship. Our inventory management and other supply chain solutions ensure
    that your workforce and facility are supplied with equipment that is reliable,
    durable and accurate for every operation.
  </p>

  <p className="text-sm text-monochromes-grey">
    We are your steadfast partner in providing innovative solutions that deliver.
    That includes our knowledgeable customer service associates who strive to ensure
    that every customer is provided with the best possible shopping experience - first
    time, every time.
  </p>
</article>`;

const MscInfoPage = () => {
  useEffect(() => {
    document.title = "MscInfo page";
  }, []);

  return (
    <ComponentLayout name="MscInfo" description="MscInfo description">
      <MscComponentSnippet code={codeSnippet} variant="transparent">
        <MscInfo />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscInfoPage;
