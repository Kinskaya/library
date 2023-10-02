import { Navigation } from '../../components/navigation/navigation';
import { CardList } from '../../components/card-list/card-list';

import './index.css';

export const MainPage = () =>
  (
    <section className='main-page'>
      <div className='main-info'>
        <div className='main-container'>
          <Navigation />
          <div className='content'>
            <CardList />
          </div>
        </div>
      </div>
    </section>
  );

