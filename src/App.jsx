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
    </div>
  );
}

export default App;
