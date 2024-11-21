import React, { useState, useEffect } from "react";
import questions from "../../data/problemsOnTrainQuestions.js"; // Importing the questions data
import {
  TestPageWrapper,
  QuestionWrapper,
  Option,
  SubmitButton,
  TimelineWrapper,
  AlertWrapper,
  RightCarouselWrapper,
  CarouselItem,
  QuestionContainer,
  
} from "./styledComponents";

const TestPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes timer
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(); // Automatically submit when time is up
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
  };

  const handleConfirmSubmit = () => {
    setShowAlert(false);
    handleSubmit();
  };

  const handleCancelSubmit = () => {
    setShowAlert(false);
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  // If score is calculated, show the score.
  if (score !== null) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Your Score: {score} / {questions.length}</h1>
      </div>
    );
  }

  return (
    
    <TestPageWrapper>
      {/* Timeline */}
      <TimelineWrapper>
        <h2>Time Left: {`${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}</h2>
      </TimelineWrapper>

      {/* Questions and options */}
      <QuestionContainer>
        {questions.map((question, index) => (
          <QuestionWrapper key={index} style={{ display: currentQuestionIndex === index ? 'block' : 'none' }}>
            <h3>Q{index + 1}. {question.question}</h3>
            <div>
              {["optionA", "optionB", "optionC", "optionD"].map((optionKey, idx) => (
                <Option
                  key={optionKey}
                  onClick={() => handleOptionSelect(index, optionKey)}
                  isSelected={selectedAnswers[index] === optionKey}
                >
                  {String.fromCharCode(65 + idx)} {question[optionKey]}
                </Option>
              ))}
            </div>
          </QuestionWrapper>
        ))}
      </QuestionContainer>

      {/* Submit Button */}
      <SubmitButton onClick={() => setShowAlert(true)}>Submit</SubmitButton>

      {/* Confirmation Alert */}
      {showAlert && (
        <AlertWrapper>
          <p>Are you sure you want to submit the quiz?</p>
          <button onClick={handleConfirmSubmit}>Confirm</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
        </AlertWrapper>
      )}

      {/* Right Carousel */}
      <RightCarouselWrapper>
        <h4>Navigate Questions</h4>
        {questions.map((_, index) => (
          <CarouselItem
            key={index}
            isAnswered={selectedAnswers[index] !== undefined}
            isActive={currentQuestionIndex === index}
            onClick={() => handleQuestionNavigation(index)}
          >
            Q{index + 1}
          </CarouselItem>
        ))}
      </RightCarouselWrapper>
    </TestPageWrapper>
  );
};

export default TestPage;
