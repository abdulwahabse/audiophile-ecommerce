import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function FeatureMedTwo(props) {
    const featuredProduct = props.products.find(
        (product) =>
            product.featured.isFeatured === true &&
            product.featured.on === 'featured-product-mg-two'
    );

    const desktopImg = getImageUrl(featuredProduct.featured.img.desktop);
    const tabletImg = getImageUrl(featuredProduct.featured.img.tablet);
    const mobileImg = getImageUrl(featuredProduct.featured.img.mobile);
    const name = featuredProduct.featured.name || featuredProduct.name;

    return (
        <article className="feature-md-2">
            <div className="feature-md-2__container container">
                <div className="feature-md-2__image-container">
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
                            alt="YX1 Earphones"
                            className="feature-md-2__image"
                            src={mobileImg}
                        />
                    </picture>
                </div>
                <div className="feature-md-2__text-container">
                    <h2 className="heading-medium">{name}</h2>
                    <Link
                        to={`/${featuredProduct.category}/${featuredProduct.id}`}
                        className="btn btn-outline-secondary"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </article>
    );
}
