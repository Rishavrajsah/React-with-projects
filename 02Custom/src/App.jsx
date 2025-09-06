import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 6;
  let [counter,setCounter]=useState(5);
  const addvalue = ()=>{
    setCounter(++counter)
    // return;
  }

  const removeValue = ()=>{
    if (counter==0) {
      return
    }
    setCounter(--counter)
    // return;
  }
  // function addvalue() {
  //     counter++
  //     return;
  // }
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addvalue}
      >Add value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
