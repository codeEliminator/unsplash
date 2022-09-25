import React from 'react'
import "./modal.css"
export default function Modal({active, setActive, children}) {
  return (
    
        <div className={active? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active? "modalContent active": "modalContent"} onClick = {(evt) => evt.stopPropagation()}>
                <img className='modalImage' src={children.props.src}></img>
            </div>
        </div>
    
    
  )
}
