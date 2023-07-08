import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link to='/'><LogoIcon width={130} height={30} /></Link>

        <ul className="navbar__list">
          <Link className="navbar__link" to='/'>Персонажи</Link>
          <Link className="navbar__link" to='/'>Новости</Link>
          <Link className="navbar__link" to='/'>Обновления</Link>
          <Link className="navbar__link" to='/'>Форум</Link>
        </ul>

        <div className="navbar__controls">
          <button className='navbar__button'>Вход</button>
          <button className='navbar__button'>Играть</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;