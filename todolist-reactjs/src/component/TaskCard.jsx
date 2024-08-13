import { useContext, useRef } from "react";
import TaskContext from "../contextApi/TaskContext";

function TaskCard({task}){
    const text = useRef();
    const {tasks,setTasks} = useContext(TaskContext);
    function handleCheck(){
        console.log(text);
        text.current.classList.toggle("line-through");
    }
    function handleRemove(id){
        console.log("panding");
        setTasks(
            tasks.filter((task,index)=>{
                return id!=index
            })
        )
        
    }
    return(
        <div key={task.id + "-1"} className="lists-container w-full flex justify-center py-4">
              <div className="task w-4/5 bg-gray-600 rounded-full text-white px-4 min-h-[60px] flex items-center max-md:w-full shadow-lg shadow-black
              dark:bg-gray-100 dark:text-black dark:shadow-black">
                <p className='w-4/5 h-auto text-2xl max-md:text-xl overflow-scroll' ref={text}>{task.text}</p>
                <button className='bg-gray-100 text-black mx-2 rounded-[100%] w-14 h-12 hover:bg-green-600 dark:hover:bg-green-600 dark:bg-green-300 dark:text-black' 
                onClick={handleCheck}><i className="fa-solid fa-check"></i></button>
                <button className='bg-gray-100 text-black rounded-[100%] w-14 h-12 hover:bg-red-600 dark:hover:bg-red-600 dark:bg-red-300 dark:text-black' 
                onClick={()=>handleRemove(task.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </div>
    )
}

export default TaskCard;