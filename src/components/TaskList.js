import React from 'react'
import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { FaTrash} from "react-icons/fa";
import {IoMdDoneAll} from "react-icons/io";
function TaskList({task,index,onComplete,remove}) {
   
    return (
 <div className="task" >
        <div style={{textDecoration:task.status?'line-through':''}}>
             {task.title}
             </div>
             <div>
      <IoMdDoneAll onClick={()=>onComplete(index)}/>
      </div>
        <div>
        <FaTrash onClick={()=>remove(index)}/>
        </div>
</div>
          
    )
}

export default TaskList
