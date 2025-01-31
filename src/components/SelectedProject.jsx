import React from 'react'
import Tasks from './Tasks'

function SelectedProject({  project , onDelete , onAddTask, onDeleteTask, tasks }) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US' ,{ 
        year : 'numeric',
        month : 'short',
        day : 'numeric'
})

  return (
    <div className='w-[35rem] mt-16 ml-2 ' >
        <header className='pb-4 mb-4 border-b-2 border-stone-300' >
            <div className='flex pb-8 items-center justify-between'>
            <h1 className='text-stone-600 text-3xl font-bold mb-2' >{project.title}</h1>
            <button className="bg-stone-400 hover:bg-stone-500 text-stone-700 hover:text-stone-950 rounded-md px-2 " onClick={onDelete} >DELETE</button>
            </div>
            <p className='text-stone-500 mb-4' > {formattedDate}</p>
            <p className='text-stone-650 whitespace-pre-wrap ' >{project.description}</p>
        </header>
        <Tasks onAdd = {onAddTask} onDelete = {onDeleteTask} tasks = {tasks} />
    </div>
  )
}

export default SelectedProject