import { useState } from 'react';
import Navigation from '../common/Navigation';
import Categories from '../common/Categories';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';
import logo from '/assets/icons/logo.svg';

export default function Header(props) {
    const [showCartPopup, setShowCartPopup] = useState(false);
    // const logo = getImageUrl('assets/icons/logo.svg');

    const totalQuantity = props.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleCartClick = () => {
        props.setShowCartPopup(true);
    };

    const handleCartBackgroundClick = (e) => {
        console.log('clicked', e.target);
        if (
            e.target.className === 'header__categories-popup' ||
            e.target.className.startsWith('categories__')
        ) {
            setShowCartPopup(false);
            document.getElementById('navi-toggle').checked = false;
            console.log('❌');
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <input
                        type="checkbox"
                        className="header__checkbox"
                        id="navi-toggle"
                        onClick={() => {
                            setShowCartPopup((prevState) => !prevState);
                        }}
                    />
                    <label htmlFor="navi-toggle" className="header__button">
                        <span className="header__icon">&nbsp;</span>
                    </label>
                    <Link to="/" className="header__logo-link">
                        <img
                            className="header__logo"
                            src={logo}
                            alt="audiophile logo"
                        />
                    </Link>

                    <Navigation className="header__navigation" />

                    <button
                        className="header__cart-container"
                        onClick={handleCartClick}
                    >
                        <svg
                            role="img"
                            aria-labelledby="cart-title"
                            className="header__cart-icon"
                            width="23"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title id="cart-title">Cart Icon</title>
                            <path
                                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                                fill="#FFF"
                                fill-rule="nonzero"
                            />
                        </svg>
                        {props.cart.length ? (
                            <span className="header__cart-badge">
                                {totalQuantity}
                            </span>
                        ) : null}
                    </button>
                </div>
            </div>
            {showCartPopup && (
                <div
                    className="header__categories-popup"
                    onClick={handleCartBackgroundClick}
                >
                    <div className="header__categories-popup-container">
                        <Categories categoriesImg={props.categoriesImg} />
                    </div>
                </div>
            )}
        </header>
    );
}
