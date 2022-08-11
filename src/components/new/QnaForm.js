import "./QnaForm.css";
import { useState } from "react";
import { scoreAnswer } from "./../utils/StringUtils.js";

const QnaForm = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState("");

  const onNextButtonClickHandler = (event) => {
    getNewQuestion();
  };

  function getNewQuestion() {
    fetch(`https://jservice.io/api/random`)
      .then((response) => response.json())
      .then((dataJson) => {
          console.log('gnq dataJson=' + JSON.stringify(dataJson[0]));
          writeNewQuestionToState(dataJson[0]);
      })
      .catch((error) => {
          console.log('error =' + error)
      });
  };
  
  function writeNewQuestionToState(newQuestion) {
    setCurrentQuestion((previousState, previousProps) => {  
      console.log('scq1 newQuestion=' + JSON.stringify(newQuestion));
      console.log('scq2 newQuestion.category.title=' + JSON.stringify(newQuestion.category.title));
      console.log('scq3 new Date()=' + new Date());
      let nq = {
        id: newQuestion.id,
        category: newQuestion.category.title,
        question: newQuestion.question,
        hint: newQuestion.answer,
        answer: currentQuestion.answer,
        airDate: newQuestion.airdate,
        rePlayedDate: new Date(),
        pointValue: newQuestion.value
      };
      console.log('scq3 nq=' + JSON.stringify(nq));
      return nq;
    });
  };

  const currentAnswerOnChangeHandler = (event) => {
    setCurrentAnswer((previousStateSnapshop) => {
      /* console.log('event.target.value=' + event.target.value); */
      return event.target.value;
    });
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    console.log('fosh currentQuestion=' + JSON.stringify(currentQuestion));
    console.log('fosh new Date()=' + new Date());
    const qnaInfo = { 
      id : currentQuestion.id,
      airDate : currentQuestion.airDate,
      rePlayedDate: new Date(),
      category : currentQuestion.category.title,
      question : currentQuestion.question,
      hint : currentQuestion.answer,
      answer : currentAnswer,
      pointValue : scoreAnswer(currentAnswer, currentQuestion.hint, currentQuestion.pointValue)
    }
    console.log('qnaInfo=' + JSON.stringify(qnaInfo));
    props.onSaveQna(qnaInfo);
    setCurrentAnswer(''); 
  };

  return (
    <form onSubmit={formOnSubmitHandler}>
      <div className="new-qna__controls">
        <div>
        <b></b> {JSON.stringify(currentQuestion.question)}
        </div>
        <div className="new-qna__actions">
          <button type='button' onClick={onNextButtonClickHandler}>Next</button>
        </div>
        <div className="new-qna__control">
          <input type="text" value={currentAnswer} onChange={currentAnswerOnChangeHandler} />
        </div>
        <div className="new-qna__actions">
          <button type="submit" >Answer</button>
          <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default QnaForm;
