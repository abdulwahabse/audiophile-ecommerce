/* eslint-disable react/no-unescaped-entities */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/css/style.css'
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

<style lang="scss">@import "./assets/styles/styles.scss";</style>;
function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    );
}

export default App;
