import { Link } from 'react-router-dom';

export default function ProductCardSm(props) {
    return (
        <div className={`product-card-sm ${props.className}`}>
            <div className="product-card-sm__image-container">
                <picture>
                    <source
                        media="(min-width: 77.56em)"
                        srcSet={props.imgDesktop}
                    />
                    <source
                        media="(min-width: 37.56em)"
                        srcSet={props.imgTablet}
                    />
                    <img
                        alt={props.alt}
                        className="product-card-sm__image"
                        src={props.imgMobile}
                    />
                </picture>
            </div>
            <h2 className="product-card-sm__heading heading-medium text-center">
                {props.productName}
            </h2>
            <Link
                to={`/${props.category}/${props.id}`}
                className="product-card-sm__btn btn btn-primary"
            >
                See Product
            </Link>
        </div>
    );
}
