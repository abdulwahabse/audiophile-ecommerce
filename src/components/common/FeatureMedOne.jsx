export default function FeatureMedOne() {
    return (
        <article className="feature-md-1">
            <div className="feature-md-1__container container">
                <div className="feature-md-1__content">
                    <picture>
                        <source
                            media="(min-width: 77.56em)"
                            srcSet="/src/assets/images/home/desktop/image-speaker-zx7.jpg"
                        />
                        <source
                            media="(min-width: 37.56em)"
                            srcSet="/src/assets/images/home/tablet/image-speaker-zx7.jpg"
                        />
                        <img
                            alt="ZX7 Speaker"
                            className="feature-md-1__image"
                            src="/src/assets/images/home/mobile/image-speaker-zx7.jpg"
                        />
                    </picture>
                    <div className="feature-md-1__text-container">
                        <h2 className="heading-medium">ZK9 Speaker</h2>
                        <button className="btn btn-outline-secondary">
                            See Product
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
