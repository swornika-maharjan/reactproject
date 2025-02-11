import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput("0");
    setResult("0");
  };

  const backspace = () => {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Evaluates the expression
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="button-grid">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
            className="calculator-button"
          >
            {item}
          </button>
        ))}
        <button onClick={backspace} className="backspace-button">
          ⌫
        </button>
        <button onClick={clearInput} className="clear-button">
          Clear
        </button>
      </div>
      <div className="result-display">Result: {result}</div>
    </div>
  );
};

export default Calculator;
