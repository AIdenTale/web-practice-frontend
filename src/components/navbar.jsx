import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-content">
        <Link to='/'><LogoIcon width={130} height={30} /></Link>

        <ul className="Navbar-links">
          <Link to='/'>Персонажи</Link>
          <Link to='/'>Новости</Link>
          <Link to='/'>Обновления</Link>
          <Link to='/'>Форум</Link>
        </ul>

        <div className="Navbar-btns">
          <button>Вход</button>
          <button>Играть</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;