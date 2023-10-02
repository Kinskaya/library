import './index.css';
import facebookIcon from '../../assets/img/footer/icon-facebook.png';
import instagramIcon from '../../assets/img/footer/icon-instagram.png';
import vkIcon from '../../assets/img/footer/icon-vk.png';
import linkedinIcon from '../../assets/img/footer/icon-linkedin.png';

export const Footer = () => (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__row'>
          <div className='footer__info'>
            © 2020-2023 Cleverland. Все права защищены.
          </div>
          <div className='footer__icon-social'>
            <ul className='icon-social__list'>
              <li>
                <img src={facebookIcon}  alt='icon-facebook'/>
              </li>
              <li>
                <img src={instagramIcon} alt='icon-instagram' />
              </li>
              <li>
                <img src={vkIcon}  alt='icon-vk' />
              </li>
              <li>
                <img src={linkedinIcon} alt='icon-linkedin' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
);
