import Hero from '../layout/Hero';
import Categories from '../common/Categories';
import FeatureBig from '../common/FeatureBig';
import FeatureMedOne from '../common/FeatureMedOne';
import FeatureMedTwo from '../common/FeatureMedTwo';
import About from '../common/About';

export default function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <section>
                <FeatureBig />
                <FeatureMedOne />
                <FeatureMedTwo />
            </section>
        </div>
    );
}
