import "./App.css";
import React, { useEffect, useState } from 'react';


function App() {


  const [result, setResult] = useState('0')
  const [previousNum, setPreviousNum] = useState()
  const [operation, setOperation] = useState('')
  const [clearFlag, setClearFlag] = useState(false)




  function changeResult(num) {
    //remove trialing zero 
    if (result == '0'){
      setResult(num)
    }
    else if (clearFlag == true) {
       setResult(result)
       setClearFlag(false)
    }
    else {
      setResult(result + num)
    }

  }

  function clear() {
    setResult('0')
    setOperation('')
  }

  function changeOperation(op){
    if (operation == ''){
      setPreviousNum(result)
      console.log('we addin')
      setClearFlag(true)
      setOperation(op)
    } else {
      setOperation(op)
    }

  }

  function calculate() {
    console.log('we calcin')
    if (operation == '+'){
      var firstNum = previousNum
      var secondNum = result
      var answer = parseInt(firstNum) + parseInt(secondNum)
      console.log(firstNum, " ", operation, " ", secondNum)
      setResult(answer)
      setOperation('')
    }

  }

  useEffect(() => {
    console.log('operation changed to ', operation)
  }, [operation]);

  useEffect(() => {
    console.log('result changed', result)
  }, [result]);

  useEffect(() => {
    console.log('prev num changed', previousNum)
  }, [previousNum]);


  //break ova
  return (
    <div className="App">
      <div className="space"></div>

      <div className="center">
        <div className="top">{result}</div>
        <div className="row">
          <button className="button"  onClick={() => clear()}>AC</button>
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
          <button className="button last_button"  onClick={() => changeOperation('*')}>X</button>
        </div>

        <div className="row">
          <button className="button"  onClick={() => changeResult('4')}>4</button>
          <button className="button"  onClick={() => changeResult('5')}>5</button>
          <button className="button"  onClick={() => changeResult('6')}>6</button>
          <button className="button  last_button"  onClick={() => changeOperation('-')}>-</button>
        </div>

        <div className="row">
          <button className="button"  onClick={() => changeResult('1')}>1</button>
          <button className="button"  onClick={() => changeResult('2')}>2</button>
          <button className="button"  onClick={() => changeResult('3')}>3</button>
          <button className="button last_button"  onClick={() => changeOperation('+')}>+</button>
        </div>

        <div className="row">
          <button className="button big_button"  onClick={() => changeResult('0')}>0</button>
          <button className="button"  onClick={() => changeResult('.')}>.</button>
          <button className="button  last_button"  onClick={() => calculate()}>=</button>
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
}

export default App;
