import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className='bg-white'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><img src={Logo} alt="" /></Link>
          <button className="navbar-toggler" type="button">
            Меню
            <span className="navbar-toggler-icon ms-2"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 mt-3 me-auto">
              <li className="nav-item">
                <NavLink className={`${styles.navLink}`} to="/specialists">Специалисты</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/about">О клинике</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/blog">Блог</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/reviews">Отзывы</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/offers">Акции и скидки</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/contact">Контакты</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <ul className='navbar-nav gap-2 mt-3'>
              <li className="nav-item">
                
                <select class="form-select form-select-lg" aria-label="Large select example">
                  <option selected>Краснодар</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="nav-item">
                <select class="form-select form-select-lg" aria-label="Large select example">
                  <option selected>Адреса клиник</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="nav-item mt-2">
                <NavLink className="btn btn-dark px-4 w-100" to="/login">Войти</NavLink>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    </header>
  );
}