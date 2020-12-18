import classes from './FinishedQuiz.module.scss';

function FinishedQuiz (props) {
  return (
    <div className={classes["FinishedQuiz"]}>
      <ul>
      {props.quiz.map((question, index) => {
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
        {/* <li>
          <strong>1. </strong>
          How are you? 
          <i className={'fa fa-times ' + classes["error"]} />
        </li>
        <li>
          <strong>2. </strong>
          How are you? 
          <i className={'fa fa-check ' + classes["success"]} />
        </li> */}
      </ul>
      <p>4 out of 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
};

export default FinishedQuiz;