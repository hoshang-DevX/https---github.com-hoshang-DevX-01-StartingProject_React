

import React from "react";
import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button";

function WhenNoProjectSelected( {onStartAddProject} ) {
  return (
    <div className="text-center w-2/3 mt-24">
      <img
        src={noProjectsImage}
        alt="No Projects Added "
        className="object-contain w-20 h-20 mx-auto "
      />
      <h1 className="font-bold uppercase text-stone-500 mt-8 mb-5 my-4 text-xl">
        No Projects Added
      </h1>
      <p className="text-stone-600 font-semibold my-4">
        Select a project or get started with a new Project now{" "}
      </p>
      <p className="mt-8 mx-auto">
        <Button onClick = {onStartAddProject} > Create Project</Button>
      </p>
    </div>
  );
}

export default WhenNoProjectSelected;
