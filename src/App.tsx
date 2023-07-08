import React from 'react';
import Layout from './Components/Layout/Layout';
import { Carousel } from 'react-responsive-carousel';
import MovieCarousel from './Components/Carousel/MovieCarousel/MovieCarousel';
import CarouselSection from './Components/Carousel/CarouselSection/CarouselSection';
import Modal from './Components/Layout/Modal/Modal';

function App() {

  return (
    <div className="App">
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
      <Modal>
        <div>Modal Content</div>
      </Modal>
    </div>
  );  
}

export default App;