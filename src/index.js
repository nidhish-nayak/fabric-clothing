import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import { AddtocartProvider } from './contexts/addtocart.context';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* UserProvider is added for using Context API with Firebase Auth */}
      <UserProvider>
        <ProductsProvider>
          <AddtocartProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AddtocartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
