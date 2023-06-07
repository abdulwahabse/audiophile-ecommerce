export default function FeatureBig() {
    return (
        <article className="feature-big">
            <div className="container">
                <div className="feature-big__content">
                    <div>
                        <picture className="feature-big__image-container">
                            <source
                                media="(min-width: 77.56em)"
                                srcSet="/src/assets/images/home/desktop/image-speaker-zx9.png"
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet="/src/assets/images/home/tablet/image-speaker-zx9.png"
                            />
                            <img
                                alt="ZX9 Speaker"
                                className="feature-big__image"
                                src="/src/assets/images/home/mobile/image-speaker-zx9.png"
                            />
                        </picture>
                    </div>
                    <div className="feature-big__text">
                        <h2 className="feature-big__heading heading-large light-text">
                            ZX9 Speaker
                        </h2>
                        <p className="feature-big__paragraph paragraph">
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <a href="#" className="btn btn-secondary">
                            See Product
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
