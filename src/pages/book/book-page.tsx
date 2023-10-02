import {useState} from 'react';
import { useParams } from 'react-router-dom';

import bookImage from '../../assets/img/book-page/book-image.png';
import bookNoImage from '../../assets/img/book-page/book-noImage.png';
import chevronIcon from '../../assets/img/reviews/chevron-icon.png';
import userIcon from '../../assets/img/reviews/user-icon.png';
import { ICard } from '../../components/card/card';
import { NoStar } from '../../components/no-star/no-star';
import { Slider } from '../../components/slider/slider';
import { Star } from '../../components/star/star';
import { data } from '../../data';

import './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const BookPage = () => {
  const params = useParams();

  const [isShowReviews, setShowReviews] = useState(true);

  const handleToggleReviews = () => {
    setShowReviews(!isShowReviews);
  }

  return (
    <section className='book-page'>
      {data.books.map((book: ICard) => {
        if (book.id.toString() === params.id) {
          return (
            <div className='book-page__content'>
              <header className='book-page__header'>
                <p>{book.category} / {book.name}</p>
              </header>
              <div className='book-page__book'>
                {book.id === 3 ?
                  <Slider />
                    :
                  <div className={book.isImage ? 'book__image' : 'book__image book__image_no-image'}>
                    <img src={book.isImage ? bookImage : bookNoImage} alt='book-img'/>
                  </div>}
                {/* <div className={book.isImage ? 'book__image' : 'book__image book__image_no-image'}>
                  <img src={book.isImage ? bookImage : bookNoImage} alt='book-img'/>
                </div> */}
                <div className='book__body'>
                  <div className='book__description'>
                    <p className='book__name'>{book.name}</p>
                    <p className='book__author'>{book.author}</p>
                  </div>
                  <button type='button'
                          className={book.isBooked ? 'card__btn' : 'card__btn card__btn_active'}>
                    {book.bookedDate}
                  </button>
                  <div className='book__about'>
                    <p className='about__title title'>О книге</p>
                    <p className='about__text'>{book.aboutBook}</p>
                  </div>
                </div>
              </div>
              <div className='book-page__book-content'>
                <div className='book-content__rating'>
                  <p className='rating__title title'>Рейтинг</p>
                  <div className='star__body'>
                    { [...Array(book.star)].map(() => <Star/>) }
                    { [...Array(5 - book.star)].map(() => <NoStar/>) }
                    {book.star > 0 ? <span>{book.star}</span>
                      :
                      <p className='star__body card__star_noStar'>ещё нет оценок</p>
                    }
                  </div>
                </div>
                <div className='book-content__book-details'>
                  <p className='book-details__title title'>Подробная информация</p>
                  <div className='book-details__row'>
                    <div className='table-left'>
                      <div className='table-name'>Издательство</div>
                      <div className='table-data'>Питер</div>
                      <div className='table-name'>Год издания</div>
                      <div className='table-data'>2019</div>
                      <div className='table-name'>Страниц</div>
                      <div className='table-data'>288</div>
                      <div className='table-name'>Переплёт</div>
                      <div className='table-data'>Мягкая обложка</div>
                      <div className='table-name'>Формат</div>
                      <div className='table-data'>70х100</div>
                    </div>
                     <div className='table-right'>
                      <div className='table-name'>Жанр</div>
                      <div className='table-data'>Компьютерная литература</div>
                      <div className='table-name'>Вес</div>
                      <div className='table-data'>370 г</div>
                      <div className='table-name'>ISBN</div>
                      <div className='table-data'>978-5-4461-0923-4</div>
                      <div className='table-name'>Изготовитель</div>
                      <div className='table-data'>
                        ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                      </div>
                    </div>
                  </div>
                </div>
                <div className='book-content__reviews'>
                  <div className={book.reviews > 0 ? 'reviews__title' : 'reviews__title reviews__title_noReviews'}>
                    <div className='title'>Отзывы
                      <span className='reviews__number'>{book.reviews}</span>
                      <button data-test-id='button-hide-reviews' type='button'
                              className={isShowReviews ? 'reviews__showBtn' : 'reviews__hideBtn'}
                              onClick={handleToggleReviews}
                              onKeyDown={handleToggleReviews}>
                        <img src={chevronIcon} alt='chevron-icon'/>
                      </button>
                    </div>
                  </div>
                  {book.reviews > 0 &&
                  <div className={isShowReviews ? 'reviews__row' : 'reviews__row_hidden'}>
                    <div className='reviews__item'>
                      <div className='review__user'>
                        <div className='review__user-image'>
                          <img src={userIcon} alt='user-icon' />
                        </div>
                        <div className='review__user-name'>
                          Иван Иванов
                        </div>
                        <div className='review__user-date'>
                          5 января 2019
                        </div>
                      </div>
                      <div className='review__rating'>
                        <div className='star__body'>
                          {[...Array(4)].map(() => <Star />)}
                          {[...Array(1)].map(() => <NoStar />)}
                        </div>
                      </div>
                    </div>
                    <div className='reviews__item'>
                      <div className='review__user'>
                        <div className='review__user-image'>
                          <img src={userIcon} alt='user-icon' />
                        </div>
                        <div className='review__user-name'>
                          Николай Качков
                        </div>
                        <div className='review__user-date'>
                          20 июня 2018
                        </div>
                      </div>
                      <div className='review__rating'>
                        <div className='star__body'>
                          {[...Array(4)].map(() => <Star />)}
                          {[...Array(1)].map(() => <NoStar />)}
                        </div>
                      </div>
                      <div className='review__text'>
                        <p>
                          Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект
                          не оставляет шанса для анализа существующих паттернов поведения. Для современного мира
                          внедрение современных методик предоставляет широкие возможности для позиций, занимаемых
                          участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе
                          интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример
                          современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного
                          выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные
                          исключительно синтетически, превращены в посмешище, хотя само их существование приносит
                          несомненную пользу обществу.
                        </p>
                      </div>
                    </div>
                    <div className='reviews__item'>
                      <div className='review__user'>
                        <div className='review__user-image'>
                          <img src={userIcon} alt='user-icon' />
                        </div>
                        <div className='review__user-name'>
                          Екатерина Беляева
                        </div>
                        <div className='review__user-date'>
                          18 февраля 2018
                        </div>
                      </div>
                      <div className='review__rating'>
                        <div className='star__body'>
                          {[...Array(4)].map(() => <Star />)}
                          {[...Array(1)].map(() => <NoStar />)}
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                  <button type='button' className='review__btn'>
                    оценить книгу
                  </button>
                </div>
              </div>
            </div>
              )
            }

            return null
          })}
      </section>
  );}
