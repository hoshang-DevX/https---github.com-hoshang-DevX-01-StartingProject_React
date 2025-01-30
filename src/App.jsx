


import ProjectSidebar from './components/ProjectSidebar'
import WhenNoProjectSelected from './components/WhenNoProjectSelected'
import AddNewProject from './components/AddNewProject'


import React from 'react'
import { useState } from 'react'
// import { preconnect } from 'react-dom'

function App() {
  
   const [ProjectsState,setProjectsState] = useState({
      selectedProjectId : undefined,
      projects : []
   })

   function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId : null
      }
    })
   }

   function handleAddProject(projectData){
    const projectId = Math.random()
    setProjectsState( prevState => {
      const newProject = {
        ...projectData,
        id : projectId
      }

      return{
        ...prevState,
        selectedProjectId : undefined,
        projects : [...prevState.projects, newProject]
      }
    })
   }

   console.log(ProjectsState);
   

   let content ;
   if(ProjectsState.selectedProjectId === null){
      content = <AddNewProject onAdd={handleAddProject} />            
   }
   else if(ProjectsState.selectedProjectId === undefined ){
    content = <WhenNoProjectSelected onStartAddProject={handleStartAddProject} />
   }
   

  return (
    <main className='flex'>
    <ProjectSidebar onStartAddProject = {handleStartAddProject} projects = {ProjectsState.projects}  /> 
      {content}
      
    </main>
  )
}

export default App