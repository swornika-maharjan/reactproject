import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoApp from "./projects/Todo";
import Calculator from "./projects/calculator";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">Todo App</Link></li>
          <li><Link to="/calculator">Calculator</Link></li> 
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to My React Projects</h1>} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
};

export default App;
