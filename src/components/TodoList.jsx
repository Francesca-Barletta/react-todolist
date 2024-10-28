import React, {useState, useEffect} from 'react'
import { FaTrash } from "react-icons/fa6";
import data from '../data'
import TodoItem from './TodoItem'

const TodoList = () => {

  const [tasks, setTasks] = useState(data)
  const [todo, setTodo] = useState('');

  function addTask(todo) {
   const newTask = {
   id: Date.now(),
   todo,
   done: false
   };
   setTasks([...tasks, newTask]);
   setTodo('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }

   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, done: !task.done};
    } else {
    return task;
    } 
    }));
  }

 const handleKeyUp = (e) => {
  if(e.key === "Enter"){
    addTask(todo)
  }
 }

 useEffect(() => {

  window.addEventListener("keyup", handleKeyUp);

  return () => window.removeEventListener("keyup", handleKeyUp);
}, [handleKeyUp]);



  return (
    <div>
      <div className="md:container md:mx-auto px-4">
        <div className="flex justify-between  w-full flex-wrap items-center py-8">

          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-8/12 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 xl:text-xl drop-shadow-xl me-1" 
            placeholder="Inserisci un nuovo task" 
            type="text" 
            name="todo"
            value={todo}
            onChange={e => setTodo(e.target.value)}/>
            <button className="bg-violet-800 text-white font-bold ring-2 hover:ring-4 ring-white p-2 h-full size-40 rounded me-2" onClick={() => addTask(todo)}>Inserisci</button>
            <button className="bg-amber-500 text-white font-bold ring-2 hover:ring-4 ring-white p-2 h-full size-40 rounded me-2" onClick={() => setTasks(data)}>Ricarica tutto</button>
            <button className="flex justify-center items-center bg-rose-600 text-white font-bold ring-2 hover:ring-4 ring-white p-2 h-full size-40 rounded" onClick={() => setTasks([])}> <FaTrash /> Elimina tutto</button>
        </div>

      </div>
      {tasks.length > 0 ? (
          <div className="md:container md:mx-auto px-4">
          {tasks.map(task => {
            return <TodoItem key={task.id} task={task} tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>
          })}
        </div>
      ):(
        <div className="md:container md:mx-auto px-4">
          <p className="font-mono text-4xl italic w-4/5 font-semibold">Inserisci un nuovo task!</p>
        </div>
      )}
        
    </div>
  )
}

export default TodoList