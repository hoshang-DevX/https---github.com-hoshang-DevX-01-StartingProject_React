


import ProjectSidebar from './ProjectSidebar'
import WhenNoProjectSelected from './WhenNoProjectSelected'


import React from 'react'

function Button({children, ...props }) {
  return (
    <button className="bg-stone-400 hover:bg-stone-500 text-stone-600 hover:text-stone-900 rounded-md px-2 py-1 ml-5 mt-16 " {...props}>
    {children}
  </button>
  )
}

export default Button