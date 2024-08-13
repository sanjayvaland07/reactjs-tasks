import { useContext, useRef, useState } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../contextApi/TaskContext";

function ToDoList() {
    const date = new Date();
    const input = useRef();
    const { tasks, setTasks } = useContext(TaskContext);
    console.log(tasks);
    function handleMode(e){
        console.log(e);
        if(e.target.innerText == "Light Mode"){
            e.target.innerText = "Dark Mode";
            document.documentElement.classList.add("dark");
        }else{
            e.target.innerText = "Light Mode";
            document.documentElement.classList.remove("dark");

        }
    }
    return (
        <div className="main-div w-full h-[100vh] bg-gradient-to-r from-zinc-600 to-cyan-950 flex justify-center items-center overflow-hidden relative
        dark:bg-gradient-to-r dark:from-pink-200 dark:to-sky-300">
            <button className="absolute top-8 right-8 bg-zinc-200 p-2 rounded max-md:top-4 max-md:right-4 max-md:text-xs" onClick={handleMode}>Light Mode</button>

            <div className="contaienr w-1/2 h-4/5 p-4 max-md:w-[100%] max-md:h-[100vh] max-md:mt-[150px]">
                <h1 className="text-white text-8xl text-center max-md:text-6xl dark:text-black">
                    Just do it.
                </h1>
                <div className="input-box w-full h-12 flex my-8 border-2 rounded-xl dark:border-black">
                    <input
                        type="text"
                        className="w-full bg-gray-950 text-gray-200 px-4 rounded-l-xl border-r-2
                        dark:bg-gray-100 dark:placeholder:text-gray-800 dark:text-black dark:border-black"
                        placeholder="Add a task"
                        ref={input}
                    />
                    <button
                        className="bg-slate-200 px-4 w-28 rounded-r-xl max-md:text-xs dark:bg-green-500"
                        onClick={() => {
                            console.log(input.current.value);
                            setTasks([...tasks, input.current.value]);
                        }}
                    >
                        I got this!
                    </button>
                </div>
                <p className="text-white text-center dark:text-black">{date.toLocaleString()}</p>
                <div className="overflow-scroll h-full">
                    {tasks.map((tsk, index) => {
                        return <TaskCard key={index} task={{ text: tsk, id: index }} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default ToDoList;
