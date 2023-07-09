import React from 'react';
import { useState } from 'react';
import '../Thumbnail.css';

type GenereThumbnail = {
    id: number;
    name: string;
    image: string;
}

export default (props: GenereThumbnail) => {

    return (
        <div className='standard-thumbnail'>
            <span>
                <img src={props.image} />
                <span>{props.name}</span>
            </span>
        </div>
    );
       
}