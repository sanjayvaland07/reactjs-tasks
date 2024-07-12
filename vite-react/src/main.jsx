import { render } from 'preact'
import { App } from './app.jsx'
import { Mydiv } from './mydiv.jsx'
import './index.css'

function Creatediv()
{
    return (
        <div id='container'>
            <h2>this is a container</h2>
            <button id='btn' onClick={increament}>Clicked</button>
        </div>
    )
}



// const objectTree = React.createElement(
//     'a',
//     {
//         herf : "https://sanjayvaland-portfolio.netlify.app/",
//         target : "_blank"
//     },
//     "click here to go with react create element"

// )
render(
    <>
        <App/>
        <Mydiv/>
        <Creatediv/>
    </>
    
    
    
    
    
    ,document.getElementById("app")
)
