import {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import chevronIcon from '../../assets/img/menu/chevron-icon.png'
import { data } from '../../data';

import './index.css';

export interface IBookCategory {
  id: number,
  name: string,
  quantity: number,
}

export const Menu = () => {
  const location = useLocation();

  const [isCloseBooks, setCloseBooks] = useState(false);

   const handleToggle = () => {
     setCloseBooks(!isCloseBooks);
  }

  useEffect(() => {
    if (location.pathname !== '/' && !isCloseBooks) {
      setCloseBooks(!isCloseBooks);
    }
  }, [isCloseBooks, location.pathname])

  return (
    <aside className='menu' data-test-id='burger-navigation'>
      {(location.pathname === '/' || location.pathname === '/terms' || location.pathname === '/agreement') &&
      <div className='menu-container'>
        <div className='menu__row'>
          <div className='book-category'>
            <div data-test-id='navigation-showcase'
                 onKeyDown={handleToggle}
                 onClick={handleToggle}
                 aria-hidden='true'
                 className={isCloseBooks ? 'book-category__menu book-category__menu_close' : 'book-category__menu'}>
              <NavLink className='all-books link' to='/'>Витрина книг</NavLink>
              <div className='menu__image'>
                <img src={chevronIcon} alt='chevron-icon'/>
              </div>
            </div>

              <div className={isCloseBooks ? 'book-category__body book-category__body_hidden' : 'book-category__body' }>
                <ul className='book-category__list'>
                  <p className='book-category__title' data-test-id='navigation-books'>
                    Все книги
                  </p>
                  {data.bookCategories.map((category: IBookCategory) =>
                    (
                      <li>
                        <NavLink key={category.id} to='/'>{category.name}
                          <span>{category.quantity}</span>
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
          </div>
          <NavLink data-test-id='navigation-terms' className='terms-link link' to='terms'
            >Правила пользования
          </NavLink>
          <NavLink data-test-id='navigation-contract'
                   className='agreement-link link' to='agreement'
            >Договор оферты
          </NavLink>
        </div>
      </div>}
    </aside>
  )
}
