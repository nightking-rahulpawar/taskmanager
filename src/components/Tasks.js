import React, { useState } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header';
function Task () {
    const [tasks ,setTask]=useState([
        {
            title:'Learn HTML CSS First',
            status:false      
        },
            {
            title:'Then Learn javaScript ',
            status:false
        },
        {
            title:'After Jump To React',
            status:false   }
    ]);
    const addTask= title=>{
        const newTask = [...tasks,{title}]
        setTask(newTask);
    }
    const onComplete=(index)=>{
        const newTasks=[...tasks];
        newTasks[index].status=true
        setTask(newTasks)

    }
    const remove=(index)=>{
        const newTasks=[...tasks];
        newTasks.splice(index,1)
        setTask(newTasks)
    }
    return (
      <div className="container">
        
        <div className="task-list">
                  <Header/>
            {tasks.map((task,index)=>(
                  <TaskList index={index} 
                  task={task} key={index} 
                  onComplete={onComplete}
                  remove={remove}/>)    
            )}
             <TaskForm addTask={addTask} />
        </div>
        </div>
    )
}

export default  Task
