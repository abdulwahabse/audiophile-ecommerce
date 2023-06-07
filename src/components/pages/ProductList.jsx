import ProductCard from '../common/ProductCard';

export default function ProductList() {
    return (
        <section className="product-list">
            <div className="product-list__heading-container">
                <h2 className="product-list__heading heading-medium-grows light-text">
                    Headphones
                </h2>
            </div>
            <div className="product-list__container container">
                <ProductCard
                    isReversed={false}
                    isNew={true}
                    productName="XX99 Mark II"
                    category="Headphones"
                    productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                    imageMobile="/src/assets/images/product-zx9-speaker/mobile/image-product.jpg"
                    imageTablet="/src/assets/images/product-zx9-speaker/tablet/image-product.jpg"
                    imageDesktop="/src/assets/images/product-zx9-speaker/desktop/image-product.jpg"
                />
                <ProductCard
                    isReversed={true}
                    isNew={false}
                    productName="XX99 Mark II"
                    category="Headphones"
                    productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                    imageMobile="/src/assets/images/product-zx9-speaker/mobile/image-product.jpg"
                    imageTablet="/src/assets/images/product-zx9-speaker/tablet/image-product.jpg"
                    imageDesktop="/src/assets/images/product-zx9-speaker/desktop/image-product.jpg"
                />
            </div>
        </section>
    );
}
