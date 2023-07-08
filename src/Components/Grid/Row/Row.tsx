import React, { ReactElement } from "react";
import '../Grid.css'

type RowProps = {
    children: ReactElement;
}
export default (props: RowProps) => {
    return <div className="row">
        {props.children}
    </div>;
}   