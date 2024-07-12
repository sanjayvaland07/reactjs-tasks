import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Products from './products.jsx'
// import Cart from './cart.jsx'
import './index.css'
// import App from './test.jsx'
// import Mytest from './mytest'
import MyComponent from './mycomponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent/>
  </React.StrictMode>,
)
