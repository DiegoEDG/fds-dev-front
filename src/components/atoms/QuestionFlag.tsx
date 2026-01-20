import React from "react";

const QuestionFlag: React.FC = () => {
  return (
    <article className="p-3 w-full flex items-center justify-center bg-white font-bold my-4 text-center">
      <span>
        Have a Question? We’re here to help Call:{" "}
        <a href="#" className="text-primary-blue_dark">
          1-800-645-7270
        </a>{" "}
        or Email{" "}
        <a
          href="mailto:support@mscdirect.com"
          className="text-primary-blue_dark"
        >
          support@mscdirect.com
        </a>
      </span>
    </article>
  );
};

export default QuestionFlag;
