import Hero from '../layout/Hero';
import Categories from '../common/Categories';
import FeatureBig from '../common/FeatureBig';
import FeatureMedOne from '../common/FeatureMedOne';
import FeatureMedTwo from '../common/FeatureMedTwo';
import About from '../common/About';

export default function Home(props) {
    return (
        <>
            <Hero products={props.products} />
            <Categories
                categoriesImg={props.categoriesImg}
                className="margin-t-lg margin-b-lg"
            />
            <section aria-label="Featured Products: Top Picks">
                <FeatureBig products={props.products} />
                <FeatureMedOne products={props.products} />
                <FeatureMedTwo products={props.products} />
            </section>
            <About />
        </>
    );
}
