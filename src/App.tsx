import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import Layout from './Components/Layout/Layout';
import CarouselSection from './Components/Carousel/CarouselSection/CarouselSection';
import Modal from './Components/Layout/Modal/Modal';
import MovieDetail from './Components/Detail/MovieDetail/MovieDetail';
import { Movie } from './api/aggregates/movie/shared/types/Movie';
import { getMovieById, getMovieList } from './store/movie/actions';
import { GetMovieByIdInputDTO } from './api/aggregates/movie/shared/dto/GetMovieByIdInputDTO';
import { GetMovieListInputDTO } from './api/aggregates/movie/shared/dto/GetMovieListInputDTO';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

type AppProps = {
  getMovieList?: Function;
  getMovieById?: Function;
  movieLists?: Movie[][];
  movieDetail?: Movie;
  isLoadingMovieList?: boolean;
  isLoadingMovieDetail?: boolean;
  isVideoPlayerOpen?: boolean;
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

  useEffect(() => {
    if (props.isLoadingMovieList) return;
    DEFAULT_LISTS.forEach(id => {
      const input: GetMovieListInputDTO = {
        data: {
          id: id
        }
      }
      props.getMovieList && props.getMovieList(input);
    })
    
  }, []);
  
  return (
    <div className={`App`}>
      
      {props.isVideoPlayerOpen && <VideoPlayer videoUrl='https://prod-magazine-pmd-fastly.cdn.rakuten.tv/8/a/b/8abef660a68f87488d9fe42e7c9ad835-mc-0-141-0-0_SD_TRAILER/8abef660a68f87488d9fe42e7c9ad835-mc-0-141-0-0_SD_TRAILER.mp4?nvb=1689068067&nva=1689068207&token=0c27c6da6912c94702e57' /> }
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
        isActive={modalActive}
        closeModal={closeModal}
      >
        <MovieDetail isLoading={props.isLoadingMovieDetail} movie={props.movieDetail} />
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
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getMovieList: (args: GetMovieListInputDTO) => dispatch(getMovieList(args)),
      getMovieById: (args: GetMovieByIdInputDTO) => dispatch(getMovieById(args)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);