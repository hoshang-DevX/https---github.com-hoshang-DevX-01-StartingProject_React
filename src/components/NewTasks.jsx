import React, { useState } from 'react'

function NewTasks({onAdd}) {

    const[enteredTask,setEnteredTask] = useState('')

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){     // when add button is clicked after adding a new task
        setEnteredTask('')      // 1= input field khali 2= iss enteredTask ko app,jsx mai bhej
        onAdd(enteredTask)
    }

  return (
    <div className='flex items-center gap-4' >
        <input type="text" className='bg-stone-50 w-64 px-2 py-1 ml-2 my-2 rounded-md '
            onChange={handleChange}
            value={enteredTask}
        />
        <button className='text-stone-700 hover:text-stone-950' onClick={handleClick} >Add Task</button>
    </div>
  )
}

export default NewTasks