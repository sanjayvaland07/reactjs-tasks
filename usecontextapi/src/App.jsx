import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/usercontextprovider'
import Login from './login'
import Profile from './profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
