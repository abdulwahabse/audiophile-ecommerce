import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function FeatureBig(props) {
    const featuredProduct = props.products.find(
        (product) =>
            product.featured.isFeatured === true &&
            product.featured.on === 'featured-product-big'
    );

    const desktopImg = getImageUrl(featuredProduct.featured.img.desktop);
    const tabletImg = getImageUrl(featuredProduct.featured.img.tablet);
    const mobileImg = getImageUrl(featuredProduct.featured.img.mobile);

    return (
        <article className="feature-big">
            <div className="container">
                <div className="feature-big__content">
                    <div>
                        <picture className="feature-big__image-container">
                            <source
                                media="(min-width: 77.56em)"
                                srcSet={desktopImg}
                            />
                            <source
                                media="(min-width: 37.56em)"
                                srcSet={tabletImg}
                            />
                            <img
                                alt="ZX9 Speaker"
                                className="feature-big__image"
                                src={mobileImg}
                            />
                        </picture>
                    </div>
                    <div className="feature-big__text">
                        <h3 className="feature-big__heading heading-large light-text">
                            {featuredProduct.name}
                        </h3>
                        <p className="feature-big__paragraph paragraph-in-dark-bg">
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Link
                            to={`/${featuredProduct.category}/${featuredProduct.id}`}
                            className="btn btn-secondary"
                        >
                            See Product
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
