import ProductCard from '../common/ProductCard';
import Categories from '../common/Categories';
import About from '../common/About';

export default function ProductList(props) {
    const products = props.products.filter(
        (product) => product.category === props.category
    );
    const productCards = products.map((product, index) => (
        <ProductCard
            key={product.id}
            id={product.id}
            isReversed={(index + 1) % 2 === 0}
            isNew={product.new}
            productName={product.name}
            category={product.category}
            productDescription={product.description}
            imageMobile={product['product-img']['mobile']}
            imageTablet={product['product-img']['tablet']}
            imageDesktop={product['product-img']['desktop']}
            imageAlt={product.name}
        />
    ));

    return (
        <>
            <section className="product-list">
                <div className="product-list__heading-container">
                    <h1 className="product-list__heading heading-medium-grows light-text">
                        {props.category}
                    </h1>
                </div>
                <div className="product-list__container container">
                    {productCards}
                </div>
            </section>
            <Categories
                categoriesImg={props.categoriesImg}
                className="margin-t-lg margin-b-lg"
            />
            <About />
        </>
    );
}
