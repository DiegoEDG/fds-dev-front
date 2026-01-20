import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import QuestionFlag from "../../components/atoms/QuestionFlag";

const codeSnippet = `
<article className="p-3 w-full flex items-center justify-center bg-white font-bold my-4 text-center">
  <span>
    Have a Question? We’re here to help Call: 
    <a href="#" className="text-primary-blue_dark">1-800-645-7270</a> or Email 
    <a href="mailto:support@mscdirect.com" className="text-primary-blue_dark">support@mscdirect.com</a>
  </span>
</article>`;

const QuestionFlagPage = () => {
  useEffect(() => {
    document.title = "QuestionFlag page";
  }, []);

  return (
    <ComponentLayout name="QuestionFlag" description="QuestionFlag description">
      <MscComponentSnippet code={codeSnippet} variant="transparent">
        <QuestionFlag />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default QuestionFlagPage;
