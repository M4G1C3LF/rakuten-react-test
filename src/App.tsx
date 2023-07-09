import React from 'react';
import { useState } from 'react';
import Layout from './Components/Layout/Layout';
import CarouselSection from './Components/Carousel/CarouselSection/CarouselSection';
import Modal from './Components/Layout/Modal/Modal';
import MovieDetail from './Components/Detail/MovieDetail/MovieDetail';

function App() {
  const [modalActive, setModalActive] = useState(true);

  const closeModal = () => {
    setModalActive(false);
  }

  return (
    <div className={`App ${modalActive && "disable-overflow" }`}>
      <Layout>
          <div>
            <CarouselSection 
              title='My Carousel'
              items={[
                { id: '1', title: 'Movie 1', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/e3f5e195-b00b-4adb-a908-fabbd5af0d76-la-historia-de-una-traicion-1626173520.jpeg' },
                { id: '2', title: 'Movie 2', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/3eed7d73-cc7c-44a8-abd5-543295627759.jpeg' },
                { id: '3', title: 'Movie 3', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/fb59322e-391d-4ba2-b2df-9d1a0a6c3dee-atrapada-en-las-profundidades-1611323620.jpeg' },
                { id: '4', title: 'Movie 4', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/6ec11f3f-c8f9-4029-8aa1-95d28c648557-misterios-del-titanic-1611323544.jpeg' },
                { id: '5', title: 'Movie 5', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/5822952e-48e8-4b2f-afc4-43e5060f01eb-ascenso-al-limite-1669025473.jpeg' },
                { id: '6', title: 'Movie 6', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/4ddca184-b25d-4455-a137-8524c8dedfa5.jpeg' },
                { id: '7', title: 'Movie 7', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/1e98786c-5ea2-42e4-96a2-82a18adeb89b.jpeg' },
                { id: '8', title: 'Movie 8', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/241ab839-d666-4726-9646-e7e1cc132aae-redencion-southpaw-1611322590.jpeg' },
                { id: '9', title: 'Movie 9', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/89cd947f-6958-48af-bfab-79a2dbacc982-the-escort-1645180523.jpeg' },
                { id: '10', title: 'Movie 10', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/16e74404-56c2-41f4-8fc0-f555e5fa6809-incidencias-1611476525.jpeg' },
                { id: '11', title: 'Movie 11', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/a568ba46-773a-487d-9ccd-9f0e403476bb-aislados-1646662674.jpeg' },
                { id: '12', title: 'Movie 12', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/8f24fb5d-0bc9-479f-86dd-de69da69c7e1.jpeg' },
                
              ]}
              itemsPerSlide={7}
            />
            <CarouselSection 
              title='My Carousel 2'
              items={[
                { id: '1', title: 'Movie 1', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/e3f5e195-b00b-4adb-a908-fabbd5af0d76-la-historia-de-una-traicion-1626173520.jpeg' },
                { id: '2', title: 'Movie 2', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/3eed7d73-cc7c-44a8-abd5-543295627759.jpeg' },
                { id: '3', title: 'Movie 3', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/fb59322e-391d-4ba2-b2df-9d1a0a6c3dee-atrapada-en-las-profundidades-1611323620.jpeg' },
                { id: '4', title: 'Movie 4', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/6ec11f3f-c8f9-4029-8aa1-95d28c648557-misterios-del-titanic-1611323544.jpeg' },
                { id: '5', title: 'Movie 5', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/5822952e-48e8-4b2f-afc4-43e5060f01eb-ascenso-al-limite-1669025473.jpeg' },
                { id: '6', title: 'Movie 6', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/4ddca184-b25d-4455-a137-8524c8dedfa5.jpeg' },
                { id: '7', title: 'Movie 7', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/1e98786c-5ea2-42e4-96a2-82a18adeb89b.jpeg' },
                { id: '8', title: 'Movie 8', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/241ab839-d666-4726-9646-e7e1cc132aae-redencion-southpaw-1611322590.jpeg' },
                { id: '9', title: 'Movie 9', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/89cd947f-6958-48af-bfab-79a2dbacc982-the-escort-1645180523.jpeg' },
                { id: '10', title: 'Movie 10', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/16e74404-56c2-41f4-8fc0-f555e5fa6809-incidencias-1611476525.jpeg' },
                { id: '11', title: 'Movie 11', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/a568ba46-773a-487d-9ccd-9f0e403476bb-aislados-1646662674.jpeg' },
                { id: '12', title: 'Movie 12', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/8f24fb5d-0bc9-479f-86dd-de69da69c7e1.jpeg' },
                
              ]}
              itemsPerSlide={7}
            />
            <CarouselSection 
              title='My Carousel 3'
              items={[
                { id: '1', title: 'Movie 1', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/e3f5e195-b00b-4adb-a908-fabbd5af0d76-la-historia-de-una-traicion-1626173520.jpeg' },
                { id: '2', title: 'Movie 2', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/3eed7d73-cc7c-44a8-abd5-543295627759.jpeg' },
                { id: '3', title: 'Movie 3', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/fb59322e-391d-4ba2-b2df-9d1a0a6c3dee-atrapada-en-las-profundidades-1611323620.jpeg' },
                { id: '4', title: 'Movie 4', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/6ec11f3f-c8f9-4029-8aa1-95d28c648557-misterios-del-titanic-1611323544.jpeg' },
                { id: '5', title: 'Movie 5', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/5822952e-48e8-4b2f-afc4-43e5060f01eb-ascenso-al-limite-1669025473.jpeg' },
                { id: '6', title: 'Movie 6', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/4ddca184-b25d-4455-a137-8524c8dedfa5.jpeg' },
                { id: '7', title: 'Movie 7', image: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/1e98786c-5ea2-42e4-96a2-82a18adeb89b.jpeg' },
                { id: '8', title: 'Movie 8', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/241ab839-d666-4726-9646-e7e1cc132aae-redencion-southpaw-1611322590.jpeg' },
                { id: '9', title: 'Movie 9', image: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/89cd947f-6958-48af-bfab-79a2dbacc982-the-escort-1645180523.jpeg' },
                { id: '10', title: 'Movie 10', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/16e74404-56c2-41f4-8fc0-f555e5fa6809-incidencias-1611476525.jpeg' },
                { id: '11', title: 'Movie 11', image: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/a568ba46-773a-487d-9ccd-9f0e403476bb-aislados-1646662674.jpeg' },
                { id: '12', title: 'Movie 12', image: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/8f24fb5d-0bc9-479f-86dd-de69da69c7e1.jpeg' },
                
              ]}
              itemsPerSlide={7}
            />
          </div>
      </Layout>
      <Modal 
        isActive={modalActive}
        closeModal={closeModal}
      >
        <MovieDetail 
          scores={ {imdb: 5.2, tmdb: 6 }}
          classification={12}
          title='Las hijas del Reich'
          description='Inglaterra 1939. Thomas Miller es un profesor de inglés que ha aceptado un puesto de última hora en la escuela Augusta-Victoria en la costa sur inglesa a la que los nazis alemanes de alto rango envían a sus hijas. Bajo la atenta mirada de la directora, la Señorita Rocholl, y su devota ayudante Ilse Keller, las chicas practican inglés y aprenden a representar el ideal de la mujer alemana. La aparición del cuerpo sin vida de un antiguo profesor de la escuela pondrá en jaque el prestigio de la institución y las vidas de todos los implicados.'
          genres={[
            {
              id: 1,
              image: 'https://images-2.rakuten.tv/storage/list-image/brandable-photo/cdca468c-0072-4f3d-9250-807407ac72aa.png',
              name: 'Action'
            },
            {
              id: 2,
              image: 'https://images-2.rakuten.tv/storage/list-image/brandable_photo/37b14f48-2c22-4ee7-a1b6-84b2f5bb5f9b-adventure-1591342700.png',
              name: 'Adventure'
            },
            {
              id: 3,
              image: 'https://images-1.rakuten.tv/storage/list-image/brandable_photo/afbcfed0-7e7c-422b-9073-a4062bf882d9-science-fiction-1591342717.png',
              name: 'Animation'
            },
        ]}
        />
      </Modal>
    </div>
  );  
}

export default App;