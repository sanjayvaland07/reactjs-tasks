
import './App.css'
import CmpA from './cmpA'
import { createContext } from 'react'
const ContextApi = createContext();
function App() {
  
  return (
    <>
     <h1>project test</h1>
     <ContextApi.Provider value={"sanjay valand"}>
     <CmpA/>
     </ContextApi.Provider>
    </>
  )
}

export default App;
export {ContextApi};
