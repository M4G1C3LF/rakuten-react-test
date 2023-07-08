import React, { ReactElement } from "react";
import '../Grid.css'

type ColumnProps = {
    children: ReactElement;
}
export default (props: ColumnProps) => {
    return <div className="col">
        {props.children}
    </div>;
}   