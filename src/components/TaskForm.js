import React, { useState } from 'react'
import Task from './Tasks'
import TaskList from './TaskList'
function TaskForm({addTask}) {
    const [value, setValue]=useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue(" ");
      };

    return (
         <form onSubmit={handleSubmit}>
    <input type="text" className="input" placeholder="addTaskForYourDay...."
    value={value} onChange={e=>
      setValue(e.target.value)}></input>
            </form>
      
    )
}

export default TaskForm
