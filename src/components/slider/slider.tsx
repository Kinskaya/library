import { useState } from 'react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';

import bookImage from '../../assets/img/book-page/book-image.png';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Scrollbar]);

export interface ISlide {
  id: number,
  srcImg: string
}


export const Slider = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>();

  const slides: ISlide[] = [
    {id: 1, srcImg: bookImage},
    {id: 2, srcImg: bookImage},
    {id: 3, srcImg: bookImage},
    {id: 4, srcImg: bookImage},
    {id: 5, srcImg: bookImage},
  ]

  return (
       <div className='slides-container'>
         <Swiper
           id='main'
           navigation={true}
           pagination={true}
           thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
           controller={{ control: controlledSwiper }}
           spaceBetween={0}
           slidesPerView={1}

           onInit={(swiper) => console.log('Swiper initialized!', swiper)}
           onSlideChange={(swiper) => {
             console.log('Slide index changed to: ', swiper.activeIndex);
           }}
           onReachEnd={() => console.log('Swiper end reached')}>
           {slides.map((el) =>
             <div className="swiper-wrapper">
               <SwiperSlide key={el.id}>
                 <img
                   src={el.srcImg}
                   alt={`slide ${el.id}`}
                 />
               </SwiperSlide>
             </div>
           )}
         </Swiper>
         <Swiper
           id='thumbs'
           spaceBetween={30}
           slidesPerView={4}
           onSwiper={setThumbsSwiper}
           watchSlidesProgress={true}
           scrollbar={true}>

           {slides.map((el) =>
             <div className="swiper-wrapper">
               <SwiperSlide key={el.id}>
                 <img
                   src={el.srcImg}
                   alt={`slide ${el.id}`}
                 />
               </SwiperSlide>
             </div>
           )}
         </Swiper>
       </div>
  );
}
