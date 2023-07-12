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
            <g 
                id="Iconography" 
                stroke="none" 
                stroke-width="1" 
                fill-rule="evenodd"
            >
                <g 
                    id="Icons/Expand" 
                    fill-rule="nonzero"
                >
                    <path 
                        d="M5.4,14.9 L5.4,19.1307692 L9.63076923,19.1307692 L9.63076923,21.1307692 L3.4,21.1307692 L3.4,14.9 L5.4,14.9 Z M20.6307692,14.9 L20.6307692,21.1307692 L14.4,21.1307692 L14.4,19.1307692 L18.6307692,19.1307692 L18.6307692,14.9 L20.6307692,14.9 Z M9.63076923,2.9 L9.63076923,4.9 L5.4,4.9 L5.4,9.13076923 L3.4,9.13076923 L3.4,2.9 L9.63076923,2.9 Z M20.6307692,2.9 L20.6307692,9.13076923 L18.6307692,9.13076923 L18.6307692,4.9 L14.4,4.9 L14.4,2.9 L20.6307692,2.9 Z"
                    >
                    </path>
                </g>
            </g>
        </svg>
    )
}