import React from 'react';
import './MovieDetail.css';
import ImdbLogo from '../../Logo/ImdbLogo/ImdbLogo';
import DolbyLogo from '../../Logo/DolbyLogo/DolbyLogo';
import Container from '../../Grid/Container/Container';
import Row from '../../Grid/Row/Row';
import GenreThumbnail from '../../Thumbnail/GenreThumbnail/GenreThumbnail';

type Genre = {
    id: number;
    name: string;
    image: string;
}


type MovieDetailProps = {
    title?: string;
    description?: string;
    releaseYear?: number;
    duration?: number;
    scores?: {
        imdb: number;
        tmdb: number;
    };
    genres?: Genre[];
    languages?: string[];
    subtitles?: string[];
    classification: number;
    videoQualities?: string[];
    audioQualities?: string[];
}

export default (props: MovieDetailProps) => {

    return (
        <div>
            <div>
                imageSection
            </div>
            <div>
                <h1>{props.title}</h1>
                <div>
                    <Container>
                        <Row>
                            <div className="">
                                <span>
                                    <ImdbLogo color='#FEFEFE'/> 
                                    <span>{props.scores?.imdb}</span>
                                </span>
                                <DolbyLogo />
                                {props.releaseYear}
                                {props.duration}
                                <span>{props.classification}</span>
                            </div>
                        </Row>
                    </Container>
                    
                </div>
                <div>{props.description}</div>
            </div>
            <div>
                <h1>Staff</h1>

            </div>
            <div>
                <h1>Genres</h1>
                <div className='d-flex'>
                    {props.genres?.map((genres) => {
                        return (
                            <GenreThumbnail 
                                id={genres.id}
                                image={genres.image}
                                name={genres.name}
                                key={genres.name}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <h1>Details</h1>
                <div className='d-flex'>
                    {props.genres?.map((genres) => {
                        return (
                            <GenreThumbnail 
                                id={genres.id}
                                image={genres.image}
                                name={genres.name}
                                key={genres.name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
       
}