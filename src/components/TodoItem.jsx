import React from 'react'

import { FaCircle } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import { FaDeleteLeft } from "react-icons/fa6";

const TodoItem = ({tasks, task, deleteTask, toggleCompleted}) => {

    function handleChange() {
        toggleCompleted(task.id)
    }

  return (
    
         <div className="my-6 flex flex-wrap justify-between gap-2 items-center bg-orange-50 shadow-2xl shadow-indigo-700/70 rounded-xl ps-2 pe-4 ">
                  <div className=" flex-wrap gap-4 flex justify-start w-9/12 px-2 py-4 items-baseline">
                      
                            <button className="text-rose-600 text-3xl font-bold hover:text-rose-400" onClick={handleChange}>{task.done === true? <HiCheck /> : <FaCircle />}</button>
                    
                        <div className="w-3/5">
                          <p className="font-mono text-3xl italic w-4/5 font-semibold">{task.todo}</p>
                        </div>
                      
                  </div>
                    <button className="text-rose-600 font-bold text-3xl  hover:text-rose-400" onClick={() => deleteTask(task.id) }><FaDeleteLeft/></button>
         </div>
   

  )

}

export default TodoItem