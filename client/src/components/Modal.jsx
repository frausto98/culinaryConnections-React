import { useState } from "react";

const Modal = ({open, children, onClose}) => {
    if (!open) return null

    return(
        <>
            <button onClick={onClose} >Close Modal</button>
            {children}
        </>
    )
}

export default Modal