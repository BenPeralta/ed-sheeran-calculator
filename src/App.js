import { useState, useRef } from "react";
import "./App.css";

import plusImage from "./components/plus.png";
import minusImage from "./components/subtract.png";
import divideImage from "./components/divide.png";
import multiplyImage from "./components/multiply.png";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState(null);

  function performCalculation(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (!isNaN(inputValue) && selectedOperation) {
      switch (selectedOperation) {
        case "add":
          setResult((prevResult) => prevResult + inputValue);
          break;
        case "subtract":
          setResult((prevResult) => prevResult - inputValue);
          break;
        case "multiply":
          setResult((prevResult) => prevResult * inputValue);
          break;
        case "divide":
          setResult((prevResult) => prevResult / inputValue);
          break;
        default:
          break;
      }
    }
    inputRef.current.value = "";
  }

  function handleOperationSelection(operation) {
    setSelectedOperation(operation);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setSelectedOperation(null);
  }

  return (
    <div className="App">
      <h1>Ed Sheerans Calculator</h1>
      <p ref={resultRef}>{result}</p>
      <form onSubmit={performCalculation}>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              performCalculation(e);
            }
          }}
        />
        <div className="button-container">
          <button
            onClick={() => handleOperationSelection("add")}
            className={selectedOperation === "add" ? "selected" : ""}
          >
            <img src={plusImage} alt="Plus" />
          </button>
          <button
            onClick={() => handleOperationSelection("subtract")}
            className={selectedOperation === "subtract" ? "selected" : ""}
          >
            <img src={minusImage} alt="Minus" />
          </button>
          <button
            onClick={() => handleOperationSelection("divide")}
            className={selectedOperation === "divide" ? "selected" : ""}
          >
            <img src={divideImage} alt="Divide" />
          </button>
          <button
            onClick={() => handleOperationSelection("multiply")}
            className={selectedOperation === "multiply" ? "selected" : ""}
          >
            <img src={multiplyImage} alt="Multiply" />
          </button>
        </div>
        <div className="button-container">
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
