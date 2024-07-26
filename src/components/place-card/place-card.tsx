import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { firstLetterToUppercase } from '../../utils/util';
import OfferMark from '../offer-mark/offer-mark';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
import OfferRating from '../offer-rating/offer-rating';
import { OFFER_PATH, ratingClassNamePrefix } from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
    rating
  } = offer;

  return (
    <article className="cities__card place-card">
      {isPremium ? <OfferMark /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${OFFER_PATH}${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferBookmarkButton isActive={isFavorite} />
        </div>
        <OfferRating classNamePrefix={ratingClassNamePrefix.PlaceCard} rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{firstLetterToUppercase(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
