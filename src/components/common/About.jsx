export default function About() {
    return (
        <div className="about margin-t-lg margin-b-lg">
            <div className="about__container container">
                <img
                    className="about__image"
                    src="/src/assets/images/shared/mobile/image-best-gear.jpg"
                    alt="a man wearing headphones"
                />
                <div className="about__text-container">
                    <h2 className="heading-large">
                        BRINGING YOU THE{' '}
                        <span className="primary-text">BEST</span> AUDIO GEAR
                    </h2>
                    <p className="paragraph dark-text">
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
        </div>
    );
}
