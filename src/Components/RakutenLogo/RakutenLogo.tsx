import React from 'react';

type RakutenLogoProps = {
    width?: string;
    fillColor?: string;
    className?: string;
}
const DEFAULT_WIDTH = "114px";
const DEFAULT_FILL_COLOR = "#F0F0F0";
export default (props: RakutenLogoProps) => {
    return (
        <svg 
            className={props.className ? props.className : ""}
            viewBox="0 0 187 42"
            width={`${props.width ? props.width : DEFAULT_WIDTH }`}
            preserveAspectRatio="xMidYMid meet"
            data-testid="logo"
        >
            <g 
                fill={`${props.fillColor ? props.fillColor : DEFAULT_FILL_COLOR }`} 
                fill-rule="evenodd"
            >
                <path d="m162.126 10.7207c-.054-.891-.075-1.259.593-1.663.467-.283 3.036-1.768 7.653-3.196.57-.178 1.09-.066 1.422.307.345.389.419.983.181 1.509-.433.952-.55 1.847-.068 2.224.395.309.782.418 1.982-.207 1.573-.821 3.433-2.885 3.32-6.274-.041-1.213-.495-2.119-1.349-2.695-.806-.544-1.888-.726-2.988-.726-2.999 0-4.453.746-8.406 2.158-5.48 1.958-12.385 4.246-16.209 5.186-1.572.386-2.948 1.543-2.948 3.131 0 2.512 3.026 3.152 5.096 2.459.435-.145 4.729-1.692 6.25-1.887.217-.028.322.053.339.212.025.209.118 2.362.158 3.335.169 4.105.515 12.084.547 12.642.062 1.058.07 4.386 1.882 4.386 1.685 0 2.497-1.8 2.924-4.386.601-3.656.1-8.888-.143-13.071-.069-1.181-.236-3.444-.236-3.444"></path><path d="m184.6924 4.1435c-2.267 0-4.425 4.197-5.978 7.923-1.96 4.711-3.058 8.941-3.716 10.348-.517-1.36-1.872-5.359-2.563-6.809-1.176-2.471-2.432-4.368-4.029-4.368-.892 0-1.949.548-1.949 2.135 0 1.125.466 2.531.953 3.826.155.416 3.208 7.814 3.645 9.181 0 0 1.456 4.474 1.588 4.869.891 2.681 1.729 3.02 2.293 3.02.919 0 2.17-.37 2.809-3.107.406-1.745.986-3.728 1.481-5.352.898-2.94 3.146-8.501 4.592-11.886 1.173-2.745 2.645-5.907 2.645-7.871 0-.931-.393-1.909-1.771-1.909"></path><path d="m111.2695 35.3252h-83.625l6.661 6.661z"></path><path d="m30.5391 26.166c-2.889 0-5.004-2.844-5.004-6.438 0-3.591 2.115-6.436 5.004-6.436 2.893 0 4.931 2.845 4.931 6.436 0 3.594-2.038 6.438-4.931 6.438zm4.852-17.784v1.007c-1.552-.989-2.945-1.565-4.852-1.565-5.858 0-10.309 5.343-10.309 11.904 0 6.563 4.451 11.902 10.309 11.902 1.907 0 3.3-.572 4.852-1.563v1.006h5.15v-22.691z"></path><path d="m76.6465 8.3818v13.33c0 2.5-1.719 4.612-4.221 4.612-2.5 0-4.218-2.112-4.218-4.612v-13.33h-5.151v13.33c0 5.469 3.741 9.919 9.212 9.919 2.533 0 4.378-1.401 4.378-1.401v.843h5.149v-22.691z"></path><path d="m124.6328 31.0732v-13.33c0-2.501 1.718-4.612 4.22-4.612 2.5 0 4.219 2.111 4.219 4.612v13.33h5.151v-13.33c0-5.469-3.742-9.919-9.213-9.919-2.533 0-4.377 1.401-4.377 1.401v-.843h-5.15v22.691z"></path><path d="m95.6768 25.7036c-.463.314-1.047.558-1.723.558-.84 0-2.427-.642-2.427-2.784v-9.71h4.404v-5.386h-4.404v-5.655h-5.151l.001 5.655h-2.725v5.386h2.725v9.789c-.002 5.067 3.816 8.093 7.655 8.093 1.432 0 3.418-.468 5.039-1.428z"></path><path d="m53.3447 19.018 8.834-10.636h-7.219l-6.178 7.905v-15.434h-5.304v30.22h5.304v-9.321l7.595 9.321h7.216z"></path><path d="m112.0684 16.7983h-9.275c1.083-5.314 8.271-5.62 9.275 0m-4.496-8.993c-5.961 0-10.236 5.239-10.236 11.922 0 7.028 5.366 11.924 10.748 11.924 2.715 0 6.196-.932 9.121-5.08l-4.549-2.627c-3.519 5.186-9.382 2.554-10.059-2.632l14.835.004c1.27-8.15-4.001-13.511-9.86-13.511"></path><path d="m5.3857 8.1088h3.516c2.418 0 4.396 1.968 4.396 4.391 0 2.43-1.978 4.396-4.396 4.396h-3.516zm0 22.964v-8.791h3.811l6.594 8.791h6.743l-7.969-10.608c2.483-1.782 4.115-4.681 4.115-7.965 0-5.393-4.386-9.773-9.778-9.773h-8.902v28.346z">
                </path>
            </g>
        </svg>
    )
}