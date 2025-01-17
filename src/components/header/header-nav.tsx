import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/data';
import { isUserLogged } from '../../mocks/mock-util';

type HeaderNavProps = {
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
};

export default function HeaderNav({
  favoritesCount,
  authorizationStatus,
}: HeaderNavProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isUserLogged(authorizationStatus) ? (
              <>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </>
            ) : (
              <span className="header__login">Sign in</span>
            )}
          </Link>
        </li>
        {isUserLogged(authorizationStatus) && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
