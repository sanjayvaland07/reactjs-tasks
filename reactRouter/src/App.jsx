
import './App.css'
import Navbar from './component/navbar'
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './component/login'

const router = createBrowserRouter([
  {
    path:"/",
    element : <> <Navbar/> <Home/> </>
  },
  {
    path:"/about",
    element : <> <Navbar/> <About/> </>
  },
  {
    path:"/contact",
    element : <> <Navbar/> <Contact/> </>
  },
  {
    path:"/login",
    element : <> <Navbar/> <Login/> </>
  }
])
function App() {
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
