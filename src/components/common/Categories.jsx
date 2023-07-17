import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function Categories(props) {
    const earphonesImg = getImageUrl(props.categoriesImg.earphones);
    const speakersImg = getImageUrl(props.categoriesImg.speakers);
    const headphonesImg = getImageUrl(props.categoriesImg.headphones);
    const arrowIcon = getImageUrl('icons/icon-arrow-right.svg');

    return (
        <div className={`categories ${props.className}`}>
            <div className="container">
                {/* headphones category */}
                <Link
                    to="/headphones"
                    className="categories__link categories__link--1"
                >
                    <div className="categories__category">
                        <img
                            className="categories__image"
                            src={headphonesImg}
                            alt="headphones"
                        />
                        <h2 className="categories__heading heading-small">
                            Headphones
                        </h2>
                        <div className="categories__cta">
                            <p className="categories__cta-text categories__cta-text--1">
                                Shop
                            </p>
                            <img
                                className="categories__cta-icon categories__cta-icon--1"
                                src={arrowIcon}
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </Link>
                {/* speakers category */}
                <Link
                    to="/speakers"
                    className="categories__link categories__link--2"
                >
                    <div className="categories__category">
                        <img
                            className="categories__image"
                            src={speakersImg}
                            alt="headphones"
                        />
                        <h2 className="categories__heading heading-small">
                            Speakers
                        </h2>
                        <div className="categories__cta">
                            <p className="categories__cta-text categories__cta-text--2">
                                Shop
                            </p>
                            <img
                                className="categories__cta-icon categories__cta-icon--2"
                                src={arrowIcon}
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </Link>
                {/* earphones category */}
                <Link
                    to="/earphones"
                    className="categories__link categories__link--1"
                >
                    <div className="categories__category">
                        <img
                            className="categories__image categories__image--3"
                            src={earphonesImg}
                            alt="headphones"
                        />
                        <h2 className="categories__heading heading-small">
                            Earphones
                        </h2>
                        <div className="categories__cta">
                            <p className="categories__cta-text categories__cta-text--3">
                                Shop
                            </p>
                            <img
                                className="categories__cta-icon categories__cta-icon--3"
                                src={arrowIcon}
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
