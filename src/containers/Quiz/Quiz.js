import { useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.scss";

function Quiz () {
  const [quiz, setQuiz] = useState(
    {
      activeQuestion: 0,
      answerState: null,
      questions: [
        {
          id: 1,
          question: 'When was JavaScript created?',
          answers: [
            {text:'1922', id: 1},
            {text:'1989', id: 2},
            {text:'1995', id: 3},
            {text:'2002', id: 4}
          ],
          rightAnswerId: 3
        },
        {
          id: 2,
          question: 'What was the first name of JavaScript',
          answers: [
            {text:'Script', id: 1},
            {text:'LifeScript', id: 2},
            {text:'CoffeeScript', id: 3},
            {text:'Java', id: 4}
          ],
          rightAnswerId: 2
        }
      ]
    }
  );

  const onAnswerClickHandler = answerId => {
    if (quiz.answerState) {
      const key = Object.keys(quiz.answerState)[0];
      if (quiz.answerState[key] === 'success') {
        return;
      }
    }
    const question = quiz.questions[quiz.activeQuestion];
    if (question.rightAnswerId === answerId) {
      setQuiz( prevState => {
        return { ...prevState, answerState: {
          [answerId]: 'success'
        } };
      });

      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          console.log('Finished');
        } else {
          setQuiz( prevState => {
            return { ...prevState, activeQuestion: quiz.activeQuestion + 1, answerState: null };
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      setQuiz( prevState => {
        return { ...prevState, answerState: {
          [answerId]: 'error'
        } };
      });
    }
  };

  const isQuizFinished = () => quiz.activeQuestion + 1 === quiz.questions.length;
  return (
    <div className={classes["Quiz"]}>
      <div className={classes["QuizWrapper"]}>
       <h1>Answer all questions</h1>
       <ActiveQuiz
         question={quiz.questions[quiz.activeQuestion
         ].question}
         answers={quiz.questions[quiz.activeQuestion
         ].answers}
         onAnswerClick={onAnswerClickHandler}
         quizLength={quiz.questions.length}
         questionNumber={quiz.activeQuestion + 1}
         answerState={quiz.answerState}
       />
      </div>
    </div>
  )
};

export default Quiz;
