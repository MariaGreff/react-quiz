import AnswersList from "../AnswersList/AnswersList";
import classes from "./ActiveQuiz.module.scss";

function ActiveQuiz (props) {
  return (
    <div className={classes["ActiveQuiz"]}>
      <p className={classes["Question"]}>
        <span>
          <strong>1. </strong>
          How are you?
        </span>
        <small>4 out of 12</small>
      </p>
     <AnswersList
       answers={props.answers}
     />
    </div>
  );
};

export default ActiveQuiz;