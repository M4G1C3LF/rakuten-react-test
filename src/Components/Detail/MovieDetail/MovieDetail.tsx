import React from 'react';
import './MovieDetail.css';
import ImdbLogo from '../../Logo/ImdbLogo/ImdbLogo';
import DolbyLogo from '../../Logo/DolbyLogo/DolbyLogo';
import Container from '../../Grid/Container/Container';
import Row from '../../Grid/Row/Row';
import GenreThumbnail from '../../Thumbnail/GenreThumbnail/GenreThumbnail';
import CarouselSection from '../../Carousel/CarouselSection/CarouselSection';
import MovieCarousel from '../../Carousel/MovieCarousel/MovieCarousel';
import { StaffMember } from '../../../Types/StaffMember';
import { Genre } from '../../../Types/Genre';
import StaffCarousel from '../../Carousel/StaffCarousel/StaffCarousel';
import Column from '../../Grid/Column/Column';


type MovieDetailProps = {
    title?: string;
    description?: string;
    releaseYear?: number;
    duration?: number;
    scores?: {
        imdb: number;
        tmdb: number;
    };
    staff?: StaffMember[];
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
                            <div className="d-flex">
                                <div className="my-auto m-1">
                                    <ImdbLogo height="17px" color='#FEFEFE'/> 
                                    <span className='m-1'>{props.scores?.imdb}</span>
                                </div>
                                <div className="my-auto m-1">
                                    {props.releaseYear}
                                </div>
                                <div className="my-auto m-1">
                                    {props.duration} min.
                                </div>
                                <div className="my-auto m-1 border">
                                    <DolbyLogo height="17px"/> 5.1
                                </div>
                                <div className="my-auto m-1 border">
                                    {props.classification}
                                </div>
                            </div>
                        </Row>
                    </Container>
                    
                </div>
                <div>{props.description}</div>
            </div>
            <div>
                <h1>Staff</h1>
                <StaffCarousel staff={[
                    {id: 1, name: "Lily Wachowski", role: "Director", link: "#", image: "https://images-0.rakuten.tv/storage/person/photo/5453b9c2-3861-40af-86b7-0b5afb54f2db.jpg"},
                    {id: 2, name: "Lana Wachowski", role: "Director", link: "#", image: "https://images-1.rakuten.tv/storage/person/photo/1c4ecd89-ab53-4fbe-ad80-604bf5d7afe3.jpg"},
                    {id: 3, name: "Keanu Reeves", role: "Actor", link: "#", image: "https://images-3.rakuten.tv/storage/person/photo/fc3e460f-c71f-4007-91c9-44b7d128202f.jpg"},
                    {id: 4, name: "Laurence Fishburne", role: "Actor", link: "#", image: "https://images-2.rakuten.tv/storage/person/photo/fe9080d7-e65a-4406-a7dc-f1026d352fb4.jpg"},
                    {id: 5, name: "Carrie-Anne Moss", role: "Actor", link: "#", image: "https://images-0.rakuten.tv/storage/person/photo/56e7ac7f-cf29-49c3-a7f7-4ae4597a7c4a.jpg"},
                    {id: 6, name: "Hugo Weaving", role: "Actor", link: "#", image: "https://images-1.rakuten.tv/storage/person/photo/1f92c8c0-8135-4bd4-97de-c0718bf7cb9b.jpg"},
                    {id: 7, name: "Gloria Foster", role: "Actor", link: "#", image: "https://images-1.rakuten.tv/storage/person/photo/6229f337-8021-4bb7-bf09-f7bae54eaaed.jpg"},
                    {id: 8, name: "Joe Pantoliano", role: "Actor", link: "#", image: "https://images-0.rakuten.tv/storage/person/photo/57b69cc9-24fa-46dc-89b1-efa798e8f7d6.jpg"},
                    {id: 9, name: "Marcus Chong", role: "Actor", link: "#", image: "https://images-0.rakuten.tv/storage/person/photo/741863a9-086b-44c9-85b3-ad354d656280.jpg"},
                ]}
                itemsPerSlide={6} 
                
                />
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
                <Container className="movie-detail-details row3colum">
                    <Row>
                        <div>
                        <Column>
                            <div>
                                <h3>Idioma de audio</h3>
                                <span>
                                    {props.languages?.map((language) => {
                                        return (
                                            <span>{language}</span>
                                        )
                                    }).join(', ')}
                                </span>
                                <h3>Subtítulos</h3>
                                <span>
                                    {props.subtitles?.map((subtitle) => {
                                        return (
                                            <span>{subtitle}</span>
                                        )
                                    }).join(', ')}
                                </span>
                            </div>
                        </Column>
                        <Column>
                            <div>
                                <h3>Audiencia </h3>
                                <span>
                                    No recomendada para menores de {props.classification} años
                                </span>
                                <h3>Calidad de vídeo </h3>
                                <span>
                                {props.videoQualities?.map((videoQuality) => {
                                    return (
                                        <span>{videoQuality}</span>
                                    )
                                }).join(', ')}
                                </span>
                                <h3>Calidad de audio </h3>
                                <span>
                                    {props.audioQualities?.map((audioQuality) => {
                                        return (
                                            <span>{audioQuality}</span>
                                        )
                                    }).join(', ')}
                                </span>
                            </div>
                        </Column>
                        <Column>
                            <div>
                                <h3>Puntuación </h3>
                                <div className="my-auto m-1">
                                    <ImdbLogo height="40px" color='#e3dd24'/> 
                                    <span className='m-1'>{props.scores?.imdb}</span>
                                </div>
                                <div className="my-auto m-1">
                                    <span>TMDB</span> 
                                    <span className='m-1'>{props.scores?.tmdb}</span>
                                </div>
                            </div>
                        </Column>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
       
}