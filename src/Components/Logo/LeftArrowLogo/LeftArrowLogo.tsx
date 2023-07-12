import React from 'react';

type LeftArrowLogoProps = {
    height?: string;
    color?: string;
    className?: string;
}
const DEFAULT_HEIGHT = "30px";
const DEFAULT_COLOR = "#FEFEFE";
export default (props: LeftArrowLogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.height || DEFAULT_HEIGHT}
            fill={props.color || DEFAULT_COLOR}
        >
            <polygon points="10.5 21 11.56 19.939 4.371 12.75 22.5 12.75 22.5 11.25 4.371 11.25 11.56 4.06 10.5 3 1.5 12">
            </polygon>
        </svg>
    )
}