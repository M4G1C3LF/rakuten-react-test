import React, { ReactElement } from "react";
import '../Grid.css'

type ContainerProps = {
    children: ReactElement;
    className?: string;
}
export default (props: ContainerProps) => {
    return <div className={`container ${props.className}`}>
        {props.children}
    </div>;
} 