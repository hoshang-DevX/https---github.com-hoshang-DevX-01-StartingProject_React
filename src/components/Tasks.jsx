import React from "react";
import NewTasks from "./NewTasks";
function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="bg-stone-200">
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This Project doesnot have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {" "}
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick = {() => onDelete(task.id) } >
                Clear Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
