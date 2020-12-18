import { useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import classes from "./Quiz.module.scss";

function Quiz () {
  const [quiz, setQuiz] = useState(
    {
      results: {}, // {[id]: success error}
      isFinished: false,
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
          question: 'What was the first name of JavaScript?',
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
      console.log(key);
      if (quiz.answerState[key] === 'success' ) {
        return;
      }
    }
    const results = quiz.results;
    const question = quiz.questions[quiz.activeQuestion];

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      setQuiz( prevState => {
        return { ...prevState, answerState: {
          [answerId]: 'success'
        }, results };
      });

      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setQuiz( prevState => {
            return { ...prevState, isFinished: true }
          });
        } else {
          setQuiz( prevState => {
            return { ...prevState, activeQuestion: quiz.activeQuestion + 1, answerState: null, results };
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      setQuiz( prevState => {
        return { ...prevState, answerState: {
          [answerId]: 'error'
        }, results };
      });
      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setQuiz( prevState => {
            return { ...prevState, isFinished: true }
          });
        } else {
          setQuiz( prevState => {
            return { ...prevState, activeQuestion: quiz.activeQuestion + 1, answerState: null, results };
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    }
  };

  const isQuizFinished = () => quiz.activeQuestion + 1 === quiz.questions.length;
  console.log(quiz);
  return (
    <div className={classes["Quiz"]}>
      <div className={classes["QuizWrapper"]}>
       <h1>Answer all questions</h1>
       {
         quiz.isFinished ? <FinishedQuiz results={quiz.results} questions={quiz.questions} /> :        
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
       }
      </div>
    </div>
  )
};

export default Quiz;
