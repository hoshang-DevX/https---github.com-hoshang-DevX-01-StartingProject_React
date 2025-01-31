

import { list } from "postcss";
import Button from "./Button";
import React from "react";

function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="h-screen w-1/3 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl px-8 py-16">
      <h4 className="text-stone-200 font-bold uppercase  md:text-xl">
        Your Projects
      </h4>
      <Button onClick={onStartAddProject}> + Add Projects</Button>

      <ul className="text-stone-100 px-4 mt-10">
        {" "}
        {projects.map((project) => {
          let cssClasses = "w-full gap-2 rounded-md hover:text-stone-200 bg-stone-400 hover:bg-stone-500 px-2 py-1 text-left my-1 "

          if(project.id === selectedProjectId){
            cssClasses += ' bg-stone-800 text-stone-50'
          } else{
            cssClasses += ' text-stone-300'
          }
           return (
            <li key={project.id}>
           {" "}
           <button className={cssClasses} onClick = {() => onSelectProject(project.id) } > {project.title}</button>{" "}
         </li>
         )
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
