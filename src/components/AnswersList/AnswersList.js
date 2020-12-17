import AnswerItem from "../AnswerItem/AnswerItem";
import classes from "./AnswersList.module.scss";

function AnswersList (props) {
  return (
    <ul className={classes["AnswersList"]}>
      {props.answers.map((answer, index) => {
        return <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          answerState = {props.answerState ? props.answerState[answer.id]: null}
        />
      })}
    </ul>
  )

};

export default AnswersList;