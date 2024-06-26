import React from 'react';
import { useState } from 'react';
import './StaffThumbnail.css';
import { StaffMember } from '../../../api/aggregates/movie/shared/types/StaffMember';

type StaffThumbnailProps = {
    staffMember: StaffMember
}

const ACTOR_ROLE = "Actor";

export default (props: StaffThumbnailProps) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className='staff-thumbnail'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => window.open(`${props.staffMember.link}`, "_blank")}
        >
            <span>
                <img src={props.staffMember.image} alt="Image not found"/>
                <div>{props.staffMember.name}</div>
                {props.staffMember.role !== ACTOR_ROLE && <div className="secondary-text-color">{props.staffMember.role}</div>}
            </span>
        </div>
    );
       
}