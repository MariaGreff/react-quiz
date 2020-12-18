import classes from './FinishedQuiz.module.scss';

function FinishedQuiz (props) {
const successCount = Object.keys(props.results).reduce((total, key) => {
  if (props.results[key] === 'success') {
    total++;
  }
  return total;
}, 0)

  return (
    <div className={classes["FinishedQuiz"]}>
      <ul>
      {props.questions.map((question, index) => {
        const cls = [
          'fa',
          props.results[question.id] === 'error' ? 'fa-times' : 'fa-check',
          classes[`${props.results[question.id]}`] 
        ];
        console.log(props.results);
        return (
          <li key={index}>
            <strong>{index+1}</strong>. 
            {question.question}
            <i className={cls.join(' ')}/>
          </li>
        )
      })}
      </ul>
      <p>Correct answers: {successCount} out of {props.questions.length}</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
};

export default FinishedQuiz;