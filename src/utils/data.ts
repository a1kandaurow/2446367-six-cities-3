// перечисление маршрутов страниц приложения
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

// перечисление статуса авторизации
export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

// перечисление преобразования звезд рейтинга
export enum WidthRating {
  '20%' = 1,
  '40%',
  '60%',
  '80%',
  '100%',
}

// массив значений рейтинга
export const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not-bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

// массив наименований городов
export const cities = [
  { id: 0, title: 'Paris' },
  { id: 1, title: 'Cologne' },
  { id: 2, title: 'Brussels' },
  { id: 3, title: 'Amsterdam' },
  { id: 4, title: 'Hamburg' },
  { id: 5, title: 'Dusseldorf' },
];
