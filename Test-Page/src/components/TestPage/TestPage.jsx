import React, { useState, useEffect } from "react";
import { generalAptitudeTest } from "../../data/aptitude.js";
import { technicalTest } from "../../data/technical.js";
//import { ProgrammingTest } from "../../data/programming.js"; 
import {
  TestPageWrapper,
  TestListWrapper,
  TestItem,
  StartButton,
  QuestionWrapper,
  Option,
  SubmitButton,
  TimelineWrapper,
  AlertWrapper,
  RightCarouselWrapper,
  CarouselItem,
  QuestionContainer,
  
} from "./styledComponents";

const usedQuestionsPool = {};

const testCategories = {
  General: generalAptitudeTest,
  Technical: technicalTest,
 // Programming: ProgrammingTest,
};

const TestPage = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [testQuestions, setTestQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const [showAlert, setShowAlert] = useState(false);
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [category, setCategory] = useState("Technical");
  const [selectedType, setSelectedType] = useState("ReactJs");
 

  useEffect(() => {
    if (testStarted) {
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
    }
  }, [testStarted]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateRandomQuestions = (chapters, numQuestions, categoryType) => {
    const allQuestions = [];
    const usedQuestions = usedQuestionsPool[categoryType] || {};

    Object.keys(chapters).forEach((chapter) => {
      if (!usedQuestions[chapter]) usedQuestions[chapter] = new Set();
      const questions = chapters[chapter];
      
      const unusedQuestions = questions.filter(
        (q, index) => !usedQuestions[chapter].has(index)
      );
      allQuestions.push(...unusedQuestions);
    });

    const shuffledQuestions = shuffleArray(allQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

    Object.keys(chapters).forEach((chapter) => {
      selectedQuestions.forEach((question) => {
        if (chapters[chapter].includes(question)) {
          const questionIndex = chapters[chapter].indexOf(question);
          usedQuestions[chapter].add(questionIndex);
        }
      });
    });

    usedQuestionsPool[categoryType] = usedQuestions;
    return selectedQuestions;
  };

  const handleStartTest = () => {
    let chapters;
    try {
      const selectedTestCategory = testCategories[category];
      if (!selectedTestCategory) {
        throw new Error(`Category "${category}" not found.`);
      }

      chapters = selectedTestCategory[selectedType];
      if (!chapters) {
        throw new Error(`Test type "${selectedType}" not found in category "${category}".`);
      }
    } catch (error) {
      console.error(error.message);
      alert("Invalid test selection. Please try again.");
      return;
    }

    const randomQuestions = generateRandomQuestions(chapters, 20, `${category}-${selectedType}`); // Generate 20 questions
    setTestQuestions(randomQuestions);
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
   
  };

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    testQuestions.forEach((question, index) => {
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

  const renderOptions = (options, questionIndex) => {
    return Object.keys(options).map((key, idx) => (
      <Option
        key={key}
        onClick={() => handleOptionSelect(questionIndex, key)}
        isSelected={selectedAnswers[questionIndex] === key}
      >
        {String.fromCharCode(65 + idx)} {options[key]}
      </Option>
    ));
  };

  
  // If the test is not started yet
  if (!testStarted) {
    return (
      <TestPageWrapper>
      
        <h1>Choose Your Test</h1>
        <div>
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Technical">Technical</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        <div>
          <label htmlFor="testType">Select Test Type:</label>
          <select
            id="testType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="Aptitude">Aptitude</option>
            <option value="Technical">Technical</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        <TestListWrapper>
          <TestItem>
            <span>{category} {selectedType} Test 1</span>
            <StartButton onClick={handleStartTest}>Start</StartButton>
          </TestItem>
          <TestItem>
            <span>{category} {selectedType} Test 2</span>
            <StartButton onClick={handleStartTest}>Start</StartButton>
          </TestItem>
        </TestListWrapper>
      </TestPageWrapper>
    );
  }

  if (score !== null) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Your Score: {score} / {testQuestions.length}</h1>
      </div>
    );
  }

  // When test is started, show questions
  return (
    <TestPageWrapper>
      <TimelineWrapper>
        <h2>Time Left: {`${Math.floor(timeRemaining / 60)}:${timeRemaining % 60}`}</h2>
      </TimelineWrapper>

      <QuestionContainer>
        {testQuestions.map((question, index) => (
          <QuestionWrapper
            key={index}
            style={{ display: currentQuestionIndex === index ? "block" : "none" }}
          >
            <h3>Q{index + 1}. {question.question}</h3>
            <div>
              {renderOptions({
                optionA: question.optionA,
                optionB: question.optionB,
                optionC: question.optionC,
                optionD: question.optionD,
              }, index)}
            </div>
          </QuestionWrapper>
       ))}
       </QuestionContainer>
 
       <SubmitButton onClick={() => setShowAlert(true)}>Submit</SubmitButton>
 
       {showAlert && (
         <AlertWrapper>
           <p>Are you sure you want to submit the quiz?</p>
           <button onClick={handleConfirmSubmit}>Confirm</button>
           <button onClick={handleCancelSubmit}>Cancel</button>
         </AlertWrapper>
       )}
 
       <RightCarouselWrapper>
         <h4>Navigate Questions</h4>
         {testQuestions.map((_, index) => (
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
 