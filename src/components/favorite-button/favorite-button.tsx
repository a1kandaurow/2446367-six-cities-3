import { useActionCreators } from '../../hooks/store';
import { useAuth } from '../../hooks/user-authorization';
import { useNavigate } from 'react-router-dom';
import { memo, useCallback, useState } from 'react';

import classNames from 'classnames';

import { favoritesActions } from '../../store/slices/favorites';
import { AppRoute } from '../../utils/data';

type FavoriteButtonProps = {
  className: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerID: string;
  width?: number;
};

const enum Default {
  HeightCoefficient = 18 / 17,
}

function BaseFavoriteButton({
  className = 'place-card',
  isFavorite: isFavoriteProp = false,
  offerID,
  width = 18,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);
  const isAuthorized = useAuth();
  const navigate = useNavigate();

  const isActiveButton = isAuthorized && isFavorite;

  const favoriteLabel = `${isFavoriteProp ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${className}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isActiveButton },
    'button',
  );

  const height = width * Default.HeightCoefficient;

  const { changeFavorite } = useActionCreators(favoritesActions);

  const handleClick = useCallback(() => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login);
    }

    changeFavorite({
      offerID,
      status: Number(!isFavorite),
    });

    setIsFavorite((prev) => !prev);
  }, [changeFavorite, isAuthorized, isFavorite, navigate, offerID]);

  return (
    <button className={favoriteClass} onClick={handleClick} type="button">
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export const FavoriteButton = memo(BaseFavoriteButton);
