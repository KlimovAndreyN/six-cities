import { Offer } from '../../types/offer';
import Mark from '../mark/mark';
import OfferLink from '../offer-link/offer-link';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Price from '../price/price';
import Rating from '../rating/rating';
import { upFirstLetter } from '../../utils/util';
import { ClassNamePrefix } from '../../const';

type PlaceCardInfoProps = {
  additionalImageClassName: string;
  imageWidth: string;
  imageHeight: string;
  additionalInfoClassName?: string;
  offer: Offer;
}

function PlaceCardInfo(prop: PlaceCardInfoProps): JSX.Element {
  const {
    additionalImageClassName,
    imageWidth,
    imageHeight,
    additionalInfoClassName,
    offer
  } = prop;
  const {
    id,
    type,
    title,
    price,
    rating,
    isPremium,
    isFavorite,
    previewImage
  } = offer;

  return (
    <>
      {isPremium ? <Mark className="place-card__mark" /> : null}
      <div className={`${additionalImageClassName} place-card__image-wrapper`}>
        <OfferLink offerId={id}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </OfferLink>
      </div>
      <div className={`${additionalInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <Price classNamePrefix={ClassNamePrefix.PLACE_CARD} price={price} />
          <BookmarkButton classNamePrefix={ClassNamePrefix.PLACE_CARD} isActive={isFavorite} />
        </div>
        <Rating
          ratingClassName="place-card__rating"
          starsClassName="place-card__stars"
          rating={rating}
        />
        <h2 className="place-card__name">
          <OfferLink offerId={id}>
            {title}
          </OfferLink>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </>
  );
}

export default PlaceCardInfo;
