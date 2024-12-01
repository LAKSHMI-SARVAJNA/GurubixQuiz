import { useState, useEffect } from "react";
import  { generalAptitudeTest } from "../../data/aptitude";
import {technicalTest} from "../../data/technical.js"
import RightCarousel from "../../components/rightCarousel/rightCarousel";
import PropTypes from "prop-types";
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
  WorkspaceTextArea,
  Para
 
} from "./styledComponents";

const TestPage = ({ selectedCategory, usedQuestions, updateUsedQuestions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [workspaceData, setWorkspaceData] = useState({});
  const [workspaceVisible, setWorkspaceVisible] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [showAlert, setShowAlert] = useState(false);
  const [showUnansweredAlert, setShowUnansweredAlert] = useState(false);
  const [score, setScore] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const chapters = generalAptitudeTest[selectedCategory];
    const randomQuestions = getRandomQuestions(chapters, 20, usedQuestions);
      setQuestions(randomQuestions);
  }, [selectedCategory]); 

  useEffect(() => {
    if (questions.length > 0) {
      const updatedUsedQuestions = new Set(usedQuestions); 
      let newUsedQuestionsAdded = false;
      
      questions.forEach((question) => {
        if (!usedQuestions.has(question.index)) {
          updatedUsedQuestions.add(question.index);
          newUsedQuestionsAdded = true;
        }
      });

      if (newUsedQuestionsAdded) {
        updateUsedQuestions(updatedUsedQuestions);
      }
    }
  }, [questions, usedQuestions, updateUsedQuestions]); 
  

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
      if (!resultsVisible) { 
        event.preventDefault();
        event.returnValue = ""; 
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
  
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
  
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
      setShowUnansweredAlert(true); 
    } else {
      setShowAlert(true); 
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
    setShowUnansweredAlert(false); 
    setShowAlert(true); 
  };

  const handleCancelUnanswered = () => {
    setShowUnansweredAlert(false); 
  };

  const handleCancelSubmit = () => {
    setShowAlert(false);
  };

  const getRandomQuestions = (chapters, numQuestions, usedQuestions) => {
    const allQuestions = Object.values(chapters).flat(); 
   // console.log("All Questions:", allQuestions);
    const uniqueQuestions = allQuestions.filter((question,index) => {
      if (!question.id) {
        question.id = `question-${index}`;
      }
      return !usedQuestions.has(question.index);
    });
   // console.log("Unique Questions After Filtering:", uniqueQuestions);

    const shuffled = uniqueQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
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

  const renderQuestionReview = (question, index) => {
    const userAnswer = selectedAnswers[index];
    const correctAnswer = question.correctAnswer;
    const explanation = question.explanation;

    return (
      <div key={index}>
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
        <p><Para>Your Answer: </Para>{userAnswer ? question[userAnswer] : "No Answer"}</p>
        <p><Para>Correct Answer: </Para> {question[correctAnswer]}</p>
        <p><Para>Explanation: </Para>{explanation}</p>
        <LineSeparator />
      </div>
    );
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
        {questions.map((question, index) => renderQuestionReview(question, index))}
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
              <div key={question.id || index}>
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
              {!resultsVisible && (
        
        <SubmitButton onClick={handleSubmitClick}>Submit</SubmitButton>
      )}
          </QuestionContainer>
          <RightCarousel className="right-carousel" />
        </div>
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

TestPage.propTypes = {
  selectedCategory: PropTypes.string.isRequired, 
  usedQuestions: PropTypes.instanceOf(Set).isRequired,
  updateUsedQuestions: PropTypes.func.isRequired,
};


export default TestPage;