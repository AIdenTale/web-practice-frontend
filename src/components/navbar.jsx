import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar-absolute">
      <nav className="Navbar">
        <div className="Navbar-content container">
          <Link to='/general'><LogoIcon width={130} height={30} /></Link>

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
    </div>
  );
}

export default Navbar;