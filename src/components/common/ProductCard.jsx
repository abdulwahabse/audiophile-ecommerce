export default function ProductCard(props) {
    console.log(props.isReversed && 'reversed');
    return (
        <article
            className={`product-card ${
                props.isReversed && 'product-card__reversed'
            }`}
        >
            <div className="product-card__image-container">
                <picture>
                    <source
                        media="(min-width: 77.56em)"
                        srcSet={props.imageDesktop}
                    />
                    <source
                        media="(min-width: 37.56em)"
                        srcSet={props.imageTablet}
                    />
                    <img
                        alt={props.imageAlt}
                        className="product-card__image"
                        src={props.imageMobile}
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
                <p className="product-card__desription paragraph">
                    {props.productDescription}
                </p>
                <button className="product-card__btn btn btn-primary">
                    See Product
                </button>
            </div>
        </article>
    );
}
