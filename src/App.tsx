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

type AppProps = {
  getMovieList?: Function | undefined;
  movieLists?: Movie[][] | undefined;
  isLoadingMovieList?: boolean;
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
  const [modalActive, setModalActive] = useState(true);

  const closeModal = () => {
    setModalActive(false);
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
  
  const movie : Movie = {
    screenshotUrl:'https://images-0.rakuten.tv/storage/snapshot/shot/23a8e9e7-5818-4cd7-818a-cfa953c525d0-snapshot-1590662613.jpeg',
    scores:{ imdb: 5.2, tmdb: 6 },
    classification: 18,
    title: 'Matrix',
    description: 'Neo es el nick en la red que un aparentemente tranquilo trabajador de una empresa de software utiliza en sus pirateos informáticos varios. Su doble vida se ve alterada cuando unas misteriosas frases aparecen en su ordenador: "Matrix te posee". Neo entabla contacto telefónico con el que cree que es otro hacker (Morfeo) y unos misteriosos agentes comienzan a seguirle. Toda la concepción de la vida que tenía se irá al traste cuando Morfeo le explica que lo que realmente está viviendo no es más que un largo sueño apoyado en realidades virtuales y que no vive en el siglo que cree.',
    releaseYear: 1999,
    duration: 136,
    genres: [
      {
        id: "1",
        image: 'https://images-2.rakuten.tv/storage/list-image/brandable-photo/cdca468c-0072-4f3d-9250-807407ac72aa.png',
        name: 'Action',
        link: '#'

      },
      {
        id: "2",
        image: 'https://images-2.rakuten.tv/storage/list-image/brandable_photo/37b14f48-2c22-4ee7-a1b6-84b2f5bb5f9b-adventure-1591342700.png',
        name: 'Adventure',
        link: '#'
      },
      {
        id: "3",
        image: 'https://images-1.rakuten.tv/storage/list-image/brandable_photo/afbcfed0-7e7c-422b-9073-a4062bf882d9-science-fiction-1591342717.png',
        name: 'Animation',
        link: '#'
      },
    ],
    languages:[ "Español", "Inglés" ],
    subtitles:[ "Español", "Sin subtítulos" ],
    videoQualities:[ "HD", "Full HD" ],
    audioQualities:[ "2.0 (Stereo)", "5.1 (Dolby Surround)" ]
  }

  return (
    <div className={`App`}>
      <Layout>
          <div>
            {props.movieLists && props.movieLists.map((movieList: any) => {
              if (!movieList) return null;
              return <CarouselSection 
                title={movieList && movieList.title}
                items={movieList && movieList.movies}
                itemsPerSlide={6}
                key={movieList && movieList.movie && movieList.movie.map((movie: any) => movie.title).join('-')}
              />
            }
            )}
          </div>
      </Layout>
      <Modal 
        isActive={modalActive}
        closeModal={closeModal}
      >
        <MovieDetail movie={movie} />
      </Modal>
    </div>
  );  
}

const mapStateToProps = (state: any) => {
  return {
      movieLists: state.Movie.movieLists,
      isLoadingMovieList: state.Movie.isLoadingMovieList,
      
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getMovieList: (args: GetMovieListInputDTO) => dispatch(getMovieList(args)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);