import ProjectSidebar from "./components/ProjectSidebar";
import WhenNoProjectSelected from "./components/WhenNoProjectSelected";
import AddNewProject from "./components/AddNewProject";

import React from "react";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
// import { preconnect } from 'react-dom'

function App() {
  const [ProjectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = ProjectsState.projects.find(
    (project) => project.id === ProjectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={ProjectsState.tasks}
    />
  );

  if (ProjectsState.selectedProjectId === null) {
    content = (
      <AddNewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (ProjectsState.selectedProjectId === undefined) {
    content = (
      <WhenNoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }
  //  else if(  SelectedProject.id  )

  return (
    <main className="flex">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={ProjectsState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={ProjectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
