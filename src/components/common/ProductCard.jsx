import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function ProductCard(props) {
    const desktopImg = getImageUrl(props.imageDesktop);
    const tabletImg = getImageUrl(props.imageTablet);
    const mobileImg = getImageUrl(props.imageMobile);

    return (
        <article
            className={`product-card ${
                props.isReversed && 'product-card__reversed'
            }`}
        >
            <div className="product-card__image-container">
                <picture>
                    <source media="(min-width: 77.56em)" srcSet={desktopImg} />
                    <source media="(min-width: 37.56em)" srcSet={tabletImg} />
                    <img
                        alt={props.imageAlt}
                        className="product-card__image"
                        src={mobileImg}
                    />
                </picture>
            </div>
            <div className="product-card__description-container">
                {props.isNew && (
                    <h3 className="product-card__highlighted highlighted-text dark-primary">
                        New Product
                    </h3>
                )}
                <h2 className="product-card__heading heading-medium">
                    {props.productName} {props.category}
                </h2>
                <p className="product-card__desription paragraph-in-light-bg">
                    {props.productDescription}
                </p>
                <Link
                    to={`/${props.category}/${props.id}`}
                    className="product-card__btn btn btn-primary"
                >
                    See Product
                </Link>
            </div>
        </article>
    );
}
