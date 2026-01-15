import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import TestimonialSection from "../../components/organisms/TestimonialSection";
import { codeTestimonialSection } from "./constants";

const TestimonialSectionPage = () => {
  useEffect(() => {
    document.title = "Testimonial Section";
  }, []);

  return (
    <ComponentLayout name="Testimonial Section" description="">
      <MscComponentSnippet code={codeTestimonialSection}>
        <TestimonialSection />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default TestimonialSectionPage;
