import { useState } from 'react';
import ProductCardSm from '../common/ProductCardSm';
import Categories from '../common/Categories';
import About from '../common/About';
import BackBtn from '../common/BackBtn';
import { useParams } from 'react-router-dom';
import { getImageUrl, formatPrice, formatHeading } from '../../scripts/utils';

export default function ProductDetails(props) {
    const { id } = useParams();
    const product = props.products.find((product) => product.id === Number(id));

    const [quantity, setQuantity] = useState(1);

    const desktopMainImg = getImageUrl(product['product-img']['desktop']);
    const tabletMainImg = getImageUrl(product['product-img']['tablet']);
    const mobileMainImg = getImageUrl(product['product-img']['mobile']);

    const galleryImgs = product.gallery.map((item) => {
        const desktop = getImageUrl(item.desktop);
        const tablet = getImageUrl(item.tablet);
        const mobile = getImageUrl(item.mobile);
        return {
            desktop,
            tablet,
            mobile,
        };
    });

    let otherProducts = props.products
        .filter((product) => product.id !== Number(id))
        .slice(0, 3)
        .map((product, index) => {
            let number;
            if (index === 0) {
                number = 'one';
            } else if (index === 1) {
                number = 'two';
            } else if (index === 2) {
                number = 'three';
            }

            return (
                <ProductCardSm
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    productName={formatHeading(product.name)}
                    imgDesktop={getImageUrl(product['product-img']['desktop'])}
                    imgTablet={getImageUrl(product['product-img']['tablet'])}
                    imgMobile={getImageUrl(product['product-img']['mobile'])}
                    alt={product.name}
                    className={`product-details__other-product--${number}`}
                />
            );
        });

    const includedElements = product.includes.map((item, index) => {
        return (
            <div
                key={index}
                className="product-details__inluded-item-container"
            >
                <span className="product-details__included-quantity">
                    {item.quantity}x
                </span>
                <span className="product-details__included-item">
                    {item.item}
                </span>
            </div>
        );
    });

    const handleAddToCart = () => {
        const newCart = [...props.cart];
        const index = newCart.findIndex((item) => item.id === Number(id));
        if (index === -1) {
            newCart.push({ ...product, quantity });
        } else {
            newCart[index].quantity += quantity;
        }
        props.setCart(newCart);
        setQuantity(1);
    };

    const handlePlusBtn = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleMinusBtn = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <>
            <section className="product-details">
                <div className="product-details__container container">
                    <BackBtn className="product-details__back-btn-container" />
                    {/* Main Image */}
                    <div className="product-details__image-container">
                        <picture>
                            <source
                                media="(min-width: 77.56em)"
                                srcSet={desktopMainImg}
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet={tabletMainImg}
                            />
                            <img
                                alt={product.name}
                                className="product-details__image"
                                src={mobileMainImg}
                            />
                        </picture>
                    </div>
                    {/* Description */}
                    <div className="product-details__description-container">
                        {product.new && (
                            <h3 className="product-details__highlighted highlighted-text dark-primary">
                                New Product
                            </h3>
                        )}

                        <h2 className="product-details__heading heading-medium">
                            {product.name}
                        </h2>
                        <p className="product-details__desription paragraph">
                            {product.description}
                        </p>
                        <p className="product-details__price">
                            {' '}
                            {formatPrice(product.price)}
                        </p>
                        <div className="product-details__cart-container">
                            <div className="product-details__quantity-container">
                                <button
                                    onClick={handleMinusBtn}
                                    className="product-details__quantity-btn"
                                >
                                    -
                                </button>
                                <span className="product-details__quantity-text">
                                    {quantity}
                                </span>
                                <button
                                    onClick={handlePlusBtn}
                                    className="product-details__quantity-btn"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="product-details__cart-btn btn btn-primary"
                            >
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
                        {product.features}
                    </p>

                    {/* In the Box */}
                    <div className="product-details__included-heading">
                        <h2 className=" heading-medium-grows-2">IN THE BOX</h2>
                    </div>

                    <div className="product-details__included-items-container">
                        {includedElements}
                    </div>
                    {/* Gallery */}
                    <div className="product-details__gallery-container">
                        <div className="product-details__gallery-item-container--one">
                            <picture>
                                <source
                                    media="(min-width: 77.56em)"
                                    srcSet={galleryImgs[0].desktop}
                                />
                                <source
                                    media="(min-width: 37.56em)"
                                    srcSet={galleryImgs[0].tablet}
                                />
                                <img
                                    alt={product.name}
                                    className="product-details__gallery-image"
                                    src={galleryImgs[0].mobile}
                                />
                            </picture>
                        </div>
                        <div className="product-details__gallery-item-container--two">
                            <picture>
                                <source
                                    media="(min-width: 77.56em)"
                                    srcSet={galleryImgs[1].desktop}
                                />
                                <source
                                    media="(min-width: 37.56em)"
                                    srcSet={galleryImgs[1].tablet}
                                />
                                <img
                                    alt={product.name}
                                    className="product-details__gallery-image"
                                    src={galleryImgs[1].mobile}
                                />
                            </picture>
                        </div>
                        <div className="product-details__gallery-item-container--three">
                            <picture>
                                <source
                                    media="(min-width: 77.56em)"
                                    srcSet={galleryImgs[2].desktop}
                                />
                                <source
                                    media="(min-width: 37.56em)"
                                    srcSet={galleryImgs[2].tablet}
                                />
                                <img
                                    alt={product.name}
                                    className="product-details__gallery-image"
                                    src={galleryImgs[2].mobile}
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
                            {otherProducts}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Categories
                    categoriesImg={props.categoriesImg}
                    className="product-details__categories margin-t-lg margin-b-lg"
                />
            </section>
            <About />
        </>
    );
}
