import React from 'react';
import "./QuestionIndexItem.css";
import { useState } from 'react';

const QuestionIndexItem = ({question, questionNumber, setQuestionNumber, numberOfQuestions, points, setPoints}) => {
    //the index item takes in the question, points, and setPoints as props from the "index" component
    const [selectedAnswer, setSelectedAnswer] = useState();

    const answerClick = (e) => {
        console.log(question)
        setSelectedAnswer(e.target.innerText);
        // e.target.style.color = "green";
    }

    const submitAnswer = () => {
        if (selectedAnswer === question.correctAnswer) { //note that it is camelCase now
            setPoints(points + 10);
        } 
        if(questionNumber < numberOfQuestions){
            setQuestionNumber(questionNumber + 1);
        } else {
            document.querySelector(".question-card").innerHTML="Thanks for taking the test!"
        }
        
    }

    return (
        <div className='question-card'>
            <p className='question-title'>{question.question}</p> 
            <div className='a-and-b'>
                <button className='choice airbnz-button' onClick={(e) => answerClick(e)}>{question.answerA}</button>
                <button className='choice airbnz-button' onClick={(e) => answerClick(e)}>{question.answerB}</button>
            </div>
            <div className="c-and-d">
                <button className='choice airbnz-button' onClick={(e) => answerClick(e)}>{question.answerC}</button>
                <button className='choice airbnz-button' onClick={(e) => answerClick(e)}>{question.answerD}</button>
            </div>
            <button className='airbnz-button' id='next' onClick={submitAnswer}>{questionNumber < numberOfQuestions ? "Next" : "Submit"}</button>
        </div>
    )
}

export default QuestionIndexItem;