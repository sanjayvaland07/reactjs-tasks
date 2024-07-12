import UserContext from "./context/usercontext"
import { useContext, useState } from "react"
function Login()
{
    const {setUser} = useContext(UserContext);
    const [fname,setFname] = useState(null);
    const [passwd,setPasswd] = useState(null);
    function handleLogin(){
        alert(fname)
        setUser({fname,passwd})
    }
    return (
        <div>
            <input type="text" placeholder="username" onChange={(e)=>setFname(e.target.value)}/>
            <br />
            <input type="password" placeholder="password" onChange={(e)=>setPasswd(e.target.value)}/>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;