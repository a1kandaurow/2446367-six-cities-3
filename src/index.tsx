import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './mocks/mock-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    < App
      offersCount = {Setting.OffersCount}
      favoritesCount={Setting.FavoritesCount}
    />
  </React.StrictMode>
);
