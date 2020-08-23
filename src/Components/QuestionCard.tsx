import React from "react";
import { answerObject } from "../App";
import {Wrapper, ButtonWrapper} from './Card.style'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: answerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion
}) => (
        <Wrapper>
            <p className="number">
                Question : {questionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                     key={answer}
                     correct = {userAnswer?.correctAnswer === answer}
                     userClicked = {userAnswer?.answer === answer}
                     >
                        <button value={answer} disabled={!!userAnswer} onClick={callback} >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );

export default QuestionCard;