import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumeric, setIsNumeric] = useState(false)
  const [isChar, setChar] = useState(false)
  const [passwd,setPasswd] = useState("")
  let inputbox = useRef(null)
  function PasswordGenerate(length)
  {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(isNumeric)
      {
        str += "1234567890";
      }

    if(isChar)
      {
        str += "!@#$%&*";
      }

    for(let i=0;i<length;i++)
      {
        let charIndex = Math.floor(Math.random() * str.length) + 1
        pass += str.charAt(charIndex);
      }

      console.log(pass);
      setPasswd(pass);
  }

  function copyText()
  {
    const selected = inputbox.current.value;
    console.log(selected);
    inputbox.current.select();
    document.execCommand("copy");
    alert(selected+ " is copy to your clipboard");

  }

  useEffect(()=>{
    PasswordGenerate(length)
  }
    ,[length,isNumeric,isChar]
  )
    
  return (
    <>
     <div className="container">
      <h1>Password Generator</h1>
        <div className="input-box">
          <input ref={inputbox} type="text" name="password" id="" value={passwd} readOnly/>
          <button onClick={copyText}>Copy</button>
        </div>
        <div className="footer">
          <div>
          <input type="range" name="" id="range" max={32} min={1} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <p>Length : {length}</p>
          </div>
          <div>
          <input type="checkbox" name="" id="" onChange={
            ()=>{
              setIsNumeric(!isNumeric)
            }
          }/>
          <p>Numbers</p>
          </div>
          <div>
          <input type="checkbox" name="" id="" onChange={
            ()=>{
              setChar(!isChar);
            }
          } />
          <p>Special characters</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
