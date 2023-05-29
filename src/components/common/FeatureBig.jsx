export default function FeatureBig() {
    return (
        <article className="feature-big">
            <div className="container">
                <div className="feature-big__content">
                    <div className="feature-big__image-container">
                        <img
                            className="feature-big__image"
                            src="/src/assets/images/home/desktop/image-speaker-zx9.png"
                            alt="ZX9 Speaker"
                        />
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
