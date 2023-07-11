import React from 'react';

type DolbyLogoProps = {
    height?: string;
    color?: string;
    className?: string;
}
const DEFAULT_HEIGHT = "30px";
const DEFAULT_COLOR = "#FEFEFE";
export default (props: DolbyLogoProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={props.height || DEFAULT_HEIGHT}
            fill={props.color || DEFAULT_COLOR}
        >
            <path
                stroke={props.color || DEFAULT_COLOR}
                d="M22.3636364,4.90909091 L1.63636364,4.90909091 L1.63636364,19.0909091 L22.3636364,19.0909091 L22.3636364,4.90909091 Z M11.4545455,12 C11.4545455,15.0124364 9.01243636,17.4545455 6,17.4545455 L3.27272727,17.4545455 L3.27272727,16.7248364 L3.27272727,7.27516364 L3.27272727,6.54545455 L6,6.54545455 C9.01243636,6.54545455 11.4545455,8.98756364 11.4545455,12 Z M12.5454545,12 C12.5454545,8.98756364 14.9875636,6.54545455 18,6.54545455 L20.7272727,6.54545455 L20.7272727,7.27516364 L20.7272727,16.7248364 L20.7272727,17.4545455 L18,17.4545455 C14.9875636,17.4545455 12.5454545,15.0124364 12.5454545,12 Z">
            </path>
        </svg>
    )
}