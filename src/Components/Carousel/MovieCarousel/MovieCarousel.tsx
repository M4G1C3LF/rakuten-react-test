import React, { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MovieThumbnail from '../../Thumbnail/MovieThumbnail/MovieThumbnail';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import { MovieMinified } from '../../../api/aggregates/movie/shared/types/MovieMinified';

type MovieCarouselProps = {
    movies: MovieMinified[];
    itemsPerSlide: number;
}

export default (props: MovieCarouselProps) => {
    const getCarouselSlides = (args: {items: any[], itemsPerSlide: number}) : ReactElement[][] => {
        if (!args.items)
            return [];
        const slides = [];
        for (let i = 0; i < args.items.length; i += args.itemsPerSlide) {
            const slide = [];
            for (let j = 0; j < args.itemsPerSlide; j++) {
                const movie = args.items[i + j];
                if (movie) slide.push(<MovieThumbnail image={movie.image} />);
            }
            slides.push(slide);
        }
        return slides;
    }

    const slides = getCarouselSlides({ items: props.movies, itemsPerSlide: props.itemsPerSlide });
    return (
        <Carousel infiniteLoop>
            {slides.map((slide, index) => {
                return (
                    <CarouselSlide key={index} elements={slide} />
                );
            })}
        </Carousel>
    )
}