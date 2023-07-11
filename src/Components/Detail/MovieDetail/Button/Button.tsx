import React, { ReactElement } from 'react';
import './Button.css';

type ButtonProps = {
   onClick?: Function;
   children: ReactElement;
}

export default (props: ButtonProps) => {
    return (
        <div className="m-1 border button" onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </div>
    );
       
}