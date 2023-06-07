export default function FeatureMedTwo() {
    return (
        <article className="feature-md-2">
            <div className="feature-md-2__container container">
                {/* <img
                    className="feature-md-2__image"
                    srcSet="/src/assets/images/home/mobile/image-earphones-yx1.jpg 654w, /src/assets/images/home/tablet/image-earphones-yx1.jpg 678w, /src/assets/images/home/desktop/image-earphones-yx1.jpg 540w"
                    sizes="(max-width: 480px) 86vw, (min-width: 768px) 42vw, (min-width: 992x) 34vw"
                    alt="YX1 Earphones"
                /> */}
                <div className="feature-md-2__image-container">
                    <picture>
                        <source
                            media="(min-width: 77.56em)"
                            srcSet="/src/assets/images/home/desktop/image-earphones-yx1.jpg"
                        />
                        <source
                            media="(min-width: 37.56em)"
                            srcSet="/src/assets/images/home/tablet/image-earphones-yx1.jpg"
                        />
                        <img
                            alt="YX1 Earphones"
                            className="feature-md-2__image"
                            src="/src/assets/images/home/mobile/image-earphones-yx1.jpg"
                        />
                    </picture>
                </div>
                <div className="feature-md-2__text-container">
                    <h2 className="heading-medium">YX1 Earphones</h2>
                    <button className="btn btn-outline-secondary">
                        See Product
                    </button>
                </div>
            </div>
        </article>
    );
}
