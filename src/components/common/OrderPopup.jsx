import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getImageUrl, formatPrice, removeCategory } from '../../scripts/utils';

export default function OrderPopup(props) {
    const [showAll, setShowAll] = useState(false);

    const items = props.cart
        .slice(0, showAll ? props.cart.length : 1)
        .map((item, index) => (
            <div key={index} className="order-popup__product-container">
                <div className="order-popup__product-img-container">
                    <img
                        className="order-popup__product-img"
                        src={getImageUrl(item['cart-img'])}
                        alt={item.name}
                    />
                </div>
                <div className="order-popup__product-info-container">
                    <h3 className="order-popup__product-name">
                        {removeCategory(item.name)}
                    </h3>
                    <p className="order-popup__product-price">
                        {formatPrice(item.price)}
                    </p>
                </div>
                <p className="order-popup__product-quantity">
                    x{item.quantity}
                </p>
            </div>
        ));

    const handleMoreProductsClick = () => {
        setShowAll(!showAll);
    };

    const handleBackgroundClick = (e) => {
        if (
            e.target.className === 'order-popup' ||
            e.target.id === 'back-to-home-btn'
        ) {
            props.setShowOrderPopup(false);
        }
        console.log('BACKGROUND CLICK', e.target.className);
    };

    const moreProducts =
        props.cart.length > 1 ? (
            showAll ? (
                <p
                    className="order-popup__more-products paragraph"
                    onClick={handleMoreProductsClick}
                >
                    View Less
                </p>
            ) : (
                <p
                    className="order-popup__more-products paragraph"
                    onClick={handleMoreProductsClick}
                >
                    and {props.cart.length - 1} other item(s)
                </p>
            )
        ) : null;

    return (
        <div className="order-popup" onClick={handleBackgroundClick}>
            <div className="order-popup__container">
                <img
                    className="order-popup__check-img"
                    src={getImageUrl('icons/icon-check-mark.svg')}
                    alt="check mark"
                />
                <h2 className="order-popup__title heading-medium-grows-2">
                    Thank you for your order!
                </h2>
                <p className="order-popup__text paragraph">
                    You will receive an email confirmation shortly.
                </p>
                <div className="order-popup__order-info-container">
                    <div className="order-popup__products-container">
                        {items}

                        <p className="order-popup__more-products paragraph">
                            {moreProducts}
                        </p>
                    </div>
                    <div className="order-popup__price-container">
                        <p className="order-popup__price-title paragraph">
                            Grand Total
                        </p>
                        <p className="order-popup__price paragraph">
                            {formatPrice(props.grandTotal)}
                        </p>
                    </div>
                </div>
                <Link
                    to="/"
                    className="order-popup__btn btn btn-primary"
                    id="back-to-home-btn"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
