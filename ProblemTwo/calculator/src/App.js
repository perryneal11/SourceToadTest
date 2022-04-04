import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [previousNum, setPreviousNum] = useState(0);
  const [operation, setOperation] = useState("");
  const [clearFlag, setClearFlag] = useState(false);

  function changeResult(num) {
    if (result == "0") {
      setResult(num);
    } else if (clearFlag == true) {
      setResult(num);
      setClearFlag(false);
    } else if (num == ".") {
      setResult(result + ".");
    } else {
      setResult(parseFloat(result.toString() + num.toString()));
    }
  }

  function clear() {
    setResult(0);
    setOperation("");
  }

  function invert() {
    if (result < 0) {
      setResult(Math.abs(result));
    } else if (result > 0) {
      setResult(-result);
    }
  }

  function percentify() {
    var newResult = result / 100;
    setResult(newResult);
  }

  function changeOperation(op) {
    if (operation == "") {
      setPreviousNum(result);
      setClearFlag(true);
      setOperation(op);
    } else {
      setOperation(op);
    }
  }

  function calculate() {
    var firstNum = parseFloat(previousNum);
    var secondNum = parseFloat(result);
    if (operation == "+") {
      var answer = parseFloat(firstNum) + parseFloat(secondNum);
    } else if (operation == "-") {
      var answer = parseFloat(firstNum) - parseFloat(secondNum);
    } else if (operation == "/") {
      var answer = parseFloat(firstNum) / parseFloat(secondNum);
    } else if (operation == "*") {
      var answer = parseFloat(firstNum) * parseFloat(secondNum);
    }

    if (answer) {
      setResult(answer);
      setResult(answer);
      setOperation("");
      setClearFlag(true);
    } else if (answer == 0) {
      setResult(0);
      return;
    }
  }

  return (
    <div className="App">
      <div className="space"></div>

      <div className="center">
        <div className="top">{result}</div>
        <div className="row">
          <button className="button" onClick={() => clear()}>
            AC
          </button>
          <button className="button" onClick={() => invert()}>
            +/-
          </button>
          <button className="button" onClick={() => percentify()}>
            %
          </button>
          <button
            className="button last_button"
            onClick={() => changeOperation("/")}
          >
            <span>&#247;</span>
          </button>
        </div>

        <div className="row">
          <button className="button" onClick={() => changeResult(7)}>
            7
          </button>
          <button className="button" onClick={() => changeResult(8)}>
            8
          </button>
          <button className="button" onClick={() => changeResult(9)}>
            9
          </button>
          <button
            className="button last_button"
            onClick={() => changeOperation("*")}
          >
            x
          </button>
        </div>

        <div className="row">
          <button className="button" onClick={() => changeResult(4)}>
            4
          </button>
          <button className="button" onClick={() => changeResult(5)}>
            5
          </button>
          <button className="button" onClick={() => changeResult(6)}>
            6
          </button>
          <button
            className="button  last_button"
            onClick={() => changeOperation("-")}
          >
            -
          </button>
        </div>

        <div className="row">
          <button className="button" onClick={() => changeResult(1)}>
            1
          </button>
          <button className="button" onClick={() => changeResult(2)}>
            2
          </button>
          <button className="button" onClick={() => changeResult(3)}>
            3
          </button>
          <button
            className="button last_button"
            onClick={() => changeOperation("+")}
          >
            +
          </button>
        </div>

        <div className="row">
          <button
            className="button big_button"
            onClick={() => changeResult("0")}
          >
            0
          </button>
          <button className="button" onClick={() => changeResult(".")}>
            .
          </button>
          <button className="button  last_button" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
}

export default App;
