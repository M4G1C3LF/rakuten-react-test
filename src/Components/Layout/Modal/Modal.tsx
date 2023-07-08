import React, { ReactElement } from "react";
import './Modal.css';
import { useState } from "react";
type ModalProps = {
    children: ReactElement;
    isActive?: boolean;
}

export default (props: ModalProps) => {
    return <div className={`${props.isActive ? "modal-active" : "modal-inactive"} modal`}>
      <div className="modal-content">
        {props.children}
      </div>
    </div>
}   