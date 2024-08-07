import { ClassNamePrefix } from '../../const';

type PriceProps = {
  price: number;
  classNamePrefix: ClassNamePrefix;
}

function Price({ price, classNamePrefix }: PriceProps): JSX.Element {
  const divClassName = `${classNamePrefix}__price`;

  return (
    <div className={divClassName}>
      <b className={`${divClassName}-value`}>&euro;{price}</b>
      <span className={`${divClassName}-text`}>{classNamePrefix === ClassNamePrefix.PLACE_CARD ? '&#47;' : ''}&nbsp;night</span>
    </div >
  );
}

export default Price;
