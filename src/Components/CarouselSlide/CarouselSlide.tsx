import React, { ReactElement } from 'react';

type CarouselSlideProps = {
    elements: ReactElement[];
}

export default (props: CarouselSlideProps) => {
    return (
        <div className='d-flex'>
            {props.elements}
        </div>
    );  
}