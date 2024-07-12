import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  
  const increament = ()=> {
    
    if(count<20)
      {
        count = count + 1;
        setCount(count);
      }
  }

  const decreament = () =>{
    if(count>0)
      {
        count = count - 1;
        setCount(count);
      }
  }

  return (
    <>
      <h1>React vite counter app</h1>
      <h2>Counter : {count}</h2>
      <button onClick={increament}>Increament value</button>
      <button onClick={decreament}>Decreament value</button>
    </>
  )
}

export default App
