import React from 'react';
import './MovieDetail.css';
import ImdbLogo from '../../Logo/ImdbLogo/ImdbLogo';
import DolbyLogo from '../../Logo/DolbyLogo/DolbyLogo';
import Container from '../../Grid/Container/Container';
import Row from '../../Grid/Row/Row';

type Genere = {
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
    generes?: Genere[];
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
                <h1>Generes</h1>
            </div>
            <div>
                <h1>Details</h1>
            </div>
        </div>
    );
       
}