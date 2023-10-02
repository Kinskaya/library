import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IBookCategory } from '../menu/menu';
import './index.css';
import chevronIcon from '../../assets/img/menu/chevron-icon.png';
import { data } from '../../data';



export const BurgerMenu = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleToggle = () => {
    toggleMenu(!isMenuOpen);
  }

  const [isCategoriesOpen, setCategoriesMode] = useState(false);

  const toggleCategoriesMode = () => {
    setCategoriesMode(!isCategoriesOpen);
  }

  return (
    <div className='burger-menu'>
      <div data-test-id='button-burger'
           className={!isMenuOpen ? 'burger-menu__button' : 'burger-menu__button burger-menu__button_active'}
           onClick={handleToggle}
           onKeyDown={handleToggle}
           aria-hidden='true'>
        <span className='burger-menu__lines' />
      </div>
      <div className='burger-menu__content'>
        <div className='content__row'>
          <aside className='menu'>
            <div className='menu-container'>
              <div className='menu__row'>
                <div className='book-category'>
                  <div data-test-id='burger-showcase'
                       onKeyDown={toggleCategoriesMode}
                       onClick={toggleCategoriesMode}
                       aria-hidden='true'
                       className={!isCategoriesOpen ? 'book-category__menu' : 'book-category__menu book-category__menu_close'}>
                    <NavLink className='all-books link' to='/'>
                      Витрина книг
                    </NavLink>
                    <div className='menu__image'>
                      <img src={chevronIcon} alt='chevron-icon'/>
                    </div>
                  </div>
                    <div className={isCategoriesOpen ? 'book-category__body book-category__body_hidden' : 'book-category__body' }>
                      <ul className='book-category__list'>
                        <p data-test-id='burger-books' className='book-category__title'>
                          Все книги
                        </p>
                        {data.bookCategories.map((category: IBookCategory) =>
                          (
                            <li>
                              <NavLink key={category.id} to='/'
                                       onClick={handleToggle}
                                       onKeyDown={handleToggle}
                              >{category.name}
                                <span>{category.quantity}</span>
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                </div>
                <NavLink data-test-id='burger-terms'
                         className='terms-link link' to='terms'
                         onClick={handleToggle}
                         onKeyDown={handleToggle}
                >Правила пользования
                </NavLink>
                <NavLink data-test-id='burger-contract'
                         className='agreement-link link' to='agreement'
                         onClick={handleToggle}
                         onKeyDown={handleToggle}
                >Договор оферты
                </NavLink>
              </div>
            </div>
          </aside>
          <div className="burger-menu__items">
            <a className='burger-menu__item' href="#">Профиль</a>
            <a className='burger-menu__item' href="#">Выход</a>
          </div>
        </div>
      </div>
    </div>
  )
}
