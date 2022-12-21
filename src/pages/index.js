import React, { useState } from "react";
import EndPages from "./EndPages";
import QuizPages from "./QuizPages";

const AllPages = () => {
  const [stepContent, setStepContent] = useState("quiz-pages");
  const nextPages1 = () => {
    setStepContent("quiz-pages");
  };
  const nextPages2 = () => {
    setStepContent("end-pages");
  };

  return (
    <React.Fragment>
      {stepContent === "quiz-pages" && <QuizPages onClickNext={nextPages2} />}
      {stepContent === "end-pages" && <EndPages onClickNext={nextPages1} />}
    </React.Fragment>
  );
};

export default AllPages;
