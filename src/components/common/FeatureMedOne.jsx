import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function FeatureMedOne(props) {
    const featuredProduct = props.products.find(
        (product) =>
            product.featured.isFeatured === true &&
            product.featured.on === 'featured-product-mg-one'
    );

    const desktopImg = getImageUrl(featuredProduct.featured.img.desktop);
    const tabletImg = getImageUrl(featuredProduct.featured.img.tablet);
    const mobileImg = getImageUrl(featuredProduct.featured.img.mobile);

    return (
        <article className="feature-md-1">
            <div className="feature-md-1__container container">
                <div className="feature-md-1__content">
                    <picture>
                        <source
                            media="(min-width: 77.56em)"
                            srcSet={desktopImg}
                        />
                        <source
                            media="(min-width: 37.56em)"
                            srcSet={tabletImg}
                        />
                        <img
                            alt="ZX7 Speaker"
                            className="feature-md-1__image"
                            src={mobileImg}
                        />
                    </picture>
                    <div className="feature-md-1__text-container">
                        <h2 className="heading-medium">
                            {featuredProduct.name}
                        </h2>
                        <Link
                            to={`/${featuredProduct.category}/${featuredProduct.id}`}
                            className="btn btn-outline-secondary"
                        >
                            See Product
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
