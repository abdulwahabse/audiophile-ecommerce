import { Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartPopup from './components/common/CartPopup';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import ProductDetails from './components/pages/ProductDetails';
import Checkout from './components/pages/Checkout';
import data from './data/data.json';

<style lang="scss">@import "./assets/styles/styles.scss";</style>;

function App() {
    const [cart, setCart] = useState([]);
    const [showCartPopup, setShowCartPopup] = useState(false);

    useEffect(() => {
        console.log('cart', cart);
    }, [cart]);

    return (
        <>
            <Header
                cart={cart}
                setShowCartPopup={setShowCartPopup}
                categoriesImg={data.data.categories}
            />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home
                            products={data.data.products}
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route exact path="/headphones">
                        <ProductList
                            products={data.data.products}
                            category="headphones"
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route exact path="/speakers">
                        <ProductList
                            products={data.data.products}
                            category="speakers"
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route exact path="/earphones">
                        <ProductList
                            products={data.data.products}
                            category="earphones"
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route path="/headphones/:id">
                        <ProductDetails
                            products={data.data.products}
                            cart={cart}
                            setCart={setCart}
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route path="/speakers/:id">
                        <ProductDetails
                            products={data.data.products}
                            cart={cart}
                            setCart={setCart}
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route path="/earphones/:id">
                        <ProductDetails
                            products={data.data.products}
                            cart={cart}
                            setCart={setCart}
                            categoriesImg={data.data.categories}
                        />
                    </Route>
                    <Route path="/checkout">
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
                {showCartPopup && (
                    <CartPopup
                        setShowCartPopup={setShowCartPopup}
                        cart={cart}
                        setCart={setCart}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
