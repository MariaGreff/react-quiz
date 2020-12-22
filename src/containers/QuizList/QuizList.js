import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.scss";

function QuizList () {

const renderQuizzes = () => {
  return [1, 2, 3].map((quiz, index) => {
    return (
      <li key={index}>
        <NavLink to={`/quiz/${quiz}`}>
          Test {quiz}
        </NavLink>
      </li>
    )
  })
};

  return (
    <div className={classes["QuizList"]}>
      <h1>List of quizzes</h1>
        <ul>
          {renderQuizzes()}
        </ul>
    </div>
  );
};

export default QuizList;