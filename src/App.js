import './App.css';
import logo from '../src/images/logo.jpg'
import Button from '../src/components/Button'
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    // The way this is working doesnt let you do consecutive operations. Fixing it requires handling the case where an operation just happend
    let operators = '+*-/.'
    let lastChar = input.charAt( input.length -1) 
    if(operators.includes(lastChar) == true && (input != '') && (val.includes(operators) ==true) ){
      alert('Please give a valid input')
    }
    else if(input == ''){
      setInput(input + val);
    }
    else{
      setInput(input + val);
    }
     
  };

  const calcResult = () =>{
    if(input){
      setInput(evaluate(input))
    }
  };



  return (
    <div className="App">
      <div className='logo-container'>
        <img
          src={ logo }
          className='logo'
          alt='meme logo' />
      </div>

      <div className='calculator-container'>
        <Screen input = { input } />

        <div className='calculator-row'>
          <Button clickManager = {addInput} >8</Button>
          <Button clickManager = {addInput} >7</Button>
          <Button clickManager = {addInput} >9</Button>
          <Button clickManager = {addInput} >*</Button>
        </div>
        
        <div className='calculator-row'>
          <Button clickManager = {addInput} >4</Button>
          <Button clickManager = {addInput} >5</Button>
          <Button clickManager = {addInput} >6</Button>
          <Button clickManager = {addInput} >-</Button>
        </div>
        
        <div className='calculator-row'>
          <Button clickManager = {addInput} >1</Button>
          <Button clickManager = {addInput} >2</Button>
          <Button clickManager = {addInput} >3</Button>
          <Button clickManager = {addInput} >+</Button>
        </div>
        
        <div className='calculator-row'>
          <Button clickManager = {calcResult} >=</Button>
          <Button clickManager = {addInput} >0</Button>
          <Button clickManager = {addInput} >.</Button>
          <Button clickManager = {addInput} >/</Button>
        </div>
        
        <div className='calculator-row'>
          <ClearButton clearManager = {() => setInput('') }>Clear</ClearButton>
        </div>
        

      </div>
      
    </div>
  );
}

export default App;
