

import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


function AddNewProject( {onAdd , onCancel} ) {   // onAdd prop ko expect kiya jaara hai in App.jsx

  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave(){
    const enteredTitle = title.current.value 
    const enteredDescription = description.current.value 
    const enteredDueDate = dueDate.current.value

        // validating data
    if(enteredTitle.trim() === '' || enteredDescription.trim() ==='' || enteredDueDate.trim() ==='' ){
      // show error modal
      modal.current.open() 
      return;   // aage wali onAdd ni chalega
    }

    onAdd({
      title : enteredTitle ,
      description : enteredDescription ,
      dueDate : enteredDueDate,
    })
  } 
  
  
  
  

  return (
    <>
    <Modal ref = {modal} buttonCaption = "Close"  >
      <h2 className="font-bold uppercase text-stone-500 mt-8 mb-5 my-4 text-xl" > Invalid Input </h2>
      <p className="text-stone-600 font-semibold my-4" > make sure yo provide a valid input for every field </p>
    </Modal>
    <div className="w-[35rem] mt-16" >
      <menu className="flex gap-2 justify-end items-center px-4 my-4 ">
        <li>
          <button className="bg-stone-300 hover:bg-stone-500 text-stone-500 hover:text-stone-950 rounded-md px-2 " 
          onClick={onCancel} >
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-400 hover:bg-stone-500 text-stone-700 hover:text-stone-950 rounded-md px-2 "
          onClick={handleSave}
          >
            {" "}
            Save{" "}
          </button>
        </li>
      </menu>

      <div className="ml-2" >
      <Input type = "text" ref = {title} label = 'Title'/>
      <Input ref = {description} label = 'Description' textArea />
      <Input type = "date" ref = {dueDate} label = 'DueDate' />
      </div>
    
    </div>
    </>
  );
}


export default AddNewProject;
