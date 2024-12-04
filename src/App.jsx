<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TestPage from "./components/TestPage/TestPage";
function App() {
  return (
    <div>

      <Routes>
        <Route
          path="/test/aptitude"
          element={<TestPage selectedCategory="Aptitude" />}
        />
        <Route
          path="/test/sql"
          element={<TestPage selectedCategory="SQL" />}
        />
      </Routes>
=======
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
     
>>>>>>> 0f1ffe53e9b997b83ccd3abb58a9c76de15c12a1
    </div>
  );
}

export default App;
