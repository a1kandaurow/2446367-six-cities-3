import SortingForm from '../sorting-form/sorting-form';
import OfferList from '../offer-list/offer-list';
import { Offer, Offers } from '../../mocks/mock-types/offers';

type FilledMainPageProps = {
  offersCount: number;
  mockOffers: Offers;
  onActiveOffer: (offer?: Offer) => void;
};

export default function FilledMainPage({
  offersCount,
  mockOffers,
  onActiveOffer,
}: FilledMainPageProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <SortingForm />
      <OfferList mockOffers={mockOffers} onActiveOffer={onActiveOffer} />
    </section>
  );
}
