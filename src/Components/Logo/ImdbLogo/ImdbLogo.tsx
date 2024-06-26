import React from 'react';

type ImdbLogoProps = {
    height?: string;
    color?: string;
    className?: string;
}
const DEFAULT_HEIGHT = "30px";
const DEFAULT_COLOR = "#848585";
export default (props: ImdbLogoProps) => {
    return (
        <svg 
            height={`${props.height || DEFAULT_HEIGHT }`} 
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                stroke={`${ props.color || DEFAULT_COLOR }`}
                strokeWidth="2" 
                strokeLinejoin="round"
                d="M1 2.5C1 1.67157 1.67157 1 2.5 1H37.5C38.3284 1 39 1.67157 39 2.5V17.5C39 18.3284 38.3284 19 37.5 19H2.5C1.67157 19 1 18.3284 1 17.5V2.5Z"
            />
            <path 
                fill={`${ props.color || DEFAULT_COLOR }`}
                d="M5 15.625H8.125V4.375H5V15.625Z"
            />
            <path
                fill={`${ props.color || DEFAULT_COLOR }`}
                d="M14.7953 4.375L14.0959 9.63029L13.6614 6.77189C13.5354 5.85631 13.4145 5.05734 13.2988 4.375H9.375V15.625H12.026L12.0363 8.19613L13.1523 15.625H15.0396L16.099 8.03237L16.1067 15.625H18.75V4.375H14.7953Z"
            />
            <path 
                fill={`${ props.color || DEFAULT_COLOR }`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 4.375V15.625H24.8778C25.9823 15.625 26.875 14.7361 26.875 13.6396V6.36038C26.875 5.26247 25.9808 4.375 24.8778 4.375H20ZM22.9392 6.30045C23.2841 6.30045 23.5212 6.33271 23.6452 6.3997C23.7718 6.4667 23.8499 6.57091 23.885 6.71482C23.92 6.85873 23.9389 7.18378 23.9389 7.69244V12.0545C23.9389 12.8038 23.885 13.2604 23.7799 13.4291C23.6748 13.6003 23.3946 13.6822 22.9392 13.6822V6.30045Z"
            />
            <path
                fill={`${ props.color || DEFAULT_COLOR }`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.9684 7.19179H32.7687C32.097 7.19179 31.5016 7.50635 31.1152 7.98783V4.375H28.125V15.4805H30.9274L31.1074 14.7927C31.4752 15.296 32.0822 15.625 32.7687 15.625H32.9684C34.0907 15.625 35 14.7469 35 13.6637V9.15304C35 8.07042 34.0904 7.19179 32.9684 7.19179ZM32.1285 10.0119V12.6776C32.1285 13.18 32.1026 13.4989 32.0507 13.6297C31.9989 13.7604 31.752 13.8296 31.5823 13.8296C31.4126 13.8296 31.1701 13.7581 31.1135 13.6297V12.763V10.0119V9.11729C31.163 9.0003 31.4174 8.93087 31.5823 8.93087C31.7472 8.93087 31.9824 9.0163 32.0413 9.14935C32.1002 9.28241 32.1285 9.57146 32.1285 10.0119Z" 
            />
        </svg>
    )
}