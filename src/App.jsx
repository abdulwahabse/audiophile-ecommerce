/* eslint-disable react/no-unescaped-entities */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/css/style.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/common/About';
import Categories from './components/common/Categories';
import CartPopup from './components/common/CartPopup';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import ProductDetails from './components/pages/ProductDetails';
import Checkout from './components/pages/Checkout';

<style lang="scss">@import "./assets/styles/styles.scss";</style>;
function App() {
    // false for <Home />
    let showCategories = false;

    return (
        <>
            <Header />
            <main>
                {/* <Home /> */}
                {/* <ProductList /> */}
                {/* <ProductDetails /> */}
                {/* <CartPopup /> */}
                <Checkout />
            </main>
            {showCategories && <Categories />}
            {/* <About /> */}
            <Footer />
        </>
    );
}

export default App;
