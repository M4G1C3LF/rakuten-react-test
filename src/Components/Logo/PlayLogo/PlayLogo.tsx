import React from 'react';

type PlayLogo = {
    height?: string;
    color?: string;
    className?: string;
}
const DEFAULT_HEIGHT = "24px";
const DEFAULT_COLOR = "#FEFEFE";
export default (props: PlayLogo) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            height={`${props.height || DEFAULT_HEIGHT }`}

        >
            <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <circle
                    id="Oval"
                    stroke={props.color || DEFAULT_COLOR}
                    stroke-width="1"
                    cx="12"
                    cy="12"
                    r="11.5"
                />
                
                <polygon 
                    id="Colour"
                    fill={props.color || DEFAULT_COLOR}
                    fill-rule="nonzero"
                    points="10 8.5 10 15.5 15.5 12"
                />
            </g>
        </svg>
    )
}