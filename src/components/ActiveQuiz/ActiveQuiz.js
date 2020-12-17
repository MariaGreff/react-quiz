import AnswersList from "../AnswersList/AnswersList";
import classes from "./ActiveQuiz.module.scss";

function ActiveQuiz (props) {
  return (
    <div className={classes["ActiveQuiz"]}>
      <p className={classes["Question"]}>
        <span>
          <strong>{props.questionNumber}. </strong>
          {props.question}
        </span>
        <small>{props.questionNumber} out of {props.quizLength}</small>
      </p>
     <AnswersList
       answers={props.answers}
       onAnswerClick={props.onAnswerClick}
       answerState={props.answerState}
     />
    </div>
  );
};

export default ActiveQuiz;