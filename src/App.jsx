import { useState, useCallback } from "react";
import './App.css'
import TestPage from './components/TestPage/TestPage'

function App() {
  const [selectedCategory] = useState("Aptitude");
  const [usedQuestions, setUsedQuestions] = useState(new Set()); 
  const updateUsedQuestions = useCallback((newUsedQuestions) => {
    setUsedQuestions(newUsedQuestions);
  }, []); 
  return (
    <div>
    
        <TestPage
          selectedCategory={selectedCategory}
          usedQuestions={usedQuestions}
          updateUsedQuestions={updateUsedQuestions}
        />
     
    </div>
  )
}

export default App
