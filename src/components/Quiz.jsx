import { QUESTIONS } from "../data";
import { QuizItem } from "./QuizItem";

export const Quiz = () => {
  return (
    <div>
      <h1>Wellcome to Quiz</h1>
      <div>
        {QUESTIONS[0].answerOptions.map((item) => {
          return <QuizItem item={item} />;
        })}
      </div>
    </div>
  );
};
