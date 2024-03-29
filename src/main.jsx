import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import './styles/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename={'/audiophile-ecommerce'}>
            <ScrollToTop />
            <App />
        </Router>
    </React.StrictMode>
);
