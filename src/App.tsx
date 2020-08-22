import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';
import { fetchQuestions } from "./API";
import { QuestionState, Difficulty } from './API';

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const TOTAL_QUESTION = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div>
      <h1>React Quiz App</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTION ? (
        <button className="start" onClick={startTrivia}>Start</button>
      ) : null}
      {!gameOver ? <p className="score">Score</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  );
}

export default App;
