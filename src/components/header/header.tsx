import './index.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const router = useNavigate();

  const handleClick = () => router(`/`);

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__row'>
          <div className='header__logo' onClick={handleClick} onKeyDown={handleClick} aria-hidden='true' />
          <h1 className='header__title'>
            Библиотека
          </h1>
          <div className='user'>
            <p className='user__name'>Привет, Иван!</p>
            <div className='user__avatar' />
          </div>
        </div>
      </div>
    </header>
  );
}
