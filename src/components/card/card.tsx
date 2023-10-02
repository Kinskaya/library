import { useNavigate } from 'react-router-dom';
import bookImage from '../../assets/img/card/book-image.png';
import bookNoImage from '../../assets/img/card/book-noImage.png';
import './index.css';
import { Star } from '../star/star';
import { NoStar } from '../no-star/no-star';

export interface ICard {
  id: number,
  image: string,
  isImage: boolean,
  star: number,
  starImage: string,
  name: string,
  author: string,
  isBooked: boolean,
  bookedDate: string,
  category: string,
  aboutBook: string,
  reviews: number,
}

export const Card = (item: ICard) => {
  const router = useNavigate();

  const handleClick = () => router(`/books/${item.category}/${item.id}`);

  return (
    <div className='card' data-test-id='card' onClick={handleClick} onKeyDown={handleClick} aria-hidden='true'>
      <div className='card__row'>
        <div className={item.isImage ? 'card__image' : 'card__image card__image_no-image'}>
          <img src={item.isImage ? bookImage : bookNoImage} alt='book-icon'/>
        </div>
        <div className='card__body'>
          {item.star > 0 ?
            <div className='star__body'>
              { [...Array(item.star)].map(() => <Star/>) }
              { [...Array(5 - item.star)].map(() => <NoStar/>) }
            </div>
            :
            <p className='star__body card__star_noStar'>ещё нет оценок</p>
          }
          <div className='card__description'>
            <p className='card__name'>{item.name}</p>
            <p className='card__author'>{item.author}</p>
          </div>
          <button type='button'
                  className={item.isBooked ? 'card__btn' : 'card__btn card__btn_active'}
          >{item.bookedDate}
          </button>
        </div>
      </div>
    </div>
  );
}
