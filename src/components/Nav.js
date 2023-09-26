import { Link } from 'react-router-dom';
import css from './Nav.module.css';
export default function Nav() {
  return (
    <nav>
      <ul className={css.navcontainer}>
        <li>
          <Link className={css.home} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={css.home} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}
