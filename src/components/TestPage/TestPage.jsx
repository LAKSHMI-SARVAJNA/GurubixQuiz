import { useState, useEffect } from "react";
import questions from "../../data/aptitude";
import RightCarousel from "../../components/rightCarousel/rightCarousel";
import {
  TestPageWrapper,

  Option,
  SubmitButton,
  TimelineWrapper,
  AlertWrapper,
  // RightCarouselWrapper,
  // CarouselItem,
  QuestionContainer,
  OptionsContainer,
  LineSeparator,
} from "./styledComponents";

const TestPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(null);
 // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
  };

  const handleConfirmSubmit = () => {
    setShowAlert(false);
    handleSubmit();
  };

  const handleCancelSubmit = () => {
    setShowAlert(false);
  };

  // const handleQuestionNavigation = (index) => {
  //   setCurrentQuestionIndex(index);
  // };

  const renderOptions = (options, questionIndex) => {
    return Object.keys(options).map((key, idx) => (
      <Option key={key}>
        <input
          type="checkbox"
          id={`option-${key}-${questionIndex}`}
          name={`option-${questionIndex}`}
          value={key}
          onChange={() => handleOptionSelect(questionIndex, key)}
          checked={selectedAnswers[questionIndex] === key}
        />
        <label htmlFor={`option-${key}-${questionIndex}`}>
          {String.fromCharCode(65 + idx)}. {options[key]}
        </label>
      </Option>
    ));
  };

  if (score !== null) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Your Score: {score} / {questions.length}</h1>
      </div>
    );
  }

  return (
    <TestPageWrapper>
      <TimelineWrapper>
        <h2>Time Left: {`${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}</h2>
      </TimelineWrapper>
      <div className="test-layout">
      <QuestionContainer>
        {questions.map((question, index) => (
          <div key={index}>
            
              <h3>
                Q{index + 1}. <span>{question.question}</span>
              </h3>
              <OptionsContainer>
                {renderOptions({
                  optionA: question.optionA,
                  optionB: question.optionB,
                  optionC: question.optionC,
                  optionD: question.optionD,
                }, index)}
              </OptionsContainer>
           
            <LineSeparator />
          </div>
        ))}
      </QuestionContainer>
      <RightCarousel className="right-carousel" />
     
      </div>
      <SubmitButton onClick={() => setShowAlert(true)}>Submit</SubmitButton>

      
      {/* <RightCarousel /> */}
      {showAlert && (
        <AlertWrapper>
          <p>Are you sure you want to submit the quiz?</p>
          <button onClick={handleConfirmSubmit}>Confirm</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
        </AlertWrapper>
      )}

      {/* <RightCarouselWrapper>
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
      </RightCarouselWrapper> */}
    </TestPageWrapper>
    
  );
};

export default TestPage;
