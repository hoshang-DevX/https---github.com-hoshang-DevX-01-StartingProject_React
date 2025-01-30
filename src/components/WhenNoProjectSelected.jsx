// import React from "react";
// import Button from "./Button";

// import noProjectImage from "../assets/no-projects.png";
// // whehnno project is selected than koi aur fallback content hona chahiye page pe
// // ie) Title, Description, DuaDate ni hongi jab

// function WhenNoProjectSelected({onStartAddProject}) {
//   return (
//     <div className="mt-24 text-center w-2/3">
//       <img
//         src={noProjectImage}
//         alt="An Empty Tasks List"
//         className="w-16 h-16 object-contain mx-auto"
//       />
//       <h2 className="text-xl font-bold text-stone-500 my-4 ">
//         No Project Selected
//       </h2>
//       <p className="text-stone-400 mb-4" > Select a Project or get started with a new Project </p>
//       <p className="mt-8">
//         <Button onClick = {onStartAddProject} > Create New Project </Button>
//       </p>
//     </div>
//   );
// }

// export default WhenNoProjectSelected;





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
