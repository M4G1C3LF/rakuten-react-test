import React from 'react';
import './MovieDetail.css';
import ImdbLogo from '../../Logo/ImdbLogo/ImdbLogo';
import DolbyLogo from '../../Logo/DolbyLogo/DolbyLogo';
import Container from '../../Grid/Container/Container';
import Row from '../../Grid/Row/Row';
import GenreThumbnail from '../../Thumbnail/GenreThumbnail/GenreThumbnail';
import StaffCarousel from '../../Carousel/StaffCarousel/StaffCarousel';
import Column from '../../Grid/Column/Column';
import { Movie } from '../../../api/aggregates/movie/shared/types/Movie';
import PlayLogo from '../../Logo/PlayLogo/PlayLogo';
import Button from './Button/Button';

type MovieDetailProps = {
   movie?: Movie;
   isLoading?: boolean;
   getTrailer?: Function;
}

export default (props: MovieDetailProps) => {
    const { movie, isLoading } = props;
    if (isLoading) return (<div>Loading...</div>);
    if(!movie) return (<div>No movie to show</div>);
    const hasDolbyAudio = movie.audioQualities?.find((audioQuality) => audioQuality.includes("Dolby"))
    return (
        <div>
            <div className="movie-detail-title m-3">
                <div>
                    <span>{movie.genres?.map(genre => genre.name).join("  ·  ")}</span>
                    <h1 className='mt-0'>{movie.title}</h1>
                </div>
                
            </div>
            <img 
                className='w-100'
                src={movie.screenshotUrl} 
                alt={`${movie.title} screenshot`}
            />
            <div className="movie-detail mx-3 mt-3">
                <div>
                    <div>
                        <div className="d-flex">
                            <div className="my-auto">
                                <ImdbLogo height="17px" color='#FEFEFE'/> 
                                <span className='m-1'>{movie.scores?.imdb}</span>
                            </div>
                            <div className="my-auto m-1">
                                {movie.releaseYear}
                            </div>
                            <div className="my-auto m-1">
                                {movie.duration} min.
                            </div>
                            <div className="my-auto m-1 border">

                                {hasDolbyAudio && <DolbyLogo height="17px"/>} {movie.audioQualities && movie.audioQualities[0]}
                            </div>
                            <div className="my-auto m-1 border">
                                {movie.classification || "TP"}
                            </div>
                            <Button onClick={props.getTrailer} >
                                <div className='d-flex'>
                                    <PlayLogo />&nbsp;<span>Ver trailer</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='mt-3'>{movie.description}</div>
                </div>
                <div>
                    <h1>Staff</h1>
                    <StaffCarousel 
                        staff={movie.staff || []}
                        itemsPerSlide={6} 
                    />
                </div>
                <div>
                    <h1>Genres</h1>
                    <div className='d-flex'>
                        {movie.genres?.map((genres) => {
                            return (
                                <GenreThumbnail 
                                    id={genres.id || ""}
                                    image={genres.image || ""}
                                    name={genres.name || ""}
                                    key={genres.name || ""}
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
                                        {movie.languages?.map((language) => language).join(', ')}
                                    </span>
                                    <h3>Subtítulos</h3>
                                    <span>
                                        {movie.subtitles?.map((subtitle) => subtitle).join(', ')}
                                    </span>
                                </div>
                            </Column>
                            <Column>
                                <div>
                                    <h3>Audiencia </h3>
                                    <span>
                                        {movie.classification && `No recomendada para menores de ${movie.classification} años` || "Apta para todos los públicos" }
                                    </span>
                                    <h3>Calidad de vídeo </h3>
                                    <span>
                                        {movie.videoQualities?.map((videoQuality) => videoQuality).join(', ')}
                                    </span>
                                    <h3>Calidad de audio </h3>
                                    <span>
                                    <span>
                                        {movie.audioQualities?.map((audioQuality) => audioQuality).join(', ')}
                                    </span>
                                    </span>
                                </div>
                            </Column>
                            <Column>
                                <div>
                                    <h3>Puntuación </h3>
                                    <div className='font-size-medium'>
                                        <div className="my-auto m-1 d-flex">
                                            <ImdbLogo height="35px" color='#e3dd24'/> 
                                            <div className="w-100 m-1 score-text">{movie.scores?.imdb}</div>
                                        </div>
                                        <div className="my-auto m-1 d-flex">
                                            <img className="tmdb-logo" src="https://images-0.rakuten.tv/storage/score-site/image/cde3901f-d226-4a2f-9667-fbfaea54fd6d-the-movie-database-1594119512.png" alt="tmdb" />
                                            <div className="w-100 m-1 score-text">{movie.scores?.tmdb}</div>
                                        </div>
                                    </div>
                                </div>
                            </Column>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
       
}