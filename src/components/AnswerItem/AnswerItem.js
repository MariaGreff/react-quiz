import classes from "./AnswerItem.module.scss";

function AnswerItem (props) {
  return (
    <li className={classes["AnswerItem"]}>
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;