import React from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';

type CarouselSectionProps = {
    title: string;
    items: any[];
    itemsPerSlide: number;
    onClickItem?: Function;
}

export default (props: CarouselSectionProps) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <MovieCarousel movies={props.items} itemsPerSlide={props.itemsPerSlide} onClickItem={props.onClickItem} />
        </div>
    )
}