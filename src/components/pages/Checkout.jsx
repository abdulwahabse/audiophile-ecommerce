import Input from '../common/Input';
import InputRadio from '../common/InputRadio';

export default function Checkout() {
    return (
        <section className="checkout">
            <div className="checkout__container container">
                <a href="#" className="checkout__back-link back-link">
                    Go Back
                </a>
                <div className="checkout__form-container">
                    <h2 className="checkout__form-heading heading-medium">
                        Checkout
                    </h2>

                    <p className="checkout__form-subheading checkout__form-subheading--billing">
                        Billing Details
                    </p>

                    <Input
                        className="checkout__input--name"
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Abdul Wahab"
                        name="name"
                        value=""
                    />

                    <Input
                        className="checkout__input--email"
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="abdulwahabse@outlook.com"
                        name="email"
                        value=""
                    />

                    <Input
                        className="checkout__input--phone"
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        placeholder="+49 333 1234567"
                        name="phone"
                        value=""
                    />

                    <p className="checkout__form-subheading checkout__form-subheading--shipping">
                        Shipping Info
                    </p>

                    <Input
                        className="checkout__input--address"
                        id="address"
                        label="Your Address"
                        type="text"
                        placeholder="Saarbrücken, Germany"
                        name="address"
                        value=""
                    />

                    <Input
                        className="checkout__input--zip"
                        id="zip"
                        label="ZIP Code"
                        type="text"
                        placeholder="66125"
                        name="zip"
                        value=""
                    />

                    <Input
                        className="checkout__input--city"
                        id="city"
                        label="City"
                        type="text"
                        placeholder="Saarbrücken"
                        name="city"
                        value=""
                    />

                    <Input
                        className="checkout__input--country"
                        id="country"
                        label="Country"
                        type="text"
                        placeholder="Germany"
                        name="country"
                        value=""
                    />

                    <p className="checkout__form-subheading checkout__form-subheading--payment">
                        Payment Details
                    </p>

                    <p className="checkout__label checkout__label--payment">
                        Payment Method
                    </p>

                    <InputRadio
                        className="checkout__input--emoney"
                        id="emoney"
                        label="e-Money"
                        name="payment"
                        value="emoney"
                    />

                    <InputRadio
                        className="checkout__input--cash"
                        id="cash"
                        label="Cash on Delivery"
                        name="payment"
                        value="cash"
                    />

                    <Input
                        className="checkout__input--emoney-number"
                        id="emoney-number"
                        label="e-Money Number"
                        type="text"
                        placeholder="435235335"
                        name="emoney-number"
                        value=""
                    />

                    <Input
                        className="checkout__input--emoney-pin"
                        id="emoney-pin"
                        label="e-Money PIN"
                        type="text"
                        placeholder="1234"
                        name="emoney-pin"
                        value=""
                    />
                </div>
                <div className="checkout__summary-container">
                    <h2 className="checkout__summary-heading">Summary</h2>
                    <div className="checkout__summary-product-container">
                        <div className="checkout__summary-product-img-container">
                            <img
                                className="checkout__summary-product-img"
                                src="/src/assets/images/cart/image-xx99-mark-two-headphones.jpg"
                                alt="XX99 Mark II Headphones"
                            />
                        </div>
                        <div className="checkout__summary-product-info-container">
                            <h3 className="checkout__summary-product-name">
                                XX9 MK II
                            </h3>
                            <p className="checkout__summary-product-price">
                                $299
                            </p>
                        </div>
                        <p className="checkout__summary-product-quantity">x3</p>
                    </div>
                    <p className="checkout__summary-label checkout__summary-label--sub-total">
                        Total
                    </p>
                    <p className="checkout__summary-value checkout__summary-value--sub-total">
                        $897
                    </p>
                    <p className="checkout__summary-label checkout__summary-label--shipping">
                        Shipping
                    </p>
                    <p className="checkout__summary-value checkout__summary-value--shipping">
                        $50
                    </p>
                    <p className="checkout__summary-label checkout__summary-label--vat">
                        VAT (Included)
                    </p>
                    <p className="checkout__summary-value checkout__summary-value--vat">
                        $0
                    </p>
                    <p className="checkout__summary-label checkout__summary-label--grand-total">
                        Grand Total
                    </p>
                    <p className="checkout__summary-value checkout__summary-value--grand-total">
                        $947
                    </p>

                    <button className="checkout__summary-btn btn btn-primary">
                        Continue & Pay
                    </button>
                </div>
            </div>
        </section>
    );
}
