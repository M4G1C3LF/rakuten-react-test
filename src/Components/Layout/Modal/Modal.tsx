import React, { ReactElement } from "react";
import './Modal.css';

type ModalProps = {
    children: ReactElement;
    isActive?: boolean;
    closeModal: Function
}

export default (props: ModalProps) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modalWrapper"){
      props.closeModal();
    }
  }

  return (
    <div 
      id="modalWrapper"
      className={`${props.isActive ? "modal-active" : "modal-inactive"} modal`}
      onClick={ (e) => handleModalClick(e)}
    >
      <div id="modalContent" className="modal-content">
        {props.children}
      </div>
    </div>
  )
}   