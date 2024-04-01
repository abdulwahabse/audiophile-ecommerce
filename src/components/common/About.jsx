import { getImageUrl } from '../../scripts/utils';

export default function About() {
    const desktopImg = getImageUrl('images/shared/desktop/image-best-gear.jpg');
    const tabletImg = getImageUrl('images/shared/tablet/image-best-gear.jpg');
    const mobileImg = getImageUrl('images/shared/mobile/image-best-gear.jpg');

    return (
        <section className="about margin-t-lg margin-b-lg">
            <h3 className="visually-hidden">About Us</h3>
            <div className="about__container container">
                <picture>
                    <source media="(min-width: 77.56em)" srcSet={desktopImg} />
                    <source media="(min-width: 37.56em)" srcSet={tabletImg} />
                    <img
                        alt="a man wearing headphones"
                        className="about__image"
                        src={mobileImg}
                    />
                </picture>
                <div className="about__text-container">
                    <h4 className="about__heading heading-medium-grows">
                        BRINGING YOU THE{' '}
                        <span className="primary-text">BEST</span> AUDIO GEAR
                    </h4>
                    <p className="about__paragraph paragraph-in-light-bg">
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
