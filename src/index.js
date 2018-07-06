import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import { ProductsProvider } from './contexts/ProductsContext';

ReactDOM.render(
    <ProductsProvider>
        <App />
    </ProductsProvider>,
    document.getElementById('root')
);
registerServiceWorker();
