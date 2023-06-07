export default function ProductCardSm(props) {
    return (
        <div className={`product-card-sm ${props.className}`}>
            <div className="product-card-sm__image-container">
                <picture>
                    <source
                        media="(min-width: 77.56em)"
                        srcSet="/src/assets/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
                    />
                    <source
                        media="(min-width: 37.56em)"
                        srcSet="/src/assets/images/shared/tablet/image-xx99-mark-one-headphones.jpg"
                    />
                    <img
                        alt="xx99 mark one headphones"
                        className="product-card-sm__image"
                        src="/src/assets/images/shared/mobile/image-xx99-mark-one-headphones.jpg"
                    />
                </picture>
            </div>
            <h2 className="product-card-sm__heading heading-medium">
                XX99 Mark I
            </h2>
            <button className="product-card-sm__btn btn btn-primary">
                See Product
            </button>
        </div>
    );
}
