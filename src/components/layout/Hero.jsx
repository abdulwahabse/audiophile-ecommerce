import { Link } from 'react-router-dom';
import { getImageUrl } from '../../scripts/utils';

export default function Hero(props) {
    const featuredProduct = props.products.find(
        (product) =>
            product.featured.isFeatured === true &&
            product.featured.on === 'header'
    );

    const style = {
        '--background-image-hero-mb': `url(${getImageUrl(
            featuredProduct.featured.img.mobile
        )})`,
        '--background-image-hero-tb': `url(${getImageUrl(
            featuredProduct.featured.img.tablet
        )})`,
        '--background-image-hero-dt': `url(${getImageUrl(
            featuredProduct.featured.img.desktop
        )})`,
    };

    return (
        <section className="hero" style={style}>
            <div className="hero__container container padding-tb-lg ">
                {featuredProduct.new && (
                    <h3 className="highlighted-text dark-text">New Product</h3>
                )}
                <article>
                    <h1 className="hero__main-heading heading-large light-text">
                        {featuredProduct.name}
                    </h1>
                    <p className="hero__paragraph paragraph">
                        {featuredProduct.featured.text}
                    </p>
                    <Link
                        to={`/${featuredProduct.category}/${featuredProduct.id}`}
                        className="btn btn-primary"
                    >
                        SEE PRODUCT
                    </Link>
                </article>
            </div>
        </section>
    );
}
