import React from 'react';

type ExpandLogoProps = {
    height?: string;
    color?: string;
    className?: string;
}
const DEFAULT_HEIGHT = "30px";
const DEFAULT_COLOR = "#FEFEFE";
export default (props: ExpandLogoProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.height || DEFAULT_HEIGHT}
            fill={props.color || DEFAULT_COLOR}
        >
            <path 
                d="M9.63076923,13.9 L9.63076923,20.1307692 L7.63076923,20.1307692 L7.63076923,15.9 L3.4,15.9 L3.4,13.9 L9.63076923,13.9 Z M20.6307692,13.9 L20.6307692,15.9 L16.4,15.9 L16.4,20.1307692 L14.4,20.1307692 L14.4,13.9 L20.6307692,13.9 Z M9.63076923,3.9 L9.63076923,10.1307692 L3.4,10.1307692 L3.4,8.13076923 L7.63076923,8.13076923 L7.63076923,3.9 L9.63076923,3.9 Z M16.4,3.9 L16.4,8.13076923 L20.6307692,8.13076923 L20.6307692,10.1307692 L14.4,10.1307692 L14.4,3.9 L16.4,3.9 Z"
            >
            </path>
        </svg>
    )
}