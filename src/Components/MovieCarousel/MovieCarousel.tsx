import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './MovieCarousel.css';

type MovieMinified = {
    id: string;
    title: string;
    image: string; 
}
type MovieCarouselProps = {
    movies: MovieMinified[];
    itemsPerSlide: number;
}

export default (props: MovieCarouselProps) => {
    //Create custom slides with maximumItems per slide
    const slides = [];
    for (let i = 0; i < props.movies.length; i += props.itemsPerSlide) {
        const slide = [];
        for (let j = 0; j < props.itemsPerSlide; j++) {
            const movie = props.movies[i + j];
            if (movie) {
                slide.push(
                    <div className='movie-thumbnail'>
                        <span>
                            <img src={movie.image} />
                        </span>
                    </div>
                );
            }
        }
        slides.push(slide);
    }
    
    return (
        <Carousel className='custom-carousel' infiniteLoop>
            {slides.map((slide, index) => {
                return (
                    <div className='carousel-wrapper d-flex' key={index}>
                        {slide}
                    </div>
                );
            })}
        </Carousel>
    )
}