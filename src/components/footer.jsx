import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__grid">
          <div className="footer__mark">
            <Link className="footer__logo" to='/'><LogoIcon width={130} height={30} /></Link>
            <p className="footer__body">При поддержке Московского Политеха</p>
          </div>

          <div className="footer__links">
            <ul className="footer__list">
              <li className="footer__list-item footer__list-title">О нас</li>
              <Link className="footer__list-item footer__body" to="/">Об игре</Link>
              <Link className="footer__list-item footer__body" to="/">Персонажи</Link>
            </ul>

            <ul className="footer__list">
              <li className="footer__list-item footer__list-title">Сообщество</li>
              <Link className="footer__list-item footer__body" to="/">Форум</Link>
              <Link className="footer__list-item footer__body" to="/">Новости</Link>
              <Link className="footer__list-item footer__body" to="/">Обновления</Link>
            </ul>

            <ul className="footer__list">
              <li className="footer__list-item footer__list-title">Помощь</li>
              <Link className="footer__list-item footer__body" to="/">Вопрос-ответ</Link>
              <Link className="footer__list-item footer__body" to="/">Служба поддержки</Link>
            </ul>
          </div>
        </div>

        <div className="footer__author">
          <p className="footer__body">&#9400; 2023</p>
          <p className="footer__body">Разработчики игры ___________</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;