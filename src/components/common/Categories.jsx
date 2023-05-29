export default function Categories() {
    return (
        <div className="categories margin-t-lg margin-b-lg">
            <div className="container">
                {/* headphones category */}
                <a href="#" className="categories__link categories__link--1">
                    <div className="categories__category">
                        <img
                            className="categories__image"
                            src="/src/assets/images/shared/desktop/image-headphones.png"
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
                                src="/src/assets/icons/icon-arrow-right.svg"
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </a>
                {/* speakers category */}
                <a href="#" className="categories__link categories__link--2">
                    <div className="categories__category">
                        <img
                            className="categories__image"
                            src="/src/assets/images/shared/desktop/image-speakers.png"
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
                                src="/src/assets/icons/icon-arrow-right.svg"
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </a>
                {/* earphones category */}
                <a href="#" className="categories__link categories__link--1">
                    <div className="categories__category">
                        <img
                            className="categories__image categories__image--3"
                            src="/src/assets/images/shared/desktop/image-earphones.png"
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
                                src="/src/assets/icons/icon-arrow-right.svg"
                                alt="arrow right"
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
