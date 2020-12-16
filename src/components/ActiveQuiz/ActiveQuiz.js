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
      <ul>
        <li>good</li>
        <li>bad</li>
      </ul>
    </div>
  );
};

export default ActiveQuiz;