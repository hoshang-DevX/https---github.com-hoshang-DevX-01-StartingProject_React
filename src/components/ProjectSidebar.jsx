

import { list } from "postcss";
import Button from "./Button";
import React from "react";

function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="h-screen w-1/3 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl px-8 py-16">
      <h4 className="text-stone-200 font-bold uppercase  md:text-xl">
        Your Projects
      </h4>
      <Button onClick={onStartAddProject}> + Add Projects</Button>

      <ul className="text-stone-100 px-4 mt-10">
        {" "}
        {projects.map((project) => (
          <li key={project.id}>
            {" "}
            <button className="w-full gap-2 rounded-md text-stone-200 hover:text-stone-100 bg-stone-400 hover:bg-stone-500 px-2 py-1 text-left my-1 " >{project.title}</button>{" "}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
