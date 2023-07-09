import React from 'react';
import { useState } from 'react';
import '../Thumbnail.css';

type StaffThumbnailProps = {
    name: string;
    image: string;
    role?: string;
}

export default (props: StaffThumbnailProps) => {
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