/* eslint-disable react/no-unescaped-entities */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/css/style.css'
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Categories from './components/common/Categories';
import About from './components/common/About';

<style lang="scss">@import "./assets/styles/styles.scss";</style>;
function App() {
    // false for <Home />
    let showCategories = false;

    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            {showCategories && <Categories />}
            <About />
            <Footer />
        </>
    );
}

export default App;
