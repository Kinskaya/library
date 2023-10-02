import React, { useContext } from 'react';
import { data } from '../../data';
import { Card, ICard } from '../card/card';
import { Context } from '../../context';

export const CardList = () => {
  const { view } = useContext(Context);
  const className = `content__body content__body_${view}`;

  return (
    <div className={className}>
      {data.books.map((book: ICard) => (
        <Card
          key={book.id}
          id={book.id}
          image={book.image}
          starImage={book.starImage}
          name={book.name}
          author={book.author}
          bookedDate={book.bookedDate}
          isBooked={book.isBooked}
          isImage={book.isImage}
          star={book.star}
          category={book.category}
          aboutBook={book.aboutBook}
          reviews={book.reviews}
        />
      ) )
      }
    </div>
  );
}
