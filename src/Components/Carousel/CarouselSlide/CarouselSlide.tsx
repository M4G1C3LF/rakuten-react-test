import React, { ReactElement } from 'react';

type CarouselSlideProps = {
    elements: ReactElement[];
}

export default (props: CarouselSlideProps) => {
    return (
        <div className='d-flex m-3'>
            {props.elements}
        </div>
    );  
}