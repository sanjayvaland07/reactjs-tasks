import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  

  return (
    <>
      <nav>
        <img className='logo' src={logo} alt="icon logo" />
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">About us</a></li>
        </ul>
      </nav>
      <div></div>
    </>
  )
}

export default App
