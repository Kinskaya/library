import React, { SyntheticEvent, useContext, useState } from 'react';
import searchIcon from '../../assets/img/navigation/search-icon.png';
import filterIcon from '../../assets/img/navigation/filter-icon.png';
import tileIconActive from '../../assets/img/navigation/tile-icon.png';
import tileIcon from '../../assets/img/navigation/tile-icon2.png';
import menuIcon from '../../assets/img/navigation/menu-icon.png';
import menuIconActive from '../../assets/img/navigation/menu-icon2.png';
import closeIcon from '../../assets/img/navigation/close-icon.png';
import { Context } from '../../context';
import './index.css';

export const Navigation = () => {
  const [isActive, setActive] = useState(true);
  const { setView } = useContext(Context);

  const handleToggle = (event: SyntheticEvent) => {
    setActive(!isActive);

    return event.currentTarget.className === 'button_tile' ? setView('till') : setView('list');
  }

  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    if (window.innerWidth === 320) {
      setSearchActive(!isSearchActive);
    }
  }

  return (
    <nav className='navigation'>
      <div className={isSearchActive ? 'navigation__row navigation__row_active' : 'navigation__row'}>
        <div className='navigation__items'>
          <div className='search__item'>
            <img data-test-id='button-search-open' src={searchIcon} className='search__icon' alt='search-icon'
                 onClick={toggleSearch}
                 onKeyDown={toggleSearch}
                 aria-hidden='true'/>
            <input data-test-id='input-search' type='text' placeholder='Поиск книги или автора…'/>
            <button data-test-id='button-search-close' type='button' className='search__closeBtn'
                    onClick={() => setSearchActive(false)}>
              <img src={closeIcon} alt='close-icon'/>
            </button>
          </div>
          <div className='filter__item'>
            <img src={filterIcon} alt='filter-icon' />
            <select>
              <option value='По рейтингу'>По рейтингу</option>
            </select>
          </div>
          <div className='buttons__item'>
            <div data-test-id='button-menu-view-window'
                 onClick={handleToggle} onKeyDown={handleToggle} aria-hidden='true'
                 className={isActive ? 'button_tile active' : 'button_tile'}>
              <img src={isActive ? tileIconActive : tileIcon} alt='tile-icon'/>
            </div>
            <div data-test-id='button-menu-view-list'
                onClick={handleToggle} onKeyDown={handleToggle} aria-hidden='true'
                className={isActive ? 'button_menu' : 'button_menu active'}>
              <img src={isActive ? menuIcon : menuIconActive} alt='menu-icon'/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
