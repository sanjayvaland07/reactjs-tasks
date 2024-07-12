import { useState } from "react";
import UserContext from "./usercontext";
function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

//i have mistake with [] in usestate

//usestate is always return array so you have to use [] 

//{} this bracket is use to de structuring object

//[] this bracket is use to de structuring array

//must remember this