import React from 'react';
import { useState } from 'react';
import './GenreThumbnail.css';

type GenreThumbnail = {
    id: string;
    name: string;
    image: string;
}

export default (props: GenreThumbnail) => {    
    const [hover, setHover] = useState(false);

    return (
        <div 
            
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
                <img className='genre-thumbnail' src={props.image} />
                <div className='mx-auto'>{props.name}</div>
        </div>
    );
       
}