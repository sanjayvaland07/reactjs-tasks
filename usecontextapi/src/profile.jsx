import { useContext } from "react";
import UserContext from "./context/usercontext";
function Profile(){
    const {user} = useContext(UserContext)
    if(!user)
    {
        return (
            <h1 className="red">Please login first</h1>
        )
    }
    return (
        <div>
            <h1>your name is {user.fname}</h1>
            <h1>your password is {user.passwd}</h1>
        </div>
    )
}

export default Profile;