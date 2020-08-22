import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';
import {fetchQuestions} from "./API";
import { Difficulty } from './API'

const TOTAL_QUESTION = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTION,Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
      questionNr = {number + 1}
      totalQuestion = {TOTAL_QUESTION}
      question = {questions[number].question}
      answers = {questions[number].answers}
      userAnswer = {userAnswer ? userAnswer[number] : undefined}
      callback = {checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
