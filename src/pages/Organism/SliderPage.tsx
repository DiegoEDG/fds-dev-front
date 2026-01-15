import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import Slider from "../../components/organisms/Slider";
import { codeSlider } from "./constants";

const SliderPage = () => {
  useEffect(() => {
    document.title = "Slider";
  }, []);

  return (
    <ComponentLayout name="Slider" description="">
      <MscComponentSnippet code={codeSlider}>
        <Slider />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default SliderPage;
