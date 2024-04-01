import { useState, useEffect } from 'react';
import { getImageUrl, formatPrice, removeCategory } from '../../scripts/utils';
import Input from '../common/Input';
import InputRadio from '../common/InputRadio';
import BackBtn from '../common/BackBtn';
import OrderPopup from '../common/OrderPopup';

export default function Checkout(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        payment: '',
        emoneyNumber: '',
        emoneyPin: '',
    });

    const [showOrderPopup, setShowOrderPopup] = useState(false);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);

    const totalPrice = props.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const shipping = totalPrice && 50;
    const vat = 0.2 * totalPrice;
    const grandTotal = totalPrice + shipping + vat;

    const items = props.cart.map((item, index) => (
        <div key={index} className="checkout__summary-product-container">
            <div className="checkout__summary-product-img-container">
                <img
                    className="checkout__summary-product-img"
                    src={getImageUrl(item['cart-img'])}
                    alt={item.name}
                />
            </div>
            <div className="checkout__summary-product-info-container">
                <h3 className="checkout__summary-product-name">
                    {removeCategory(item.name)}
                </h3>
                <p className="checkout__summary-product-price">
                    {formatPrice(item.price)}
                </p>
            </div>
            <p className="checkout__summary-product-quantity">
                x{item.quantity}
            </p>
        </div>
    ));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prev) => ({
            ...prev,
            order: {
                items: props.cart,
                totalPrice,
                shipping,
                vat,
                grandTotal,
            },
        }));
        setShowOrderPopup(true);
    };

    const checkRequiredInputs = () => {
        const {
            name,
            email,
            phone,
            address,
            zip,
            city,
            country,
            payment,
            emoneyNumber,
            emoneyPin,
        } = formData;

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            phone.trim() === '' ||
            address.trim() === '' ||
            zip.trim() === '' ||
            city.trim() === '' ||
            country.trim() === ''
        ) {
            return false; // Return false if any of the required inputs are empty
        }

        if (payment === 'cash') {
            return true; // Return true if payment is 'cash' (no need to check emoneyNumber and emoneyPin)
        }

        if (emoneyNumber.trim() === '' || emoneyPin.trim() === '') {
            return false; // Return false if emoneyNumber or emoneyPin is empty when payment is not 'cash'
        }

        return true; // Return true if all required inputs are filled
    };

    useEffect(() => {
        setDisableSubmitBtn(!checkRequiredInputs());
    }, [formData]);

    return (
        <section className="checkout">
            <form onSubmit={handleSubmit}>
                <div className="checkout__container container">
                    <BackBtn />
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
                            value={formData.name}
                            onChange={handleChange}
                            required={true}
                        />

                        <Input
                            className="checkout__input--email"
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="abdulwahabse@outlook.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required={true}
                        />

                        <Input
                            className="checkout__input--phone"
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            placeholder="+49 333 1234567"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required={true}
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
                            value={formData.address}
                            onChange={handleChange}
                            required={true}
                        />

                        <Input
                            className="checkout__input--zip"
                            id="zip"
                            label="ZIP Code"
                            type="text"
                            placeholder="66125"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            required={true}
                        />

                        <Input
                            className="checkout__input--city"
                            id="city"
                            label="City"
                            type="text"
                            placeholder="Saarbrücken"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required={true}
                        />

                        <Input
                            className="checkout__input--country"
                            id="country"
                            label="Country"
                            type="text"
                            placeholder="Germany"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required={true}
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
                            onChange={handleChange}
                            checked={formData.payment === 'emoney'}
                            required={true}
                        />

                        <InputRadio
                            className="checkout__input--cash"
                            id="cash"
                            label="Cash on Delivery"
                            name="payment"
                            value="cash"
                            onChange={handleChange}
                            checked={formData.payment === 'cash'}
                            required={true}
                        />

                        {formData.payment === 'emoney' ? (
                            <>
                                <Input
                                    className="checkout__input--emoney-number"
                                    id="emoneyNumber"
                                    label="e-Money Number"
                                    type="number"
                                    placeholder="435235335"
                                    name="emoneyNumber"
                                    value={formData.emoneyNumber}
                                    onChange={handleChange}
                                    required={formData.payment === 'emoney'}
                                />

                                <Input
                                    className="checkout__input--emoney-pin"
                                    id="emoneyPin"
                                    label="e-Money PIN"
                                    type="number"
                                    placeholder="1234"
                                    name="emoneyPin"
                                    value={formData.emoneyPin}
                                    onChange={handleChange}
                                    required={formData.payment === 'emoney'}
                                />
                            </>
                        ) : (
                            <div className="checkout__cod-container">
                                <img
                                    className="checkout__cod-img"
                                    src={getImageUrl(
                                        'icons/icon-cash-on-delivery.svg'
                                    )}
                                    alt=""
                                />
                                <p className="paragraph-in-light-bg">
                                    The ‘Cash on Delivery’ option enables you to
                                    pay in cash when our delivery courier
                                    arrives at your residence. Just make sure
                                    your address is correct so that your order
                                    will not be cancelled.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="checkout__summary-container">
                        <h2 className="checkout__summary-heading">Summary</h2>
                        <div className="checkout__summary-products-container">
                            {items}
                        </div>
                        <p className="checkout__summary-label checkout__summary-label--sub-total">
                            Total
                        </p>
                        <p className="checkout__summary-value checkout__summary-value--sub-total">
                            {formatPrice(totalPrice)}
                        </p>
                        <p className="checkout__summary-label checkout__summary-label--shipping">
                            Shipping
                        </p>
                        <p className="checkout__summary-value checkout__summary-value--shipping">
                            {formatPrice(shipping)}
                        </p>
                        <p className="checkout__summary-label checkout__summary-label--vat">
                            VAT (Included)
                        </p>
                        <p className="checkout__summary-value checkout__summary-value--vat">
                            {formatPrice(vat)}
                        </p>
                        <p className="checkout__summary-label checkout__summary-label--grand-total">
                            Grand Total
                        </p>
                        <p className="checkout__summary-value checkout__summary-value--grand-total">
                            {formatPrice(grandTotal)}
                        </p>

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            disabled={disableSubmitBtn}
                            className="checkout__summary-btn btn btn-primary"
                        >
                            Continue & Pay
                        </button>
                    </div>
                </div>
            </form>
            {showOrderPopup && (
                <OrderPopup
                    cart={props.cart}
                    grandTotal={grandTotal}
                    showOrderPopup={showOrderPopup}
                    setShowOrderPopup={setShowOrderPopup}
                />
            )}
        </section>
    );
}
