import React from 'react';
import { useState } from 'react';
import '../Thumbnail.css';

type MovieThumbnailProps = {
    image: string;
}

export default (props: MovieThumbnailProps) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className='standard-thumbnail'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <span>
                <img src={props.image} />
                {hover && <div>Preview</div>}
            </span>
        </div>
    );
       
}