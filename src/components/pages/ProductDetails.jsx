import ProductCardSm from '../common/ProductCardSm';

export default function ProductDetails() {
    return (
        <section className="product-details">
            <div className="product-details__container container">
                <div className="product-details__back-btn-container">
                    <a href="#" className="back-link">
                        Go Back
                    </a>
                </div>
                {/* Main Image */}
                <div className="product-details__image-container">
                    <picture>
                        <source
                            media="(min-width: 77.56em)"
                            srcSet="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg"
                        />
                        <source
                            media="(min-width: 37.56em)"
                            srcSet="/src/assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg"
                        />
                        <img
                            alt="XX99 Mark II Headphones"
                            className="product-details__image"
                            src="/src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg"
                        />
                    </picture>
                </div>
                {/* Description */}
                <div className="product-details__description-container">
                    <h3 className="product-details__highlighted highlighted-text dark-primary">
                        New Product
                    </h3>
                    <h2 className="product-details__heading heading-medium">
                        XX99 MARK II HEADPHONES
                    </h2>
                    <p className="product-details__desription paragraph">
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </p>
                    <p className="product-details__price">$ 2,999</p>
                    <div className="product-details__cart-container">
                        <div className="product-details__quantity-container">
                            <button className="product-details__quantity-btn">
                                -
                            </button>
                            <span className="product-details__quantity-text">
                                1
                            </span>
                            <button className="product-details__quantity-btn">
                                +
                            </button>
                        </div>
                        <button className="product-details__cart-btn btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* Features */}
                <div className="product-details__features-heading-container">
                    <h2 className="product-details__features-heading heading-medium-grows-2">
                        Features
                    </h2>
                </div>
                <p className="product-details__features-description paragraph">
                    Featuring a genuine leather head strap and premium earcups,
                    these headphones deliver superior comfort for those who like
                    to enjoy endless listening. It includes intuitive controls
                    designed for any situation. Whether you’re taking a business
                    call or just in your own personal space, the auto on/off and
                    pause features ensure that you’ll never miss a beat. The
                    advanced Active Noise Cancellation with built-in equalizer
                    allow you to experience your audio world on your terms. It
                    lets you enjoy your audio in peace, but quickly interact
                    with your surroundings when you need to. Combined with
                    Bluetooth 5. 0 compliant connectivity and 17 hour battery
                    life, the XX99 Mark II headphones gives you superior sound,
                    cutting-edge technology, and a modern design aesthetic.
                </p>

                {/* In the Box */}
                <div className="product-details__included-heading">
                    <h2 className=" heading-medium-grows-2">IN THE BOX</h2>
                </div>

                <div className="product-details__included-items-container">
                    <div className="product-details__inluded-item-container">
                        <span className="product-details__included-quantity">
                            1x
                        </span>
                        <span className="product-details__included-item">
                            Headphone Unit
                        </span>
                    </div>
                    <div className="product-details__inluded-item-container">
                        <span className="product-details__included-quantity">
                            2x
                        </span>
                        <span className="product-details__included-item">
                            Replacement Earcups
                        </span>
                    </div>
                    <div className="product-details__inluded-item-container">
                        <span className="product-details__included-quantity">
                            1x
                        </span>
                        <span className="product-details__included-item">
                            User Manual
                        </span>
                    </div>
                    <div className="product-details__inluded-item-container">
                        <span className="product-details__included-quantity">
                            1x
                        </span>
                        <span className="product-details__included-item">
                            3.5mm 5m Audio Cable
                        </span>
                    </div>
                    <div className="product-details__inluded-item-container">
                        <span className="product-details__included-quantity">
                            1x
                        </span>
                        <span className="product-details__included-item">
                            Travel Bag
                        </span>
                    </div>
                </div>
                {/* Gallery */}
                <div className="product-details__gallery-container">
                    <div className="product-details__gallery-item-container--one">
                        <picture>
                            <source
                                media="(min-width: 77.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
                            />
                            <img
                                alt="XX99 Mark II Headphones"
                                className="product-details__gallery-image"
                                src="/src/assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
                            />
                        </picture>
                    </div>
                    <div className="product-details__gallery-item-container--two">
                        <picture>
                            <source
                                media="(min-width: 77.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
                            />
                            <img
                                alt="XX99 Mark II Headphones"
                                className="product-details__gallery-image"
                                src="/src/assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
                            />
                        </picture>
                    </div>
                    <div className="product-details__gallery-item-container--three">
                        <picture>
                            <source
                                media="(min-width: 77.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet="/src/assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"
                            />
                            <img
                                alt="XX99 Mark II Headphones"
                                className="product-details__gallery-image"
                                src="/src/assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
                            />
                        </picture>
                    </div>
                </div>
                {/* Other products */}
                <div className="product-details__other-products-container">
                    <h2 className="product-details__other-products-heading heading-medium-grows-2">
                        You May Also Like
                    </h2>
                    <div className="product-details__other-products-list">
                        <ProductCardSm className="product-details__other-product--one" />
                        <ProductCardSm className="product-details__other-product--two" />
                        <ProductCardSm className="product-details__other-product--three" />
                    </div>
                </div>
            </div>
        </section>
    );
}
