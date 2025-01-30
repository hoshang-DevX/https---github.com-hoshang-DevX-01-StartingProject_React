// // This data for input can be of textarea as well as input
// // so, we need to pass props yh batane ke liye ki textarea hai yn input

// // useRef will not work with <Input> component as it is not an actual DOM element rather is defined by me
// // therefore, we'll use forwardRef() and wrapp this component with forwardRef()



import React, { forwardRef } from 'react'


const Input = forwardRef(function Input({label,textArea, ...props } , ref) {
    
    const classes = ' text-stone-800 bg-stone-200 p-1 w-full rounded-sm border-stone-300 focus:border-stone-700 focus:outline-none border-b-2 '

  return (
    <div className="flex-col gap-1 my-4" >
           <label className='text-sm font-bold uppercase text-stone-700' >{label}</label>
           { textArea ? <textarea className={classes} ref = {ref} /> : <input className={classes} ref = {ref}  /> }
           
    </div>
    
  )
}
)

export default Input