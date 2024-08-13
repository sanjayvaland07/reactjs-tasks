import './App.css'
import ToDoList from './component/ToDoList';
import TaskContextProvider from './contextApi/TaskContextProvider';

function App() {

  return (
    <>
      <TaskContextProvider>
      <ToDoList/>
      </TaskContextProvider>
    </>
  )
}

export default App
