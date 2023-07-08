import React, { ReactElement } from "react";
import '../Grid.css'

type ContainerProps = {
    children: ReactElement;
}
export default (props: ContainerProps) => {
    return <div className="container">
        {props.children}
    </div>;
} 