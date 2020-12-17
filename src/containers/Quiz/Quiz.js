import { useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.scss";

function Quiz () {
  const [quiz, setQuiz] = useState([
    {
      answers: [
        {text:'Answer 1'},
        {text:'Answer 2'},
        {text:'Answer 3'},
        {text:'Answer 4'}
      ]
    }
  ]);
  return (
    <div className={classes["Quiz"]}>
      <div className={classes["QuizWrapper"]}>
       <h1>Answer all questions</h1>
       <ActiveQuiz
         answers={quiz[0].answers}
       />
      </div>
    </div>
  )
};

export default Quiz;
