import { useState } from 'react';
import './App.css'
function App() {
let [counter , setCounter]  = useState(0)
//  let counter =5;
 const addValue =() => {
  // console.log("clicked",counter)
  setCounter(counter +1)
 }
 const removeValue =() =>{
  setCounter(counter-1);
 }
  return (
    <>
    <h1>Hello there</h1>
    <h2>Counter value :{counter}</h2>
    <br/>
    <button onClick={addValue}>Increase :{counter}</button>
    <button onClick={removeValue}>Decrease :{counter}</button>
    <p>footer:{counter}</p>
   </>
  )
}

export default App
