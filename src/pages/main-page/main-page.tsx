import EmptyMainPage from './empty-main-page';
import { createMainPage } from './main-page-util';
import NoEmptyMainPage from './no-empty-main-page';

type MainOffersProps = {
  offersCount: number;
};

export default function MainPage({ offersCount }: MainOffersProps) {
  const { emptyMain, emptyPageMainClassName, emptyPageContainerClassName } =
    createMainPage(offersCount);
  return (
    <main className={`page__main page__main--index ${emptyPageMainClassName}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div
          className={`cities__places-container container ${emptyPageContainerClassName}`}
        >
          {emptyMain ? (
            <EmptyMainPage />
          ) : (
            <NoEmptyMainPage offersCount={offersCount} />
          )}
          <div className="cities__right-section">
            {!emptyMain && <section className="cities__map map"></section>}
          </div>
        </div>
      </div>
    </main>
  );
}
