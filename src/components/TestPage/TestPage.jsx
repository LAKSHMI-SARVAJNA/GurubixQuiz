import { useState, useEffect } from "react";
import questions from "../../data/aptitude";
import RightCarousel from "../../components/rightCarousel/rightCarousel";
import {
  TestPageWrapper,
  Option,
  SubmitButton,
  TimelineWrapper,
  AlertWrapper,
  QuestionContainer,
  OptionsContainer,
  LineSeparator,
  ResultsWrapper,
  ReviewText
 
} from "./styledComponents";

const TestPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  });

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
    setResultsVisible(true);
  };

  const handleConfirmSubmit = () => {
    setShowAlert(false);
    handleSubmit();
  };

  const handleCancelSubmit = () => {
    setShowAlert(false);
  };

  const renderOptions = (options, questionIndex, isReview = false) => {
    return Object.keys(options).map((key, idx) => {
      const isCorrect = questions[questionIndex].correctAnswer === key;
      const isUserAnswer = selectedAnswers[questionIndex] === key;

      return (
        <Option
          key={key}
          className={
            isReview
              ? isUserAnswer
                ? isCorrect
                  ? "correct"
                  : "wrong"
                : isCorrect
                ? "correct"
                : ""
              : ""
          }
        >
          <input
            type="checkbox"
            id={`option-${key}-${questionIndex}`}
            name={`option-${questionIndex}`}
            value={key}
            onChange={() => !isReview && handleOptionSelect(questionIndex, key)}
            checked={selectedAnswers[questionIndex] === key}
            disabled={isReview}
          />
          <label htmlFor={`option-${key}-${questionIndex}`}>
            {String.fromCharCode(65 + idx)}. {options[key]}
          </label>
        </Option>
      );
    });
  };

  return (
    <TestPageWrapper>
       {!resultsVisible && (
       <TimelineWrapper>
        <h2>
          Time Left: {`${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}
        </h2>
      </TimelineWrapper>
         )}
      {resultsVisible ? (
        <div className="test-layout">
        
          <QuestionContainer>
          <ResultsWrapper>
            <h2>Marks :{score} / {questions.length} </h2>
            <LineSeparator />
            <p>Total number of questions       :  {questions.length}</p>
            <p>Number of answered questions    :  {Object.keys(selectedAnswers).length}</p>
            <p>Number of unanswered questions  :  {questions.length - Object.keys(selectedAnswers).length}</p>
          
          </ResultsWrapper>
        <ReviewText>
        <p>Test Review : View answers and explanation for this test.</p> 
        </ReviewText>
          
          <LineSeparator />
            {questions.map((question, index) => (
              <div  key={index}>
                <h3>
                  Q{index + 1}. {question.question}
                </h3>
                <OptionsContainer>
                  {renderOptions(
                    {
                      optionA: question.optionA,
                      optionB: question.optionB,
                      optionC: question.optionC,
                      optionD: question.optionD,
                    },
                    index,
                    true
                  )}
                  </OptionsContainer>
               
                <LineSeparator />
              </div>
            ))}
         </QuestionContainer>
          <RightCarousel className="right-carousel" />
        </div>
      ) : (
       
        <div className="test-layout">
          <QuestionContainer>
            {questions.map((question, index) => (
              <div key={index}>
                <h3>
                  Q{index + 1}. <span>{question.question}</span>
                </h3>
                <OptionsContainer>
                  {renderOptions(
                    {
                      optionA: question.optionA,
                      optionB: question.optionB,
                      optionC: question.optionC,
                      optionD: question.optionD,
                    },
                    index
                  )}
                </OptionsContainer>
                <LineSeparator />
              </div>
            ))}
          </QuestionContainer>
          <RightCarousel className="right-carousel" />
        </div>
      )}
      {!resultsVisible && (
        
        <SubmitButton onClick={() => setShowAlert(true)}>Submit</SubmitButton>
      )}
      {showAlert && (
        <AlertWrapper>
          <p>Are you sure you want to submit the quiz?</p>
          <button onClick={handleConfirmSubmit}>Confirm</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
        </AlertWrapper>
      )}
    </TestPageWrapper>
  );
};

export default TestPage;
