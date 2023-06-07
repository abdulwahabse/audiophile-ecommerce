export default function About() {
    return (
        <section className="about margin-t-lg margin-b-lg">
            <div className="about__container container">
                {/* <img
                    className="about__image"
                    src="/src/assets/images/shared/desktop/image-best-gear.jpg"
                    alt="a man wearing headphones"
                /> */}
                <picture>
                    <source
                        media="(min-width: 77.56em)"
                        srcSet="/src/assets/images/shared/desktop/image-best-gear.jpg"
                    />
                    <source
                        media="(min-width: 37.56em)"
                        srcSet="/src/assets/images/shared/tablet/image-best-gear.jpg"
                    />
                    <img
                        alt="a man wearing headphones"
                        className="about__image"
                        src="/src/assets/images/shared/mobile/image-best-gear.jpg"
                    />
                </picture>
                <div className="about__text-container">
                    <h2 className="about__heading heading-medium-grows">
                        BRINGING YOU THE{' '}
                        <span className="primary-text">BEST</span> AUDIO GEAR
                    </h2>
                    <p className="about__paragraph paragraph dark-text">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment
                    </p>
                </div>
            </div>
        </section>
    );
}
