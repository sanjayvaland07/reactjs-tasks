import { useReducer, useState } from 'react'
import './App.css'

const initialstate = 0;

function reducer (state,action){
  console.log(state,action)
  switch(action.type)
  {
    case "increament":
      state = state + 1;
      break;  
      
      case "decreament":
        state = state - 1;
        break;
  }
  return state;
}
function App() {
  
  const [state,dispatch] = useReducer(initialstate,reducer)
  return (
    <>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"increament"})}>Increament</button>
      <button onClick={()=>dispatch({type : "decreament"})}>Decreament</button>
    </>
  )
}

export default App
