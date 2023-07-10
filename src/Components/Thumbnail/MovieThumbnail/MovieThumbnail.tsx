import React from 'react';
import { useState } from 'react';
import './MovieThumbnail.css';
import { MovieMinified } from '../../../api/aggregates/movie/shared/types/MovieMinified';

type MovieThumbnailProps = {
    movie: MovieMinified;
    onClick?: Function;
}

export default (props: MovieThumbnailProps) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className='movie-thumbnail'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => props.onClick && props.onClick(props.movie.id)}
        >
            <span>
                <img src={props.movie.image} />
            </span>
        </div>
    );
       
}