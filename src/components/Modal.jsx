import React, { Children, useRef } from "react";
import { forwardRef,useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption}, ref) {
    const dialog = useRef()
    useImperativeHandle(ref , () => {
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })


  return createPortal(
    <dialog ref ={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" > 
        {children} 
        <form method = "dialog " className="text-right">
            <button className="bg-stone-300 hover:bg-stone-500 text-stone-500 hover:text-stone-950 rounded-md px-2 " >{buttonCaption}</button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
})

export default Modal;
