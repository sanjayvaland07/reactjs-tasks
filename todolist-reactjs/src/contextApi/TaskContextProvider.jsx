
import { useState } from "react"
import TaskContext from "./TaskContext"

function TaskContextProvider({children}){
    const [tasks,setTasks] = useState([])
    return(
        <TaskContext.Provider value={{tasks,setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider