import type { CityName } from '../../../../types/city';

type EmptyMainSectionProps = {
  city: CityName;
};

export default function EmptyMainSection({ city }: EmptyMainSectionProps) {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {city}
        </p>
      </div>
    </section>
  );
}
