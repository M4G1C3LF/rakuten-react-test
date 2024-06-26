import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import Layout from './Components/Layout/Layout';
import CarouselSection from './Components/Carousel/CarouselSection/CarouselSection';
import Modal from './Components/Layout/Modal/Modal';
import MovieDetail from './Components/Detail/MovieDetail/MovieDetail';
import { Movie } from './api/aggregates/movie/shared/types/Movie';
import { getMovieById, getMovieList, getMovieStream } from './store/movie/actions';
import { openVideoPlayer, closeVideoPlayer } from './store/ui/actions';
import { GetMovieByIdInputDTO } from './api/aggregates/movie/shared/dto/GetMovieByIdInputDTO';
import { GetMovieListInputDTO } from './api/aggregates/movie/shared/dto/GetMovieListInputDTO';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { GetMovieStreamInputDTO } from './api/aggregates/movie/shared/dto/GetMovieStreamInputDTO';

type AppProps = {
  getMovieList?: Function;
  getMovieById?: Function;
  getMovieStream?: Function;
  openVideoPlayer?: Function;
  closeVideoPlayer?: Function;
  movieLists?: Movie[][];
  movieDetail?: Movie;
  isLoadingMovieList?: boolean;
  isLoadingMovieDetail?: boolean;
  isVideoPlayerOpen?: boolean;
  movieStreamUrl?: string;
};

const DEFAULT_LISTS: string[] = [ 
  'gratis-la-mejor-seleccion-de-peliculas',
  'tienda-las-peliculas-del-momento',
  'rakuten-originals-movies',
  'gratis-peliculas-de-accion',
  'gratis-peliculas-de-drama',
  'gratis-peliculas-de-suspense',
  'gratis-peliculas-familiares'
]

function App(props: AppProps) {
  const [modalActive, setModalActive] = useState(false);

  const closeModal = () => {
    setModalActive(false);
  }

  const openModal = (id : string) => {
    props.getMovieById && props.getMovieById({ data: { id }});
    setModalActive(true);
  }
  
  const showTrailer = () => {
    props.getMovieStream && props.getMovieStream({ data: { id: props.movieDetail?.id as string }});
    props.openVideoPlayer && props.openVideoPlayer();
  }

  useEffect(() => {
    if (props.isLoadingMovieList) return;
    DEFAULT_LISTS.forEach(id => {
      const input: GetMovieListInputDTO = { data: {id} }
      props.getMovieList && props.getMovieList(input);
    })
    
  }, []);
  
  return (
    <div className={`App`}>
      
      {props.isVideoPlayerOpen && props.movieStreamUrl &&<VideoPlayer 
        videoUrl={`${props.movieStreamUrl}`} 
        closeVideoPlayer={props.closeVideoPlayer}
      />}
      <Layout className={`${props.isVideoPlayerOpen && 'd-none'}`}>
          <div>
            {props.movieLists && props.movieLists.map((movieList: any, index: number) => {
              if (!movieList) return null;
              return <CarouselSection 
                title={movieList && movieList.title}
                items={movieList && movieList.movies}
                itemsPerSlide={6}
                key={index}
                onClickItem={openModal}
              />
            }
            )}
          </div>
      </Layout>
      <Modal 
        className={`${props.isVideoPlayerOpen && 'd-none'}`}
        isActive={modalActive}
        closeModal={closeModal}
      >
        <MovieDetail 
          isLoading={props.isLoadingMovieDetail} 
          movie={props.movieDetail}
          getTrailer={() => showTrailer()}
        />
      </Modal>
    </div>
  );  
}

const mapStateToProps = (state: any) => {
  return {
      isVideoPlayerOpen: state.Ui.isVideoPlayerOpen,
      movieDetail: state.Movie.movieDetail,
      isLoadingMovieDetail: state.Movie.isLoadingMovieDetail,
      movieLists: state.Movie.movieLists,
      isLoadingMovieList: state.Movie.isLoadingMovieList,
      movieStreamUrl: state.Movie.movieStreamUrl,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getMovieList: (args: GetMovieListInputDTO) => dispatch(getMovieList(args)),
      getMovieById: (args: GetMovieByIdInputDTO) => dispatch(getMovieById(args)),
      getMovieStream: (args: GetMovieStreamInputDTO) => dispatch(getMovieStream(args)),
      openVideoPlayer: () => dispatch(openVideoPlayer()),
      closeVideoPlayer: () => dispatch(closeVideoPlayer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);