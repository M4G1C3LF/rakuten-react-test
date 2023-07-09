import React, { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import StaffThumbnail from '../../Thumbnail/StaffThumbnail/StaffThumbnail';
import { StaffMember } from '../../../Types/StaffMember';

type StaffCarouselProps = {
    staff: StaffMember[];
    itemsPerSlide: number;
}

export default (props: StaffCarouselProps) => {
    const getCarouselSlides = (args: {items: any[], itemsPerSlide: number}) : ReactElement[][] => {
        const slides = [];
        for (let i = 0; i < args.items.length; i += args.itemsPerSlide) {
            const slide = [];
            for (let j = 0; j < args.itemsPerSlide; j++) {
                const staffMember : StaffMember = args.items[i + j];
                if (staffMember) slide.push(<StaffThumbnail staffMember={staffMember} />);
            }
            slides.push(slide);
        }
        return slides;
    }

    const slides = getCarouselSlides({ items: props.staff, itemsPerSlide: props.itemsPerSlide });
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