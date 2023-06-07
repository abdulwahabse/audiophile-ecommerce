export default function CartPopup(props) {
    return (
        <div className="cart-popup">
            <div className="cart-popup__container">
                <h2 className="cart-popup__cart-heading">Cart (3)</h2>
                <button className="cart-popup__empty-cart-btn">
                    Remove All
                </button>
                <div className="cart-popup__product-container">
                    <div className="cart-popup__product-img-container">
                        <img
                            className="cart-popup__product-img"
                            src="/src/assets/images/cart/image-xx99-mark-two-headphones.jpg"
                            alt="XX99 Mark II Headphones"
                        />
                    </div>
                    <div className="cart-popup__product-info-container">
                        <h3 className="cart-popup__product-name">XX9 MK II</h3>
                        <p className="cart-popup__product-price">$299</p>
                    </div>
                </div>
                <div className="cart-popup__quantity-container">
                    <button className="cart-popup__quantity-btn">-</button>
                    <span className="cart-popup__quantity-text">1</span>
                    <button className="cart-popup__quantity-btn">+</button>
                </div>
                <p className="cart-popup__total-text">Total</p>
                <p className="cart-popup__total-price">$299</p>
                <button className="cart-popup__checkout-btn btn btn-primary">
                    Checkout
                </button>
            </div>
        </div>
    );
}
