import "./App.css";
import React, { useState } from 'react';


function App() {


  const [result, setResult] = useState('0')
  const [operation, setOperation] = useState('')
  const [numArray, setNumArray] = useState([])


  function changeResult(num) {
    //remove trialing zero 
    console.log(result, num)
    if (result == '0'){
      console.log('hit')
      setResult(num)
    }
    else {
      setResult(result + num)
    }

  }

  function changeExpression(){

  }



  return (
    <div className="App">
      <div className="space"></div>

      <div className="center">
        <div className="top">{result}</div>
        <div className="row">
          <button className="button"  onClick={() => setResult('0')}>AC</button>
          <button className="button">+/-</button>
          <button className="button">%</button>
          <button className="button last_button">
            <span>&#247;</span>
          </button>
        </div>

        <div className="row">
          <button className="button" onClick={() => changeResult('7')}>7</button>
          <button className="button"  onClick={() => changeResult('8')}>8</button>
          <button className="button"  onClick={() => changeResult('9')}>9</button>
          <button className="button last_button"  onClick={() => setResult(result + 7)}>X</button>
        </div>

        <div className="row">
          <button className="button"  onClick={() => changeResult('4')}>4</button>
          <button className="button"  onClick={() => changeResult('5')}>5</button>
          <button className="button"  onClick={() => changeResult('6')}>6</button>
          <button className="button  last_button"  onClick={() => setResult(result + 7)}>-</button>
        </div>

        <div className="row">
          <button className="button"  onClick={() => changeResult('1')}>1</button>
          <button className="button"  onClick={() => changeResult('2')}>2</button>
          <button className="button"  onClick={() => changeResult('3')}>3</button>
          <button className="button last_button"  onClick={() => changeResult('0')}>+</button>
        </div>

        <div className="row">
          <button className="button big_button"  onClick={() => changeResult('0')}>0</button>
          <button className="button"  onClick={() => changeResult('.')}>.</button>
          <button className="button  last_button"  onClick={() => changeResult('0')}>=</button>
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
}

export default App;
