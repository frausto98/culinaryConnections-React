import { useState } from "react";

import LoginForm from "./Login";

import ReactDom from "react-dom";

const ModalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
    padding: '50px'

}

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='overlaySheet'></div>
            <div className='modalBody' style = {ModalStyles}>
                <button onClick={onClose} >Close Modal</button>
                
                <p> Hello World </p>
            </div>


        </>,
        document.getElementById('portal')
    )
}

export default Modal