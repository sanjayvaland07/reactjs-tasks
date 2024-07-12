
import { ContextApi } from "./App";
function CmpC(){
    return(
        
        <div>
            <h1>this is a component C</h1>
            <ContextApi.Consumer>
                {(fname)=>{
                    return (
                        <h1>your name is  = {fname}</h1>
                    )
                }}
            </ContextApi.Consumer>
        </div>
    )
}

export default CmpC;