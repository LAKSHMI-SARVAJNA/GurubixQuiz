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
  ReviewText,
  WorkspaceToggleButton,
  WorkspaceTextArea
 
} from "./styledComponents";

const TestPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [workspaceData, setWorkspaceData] = useState({});
  const [workspaceVisible, setWorkspaceVisible] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [showAlert, setShowAlert] = useState(false);
  const [showUnansweredAlert, setShowUnansweredAlert] = useState(false);
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

  useEffect(() => {
    let warningShown = false; 
  
    
    const handleBeforeUnload = (event) => {
      if (!resultsVisible) { // Allow tab closing after submission
        event.preventDefault();
        event.returnValue = ""; // Necessary for modern browsers
      }
    };
  
    const handleVisibilityChange = () => {
      if (!resultsVisible && document.hidden) {
        if (!warningShown) {
          warningShown = true;
          alert(
            "Warning: Switching tabs may result in the loss of progress. Please stay on the page."
          );
        } else {
        
          setSelectedAnswers({});
          setWorkspaceData({});
          alert("You switched tabs again. Progress may now be lost.");
        }
      }
    };
  
    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
  
    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resultsVisible]);
  
  const handleWorkspaceToggle = (questionIndex) => {
    setWorkspaceVisible((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }));
  };

  const handleWorkspaceChange = (questionIndex, text) => {
    setWorkspaceData((prev) => ({
      ...prev,
      [questionIndex]: text,
    }));
  };


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

  const handleSubmitClick = () => {
    const unansweredCount =
      questions.length - Object.keys(selectedAnswers).length;

    if (unansweredCount > 0) {
      setShowUnansweredAlert(true); // Show unanswered alert
    } else {
      setShowAlert(true); // Show confirmation alert
    }
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

  const handleProceedWithUnanswered = () => {
    setShowUnansweredAlert(false); // Close unanswered alert
    setShowAlert(true); // Open confirmation alert
  };

  const handleCancelUnanswered = () => {
    setShowUnansweredAlert(false); // Close unanswered alert
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
                <WorkspaceToggleButton
                  onClick={() => handleWorkspaceToggle(index)}
                >
                  {workspaceVisible[index] ? "#" : "[#]"}
                </WorkspaceToggleButton>
                {workspaceVisible[index] && (
                  <WorkspaceTextArea
                    value={workspaceData[index] || ""}
                    onChange={(e) => handleWorkspaceChange(index, e.target.value)}
                    placeholder="Type your rough work here..."
                  />
                )}
                <LineSeparator />
              </div>
            ))}
          </QuestionContainer>
          <RightCarousel className="right-carousel" />
        </div>
      )}
      {!resultsVisible && (
        
        <SubmitButton onClick={handleSubmitClick}>Submit</SubmitButton>
      )}
      {showUnansweredAlert && (
    <AlertWrapper>
        <p>{`You have ${questions.length - Object.keys(selectedAnswers).length} unanswered questions. Do you want to continue?`}</p>
        <button onClick={handleProceedWithUnanswered}>Yes</button>
        <button onClick={handleCancelUnanswered}>Cancel</button>
    </AlertWrapper>
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